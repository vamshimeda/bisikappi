import { Router } from 'express';
import { query, queryOne } from '../db';
import { signToken, hashPassword, verifyPassword, requireAuth, AuthUser } from '../auth';

export const accessRouter = Router();

async function appsForRole(roleKey: string): Promise<string[]> {
  const rows = await query<{ app_key: string }>(
    'select app_key from role_app_grants where role_key = $1', [roleKey]
  );
  return rows.map((r) => r.app_key);
}

// ---- Auth ----
accessRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  const user = await queryOne<{ id: string; email: string; name: string; password_hash: string; role_key: string }>(
    'select id, email, name, password_hash, role_key from users where email = $1', [email]
  );
  if (!user || !(await verifyPassword(password, user.password_hash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const apps = await appsForRole(user.role_key);
  const payload: AuthUser = { sub: user.id, email: user.email, name: user.name, roleKey: user.role_key, apps };
  res.json({ token: signToken(payload), user: payload });
});

accessRouter.post('/auth/register', async (req, res) => {
  const { email, password, name, roleKey } = req.body || {};
  if (!email || !password || !name || !roleKey) return res.status(400).json({ error: 'email, password, name, roleKey required' });
  const role = await queryOne('select key from roles where key = $1', [roleKey]);
  if (!role) return res.status(400).json({ error: 'Unknown roleKey' });
  const existing = await queryOne('select id from users where email = $1', [email]);
  if (existing) return res.status(409).json({ error: 'Email already registered' });
  const hash = await hashPassword(password);
  const user = await queryOne<{ id: string }>(
    'insert into users (email, password_hash, name, role_key) values ($1,$2,$3,$4) returning id',
    [email, hash, name, roleKey]
  );
  const apps = await appsForRole(roleKey);
  const payload: AuthUser = { sub: user!.id, email, name, roleKey, apps };
  res.status(201).json({ token: signToken(payload), user: payload });
});

// ---- Roles & app catalog (Dev Portal "Access" tab) ----
accessRouter.get('/apps', async (_req, res) => {
  res.json(await query('select key, name, group_name as "group", icon from apps order by group_name, name'));
});

accessRouter.get('/roles', requireAuth, async (_req, res) => {
  const roles = await query<{ key: string; name: string; icon: string }>('select key, name, icon from roles order by name');
  const grants = await query<{ role_key: string; app_key: string }>('select role_key, app_key from role_app_grants');
  const byRole: Record<string, string[]> = {};
  for (const g of grants) (byRole[g.role_key] ||= []).push(g.app_key);
  res.json(roles.map((r) => ({ ...r, apps: byRole[r.key] || [] })));
});

accessRouter.post('/roles', requireAuth, async (req, res) => {
  const { key, name, icon = 'user', apps = [] } = req.body || {};
  if (!key || !name) return res.status(400).json({ error: 'key and name required' });
  const existing = await queryOne('select key from roles where key = $1', [key]);
  if (existing) return res.status(409).json({ error: 'Role already exists' });
  await query('insert into roles (key, name, icon) values ($1,$2,$3)', [key, name, icon]);
  for (const appKey of apps) {
    await query('insert into role_app_grants (role_key, app_key) values ($1,$2) on conflict do nothing', [key, appKey]);
  }
  res.status(201).json({ key, name, icon, apps });
});

accessRouter.delete('/roles/:key', requireAuth, async (req, res) => {
  await query('delete from roles where key = $1', [req.params.key]);
  res.status(204).end();
});

// Replaces the full app-grant list for a role (matches setRoleApps() in bk-data.js).
accessRouter.put('/roles/:key/apps', requireAuth, async (req, res) => {
  const { apps } = req.body || {};
  if (!Array.isArray(apps)) return res.status(400).json({ error: 'apps must be an array of app keys' });
  await query('delete from role_app_grants where role_key = $1', [req.params.key]);
  for (const appKey of apps) {
    await query('insert into role_app_grants (role_key, app_key) values ($1,$2) on conflict do nothing', [req.params.key, appKey]);
  }
  res.json({ roleKey: req.params.key, apps });
});
