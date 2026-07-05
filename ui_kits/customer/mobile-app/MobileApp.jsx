const { Button, Badge, Rating, Tag, QuantityStepper, IconButton } = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;
const ASSET = '../../../assets';

const ITEMS = [
  { id: 1, name: 'Bisi Kaapi', desc: 'The classic filter coffee', price: 40, rating: 4.9, count: 820, img: 'motif-filter-cup' },
  { id: 2, name: 'Bella Kaapi', desc: 'Jaggery-sweetened', price: 50, rating: 4.8, count: 410, img: 'motif-filter-cup' },
  { id: 3, name: 'Cardamom Latte', desc: 'Espresso · cardamom', price: 180, rating: 4.7, count: 192, img: 'motif-coffee-bean' },
  { id: 4, name: 'Cold Brew', desc: '18-hour, single origin', price: 190, rating: 4.6, count: 138, img: 'motif-coffee-plant' },
];

// ---------- Phone shell ----------
function Phone({ children }) {
  return (
    <div style={{ width: 390, height: 844, background: '#1c1109', borderRadius: 48, padding: 11, boxShadow: 'var(--shadow-xl)', flexShrink: 0 }}>
      <div style={{ width: '100%', height: '100%', background: 'var(--color-bg)', borderRadius: 38, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>9:41</span>
          <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <Icon name="leaf" size={14} color="var(--text-primary)" />
            <span style={{ width: 22, height: 11, border: '1.5px solid var(--text-primary)', borderRadius: 3, display: 'inline-block', position: 'relative' }}><span style={{ position: 'absolute', inset: 1.5, background: 'var(--text-primary)', borderRadius: 1 }}></span></span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function TabBar({ tab, setTab, cartCount }) {
  const tabs = [{ id: 'home', icon: 'coffee' }, { id: 'menu', icon: 'menu' }, { id: 'orders', icon: 'clock' }, { id: 'profile', icon: 'user' }];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64, borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-card)', flexShrink: 0 }}>
      {tabs.map((t) => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 8, position: 'relative' }}>
          <Icon name={t.icon} size={23} color={tab === t.id ? 'var(--color-primary)' : 'var(--text-muted)'} strokeWidth={tab === t.id ? 2.4 : 2} />
        </button>
      ))}
    </div>
  );
}

// ---------- Home ----------
function Home({ onOpen, onAdd }) {
  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ padding: '8px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: 12 }}>
              <Icon name="mapPin" size={13} color="var(--text-brand)" /> Jayanagar · Bengaluru
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, color: 'var(--text-primary)', marginTop: 2 }}>Good morning ☕</div>
          </div>
          <img src={`${ASSET}/logo/bisi-kaapi-mark.png`} width="40" height="40" alt="" />
        </div>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 9, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: '11px 16px', boxShadow: 'var(--shadow-inset)' }}>
          <Icon name="search" size={18} color="var(--text-muted)" />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-muted)' }}>Search filter coffee, snacks…</span>
        </div>
      </div>

      <div style={{ padding: '18px 22px 0' }}>
        <div style={{ background: 'var(--surface-dark)', borderRadius: 'var(--radius-xl)', padding: '20px 22px', position: 'relative', overflow: 'hidden' }}>
          <Badge tone="accent">Today's pour</Badge>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--bk-paper)', marginTop: 10, maxWidth: '64%' }}>Bella Kaapi, on us</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,247,238,0.78)', marginTop: 5, maxWidth: '64%' }}>Free with any order over ₹200 today.</div>
          <img src={`${ASSET}/illustrations/motif-filter-cup.png`} alt="" style={{ position: 'absolute', right: -16, bottom: -14, height: 130, opacity: 0.5 }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 9, padding: '20px 22px 4px', overflowX: 'auto' }}>
        {['Kaapi', 'Espresso', 'Cold', 'Snacks'].map((c, i) => <Tag key={c} selected={i === 0} onClick={() => {}}>{c}</Tag>)}
      </div>

      <div style={{ padding: '8px 22px 22px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)', margin: '10px 0 12px' }}>Popular today</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {ITEMS.map((it) => (
            <div key={it.id} onClick={() => onOpen(it)} style={{ display: 'flex', gap: 13, alignItems: 'center', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 11, cursor: 'pointer', boxShadow: 'var(--shadow-xs)' }}>
              <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-md)', background: 'var(--bk-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={`${ASSET}/illustrations/${it.img}.png`} alt="" style={{ maxHeight: 50 }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-primary)' }}>{it.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', marginBottom: 4 }}>{it.desc}</div>
                <Rating value={it.rating} size={12} count={it.count} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 16, color: 'var(--text-primary)' }}>₹{it.price}</span>
                <IconButton label="Add" variant="solid" size="sm" onClick={(e) => { e.stopPropagation(); onAdd(it); }}><Icon name="plus" size={16} /></IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Item detail ----------
function ItemDetail({ item, onBack, onAdd }) {
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState('Regular');
  const [milk, setMilk] = React.useState('Whole milk');
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ background: 'var(--bk-paper)', height: 230, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <button onClick={onBack} style={{ position: 'absolute', top: 14, left: 16, width: 38, height: 38, borderRadius: '50%', border: 'none', background: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon name="arrowLeft" size={19} color="var(--text-primary)" />
          </button>
          <img src={`${ASSET}/illustrations/${item.img}.png`} alt="" style={{ maxHeight: 170 }} />
        </div>
        <div style={{ padding: '20px 22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, color: 'var(--text-primary)', margin: 0 }}>{item.name}</h1>
              <div style={{ marginTop: 6 }}><Rating value={item.rating} size={14} showValue count={item.count} /></div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 22, color: 'var(--text-primary)' }}>₹{item.price}</span>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 12 }}>
            {item.desc} — brewed strong in a traditional South-Indian filter and finished with frothy boiled milk. Warmth of home, in a steel tumbler.
          </p>

          <div style={{ marginTop: 18 }}>
            <Lbl>Size</Lbl>
            <div style={{ display: 'flex', gap: 9 }}>{['Small', 'Regular', 'Large'].map((s) => <Tag key={s} selected={size === s} onClick={() => setSize(s)}>{s}</Tag>)}</div>
          </div>
          <div style={{ marginTop: 16 }}>
            <Lbl>Milk</Lbl>
            <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>{['Whole milk', 'Oat', 'No milk'].map((m) => <Tag key={m} selected={milk === m} onClick={() => setMilk(m)}>{m}</Tag>)}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '14px 22px', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-card)', display: 'flex', gap: 12, alignItems: 'center' }}>
        <QuantityStepper value={qty} onChange={setQty} />
        <Button size="lg" style={{ flex: 1 }} onClick={() => onAdd(item, qty)}>Add · ₹{item.price * qty}</Button>
      </div>
    </div>
  );
}

function Lbl({ children }) {
  return <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)', marginBottom: 9 }}>{children}</div>;
}

// ---------- Cart ----------
function Cart({ cart, setCart, onBack, onPlace }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal > 0 ? 29 : 0;
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '6px 22px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={onBack} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, display: 'flex' }}><Icon name="arrowLeft" size={22} color="var(--text-primary)" /></button>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--text-primary)', margin: 0 }}>Your order</h1>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 22px' }}>
        {cart.length === 0 && <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-muted)', textAlign: 'center', marginTop: 60 }}>Your cup's empty — add something warm.</div>}
        {cart.map((it, idx) => (
          <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--bk-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src={`${ASSET}/illustrations/${it.img}.png`} alt="" style={{ maxHeight: 40 }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--text-primary)' }}>{it.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-secondary)' }}>₹{it.price}</div>
            </div>
            <QuantityStepper size="sm" value={it.qty} onChange={(v) => setCart((c) => c.map((x, i) => i === idx ? { ...x, qty: v } : x))} />
          </div>
        ))}
      </div>
      <div style={{ padding: '16px 22px', borderTop: '1px solid var(--border-default)', background: 'var(--surface-card)' }}>
        <Row k="Subtotal" v={subtotal} />
        <Row k="Delivery" v={delivery} />
        <div style={{ height: 1, background: 'var(--border-default)', margin: '10px 0' }} />
        <Row k="Total" v={subtotal + delivery} bold />
        <div style={{ marginTop: 14 }}>
          <Button size="lg" fullWidth disabled={cart.length === 0} onClick={onPlace}>Place order</Button>
        </div>
      </div>
    </div>
  );
}
function Row({ k, v, bold }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: bold ? 16 : 14, fontWeight: bold ? 700 : 400, color: bold ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: bold ? 18 : 14, fontWeight: 600, color: 'var(--text-primary)' }}>₹{v}</span>
    </div>
  );
}

// ---------- Confirm ----------
function Confirm({ onDone, orderId }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 30, textAlign: 'center' }}>
      <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'var(--success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="check" size={44} color="var(--success)" strokeWidth={2.6} />
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, color: 'var(--text-primary)', margin: '22px 0 8px' }}>Order placed!</h1>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '30ch' }}>
        Your kaapi is being brewed — and it just landed on the Café Ops board. Order <b style={{ fontFamily: 'var(--font-mono)' }}>{orderId || '#BK-2048'}</b> — ready in about 12 minutes.
      </p>
      <div style={{ marginTop: 26, width: '100%' }}><Button size="lg" fullWidth onClick={onDone}>Back to home</Button></div>
    </div>
  );
}

function MobileApp() {
  const [tab, setTab] = React.useState('home');
  const [screen, setScreen] = React.useState('home'); // home | item | cart | confirm
  const [active, setActive] = React.useState(null);
  const [cart, setCart] = React.useState([{ ...ITEMS[1], qty: 1 }]);
  const [placedId, setPlacedId] = React.useState(null);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (item, qty = 1) => {
    setCart((c) => {
      const ex = c.find((x) => x.id === item.id);
      if (ex) return c.map((x) => x.id === item.id ? { ...x, qty: x.qty + qty } : x);
      return [...c, { ...item, qty }];
    });
    setScreen('home');
  };

  const placeOrder = () => {
    const items = cart.map((i) => i.qty > 1 ? `${i.name} ×${i.qty}` : i.name).join(' · ');
    if (window.BKData) {
      const o = window.BKData.addOrder({ who: 'Mobile app · Guest', items, source: 'mobile' });
      setPlacedId(o.id);
    } else {
      setPlacedId(null);
    }
    setScreen('confirm');
  };

  return (
    <Phone>
      {screen === 'home' && <Home onOpen={(it) => { setActive(it); setScreen('item'); }} onAdd={(it) => addToCart(it, 1)} />}
      {screen === 'item' && <ItemDetail item={active} onBack={() => setScreen('home')} onAdd={addToCart} />}
      {screen === 'cart' && <Cart cart={cart} setCart={setCart} onBack={() => setScreen('home')} onPlace={placeOrder} />}
      {screen === 'confirm' && <Confirm orderId={placedId} onDone={() => { setCart([]); setPlacedId(null); setScreen('home'); }} />}

      {(screen === 'home') && (
        <button onClick={() => setScreen('cart')} style={{ position: 'absolute', right: 18, bottom: 80, width: 58, height: 58, borderRadius: '50%', background: 'var(--color-primary)', border: 'none', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="cart" size={24} color="#FFF7EE" />
          {cartCount > 0 && <span style={{ position: 'absolute', top: -4, right: -4, background: 'var(--bk-bark)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-bg)' }}>{cartCount}</span>}
        </button>
      )}

      {(screen === 'home' || screen === 'cart') && <TabBar tab={tab} setTab={setTab} cartCount={cartCount} />}
    </Phone>
  );
}

window.MobileApp = MobileApp;
