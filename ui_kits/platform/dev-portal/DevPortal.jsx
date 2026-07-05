const { Shell, Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;

const NAV = [
  { icon: 'grid', label: 'Overview', view: 'overview' },
  { icon: 'lock', label: 'API keys', view: 'keys' },
  { icon: 'plug', label: 'Endpoints', view: 'endpoints' },
  { icon: 'bell', label: 'Webhooks', view: 'webhooks' },
  { icon: 'truck', label: 'Partners', badge: 2, view: 'partners' },
  { icon: 'shield', label: 'Access', view: 'access' },
];

const ENDPOINTS = [
  { m: 'GET', p: '/v1/products', d: 'List catalogue with price & stock' },
  { m: 'GET', p: '/v1/products/:id', d: 'Retrieve a single product' },
  { m: 'POST', p: '/v1/orders', d: 'Inject an order (delivery partners)' },
  { m: 'GET', p: '/v1/orders/:id', d: 'Order status & fulfilment' },
  { m: 'PATCH', p: '/v1/inventory/:id', d: 'Update stock level' },
  { m: 'GET', p: '/v1/stores', d: 'Store directory & hours' },
  { m: 'POST', p: '/v1/webhooks', d: 'Register a webhook endpoint' },
];
const M_TONE = { GET: 'good', POST: 'info', PATCH: 'warn', DELETE: 'bad' };
const EVENTS = ['order.created', 'order.updated', 'order.ready', 'inventory.low', 'payment.settled', 'menu.updated'];

function DevPortal() {
  const [view, setView] = React.useState('overview');
  const [toast, setToast] = React.useState(null);
  const [cfg] = window.useBKConfig();
  const ROLES = cfg.access.roles;
  const APP_CATALOG = window.BKData.APP_CATALOG;
  const [newRole, setNewRole] = React.useState({ name: '', who: '' });
  const [keys, setKeys] = React.useState([
    { id: 'k1', name: 'Storefront (publishable)', prefix: 'pk_live_', tail: '9f2a', scope: 'read', created: '12 Jun', last: '2m ago' },
    { id: 'k2', name: 'Server (secret)', prefix: 'sk_live_', tail: 'c71e', scope: 'read/write', created: '12 Jun', last: '14s ago' },
    { id: 'k3', name: 'Zomato partner', prefix: 'pk_prt_', tail: 'z88a', scope: 'orders', created: '20 Jun', last: '1m ago' },
  ]);
  const [hooks, setHooks] = React.useState([
    { id: 'h1', url: 'https://zomato.com/webhooks/bisikaapi', events: ['order.created', 'order.updated'], ok: true },
    { id: 'h2', url: 'https://swiggy.com/partner/hooks/bk', events: ['order.created'], ok: true },
    { id: 'h3', url: 'https://hooks.internal.bisikaapi/os', events: ['inventory.low', 'payment.settled'], ok: false },
  ]);
  const [reveal, setReveal] = React.useState({});
  const [log, setLog] = React.useState([
    { ts: '09:42', partner: 'Zomato', ev: 'order.created', code: 201, id: 'ZOM-8841' },
    { ts: '09:39', partner: 'Swiggy', ev: 'order.created', code: 201, id: 'SWG-2207' },
    { ts: '09:33', partner: 'Zomato', ev: 'order.updated', code: 200, id: 'ZOM-8840' },
  ]);

  const nav = NAV.map((n) => ({ ...n, active: n.view === view, badge: n.view === 'access' ? Object.keys(ROLES).length : n.badge }));
  const flash = (m) => { setToast(m); setTimeout(() => setToast(null), 2000); };
  const now = () => { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); };
  const revoke = (id) => { setKeys((k) => k.filter((x) => x.id !== id)); flash('API key revoked'); };
  const rotate = (id) => { setKeys((k) => k.map((x) => x.id === id ? { ...x, tail: Math.random().toString(16).slice(2, 6), last: 'just now' } : x)); flash('Key rotated'); };
  const addKey = () => { setKeys((k) => [...k, { id: 'k' + Date.now(), name: 'New key', prefix: 'pk_live_', tail: Math.random().toString(16).slice(2, 6), scope: 'read', created: now(), last: 'never' }]); flash('API key created'); };
  const inject = (partner) => {
    const id = partner.slice(0, 3).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 8999);
    setLog((l) => [{ ts: now(), partner, ev: 'order.created', code: 201, id, _k: Math.random() }, ...l].slice(0, 40));
    try { if (window.BKData) window.BKData.tick(); } catch (e) {}
    flash(partner + ' order ' + id + ' injected → POST /v1/orders');
  };

  const partners = [
    { name: 'Zomato', cat: 'Delivery marketplace', ok: true, orders: 128, img: 'truck' },
    { name: 'Swiggy', cat: 'Delivery marketplace', ok: true, orders: 96, img: 'truck' },
    { name: 'DotPe', cat: 'QR ordering', ok: false, orders: 0, img: 'plug' },
    { name: 'Google Reserve', cat: 'Bookings', ok: false, orders: 0, img: 'calendar' },
  ];

  const kpis = [
    { icon: 'plug', value: '18.4k', label: 'API calls today', delta: '+11%' },
    { icon: 'lock', value: String(keys.length), label: 'Active keys' },
    { icon: 'bell', value: String(hooks.filter((h) => h.ok).length) + '/' + hooks.length, label: 'Webhooks healthy' },
    { icon: 'truck', value: String(partners.filter((p) => p.ok).length), label: 'Live partners' },
    { icon: 'checkCircle', value: '99.95%', label: 'Uptime' },
  ];

  const KeyRow = ({ k }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.4fr 100px 90px 150px', gap: 12, alignItems: 'center', padding: '12px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)' }}>{k.name}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)', background: 'var(--surface-sunken)', padding: '3px 8px', borderRadius: 'var(--radius-sm)' }}>{k.prefix}{reveal[k.id] ? '4b8e2f' + k.tail : '••••••'}{reveal[k.id] ? '' : k.tail}</code>
        <button onClick={() => setReveal((r) => ({ ...r, [k.id]: !r[k.id] }))} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 11, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{reveal[k.id] ? 'Hide' : 'Show'}</button>
      </span>
      <StatusPill tone={k.scope.includes('write') ? 'warn' : k.scope === 'orders' ? 'info' : 'good'}>{k.scope}</StatusPill>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>{k.last}</span>
      <span style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
        <button onClick={() => rotate(k.id)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '5px 9px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Rotate</button>
        <button onClick={() => revoke(k.id)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--danger)', borderRadius: 'var(--radius-sm)', padding: '5px 9px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Revoke</button>
      </span>
    </div>
  );

  const keysPanel = (
    <Panel title="API keys" icon="lock" pad={0} action={<button onClick={addKey} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 12px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: 'pointer' }}><PIcon name="plus" size={14} /> Create key</button>}>
      {keys.map((k) => <KeyRow key={k.id} k={k} />)}
      {keys.length === 0 && <div style={{ padding: 20, fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>No keys — create one to start.</div>}
    </Panel>
  );

  const endpointsPanel = (
    <Panel title="REST API — v1" icon="plug" pad={0} action={<code style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>https://api.bisikaapi.coffee</code>}>
      {ENDPOINTS.map((e) => (
        <div key={e.p} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ width: 58, textAlign: 'center', flexShrink: 0 }}><StatusPill tone={M_TONE[e.m]}>{e.m}</StatusPill></span>
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-primary)', minWidth: 200 }}>{e.p}</code>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-secondary)' }}>{e.d}</span>
        </div>
      ))}
    </Panel>
  );

  const webhooksPanel = (
    <Panel title="Webhook endpoints" icon="bell" pad={0} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{EVENTS.length} events available</span>}>
      {hooks.map((h) => (
        <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: h.ok ? 'var(--success)' : 'var(--danger)', flexShrink: 0, animation: h.ok ? 'bk-pulse 2s infinite' : 'none' }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-primary)' }}>{h.url}</code>
            <div style={{ display: 'flex', gap: 6, marginTop: 5, flexWrap: 'wrap' }}>{h.events.map((ev) => <span key={ev} style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-accent)', background: 'var(--bk-brass-100)', padding: '2px 7px', borderRadius: 999 }}>{ev}</span>)}</div>
          </div>
          <StatusPill tone={h.ok ? 'good' : 'bad'}>{h.ok ? 'Delivering' : 'Failing'}</StatusPill>
          <button onClick={() => { setHooks((hs) => hs.map((x) => x.id === h.id ? { ...x, ok: !x.ok } : x)); flash('Webhook ' + (h.ok ? 'paused' : 'resumed')); }} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '5px 10px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{h.ok ? 'Pause' : 'Resume'}</button>
        </div>
      ))}
    </Panel>
  );

  const partnersPanel = (
    <Panel title="Delivery & channel partners" icon="truck" pad={16} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--success)' }}>orders → POST /v1/orders → live store</span>}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
        {partners.map((p) => (
          <div key={p.name} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 14, background: 'var(--bk-paper)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PIcon name={p.img} size={17} color="var(--text-brand)" /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{p.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{p.cat}</div>
              </div>
              <StatusPill tone={p.ok ? 'good' : 'idle'}>{p.ok ? 'Connected' : 'Off'}</StatusPill>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>{p.orders} orders today</span>
              {p.ok
                ? <button onClick={() => inject(p.name)} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '6px 11px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}><PIcon name="plus" size={13} /> Inject test order</button>
                : <button onClick={() => flash(p.name + ' — enter partner API key in Settings')} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-brand)', borderRadius: 'var(--radius-sm)', padding: '6px 11px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Connect</button>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)', margin: '20px 0 10px' }}>Inbound order log</div>
      <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
        {log.map((e, i) => (
          <div key={e._k || i} style={{ display: 'grid', gridTemplateColumns: '54px 90px 1fr 70px 110px', gap: 10, alignItems: 'center', padding: '9px 13px', borderBottom: i < log.length - 1 ? '1px solid var(--border-subtle)' : 'none', animation: i === 0 ? 'bk-fade .3s ease' : 'none' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>{e.ts}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-primary)' }}>{e.partner}</span>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-accent)' }}>{e.ev}</code>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--success)' }}>{e.code}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', textAlign: 'right' }}>{e.id}</span>
          </div>
        ))}
      </div>
    </Panel>
  );

  const aiPanel = (
    <AIInsight title="AI API Insight"
      buildPrompt={() => `You are the developer-platform assistant for Bisi Kaapi's public API. Status: 18.4k calls today (+11%), ${keys.length} API keys, ${hooks.filter((h) => !h.ok).length} failing webhook (internal OS hook), Zomato + Swiggy connected injecting orders via POST /v1/orders, 99.95% uptime. Give exactly 3 short actions for the platform engineer, plain-text bullets starting with "• ".`}
      fallback={`• The internal OS webhook is failing — check its endpoint auth before inventory.low events pile up in the retry queue.
• Zomato & Swiggy are both live on POST /v1/orders; add idempotency keys so retried deliveries don't double-inject orders.
• The server secret key hasn't rotated since 12 Jun — rotate it and update the partner configs to keep credentials fresh.`} />
  );

  const toggleRoleApp = (roleKey, appKey) => {
    const role = ROLES[roleKey];
    const apps = role.apps.includes(appKey) ? role.apps.filter((a) => a !== appKey) : [...role.apps, appKey];
    window.BKData.setRoleApps(roleKey, apps);
  };
  const createRole = () => {
    if (!newRole.name.trim()) return;
    const key = newRole.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const ok = window.BKData.addRole(key, { name: newRole.name.trim(), who: newRole.who.trim() || 'Unassigned', icon: 'user', apps: [] });
    if (ok) { setNewRole({ name: '', who: '' }); flash('Role "' + newRole.name.trim() + '" created'); }
    else flash('A role with that name already exists');
  };

  const accessPanel = (
    <Panel title="Roles & app access" icon="shield" pad={0} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{Object.keys(ROLES).length} roles · {APP_CATALOG.length} apps</span>}>
      {Object.entries(ROLES).map(([k, r]) => (
        <div key={k} style={{ padding: '16px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 12 }}>
            <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'var(--bk-paper)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><PIcon name={r.icon} size={17} color="var(--text-brand)" /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)' }}>{r.name}</div>
              <input value={r.who} onChange={(e) => window.BKData.renameRole(k, { who: e.target.value })} style={{ border: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', padding: 0, width: '100%' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>{r.apps.length}/{APP_CATALOG.length} apps</span>
            <button onClick={() => { window.BKData.removeRole(k); flash('Role "' + r.name + '" removed'); }} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--danger)', borderRadius: 'var(--radius-sm)', padding: '5px 9px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Remove</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {APP_CATALOG.map((a) => {
              const on = r.apps.includes(a.key);
              return (
                <button key={a.key} onClick={() => toggleRoleApp(k, a.key)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid ' + (on ? 'var(--color-primary)' : 'var(--border-default)'), background: on ? 'var(--bk-terracotta-100)' : 'var(--surface-card)', color: on ? 'var(--text-brand)' : 'var(--text-muted)', borderRadius: 'var(--radius-pill)', padding: '5px 11px 5px 8px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  <PIcon name={on ? 'checkCircle' : a.icon} size={13} color={on ? 'var(--text-brand)' : 'var(--text-muted)'} /> {a.name}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div style={{ padding: '16px 18px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <input value={newRole.name} onChange={(e) => setNewRole((n) => ({ ...n, name: e.target.value }))} placeholder="New role name" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '8px 11px', fontFamily: 'var(--font-sans)', fontSize: 13, background: 'var(--surface-card)', color: 'var(--text-primary)' }} />
        <input value={newRole.who} onChange={(e) => setNewRole((n) => ({ ...n, who: e.target.value }))} placeholder="Assigned to" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '8px 11px', fontFamily: 'var(--font-sans)', fontSize: 13, background: 'var(--surface-card)', color: 'var(--text-primary)' }} />
        <button onClick={createRole} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '8px 14px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: 'pointer', whiteSpace: 'nowrap' }}><PIcon name="plus" size={14} /> Add role</button>
      </div>
    </Panel>
  );

  return (
    <Shell portal="Developer Platform" tagline="API healthy" headerTitle={({ overview: 'Developer portal', keys: 'API keys', endpoints: 'Endpoints', webhooks: 'Webhooks', partners: 'Partners', access: 'Access' })[view]}
      headerRight={<StatusPill tone="good" pulse>api.bisikaapi.coffee</StatusPill>} nav={nav} onNav={setView}>
      {view === 'overview' && <>
        <KPIRow items={kpis} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{partnersPanel}{endpointsPanel}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{aiPanel}{keysPanel}</div>
        </div>
      </>}
      {view === 'keys' && keysPanel}
      {view === 'endpoints' && endpointsPanel}
      {view === 'webhooks' && webhooksPanel}
      {view === 'partners' && partnersPanel}
      {view === 'access' && accessPanel}

      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderLeft: '4px solid var(--success)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', animation: 'bk-fade .3s ease', maxWidth: 380 }}>
          <PIcon name="check" size={16} color="var(--success)" /><span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{toast}</span>
        </div>
      )}
    </Shell>
  );
}

window.DevPortal = DevPortal;
