import { Router } from 'express';
import { query, queryOne } from '../db';
import { requireAuth, requireAppAccess } from '../auth';
import { broadcast } from '../realtime';
import { crudRouter } from '../crud';

// Lighter CRUD for the remaining ops domains — enough structure to back each
// portal's dashboard without overbuilding features the frontend doesn't use yet.
export const opsRouter = Router();
opsRouter.use(requireAuth);

// ---- Roastery ----
opsRouter.get('/roastery/batches', requireAppAccess('roastery'), async (_req, res) => {
  res.json(await query('select * from roast_batches order by started_at desc nulls last'));
});
opsRouter.post('/roastery/batches', requireAppAccess('roastery'), async (req, res) => {
  const { code, origin, profile, kg } = req.body || {};
  if (!code) return res.status(400).json({ error: 'code required' });
  const batch = await queryOne(
    `insert into roast_batches (code, origin, profile, kg, status, started_at) values ($1,$2,$3,$4,'roasting', now()) returning *`,
    [code, origin, profile, kg]
  );
  broadcast('roastery:batch', batch);
  res.status(201).json(batch);
});
opsRouter.patch('/roastery/batches/:id/status', requireAppAccess('roastery'), async (req, res) => {
  const { status } = req.body || {};
  const done = status === 'done';
  const batch = await queryOne(
    `update roast_batches set status = $1, completed_at = case when $2 then now() else completed_at end where id = $3 returning *`,
    [status, done, req.params.id]
  );
  broadcast('roastery:batch', batch);
  res.json(batch);
});
// Green stock is a plain single-table resource — same shared crud helper.
opsRouter.use('/roastery/green-stock', crudRouter({
  table: 'green_stock',
  appKey: 'roastery',
  orderBy: 'estate',
  insertFields: ['estate', 'kg'],
  requiredFields: ['estate'],
  broadcastChannel: 'roastery:green-stock',
  skipRequireAuth: true, // opsRouter already runs requireAuth for every route in this file
}));

// ---- Supply chain ----
// Suppliers is a plain single-table resource — built on the shared crud
// helper (list/create/patch/delete) instead of hand-rolled routes.
opsRouter.use('/supply/suppliers', crudRouter({
  table: 'suppliers',
  appKey: 'supply',
  orderBy: 'name',
  insertFields: ['name', 'category', 'reliability'],
  requiredFields: ['name'],
  skipRequireAuth: true,
}));
opsRouter.get('/supply/purchase-orders', requireAppAccess('supply'), async (_req, res) => {
  res.json(await query(`
    select po.*, s.name as supplier_name from purchase_orders po
    left join suppliers s on s.id = po.supplier_id order by po.created_at desc`));
});
opsRouter.post('/supply/purchase-orders', requireAppAccess('supply'), async (req, res) => {
  const { supplierId, amount } = req.body || {};
  const po = await queryOne('insert into purchase_orders (supplier_id, amount) values ($1,$2) returning *', [supplierId, amount]);
  broadcast('supply:po', po);
  res.status(201).json(po);
});
opsRouter.patch('/supply/purchase-orders/:id/status', requireAppAccess('supply'), async (req, res) => {
  const { status } = req.body || {};
  const po = await queryOne('update purchase_orders set status = $1 where id = $2 returning *', [status, req.params.id]);
  broadcast('supply:po', po);
  res.json(po);
});

// ---- Finance ----
opsRouter.get('/finance/ledger', requireAppAccess('finance'), async (_req, res) => {
  res.json(await query('select * from ledger_entries order by recorded_at desc limit 200'));
});
opsRouter.post('/finance/ledger', requireAppAccess('finance'), async (req, res) => {
  const { account, debit = 0, credit = 0, memo } = req.body || {};
  if (!account) return res.status(400).json({ error: 'account required' });
  const entry = await queryOne('insert into ledger_entries (account, debit, credit, memo) values ($1,$2,$3,$4) returning *', [account, debit, credit, memo]);
  broadcast('finance:entry', entry);
  res.status(201).json(entry);
});

// ---- CRM ----
// Campaigns: list/create/update/delete via the shared crud helper, plus a
// dedicated status sub-action route the Content/CRM UI already calls.
opsRouter.use('/crm/campaigns', crudRouter({
  table: 'campaigns',
  appKey: 'crm',
  orderBy: 'created_at desc',
  insertFields: ['name', 'channel'],
  requiredFields: ['name'],
  broadcastChannel: 'crm:campaign',
  skipRequireAuth: true,
}));
opsRouter.patch('/crm/campaigns/:id/status', requireAppAccess('crm'), async (req, res) => {
  const { status } = req.body || {};
  const campaign = await queryOne('update campaigns set status = $1 where id = $2 returning *', [status, req.params.id]);
  broadcast('crm:campaign', campaign);
  res.json(campaign);
});

// ---- Approvals (Orchestrator human-in-loop) ----
opsRouter.get('/approvals', requireAppAccess('orchestrator'), async (_req, res) => {
  res.json(await query(`select * from approvals where status = 'pending' order by created_at desc`));
});
opsRouter.post('/approvals/:id/decide', requireAppAccess('orchestrator'), async (req, res) => {
  const { approve } = req.body || {};
  const approval = await queryOne(
    `update approvals set status = $1, decided_at = now() where id = $2 returning *`,
    [approve ? 'approved' : 'rejected', req.params.id]
  );
  broadcast('approval:decide', approval);
  res.json(approval);
});
