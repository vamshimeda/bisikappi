-- Bisi Kaapi OS — Postgres schema
-- Run via `npm run migrate` (psql "$DATABASE_URL" -f src/schema.sql)

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Roles & access (Hub / Dev Portal "Access" tab)
-- ---------------------------------------------------------------------------
create table if not exists roles (
  key         text primary key,
  name        text not null,
  icon        text default 'user',
  created_at  timestamptz not null default now()
);

create table if not exists apps (
  key         text primary key,
  name        text not null,
  group_name  text not null,
  icon        text default 'box'
);

create table if not exists role_app_grants (
  role_key  text not null references roles(key) on delete cascade,
  app_key   text not null references apps(key) on delete cascade,
  primary key (role_key, app_key)
);

create table if not exists users (
  id             uuid primary key default gen_random_uuid(),
  email          text unique not null,
  password_hash  text not null,
  name           text not null,
  role_key       text not null references roles(key),
  created_at     timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Café Ops — orders, inventory, shifts
-- ---------------------------------------------------------------------------
create table if not exists cafe_orders (
  id          text primary key,               -- e.g. '#A-241'
  who         text not null,
  items       text not null,
  status      text not null default 'new' check (status in ('new','brewing','ready')),
  source      text not null default 'walkin', -- walkin | online | zomato | swiggy | mobile
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists cafe_inventory (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  pct         numeric not null check (pct between 0 and 100),
  updated_at  timestamptz not null default now()
);

create table if not exists cafe_shifts (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  role        text not null,
  clock_in    timestamptz not null default now(),
  clock_out   timestamptz,
  hours       numeric not null default 0
);

-- ---------------------------------------------------------------------------
-- Live feed, KPIs, approvals (Orchestrator / Hub AI briefing)
-- ---------------------------------------------------------------------------
create table if not exists kpi_snapshots (
  id           uuid primary key default gen_random_uuid(),
  key          text not null,     -- revenue | cafeSales | roastedKg | onTime | orders ...
  value        numeric not null,
  recorded_at  timestamptz not null default now()
);

create table if not exists feed_events (
  id          uuid primary key default gen_random_uuid(),
  agent       text,
  source      text,
  text        text not null,
  tone        text default 'active',
  created_at  timestamptz not null default now()
);

create table if not exists approvals (
  id          uuid primary key default gen_random_uuid(),
  agent       text,
  title       text not null,
  detail      text,
  amount      text,
  source      text,
  status      text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at  timestamptz not null default now(),
  decided_at  timestamptz
);

-- ---------------------------------------------------------------------------
-- Integrations (Dev Portal — API keys / connected tools)
-- ---------------------------------------------------------------------------
create table if not exists integrations (
  id          text primary key,   -- 'square' | 'shopify' | 'zomato' ...
  name        text not null,
  source      text not null,      -- stream key it feeds (matches feed_events.source)
  category    text not null,
  enabled     boolean not null default false,
  connected   boolean not null default false,
  creds       jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Roastery
-- ---------------------------------------------------------------------------
create table if not exists roast_batches (
  id            uuid primary key default gen_random_uuid(),
  code          text not null,
  origin        text,
  profile       text,
  kg            numeric,
  status        text not null default 'planned', -- planned | roasting | qc | packaged | done
  started_at    timestamptz,
  completed_at  timestamptz
);

create table if not exists green_stock (
  id          uuid primary key default gen_random_uuid(),
  estate      text not null,
  kg          numeric not null,
  updated_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Supply chain
-- ---------------------------------------------------------------------------
create table if not exists suppliers (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  category     text,
  reliability  numeric,
  created_at   timestamptz not null default now()
);

create table if not exists purchase_orders (
  id           uuid primary key default gen_random_uuid(),
  supplier_id  uuid references suppliers(id) on delete set null,
  amount       numeric,
  status       text not null default 'pending', -- pending | approved | delivered | cancelled
  created_at   timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Finance
-- ---------------------------------------------------------------------------
create table if not exists ledger_entries (
  id           uuid primary key default gen_random_uuid(),
  account      text not null,
  debit        numeric not null default 0,
  credit       numeric not null default 0,
  memo         text,
  recorded_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- CRM & marketing
-- ---------------------------------------------------------------------------
create table if not exists campaigns (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  channel     text,
  status      text not null default 'draft', -- draft | scheduled | live | done
  reach       integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Marketing content — CMS for the customer site & shop copy/catalogue
-- ---------------------------------------------------------------------------
create table if not exists content_strings (
  key         text primary key,   -- e.g. 'hero.title1' — matches ui_kits/customer/marketing/i18n.js
  en          text not null default '',
  kn          text not null default '',
  updated_at  timestamptz not null default now()
);

create table if not exists content_products (
  id            integer generated by default as identity primary key,
  name          text not null,
  cat           text not null default 'Beans',   -- Beans | Gear
  tag           text,                             -- e.g. 'Bestseller' | 'New' | 'Low stock'
  tone          text,                             -- badge tone: accent | brand | warning
  origin        text,
  roast         text,                             -- Light | Medium | Medium-dark | Dark | —
  price         numeric not null default 0,
  rating        numeric not null default 4.5,
  count         integer not null default 0,
  img           text not null default 'motif-coffee-bean',
  featured      boolean not null default false,   -- shown in homepage "From our roastery"
  sort_order    integer not null default 0,
  updated_at    timestamptz not null default now()
);

-- Structured copy lists (roastery process steps, coffee grind types,
-- consulting services) — each row is one named list of small objects,
-- edited as a whole array from the Content admin panel.
create table if not exists content_lists (
  key         text primary key,   -- 'roastery.steps' | 'coffee.grinds' | 'consulting.services'
  items       jsonb not null default '[]'::jsonb,
  updated_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Seed: roles + app catalog + default grants (matches the Hub/Dev Portal demo)
-- ---------------------------------------------------------------------------
insert into apps (key, name, group_name, icon) values
  ('orchestrator', 'Agent Orchestrator', 'Operations', 'bot'),
  ('cafe', 'Café Ops', 'Operations', 'store'),
  ('roastery', 'Roastery Ops', 'Operations', 'flame'),
  ('supply', 'Supply Chain', 'Operations', 'truck'),
  ('finance', 'Finance & Accounts', 'Operations', 'dollar'),
  ('crm', 'CRM & Marketing', 'Operations', 'megaphone'),
  ('shopadmin', 'Shop Admin', 'Operations', 'box'),
  ('content', 'Content', 'Operations', 'coffee'),
  ('store', 'Marketing Site', 'Customer', 'coffee'),
  ('shop', 'Online Shop', 'Customer', 'box'),
  ('onboarding', 'Onboarding & Kaapi Club', 'Customer', 'award'),
  ('devportal', 'Developer Portal', 'Platform', 'plug')
on conflict (key) do nothing;

insert into roles (key, name, icon) values
  ('owner', 'Owner / Admin', 'shield'),
  ('ops', 'Ops Director', 'grid'),
  ('cafe', 'Café Manager', 'store'),
  ('roaster', 'Head Roaster', 'flame'),
  ('supply', 'Supply Lead', 'truck'),
  ('finance', 'Finance', 'dollar')
on conflict (key) do nothing;

insert into role_app_grants (role_key, app_key)
values
  ('owner','orchestrator'),('owner','cafe'),('owner','roastery'),('owner','supply'),
  ('owner','store'),('owner','shop'),('owner','onboarding'),('owner','finance'),
  ('owner','shopadmin'),('owner','devportal'),('owner','crm'),('owner','content'),
  ('ops','orchestrator'),('ops','cafe'),('ops','roastery'),('ops','supply'),
  ('ops','shop'),('ops','onboarding'),('ops','finance'),('ops','shopadmin'),('ops','crm'),('ops','content'),
  ('cafe','cafe'),('cafe','store'),('cafe','shop'),('cafe','onboarding'),('cafe','content'),
  ('roaster','roastery'),
  ('supply','supply'),('supply','orchestrator'),
  ('finance','orchestrator'),('finance','finance'),('finance','shop')
on conflict do nothing;

-- ---------------------------------------------------------------------------
-- Seed: marketing copy (mirrors ui_kits/customer/marketing/i18n.js) + catalogue
-- ---------------------------------------------------------------------------
insert into content_strings (key, en, kn) values
  ('nav.home', 'Home', 'ಮುಖಪುಟ'),
  ('nav.roastery', 'Roastery', 'ರೋಸ್ಟರಿ'),
  ('nav.coffee', 'Coffee', 'ಕಾಫಿ'),
  ('nav.shop', 'Shop', 'ಅಂಗಡಿ'),
  ('nav.consulting', 'Consulting', 'ಸಲಹೆ'),
  ('nav.order', 'Order online', 'ಆನ್‌ಲೈನ್ ಆರ್ಡರ್'),
  ('hero.eyebrow', 'Estd. with love · ಬಿಸಿ ಕಾಫಿ', 'ಪ್ರೀತಿಯಿಂದ ಸ್ಥಾಪನೆ · ಬಿಸಿ ಕಾಫಿ'),
  ('hero.title1', 'Slow down,', 'ನಿಧಾನಿಸಿ,'),
  ('hero.titleEm', 'savour', 'ಸವಿಯಿರಿ'),
  ('hero.title2', 'the brew.', 'ಕಾಫಿಯನ್ನು.'),
  ('hero.body', 'Because everybody loves "Bisi" (hot) + "Kaapi" (coffee). Every brew celebrates the warmth of home, the richness of tradition, and the joy of slowing down.', 'ಏಕೆಂದರೆ ಎಲ್ಲರಿಗೂ "ಬಿಸಿ" + "ಕಾಫಿ" ಇಷ್ಟ. ಪ್ರತಿ ಕಪ್ ಮನೆಯ ಬೆಚ್ಚನೆ, ಸಂಪ್ರದಾಯದ ಶ್ರೀಮಂತಿಕೆ ಮತ್ತು ನಿಧಾನಿಸುವ ಸಂತೋಷವನ್ನು ಆಚರಿಸುತ್ತದೆ.'),
  ('hero.cta1', 'Explore the menu', 'ಮೆನು ನೋಡಿ'),
  ('hero.cta2', 'Shop beans', 'ಬೀನ್ಸ್ ಕೊಳ್ಳಿ'),
  ('hero.rating', 'loved by 3,400+ regulars', '3,400+ ಗ್ರಾಹಕರ ಮೆಚ್ಚುಗೆ'),
  ('trust.origin', 'Single-origin', 'ಏಕ-ಮೂಲ'),
  ('trust.originS', 'Western Ghats estates', 'ಪಶ್ಚಿಮ ಘಟ್ಟದ ತೋಟಗಳು'),
  ('trust.roasted', 'Freshly roasted', 'ತಾಜಾ ರೋಸ್ಟ್'),
  ('trust.roastedS', 'Small batches, weekly', 'ಸಣ್ಣ ಬ್ಯಾಚ್, ಪ್ರತಿ ವಾರ'),
  ('trust.shipped', 'Shipped pan-India', 'ಭಾರತದಾದ್ಯಂತ ರವಾನೆ'),
  ('trust.shippedS', 'In 2–4 days', '2–4 ದಿನಗಳಲ್ಲಿ'),
  ('trust.trust', 'Decades in the making', 'ದಶಕಗಳ ಶ್ರಮ'),
  ('trust.trustS', 'A name people trust', 'ನಂಬಿಕೆಯ ಹೆಸರು'),
  ('story.eyebrow', 'Our story', 'ನಮ್ಮ ಕಥೆ'),
  ('story.title', 'Decades in the making.\nBut the new beginning.', 'ದಶಕಗಳ ಶ್ರಮ.\nಆದರೆ ಹೊಸ ಆರಂಭ.'),
  ('story.body', 'After all these years, it felt like time to step into a more modern chapter — a new identity, a new space, and a new way of sharing what we do. The same heart: great coffee, loyal regulars, a name people already loved.', 'ಇಷ್ಟು ವರ್ಷಗಳ ನಂತರ, ಹೊಸ ಅಧ್ಯಾಯಕ್ಕೆ ಕಾಲಿಡುವ ಸಮಯ ಬಂದಿತ್ತು — ಹೊಸ ಗುರುತು, ಹೊಸ ಸ್ಥಳ. ಅದೇ ಹೃದಯ: ಉತ್ತಮ ಕಾಫಿ, ನಿಷ್ಠಾವಂತ ಗ್ರಾಹಕರು.'),
  ('story.cta', 'Read the full story', 'ಪೂರ್ಣ ಕಥೆ ಓದಿ'),
  ('prod.eyebrow', 'From our roastery', 'ನಮ್ಮ ರೋಸ್ಟರಿಯಿಂದ'),
  ('prod.title', 'Take a little warmth home', 'ಸ್ವಲ್ಪ ಬೆಚ್ಚನೆಯನ್ನು ಮನೆಗೆ'),
  ('prod.shopAll', 'Shop all', 'ಎಲ್ಲಾ ನೋಡಿ'),
  ('prod.add', 'Add', 'ಸೇರಿಸಿ'),
  ('cafe.eyebrow', 'More than a café', 'ಕೆಫೆಗಿಂತ ಹೆಚ್ಚು'),
  ('cafe.title', 'So we designed it to make more than a café.', 'ಆದ್ದರಿಂದ ನಾವು ಕೆಫೆಗಿಂತ ಹೆಚ್ಚಿನದನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿದೆವು.'),
  ('cafe.body', 'The new space brings everything together — all under one roof.', 'ಹೊಸ ಸ್ಥಳ ಎಲ್ಲವನ್ನೂ ಒಂದೇ ಸೂರಿನಡಿ ತರುತ್ತದೆ.'),
  ('cafe.p1', 'A café that feels like home', 'ಮನೆಯಂತೆ ಅನಿಸುವ ಕೆಫೆ'),
  ('cafe.p2', 'Fresh foods, all day', 'ತಾಜಾ ಆಹಾರ, ದಿನವಿಡೀ'),
  ('cafe.p3', 'Our own range of coffee products', 'ನಮ್ಮದೇ ಕಾಫಿ ಉತ್ಪನ್ನಗಳ ಶ್ರೇಣಿ'),
  ('cafe.cta', 'Visit us', 'ಭೇಟಿ ನೀಡಿ'),
  ('join.title', 'Fresh beginnings, unforgettable aromas.', 'ಹೊಸ ಆರಂಭ, ಮರೆಯಲಾಗದ ಸುವಾಸನೆ.'),
  ('join.body', 'Join the list for new roasts, seasonal brews, and quiet invitations to slow down.', 'ಹೊಸ ರೋಸ್ಟ್, ಋತುಮಾನದ ಕಾಫಿ ಮತ್ತು ನಿಧಾನಿಸುವ ಆಹ್ವಾನಗಳಿಗಾಗಿ ಸೇರಿ.'),
  ('join.cta', 'Join us', 'ಸೇರಿ'),
  ('join.ph', 'you@email.com', 'you@email.com'),
  ('foot.tagline', 'Here''s to fresh beginnings, unforgettable aromas, and countless cups shared together.', 'ಹೊಸ ಆರಂಭ, ಮರೆಯಲಾಗದ ಸುವಾಸನೆ ಮತ್ತು ಹಂಚಿಕೊಂಡ ಅಸಂಖ್ಯ ಕಪ್‌ಗಳಿಗೆ.'),
  ('foot.explore', 'Explore', 'ಅನ್ವೇಷಿಸಿ'),
  ('foot.visit', 'Visit', 'ಭೇಟಿ'),
  ('foot.help', 'Help', 'ಸಹಾಯ'),
  ('r.eyebrow', 'The Roastery', 'ರೋಸ್ಟರಿ'),
  ('r.title', 'From cherry to cup, the slow way.', 'ಚೆರಿಯಿಂದ ಕಪ್‌ವರೆಗೆ, ನಿಧಾನವಾಗಿ.'),
  ('r.sub', 'Our roastery is the heart of Bisi Kaapi — where green beans from the Western Ghats become the filter coffee you grew up with. Roasted in small batches, profiled by hand.', 'ರೋಸ್ಟರಿ ಬಿಸಿ ಕಾಫಿಯ ಹೃದಯ — ಪಶ್ಚಿಮ ಘಟ್ಟದ ಹಸಿರು ಬೀನ್ಸ್ ನೀವು ಬೆಳೆದ ಫಿಲ್ಟರ್ ಕಾಫಿಯಾಗುತ್ತದೆ. ಸಣ್ಣ ಬ್ಯಾಚ್‌ಗಳಲ್ಲಿ, ಕೈಯಿಂದ ರೋಸ್ಟ್.'),
  ('r.estEyebrow', 'Our estates', 'ನಮ್ಮ ತೋಟಗಳು'),
  ('r.estTitle', 'Single-origin, full traceability', 'ಏಕ-ಮೂಲ, ಪೂರ್ಣ ಜಾಡು'),
  ('c.eyebrow', 'Ground to order', 'ಆರ್ಡರ್‌ಗೆ ತಕ್ಕಂತೆ ಪುಡಿ'),
  ('c.title', 'Find your grind.', 'ನಿಮ್ಮ ಗ್ರೈಂಡ್ ಕಂಡುಕೊಳ್ಳಿ.'),
  ('c.sub', 'One blend, ground exactly for how you brew. Tell us your method and we''ll dial it in — from whole bean to extra-coarse cold brew.', 'ಒಂದೇ ಬ್ಲೆಂಡ್, ನೀವು ತಯಾರಿಸುವ ರೀತಿಗೆ ತಕ್ಕಂತೆ ಪುಡಿ. ನಿಮ್ಮ ವಿಧಾನ ಹೇಳಿ — ಪೂರ್ಣ ಬೀನ್‌ನಿಂದ ಕೋಲ್ಡ್ ಬ್ರೂವರೆಗೆ.'),
  ('c.cta', 'Shop the blend', 'ಬ್ಲೆಂಡ್ ಕೊಳ್ಳಿ'),
  ('s.eyebrow', 'Accessories', 'ಪರಿಕರಗಳು'),
  ('s.title', 'Brew it right.', 'ಸರಿಯಾಗಿ ತಯಾರಿಸಿ.'),
  ('s.sub', 'The gear that turns a kitchen into a coffee corner — brass tumblers, carafes, grinders and presses, chosen and used by our own baristas.', 'ಅಡುಗೆಮನೆಯನ್ನು ಕಾಫಿ ಮೂಲೆಯಾಗಿಸುವ ಸಾಧನಗಳು — ಹಿತ್ತಾಳೆ ಟಂಬ್ಲರ್, ಕ್ಯಾರಫೆ, ಗ್ರೈಂಡರ್. ನಮ್ಮ ಬರಿಸ್ಟಾಗಳೇ ಆಯ್ಕೆ ಮಾಡಿದವು.'),
  ('s.add', 'Add', 'ಸೇರಿಸಿ'),
  ('cn.eyebrow', 'Consulting', 'ಸಲಹೆ'),
  ('cn.title', 'Bisi Kaapi, for your business.', 'ಬಿಸಿ ಕಾಫಿ, ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕೆ.'),
  ('cn.sub', 'Decades of running a beloved café, packaged into a service. We help cafés, offices and hotels brew coffee worth slowing down for.', 'ಪ್ರೀತಿಯ ಕೆಫೆ ನಡೆಸಿದ ದಶಕಗಳ ಅನುಭವ, ಸೇವೆಯಾಗಿ. ಕೆಫೆ, ಕಚೇರಿ ಮತ್ತು ಹೋಟೆಲ್‌ಗಳಿಗೆ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.'),
  ('cn.formEyebrow', 'Start a conversation', 'ಸಂಭಾಷಣೆ ಆರಂಭಿಸಿ'),
  ('cn.formTitle', 'Tell us what you''re brewing.', 'ನೀವು ಏನು ತಯಾರಿಸುತ್ತಿದ್ದೀರಿ ಹೇಳಿ.'),
  ('cn.send', 'Send enquiry', 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ'),
  ('shop.nav.shop', 'Shop', 'ಅಂಗಡಿ'),
  ('shop.nav.beans', 'Beans', 'ಬೀನ್ಸ್'),
  ('shop.nav.gear', 'Gear', 'ಸಾಧನಗಳು'),
  ('shop.nav.gifts', 'Gifts', 'ಉಡುಗೊರೆಗಳು'),
  ('shop.admin', 'Admin', 'ನಿರ್ವಹಣೆ'),
  ('shop.eyebrow', 'The Bisi Kaapi store', 'ಬಿಸಿ ಕಾಫಿ ಅಂಗಡಿ'),
  ('shop.title', 'Beans, gear & little rituals', 'ಬೀನ್ಸ್, ಸಾಧನಗಳು ಮತ್ತು ಪುಟ್ಟ ಆಚರಣೆಗಳು'),
  ('shop.category', 'Category', 'ವರ್ಗ'),
  ('shop.catAll', 'All', 'ಎಲ್ಲಾ'),
  ('shop.roast', 'Roast', 'ರೋಸ್ಟ್'),
  ('shop.roastLight', 'Light', 'ಹಗುರ'),
  ('shop.roastMedium', 'Medium', 'ಮಧ್ಯಮ'),
  ('shop.roastMD', 'Medium-dark', 'ಮಧ್ಯಮ-ಗಾಢ'),
  ('shop.roastDark', 'Dark', 'ಗಾಢ'),
  ('shop.noResults', 'No products match these filters.', 'ಈ ಫಿಲ್ಟರ್‌ಗಳಿಗೆ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ.'),
  ('shop.subTitle', 'Subscribe & save 15%', 'ಚಂದಾದಾರರಾಗಿ, 15% ಉಳಿಸಿ'),
  ('shop.subBody', 'Fresh beans at your door, every fortnight.', 'ಪ್ರತಿ ಹದಿನೈದು ದಿನಗಳಿಗೊಮ್ಮೆ ತಾಜಾ ಬೀನ್ಸ್ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ.'),
  ('shop.addToCart', 'Add to cart', 'ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ'),
  ('shop.back', 'Back to shop', 'ಅಂಗಡಿಗೆ ಹಿಂತಿರುಗಿ'),
  ('shop.size', 'Size', 'ಗಾತ್ರ'),
  ('shop.addQty', 'Add', 'ಸೇರಿಸಿ'),
  ('shop.tastingNotes', 'Tasting notes', 'ರುಚಿ ಟಿಪ್ಪಣಿಗಳು'),
  ('shop.tastingBody', 'Jaggery sweetness, roasted almond, a cocoa finish. Pairs beautifully with milk and a spoon of sugar.', 'ಬೆಲ್ಲದ ಸಿಹಿ, ಹುರಿದ ಬಾದಾಮಿ, ಕೋಕೋ ಅಂತ್ಯ. ಹಾಲು ಮತ್ತು ಒಂದು ಚಮಚ ಸಕ್ಕರೆಯೊಂದಿಗೆ ಚೆನ್ನಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.'),
  ('shop.howToBrew', 'How to brew', 'ಹೇಗೆ ತಯಾರಿಸುವುದು'),
  ('shop.brewBody', 'Use a South-Indian filter: 2 tbsp per cup, fill the upper chamber, let it drip 15–20 minutes, then mix 1:1 with hot milk.', 'ದಕ್ಷಿಣ ಭಾರತದ ಫಿಲ್ಟರ್ ಬಳಸಿ: ಪ್ರತಿ ಕಪ್‌ಗೆ 2 ಚಮಚ, ಮೇಲಿನ ಕೋಣೆ ತುಂಬಿಸಿ, 15–20 ನಿಮಿಷ ಸೋರಲಿ, ನಂತರ ಬಿಸಿ ಹಾಲಿನೊಂದಿಗೆ 1:1 ಬೆರೆಸಿ.'),
  ('shop.ship', 'Shipping & freshness', 'ರವಾನೆ ಮತ್ತು ತಾಜಾತನ'),
  ('shop.shipBody', 'Roasted to order and shipped within 24 hours. Reaches most cities in 2–4 days.', 'ಆರ್ಡರ್‌ಗೆ ತಕ್ಕಂತೆ ರೋಸ್ಟ್ ಮಾಡಿ 24 ಗಂಟೆಗಳಲ್ಲಿ ರವಾನಿಸಲಾಗುತ್ತದೆ. ಹೆಚ್ಚಿನ ನಗರಗಳಿಗೆ 2–4 ದಿನಗಳಲ್ಲಿ ತಲುಪುತ್ತದೆ.')
on conflict (key) do nothing;

insert into content_products (id, name, cat, tag, tone, origin, roast, price, rating, count, img, featured, sort_order) values
  (1, 'Mysore Filter Blend', 'Beans', 'Bestseller', 'accent', 'Chikmagalur', 'Medium', 240, 4.8, 212, 'motif-coffee-bean', true, 1),
  (2, 'Coorg Single Estate', 'Beans', 'New', 'brand', 'Coorg', 'Medium-dark', 320, 4.7, 96, 'motif-coffee-plant', true, 2),
  (3, 'Peaberry Reserve', 'Beans', null, null, 'Baba Budangiri', 'Light', 420, 4.9, 64, 'motif-coffee-bean', false, 3),
  (4, 'Davara Tumbler Set', 'Gear', null, null, 'Brass · serves 2', '—', 690, 4.9, 154, 'motif-filter-cup', true, 4),
  (5, 'Pour-over Carafe', 'Gear', 'Low stock', 'warning', 'Glass · 600ml', '—', 1290, 4.6, 38, 'chemex', false, 5),
  (6, 'Filter Decoction Press', 'Gear', null, null, 'Stainless steel', '—', 540, 4.5, 71, 'hand-grinder', false, 6)
on conflict (id) do nothing;

-- Explicit ids above don't advance the identity sequence — sync it so the
-- next admin-created product (which lets the DB assign its id) doesn't
-- collide with a seeded row.
select setval(pg_get_serial_sequence('content_products', 'id'), (select coalesce(max(id), 1) from content_products));

insert into content_lists (key, items) values
  ('roastery.steps', $json$[
    {"t":"Sourced","d":"Hand-picked cherries from 12 estates across Chikmagalur, Coorg & Baba Budangiri.","img":"coffee-branch-color"},
    {"t":"Roasted","d":"Small 12kg batches, profiled by hand each week — never more than the week can drink.","img":"espresso-machine"},
    {"t":"Rested & ground","d":"Rested 48 hours to settle, then ground to order for your brew method.","img":"hand-grinder"}
  ]$json$::jsonb),
  ('coffee.grinds', $json$[
    {"t":"Whole Bean","d":"Grind fresh at home for the brightest cup.","use":"Any method","badge":"Freshest","tone":"accent"},
    {"t":"South-Indian Filter","d":"Medium-fine, built for the steel davara filter.","use":"Filter / decoction","badge":"Signature","tone":"brand"},
    {"t":"Espresso Fine","d":"Tight, even grind for 9-bar extraction.","use":"Espresso machine","badge":null,"tone":null},
    {"t":"Moka & Stovetop","d":"A touch coarser than espresso, for the moka pot.","use":"Moka pot","badge":null,"tone":null},
    {"t":"French Press","d":"Coarse grind that won't cloud your cup.","use":"Press / immersion","badge":null,"tone":null},
    {"t":"Cold Brew Coarse","d":"Extra-coarse for a smooth 18-hour steep.","use":"Cold brew","badge":"New","tone":"brand"}
  ]$json$::jsonb),
  ('consulting.services', $json$[
    {"icon":"coffee","t":"Café Setup","d":"End-to-end build — layout, equipment, sourcing and the first pour."},
    {"icon":"leaf","t":"Menu & Recipe Design","d":"A signature menu rooted in South-Indian coffee, tuned to your audience."},
    {"icon":"award","t":"Barista Training","d":"Hands-on programs from filter decoction to latte art."},
    {"icon":"truck","t":"Wholesale Bean Supply","d":"Freshly roasted beans, delivered on your schedule with full traceability."}
  ]$json$::jsonb)
on conflict (key) do nothing;
