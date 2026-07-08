const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', requireAuth, (_req, res) => {
  res.json(db.prepare('SELECT * FROM roast_batches ORDER BY created_at DESC').all());
});

router.post('/', requireAuth, (req, res) => {
  const { bean_origin, green_weight_kg, notes } = req.body;
  if (!bean_origin || !green_weight_kg) return res.status(400).json({ error: 'bean_origin and green_weight_kg required' });
  const batch_number = `BK-ROAST-${Date.now()}`;
  const result = db.prepare(
    'INSERT INTO roast_batches (batch_number, bean_origin, green_weight_kg, notes) VALUES (?, ?, ?, ?)'
  ).run(batch_number, bean_origin, green_weight_kg, notes || null);
  res.status(201).json({ id: result.lastInsertRowid, batch_number });
});

router.patch('/:id', requireAuth, (req, res) => {
  const { status, qc_result, roasted_weight_kg } = req.body;
  const batch = db.prepare('SELECT * FROM roast_batches WHERE id = ?').get(req.params.id);
  if (!batch) return res.status(404).json({ error: 'Batch not found' });
  db.prepare(`UPDATE roast_batches SET
    status = COALESCE(?, status),
    qc_result = COALESCE(?, qc_result),
    roasted_weight_kg = COALESCE(?, roasted_weight_kg),
    started_at = CASE WHEN ? = 'in_progress' AND started_at IS NULL THEN unixepoch() ELSE started_at END,
    completed_at = CASE WHEN ? IN ('completed', 'qc_passed', 'qc_failed') AND completed_at IS NULL THEN unixepoch() ELSE completed_at END
    WHERE id = ?`
  ).run(status || null, qc_result || null, roasted_weight_kg || null, status, status, req.params.id);
  res.json(db.prepare('SELECT * FROM roast_batches WHERE id = ?').get(req.params.id));
});

module.exports = router;
