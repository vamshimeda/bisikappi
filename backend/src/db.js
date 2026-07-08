const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, '..', 'bisikappi.db');
const db = new Database(DB_PATH);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'cafe',
    name TEXT,
    created_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    category TEXT NOT NULL,
    available INTEGER NOT NULL DEFAULT 1,
    created_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reference TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_address TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    total REAL NOT NULL DEFAULT 0,
    created_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    product_id INTEGER NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS inventory_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    unit TEXT NOT NULL DEFAULT 'kg',
    quantity REAL NOT NULL DEFAULT 0,
    minimum_quantity REAL NOT NULL DEFAULT 1,
    category TEXT NOT NULL DEFAULT 'general',
    updated_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS roast_batches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    batch_number TEXT UNIQUE NOT NULL,
    bean_origin TEXT NOT NULL,
    green_weight_kg REAL NOT NULL,
    roasted_weight_kg REAL,
    status TEXT NOT NULL DEFAULT 'scheduled',
    qc_result TEXT,
    notes TEXT,
    started_at INTEGER,
    completed_at INTEGER,
    created_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact_name TEXT,
    contact_email TEXT,
    phone TEXT,
    categories TEXT,
    status TEXT NOT NULL DEFAULT 'active',
    created_at INTEGER DEFAULT (unixepoch())
  );
`);

// Seed initial data if empty
const userCount = db.prepare('SELECT COUNT(*) as c FROM users').get();
if (userCount.c === 0) {
  const bcrypt = require('bcryptjs');
  const roles = [
    { email: 'owner@bisikaapi.com', password: 'ownerpass', role: 'owner', name: 'Akshay Meda' },
    { email: 'cafe@bisikaapi.com', password: 'cafepass', role: 'cafe', name: 'Café Manager' },
    { email: 'roastery@bisikaapi.com', password: 'roastpass', role: 'roastery', name: 'Roastery Lead' },
    { email: 'supply@bisikaapi.com', password: 'supplypass', role: 'supply', name: 'Supply Manager' },
    { email: 'finance@bisikaapi.com', password: 'financepass', role: 'finance', name: 'Finance Lead' },
    { email: 'marketing@bisikaapi.com', password: 'marketpass', role: 'marketing', name: 'Marketing Lead' },
  ];
  const insertUser = db.prepare('INSERT INTO users (email, password_hash, role, name) VALUES (?, ?, ?, ?)');
  for (const u of roles) {
    insertUser.run(u.email, bcrypt.hashSync(u.password, 10), u.role, u.name);
  }

  const insertProduct = db.prepare('INSERT INTO products (name, description, price, category) VALUES (?, ?, ?, ?)');
  const products = [
    ['Filter Kaapi — Original Blend', 'Our signature South-Indian filter coffee blend. Medium roast, smooth finish.', 350, 'coffee'],
    ['Estate Single Origin — Coorg', 'Single estate Arabica from Coorg. Light roast, floral notes.', 520, 'coffee'],
    ['Chicory Blend', 'Traditional Chicory-coffee blend. Bold, robust, full-bodied.', 280, 'coffee'],
    ['Cold Brew Concentrate', 'Ready-to-dilute cold brew. 1:4 ratio with milk or water.', 420, 'coffee'],
    ['Stainless Steel Filter Set', 'Traditional South-Indian coffee filter, 4-cup size.', 899, 'accessories'],
    ['Ceramic Tumbler & Dabara', 'Handcrafted ceramic tumbler and saucer set.', 649, 'accessories'],
    ['Brewing Guide Booklet', 'Step-by-step guide to perfect filter coffee at home.', 149, 'accessories'],
    ['Roasting Consultation — 1hr', 'One-on-one session with our master roaster.', 2500, 'consulting'],
  ];
  for (const p of products) insertProduct.run(...p);

  const insertInventory = db.prepare('INSERT INTO inventory_items (name, unit, quantity, minimum_quantity, category) VALUES (?, ?, ?, ?, ?)');
  const inventory = [
    ['Coorg Arabica Green Beans', 'kg', 45.5, 10, 'beans'],
    ['Chicory Root', 'kg', 12.0, 5, 'ingredients'],
    ['Paper Filters', 'pcs', 500, 100, 'supplies'],
    ['250g Packaging Bags', 'pcs', 200, 50, 'packaging'],
    ['Cold Brew Bottles', 'pcs', 80, 20, 'packaging'],
  ];
  for (const i of inventory) insertInventory.run(...i);

  const insertSupplier = db.prepare('INSERT INTO suppliers (name, contact_name, contact_email, categories) VALUES (?, ?, ?, ?)');
  insertSupplier.run('Coorg Estate Farms', 'Ravi Kumar', 'ravi@cooorg.co', 'beans');
  insertSupplier.run('Karnataka Packaging Co.', 'Priya S.', 'priya@kpc.in', 'packaging,supplies');
}

module.exports = db;
