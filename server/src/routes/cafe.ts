import { Router } from 'express';
import { query, queryOne } from '../db';
import { requireAuth, requireAppAccess } from '../auth';
import { broadcast } from '../realtime';

export const cafeRouter = Router();
cafeRouter.use(requireAuth, requireAppAccess('cafe'));

// ---- Orders ----
let orderSeq = 1000;
async function nextOrderId() {
  const row = await queryOne<{ n: number }>(`select count(*)::int as n from cafe_orders`);
  return '#A-' + (241 + (row?.n ?? 0) + (orderSeq++ - 1000));
}

cafeRouter.get('/orders', async (_req, res) => {
  res.json(await query('select * from cafe_orders order by created_at desc'));
});

cafeRouter.post('/orders', async (req, res) => {
  const { who, items, source = 'walkin' } = req.body || {};
  if (!who || !items) return res.status(400).json({ error: 'who and items required' });
  const id = await nextOrderId();
  const order = await queryOne(
    `insert into cafe_orders (id, who, items, source) values ($1,$2,$3,$4) returning *`,
    [id, who, items, source]
  );
  broadcast('order:new', order);
  res.status(201).json(order);
});

const FLOW = ['new', 'brewing', 'ready'];
cafeRouter.patch('/orders/:id/advance', async (req, res) => {
  const current = await queryOne<{ status: string }>('select status from cafe_orders where id = $1', [req.params.id]);
  if (!current) return res.status(404).json({ error: 'Order not found' });
  const i = FLOW.indexOf(current.status);
  const next = i < 2 ? FLOW[i + 1] : current.status;
  const order = await queryOne(
    'update cafe_orders set status = $1, updated_at = now() where id = $2 returning *',
    [next, req.params.id]
  );
  broadcast('order:update', order);
  res.json(order);
});

cafeRouter.delete('/orders/:id', async (req, res) => {
  await query('delete from cafe_orders where id = $1', [req.params.id]);
  broadcast('order:remove', { id: req.params.id });
  res.status(204).end();
});

// ---- Inventory ----
cafeRouter.get('/inventory', async (_req, res) => {
  res.json(await query('select * from cafe_inventory order by name'));
});

cafeRouter.post('/inventory', async (req, res) => {
  const { name, pct = 100 } = req.body || {};
  if (!name) return res.status(400).json({ error: 'name required' });
  const item = await queryOne('insert into cafe_inventory (name, pct) values ($1,$2) returning *', [name, pct]);
  broadcast('inventory:new', item);
  res.status(201).json(item);
});

cafeRouter.patch('/inventory/:id', async (req, res) => {
  const { pct } = req.body || {};
  if (pct == null) return res.status(400).json({ error: 'pct required' });
  const item = await queryOne(
    'update cafe_inventory set pct = $1, updated_at = now() where id = $2 returning *',
    [Math.max(0, Math.min(100, pct)), req.params.id]
  );
  broadcast('inventory:update', item);
  res.json(item);
});

cafeRouter.delete('/inventory/:id', async (req, res) => {
  await query('delete from cafe_inventory where id = $1', [req.params.id]);
  broadcast('inventory:remove', { id: req.params.id });
  res.status(204).end();
});

// ---- Shifts ----
cafeRouter.get('/shifts', async (_req, res) => {
  res.json(await query('select * from cafe_shifts where clock_out is null order by clock_in'));
});

cafeRouter.post('/shifts', async (req, res) => {
  const { name, role } = req.body || {};
  if (!name || !role) return res.status(400).json({ error: 'name and role required' });
  const shift = await queryOne('insert into cafe_shifts (name, role) values ($1,$2) returning *', [name, role]);
  broadcast('shift:new', shift);
  res.status(201).json(shift);
});

cafeRouter.patch('/shifts/:id/clock-out', async (req, res) => {
  const shift = await queryOne(
    `update cafe_shifts set clock_out = now(),
       hours = round(extract(epoch from (now() - clock_in)) / 3600.0, 1)
     where id = $1 returning *`,
    [req.params.id]
  );
  broadcast('shift:clockout', shift);
  res.json(shift);
});

cafeRouter.patch('/shifts/:id/hours', async (req, res) => {
  const { delta } = req.body || {};
  const shift = await queryOne(
    'update cafe_shifts set hours = greatest(0, hours + $1) where id = $2 returning *',
    [delta ?? 0, req.params.id]
  );
  broadcast('shift:update', shift);
  res.json(shift);
});
