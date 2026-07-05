import dotenv from 'dotenv';
dotenv.config();
import { pool } from './db';
import { hashPassword } from './auth';

// Seeds demo data equivalent to the current frontend simulation, so the API
// behaves like the prototype (bk-data.js) on day one. Safe to re-run.
async function main() {
  const client = await pool.connect();
  try {
    console.log('Seeding users...');
    const demoUsers = [
      { email: 'akshay@bisikaapi.coffee', name: 'Akshay Meda', role: 'owner' },
      { email: 'meera@bisikaapi.coffee', name: 'Meera S', role: 'ops' },
      { email: 'asha@bisikaapi.coffee', name: 'Asha R', role: 'cafe' },
      { email: 'bala@bisikaapi.coffee', name: 'Bala K', role: 'roaster' },
      { email: 'dev@bisikaapi.coffee', name: 'Dev P', role: 'supply' },
      { email: 'chitra@bisikaapi.coffee', name: 'Chitra M', role: 'finance' },
    ];
    const passwordHash = await hashPassword(process.env.SEED_PASSWORD || 'bisikaapi123');
    for (const u of demoUsers) {
      await client.query(
        `insert into users (email, password_hash, name, role_key) values ($1,$2,$3,$4)
         on conflict (email) do nothing`,
        [u.email, passwordHash, u.name, u.role]
      );
    }

    console.log('Seeding café orders...');
    await client.query(`delete from cafe_orders`);
    await client.query(`
      insert into cafe_orders (id, who, items, status, source) values
      ('#A-241','Table 4','Bisi Kaapi ×2 · Masala Dosa','new','walkin'),
      ('#A-240','Takeaway · Asha','Bella Kaapi · Filter Coffee Cake','brewing','walkin'),
      ('#A-239','Table 9','Cardamom Latte · Cold Brew','brewing','walkin'),
      ('#A-238','Swiggy · 8821','Mysore Bonda ×3','ready','swiggy'),
      ('#A-237','Table 2','Cortado · Sukku Kaapi','new','walkin')
    `);

    console.log('Seeding café inventory...');
    await client.query(`delete from cafe_inventory`);
    await client.query(`
      insert into cafe_inventory (name, pct) values
      ('Filter coffee powder', 28), ('Full-cream milk', 64),
      ('Jaggery', 82), ('Paper cups (12oz)', 47)
    `);

    console.log('Seeding café shifts...');
    await client.query(`delete from cafe_shifts`);
    await client.query(`
      insert into cafe_shifts (name, role, clock_in, hours) values
      ('Asha R','Barista', now() - interval '3.1 hours', 3.1),
      ('Bala K','Barista', now() - interval '2.6 hours', 2.6),
      ('Chitra M','Floor', now() - interval '2.9 hours', 2.9),
      ('Dev P','Kitchen', now() - interval '9.2 hours', 9.2)
    `);

    console.log('Seeding integrations...');
    const integrations = [
      ['square', 'Square POS', 'Square POS', 'Point of Sale', true],
      ['shopify', 'Shopify', 'Shopify', 'E-commerce', true],
      ['razorpay', 'Razorpay', 'Razorpay', 'Payments', true],
      ['tally', 'Tally', 'Tally', 'Accounting', true],
      ['shiprocket', 'Shiprocket', 'Shiprocket', 'Logistics', true],
      ['whatsapp', 'WhatsApp Business', 'WhatsApp', 'Messaging', true],
      ['gmail', 'Gmail', 'Gmail', 'Email', true],
      ['slack', 'Slack', 'Slack', 'Team', true],
      ['sheets', 'Google Sheets', 'Google Sheets', 'Data', true],
      ['zoho', 'Zoho People', 'Zoho People', 'HR', false],
      ['zomato', 'Zomato', 'Zomato', 'Delivery', false],
      ['swiggy', 'Swiggy', 'Swiggy', 'Delivery', false],
    ] as const;
    for (const [id, name, source, category, on] of integrations) {
      await client.query(
        `insert into integrations (id, name, source, category, enabled, connected)
         values ($1,$2,$3,$4,$5,$5) on conflict (id) do nothing`,
        [id, name, source, category, on]
      );
    }

    console.log('Seeding roastery / supply / finance / CRM...');
    await client.query(`
      insert into roast_batches (code, origin, profile, kg, status, started_at) values
      ('#2048','Coorg','Medium-dark', 12, 'roasting', now())
      on conflict do nothing
    `);
    await client.query(`
      insert into green_stock (estate, kg) values
      ('Chikmagalur', 420), ('Coorg', 260), ('Baba Budangiri', 180)
    `);
    await client.query(`
      insert into suppliers (name, category, reliability) values
      ('Sunrise Estates', 'Green coffee', 0.94), ('Western Ghats Co-op', 'Green coffee', 0.9)
    `);
    await client.query(`
      insert into campaigns (name, channel, status, reach) values
      ('New Coorg roast', 'Email + WhatsApp', 'draft', 12400)
    `);

    console.log('Done. Demo login: akshay@bisikaapi.coffee / bisikaapi123 (all demo users share this password).');
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
