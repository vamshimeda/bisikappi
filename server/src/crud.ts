import { Router } from 'express';
import { query, queryOne } from './db';
import { requireAuth, requireAppAccess } from './auth';
import { broadcast } from './realtime';

/**
 * Reusable data-access + routing helpers so every domain router (café,
 * roastery, supply, finance, CRM, content…) doesn't hand-roll the same
 * "list / create / patch / delete" or "key -> row upsert" plumbing.
 *
 * Use `crudRouter()` for a plain single-table resource with a numeric/uuid
 * id (suppliers, campaigns, products…). Use `upsertRouter()` for a
 * key -> row dictionary where writes are "insert or update by primary key"
 * (content strings, content lists). Anything with joins, computed defaults
 * beyond a static object, or sub-action routes (e.g. PATCH .../status) stays
 * hand-written — these helpers cover the common shape, not every shape.
 *
 * Table/column names are config passed in by the (trusted, hardcoded) route
 * files in this project, never from request input — assertIdent()/
 * assertOrderBy() below are a fail-fast guard against a typo or a future
 * caller accidentally wiring user input into one of these, not a defense
 * against untrusted callers.
 */

const IDENT = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function assertIdent(name: string, label: string) {
  if (!IDENT.test(name)) throw new Error(`crud.ts: unsafe/invalid identifier for ${label}: "${name}"`);
}
function assertOrderBy(clause: string) {
  if (!/^[a-zA-Z0-9_,.\s]+$/.test(clause)) throw new Error(`crud.ts: unsafe orderBy clause: "${clause}"`);
}

/** Builds `col = $n` SET clauses + a values array from whichever of `fields`
 *  are present in `body`. Shared by crudRouter's PATCH and any hand-written
 *  partial-update route. */
export function buildSet(fields: string[], body: Record<string, any>) {
  const sets: string[] = [];
  const vals: any[] = [];
  fields.forEach((f) => {
    if (body[f] !== undefined) { vals.push(body[f]); sets.push(`${f} = $${vals.length}`); }
  });
  return { sets, vals };
}

export interface CrudOptions {
  table: string;
  idColumn?: string;          // default 'id'
  idType?: 'string' | 'number'; // how to cast :id for delete-broadcast payloads — default 'string'
  appKey: string;             // requireAppAccess() grant needed to mutate (and to read, unless publicRead)
  insertFields: string[];     // whitelist of body keys accepted on POST
  updateFields?: string[];    // whitelist for PATCH — defaults to insertFields
  requiredFields?: string[];  // subset of insertFields that must be present (and non-empty) on POST
  defaults?: (body: any) => Record<string, any> | Promise<Record<string, any>>; // static/computed fields merged in before insert
  orderBy?: string;           // defaults to idColumn
  broadcastChannel?: string;  // realtime event name; delete broadcasts `${channel}-deleted`
  publicRead?: boolean;       // GET needs no auth/app-grant — default false
  skipRequireAuth?: boolean;  // true when mounted under a router that already ran requireAuth (avoids re-verifying the JWT on every route)
}

/** GET list / POST create / PATCH update / DELETE for one table. */
export function crudRouter(opts: CrudOptions) {
  assertIdent(opts.table, 'table');
  const idCol = opts.idColumn || 'id';
  assertIdent(idCol, 'idColumn');
  opts.insertFields.forEach((f) => assertIdent(f, 'insertFields'));
  const updateFields = opts.updateFields || opts.insertFields;
  updateFields.forEach((f) => assertIdent(f, 'updateFields'));
  if (opts.orderBy) assertOrderBy(opts.orderBy);

  const router = Router();
  const authGuard = opts.skipRequireAuth ? [] : [requireAuth];
  const mutateGuards = [...authGuard, requireAppAccess(opts.appKey)];
  const readGuards = opts.publicRead ? [] : mutateGuards;

  router.get('/', ...(readGuards as any), async (_req, res) => {
    res.json(await query(`select * from ${opts.table} order by ${opts.orderBy || idCol}`));
  });

  router.post('/', ...(mutateGuards as any), async (req, res) => {
    const extra = opts.defaults ? await opts.defaults(req.body || {}) : {};
    const body = { ...extra, ...(req.body || {}) };
    if (opts.requiredFields) {
      const missing = opts.requiredFields.filter((f) => body[f] === undefined || body[f] === '');
      if (missing.length) return res.status(400).json({ error: `${missing.join(', ')} required` });
    }
    const cols = opts.insertFields.filter((f) => body[f] !== undefined);
    if (!cols.length) return res.status(400).json({ error: 'no fields provided' });
    const vals = cols.map((c) => body[c]);
    const row = await queryOne(
      `insert into ${opts.table} (${cols.join(',')}) values (${cols.map((_, i) => `$${i + 1}`).join(',')}) returning *`,
      vals
    );
    if (opts.broadcastChannel) broadcast(opts.broadcastChannel, row);
    res.status(201).json(row);
  });

  const updateHandler = async (req: any, res: any) => {
    const { sets, vals } = buildSet(updateFields, req.body || {});
    if (!sets.length) return res.status(400).json({ error: 'no fields to update' });
    vals.push(req.params.id);
    const row = await queryOne(`update ${opts.table} set ${sets.join(', ')} where ${idCol} = $${vals.length} returning *`, vals);
    if (!row) return res.status(404).json({ error: 'not found' });
    if (opts.broadcastChannel) broadcast(opts.broadcastChannel, row);
    res.json(row);
  };
  // Accept both verbs — callers that treat this as a REST "replace the
  // resource" (PUT) and callers doing a partial PATCH mean the same thing
  // here, since only whitelisted fields present in the body are touched.
  router.patch('/:id', ...(mutateGuards as any), updateHandler);
  router.put('/:id', ...(mutateGuards as any), updateHandler);

  router.delete('/:id', ...(mutateGuards as any), async (req, res) => {
    await query(`delete from ${opts.table} where ${idCol} = $1`, [req.params.id]);
    const idVal = opts.idType === 'number' ? Number(req.params.id) : req.params.id;
    if (opts.broadcastChannel) broadcast(`${opts.broadcastChannel}-deleted`, { [idCol]: idVal });
    res.status(204).end();
  });

  return router;
}

export interface UpsertOptions {
  table: string;
  keyColumn: string;
  columns: string[];          // non-key columns, in the order stored/returned
  appKey: string;
  broadcastChannel?: string;
  jsonbColumns?: string[];    // columns to store/read as jsonb
  publicRead?: boolean;       // default true — most content is publicly readable
  validate?: (body: any) => string | null | undefined; // return an error message to reject the write, else null/undefined
  skipRequireAuth?: boolean;
}

/** GET all rows / PUT :key — insert-or-update-by-primary-key. Missing columns
 *  in the PUT body fall back to the existing row's value (partial update),
 *  which also covers "always send every column" callers (full replace). */
export function upsertRouter(opts: UpsertOptions) {
  assertIdent(opts.table, 'table');
  assertIdent(opts.keyColumn, 'keyColumn');
  opts.columns.forEach((c) => assertIdent(c, 'columns'));

  const router = Router();
  const isJson = (c: string) => !!opts.jsonbColumns?.includes(c);
  const authGuard = opts.skipRequireAuth ? [] : [requireAuth];
  const mutateGuards = [...authGuard, requireAppAccess(opts.appKey)];
  const readGuards = opts.publicRead === false ? mutateGuards : [];

  router.get('/', ...(readGuards as any), async (_req, res) => {
    res.json(await query(`select ${opts.keyColumn}, ${opts.columns.join(', ')} from ${opts.table} order by ${opts.keyColumn}`));
  });

  router.put('/:key', ...(mutateGuards as any), async (req, res) => {
    const body = req.body || {};
    const present = opts.columns.filter((c) => body[c] !== undefined);
    if (!present.length) return res.status(400).json({ error: `${opts.columns.join(' and/or ')} required` });
    if (opts.validate) {
      const err = opts.validate(body);
      if (err) return res.status(400).json({ error: err });
    }
    const existing = await queryOne<any>(`select * from ${opts.table} where ${opts.keyColumn} = $1`, [req.params.key]);
    const finalVals = opts.columns.map((c) => (body[c] !== undefined ? body[c] : existing ? existing[c] : (isJson(c) ? [] : '')));
    const castedVals = opts.columns.map((c, i) => (isJson(c) ? JSON.stringify(finalVals[i]) : finalVals[i]));
    const insertVals = [req.params.key, ...castedVals];
    const insertCols = [opts.keyColumn, ...opts.columns];
    const placeholders = insertCols.map((c, i) => `$${i + 1}${isJson(c) ? '::jsonb' : ''}`);
    const updateSet = opts.columns.map((c, i) => `${c} = $${i + 2}${isJson(c) ? '::jsonb' : ''}`).join(', ');
    const row = await queryOne(
      `insert into ${opts.table} (${insertCols.join(',')}) values (${placeholders.join(',')})
       on conflict (${opts.keyColumn}) do update set ${updateSet}, updated_at = now()
       returning ${opts.keyColumn}, ${opts.columns.join(', ')}`,
      insertVals
    );
    if (opts.broadcastChannel) broadcast(opts.broadcastChannel, row);
    res.json(row);
  });

  return router;
}
