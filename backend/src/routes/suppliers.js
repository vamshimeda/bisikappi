const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', requireAuth, (_req, res) => {
  res.json(db.prepare('SELECT * FROM suppliers WHERE status = ? ORDER BY name').all('active'));
});

router.post('/', requireAuth, (req, res) => {
  const { name, contact_name, contact_email, phone, categories } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  const result = db.prepare(
    'INSERT INTO suppliers (name, contact_name, contact_email, phone, categories) VALUES (?, ?, ?, ?, ?)'
  ).run(name, contact_name || null, contact_email || null, phone || null, categories || null);
  res.status(201).json({ id: result.lastInsertRowid });
});

module.exports = router;
