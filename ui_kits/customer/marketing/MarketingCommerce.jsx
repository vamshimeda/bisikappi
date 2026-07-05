// Bisi Kaapi storefront commerce: cart context, slide-in cart drawer, and a
// Claude-powered shopping assistant ("Claude Commerce"). Loaded before the
// page scripts so both MarketingApp and MarketingPages can read the cart.
const { Button: CButton, QuantityStepper: CQty, Badge: CBadge } = window.BisiKaapiDesignSystem_2fbe5e;
const CIcon = window.Icon;
const CA = '../../../assets';

// Unified catalog the assistant can recommend from.
const BK_CATALOG = [
  { id: 1, name: 'Mysore Filter Blend', price: 240, img: 'motif-coffee-bean', note: 'Chikmagalur · medium roast · our signature filter coffee' },
  { id: 2, name: 'Coorg Single Estate', price: 320, img: 'motif-coffee-plant', note: 'Coorg · medium-dark · bold & chocolatey' },
  { id: 3, name: 'Peaberry Reserve', price: 420, img: 'motif-coffee-bean', note: 'Baba Budangiri · light roast · bright & floral' },
  { id: 4, name: 'Brass Davara Tumbler', price: 690, img: 'motif-filter-cup', note: 'Serveware · the traditional way to drink kaapi' },
  { id: 5, name: 'Pour-over Carafe', price: 1290, img: 'chemex', note: 'Brewer · glass · 600ml' },
  { id: 6, name: 'Hand Grinder', price: 1850, img: 'hand-grinder', note: 'Brewer · burr · grind fresh at home' },
  { id: 7, name: 'Filter Decoction Press', price: 540, img: 'motif-coffee-bean', note: 'Brewer · stainless steel South-Indian filter' },
];
window.BK_CATALOG = BK_CATALOG;

const BKCart = React.createContext(null);
window.BKCart = BKCart;
window.useCart = () => React.useContext(BKCart);

// ----- provider hook (used by MarketingApp) -----
window.useCartStore = function useCartStore() {
  const [items, setItems] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [placed, setPlaced] = React.useState(null);

  const add = (p, qty = 1) => {
    setItems((c) => {
      const ex = c.find((x) => x.id === p.id);
      if (ex) return c.map((x) => x.id === p.id ? { ...x, qty: x.qty + qty } : x);
      return [...c, { id: p.id, name: p.name, price: p.price, img: p.img, qty }];
    });
    setPlaced(null);
  };
  const setQty = (id, q) => setItems((c) => q <= 0 ? c.filter((x) => x.id !== id) : c.map((x) => x.id === id ? { ...x, qty: q } : x));
  const remove = (id) => setItems((c) => c.filter((x) => x.id !== id));
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return { items, add, setQty, remove, clear, count, total, drawerOpen, openDrawer: () => setDrawerOpen(true), closeDrawer: () => setDrawerOpen(false), placed, setPlaced };
};

// ----- Cart drawer -----
function CartDrawer() {
  const cart = window.useCart();
  if (!cart) return null;
  const { items, setQty, remove, total, drawerOpen, closeDrawer, placed, setPlaced, clear } = cart;
  const delivery = total > 0 ? 49 : 0;
  const checkout = () => { setPlaced('BK-' + Math.floor(2000 + Math.random() * 7999)); clear(); };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 80, pointerEvents: drawerOpen ? 'auto' : 'none' }}>
      <div onClick={closeDrawer} style={{ position: 'absolute', inset: 0, background: 'rgba(43,22,7,0.42)', opacity: drawerOpen ? 1 : 0, transition: 'opacity .3s' }} />
      <aside style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 400, maxWidth: '92vw', background: 'var(--surface-card)', boxShadow: 'var(--shadow-xl)', transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .32s var(--ease-out)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: 'var(--text-primary)' }}>Your cart</span>
          <button onClick={closeDrawer} style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex' }}><CIcon name="check" size={0} /><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>

        {placed ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 30 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CIcon name="check" size={40} color="var(--success)" strokeWidth={2.6} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--text-primary)', margin: '20px 0 8px' }}>Order placed!</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Order <b style={{ fontFamily: 'var(--font-mono)' }}>#{placed}</b> is being roasted & packed. We'll email you tracking shortly.</p>
            <div style={{ marginTop: 22, width: '100%' }}><CButton fullWidth onClick={() => { setPlaced(null); closeDrawer(); }}>Keep shopping</CButton></div>
          </div>
        ) : items.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 30, color: 'var(--text-muted)' }}>
            <img src={`${CA}/illustrations/motif-filter-cup.png`} alt="" style={{ height: 90, opacity: 0.5, marginBottom: 14 }} />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15 }}>Your cup's empty — add something warm.</p>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflow: 'auto', padding: '8px 22px' }}>
              {items.map((it) => (
                <div key={it.id} style={{ display: 'flex', gap: 13, alignItems: 'center', padding: '15px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--bk-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><img src={`${CA}/illustrations/${it.img}.png`} alt="" style={{ maxHeight: 44 }} /></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: 'var(--text-primary)' }}>{it.name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', margin: '2px 0 6px' }}>₹{it.price}</div>
                    <CQty size="sm" value={it.qty} onChange={(v) => setQty(it.id, v)} />
                  </div>
                  <button onClick={() => remove(it.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)', alignSelf: 'flex-start' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></button>
                </div>
              ))}
            </div>
            <div style={{ padding: '18px 22px', borderTop: '1px solid var(--border-default)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', marginBottom: 6 }}><span>Subtotal</span><span style={{ fontFamily: 'var(--font-mono)' }}>₹{total}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', marginBottom: 10 }}><span>Delivery</span><span style={{ fontFamily: 'var(--font-mono)' }}>₹{delivery}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 17, color: 'var(--text-primary)', marginBottom: 14 }}><span>Total</span><span style={{ fontFamily: 'var(--font-mono)' }}>₹{total + delivery}</span></div>
              <CButton fullWidth size="lg" onClick={checkout}>Checkout · ₹{total + delivery}</CButton>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

// ----- Claude Commerce assistant -----
function CommerceAssistant() {
  const cart = window.useCart();
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([{ role: 'bot', text: "Hi! I'm your Bisi Kaapi guide ☕ Tell me how you brew or what you like, and I'll suggest the right beans or gear." }]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const scrollRef = React.useRef(null);
  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [msgs, open]);

  const catalogText = BK_CATALOG.map((p) => `${p.name} (₹${p.price}) — ${p.note}`).join('\n');

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || busy) return;
    setInput('');
    setMsgs((m) => [...m, { role: 'user', text: q }]);
    setBusy(true);
    const prompt = `You are Claude Commerce, the friendly shopping assistant for Bisi Kaapi, a South-Indian filter-coffee brand. Warm, concise, sentence-case voice. Here is the catalogue:\n${catalogText}\n\nCustomer says: "${q}"\n\nReply in 1–3 short sentences recommending from the catalogue. If you recommend specific products, append one line per product at the very end in the exact form: ADD: <exact product name>. Do not mention the ADD lines in your prose.`;
    let reply = null;
    try { if (window.claude && window.claude.complete) reply = await window.claude.complete(prompt); } catch (e) {}
    if (!reply) reply = "I'd start with our Mysore Filter Blend — the signature South-Indian filter coffee. Pair it with a brass davara tumbler for the full ritual.\nADD: Mysore Filter Blend\nADD: Brass Davara Tumbler";

    const adds = [];
    const prose = reply.split('\n').filter((line) => {
      const m = line.match(/^\s*ADD:\s*(.+)$/i);
      if (m) { const p = BK_CATALOG.find((c) => c.name.toLowerCase() === m[1].trim().toLowerCase()); if (p) adds.push(p); return false; }
      return true;
    }).join('\n').trim();

    setMsgs((m) => [...m, { role: 'bot', text: prose, recs: adds }]);
    setBusy(false);
  };

  const quick = ['I drink filter coffee', 'Gift under ₹1000', 'I have an espresso machine'];

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} aria-label="Shopping assistant" style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 70, width: 60, height: 60, borderRadius: '50%', border: 'none', background: 'var(--color-primary)', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CIcon name={open ? 'arrowRight' : 'coffee'} size={26} color="#FFF7EE" />
      </button>
      {open && (
        <div style={{ position: 'fixed', right: 24, bottom: 96, zIndex: 70, width: 372, maxWidth: '92vw', height: 520, maxHeight: '76vh', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '15px 18px', display: 'flex', alignItems: 'center', gap: 11 }}>
            <img src={`${CA}/logo/bisi-kaapi-mark-cream.png`} width="30" height="30" alt="" />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17 }}>Claude Commerce</div>
              <div style={{ fontSize: 11, color: 'var(--bk-brass-300)', display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)' }} /> Bisi Kaapi shopping guide</div>
            </div>
          </div>
          <div ref={scrollRef} style={{ flex: 1, overflow: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--bk-paper)' }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '86%' }}>
                <div style={{ background: m.role === 'user' ? 'var(--color-primary)' : 'var(--surface-card)', color: m.role === 'user' ? '#FFF7EE' : 'var(--text-primary)', border: m.role === 'user' ? 'none' : '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '10px 13px', fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>{m.text}</div>
                {m.recs && m.recs.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 8 }}>
                    {m.recs.map((p) => (
                      <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 8 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--bk-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><img src={`${CA}/illustrations/${p.img}.png`} alt="" style={{ maxHeight: 30 }} /></div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, color: 'var(--text-primary)' }}>{p.name}</div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>₹{p.price}</div>
                        </div>
                        <button onClick={() => { cart.add(p); cart.openDrawer(); }} style={{ border: 'none', background: 'var(--bk-terracotta-100)', color: 'var(--text-brand)', borderRadius: 'var(--radius-sm)', padding: '6px 10px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Add</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {busy && <div style={{ alignSelf: 'flex-start', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: 13, display: 'flex', gap: 7, alignItems: 'center' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-accent)', animation: 'bk-pulse 1s infinite' }} /> brewing a suggestion…</div>}
            {msgs.length === 1 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 4 }}>
                {quick.map((q) => <button key={q} onClick={() => send(q)} style={{ border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-pill)', padding: '6px 11px', fontFamily: 'var(--font-sans)', fontSize: 12, cursor: 'pointer' }}>{q}</button>)}
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid var(--border-subtle)' }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder="Ask about beans, gear, gifts…" style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: '10px 14px', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', background: 'var(--surface-card)', outline: 'none' }} />
            <button onClick={() => send()} style={{ border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CIcon name="arrowRight" size={18} /></button>
          </div>
        </div>
      )}
    </>
  );
}

window.MarketingCommerce = { CartDrawer, CommerceAssistant };
