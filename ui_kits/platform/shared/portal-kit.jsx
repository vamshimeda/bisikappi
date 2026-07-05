// Shared scaffold for Bisi Kaapi internal ops portals (Café · Roastery · Supply Chain).
// Standalone: tokens + inline React, no DS bundle. Exposes window.PortalKit + window.PIcon.
const PORTAL_PATHS = {
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  store: 'M3 9l1.5-5h15L21 9M4 9v11h16V9M4 9h16M9 20v-6h6v6',
  flame: 'M12 2c1 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3 .5 2 2 2.5 2 2.5C9 8 12 6 12 2z',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  box: 'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8',
  warehouse: 'M22 8.35V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.35a2 2 0 0 1 1.26-1.86l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35zM6 18h12M6 14h12M6 10h12',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  calendar: 'M3 4h18v18H3zM3 10h18M8 2v4M16 2v4',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  checkCircle: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
  alert: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  plug: 'M9 2v6M15 2v6M12 8a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zM12 21v-6',
  sparkles: 'M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z',
  refresh: 'M23 4v6h-6M1 20v-6h6M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  check: 'M20 6L9 17l-5-5',
  x: 'M18 6L6 18M6 6l12 12',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.81 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.6l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 10 4.6V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 16 4.6l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 10H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  dollar: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2',
  thermometer: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z',
  scale: 'M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0L7 7zM17 7l-3 7a3 3 0 0 0 6 0l-3-7zM7 21h10',
  trendingUp: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  trendingDown: 'M23 18l-9.5-9.5-5 5L1 6M17 18h6v-6',
  clipboard: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z',
  droplet: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  plus: 'M12 5v14M5 12h14',
  receipt: 'M4 2v20l3-2 3 2 3-2 3 2 3-2V2l-3 2-3-2-3 2-3-2zM8 7h8M8 11h8M8 15h5',
  lock: 'M5 11h14v10H5zM8 11V8a4 4 0 0 1 8 0v3',
  shield: 'M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  chevronDown: 'M6 9l6 6 6-6',
  bot: 'M12 8V4M8 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM2 14h2M20 14h2M9 14v.01M15 14v.01',
};
function PIcon({ name, size = 18, color = 'currentColor', strokeWidth = 2, style }) {
  const d = PORTAL_PATHS[name] || '';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {d.split('M').filter(Boolean).map((s, i) => <path key={i} d={'M' + s} />)}
    </svg>
  );
}
window.PIcon = PIcon;

const ASSET = '../../../assets';

// ---- Shell ----
function DataModeToggle() {
  const cfg = window.useBKConfig ? window.useBKConfig()[0] : { dataMode: 'live' };
  const mode = cfg.dataMode || 'live';
  return (
    <div style={{ display: 'flex', gap: 3, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: 3 }}>
      {[['live', 'Live'], ['manual', 'Manual']].map(([m, lbl]) => (
        <button key={m} onClick={() => window.BKData && window.BKData.setDataMode(m)} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '5px 11px', fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 600, background: mode === m ? 'var(--color-primary)' : 'transparent', color: mode === m ? '#FFF7EE' : 'var(--text-secondary)' }}>{lbl}</button>
      ))}
    </div>
  );
}

function Shell({ portal, tagline, nav, onNav, headerTitle, headerRight, children }) {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>
      <aside style={{ width: 224, flexShrink: 0, background: 'var(--surface-dark)', color: 'var(--text-on-dark)', display: 'flex', flexDirection: 'column', padding: '20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 18px' }}>
          <img src={`${ASSET}/logo/bisi-kaapi-mark-cream.png`} width="32" height="32" alt="" />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, whiteSpace: 'nowrap' }}>Bisi Kaapi</div>
            <div style={{ fontSize: 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bk-brass-300)', marginTop: 2 }}>{portal}</div>
          </div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {nav.map((n) => (
            <a key={n.label} href="#" onClick={(e) => { e.preventDefault(); if (onNav) onNav(n.view || n.label); }} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: 13.5, fontWeight: n.active ? 600 : 500, color: n.active ? 'var(--bk-paper)' : 'rgba(255,247,238,0.64)', background: n.active ? 'rgba(255,247,238,0.10)' : 'transparent', cursor: 'pointer' }}>
              <PIcon name={n.icon} size={17} color={n.active ? 'var(--bk-brass-300)' : 'rgba(255,247,238,0.58)'} /> {n.label}
              {n.badge != null && <span style={{ marginLeft: 'auto', background: 'var(--color-primary)', color: '#fff', fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 600, minWidth: 18, height: 18, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px' }}>{n.badge}</span>}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <a href="../../platform/hub/index.html" onClick={(e) => { e.preventDefault(); window.location.assign('../../platform/hub/index.html' + window.location.search); }} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', marginBottom: 10, borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: 13, fontWeight: 600, color: 'var(--bk-brass-300)', background: 'rgba(255,247,238,0.06)', cursor: 'pointer' }}>
            <PIcon name="grid" size={16} color="var(--bk-brass-300)" /> Bisi Kaapi OS
          </a>
          <div style={{ background: 'rgba(255,247,238,0.06)', borderRadius: 'var(--radius-md)', padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 700, color: 'var(--bk-brass-300)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)', animation: 'bk-pulse 1.6s infinite' }} /> {tagline}
            </div>
          </div>
        </div>
      </aside>
      <div style={{ flex: 1, overflow: 'auto', background: 'var(--surface-sunken)' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(250,239,219,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-subtle)', padding: '14px 26px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 23, margin: 0 }}>{headerTitle}</h1>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
            {window.useBKConfig && <DataModeToggle />}
            {headerRight}
            <PIcon name="search" size={18} color="var(--text-secondary)" />
            <PIcon name="bell" size={18} color="var(--text-secondary)" />
            <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--bk-terracotta-100)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>RK</span>
          </div>
        </div>
        <div style={{ padding: '22px 26px 44px' }}>{children}</div>
      </div>
    </div>
  );
}

function Panel({ title, icon, action, children, pad = 18, style }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', ...style }}>
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '13px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          {icon && <PIcon name={icon} size={16} color="var(--text-brand)" />}
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', flex: 1 }}>{title}</span>
          {action}
        </div>
      )}
      <div style={{ padding: pad }}>{children}</div>
    </div>
  );
}

// ---- AdminShell: sidebar nav + a field/detail panel + a live preview pane.
// The CMS/admin-tool counterpart to Shell() — used by "edit X, see it live"
// tools (Content admin today; any future admin panel reuses this instead of
// hand-rolling the sidebar + two-pane layout again).
function AdminShell({ brand = 'Bisi Kaapi', portal, nav, onNav, user, onSignIn, onSignOut, panelWidth = 400, panelHeader, panelBody, toolbar, preview }) {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>
      <aside style={{ width: 216, flexShrink: 0, background: 'var(--surface-dark)', color: 'var(--text-on-dark)', display: 'flex', flexDirection: 'column', padding: '20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 18px' }}>
          <img src={`${ASSET}/logo/bisi-kaapi-mark-cream.png`} width="30" height="30" alt="" />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{brand}</div>
            <div style={{ fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bk-brass-300)', marginTop: 2 }}>{portal}</div>
          </div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {nav.map((p) => (
            <a key={p.id} href="#" onClick={(e) => { e.preventDefault(); onNav(p); }} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: 13.5, fontWeight: p.active ? 600 : 500, color: p.active ? 'var(--bk-paper)' : 'rgba(255,247,238,0.64)', background: p.active ? 'rgba(255,247,238,0.10)' : 'transparent' }}>
              <PIcon name={p.icon} size={16} color={p.active ? 'var(--bk-brass-300)' : 'rgba(255,247,238,0.58)'} /> {p.label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <a href="../../platform/hub/index.html" onClick={(e) => { e.preventDefault(); window.location.assign('../../platform/hub/index.html' + window.location.search); }} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', marginBottom: 10, borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: 13, fontWeight: 600, color: 'var(--bk-brass-300)', background: 'rgba(255,247,238,0.06)' }}>
            <PIcon name="grid" size={15} color="var(--bk-brass-300)" /> Bisi Kaapi OS
          </a>
          <div style={{ background: 'rgba(255,247,238,0.06)', borderRadius: 'var(--radius-md)', padding: 10, fontSize: 11.5 }}>
            {user ? (
              <>
                <div style={{ fontWeight: 700, color: 'var(--bk-brass-300)' }}>{user.name}</div>
                <div style={{ opacity: 0.7, marginTop: 2 }}>{user.roleKey}</div>
                {onSignOut && <button onClick={onSignOut} style={{ marginTop: 8, border: 'none', background: 'transparent', color: 'rgba(255,247,238,0.7)', fontSize: 11, cursor: 'pointer', padding: 0 }}>Sign out</button>}
              </>
            ) : (
              <>
                <div style={{ fontWeight: 700, color: 'var(--bk-brass-300)' }}>Viewing only</div>
                <div style={{ opacity: 0.7, marginTop: 2 }}>Sign in to save changes</div>
                {onSignIn && <button onClick={onSignIn} style={{ marginTop: 8, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '5px 10px', fontSize: 11.5, fontWeight: 700, cursor: 'pointer' }}>Sign in</button>}
              </>
            )}
          </div>
        </div>
      </aside>
      <div style={{ width: panelWidth, flexShrink: 0, borderRight: '1px solid var(--border-subtle)', background: 'var(--surface-sunken)', display: 'flex', flexDirection: 'column' }}>
        {panelHeader && <div style={{ padding: '16px 18px 12px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 10 }}>{panelHeader}</div>}
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 18px 30px' }}>{panelBody}</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {toolbar && <div style={{ padding: '10px 18px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-card)' }}>{toolbar}</div>}
        <div style={{ flex: 1, background: '#00000010', position: 'relative' }}>{preview}</div>
      </div>
    </div>
  );
}

function KPIRow({ items, editable, onEdit }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 14, marginBottom: 20 }}>
      {items.map((k, i) => (
        <div key={k.label} style={{ background: 'var(--surface-card)', border: `1px solid ${editable ? 'var(--bk-brass-300)' : 'var(--border-subtle)'}`, borderRadius: 'var(--radius-lg)', padding: 16, boxShadow: 'var(--shadow-xs)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <PIcon name={k.icon} size={18} color="var(--text-accent)" />
            {k.delta && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: k.down ? 'var(--danger)' : 'var(--success)' }}>{k.delta}</span>}
          </div>
          {editable ? (
            <input defaultValue={k.value} onBlur={(e) => onEdit && onEdit(i, e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }}
              style={{ width: '100%', marginTop: 9, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '4px 8px', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 19, color: 'var(--text-primary)', background: 'var(--bk-paper)', outline: 'none' }} />
          ) : (
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 25, color: 'var(--text-primary)', marginTop: 10 }}>{k.value}</div>
          )}
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 2 }}>{k.label}</div>
        </div>
      ))}
    </div>
  );
}

const STATUS_TONES = {
  good: { fg: '#3F5536', bg: 'var(--success-soft)', dot: 'var(--success)' },
  warn: { fg: '#8A5E12', bg: 'var(--warning-soft)', dot: 'var(--warning)' },
  bad: { fg: '#7C2A1E', bg: 'var(--danger-soft)', dot: 'var(--danger)' },
  idle: { fg: 'var(--text-muted)', bg: 'var(--bk-warm-100)', dot: 'var(--bk-warm-400)' },
  info: { fg: 'var(--text-brand)', bg: 'var(--bk-terracotta-100)', dot: 'var(--color-primary)' },
};
function StatusPill({ tone = 'idle', children, pulse }) {
  const s = STATUS_TONES[tone] || STATUS_TONES.idle;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 9px', borderRadius: 'var(--radius-pill)', background: s.bg, color: s.fg, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dot, animation: pulse ? 'bk-pulse 1.6s infinite' : 'none' }} />{children}
    </span>
  );
}

async function askClaude(prompt) {
  try { if (window.claude && window.claude.complete) return await window.claude.complete(prompt); } catch (e) {}
  return null;
}

// Reusable Claude insight panel. buildPrompt() -> string, fallback string.
function AIInsight({ title = 'AI Insight', buildPrompt, fallback }) {
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const gen = async () => {
    setLoading(true);
    const res = await askClaude(buildPrompt());
    setText(res || fallback);
    setLoading(false);
  };
  React.useEffect(() => { gen(); }, []);
  return (
    <Panel title={title} icon="sparkles" pad={16}
      action={<button onClick={gen} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '5px 9px', fontSize: 12, fontFamily: 'var(--font-sans)', fontWeight: 600, cursor: 'pointer' }}><PIcon name="refresh" size={13} /> Refresh</button>}>
      <div style={{ background: 'linear-gradient(180deg, rgba(196,154,72,0.10), transparent)', border: '1px solid var(--bk-brass-300)', borderRadius: 'var(--radius-md)', padding: 14, minHeight: 96 }}>
        {loading
          ? <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: 14 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', animation: 'bk-pulse 1s infinite' }} /> Analysing…</div>
          : <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-primary)', lineHeight: 1.65, whiteSpace: 'pre-wrap' }}>{text}</div>}
      </div>
    </Panel>
  );
}

window.PortalKit = { Shell, AdminShell, Panel, KPIRow, StatusPill, AIInsight, askClaude };
