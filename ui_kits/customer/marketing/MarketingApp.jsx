const { Button, Rating, Divider, Input } = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;

const ASSET = '../../../assets';
const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
const overline = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-brand)' };
const display = (size) => ({ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 });

// ---------------- NAV ----------------
const NAV = [['home','Home'],['roastery','Roastery'],['coffee','Coffee'],['shop','Shop'],['consulting','Consulting']];
function Nav({ cart, page, setPage, lang, setLang, t }) {
  const count = cart ? cart.count : 0;
  return (
    <header data-bk-section="nav" style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(250,239,219,0.88)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ ...wrap, display: 'flex', alignItems: 'center', gap: 28, height: 74 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
          <img src={`${ASSET}/logo/bisi-kaapi-mark.png`} alt="" width="42" height="42" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--text-primary)', lineHeight: 1 }}>Bisi Kaapi</span>
        </a>
        <nav style={{ display: 'flex', gap: 26, marginLeft: 18 }}>
          {NAV.map(([id, l]) => (
            <a key={id} href="#" onClick={(e) => { e.preventDefault(); setPage(id); }} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', fontWeight: 500, color: page === id ? 'var(--text-brand)' : 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.' + id)}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', gap: 2, background: 'var(--surface-sunken)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: 2 }}>
            {[['en', 'EN'], ['kn', 'ಕ']].map(([lc, lab]) => <button key={lc} onClick={() => setLang(lc)} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '4px 10px', fontFamily: lc === 'kn' ? 'var(--font-script)' : 'var(--font-sans)', fontSize: 12.5, fontWeight: 700, background: lang === lc ? 'var(--color-primary)' : 'transparent', color: lang === lc ? '#FFF7EE' : 'var(--text-secondary)' }}>{lab}</button>)}
          </div>
          <Icon name="search" color="var(--text-secondary)" />
          <button onClick={() => cart && cart.openDrawer()} aria-label="Cart" style={{ position: 'relative', display: 'flex', border: 'none', background: 'transparent', cursor: 'pointer', padding: 4 }}>
            <Icon name="cart" color="var(--text-secondary)" />
            {count > 0 && <span style={{ position: 'absolute', top: -3, right: -5, background: 'var(--color-primary)', color: '#fff', fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 600, width: 17, height: 17, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{count}</span>}
          </button>
          <Button size="sm" onClick={() => setPage('shop')}>{t('nav.order')}</Button>
        </div>
      </div>
    </header>
  );
}

// ---------------- HERO ----------------
function Hero({ setPage, t }) {
  return (
    <section data-bk-section="hero" style={{ ...wrap, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center', padding: '64px 40px 72px' }}>
      <div>
        <div style={overline}>{t('hero.eyebrow')}</div>
        <h1 style={{ ...display('clamp(3rem, 5vw, 4.6rem)'), marginTop: 18 }}>
          {t('hero.title1')}<br /><span style={{ fontStyle: 'italic', color: 'var(--text-brand)' }}>{t('hero.titleEm')}</span> {t('hero.title2')}
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 22, maxWidth: '46ch' }}>
          {t('hero.body')}
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
          <Button size="lg" trailingIcon={<Icon name="arrowRight" size={18} />} onClick={() => setPage('coffee')}>{t('hero.cta1')}</Button>
          <Button size="lg" variant="secondary" onClick={() => setPage('shop')}>{t('hero.cta2')}</Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 30 }}>
          <Rating value={4.8} size={18} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>4.8 · {t('hero.rating')}</span>
        </div>
      </div>
      <div style={{ background: 'var(--surface-dark)', borderRadius: 'var(--radius-2xl)', padding: '28px', display: 'flex', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
        <img src={`${ASSET}/illustrations/story-arch.png`} alt="Bisi Kaapi story illustration" style={{ height: 420, maxWidth: '100%' }} />
      </div>
    </section>
  );
}

// ---------------- TRUST STRIP ----------------
function TrustStrip({ t }) {
  const items = [
    { icon: 'leaf', t: t('trust.origin'), s: t('trust.originS') },
    { icon: 'coffee', t: t('trust.roasted'), s: t('trust.roastedS') },
    { icon: 'truck', t: t('trust.shipped'), s: t('trust.shippedS') },
    { icon: 'award', t: t('trust.trust'), s: t('trust.trustS') },
  ];
  return (
    <div data-bk-section="trust" style={{ background: 'var(--bk-brass-100)', borderTop: '1px solid var(--bk-brass-300)', borderBottom: '1px solid var(--bk-brass-300)' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, padding: '22px 40px' }}>
        {items.map((it) => (
          <div key={it.t} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
            <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--bk-milk)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={it.icon} size={20} color="var(--text-accent)" />
            </span>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{it.t}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{it.s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------- STORY ----------------
function Story({ t }) {
  return (
    <section data-bk-section="story" style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', padding: '86px 40px' }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
        <img src={`${ASSET}/illustrations/chemex.png`} alt="" style={{ height: 280 }} />
        <img src={`${ASSET}/illustrations/espresso-machine.png`} alt="" style={{ height: 200, alignSelf: 'flex-end' }} />
      </div>
      <div>
        <div style={overline}>{t('story.eyebrow')}</div>
        <h2 style={{ ...display('2.8rem'), marginTop: 14, whiteSpace: 'pre-line' }}>{t('story.title')}</h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 18 }}>
          {t('story.body')}
        </p>
        <div style={{ marginTop: 22 }}>
          <Button variant="ghost" trailingIcon={<Icon name="arrowRight" size={18} />}>{t('story.cta')}</Button>
        </div>
      </div>
    </section>
  );
}

// ---------------- PRODUCTS ----------------
const PRODUCTS_FALLBACK = (window.BK_PRODUCTS_DEFAULT || []).filter((p) => p.featured);
function Products({ onAdd, setPage, t }) {
  // window.BK_PRODUCTS is undefined until content-bridge.js's fetch resolves (or fails)
  // — that's "not loaded yet", distinct from a live catalog that loaded but genuinely
  // has zero featured items. Only the former should fall back to hardcoded defaults;
  // the latter should just render nothing rather than show stale/wrong picks.
  const liveLoaded = window.BK_PRODUCTS !== undefined;
  const items = liveLoaded ? window.BK_PRODUCTS.filter((p) => p.featured) : PRODUCTS_FALLBACK;
  if (liveLoaded && !items.length) return null;
  return (
    <section data-bk-section="products" style={{ background: 'var(--surface-sunken)' }}>
      <div style={{ ...wrap, padding: '80px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 34 }}>
          <div>
            <div style={overline}>{t('prod.eyebrow')}</div>
            <h2 style={{ ...display('2.6rem'), marginTop: 12 }}>{t('prod.title')}</h2>
          </div>
          <Button variant="secondary" trailingIcon={<Icon name="arrowRight" size={18} />} onClick={() => setPage('shop')}>{t('prod.shopAll')}</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26 }}>
          {items.map((p) => (
            <ProductCard key={p.id || p.name} p={p} size="lg" assetPath={ASSET} onAdd={onAdd} addLabel={t('prod.add')} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- CAFÉ FEATURE (marigold) ----------------
function CafeFeature({ t }) {
  const pts = [t('cafe.p1'), t('cafe.p2'), t('cafe.p3')];
  return (
    <section data-bk-section="cafe" style={{ background: 'var(--bk-marigold)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ ...wrap, padding: '78px 40px', position: 'relative', zIndex: 2, maxWidth: 1200 }}>
        <div style={{ maxWidth: '54%' }}>
          <div style={{ ...overline, color: 'var(--bk-bark)' }}>{t('cafe.eyebrow')}</div>
          <h2 style={{ ...display('3rem'), color: 'var(--bk-bark)', marginTop: 14 }}>{t('cafe.title')}</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', color: 'rgba(56,20,8,0.86)', lineHeight: 1.6, marginTop: 18 }}>
            {t('cafe.body')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26 }}>
            {pts.map((p) => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--bk-bark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={15} color="var(--bk-marigold)" />
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', fontWeight: 500, color: 'var(--bk-bark)' }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Button variant="primary" size="lg" style={{ background: 'var(--bk-bark)', borderColor: 'var(--bk-bark)' }}>{t('cafe.cta')}</Button>
          </div>
        </div>
      </div>
      <img src={`${ASSET}/illustrations/coffee-branch-color.png`} alt="" style={{ position: 'absolute', right: -20, bottom: 0, maxWidth: '42%', maxHeight: '96%', objectFit: 'contain', objectPosition: 'bottom right', zIndex: 1, opacity: 0.95, pointerEvents: 'none' }} />
    </section>
  );
}

// ---------------- JOIN ----------------
function Join({ t }) {
  return (
    <section data-bk-section="join" style={{ ...wrap, padding: '80px 40px', textAlign: 'center' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <Divider decorative />
        <h2 style={{ ...display('2.4rem'), marginTop: 26 }}>{t('join.title')}</h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', marginTop: 12 }}>
          {t('join.body')}
        </p>
        <form style={{ display: 'flex', gap: 10, marginTop: 24 }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ flex: 1 }}><Input placeholder={t('join.ph')} leadingIcon={<Icon name="user" size={18} />} /></div>
          <Button>{t('join.cta')}</Button>
        </form>
      </div>
    </section>
  );
}

// ---------------- FOOTER ----------------
function Footer({ setPage }) {
  const cols = [
    { h: 'Explore', items: [['Menu', 'coffee'], ['Beans & gear', 'shop'], ['Our story', 'roastery'], ['Wholesale', 'consulting']] },
    { h: 'Visit', items: [['Find a café', 'consulting'], ['Hours', 'consulting'], ['Reserve a table', 'consulting'], ['Events', 'consulting']] },
    { h: 'Help', items: [['Shipping', 'shop'], ['Returns', 'shop'], ['Contact', 'consulting'], ['FAQs', 'consulting']] },
  ];
  return (
    <footer data-bk-section="footer" style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)' }}>
      <div style={{ ...wrap, padding: '60px 40px 40px', display: 'grid', gridTemplateColumns: '1.4fr repeat(3,1fr)', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <img src={`${ASSET}/logo/bisi-kaapi-mark-cream.png`} alt="" width="44" height="44" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26 }}>Bisi Kaapi</span>
          </div>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 20, color: 'var(--bk-brass-300)', marginTop: 6 }}>ಬಿಸಿ ಕಾಫಿ</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'rgba(255,247,238,0.7)', lineHeight: 1.6, marginTop: 12, maxWidth: '32ch' }}>
            Here's to fresh beginnings, unforgettable aromas, and countless cups shared together.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--bk-brass-300)', marginBottom: 14 }}>{c.h}</div>
            {c.items.map(([label, page]) => <a key={label} href="#" onClick={(e) => { e.preventDefault(); setPage(page); }} style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'rgba(255,247,238,0.78)', textDecoration: 'none', marginBottom: 9, cursor: 'pointer' }}>{label}</a>)}
          </div>
        ))}
      </div>
      <div style={{ ...wrap, borderTop: '1px solid rgba(255,247,238,0.12)', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'rgba(255,247,238,0.55)' }}>© 2026 Bisi Kaapi · Brand & design by Nomadiic Horse Designs · Built with Quantink.AI</span>
        <div style={{ display: 'flex', gap: 16 }}>
          <Icon name="instagram" size={19} color="rgba(255,247,238,0.7)" />
          <Icon name="mapPin" size={19} color="rgba(255,247,238,0.7)" />
        </div>
      </div>
    </footer>
  );
}

function MarketingApp() {
  const cart = window.useCartStore();
  const initialPage = new URLSearchParams(location.search).get('page') || 'home';
  const [page, setPage] = React.useState(initialPage);
  const [lang, setLang] = React.useState('en');
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const t = React.useCallback((k) => window.bkTranslate(k, lang), [lang]);
  const P = window.MarketingPages;
  const { CartDrawer, CommerceAssistant } = window.MarketingCommerce;
  React.useEffect(() => { window.scrollTo(0, 0); }, [page]);
  React.useEffect(() => {
    window.BK_GOTO_PAGE = setPage;
    return window.BK_CONTENT ? window.BK_CONTENT.subscribe(forceUpdate) : undefined;
  }, []);
  return (
    <window.BKCart.Provider value={cart}>
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <Nav cart={cart} page={page} setPage={setPage} lang={lang} setLang={setLang} t={t} />
      {page === 'home' && (<>
        <Hero setPage={setPage} t={t} />
        <TrustStrip t={t} />
        <Story t={t} />
        <Products onAdd={(p) => { cart.add(p); cart.openDrawer(); }} setPage={setPage} t={t} />
        <CafeFeature t={t} />
        <Join t={t} />
      </>)}
      {page === 'roastery' && <P.Roastery t={t} />}
      {page === 'coffee' && <P.Coffee setPage={setPage} t={t} />}
      {page === 'shop' && <P.Shop t={t} />}
      {page === 'consulting' && <P.Consulting t={t} />}
      <Footer setPage={setPage} t={t} />
      <CartDrawer />
      <CommerceAssistant />
    </div>
    </window.BKCart.Provider>
  );
}

window.MarketingApp = MarketingApp;
