const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

function generateRef() {
  const n = Math.floor(Math.random() * 90000) + 10000;
  return `BK-${new Date().getFullYear()}-${n}`;
}

router.get('/', requireAuth, (req, res) => {
  const orders = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
  res.json(orders);
});

router.get('/:id', requireAuth, (req, res) => {
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  const items = db.prepare(`
    SELECT oi.*, p.name as product_name FROM order_items oi
    JOIN products p ON p.id = oi.product_id
    WHERE oi.order_id = ?
  `).all(order.id);
  res.json({ ...order, items });
});

router.post('/', (req, res) => {
  const { customer_name, customer_email, customer_address, items } = req.body;
  if (!customer_name || !customer_email || !items?.length) {
    return res.status(400).json({ error: 'customer_name, customer_email, and items are required' });
  }

  let total = 0;
  const lineItems = items.map((item) => {
    const product = db.prepare('SELECT * FROM products WHERE id = ? AND available = 1').get(item.product_id);
    if (!product) throw { status: 400, message: `Product ${item.product_id} not found or unavailable` };
    total += product.price * item.quantity;
    return { product_id: product.id, quantity: item.quantity, unit_price: product.price };
  });

  const reference = generateRef();
  const order = db.prepare(
    'INSERT INTO orders (reference, customer_name, customer_email, customer_address, total) VALUES (?, ?, ?, ?, ?)'
  ).run(reference, customer_name, customer_email, customer_address || '', total);

  const insertItem = db.prepare(
    'INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (?, ?, ?, ?)'
  );
  for (const li of lineItems) insertItem.run(order.lastInsertRowid, li.product_id, li.quantity, li.unit_price);

  res.status(201).json({ id: order.lastInsertRowid, reference, total });
});

module.exports = router;
