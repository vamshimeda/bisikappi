const OIcon = window.OIcon;
const ASSET = '../../../assets';

const UNITS = ['All', 'Café', 'Roastery', 'Supply Chain'];
const STATUS = {
  active:   { label: 'Working',  fg: '#3F5536', bg: 'var(--success-soft)', dot: 'var(--success)' },
  waiting:  { label: 'Waiting',  fg: '#8A5E12', bg: 'var(--warning-soft)', dot: 'var(--warning)' },
  approval: { label: 'Needs you', fg: '#7C2A1E', bg: 'var(--danger-soft)', dot: 'var(--danger)' },
  idle:     { label: 'Idle',     fg: 'var(--text-muted)', bg: 'var(--bk-warm-100)', dot: 'var(--bk-warm-400)' },
};

function StatusPill({ status }) {
  const s = STATUS[status];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 9px', borderRadius: 'var(--radius-pill)', background: s.bg, color: s.fg, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dot, animation: status === 'active' ? 'bk-pulse 1.6s infinite' : 'none' }} />{s.label}
    </span>
  );
}
function Panel({ title, icon, action, children, pad = 18, style }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', ...style }}>
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '14px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          {icon && <OIcon name={icon} size={17} color="var(--text-brand)" />}
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', flex: 1 }}>{title}</span>
          {action}
        </div>
      )}
      <div style={{ padding: pad }}>{children}</div>
    </div>
  );
}

async function askClaude(prompt) { try { if (window.claude && window.claude.complete) return await window.claude.complete(prompt); } catch (e) {} return null; }

function AIInsights({ unit, pendingCount }) {
  const [text, setText] = React.useState(''); const [loading, setLoading] = React.useState(false); const [q, setQ] = React.useState('');
  const FALLBACK = `• Roastery is the bottleneck today — Mysore Filter 250g hit its reorder point mid-roast. Action: bump a 250g roast ahead of the Coorg single-origin.
• A ₹7.62L payment run is queued against ₹3.2L settled today. Action: stagger the supplier run to net-30 dates to protect the float.
• On-time delivery slipped on the Coorg lane. Action: pre-book the alternate carrier before the evening dispatch.`;
  const gen = async (prompt, fb) => { setLoading(true); const r = await askClaude(prompt); setText(r || fb); setLoading(false); };
  React.useEffect(() => { gen(`You are the ops orchestrator for Bisi Kaapi coffee (café, roastery, supply chain). Focus: ${unit}. ${pendingCount} approvals pending, a stock reorder on Mysore Filter 250g, batch #2048 roasting, 142 orders dispatching, on-time 96%, ₹3.2L settled and a ₹7.62L payment run queued. Give exactly 3 crisp operational insights, each with one action, plain-text bullets starting with "• ".`, FALLBACK); }, []);
  const ask = async () => { if (!q.trim()) return; const question = q; setQ(''); gen(`You are the ops orchestrator for Bisi Kaapi coffee. Answer concisely in plain text (max 4 short bullets): "${question}"`, '• I could not reach the model just now — try again in a moment.'); };
  return (
    <Panel title="AI Operations Insight" icon="sparkles" pad={16}
      action={<button onClick={() => gen(`Refresh the 3-bullet ops briefing for Bisi Kaapi (${unit}), each with an action, bullets starting with "• ".`, FALLBACK)} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '5px 9px', fontSize: 12, fontFamily: 'var(--font-sans)', fontWeight: 600, cursor: 'pointer' }}><OIcon name="refresh" size={13} /> Refresh</button>}>
      <div style={{ background: 'linear-gradient(180deg, rgba(196,154,72,0.10), transparent)', border: '1px solid var(--bk-brass-300)', borderRadius: 'var(--radius-md)', padding: 14, minHeight: 120 }}>
        {loading ? <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: 14 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', animation: 'bk-pulse 1s infinite' }} /> Thinking through operations…</div>
          : <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-primary)', lineHeight: 1.65, whiteSpace: 'pre-wrap' }}>{text}</div>}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && ask()} placeholder="Ask the orchestrator…" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '9px 12px', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', background: 'var(--surface-card)', outline: 'none', boxShadow: 'var(--shadow-inset)' }} />
        <button onClick={ask} style={{ border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-md)', padding: '0 14px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><OIcon name="arrowRight" size={18} /></button>
      </div>
    </Panel>
  );
}

// ---- Settings (config) drawer ----
function Toggle({ on, onClick }) {
  return (
    <button onClick={onClick} style={{ width: 40, height: 23, borderRadius: 999, border: 'none', cursor: 'pointer', background: on ? 'var(--color-primary)' : 'var(--bk-warm-300)', position: 'relative', flexShrink: 0, transition: 'background .2s' }}>
      <span style={{ position: 'absolute', top: 3, left: on ? 20 : 3, width: 17, height: 17, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)', transition: 'left .2s' }} />
    </button>
  );
}
function Row({ label, sub, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 500, color: 'var(--text-primary)' }}>{label}</div>
        {sub && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{sub}</div>}
      </div>
      {children}
    </div>
  );
}
function IntegrationCard({ it }) {
  const connected = it.state.connected && it.state.enabled;
  const [openForm, setOpenForm] = React.useState(false);
  const [vals, setVals] = React.useState(() => ({ ...it.state.creds }));
  const [reveal, setReveal] = React.useState(false);
  const save = () => { window.BKData.connectIntegration(it.id, vals); setOpenForm(false); };
  return (
    <div style={{ border: `1px solid ${connected ? 'var(--bk-brass-300)' : 'var(--border-default)'}`, borderRadius: 'var(--radius-md)', background: connected ? 'linear-gradient(180deg, rgba(196,154,72,0.07), transparent)' : 'var(--bk-paper)', padding: 12, marginBottom: 9 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><OIcon name={it.icon} size={16} color="var(--text-brand)" /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-primary)' }}>{it.name}</span>
            {it.featured && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3F5536', background: 'var(--success-soft)', padding: '1px 6px', borderRadius: 999 }}>New</span>}
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-muted)' }}>{it.category}</div>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, color: connected ? '#3F5536' : 'var(--text-muted)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: connected ? 'var(--success)' : 'var(--bk-warm-400)' }} />{connected ? 'Connected' : 'Not set'}
        </span>
      </div>
      <div style={{ display: 'flex', gap: 7, marginTop: 10 }}>
        <button onClick={() => setOpenForm((o) => !o)} style={{ flex: 1, border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '6px 0', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>{connected ? 'Manage keys' : 'Add API key'}</button>
        {connected && <button onClick={() => window.BKData.disconnectIntegration(it.id)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--danger)', borderRadius: 'var(--radius-sm)', padding: '6px 12px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Disconnect</button>}
      </div>
      {openForm && (
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {it.fields.map((f) => (
            <div key={f.k}>
              <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 3 }}>{f.label}{f.secret && <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> · secret</span>}</label>
              <input value={vals[f.k] || ''} onChange={(e) => setVals((v) => ({ ...v, [f.k]: e.target.value }))} placeholder={f.ph || (f.secret ? '••••••••' : '')} type={f.secret && !reveal ? 'password' : 'text'}
                style={{ width: '100%', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '7px 10px', fontFamily: f.secret ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-primary)', background: 'var(--surface-card)', outline: 'none' }} />
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 2 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)', cursor: 'pointer' }}>
              <input type="checkbox" checked={reveal} onChange={(e) => setReveal(e.target.checked)} /> Show secrets
            </label>
            <a href={'https://' + it.docs} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-brand)', marginLeft: 'auto' }}>Docs ↗</a>
          </div>
          <button onClick={save} style={{ border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '8px 0', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, cursor: 'pointer', marginTop: 2 }}>Save & connect</button>
        </div>
      )}
    </div>
  );
}
function IntegrationManager() {
  useBKConfigRerender();
  const items = window.BKData.listIntegrations();
  const health = window.BKData.connectorHealth();
  const [filter, setFilter] = React.useState('All');
  const cats = ['All', ...Array.from(new Set(items.map((i) => i.category)))];
  const shown = filter === 'All' ? items : items.filter((i) => i.category === filter);
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--success)', margin: '2px 0 10px' }}>{health.on}/{health.total} connected</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
        {cats.map((c) => <button key={c} onClick={() => setFilter(c)} style={{ border: '1px solid var(--border-strong)', background: filter === c ? 'var(--color-primary)' : 'var(--surface-card)', color: filter === c ? '#fff' : 'var(--text-secondary)', borderRadius: 'var(--radius-pill)', padding: '4px 10px', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>{c}</button>)}
      </div>
      {shown.map((it) => <IntegrationCard key={it.id} it={it} />)}
    </div>
  );
}
// re-render integration manager when config changes
function useBKConfigRerender() {
  const [, set] = React.useState(0);
  React.useEffect(() => window.BKData.subscribe(() => set((n) => n + 1)), []);
}
function SettingsDrawer({ open, onClose }) {
  const [cfg, setCfg] = window.useBKConfig();
  const sec = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)', margin: '18px 0 2px' };
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 90, pointerEvents: open ? 'auto' : 'none' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(43,22,7,0.42)', opacity: open ? 1 : 0, transition: 'opacity .3s' }} />
      <aside style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 400, maxWidth: '94vw', background: 'var(--surface-card)', boxShadow: 'var(--shadow-xl)', transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .32s var(--ease-out)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
          <OIcon name="settings" size={18} color="var(--text-brand)" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, color: 'var(--text-primary)', flex: 1 }}>Configuration</span>
          <button onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex' }}><OIcon name="x" size={20} color="var(--text-secondary)" /></button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 20px 24px' }}>
          <div style={sec}>Organisation</div>
          <Row label="Outlet" sub={cfg.org.outlet}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{cfg.org.currency}</span></Row>

          <div style={sec}>Live data stream</div>
          <Row label="Streaming" sub={cfg.streaming ? 'Receiving live events' : 'Paused'}><Toggle on={cfg.streaming} onClick={() => setCfg({ streaming: !cfg.streaming })} /></Row>
          <Row label="Refresh rate" sub={`Every ${(cfg.refreshMs / 1000).toFixed(1)}s`}>
            <input type="range" min="1000" max="10000" step="500" value={cfg.refreshMs} onChange={(e) => setCfg({ refreshMs: +e.target.value })} style={{ width: 130, accentColor: 'var(--color-primary)' }} />
          </Row>
          <Row label="Autonomy" sub="Human-in-loop on spend & comms">
            <div style={{ display: 'flex', gap: 4, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', padding: 3 }}>
              {['supervised', 'autonomous'].map((a) => <button key={a} onClick={() => setCfg({ autonomy: a })} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '4px 10px', fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 600, textTransform: 'capitalize', background: cfg.autonomy === a ? 'var(--color-primary)' : 'transparent', color: cfg.autonomy === a ? '#fff' : 'var(--text-secondary)' }}>{a}</button>)}
            </div>
          </Row>

          <div style={sec}>Features</div>
          {Object.entries(cfg.features).map(([k, v]) => (
            <Row key={k} label={k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())}><Toggle on={v} onClick={() => setCfg({ features: { [k]: !v } })} /></Row>
          ))}

          <div style={sec}>Integrations & API keys</div>
          <IntegrationManager />

          <button onClick={() => window.BKData.resetConfig()} style={{ marginTop: 18, width: '100%', border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-md)', padding: '10px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Reset to defaults</button>
        </div>
      </aside>
    </div>
  );
}

function FeedComposer() {
  const [text, setText] = React.useState('');
  const [tone, setTone] = React.useState('active');
  const add = () => { if (!text.trim()) return; window.BKData.addFeedEntry({ text, tone }); setText(''); };
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '12px 18px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bk-brass-100)' }}>
      <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && add()} placeholder="Log a manual entry…" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '8px 11px', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', background: 'var(--surface-card)', outline: 'none' }} />
      <select value={tone} onChange={(e) => setTone(e.target.value)} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '8px', fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', background: 'var(--surface-card)' }}>
        <option value="active">Active</option>
        <option value="waiting">Waiting</option>
      </select>
      <button onClick={add} style={{ border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '8px 14px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: 'pointer', whiteSpace: 'nowrap' }}>Add</button>
    </div>
  );
}

// ---- main ----
function Orchestrator() {
  const state = window.useBK();
  const [cfg] = window.useBKConfig();
  const [unit, setUnit] = React.useState('All');
  const [toast, setToast] = React.useState(null);
  const [settings, setSettings] = React.useState(false);
  const [view, setView] = React.useState('overview');

  const agents = state.agents.filter((a) => unit === 'All' || a.unit === unit || a.unit === 'Cross');
  const health = window.BKData.connectorHealth();
  const cur = cfg.org.currency;

  const decide = (a, ok) => { window.BKData.decideApproval(a.id, ok); setToast({ ok, title: a.title }); setTimeout(() => setToast(null), 2600); };

  const k = state.kpis;
  const manual = cfg.dataMode === 'manual';
  const kpis = [
    { label: 'Revenue today', k: 'revenue', value: `${cur}${(k.revenue / 100000).toFixed(2)}L`, raw: k.revenue, icon: 'dollar', delta: '+12%' },
    { label: 'Orders', k: 'orders', value: String(k.orders), raw: k.orders, icon: 'truck', delta: '+8%' },
    { label: 'Batches roasting', k: 'batches', value: String(k.batches), raw: k.batches, icon: 'coffee', delta: 'on track' },
    { label: 'On-time delivery', k: 'onTime', value: k.onTime + '%', raw: k.onTime, icon: 'checkCircle', delta: '' },
    { label: 'Pending approvals', value: String(state.approvals.length), icon: 'alert', delta: state.approvals.length ? 'review' : 'clear' },
  ];
  const NAV = [['grid', 'Overview', 'overview'], ['bot', 'Agents', 'agents'], ['list', 'Task feed', 'feed'], ['checkCircle', 'Approvals', 'approvals'], ['plug', 'Connectors', 'connectors'], ['settings', 'Settings', 'settings']];
  const VIEW_TITLE = { overview: 'Operations', agents: 'Agent roster', feed: 'Live task feed', approvals: 'Approvals', connectors: 'Connected sources' };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>
      <aside style={{ width: 230, flexShrink: 0, background: 'var(--surface-dark)', color: 'var(--text-on-dark)', display: 'flex', flexDirection: 'column', padding: '20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 18px' }}>
          <img src={`${ASSET}/logo/bisi-kaapi-mark-cream.png`} width="34" height="34" alt="" />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, whiteSpace: 'nowrap' }}>Bisi Kaapi</div>
            <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bk-brass-300)', marginTop: 2 }}>Ops Orchestrator</div>
          </div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {NAV.map(([ic, label, v]) => {
            const active = v === view;
            return (
            <a key={label} href="#" onClick={(e) => { e.preventDefault(); v === 'settings' ? setSettings(true) : setView(v); }} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '10px 12px', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: 14, fontWeight: active ? 600 : 500, color: active ? 'var(--bk-paper)' : 'rgba(255,247,238,0.66)', background: active ? 'rgba(255,247,238,0.10)' : 'transparent' }}>
              <OIcon name={ic} size={18} color={active ? 'var(--bk-brass-300)' : 'rgba(255,247,238,0.6)'} /> {label}
            </a>
          ); })}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <a href="../../platform/hub/index.html" onClick={(e) => { e.preventDefault(); window.location.assign('../../platform/hub/index.html' + window.location.search); }} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', marginBottom: 10, borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: 13, fontWeight: 600, color: 'var(--bk-brass-300)', background: 'rgba(255,247,238,0.06)', cursor: 'pointer' }}>
            <OIcon name="grid" size={16} color="var(--bk-brass-300)" /> Bisi Kaapi OS
          </a>
          <div style={{ background: 'rgba(255,247,238,0.06)', borderRadius: 'var(--radius-md)', padding: 13 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 700, color: 'var(--bk-brass-300)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: cfg.streaming ? 'var(--success)' : 'var(--bk-warm-400)', animation: cfg.streaming ? 'bk-pulse 1.6s infinite' : 'none' }} /> {state.agents.length} agents · {health.on}/{health.total} sources
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,247,238,0.6)', marginTop: 5, lineHeight: 1.5, textTransform: 'capitalize' }}>Autonomy: {cfg.autonomy}</div>
          </div>
        </div>
      </aside>

      <div style={{ flex: 1, overflow: 'auto', background: 'var(--surface-sunken)' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(250,239,219,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-subtle)', padding: '14px 26px', display: 'flex', alignItems: 'center', gap: 18 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, margin: 0 }}>{VIEW_TITLE[view]}</h1>
          <div style={{ display: 'flex', gap: 6, marginLeft: 8, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: 3 }}>
            {UNITS.map((u) => <button key={u} onClick={() => setUnit(u)} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '6px 13px', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, background: unit === u ? 'var(--color-primary)' : 'transparent', color: unit === u ? '#FFF7EE' : 'var(--text-secondary)' }}>{u}</button>)}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', gap: 3, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: 3 }}>
              {[['live', 'Live'], ['manual', 'Manual']].map(([m, lbl]) => (
                <button key={m} onClick={() => window.BKData.setDataMode(m)} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '5px 12px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, background: cfg.dataMode === m ? 'var(--color-primary)' : 'transparent', color: cfg.dataMode === m ? '#FFF7EE' : 'var(--text-secondary)' }}>{lbl}</button>
              ))}
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: cfg.streaming ? 'var(--success)' : 'var(--text-muted)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: cfg.streaming ? 'var(--success)' : 'var(--bk-warm-400)', animation: cfg.streaming ? 'bk-pulse 1.6s infinite' : 'none' }} /> {manual ? 'Manual entry' : (cfg.streaming ? 'Live' : 'Paused')}
            </span>
            <button onClick={() => setSettings(true)} aria-label="Settings" style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex' }}><OIcon name="settings" size={19} color="var(--text-secondary)" /></button>
            <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--bk-terracotta-100)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>RK</span>
          </div>
        </div>

        <div style={{ padding: '22px 26px 40px' }}>
          {(view === 'overview' || view === 'agents') && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 22 }}>
            {kpis.map((kp) => (
              <div key={kp.label} style={{ background: 'var(--surface-card)', border: `1px solid ${manual && kp.k ? 'var(--bk-brass-300)' : 'var(--border-subtle)'}`, borderRadius: 'var(--radius-lg)', padding: 16, boxShadow: 'var(--shadow-xs)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <OIcon name={kp.icon} size={18} color="var(--text-accent)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{kp.delta}</span>
                </div>
                {manual && kp.k ? (
                  <input type="number" defaultValue={kp.raw} onBlur={(e) => window.BKData.setKPI(kp.k, e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }}
                    style={{ width: '100%', marginTop: 8, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '5px 8px', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 20, color: 'var(--text-primary)', background: 'var(--bk-paper)', outline: 'none' }} />
                ) : (
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 26, color: 'var(--text-primary)', marginTop: 10 }}>{kp.value}</div>
                )}
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 2 }}>{kp.label}</div>
              </div>
            ))}
          </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: view === 'overview' ? '1.62fr 1fr' : '1fr', gap: 20, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {(view === 'overview' || view === 'agents') && (
              <Panel title={`Agent roster · ${agents.length}`} icon="bot" pad={16}>
                <div style={{ display: 'grid', gridTemplateColumns: view === 'agents' ? 'repeat(3,1fr)' : 'repeat(2,1fr)', gap: 13 }}>
                  {agents.map((a) => (
                    <div key={a.id} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 14, background: a.status === 'approval' ? 'var(--danger-soft)' : 'var(--bk-paper)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
                        <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><OIcon name={a.icon} size={18} color="var(--text-brand)" /></span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-primary)' }}>{a.name}</div>
                          <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>via {a.src}</div>
                        </div>
                        <StatusPill status={a.status} />
                      </div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.45, minHeight: 36 }}>{a.task}</div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 10, paddingTop: 9, borderTop: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{a.metric}</span>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{a.metricLabel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
              )}

              {(view === 'overview' || view === 'feed') && (
              <Panel title="Live task feed" icon="list" pad={0} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: cfg.streaming ? 'var(--success)' : 'var(--text-muted)' }}>{manual ? 'manual' : (cfg.streaming ? 'streaming' : 'paused')}</span>}>
                {manual && <FeedComposer />}
                <div style={{ maxHeight: view === 'feed' ? 'none' : 320, overflow: 'auto' }}>
                  {state.feed.map((e, i) => (
                    <div key={e._k || i} style={{ display: 'flex', gap: 12, padding: '11px 18px', borderBottom: '1px solid var(--border-subtle)', animation: i === 0 ? 'bk-fade 0.3s ease' : 'none', background: e.manual ? 'var(--bk-brass-100)' : 'transparent' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', flexShrink: 0, width: 40 }}>{e.ts}</span>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: STATUS[e.tone === 'active' ? 'active' : 'waiting'].dot, marginTop: 5, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12.5, color: 'var(--text-brand)' }}>{e.agent}</span>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)' }}> — {e.text}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)', marginLeft: 6 }}>· {e.src}</span>
                      </div>
                      {manual && <button onClick={() => window.BKData.removeFeedEntry(e._k)} title="Remove" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)', flexShrink: 0 }}><OIcon name="x" size={13} color="var(--text-muted)" /></button>}
                    </div>
                  ))}
                </div>
              </Panel>
              )}
            </div>

            <div style={{ display: (view === 'overview' || view === 'approvals' || view === 'connectors') ? 'flex' : 'none', flexDirection: 'column', gap: 20 }}>
              {view === 'overview' && cfg.features.aiInsights && <AIInsights unit={unit} pendingCount={state.approvals.length} />}

              {(view === 'overview' || view === 'approvals') && cfg.features.approvals && (
                <Panel title={`Approvals · ${state.approvals.length}`} icon="checkCircle" pad={14}>
                  {state.approvals.length === 0 && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', padding: '10px 2px' }}>All clear — nothing needs you right now. ☕</div>}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {state.approvals.map((a) => (
                      <div key={a.id} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 13, background: 'var(--bk-paper)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                          <OIcon name={a.icon} size={15} color="var(--text-brand)" />
                          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: 'var(--text-primary)', flex: 1 }}>{a.title}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--text-accent)' }}>{a.amount}</span>
                        </div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.45 }}>{a.detail}</div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 11 }}>
                          <button onClick={() => decide(a, true)} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '8px 0', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}><OIcon name="check" size={15} /> Approve</button>
                          <button onClick={() => decide(a, false)} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '8px 0', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}><OIcon name="x" size={15} /> Reject</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              )}

              <Panel title="Connected sources" icon="plug" pad={14} action={(view === 'overview' || view === 'connectors') ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--success)' }}>{health.on}/{health.total} live</span> : null} style={{ display: (view === 'overview' || view === 'connectors') ? 'block' : 'none' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
                  {health.list.map((c) => (
                    <div key={c.n} style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '8px 10px', background: 'var(--bk-paper)', opacity: c.ok ? 1 : 0.55 }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: c.ok ? 'var(--success)' : 'var(--bk-warm-400)', flexShrink: 0, animation: c.ok ? 'bk-pulse 2s infinite' : 'none' }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-primary)', fontWeight: 500 }}>{c.n}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>

      <SettingsDrawer open={settings} onClose={() => setSettings(false)} />

      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100, display: 'flex', alignItems: 'center', gap: 11, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderLeft: `4px solid ${toast.ok ? 'var(--success)' : 'var(--warning)'}`, borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '13px 16px', animation: 'bk-fade 0.3s ease' }}>
          <span style={{ width: 26, height: 26, borderRadius: '50%', background: toast.ok ? 'var(--success)' : 'var(--warning)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><OIcon name={toast.ok ? 'check' : 'x'} size={15} color="#fff" /></span>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-primary)' }}>{toast.ok ? 'Approved' : 'Rejected'}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-secondary)' }}>{toast.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

window.Orchestrator = Orchestrator;
