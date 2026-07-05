const { Shell, Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;

const NAV = [
  { icon: 'grid', label: 'Overview', view: 'overview' },
  { icon: 'box', label: 'Products', badge: 7, view: 'products' },
  { icon: 'warehouse', label: 'Inventory', view: 'inventory' },
  { icon: 'dollar', label: 'Pricing', view: 'pricing' },
  { icon: 'clipboard', label: 'Categories', view: 'categories' },
];

const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
const SEED = [
  { id: 1, name: 'Mysore Filter Blend', cat: 'Beans', price: 240, cost: 132, stock: 180, reorder: 60, img: 'motif-coffee-bean', active: true },
  { id: 2, name: 'Coorg Single Estate', cat: 'Beans', price: 320, cost: 178, stock: 96, reorder: 50, img: 'motif-coffee-plant', active: true },
  { id: 3, name: 'Peaberry Reserve', cat: 'Beans', price: 420, cost: 246, stock: 40, reorder: 45, img: 'motif-coffee-bean', active: true },
  { id: 4, name: 'Brass Davara Tumbler', cat: 'Serveware', price: 690, cost: 430, stock: 24, reorder: 15, img: 'motif-filter-cup', active: true },
  { id: 5, name: 'Pour-over Carafe', cat: 'Brewers', price: 1290, cost: 820, stock: 8, reorder: 10, img: 'chemex', active: true },
  { id: 6, name: 'Hand Grinder', cat: 'Brewers', price: 1850, cost: 1180, stock: 15, reorder: 8, img: 'hand-grinder', active: true },
  { id: 7, name: 'Filter Decoction Press', cat: 'Brewers', price: 540, cost: 355, stock: 0, reorder: 12, img: 'motif-coffee-bean', active: false },
];
const CATS = ['Beans', 'Brewers', 'Serveware', 'Gifts'];
const ASSET = '../../../assets';

const stockState = (p) => p.stock === 0 ? 'bad' : p.stock <= p.reorder ? 'warn' : 'good';
const stockLabel = (p) => p.stock === 0 ? 'Out of stock' : p.stock <= p.reorder ? 'Low' : 'In stock';

function ShopAdmin() {
  const [rows, setRows] = React.useState(SEED);
  const [view, setView] = React.useState('overview');
  const [cat, setCat] = React.useState('All');
  const [toast, setToast] = React.useState(null);
  const nav = NAV.map((n) => ({ ...n, active: n.view === view }));

  const edit = (id, patch) => setRows((r) => r.map((x) => x.id === id ? { ...x, ...patch } : x));
  const bump = (id, d) => setRows((r) => r.map((x) => x.id === id ? { ...x, stock: Math.max(0, x.stock + d) } : x));
  const flash = (m) => { setToast(m); setTimeout(() => setToast(null), 1800); };
  const addProduct = () => {
    const id = Math.max(...rows.map((x) => x.id)) + 1;
    setRows((r) => [...r, { id, name: 'New product', cat: 'Beans', price: 0, cost: 0, stock: 0, reorder: 10, img: 'motif-coffee-bean', active: false }]);
    flash('Product added — fill in details');
  };

  const shown = cat === 'All' ? rows : rows.filter((x) => x.cat === cat);
  const skus = rows.length;
  const low = rows.filter((x) => x.stock > 0 && x.stock <= x.reorder).length;
  const out = rows.filter((x) => x.stock === 0).length;
  const invValue = rows.reduce((s, x) => s + x.cost * x.stock, 0);
  const avgMargin = Math.round(rows.reduce((s, x) => s + (x.price ? (x.price - x.cost) / x.price : 0), 0) / rows.length * 100);

  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [
    { icon: 'box', value: String(skus), label: 'Active SKUs' },
    { icon: 'warehouse', value: inr(invValue), label: 'Inventory value' },
    { icon: 'alert', value: String(low), label: 'Low stock', down: low > 0, delta: low ? 'reorder' : 'ok' },
    { icon: 'x', value: String(out), label: 'Out of stock', down: out > 0 },
    { icon: 'trendingUp', value: avgMargin + '%', label: 'Avg margin' },
  ];

  // ---- editable cells ----
  const NumCell = ({ value, onChange, prefix, w = 78 }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '4px 8px', background: 'var(--surface-card)' }}>
      {prefix && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{prefix}</span>}
      <input type="number" value={value} onChange={(e) => onChange(Math.max(0, +e.target.value || 0))}
        style={{ width: w, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-primary)' }} />
    </span>
  );

  // ---- products / inventory / pricing table ----
  const cols = {
    products: '46px 1.6fr 1fr 100px 150px 120px 90px',
    inventory: '46px 1.8fr 1fr 150px 110px 130px',
    pricing: '46px 1.8fr 110px 110px 110px 100px',
  };
  const Th = ({ children, right }) => <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: right ? 'right' : 'left' }}>{children}</span>;
  const Thumb = ({ p }) => <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'var(--bk-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><img src={`${ASSET}/illustrations/${p.img}.png`} alt="" style={{ maxHeight: 26 }} /></span>;
  const Name = ({ p }) => (
    <input value={p.name} onChange={(e) => edit(p.id, { name: e.target.value })}
      style={{ border: '1px solid transparent', borderRadius: 'var(--radius-sm)', padding: '5px 7px', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)', width: '100%' }}
      onFocus={(e) => e.target.style.borderColor = 'var(--border-default)'} onBlur={(e) => e.target.style.borderColor = 'transparent'} />
  );
  const CatSelect = ({ p }) => (
    <select value={p.cat} onChange={(e) => edit(p.id, { cat: e.target.value })} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '5px 8px', background: 'var(--surface-card)', fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)' }}>
      {CATS.map((c) => <option key={c}>{c}</option>)}
    </select>
  );
  const Stepper = ({ p }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', background: 'var(--surface-card)' }}>
      <button onClick={() => bump(p.id, -1)} style={{ border: 'none', background: 'transparent', color: 'var(--text-brand)', fontSize: 16, cursor: 'pointer', width: 26, height: 28 }}>−</button>
      <input type="number" value={p.stock} onChange={(e) => edit(p.id, { stock: Math.max(0, +e.target.value || 0) })} style={{ width: 42, textAlign: 'center', border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-primary)' }} />
      <button onClick={() => bump(p.id, 1)} style={{ border: 'none', background: 'transparent', color: 'var(--text-brand)', fontSize: 16, cursor: 'pointer', width: 26, height: 28 }}>+</button>
    </span>
  );
  const Toggle = ({ p }) => (
    <button onClick={() => edit(p.id, { active: !p.active })} style={{ width: 40, height: 23, borderRadius: 999, border: 'none', cursor: 'pointer', background: p.active ? 'var(--color-primary)' : 'var(--bk-warm-300)', position: 'relative' }}>
      <span style={{ position: 'absolute', top: 3, left: p.active ? 20 : 3, width: 17, height: 17, borderRadius: '50%', background: '#fff', transition: 'left .2s' }} />
    </button>
  );

  const catBar = (
    <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center' }}>
      {['All', ...CATS].map((c) => <button key={c} onClick={() => setCat(c)} style={{ border: '1px solid var(--border-strong)', background: cat === c ? 'var(--color-primary)' : 'var(--surface-card)', color: cat === c ? '#fff' : 'var(--text-secondary)', borderRadius: 'var(--radius-pill)', padding: '5px 12px', fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 600, cursor: 'pointer' }}>{c}</button>)}
      <button onClick={addProduct} style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '8px 13px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}><PIcon name="plus" size={15} /> Add product</button>
    </div>
  );

  const productsTable = (
    <Panel title="Catalogue" icon="box" pad={0}>
      <div style={{ padding: '14px 18px 0' }}>{catBar}</div>
      <div style={{ display: 'grid', gridTemplateColumns: cols.products, gap: 12, padding: '4px 18px 10px', borderBottom: '1px solid var(--border-default)' }}>
        <Th></Th><Th>Product</Th><Th>Category</Th><Th right>Price</Th><Th>Stock</Th><Th>Status</Th><Th right>Margin</Th>
      </div>
      {shown.map((p) => (
        <div key={p.id} style={{ display: 'grid', gridTemplateColumns: cols.products, gap: 12, alignItems: 'center', padding: '10px 18px', borderBottom: '1px solid var(--border-subtle)', background: p.active ? 'transparent' : 'var(--surface-sunken)' }}>
          <Thumb p={p} /><Name p={p} /><CatSelect p={p} />
          <span style={{ justifySelf: 'end' }}><NumCell value={p.price} prefix="₹" w={58} onChange={(v) => edit(p.id, { price: v })} /></span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Stepper p={p} /><StatusPill tone={stockState(p)}>{stockLabel(p)}</StatusPill></span>
          <Toggle p={p} />
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)' }}>{p.price ? Math.round((p.price - p.cost) / p.price * 100) : 0}%</span>
        </div>
      ))}
    </Panel>
  );

  const inventoryTable = (
    <Panel title="Inventory & reorder" icon="warehouse" pad={0} action={<StatusPill tone={out ? 'bad' : low ? 'warn' : 'good'}>{out ? out + ' out' : low ? low + ' low' : 'healthy'}</StatusPill>}>
      <div style={{ display: 'grid', gridTemplateColumns: cols.inventory, gap: 12, padding: '14px 18px 10px', borderBottom: '1px solid var(--border-default)' }}>
        <Th></Th><Th>Product</Th><Th>Category</Th><Th>On hand</Th><Th right>Reorder pt</Th><Th right>Status</Th>
      </div>
      {rows.map((p) => (
        <div key={p.id} style={{ display: 'grid', gridTemplateColumns: cols.inventory, gap: 12, alignItems: 'center', padding: '10px 18px', borderBottom: '1px solid var(--border-subtle)', background: stockState(p) === 'bad' ? 'var(--danger-soft)' : stockState(p) === 'warn' ? 'var(--warning-soft)' : 'transparent' }}>
          <Thumb p={p} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)' }}>{p.name}</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-muted)' }}>{p.cat}</span>
          <Stepper p={p} />
          <span style={{ justifySelf: 'end' }}><NumCell value={p.reorder} w={44} onChange={(v) => edit(p.id, { reorder: v })} /></span>
          <span style={{ justifySelf: 'end' }}><StatusPill tone={stockState(p)}>{stockLabel(p)}</StatusPill></span>
        </div>
      ))}
    </Panel>
  );

  const pricingTable = (
    <Panel title="Pricing & margins" icon="dollar" pad={0}>
      <div style={{ display: 'grid', gridTemplateColumns: cols.pricing, gap: 12, padding: '14px 18px 10px', borderBottom: '1px solid var(--border-default)' }}>
        <Th></Th><Th>Product</Th><Th right>Cost</Th><Th right>Price</Th><Th right>Margin</Th><Th right>Profit</Th>
      </div>
      {rows.map((p) => {
        const m = p.price ? Math.round((p.price - p.cost) / p.price * 100) : 0;
        return (
          <div key={p.id} style={{ display: 'grid', gridTemplateColumns: cols.pricing, gap: 12, alignItems: 'center', padding: '10px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
            <Thumb p={p} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)' }}>{p.name}</span>
            <span style={{ justifySelf: 'end' }}><NumCell value={p.cost} prefix="₹" w={54} onChange={(v) => edit(p.id, { cost: v })} /></span>
            <span style={{ justifySelf: 'end' }}><NumCell value={p.price} prefix="₹" w={54} onChange={(v) => edit(p.id, { price: v })} /></span>
            <span style={{ textAlign: 'right' }}><StatusPill tone={m >= 45 ? 'good' : m >= 30 ? 'warn' : 'bad'}>{m}%</StatusPill></span>
            <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-primary)' }}>{inr(p.price - p.cost)}</span>
          </div>
        );
      })}
    </Panel>
  );

  const categoriesPanel = (
    <Panel title="Categories" icon="clipboard" pad={18}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {CATS.map((c) => {
          const items = rows.filter((x) => x.cat === c);
          return (
            <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 14px', background: 'var(--bk-paper)' }}>
              <PIcon name="box" size={18} color="var(--text-brand)" />
              <span style={{ flex: 1, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{c}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)' }}>{items.length} SKUs</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-accent)' }}>{inr(items.reduce((s, x) => s + x.cost * x.stock, 0))}</span>
            </div>
          );
        })}
      </div>
    </Panel>
  );

  const aiPanel = (
    <AIInsight title="AI Merchandising Insight"
      buildPrompt={() => `You are the shop admin assistant for Bisi Kaapi. Catalogue: ${rows.map((p) => `${p.name} — ${inr(p.price)} (cost ${inr(p.cost)}, ${Math.round((p.price - p.cost) / p.price * 100)}% margin), stock ${p.stock}${p.stock <= p.reorder ? ' (reorder pt ' + p.reorder + ')' : ''}`).join('; ')}. ${out} out of stock, ${low} low. Give exactly 3 short pricing/inventory actions for the merchandiser, plain-text bullets starting with "• ".`}
      fallback={`• Filter Decoction Press is out of stock — reorder or hide it so the storefront doesn't show a dead SKU.
• Pour-over Carafe (8 left, reorder at 10) is below its point — raise a PO before the weekend rush.
• Peaberry Reserve has the thinnest margin at ~41%; nudge price to ₹440 or negotiate green cost to protect profit.`} />
  );

  return (
    <Shell portal="Shop Admin" tagline="Catalogue synced" headerTitle={({ overview: 'Shop admin', products: 'Products', inventory: 'Inventory', pricing: 'Pricing', categories: 'Categories' })[view]}
      headerRight={<StatusPill tone="good" pulse>Storefront live</StatusPill>} nav={nav} onNav={setView}>
      {view === 'overview' && <>
        <KPIRow items={kpis.map((x, i) => (kpiOv[i] != null ? { ...x, value: kpiOv[i] } : x))} editable={kpiManual} onEdit={(i, v) => setKpiOv((o) => ({ ...o, [i]: v }))} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20, alignItems: 'start' }}>
          <div>{productsTable}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{aiPanel}{categoriesPanel}</div>
        </div>
      </>}
      {view === 'products' && productsTable}
      {view === 'inventory' && inventoryTable}
      {view === 'pricing' && pricingTable}
      {view === 'categories' && categoriesPanel}

      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderLeft: '4px solid var(--success)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', animation: 'bk-fade .3s ease' }}>
          <PIcon name="check" size={16} color="var(--success)" /><span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-primary)', fontWeight: 500 }}>{toast}</span>
        </div>
      )}
    </Shell>
  );
}

window.ShopAdmin = ShopAdmin;
