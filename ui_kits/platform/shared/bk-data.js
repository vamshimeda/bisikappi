/* ============================================================================
 * Bisi Kaapi OS — shared live datastore + config (plain JS, window.BKData)
 * A single configurable source of truth that simulates a live event stream
 * from every connected source (POS, Shopify, Razorpay, Tally, Shiprocket,
 * WhatsApp, …). All apps subscribe to it, so data is consistent and live.
 *
 * Swap the `connectors` adapters' `pull()` stubs for real fetch()/WebSocket
 * calls to go from simulated to production data with no UI changes.
 * ========================================================================== */
(function () {
  const CONFIG_KEY = 'bk_os_config_v1';

  /* ---- Integration catalog ----
   * Every external tool is a configurable integration. `source` is the stream
   * key it feeds; `fields` are the credentials a user enters (secret = masked).
   * Swap each adapter's pull() for a real call using creds[field] in prod. */
  const INTEGRATIONS = [
    { id: 'square',     name: 'Square POS',        source: 'Square POS',    category: 'Point of Sale', icon: 'store',     docs: 'developer.squareup.com',   fields: [{ k: 'accessToken', label: 'Access token', secret: true }, { k: 'locationId', label: 'Location ID' }] },
    { id: 'shopify',    name: 'Shopify',           source: 'Shopify',       category: 'E-commerce',    icon: 'box',       docs: 'shopify.dev',              fields: [{ k: 'shop', label: 'Shop domain', ph: 'bisikaapi.myshopify.com' }, { k: 'apiKey', label: 'Admin API key', secret: true }] },
    { id: 'razorpay',   name: 'Razorpay',          source: 'Razorpay',      category: 'Payments',      icon: 'card',      docs: 'razorpay.com/docs',        fields: [{ k: 'keyId', label: 'Key ID', ph: 'rzp_live_…' }, { k: 'keySecret', label: 'Key secret', secret: true }] },
    { id: 'tally',      name: 'Tally',             source: 'Tally',         category: 'Accounting',    icon: 'receipt',   docs: 'tallysolutions.com',       fields: [{ k: 'url', label: 'Tally server URL', ph: 'http://localhost:9000' }, { k: 'company', label: 'Company name' }] },
    { id: 'shiprocket', name: 'Shiprocket',        source: 'Shiprocket',    category: 'Logistics',     icon: 'truck',     docs: 'apidocs.shiprocket.in',    fields: [{ k: 'email', label: 'Account email' }, { k: 'token', label: 'API token', secret: true }] },
    { id: 'whatsapp',   name: 'WhatsApp Business', source: 'WhatsApp',      category: 'Messaging',     icon: 'message',   docs: 'developers.facebook.com/docs/whatsapp', featured: true, fields: [{ k: 'phoneId', label: 'Phone number ID' }, { k: 'wabaId', label: 'WABA ID' }, { k: 'token', label: 'Permanent access token', secret: true }, { k: 'verifyToken', label: 'Webhook verify token', secret: true }] },
    { id: 'gmail',      name: 'Gmail',             source: 'Gmail',         category: 'Email',         icon: 'mail',      docs: 'developers.google.com/gmail', fields: [{ k: 'clientId', label: 'OAuth client ID' }, { k: 'clientSecret', label: 'Client secret', secret: true }] },
    { id: 'slack',      name: 'Slack',             source: 'Slack',         category: 'Team',          icon: 'hash',      docs: 'api.slack.com',            fields: [{ k: 'botToken', label: 'Bot token', secret: true, ph: 'xoxb-…' }] },
    { id: 'sheets',     name: 'Google Sheets',     source: 'Google Sheets', category: 'Data',          icon: 'grid',      docs: 'developers.google.com/sheets', fields: [{ k: 'serviceKey', label: 'Service-account JSON', secret: true }] },
    { id: 'zoho',       name: 'Zoho People',       source: 'Zoho People',   category: 'HR',            icon: 'users',     docs: 'zoho.com/people/api',      fields: [{ k: 'token', label: 'OAuth token', secret: true }] },
    { id: 'zomato',     name: 'Zomato',            source: 'Zomato',        category: 'Delivery',      icon: 'truck',     docs: 'partner-api.zomato.com',   fields: [{ k: 'partnerKey', label: 'Partner API key', secret: true }, { k: 'resId', label: 'Restaurant ID' }] },
    { id: 'swiggy',     name: 'Swiggy',            source: 'Swiggy',        category: 'Delivery',      icon: 'truck',     docs: 'partner.swiggy.com',       fields: [{ k: 'partnerKey', label: 'Partner API key', secret: true }, { k: 'outletId', label: 'Outlet ID' }] },
  ];
  // Which integrations ship pre-connected (with demo creds) vs. need setup.
  const PRECONNECTED = { square: 1, shopify: 1, razorpay: 1, tally: 1, shiprocket: 1, whatsapp: 1, gmail: 1, slack: 1, sheets: 1 };

  function seedIntegrations() {
    const out = {};
    INTEGRATIONS.forEach((i) => {
      const on = !!PRECONNECTED[i.id];
      const creds = {};
      if (on) i.fields.forEach((f) => { creds[f.k] = f.secret ? '••••••••••' + i.id.slice(0, 3) : 'demo-' + f.k; });
      out[i.id] = { enabled: on, connected: on, creds };
    });
    return out;
  }
  function connectorsFromIntegrations(integrations) {
    const c = {};
    INTEGRATIONS.forEach((i) => { c[i.source] = !!(integrations[i.id] && integrations[i.id].enabled && integrations[i.id].connected); });
    return c;
  }

  // ---- Live café order queue (shared across tabs via localStorage) ----
  // Feeds Café Ops directly: online/delivery orders stream in automatically,
  // walk-ins are added manually from Café Ops, and the mobile app's checkout
  // pushes a real order here too — all three intake paths land in one queue.
  const ORDERS_KEY = 'bk_os_orders_v1';
  function seedOrders() {
    return [
      { id: '#A-241', who: 'Table 4', items: 'Bisi Kaapi ×2 · Masala Dosa', status: 'new', min: 0, source: 'walkin' },
      { id: '#A-240', who: 'Takeaway · Asha', items: 'Bella Kaapi · Filter Coffee Cake', status: 'brewing', min: 3, source: 'walkin' },
      { id: '#A-239', who: 'Table 9', items: 'Cardamom Latte · Cold Brew', status: 'brewing', min: 5, source: 'walkin' },
      { id: '#A-238', who: 'Swiggy · 8821', items: 'Mysore Bonda ×3', status: 'ready', min: 8, source: 'swiggy' },
      { id: '#A-237', who: 'Table 2', items: 'Cortado · Sukku Kaapi', status: 'new', min: 1, source: 'walkin' },
    ];
  }
  function loadOrders() {
    try { const raw = localStorage.getItem(ORDERS_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
    return seedOrders();
  }
  function saveOrders(orders) { try { localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)); } catch (e) {} }
  let orderSeq = 242;
  function nextOrderId() { return '#A-' + (orderSeq++); }
  function addOrder({ who, items, source = 'walkin' }) {
    const o = { id: nextOrderId(), who: who || 'Walk-in', items: items || '—', status: 'new', min: 0, source };
    state.orders = [o, ...state.orders];
    saveOrders(state.orders);
    logFeed(source === 'mobile' ? 'Customer Support' : 'Shipment', source === 'mobile' ? 'App' : SOURCE.online, `New order ${o.id} — ${o.who}`, 'active');
    return o;
  }
  function advanceOrder(id) {
    const FLOW = ['new', 'brewing', 'ready'];
    state.orders = state.orders.map((x) => { if (x.id !== id) return x; const i = FLOW.indexOf(x.status); return i < 2 ? { ...x, status: FLOW[i + 1] } : x; });
    saveOrders(state.orders); emit();
  }
  function clearOrder(id) {
    state.orders = state.orders.filter((x) => x.id !== id);
    saveOrders(state.orders); emit();
  }
  window.addEventListener('storage', (e) => { if (e.key === ORDERS_KEY) { state.orders = loadOrders(); emit(); } });

  // ---- Access management (roles → app grants) ----
  // Single source of truth for Bisi Kaapi OS role-based access. The Hub reads
  // this to gate the launcher; the Developer Portal's "Access" tab manages it.
  const APP_CATALOG = [
    { key: 'orchestrator', name: 'Agent Orchestrator', group: 'Operations', icon: 'bot' },
    { key: 'cafe',         name: 'Café Ops',            group: 'Operations', icon: 'store' },
    { key: 'roastery',     name: 'Roastery Ops',        group: 'Operations', icon: 'flame' },
    { key: 'supply',       name: 'Supply Chain',        group: 'Operations', icon: 'truck' },
    { key: 'finance',      name: 'Finance & Accounts',  group: 'Operations', icon: 'dollar' },
    { key: 'crm',          name: 'CRM & Marketing',     group: 'Operations', icon: 'megaphone' },
    { key: 'shopadmin',    name: 'Shop Admin',          group: 'Operations', icon: 'box' },
    { key: 'store',        name: 'Marketing Site',      group: 'Customer',   icon: 'coffee' },
    { key: 'shop',         name: 'Online Shop',         group: 'Customer',   icon: 'box' },
    { key: 'onboarding',    name: 'Onboarding & Kaapi Club', group: 'Customer', icon: 'award' },
    { key: 'devportal',    name: 'Developer Portal',    group: 'Platform',   icon: 'plug' },
    { key: 'content',       name: 'Content',             group: 'Platform',   icon: 'coffee' },
  ];
  const DEFAULT_ROLES = {
    owner:   { name: 'Owner / Admin', who: 'Akshay Meda', icon: 'shield', apps: ['orchestrator', 'cafe', 'roastery', 'supply', 'store', 'shop', 'onboarding', 'finance', 'shopadmin', 'devportal', 'crm', 'content'] },
    ops:     { name: 'Ops Director', who: 'Meera S', icon: 'grid', apps: ['orchestrator', 'cafe', 'roastery', 'supply', 'shop', 'onboarding', 'finance', 'shopadmin', 'crm', 'content'] },
    cafe:    { name: 'Café Manager', who: 'Asha R', icon: 'store', apps: ['cafe', 'store', 'shop', 'onboarding', 'content'] },
    roaster: { name: 'Head Roaster', who: 'Bala K', icon: 'flame', apps: ['roastery'] },
    supply:  { name: 'Supply Lead', who: 'Dev P', icon: 'truck', apps: ['supply', 'orchestrator'] },
    finance: { name: 'Finance', who: 'Chitra M', icon: 'dollar', apps: ['orchestrator', 'finance', 'shop'] },
  };

  const DEFAULT_CONFIG = {
    org: { name: 'Bisi Kaapi', outlet: 'Jayanagar · Bengaluru', currency: '₹', locale: 'en' },
    streaming: true,
    access: { roles: DEFAULT_ROLES },
    dataMode: 'live', // 'live' (auto stream) | 'manual' (paused, human-edited)
    refreshMs: 4000,
    autonomy: 'supervised', // supervised | autonomous
    features: { aiInsights: true, claudeCommerce: true, approvals: true, notifications: true },
    integrations: seedIntegrations(),
    // derived source->bool map kept in sync for the stream filter
    connectors: connectorsFromIntegrations(seedIntegrations()),
  };

  function loadConfig() {
    try {
      const raw = localStorage.getItem(CONFIG_KEY);
      if (raw) return deepMerge(structuredClone(DEFAULT_CONFIG), JSON.parse(raw));
    } catch (e) {}
    return structuredClone(DEFAULT_CONFIG);
  }
  function saveConfig() { try { localStorage.setItem(CONFIG_KEY, JSON.stringify(config)); } catch (e) {} }
  function deepMerge(a, b) { for (const k in b) { if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k])) a[k] = deepMerge(a[k] || {}, b[k]); else a[k] = b[k]; } return a; }

  let config = loadConfig();

  // ---- which source each kind of event comes from ----
  const SOURCE = {
    order: 'Square POS', online: 'Shopify', pay: 'Razorpay', ledger: 'Tally',
    ship: 'Shiprocket', msg: 'WhatsApp', email: 'Gmail', team: 'Slack', sheet: 'Google Sheets',
  };

  // ---- seed state ----
  function seed() {
    return {
      kpis: {
        revenue: 324000, orders: 142, batches: 3, onTime: 96,
        cafeSales: 48260, roastedKg: 53, pendingApprovals: 4,
      },
      agents: [
        { id: 'sourcing', name: 'Sourcing', unit: 'Supply Chain', icon: 'leaf', status: 'active', task: 'Negotiating Q3 green contract — Baba Budangiri estate', metric: '12', metricLabel: 'estates', src: 'Google Sheets' },
        { id: 'roasting', name: 'Roasting', unit: 'Roastery', icon: 'coffee', status: 'active', task: 'Profiling batch #2048 — Coorg medium-dark', metric: '3', metricLabel: 'batches', src: 'Square POS' },
        { id: 'inventory', name: 'Inventory', unit: 'Roastery', icon: 'box', status: 'waiting', task: 'Reorder point hit: Mysore Filter 250g', metric: '94%', metricLabel: 'fill rate', src: 'Google Sheets' },
        { id: 'otp', name: 'Order-to-Pay', unit: 'Cross', icon: 'card', status: 'active', task: 'Matching 38 POs against GRNs & invoices', metric: '38', metricLabel: 'in flight', src: 'Tally' },
        { id: 'accounts', name: 'Account Processing', unit: 'Cross', icon: 'receipt', status: 'approval', task: 'Vendor invoice ₹1,84,200 over tolerance', metric: '7', metricLabel: 'to post', src: 'Tally' },
        { id: 'shipment', name: 'Shipment & Logistics', unit: 'Supply Chain', icon: 'truck', status: 'active', task: 'Dispatching 142 online orders via Shiprocket', metric: '96%', metricLabel: 'on-time', src: 'Shiprocket' },
        { id: 'marketing', name: 'Marketing Comms', unit: 'Cross', icon: 'megaphone', status: 'approval', task: 'Drafted "New Coorg roast" campaign', metric: '5', metricLabel: 'channels', src: 'Gmail' },
        { id: 'support', name: 'Customer Support', unit: 'Café', icon: 'support', status: 'active', task: 'Resolved 23 chats · 2 escalations', metric: '1m48s', metricLabel: 'avg reply', src: 'WhatsApp' },
        { id: 'finance', name: 'Finance', unit: 'Cross', icon: 'dollar', status: 'active', task: 'Reconciling Razorpay settlements & GST', metric: '₹3.2L', metricLabel: 'today', src: 'Razorpay' },
        { id: 'time', name: 'Time Tracking', unit: 'Café', icon: 'clock', status: 'active', task: 'Clocked 18 baristas · 1 overtime flag', metric: '18', metricLabel: 'on shift', src: 'Zoho People' },
        { id: 'notify', name: 'Notifications', unit: 'Cross', icon: 'bell', status: 'active', task: 'Routed 64 alerts across channels', metric: '64', metricLabel: 'sent · 1h', src: 'Slack' },
        { id: 'connectors', name: 'Connectors', unit: 'Cross', icon: 'plug', status: 'active', task: 'Syncing all source systems', metric: '9/10', metricLabel: 'healthy', src: 'Google Sheets' },
      ],
      approvals: [
        { id: 'a1', agent: 'Account Processing', icon: 'receipt', title: 'Vendor invoice over tolerance', detail: 'Sunrise Estates · ₹1,84,200 — 6% above PO.', amount: '₹1,84,200', src: 'Tally' },
        { id: 'a2', agent: 'Marketing Comms', icon: 'megaphone', title: 'Send "New Coorg roast" campaign', detail: 'Email + WhatsApp + Instagram to 12,400 contacts.', amount: '12.4k reach', src: 'Gmail' },
        { id: 'a3', agent: 'Sourcing', icon: 'leaf', title: 'Approve Q3 green coffee contract', detail: 'Baba Budangiri · 800 kg @ ₹420/kg.', amount: '₹3,36,000', src: 'Google Sheets' },
        { id: 'a4', agent: 'Order-to-Pay', icon: 'card', title: 'Release supplier payment run', detail: '11 invoices · net-30 due today.', amount: '₹7,62,900', src: 'Razorpay' },
      ],
      feed: [
        { ts: '09:42', agent: 'Roasting', src: SOURCE.order, text: 'Started batch #2048 — Coorg, 12 kg, medium-dark', tone: 'active' },
        { ts: '09:39', agent: 'Shipment', src: SOURCE.ship, text: 'Handed 142 orders to Shiprocket · 3 RTO flagged', tone: 'active' },
        { ts: '09:36', agent: 'Inventory', src: SOURCE.sheet, text: 'Reorder point hit: Mysore Filter 250g (stock 40)', tone: 'waiting' },
        { ts: '09:31', agent: 'Finance', src: SOURCE.pay, text: 'Razorpay settlement ₹3,21,540 reconciled', tone: 'active' },
        { ts: '09:28', agent: 'Support', src: SOURCE.msg, text: 'Escalated ticket #8821 — wrong grind', tone: 'waiting' },
      ],
      orders: loadOrders(),
    };
  }

  let state = seed();

  // ---- event generators per source (simulated "pull") ----
  const CAFE_ITEMS = ['Bisi Kaapi', 'Bella Kaapi', 'Davara Kaapi', 'Cardamom Latte', 'Cold Brew', 'Masala Dosa', 'Mysore Bonda'];
  const randItems = () => { const n = 1 + Math.floor(Math.random() * 2); const picks = []; for (let i = 0; i < n; i++) picks.push(CAFE_ITEMS[Math.floor(Math.random() * CAFE_ITEMS.length)]); return picks.join(' · '); };
  const STREAM = [
    { src: SOURCE.online, agent: 'Shipment', tone: 'active', mk: () => `New online order #${1000 + Math.floor(Math.random() * 8999)} · ₹${(Math.floor(Math.random() * 6) + 2) * 100}`, kpi: (k) => { k.orders++; k.revenue += 240; }, order: () => ({ who: 'Online · Shopify', items: randItems(), source: 'online' }) },
    { src: SOURCE.order, agent: 'Support', tone: 'active', mk: () => `Café ticket settled · table ${Math.floor(Math.random() * 12) + 1}`, kpi: (k) => { k.cafeSales += 180; } },
    { src: SOURCE.pay, agent: 'Finance', tone: 'active', mk: () => `Razorpay capture ₹${(Math.floor(Math.random() * 9) + 1) * 100} settled`, kpi: (k) => { k.revenue += 300; } },
    { src: SOURCE.ship, agent: 'Shipment', tone: 'waiting', mk: () => `Delivery update — Coorg lane rerouted`, kpi: (k) => { k.onTime = Math.max(92, k.onTime - 1); } },
    { src: SOURCE.msg, agent: 'Notifications', tone: 'active', mk: () => `WhatsApp low-stock alert sent to roastery`, kpi: () => {} },
    { src: SOURCE.ledger, agent: 'Order-to-Pay', tone: 'active', mk: () => `Tally voucher posted · 3-way match passed`, kpi: () => {} },
    { src: SOURCE.team, agent: 'Marketing', tone: 'active', mk: () => `Slack: campaign A/B winner picked (+18% open)`, kpi: () => {} },
    { src: SOURCE.sheet, agent: 'Inventory', tone: 'waiting', mk: () => `Cycle count variance 0.4% — within tolerance`, kpi: () => {} },
    { src: 'WhatsApp', agent: 'Support', tone: 'active', mk: () => `WhatsApp: customer order confirmed via chat`, kpi: (k) => { k.orders++; }, wa: { from: 'Customer', text: 'Order confirmed — thanks! ☕' } },
    { src: 'WhatsApp', agent: 'Marketing', tone: 'active', mk: () => `WhatsApp broadcast delivered to 1,240 contacts`, kpi: () => {} },
    { src: 'Zomato', agent: 'Shipment', tone: 'active', mk: () => `Zomato order injected · ₹${(Math.floor(Math.random() * 5) + 2) * 100}`, kpi: (k) => { k.orders++; k.revenue += 260; }, order: () => ({ who: 'Zomato', items: randItems(), source: 'zomato' }) },
  ];

  // ---- pub/sub ----
  const subs = new Set();
  function emit() { state = { ...state }; subs.forEach((fn) => { try { fn(state); } catch (e) {} }); }
  function subscribe(fn) { subs.add(fn); return () => subs.delete(fn); }

  // ---- streaming engine ----
  let timer = null;
  function now() { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
  function tick() {
    // only stream from ENABLED connectors
    const live = STREAM.filter((s) => config.connectors[s.src]);
    if (!live.length) return;
    const e = live[Math.floor(Math.random() * live.length)];
    e.kpi(state.kpis);
    state.feed = [{ ts: now(), agent: e.agent, src: e.src, text: e.mk(), tone: e.tone, _k: Math.random() }, ...state.feed].slice(0, 60);
    if (e.wa) state.whatsapp = [{ ts: now(), from: e.wa.from, text: e.wa.text, _k: Math.random() }, ...(state.whatsapp || [])].slice(0, 30);
    if (e.order) { const o = e.order(); state.orders = [{ id: nextOrderId(), status: 'new', min: 0, ...o }, ...state.orders].slice(0, 40); saveOrders(state.orders); }
    emit();
  }
  function startStream() { stopStream(); if (config.streaming) timer = setInterval(tick, config.refreshMs); }
  function stopStream() { if (timer) { clearInterval(timer); timer = null; } }
  startStream();

  // ---- actions ----
  function decideApproval(id, ok) {
    const a = state.approvals.find((x) => x.id === id);
    state.approvals = state.approvals.filter((x) => x.id !== id);
    state.kpis.pendingApprovals = state.approvals.length;
    if (a) state.feed = [{ ts: now(), agent: a.agent, src: a.src, text: (ok ? 'Approved: ' : 'Rejected: ') + a.title, tone: ok ? 'active' : 'waiting', _k: Math.random() }, ...state.feed].slice(0, 60);
    emit();
  }

  // ---- config API ----
  function getConfig() { return config; }
  function setConfig(patch) {
    config = deepMerge(structuredClone(config), patch);
    config.connectors = connectorsFromIntegrations(config.integrations);
    saveConfig();
    startStream(); // re-apply streaming + refreshMs
    emit();
  }
  function resetConfig() { config = structuredClone(DEFAULT_CONFIG); saveConfig(); startStream(); emit(); }

  // ---- integration API (configurable tools with API keys) ----
  function listIntegrations() {
    return INTEGRATIONS.map((meta) => ({ ...meta, state: config.integrations[meta.id] || { enabled: false, connected: false, creds: {} } }));
  }
  function getIntegration(id) {
    const meta = INTEGRATIONS.find((i) => i.id === id);
    return meta ? { ...meta, state: config.integrations[id] || { enabled: false, connected: false, creds: {} } } : null;
  }
  // Save creds + mark connected when required fields are present.
  function connectIntegration(id, creds) {
    const meta = INTEGRATIONS.find((i) => i.id === id); if (!meta) return false;
    const merged = { ...(config.integrations[id] && config.integrations[id].creds), ...creds };
    const ok = meta.fields.every((f) => merged[f.k] && String(merged[f.k]).trim());
    setConfig({ integrations: { [id]: { creds: merged, connected: ok, enabled: ok } } });
    logFeed(meta.name, meta.source, ok ? `${meta.name} connected via API key` : `${meta.name} credentials saved (incomplete)`, ok ? 'active' : 'waiting');
    return ok;
  }
  function disconnectIntegration(id) {
    const meta = INTEGRATIONS.find((i) => i.id === id); if (!meta) return;
    setConfig({ integrations: { [id]: { enabled: false, connected: false } } });
    logFeed(meta.name, meta.source, `${meta.name} disconnected`, 'waiting');
  }
  function toggleIntegration(id, on) {
    const cur = config.integrations[id] || {};
    setConfig({ integrations: { [id]: { enabled: on && cur.connected } } });
  }
  function logFeed(agent, src, text, tone) {
    state.feed = [{ ts: now(), agent, src, text, tone, _k: Math.random() }, ...state.feed].slice(0, 60);
    emit();
  }

  // ---- manual edit API (human overrides alongside the live stream) ----
  // Data mode: 'live' streams auto events; 'manual' pauses the stream so
  // hand-entered values persist. Individual edits work in either mode.
  function setDataMode(mode) {
    config.dataMode = mode;
    // manual mode pauses auto-streaming so edits aren't overwritten
    config.streaming = (mode !== 'manual');
    saveConfig(); startStream(); emit();
  }
  function setKPI(key, value) {
    const num = typeof value === 'string' && value.trim() !== '' && !isNaN(+value) ? +value : value;
    state.kpis = { ...state.kpis, [key]: num };
    logFeed('Manual entry', 'Manual', `KPI updated — ${key} set to ${value}`, 'active');
  }
  function addFeedEntry({ agent = 'Manual entry', src = 'Manual', text, tone = 'active' }) {
    if (!text || !text.trim()) return;
    state.feed = [{ ts: now(), agent, src, text: text.trim(), tone, manual: true, _k: Math.random() }, ...state.feed].slice(0, 60);
    emit();
  }
  function updateFeedEntry(k, patch) {
    state.feed = state.feed.map((e) => e._k === k ? { ...e, ...patch, manual: true } : e);
    emit();
  }
  function removeFeedEntry(k) { state.feed = state.feed.filter((e) => e._k !== k); emit(); }
  function updateAgent(id, patch) {
    state.agents = state.agents.map((a) => a.id === id ? { ...a, ...patch, manual: true } : a);
    emit();
  }
  function addApproval({ title, detail = '', amount = '', agent = 'Manual entry', icon = 'clipboard', src = 'Manual' }) {
    if (!title || !title.trim()) return;
    state.approvals = [{ id: 'm' + Math.random().toString(36).slice(2, 7), title: title.trim(), detail, amount, agent, icon, src, manual: true }, ...state.approvals];
    state.kpis = { ...state.kpis, pendingApprovals: state.approvals.length };
    emit();
  }
  function updateApproval(id, patch) {
    state.approvals = state.approvals.map((a) => a.id === id ? { ...a, ...patch } : a);
    emit();
  }
  // ---- access API (role → app grants, managed from Developer Portal) ----
  function setRoleApps(roleKey, apps) {
    setConfig({ access: { roles: { [roleKey]: { apps } } } });
    const r = config.access.roles[roleKey];
    logFeed('Access control', 'Manual', `${r ? r.name : roleKey} access updated — ${apps.length} app(s) granted`, 'active');
  }
  function addRole(key, role) {
    if (!key || !key.trim() || config.access.roles[key]) return false;
    setConfig({ access: { roles: { [key]: { name: role.name || 'New role', who: role.who || 'Unassigned', icon: role.icon || 'user', apps: role.apps || [] } } } });
    logFeed('Access control', 'Manual', `Role "${role.name || key}" created`, 'active');
    return true;
  }
  function removeRole(key) {
    if (!config.access.roles[key]) return;
    const name = config.access.roles[key].name;
    const roles = { ...config.access.roles };
    delete roles[key];
    config.access = { ...config.access, roles };
    saveConfig(); emit();
    logFeed('Access control', 'Manual', `Role "${name}" removed`, 'waiting');
  }
  function renameRole(key, patch) {
    setConfig({ access: { roles: { [key]: patch } } });
  }
  function connectorHealth() {
    const list = INTEGRATIONS.map((i) => ({ n: i.name, source: i.source, ok: !!(config.integrations[i.id] && config.integrations[i.id].enabled && config.integrations[i.id].connected) }));
    return { on: list.filter((x) => x.ok).length, total: list.length, list };
  }

  window.BKData = {
    getState: () => state, subscribe, tick,
    getConfig, setConfig, resetConfig, connectorHealth,
    listIntegrations, getIntegration, connectIntegration, disconnectIntegration, toggleIntegration,
    decideApproval, startStream, stopStream,
    setDataMode, setKPI, addFeedEntry, updateFeedEntry, removeFeedEntry, updateAgent, addApproval, updateApproval, logFeed,
    setRoleApps, addRole, removeRole, renameRole,
    addOrder, advanceOrder, clearOrder,
    INTEGRATIONS, DEFAULT_CONFIG, APP_CATALOG,
  };

  // ---- React hooks (available once React is loaded) ----
  window.useBK = function (selector) {
    const [snap, set] = React.useState(() => (selector ? selector(state) : state));
    React.useEffect(() => window.BKData.subscribe((s) => set(selector ? selector(s) : s)), []);
    return snap;
  };
  window.useBKConfig = function () {
    const [cfg, set] = React.useState(config);
    React.useEffect(() => window.BKData.subscribe(() => set({ ...config })), []);
    return [cfg, window.BKData.setConfig];
  };
})();
