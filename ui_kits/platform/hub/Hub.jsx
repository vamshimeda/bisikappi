const { Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;
const ASSET = '../../../assets';

// ---- Apps (portals) ----
const APPS = [
  { key: 'orchestrator', group: 'Operations', name: 'Agent Orchestrator', desc: 'Run the business with 12 AI agents — feed, approvals, connectors.', icon: 'bot', href: '../../ops/orchestrator/index.html', status: 'live', accent: 'var(--color-primary)' },
  { key: 'cafe', group: 'Operations', name: 'Café Ops', desc: 'Front-of-house — live orders, 86 board, shifts, inventory.', icon: 'store', href: '../../ops/cafe-portal/index.html', status: 'live', accent: 'var(--bk-terracotta-500)' },
  { key: 'roastery', group: 'Operations', name: 'Roastery Ops', desc: 'Roast batches, green stock, QC, packaging.', icon: 'flame', href: '../../ops/roastery-portal/index.html', status: 'live', accent: 'var(--bk-coffee-700)' },
  { key: 'supply', group: 'Operations', name: 'Supply Chain', desc: 'Suppliers, procurement, deliveries, warehouse.', icon: 'truck', href: '../../ops/supply-portal/index.html', status: 'live', accent: 'var(--bk-brass-600)' },
  { key: 'finance', group: 'Operations', name: 'Finance & Accounts', desc: 'P&L, Tally-synced ledger, balance sheet, cash flow.', icon: 'dollar', href: '../../ops/finance-portal/index.html', status: 'live', accent: 'var(--bk-coffee-600)' },
  { key: 'crm', group: 'Operations', name: 'CRM & Marketing', desc: 'Campaigns, segments, journeys, offers & A/B.', icon: 'megaphone', href: '../../ops/crm-portal/index.html', status: 'live', accent: 'var(--bk-marigold-600)' },
  { key: 'shopadmin', group: 'Operations', name: 'Shop Admin', desc: 'Manage catalogue — inventory, pricing, availability.', icon: 'box', href: '../../ops/shop-admin/index.html', status: 'live', accent: 'var(--bk-terracotta-600)' },
  { key: 'store', group: 'Customer', name: 'Marketing Site', desc: 'Public storefront, story, products & Claude Commerce.', icon: 'coffee', href: '../../customer/marketing/index.html', status: 'live', accent: 'var(--bk-marigold-600)' },
  { key: 'shop', group: 'Customer', name: 'Online Shop', desc: 'Beans & gear catalogue, product detail, checkout.', icon: 'box', href: '../../customer/shop/index.html', status: 'live', accent: 'var(--bk-cardamom, #5E7A4F)' },
  { key: 'onboarding', group: 'Customer', name: 'Onboarding & Kaapi Club', desc: 'Sign-up, taste profile & rewards dashboard.', icon: 'award', href: '../../customer/onboarding/index.html', status: 'live', accent: 'var(--bk-marigold-500, #D9A441)' },
  { key: 'devportal', group: 'Platform', name: 'Developer Portal', desc: 'Public API — keys, endpoints, webhooks, Zomato/Swiggy.', icon: 'plug', href: '../dev-portal/index.html', status: 'live', accent: 'var(--bk-coffee-700)' },
  { key: 'content', group: 'Platform', name: 'Content', desc: 'Edit marketing copy, EN/Kannada strings & product catalogue.', icon: 'coffee', href: '../content-admin/index.html', status: 'live', accent: 'var(--bk-terracotta-500)' },
];
const SECTIONS = ['Operations', 'Customer', 'Platform'];

// ---- Roles & access ----
// Sourced live from window.BKData (managed in the Developer Portal → Access
// tab), so a grant/revoke there reflects here immediately.

const KPIS = {
  orchestrator: { icon: 'dollar', value: '₹3.24L', label: 'Revenue today', delta: '+12%' },
  cafe: { icon: 'store', value: '₹48.2K', label: 'Café sales', delta: '+9%' },
  finance: { icon: 'dollar', value: '₹1.95L', label: 'Net profit (MTD)', delta: '+6%' },
  roastery: { icon: 'flame', value: '53 kg', label: 'Roasted today', delta: '+6%' },
  supply: { icon: 'truck', value: '96%', label: 'On-time delivery', down: true, delta: '-1%' },
  store: { icon: 'coffee', value: '142', label: 'Online orders', delta: '+8%' },
  shop: { icon: 'box', value: '4.8★', label: 'Shop rating' },
};

// ---- Login ----
function Login({ onPick, roles }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(120% 90% at 80% 10%, rgba(196,154,72,0.12), transparent 55%), var(--bk-bark)', padding: 24 }}>
      <div style={{ width: 420, maxWidth: '100%', background: 'var(--surface-card)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <img src={`${ASSET}/logo/bisi-kaapi-mark.png`} width="44" height="44" alt="" />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--text-primary)', lineHeight: 1, whiteSpace: 'nowrap' }}>Bisi Kaapi OS</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>One sign-in for every portal</div>
          </div>
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: '14px 0 18px' }}>Choose your role to continue. Access to apps is granted by role.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {Object.entries(roles).map(([k, r]) => (
            <button key={k} onClick={() => onPick(k)} style={{ display: 'flex', alignItems: 'center', gap: 13, width: '100%', textAlign: 'left', border: '1px solid var(--border-default)', background: 'var(--bk-paper)', borderRadius: 'var(--radius-md)', padding: '12px 14px', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.background = 'var(--bk-terracotta-100)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.background = 'var(--bk-paper)'; }}>
              <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><PIcon name={r.icon} size={18} color="var(--text-brand)" /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)' }}>{r.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>{r.who} · {r.apps.length} apps</div>
              </div>
              <PIcon name="arrowRight" size={17} color="var(--text-muted)" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Hub Tweaks (expressive: reshape the whole feel) ----
const HUB_TWEAKS = /*EDITMODE-BEGIN*/{
  "mood": "warm",
  "density": "cozy",
  "accent": "#A8481F"
}/*EDITMODE-END*/;
const MOOD_VARS = {
  warm: {},
  midnight: { '--color-bg': '#241307', '--surface-card': '#3A2113', '--surface-sunken': '#2E1A0C', '--surface-dark': '#190D04', '--bk-paper': '#321C0E', '--text-primary': '#F5ECDB', '--text-secondary': '#CDB79B', '--text-muted': '#A1855F', '--border-subtle': 'rgba(245,236,219,0.08)', '--border-default': 'rgba(245,236,219,0.13)', '--border-strong': 'rgba(245,236,219,0.20)' },
  festive: { '--color-bg': '#FBE6C8', '--bk-paper': '#FFF1DC', '--surface-sunken': '#F6E2C2' },
};
const ACCENTS = ['#A8481F', '#FB8B24', '#7C2D1C', '#5E7A4F'];

// ---- Hub ----
function Hub() {
  const [roleKey, setRoleKey] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const lk = window.useBK ? window.useBK((s) => s.kpis) : null;
  const [cfg] = window.useBKConfig();
  const ROLES = cfg.access.roles;
  const [tw, setTweak] = window.useTweaks(HUB_TWEAKS);
  if (!roleKey || !ROLES[roleKey]) return <Login onPick={setRoleKey} roles={ROLES} />;
  const role = ROLES[roleKey];
  const can = (k) => role.apps.includes(k);
  const liveKpis = lk ? {
    ...KPIS,
    orchestrator: { ...KPIS.orchestrator, value: '₹' + (lk.revenue / 100000).toFixed(2) + 'L' },
    cafe: { ...KPIS.cafe, value: '₹' + (lk.cafeSales / 1000).toFixed(1) + 'K' },
    roastery: { ...KPIS.roastery, value: lk.roastedKg + ' kg' },
    supply: { ...KPIS.supply, value: lk.onTime + '%' },
    store: { ...KPIS.store, value: String(lk.orders) },
  } : KPIS;
  const kpis = role.apps.filter((k) => liveKpis[k]).slice(0, 5).map((k) => liveKpis[k]);
  const rootVars = { ...MOOD_VARS[tw.mood], '--color-primary': tw.accent, '--color-primary-hover': tw.accent, '--text-brand': tw.accent, '--text-accent': tw.accent, '--border-brand': tw.accent };
  const compact = tw.density === 'compact';

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'var(--font-sans)', ...rootVars }}>
      {/* Top bar */}
      <header style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '0 26px', height: 64, display: 'flex', alignItems: 'center', gap: 16, position: 'sticky', top: 0, zIndex: 20 }}>
        <img src={`${ASSET}/logo/bisi-kaapi-mark-cream.png`} width="32" height="32" alt="" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, whiteSpace: 'nowrap' }}>Bisi Kaapi OS</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: 'var(--success)', marginLeft: 6 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)', animation: 'bk-pulse 1.6s infinite' }} /> All systems live</span>
        <div style={{ marginLeft: 'auto', position: 'relative' }}>
          <button onClick={() => setMenu((m) => !m)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,247,238,0.08)', border: '1px solid rgba(255,247,238,0.14)', borderRadius: 'var(--radius-pill)', padding: '6px 8px 6px 14px', cursor: 'pointer', color: 'var(--text-on-dark)' }}>
            <span style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: 12.5, fontWeight: 600 }}>{role.who}</span>
              <span style={{ display: 'block', fontSize: 10.5, color: 'var(--bk-brass-300)' }}>{role.name}</span>
            </span>
            <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--bk-terracotta-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>{role.who.split(' ').map((w) => w[0]).join('')}</span>
            <PIcon name="chevronDown" size={15} color="var(--bk-brass-300)" />
          </button>
          {menu && (
            <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: 230, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-default)', padding: 7, zIndex: 30 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '6px 10px' }}>Switch role</div>
              {Object.entries(ROLES).map(([k, r]) => (
                <button key={k} onClick={() => { setRoleKey(k); setMenu(false); }} style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left', border: 'none', background: k === roleKey ? 'var(--bk-terracotta-100)' : 'transparent', borderRadius: 'var(--radius-sm)', padding: '8px 10px', cursor: 'pointer' }}>
                  <PIcon name={r.icon} size={15} color="var(--text-brand)" />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', fontWeight: k === roleKey ? 600 : 400 }}>{r.name}</span>
                </button>
              ))}
              <div style={{ height: 1, background: 'var(--border-subtle)', margin: '6px 4px' }} />
              <button onClick={() => setRoleKey(null)} style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left', border: 'none', background: 'transparent', borderRadius: 'var(--radius-sm)', padding: '8px 10px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <PIcon name="logout" size={15} color="var(--text-secondary)" /> <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}>Sign out</span>
              </button>
            </div>
          )}
        </div>
      </header>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '28px 26px 48px' }}>
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>Welcome back</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, color: 'var(--text-primary)', margin: '6px 0 0' }}>Good morning, {role.who.split(' ')[0]} ☕</h1>
        </div>

        {kpis.length > 0 && <KPIRow items={kpis} />}

        <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 20, alignItems: 'start' }}>
          <Panel title="Your apps" icon="grid" pad={18} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{role.apps.length} of {APPS.length} granted</span>}>
            {SECTIONS.map((sec) => {
              const secApps = APPS.filter((a) => a.group === sec);
              if (!secApps.length) return null;
              return (
                <div key={sec} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '2px 0 10px' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{sec}</span>
                    <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)' }}>{secApps.filter((a) => can(a.key)).length}/{secApps.length}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: compact ? 'repeat(3,1fr)' : 'repeat(2,1fr)', gap: compact ? 10 : 14 }}>
                    {secApps.map((a) => {
                const allowed = can(a.key);
                const Inner = (
                  <div style={{ position: 'relative', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 16, background: allowed ? 'var(--bk-paper)' : 'var(--surface-sunken)', opacity: allowed ? 1 : 0.62, height: '100%', transition: 'box-shadow .2s, transform .2s' }}
                    onMouseEnter={allowed ? (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; } : undefined}
                    onMouseLeave={allowed ? (e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; } : undefined}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 10 }}>
                      <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: allowed ? a.accent : 'var(--bk-warm-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><PIcon name={a.icon} size={20} color="#FFF7EE" /></span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16.5, color: 'var(--text-primary)' }}>{a.name}</div>
                        {allowed ? <StatusPill tone="good" pulse>Live</StatusPill> : <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)' }}><PIcon name="lock" size={12} color="var(--text-muted)" /> No access</span>}
                      </div>
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, minHeight: 36 }}>{a.desc}</p>
                    <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: allowed ? 'var(--text-brand)' : 'var(--text-muted)' }}>
                      {allowed ? <>Open app <PIcon name="arrowRight" size={15} color="var(--text-brand)" /></> : 'Request access'}
                    </div>
                  </div>
                );
                      return allowed
                        ? <a key={a.key} href={a.href} onClick={(e) => { e.preventDefault(); window.location.assign(a.href + window.location.search); }} style={{ textDecoration: 'none' }}>{Inner}</a>
                        : <div key={a.key} title="You don't have access to this app">{Inner}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </Panel>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <AIInsight title="AI Briefing"
              buildPrompt={() => `You are Bisi Kaapi OS, the unified ops assistant for a South-Indian coffee company. The signed-in user is the ${role.name} (${role.who}) with access to: ${role.apps.join(', ')}. Today: revenue ₹3.24L (+12%), café sales ₹48.2K, 53kg roasted, on-time delivery 96%, 142 online orders, one cold-store at 94% capacity and a filter-powder reorder at the café. Give a 3-bullet morning briefing tailored to THIS role's responsibilities, each with one action, plain-text bullets starting with "• ".`}
              fallback={`• Revenue is up 12% but the café's filter-coffee powder is at 28% — clear the restock before the rush.
• Roastery is on track at 53 kg; the cold store is at 94%, so coordinate today's dairy draw-down.
• On-time delivery dipped to 96% on the Coorg lane — confirm the alternate carrier before evening dispatch.`} />

            <Panel title="Your access" icon="shield" pad={16}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {APPS.map((a) => (
                  <div key={a.key} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <PIcon name={a.icon} size={15} color={can(a.key) ? 'var(--text-brand)' : 'var(--text-muted)'} />
                    <span style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: 13, color: can(a.key) ? 'var(--text-primary)' : 'var(--text-muted)' }}>{a.name}</span>
                    {can(a.key) ? <StatusPill tone="good">Granted</StatusPill> : <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: 'var(--text-muted)' }}><PIcon name="lock" size={11} color="var(--text-muted)" /> Locked</span>}
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </div>

      <window.TweaksPanel>
        <window.TweakSection label="Mood" />
        <window.TweakRadio label="Mood" value={tw.mood} options={['warm', 'midnight', 'festive']} onChange={(v) => setTweak('mood', v)} />
        <window.TweakSection label="Layout" />
        <window.TweakRadio label="Density" value={tw.density} options={['cozy', 'compact']} onChange={(v) => setTweak('density', v)} />
        <window.TweakSection label="Accent" />
        <window.TweakColor label="Accent" value={tw.accent} options={ACCENTS} onChange={(v) => setTweak('accent', v)} />
      </window.TweaksPanel>
    </div>
  );
}

window.Hub = Hub;
