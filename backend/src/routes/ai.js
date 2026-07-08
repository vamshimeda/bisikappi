const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/insight', requireAuth, async (req, res) => {
  const { context_type } = req.body;

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.json({ insight: 'AI insights unavailable — ANTHROPIC_API_KEY not configured.' });
  }

  let contextData = '';
  try {
    if (context_type === 'cafe') {
      const orders = db.prepare('SELECT COUNT(*) as count, SUM(total) as revenue FROM orders WHERE created_at > unixepoch() - 86400').get();
      const lowStock = db.prepare('SELECT name FROM inventory_items WHERE quantity < minimum_quantity').all();
      contextData = `Today's orders: ${orders.count}, Revenue: ₹${orders.revenue || 0}. Low stock items: ${lowStock.map(i => i.name).join(', ') || 'none'}.`;
    } else if (context_type === 'roastery') {
      const batches = db.prepare('SELECT status, COUNT(*) as c FROM roast_batches GROUP BY status').all();
      contextData = `Roast batches by status: ${batches.map(b => `${b.status}:${b.c}`).join(', ')}.`;
    } else if (context_type === 'supply') {
      const suppliers = db.prepare('SELECT COUNT(*) as c FROM suppliers WHERE status = ?').get('active');
      contextData = `Active suppliers: ${suppliers.c}.`;
    } else {
      const orderCount = db.prepare('SELECT COUNT(*) as c FROM orders').get();
      const productCount = db.prepare('SELECT COUNT(*) as c FROM products WHERE available = 1').get();
      contextData = `Total orders: ${orderCount.c}. Active products: ${productCount.c}.`;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 200,
        messages: [{
          role: 'user',
          content: `You are an AI assistant for Bisi Kaapi, a South-Indian filter coffee brand. Provide a brief, warm, actionable insight for the ${context_type || 'operations'} team based on this data: ${contextData} Keep it under 3 sentences.`,
        }],
      }),
    });

    const data = await response.json();
    res.json({ insight: data.content?.[0]?.text || 'No insight available.' });
  } catch {
    res.json({ insight: 'Unable to generate insight at this time.' });
  }
});

module.exports = router;
