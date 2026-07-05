const { Shell, Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;

const NAV = [
  { icon: 'grid', label: 'Overview', view: 'overview' },
  { icon: 'megaphone', label: 'Campaigns', badge: 3, view: 'campaigns' },
  { icon: 'users', label: 'Segments', view: 'segments' },
  { icon: 'refresh', label: 'Journeys', view: 'journeys' },
  { icon: 'award', label: 'Offers', view: 'offers' },
];
const CH_TONE = { Email: 'info', WhatsApp: 'good', Push: 'warn', SMS: 'idle', Instagram: 'brand' };

function CRMPortal() {
  const live = window.useBK ? window.useBK((s) => s.kpis) : null;
  const [view, setView] = React.useState('overview');
  const [toast, setToast] = React.useState(null);
  const nav = NAV.map((n) => ({ ...n, active: n.view === view }));
  const flash = (m) => { setToast(m); setTimeout(() => setToast(null), 1900); };

  const [campaigns, setCampaigns] = React.useState([
    { id: 1, name: 'New Coorg roast drop', ch: 'WhatsApp', status: 'live', sent: 12400, open: 62, ctr: 14 },
    { id: 2, name: 'Monsoon filter offer', ch: 'Email', status: 'live', sent: 8600, open: 38, ctr: 6 },
    { id: 3, name: 'Kaapi Club · double beans', ch: 'Push', status: 'live', sent: 5200, open: 51, ctr: 11 },
    { id: 4, name: 'Weekend brunch invite', ch: 'Instagram', status: 'draft', sent: 0, open: 0, ctr: 0 },
    { id: 5, name: 'Win-back · 30 days idle', ch: 'SMS', status: 'scheduled', sent: 0, open: 0, ctr: 0 },
  ]);
  const segments = [
    { name: 'Kaapi Club members', size: 3421, desc: 'Active loyalty members' },
    { name: 'Filter loyalists', size: 1890, desc: 'Order filter coffee weekly' },
    { name: 'Lapsed (30d+)', size: 640, desc: 'No order in a month', warn: true },
    { name: 'High-value (₹2k+/mo)', size: 410, desc: 'Top spenders' },
    { name: 'New this month', size: 280, desc: 'Joined in last 30 days' },
  ];
  const journeys = [
    { name: 'Welcome series', trigger: 'On sign-up', steps: 4, ch: 'WhatsApp + Email', active: true },
    { name: 'First-order nudge', trigger: 'Signed up, no order 48h', steps: 2, ch: 'WhatsApp', active: true },
    { name: 'Win-back', trigger: 'No order 30 days', steps: 3, ch: 'SMS + Email', active: true },
    { name: 'Birthday cup', trigger: 'On birthday', steps: 1, ch: 'Push', active: false },
  ];
  const [offers, setOffers] = React.useState([
    { code: 'FIRSTCUP', desc: 'Free Bella Kaapi, first order', redeemed: 820, active: true },
    { code: 'MONSOON20', desc: '20% off 500g beans', redeemed: 341, active: true },
    { code: 'REFER100', desc: '100 beans per referral', redeemed: 156, active: true },
    { code: 'DIWALI', desc: 'Gift set bundle', redeemed: 0, active: false },
  ]);

  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [
    { icon: 'users', value: '6,940', label: 'Contacts', delta: '+4%' },
    { icon: 'megaphone', value: String(campaigns.filter((c) => c.status === 'live').length), label: 'Live campaigns' },
    { icon: 'trendingUp', value: '48%', label: 'Avg open rate', delta: '+3pt' },
    { icon: 'dollar', value: '₹1.8L', label: 'Attributed revenue', delta: '+15%' },
    { icon: 'award', value: String(offers.filter((o) => o.active).length), label: 'Active offers' },
  ];

  const campaignsPanel = (
    <Panel title="Campaigns" icon="megaphone" pad={0} action={<button onClick={() => flash('New campaign draft created')} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 12px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: 'pointer' }}><PIcon name="plus" size={14} /> New campaign</button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 110px 100px 90px 90px 100px', gap: 12, padding: '12px 18px', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        <span>Campaign</span><span>Channel</span><span>Status</span><span style={{ textAlign: 'right' }}>Sent</span><span style={{ textAlign: 'right' }}>Open</span><span style={{ textAlign: 'right' }}>CTR</span>
      </div>
      {campaigns.map((c) => (
        <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '1.7fr 110px 100px 90px 90px 100px', gap: 12, alignItems: 'center', padding: '12px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)' }}>{c.name}</span>
          <StatusPill tone={CH_TONE[c.ch]}>{c.ch}</StatusPill>
          <StatusPill tone={c.status === 'live' ? 'good' : c.status === 'scheduled' ? 'warn' : 'idle'}>{c.status}</StatusPill>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)' }}>{c.sent ? c.sent.toLocaleString('en-IN') : '—'}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: c.open ? 'var(--success)' : 'var(--text-muted)' }}>{c.open ? c.open + '%' : '—'}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)' }}>{c.ctr ? c.ctr + '%' : '—'}</span>
        </div>
      ))}
    </Panel>
  );

  const segmentsPanel = (
    <Panel title="Segments" icon="users" pad={14}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {segments.map((s) => (
          <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 14px', background: 'var(--bk-paper)' }}>
            <span style={{ width: 34, height: 34, borderRadius: '50%', background: s.warn ? 'var(--warning-soft)' : 'var(--bk-terracotta-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><PIcon name="users" size={16} color={s.warn ? 'var(--warning)' : 'var(--color-primary)'} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-primary)' }}>{s.name}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>{s.desc}</div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{s.size.toLocaleString('en-IN')}</span>
            <button onClick={() => flash('Targeting "' + s.name + '"')} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-brand)', borderRadius: 'var(--radius-sm)', padding: '6px 11px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Target</button>
          </div>
        ))}
      </div>
    </Panel>
  );

  const journeysPanel = (
    <Panel title="Automated journeys" icon="refresh" pad={14}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {journeys.map((j) => (
          <div key={j.name} style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 14px', background: 'var(--bk-paper)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-primary)' }}>{j.name}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>{j.trigger} · {j.steps} steps · {j.ch}</div>
            </div>
            <StatusPill tone={j.active ? 'good' : 'idle'} pulse={j.active}>{j.active ? 'Active' : 'Paused'}</StatusPill>
          </div>
        ))}
      </div>
    </Panel>
  );

  const offersPanel = (
    <Panel title="Offers & promo codes" icon="award" pad={14}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {offers.map((o) => (
          <div key={o.code} style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 14px', background: 'var(--bk-paper)' }}>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--text-accent)', background: 'var(--bk-brass-100)', padding: '4px 9px', borderRadius: 'var(--radius-sm)' }}>{o.code}</code>
            <span style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)' }}>{o.desc}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)' }}>{o.redeemed} used</span>
            <button onClick={() => setOffers((os) => os.map((x) => x.code === o.code ? { ...x, active: !x.active } : x))} style={{ width: 40, height: 23, borderRadius: 999, border: 'none', cursor: 'pointer', background: o.active ? 'var(--color-primary)' : 'var(--bk-warm-300)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 3, left: o.active ? 20 : 3, width: 17, height: 17, borderRadius: '50%', background: '#fff', transition: 'left .2s' }} />
            </button>
          </div>
        ))}
      </div>
    </Panel>
  );

  const aiPanel = (
    <AIInsight title="AI Marketing Insight"
      buildPrompt={() => `You are the CRM/marketing assistant for Bisi Kaapi coffee. Status: 6,940 contacts, avg open 48%, WhatsApp "New Coorg roast" at 62% open/14% CTR (best), Email offer at 38%/6%, 640 lapsed (30d+) contacts, ₹1.8L attributed revenue. Give exactly 3 short marketing actions, plain-text bullets starting with "• ".`}
      fallback={`• WhatsApp outperforms email 62% vs 38% open — shift the monsoon offer to WhatsApp and A/B the subject line.
• 640 contacts are lapsed 30d+ — trigger the win-back journey with a free-cup code before they churn.
• Your best CTR is the Coorg drop; retarget openers who didn't buy with a 24h "still warm" reminder.`} />
  );

  return (
    <Shell portal="CRM & Marketing" tagline="Audience engaged" headerTitle={({ overview: 'CRM & marketing', campaigns: 'Campaigns', segments: 'Segments', journeys: 'Journeys', offers: 'Offers' })[view]}
      headerRight={<StatusPill tone="good" pulse>{campaigns.filter((c) => c.status === 'live').length} live</StatusPill>} nav={nav} onNav={setView}>
      {view === 'overview' && <>
        <KPIRow items={kpis.map((x, i) => (kpiOv[i] != null ? { ...x, value: kpiOv[i] } : x))} editable={kpiManual} onEdit={(i, v) => setKpiOv((o) => ({ ...o, [i]: v }))} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{campaignsPanel}{journeysPanel}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{aiPanel}{offersPanel}</div>
        </div>
      </>}
      {view === 'campaigns' && campaignsPanel}
      {view === 'segments' && segmentsPanel}
      {view === 'journeys' && journeysPanel}
      {view === 'offers' && offersPanel}

      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderLeft: '4px solid var(--success)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', animation: 'bk-fade .3s ease' }}>
          <PIcon name="check" size={16} color="var(--success)" /><span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{toast}</span>
        </div>
      )}
    </Shell>
  );
}

window.CRMPortal = CRMPortal;
