const { Shell, Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;

const NAV = [
  { icon: 'grid', label: 'Overview', view: 'overview' },
  { icon: 'users', label: 'Suppliers', view: 'suppliers' },
  { icon: 'clipboard', label: 'Procurement', badge: 5, view: 'procurement' },
  { icon: 'truck', label: 'Deliveries', badge: 3, view: 'deliveries' },
  { icon: 'warehouse', label: 'Warehouse', view: 'warehouse' },
];

const PO_FLOW = ['Draft', 'Sent', 'Confirmed', 'Received'];
const PO_TONE = { Draft: 'idle', Sent: 'info', Confirmed: 'warn', Received: 'good' };

function SupplyPortal() {
  const [pos, setPos] = React.useState([
    { id: 'PO-1192', sup: 'Baba Budangiri Estate', item: 'Green AA · 800 kg', val: '₹3,36,000', stage: 0 },
    { id: 'PO-1191', sup: 'Sunrise Packaging', item: 'Kraft pouches · 5,000', val: '₹62,500', stage: 1 },
    { id: 'PO-1190', sup: 'Chikmagalur Coop', item: 'Green AB · 400 kg', val: '₹1,48,000', stage: 2 },
    { id: 'PO-1189', sup: 'Brass Works Mysore', item: 'Davara tumblers · 200', val: '₹78,000', stage: 1 },
    { id: 'PO-1188', sup: 'CityFresh Dairy', item: 'Milk contract · weekly', val: '₹44,000', stage: 3 },
  ]);
  const advance = (id) => setPos((p) => p.map((x) => x.id === id ? { ...x, stage: Math.min(3, x.stage + 1) } : x));

  const deliveries = [
    { id: 'SR-8841', what: '142 online orders', carrier: 'Shiprocket', eta: 'Today 6 PM', tone: 'good' },
    { id: 'TR-204', what: 'Green AB · 400 kg', carrier: 'Inbound · Chikmagalur', eta: 'Tomorrow', tone: 'warn' },
    { id: 'SR-8839', what: '38 café restocks', carrier: 'Own fleet', eta: 'Delayed · Coorg lane', tone: 'bad' },
  ];
  const suppliers = [
    { name: 'Baba Budangiri Estate', cat: 'Green coffee', score: 4.9, tone: 'good' },
    { name: 'Chikmagalur Coop', cat: 'Green coffee', score: 4.6, tone: 'good' },
    { name: 'Sunrise Packaging', cat: 'Packaging', score: 4.2, tone: 'warn' },
    { name: 'CityFresh Dairy', cat: 'Dairy', score: 4.7, tone: 'good' },
  ];
  const warehouse = [
    { name: 'Green coffee bay', pct: 72, tone: 'good' },
    { name: 'Finished goods', pct: 88, tone: 'warn' },
    { name: 'Packaging & gear', pct: 41, tone: 'good' },
    { name: 'Cold store (dairy)', pct: 94, tone: 'bad' },
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
    { icon: 'clipboard', value: String(pos.filter((p) => p.stage < 3).length), label: 'Open POs' },
    { icon: 'truck', value: '3', label: 'In transit' },
    { icon: 'checkCircle', value: live.onTime + '%', label: 'On-time', down: true, delta: '-1%' },
    { icon: 'warehouse', value: '74%', label: 'Warehouse used' },
    { icon: 'users', value: '18', label: 'Active suppliers' },
  ];

  return (
    <Shell portal="Supply Chain" tagline="Network healthy" headerTitle={({overview:'Supply chain',suppliers:'Suppliers & estates',procurement:'Procurement',deliveries:'Deliveries & logistics',warehouse:'Warehouse'})[view]}
      headerRight={<StatusPill tone="warn" pulse>1 delay</StatusPill>} nav={nav} onNav={setView}>
      {view === 'overview' && <KPIRow items={kpis.map((x, i) => (kpiOv[i] != null ? { ...x, value: kpiOv[i] } : x))} editable={kpiManual} onEdit={(i, v) => setKpiOv((o) => ({ ...o, [i]: v }))} />}
      <div style={{ display: 'grid', gridTemplateColumns: view === 'overview' ? '1.6fr 1fr' : '1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Panel title="Purchase orders" icon="clipboard" pad={14} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>advance status</span>} style={{ display: show('procurement') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {pos.map((p) => (
                <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 13, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '12px 14px', background: 'var(--bk-paper)' }}>
                  <div style={{ minWidth: 76 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-primary)' }}>{p.id}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-accent)' }}>{p.val}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>{p.sup}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>{p.item}</div>
                  </div>
                  <StatusPill tone={PO_TONE[PO_FLOW[p.stage]]} pulse={p.stage === 2}>{PO_FLOW[p.stage]}</StatusPill>
                  <button onClick={() => advance(p.id)} disabled={p.stage >= 3} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: p.stage >= 3 ? 'var(--bk-warm-200)' : 'var(--color-primary)', color: p.stage >= 3 ? 'var(--text-muted)' : '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 11px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: p.stage >= 3 ? 'default' : 'pointer' }}>{p.stage >= 3 ? 'Done' : 'Advance'}</button>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Deliveries & logistics" icon="truck" pad={14} action={<StatusPill tone="bad">1 delayed</StatusPill>} style={{ display: show('deliveries') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {deliveries.map((d) => (
                <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 13px', borderRadius: 'var(--radius-md)', background: 'var(--bk-paper)', border: '1px solid var(--border-subtle)' }}>
                  <PIcon name="truck" size={20} color="var(--text-brand)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>{d.what}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{d.id} · {d.carrier}</div>
                  </div>
                  <StatusPill tone={d.tone} pulse={d.tone === 'bad'}>{d.eta}</StatusPill>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {view === 'overview' && <AIInsight title="AI Supply Insight"
            buildPrompt={() => `You are the supply-chain assistant for Bisi Kaapi coffee. Status: 4 open POs incl. ₹3.36L green coffee draft and a ₹1.48L lot confirmed; a green-coffee inbound truck due tomorrow; 38 café restocks delayed on the Coorg lane; cold store at 94% capacity and finished goods at 88%; on-time delivery 96%. Give exactly 3 short insights for the supply-chain lead, each with one action, plain-text bullets starting with "• ".`}
            fallback={`• Cold store is at 94% — schedule the dairy draw-down before tomorrow's milk delivery or you'll have no space.
• The Coorg-lane café restock is delayed; switch those 38 orders to the own fleet to protect store availability.
• The ₹3.36L green PO is still a draft while Robusta runs low — send it today to keep the dark roast on schedule.`} />}

          <Panel title="Suppliers & estates" icon="users" pad={14} style={{ display: show('suppliers') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {suppliers.map((s) => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', borderRadius: 'var(--radius-sm)', background: 'var(--bk-paper)', border: '1px solid var(--border-subtle)' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>{s.name}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{s.cat}</div>
                  </div>
                  <StatusPill tone={s.tone}>★ {s.score}</StatusPill>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Warehouse capacity" icon="warehouse" pad={16} style={{ display: show('warehouse') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {warehouse.map((w) => (
                <div key={w.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 13, marginBottom: 5 }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{w.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{w.pct}%</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 6, background: 'var(--bk-warm-150)', overflow: 'hidden' }}><div style={{ width: w.pct + '%', height: '100%', background: toneBg[w.tone], borderRadius: 6 }} /></div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </Shell>
  );
}

window.SupplyPortal = SupplyPortal;
