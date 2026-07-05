const { Shell, Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;

const NAV = [
  { icon: 'grid', label: 'Overview', view: 'overview' },
  { icon: 'list', label: 'Orders', badge: 4, view: 'orders' },
  { icon: 'coffee', label: 'Menu & 86', badge: 2, view: 'menu' },
  { icon: 'users', label: 'Shifts', view: 'shifts' },
  { icon: 'box', label: 'Inventory', view: 'inventory' },
  { icon: 'dollar', label: 'Sales', view: 'sales' },
];

const ORDER_FLOW = ['new', 'brewing', 'ready'];
const ORDER_META = { new: { tone: 'info', label: 'New' }, brewing: { tone: 'warn', label: 'Brewing' }, ready: { tone: 'good', label: 'Ready' } };

function CafePortal() {
  const orders = window.useBK((s) => s.orders);
  const [newOrder, setNewOrder] = React.useState({ who: '', items: '' });
  const advance = (id) => window.BKData.advanceOrder(id);
  const clear = (id) => window.BKData.clearOrder(id);
  const placeWalkIn = () => {
    if (!newOrder.who.trim() || !newOrder.items.trim()) return;
    window.BKData.addOrder({ who: newOrder.who.trim(), items: newOrder.items.trim(), source: 'walkin' });
    setNewOrder({ who: '', items: '' });
  };
  const SOURCE_LABEL = { walkin: null, online: 'Online', zomato: 'Zomato', swiggy: 'Swiggy', mobile: 'App' };
  const [menu, setMenu] = React.useState([
    { name: 'Bisi Kaapi', on: true }, { name: 'Bella Kaapi', on: true }, { name: 'Masala Dosa', on: true },
    { name: 'Filter Coffee Cake', on: false }, { name: 'Cold Brew', on: true }, { name: 'Mysore Bonda', on: false },
  ]);


  const [shifts, setShifts] = React.useState([
    { id: 's1', name: 'Asha R', role: 'Barista', in: '06:30', hrs: 3.1, tone: 'good' },
    { id: 's2', name: 'Bala K', role: 'Barista', in: '07:00', hrs: 2.6, tone: 'good' },
    { id: 's3', name: 'Chitra M', role: 'Floor', in: '06:45', hrs: 2.9, tone: 'good' },
    { id: 's4', name: 'Dev P', role: 'Kitchen', in: '05:30', hrs: 9.2, tone: 'warn' },
  ]);
  const [offShift, setOffShift] = React.useState([]);
  const [newShift, setNewShift] = React.useState({ name: '', role: 'Barista' });
  const nowHM = () => { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); };
  const clockIn = () => {
    if (!newShift.name.trim()) return;
    setShifts((s) => [...s, { id: 's' + Date.now(), name: newShift.name.trim(), role: newShift.role, in: nowHM(), hrs: 0, tone: 'good' }]);
    setNewShift({ name: '', role: 'Barista' });
  };
  const clockOut = (id) => {
    setShifts((s) => {
      const leaving = s.find((x) => x.id === id);
      if (leaving) setOffShift((o) => [{ ...leaving, out: nowHM() }, ...o].slice(0, 8));
      return s.filter((x) => x.id !== id);
    });
  };
  const bumpHrs = (id, d) => setShifts((s) => s.map((x) => x.id === id ? { ...x, hrs: Math.max(0, +(x.hrs + d).toFixed(1)), tone: (x.hrs + d) > 8 ? 'warn' : 'good' } : x));

  const invTone = (pct) => pct < 40 ? 'bad' : pct < 70 ? 'warn' : 'good';
  const [inventory, setInventory] = React.useState([
    { id: 'i1', name: 'Filter coffee powder', pct: 28 },
    { id: 'i2', name: 'Full-cream milk', pct: 64 },
    { id: 'i3', name: 'Jaggery', pct: 82 },
    { id: 'i4', name: 'Paper cups (12oz)', pct: 47 },
  ]);
  const [newItem, setNewItem] = React.useState('');
  const restock = (id) => setInventory((inv) => inv.map((x) => x.id === id ? { ...x, pct: 100 } : x));
  const setPct = (id, pct) => setInventory((inv) => inv.map((x) => x.id === id ? { ...x, pct: Math.max(0, Math.min(100, pct)) } : x));
  const removeItem = (id) => setInventory((inv) => inv.filter((x) => x.id !== id));
  const addItem = () => {
    if (!newItem.trim()) return;
    setInventory((inv) => [...inv, { id: 'i' + Date.now(), name: newItem.trim(), pct: 100 }]);
    setNewItem('');
  };
  const off = menu.filter((m) => !m.on).length;
  const live = window.useBK((s) => s.kpis);

  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [
    { icon: 'dollar', value: '₹' + live.cafeSales.toLocaleString('en-IN'), label: 'Sales today', delta: '+9%' },
    { icon: 'list', value: String(orders.length), label: 'Open orders' },
    { icon: 'receipt', value: '₹186', label: 'Avg ticket', delta: '+4%' },
    { icon: 'coffee', value: String(off), label: 'Items 86’d', down: true, delta: off ? 'check' : 'clear' },
    { icon: 'users', value: String(shifts.length), label: 'On shift' },
  ];

  const toneBg = { bad: 'var(--danger)', warn: 'var(--warning)', good: 'var(--success)' };
  const [view, setView] = React.useState('overview');
  const nav = NAV.map((n) => ({ ...n, active: n.view === view }));
  const show = (v) => view === 'overview' || view === v;
  const HEAD = { overview: 'Front of house', orders: 'Live orders', menu: 'Menu & 86', shifts: 'Shifts & time', inventory: 'Inventory', sales: 'Sales' };

  return (
    <Shell portal="Café Ops · Jayanagar" tagline="Service live" headerTitle={HEAD[view]}
      headerRight={<StatusPill tone="good" pulse>Lunch rush</StatusPill>}
      nav={nav} onNav={setView}>
      {(view === 'overview' || view === 'sales') && <KPIRow items={kpis.map((x, i) => (kpiOv[i] != null ? { ...x, value: kpiOv[i] } : x))} editable={kpiManual} onEdit={(i, v) => setKpiOv((o) => ({ ...o, [i]: v }))} />}
      <div style={{ display: 'grid', gridTemplateColumns: view === 'overview' ? '1.6fr 1fr' : '1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Panel title="Live orders" icon="list" pad={14} action={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>tap to advance</span>} style={{ display: show('orders') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {orders.map((o) => (
                <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 14, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '12px 14px', background: 'var(--bk-paper)' }}>
                  <div style={{ minWidth: 64 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{o.id}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{o.who}</div>
                  </div>
                  <div style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-secondary)' }}>{o.items}</div>
                  {SOURCE_LABEL[o.source] && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--text-accent)', background: 'var(--bk-brass-100)', padding: '2px 8px', borderRadius: 999 }}>{SOURCE_LABEL[o.source]}</span>}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: o.min >= 6 ? 'var(--danger)' : 'var(--text-muted)' }}>{o.min}m</span>
                  <StatusPill tone={ORDER_META[o.status].tone} pulse={o.status === 'brewing'}>{ORDER_META[o.status].label}</StatusPill>
                  {o.status === 'ready'
                    ? <button onClick={() => clear(o.id)} style={btn('var(--success)')}><PIcon name="check" size={15} color="#fff" /> Done</button>
                    : <button onClick={() => advance(o.id)} style={btn('var(--color-primary)')}>Advance <PIcon name="arrowRight" size={15} color="#fff" /></button>}
                </div>
              ))}
              {orders.length === 0 && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-muted)' }}>No open orders — all caught up.</div>}
              <div style={{ display: 'flex', gap: 8, marginTop: 4, paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
                <input value={newOrder.who} onChange={(e) => setNewOrder((n) => ({ ...n, who: e.target.value }))} placeholder="Table / name" style={{ width: 140, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '7px 10px', fontFamily: 'var(--font-sans)', fontSize: 12.5, background: 'var(--surface-card)', color: 'var(--text-primary)' }} />
                <input value={newOrder.items} onChange={(e) => setNewOrder((n) => ({ ...n, items: e.target.value }))} placeholder="Items — e.g. Bisi Kaapi ×2" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '7px 10px', fontFamily: 'var(--font-sans)', fontSize: 12.5, background: 'var(--surface-card)', color: 'var(--text-primary)' }} />
                <button onClick={placeWalkIn} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 12px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap' }}><PIcon name="plus" size={13} /> New order</button>
              </div>
            </div>
          </Panel>

          <Panel title="Inventory — café store" icon="box" pad={16} action={<StatusPill tone={inventory.some((it) => invTone(it.pct) === 'bad') ? 'bad' : 'good'}>{inventory.filter((it) => invTone(it.pct) === 'bad').length} critical</StatusPill>} style={{ display: show('inventory') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {inventory.map((it) => (
                <div key={it.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 13, marginBottom: 5, gap: 8 }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500, flex: 1 }}>{it.name}</span>
                    <input type="number" min="0" max="100" value={it.pct} onChange={(e) => setPct(it.id, +e.target.value)} style={{ width: 48, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '2px 5px', fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--surface-card)', color: 'var(--text-secondary)', textAlign: 'right' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>%</span>
                    <button onClick={() => restock(it.id)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-brand)', borderRadius: 'var(--radius-sm)', padding: '4px 9px', fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}>Restock</button>
                    <button onClick={() => removeItem(it.id)} style={{ border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px 2px' }}><PIcon name="x" size={14} color="var(--text-muted)" /></button>
                  </div>
                  <div style={{ height: 8, borderRadius: 6, background: 'var(--bk-warm-150)', overflow: 'hidden' }}>
                    <div style={{ width: it.pct + '%', height: '100%', background: toneBg[invTone(it.pct)], borderRadius: 6 }} />
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                <input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add stock item…" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '7px 10px', fontFamily: 'var(--font-sans)', fontSize: 12.5, background: 'var(--surface-card)', color: 'var(--text-primary)' }} />
                <button onClick={addItem} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 12px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}><PIcon name="plus" size={13} /> Add</button>
              </div>
            </div>
          </Panel>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(view === 'overview' || view === 'sales') && <AIInsight title="AI Service Insight"
            buildPrompt={() => `You are the café operations assistant for Bisi Kaapi (Jayanagar outlet). Right now: ${orders.length} open orders, ${off} menu items 86'd (Filter Coffee Cake, Mysore Bonda), filter coffee powder at 28% (critical), milk at 64%, one barista on a 9.2h overtime shift, sales ₹48,260 (+9%). Give exactly 3 short operational insights for the floor manager, each with one action, as plain-text bullets starting with "• ".`}
            fallback={`• Filter coffee powder is at 28% during the lunch rush — pull a 1kg pack from the back now or you'll 86 your signature kaapi.
• Two kitchen items are 86'd (cake, bonda); push the barista-led specials so tickets keep moving.
• Dev P is into overtime at 9.2h — schedule a break and line up the evening reliever.`} />}

          <Panel title="Menu availability (86)" icon="coffee" pad={14} style={{ display: show('menu') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {menu.map((m, i) => (
                <div key={m.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 11px', borderRadius: 'var(--radius-sm)', background: m.on ? 'var(--bk-paper)' : 'var(--danger-soft)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', textDecoration: m.on ? 'none' : 'line-through', opacity: m.on ? 1 : 0.7 }}>{m.name}</span>
                  <button onClick={() => setMenu((mm) => mm.map((x, j) => j === i ? { ...x, on: !x.on } : x))} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '4px 11px', fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 700, background: m.on ? 'var(--success-soft)' : 'var(--bk-warm-100)', color: m.on ? '#3F5536' : 'var(--text-muted)' }}>{m.on ? 'Available' : '86’d'}</button>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="On shift — time tracking" icon="clock" pad={14} style={{ display: show('shifts') ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {shifts.map((s) => (
                <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--bk-terracotta-100)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{s.name.split(' ').map((w) => w[0]).join('')}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>{s.name}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{s.role} · in {s.in}</div>
                  </div>
                  <button onClick={() => bumpHrs(s.id, -0.5)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', width: 22, height: 22, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, cursor: 'pointer', lineHeight: 1 }}>−</button>
                  <StatusPill tone={s.tone}>{s.hrs}h</StatusPill>
                  <button onClick={() => bumpHrs(s.id, 0.5)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', width: 22, height: 22, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, cursor: 'pointer', lineHeight: 1 }}>+</button>
                  <button onClick={() => clockOut(s.id)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-brand)', borderRadius: 'var(--radius-sm)', padding: '5px 9px', fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Clock out</button>
                </div>
              ))}
              {shifts.length === 0 && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-muted)' }}>Nobody's clocked in.</div>}
              <div style={{ display: 'flex', gap: 8, marginTop: 6, paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
                <input value={newShift.name} onChange={(e) => setNewShift((n) => ({ ...n, name: e.target.value }))} placeholder="Name" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '7px 10px', fontFamily: 'var(--font-sans)', fontSize: 12.5, background: 'var(--surface-card)', color: 'var(--text-primary)' }} />
                <select value={newShift.role} onChange={(e) => setNewShift((n) => ({ ...n, role: e.target.value }))} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '7px 8px', fontFamily: 'var(--font-sans)', fontSize: 12.5, background: 'var(--surface-card)', color: 'var(--text-primary)' }}>
                  {['Barista', 'Floor', 'Kitchen', 'Cashier'].map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                <button onClick={clockIn} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 12px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap' }}><PIcon name="plus" size={13} /> Clock in</button>
              </div>
              {offShift.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Clocked out today</div>
                  {offShift.map((s) => (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', padding: '3px 0' }}>
                      <span style={{ flex: 1 }}>{s.name} · {s.role}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{s.in}–{s.out} · {s.hrs}h</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Panel>
        </div>
      </div>
    </Shell>
  );
}

function btn(bg) {
  return { display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: bg, color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '7px 11px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: 'pointer', whiteSpace: 'nowrap' };
}

window.CafePortal = CafePortal;
