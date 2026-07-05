const { Button, Badge, Card, Rating, Tag, Tabs, Accordion, QuantityStepper, IconButton, Divider } = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;
const ASSET = '../../../assets';

const shopWrap = { maxWidth: 1200, margin: '0 auto', padding: '0 36px' };
const overlineS = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-brand)' };

// Catalogue is fetched live from the Content API by content-bridge.js
// (window.BK_PRODUCTS); falls back to the static defaults when offline.
function getProducts() { return window.BK_PRODUCTS || window.BK_PRODUCTS_DEFAULT || []; }

function TopBar({ cart, lang, setLang, t }) {
  return (
    <header style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 20 }}>
      <div style={{ ...shopWrap, display: 'flex', alignItems: 'center', gap: 24, height: 70 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={`${ASSET}/logo/bisi-kaapi-mark.png`} alt="" width="38" height="38" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 23, color: 'var(--text-primary)' }}>Bisi Kaapi</span>
        </div>
        <nav style={{ display: 'flex', gap: 22, marginLeft: 14 }}>
          {[['shop.nav.shop', true], ['shop.nav.beans', false], ['shop.nav.gear', false], ['shop.nav.gifts', false]].map(([k, active]) => <a key={k} href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', fontWeight: 500, color: active ? 'var(--text-brand)' : 'var(--text-secondary)', textDecoration: 'none' }}>{t(k)}</a>)}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', gap: 2, background: 'var(--surface-sunken)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: 2 }}>
            {[['en', 'EN'], ['kn', 'ಕ']].map(([lc, lab]) => <button key={lc} onClick={() => setLang(lc)} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '4px 10px', fontFamily: lc === 'kn' ? 'var(--font-script)' : 'var(--font-sans)', fontSize: 12.5, fontWeight: 700, background: lang === lc ? 'var(--color-primary)' : 'transparent', color: lang === lc ? '#FFF7EE' : 'var(--text-secondary)' }}>{lab}</button>)}
          </div>
          <a href="../../ops/shop-admin/index.html" onClick={(e) => { e.preventDefault(); window.location.assign('../../ops/shop-admin/index.html' + window.location.search); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-brand)', textDecoration: 'none' }}><Icon name="settings" size={16} /> {t('shop.admin')}</a>
          <Icon name="search" color="var(--text-secondary)" />
          <span style={{ position: 'relative', display: 'flex' }}>
            <Icon name="cart" color="var(--text-secondary)" />
            <span style={{ position: 'absolute', top: -7, right: -9, background: 'var(--color-primary)', color: '#fff', fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 600, width: 17, height: 17, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cart}</span>
          </span>
        </div>
      </div>
    </header>
  );
}

function FilterSidebar({ cat, setCat, roast, setRoast, t }) {
  const CATS = [['All', 'shop.catAll'], ['Beans', 'shop.nav.beans'], ['Gear', 'shop.nav.gear'], ['Gifts', 'shop.nav.gifts']];
  const ROASTS = [['Light', 'shop.roastLight'], ['Medium', 'shop.roastMedium'], ['Medium-dark', 'shop.roastMD'], ['Dark', 'shop.roastDark']];
  return (
    <aside style={{ width: 224, flexShrink: 0 }}>
      <div style={overlineS}>{t('shop.category')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
        {CATS.map(([c, k]) => (
          <button key={c} onClick={() => setCat(c)} style={{
            textAlign: 'left', border: 'none', background: cat === c ? 'var(--bk-terracotta-100)' : 'transparent',
            color: cat === c ? 'var(--text-brand)' : 'var(--text-secondary)', fontWeight: cat === c ? 600 : 500,
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', padding: '9px 13px', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
          }}>{t(k)}</button>
        ))}
      </div>
      <div style={{ margin: '24px 0' }}><Divider /></div>
      <div style={overlineS}>{t('shop.roast')}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
        {ROASTS.map(([r, k]) => <Tag key={r} selected={roast === r} onClick={() => setRoast(roast === r ? null : r)}>{t(k)}</Tag>)}
      </div>
      <div style={{ margin: '24px 0' }}><Divider /></div>
      <Card variant="dark" padding={16}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)' }}>{t('shop.subTitle')}</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', opacity: 0.82, marginTop: 6, lineHeight: 1.5 }}>{t('shop.subBody')}</div>
      </Card>
    </aside>
  );
}

function ProductGrid({ products, onOpen, onAdd, t }) {
  if (!products.length) {
    return (
      <div style={{ flex: 1, textAlign: 'center', padding: '70px 20px', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)' }}>
        {t('shop.noResults')}
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, flex: 1 }}>
      {products.map((p) => (
        <ProductCard key={p.id} p={p} size="md" assetPath={ASSET} onOpen={() => onOpen(p)} onAdd={() => onAdd()} iconOnlyAdd />
      ))}
    </div>
  );
}

function ProductDetail({ p, onBack, onAdd, t }) {
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState('250g');
  return (
    <div>
      <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, border: 'none', background: 'transparent', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 500, cursor: 'pointer', marginBottom: 22 }}>
        <Icon name="arrowLeft" size={16} /> {t('shop.back')}
      </button>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div style={{ background: 'var(--bk-paper)', borderRadius: 'var(--radius-xl)', height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)' }}>
          <img src={`${ASSET}/illustrations/${p.img}.png`} alt={p.name} style={{ maxHeight: 320 }} />
        </div>
        <div>
          {p.tag && <Badge tone={p.tone}>{p.tag}</Badge>}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2.6rem', lineHeight: 1.05, color: 'var(--text-primary)', margin: '12px 0 8px' }}>{p.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Rating value={p.rating} size={16} showValue count={p.count} />
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
            {p.origin} · {p.roast} roast. Small-batch roasted in the Western Ghats — bright, full-bodied, and built for a strong South-Indian filter decoction.
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '2rem', color: 'var(--text-primary)', margin: '20px 0' }}>₹{p.price}</div>
          <div style={{ ...overlineS, marginBottom: 10 }}>{t('shop.size')}</div>
          <div style={{ display: 'flex', gap: 9, marginBottom: 22 }}>
            {['250g', '500g', '1kg'].map((s) => <Tag key={s} selected={size === s} onClick={() => setSize(s)}>{s}</Tag>)}
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <QuantityStepper value={qty} onChange={setQty} />
            <Button size="lg" leadingIcon={<Icon name="cart" size={18} />} onClick={() => onAdd(qty)} style={{ flex: 1 }}>{t('shop.addQty')} {qty} · ₹{p.price * qty}</Button>
          </div>
          <div style={{ marginTop: 28 }}>
            <Accordion defaultOpen={['tasting']} items={[
              { id: 'tasting', title: t('shop.tastingNotes'), content: t('shop.tastingBody') },
              { id: 'brew', title: t('shop.howToBrew'), content: t('shop.brewBody') },
              { id: 'ship', title: t('shop.ship'), content: t('shop.shipBody') },
            ]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopApp() {
  const [cart, setCart] = React.useState(2);
  const [cat, setCat] = React.useState('All');
  const [roast, setRoast] = React.useState(null);
  const [active, setActive] = React.useState(null);
  const [lang, setLang] = React.useState('en');
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const t = React.useCallback((k) => window.bkTranslate(k, lang), [lang]);
  React.useEffect(() => (window.BK_CONTENT ? window.BK_CONTENT.subscribe(forceUpdate) : undefined), []);
  const all = getProducts();
  const products = all.filter((p) => (cat === 'All' || p.cat === cat) && (!roast || p.roast === roast));
  const add = (n = 1) => setCart((c) => c + n);
  return (
    <div data-bk-section="shop-catalog" style={{ fontFamily: 'var(--font-sans)', minHeight: '100vh' }}>
      <TopBar cart={cart} lang={lang} setLang={setLang} t={t} />
      <div style={{ ...shopWrap, padding: '34px 36px 70px' }}>
        {active ? (
          <ProductDetail p={active} onBack={() => setActive(null)} onAdd={add} t={t} />
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <div style={overlineS}>{t('shop.eyebrow')}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2.6rem', color: 'var(--text-primary)', margin: '10px 0 0' }}>{t('shop.title')}</h1>
            </div>
            <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start' }}>
              <FilterSidebar cat={cat} setCat={setCat} roast={roast} setRoast={setRoast} t={t} />
              <ProductGrid products={products} onOpen={setActive} onAdd={add} t={t} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

window.ShopApp = ShopApp;
