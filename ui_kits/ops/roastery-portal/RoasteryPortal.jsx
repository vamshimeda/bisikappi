const { Shell, Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;

const NAV = [
  { icon: 'grid', label: 'Overview', view: 'overview' },
  { icon: 'flame', label: 'Roast batches', badge: 3, view: 'batches' },
  { icon: 'leaf', label: 'Green stock', view: 'green' },
  { icon: 'checkCircle', label: 'Quality (QC)', view: 'qc' },
  { icon: 'box', label: 'Packaging', badge: 2, view: 'packaging' },
];

const STAGE = ['Charge', 'Drying', 'Maillard', 'Develop', 'Cool', 'Done'];

function RoasteryPortal() {
  const [batches, setBatches] = React.useState([
    { id: '#2048', bean: 'Coorg Single Estate', profile: 'Medium-dark', kg: 12, stage: 2, temp: 198, tone: 'good' },
    { id: '#2047', bean: 'Mysore Filter Blend', profile: 'Medium', kg: 15, stage: 3, temp: 205, tone: 'good' },
    { id: '#2046', bean: 'Peaberry Reserve', profile: 'Light', kg: 8, stage: 4, temp: 92, tone: 'good' },
    { id: '#2045', bean: 'Robusta Bold', profile: 'Dark', kg: 18, stage: 1, temp: 165, tone: 'warn' },
  ]);
  const advance = (id) => setBatches((b) => b.map((x) => x.id === id ? { ...x, stage: Math.min(5, x.stage + 1) } : x));

  const green = [
    { name: 'Baba Budangiri AA', kg: 320, pct: 80, tone: 'good' },
    { name: 'Chikmagalur AB', kg: 96, pct: 30, tone: 'warn' },
    { name: 'Coorg Estate', kg: 210, pct: 62, tone: 'good' },
    { name: 'Robusta Parchment', kg: 38, pct: 16, tone: 'bad' },
  ];
  const qc = [
    { batch: '#2046', metric: 'Cupping score', val: '86.5', tone: 'good' },
    { batch: '#2044', metric: 'Moisture', val: '10.8%', tone: 'good' },
    { batch: '#2043', metric: 'Defects', val: '3 / 300g', tone: 'warn' },
  ];
  const packaging = [
    { sku: 'Mysore Filter 250g', qty: 180, tone: 'good' },
    { sku: 'Coorg Estate 500g', qty: 40, tone: 'warn' },
    { sku: 'Peaberry 250g', qty: 0, tone: 'bad' },
  ];
  const toneBg = { bad: 'var(--danger)', warn: 'var(--warning)', good: 'var(--success)' };
  const [view, setView] = React.useState('overview');
  const nav = NAV.map((n) => ({ ...n, active: n.view === view }));
  const show = (v) => view === 'overview' || view === v;

  const live = window.useBK((s) => s.kpis);
  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [
    { icon: 'flame', value: live.roastedKg + ' kg', label: 'Roasted today', delta: '+6%' },
    { icon: 'box', value: String(batches.length), label: 'Active batches' },
    { icon: 'leaf', value: '664 kg', label: 'Green stock' },
    { icon: 'checkCircle', value: '98%', label: 'QC pass rate' },
    { icon: 'scale', value: '14.2%', label: 'Roast shrinkage', down: true, delta: '+0.3%' },
  ];

  return (
    <Shell portal="Roastery Ops" tagline="3 roasters live" headerTitle={({overview:'Roastery',batches:'Roast batches',green:'Green stock',qc:'Quality (QC)',packaging:'Packaging'})[view]}
      headerRight={<StatusPill tone="good" pulse>Roasting</StatusPill>} nav={nav} onNav={setView}>
      {(view === 'overview') && <KPIRow items={kpis.map((x, i) => (kpiOv[i] != null ? { ...x, value: kpiOv[i] } : x))} editable={kpiManual} onEdit={(i, v) => setKpiOv((o) => ({ ...o, [i]: v }))} />}
      <div style={{ display: 'grid', gridTemplateColumns: view === 'overview' ? '1.6fr 1fr' : '1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Panel title="Roast batches in progress" icon="flame" pad={14} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>advance stage</span>} style={{ display: show('batches') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {batches.map((b) => (
                <div key={b.id} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '13px 15px', background: 'var(--bk-paper)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{b.id}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{b.bean}</div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{b.profile} · {b.kg} kg · {b.temp}°C</div>
                    </div>
                    <StatusPill tone={b.tone} pulse={b.stage < 5}>{STAGE[b.stage]}</StatusPill>
                    <button onClick={() => advance(b.id)} disabled={b.stage >= 5} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: b.stage >= 5 ? 'var(--bk-warm-200)' : 'var(--color-primary)', color: b.stage >= 5 ? 'var(--text-muted)' : '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 11px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: b.stage >= 5 ? 'default' : 'pointer' }}>Next <PIcon name="arrowRight" size={14} color={b.stage >= 5 ? 'var(--text-muted)' : '#fff'} /></button>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {STAGE.map((s, i) => <div key={s} style={{ flex: 1, height: 5, borderRadius: 3, background: i <= b.stage ? toneBg[b.tone] : 'var(--bk-warm-150)' }} />)}
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Green coffee stock" icon="leaf" pad={16} action={<StatusPill tone="bad">1 low</StatusPill>} style={{ display: show('green') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {green.map((g) => (
                <div key={g.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 13, marginBottom: 5 }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{g.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{g.kg} kg</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 6, background: 'var(--bk-warm-150)', overflow: 'hidden' }}><div style={{ width: g.pct + '%', height: '100%', background: toneBg[g.tone], borderRadius: 6 }} /></div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {view === 'overview' && <AIInsight title="AI Roastery Insight"
            buildPrompt={() => `You are the roastery operations assistant for Bisi Kaapi. Status: 4 batches roasting (Coorg, Mysore, Peaberry, Robusta), green stock 664kg total but Robusta Parchment at 16% (low) and Chikmagalur AB at 30%, QC pass 98%, roast shrinkage 14.2%, Peaberry 250g packaging at zero stock. Give exactly 3 short insights for the head roaster, each with one action, plain-text bullets starting with "• ".`}
            fallback={`• Robusta Parchment is at 16% — book the next green lot before the dark-roast run or you'll stall #2045.
• Peaberry 250g pouches are out of stock while batch #2046 cools — print labels now so it can pack straight off the roaster.
• Shrinkage ticked to 14.2%; check the Robusta develop time, it's trending long.`} />}

          <Panel title="QC log — latest" icon="checkCircle" pad={14} style={{ display: show('qc') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {qc.map((q, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', borderRadius: 'var(--radius-sm)', background: 'var(--bk-paper)', border: '1px solid var(--border-subtle)' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-primary)' }}>{q.batch}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)' }}> · {q.metric}</span>
                  </div>
                  <StatusPill tone={q.tone}>{q.val}</StatusPill>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Packaging queue" icon="box" pad={14} style={{ display: show('packaging') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {packaging.map((p) => (
                <div key={p.sku} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', borderRadius: 'var(--radius-sm)', background: 'var(--bk-paper)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>{p.sku}</span>
                  <StatusPill tone={p.tone}>{p.qty} packs</StatusPill>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </Shell>
  );
}

window.RoasteryPortal = RoasteryPortal;
