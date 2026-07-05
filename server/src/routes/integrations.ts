import { Router } from 'express';
import { query, queryOne } from '../db';
import { requireAuth, requireAppAccess } from '../auth';
import { broadcast } from '../realtime';

export const integrationsRouter = Router();
integrationsRouter.use(requireAuth, requireAppAccess('devportal'));

integrationsRouter.get('/', async (_req, res) => {
  res.json(await query('select * from integrations order by name'));
});

integrationsRouter.post('/:id/connect', async (req, res) => {
  const { creds = {} } = req.body || {};
  const existing = await queryOne<{ creds: Record<string, string> }>('select creds from integrations where id = $1', [req.params.id]);
  if (!existing) return res.status(404).json({ error: 'Unknown integration' });
  const merged = { ...existing.creds, ...creds };
  const integ = await queryOne(
    `update integrations set creds = $1, connected = true, enabled = true, updated_at = now() where id = $2 returning *`,
    [JSON.stringify(merged), req.params.id]
  );
  broadcast('integration:update', integ);
  res.json(integ);
});

integrationsRouter.post('/:id/disconnect', async (req, res) => {
  const integ = await queryOne(
    `update integrations set connected = false, enabled = false, updated_at = now() where id = $1 returning *`,
    [req.params.id]
  );
  broadcast('integration:update', integ);
  res.json(integ);
});

integrationsRouter.patch('/:id/toggle', async (req, res) => {
  const { on } = req.body || {};
  const integ = await queryOne(
    `update integrations set enabled = ($1 and connected), updated_at = now() where id = $2 returning *`,
    [!!on, req.params.id]
  );
  broadcast('integration:update', integ);
  res.json(integ);
});
