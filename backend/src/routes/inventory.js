const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', requireAuth, (_req, res) => {
  res.json(db.prepare('SELECT * FROM inventory_items ORDER BY category, name').all());
});

router.patch('/:id', requireAuth, (req, res) => {
  const { quantity } = req.body;
  const item = db.prepare('SELECT * FROM inventory_items WHERE id = ?').get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  db.prepare('UPDATE inventory_items SET quantity = ?, updated_at = unixepoch() WHERE id = ?').run(quantity, req.params.id);
  res.json(db.prepare('SELECT * FROM inventory_items WHERE id = ?').get(req.params.id));
});

module.exports = router;
