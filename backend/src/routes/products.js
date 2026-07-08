const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
  const { category } = req.query;
  const products = category
    ? db.prepare('SELECT * FROM products WHERE category = ? ORDER BY name').all(category)
    : db.prepare('SELECT * FROM products ORDER BY category, name').all();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

router.patch('/:id', requireAuth, (req, res) => {
  const { available, name, description, price } = req.body;
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  db.prepare('UPDATE products SET available = COALESCE(?, available), name = COALESCE(?, name), description = COALESCE(?, description), price = COALESCE(?, price) WHERE id = ?')
    .run(available !== undefined ? (available ? 1 : 0) : null, name || null, description || null, price || null, req.params.id);

  res.json(db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id));
});

module.exports = router;
