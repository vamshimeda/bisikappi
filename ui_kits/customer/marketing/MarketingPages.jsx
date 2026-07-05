// Additional Bisi Kaapi marketing pages: Roastery, Coffee (grinds), Accessories, Consulting.
// Each babel file has its own scope, so re-declare the small helpers and read globals.
const { Button: PButton, Badge: PBadge, Card: PCard, Rating: PRating, Tag: PTag, Input: PInput, Textarea: PTextarea, Select: PSelect, Divider: PDivider } = window.BisiKaapiDesignSystem_2fbe5e;
const PIcon = window.Icon;
const PA = '../../../assets';
const pwrap = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
const pol = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-brand)' };
const pdisp = (size, color) => ({ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, lineHeight: 1.05, letterSpacing: '-0.02em', color: color || 'var(--text-primary)', margin: 0 });

function PageHero({ overline, title, sub, dark }) {
  return (
    <section style={{ background: dark ? 'var(--surface-dark)' : 'var(--surface-sunken)' }}>
      <div style={{ ...pwrap, padding: '70px 40px' }}>
        <div style={{ ...pol, color: dark ? 'var(--bk-brass-300)' : 'var(--text-brand)' }}>{overline}</div>
        <h1 style={{ ...pdisp('clamp(2.6rem,4.5vw,4rem)', dark ? 'var(--bk-paper)' : 'var(--text-primary)'), marginTop: 14, maxWidth: '20ch' }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', color: dark ? 'rgba(255,247,238,0.78)' : 'var(--text-secondary)', lineHeight: 1.6, marginTop: 16, maxWidth: '52ch' }}>{sub}</p>
      </div>
    </section>
  );
}

// ---------------- ROASTERY ----------------
function Roastery({ t }) {
  const steps = (window.BK_LISTS && window.BK_LISTS['roastery.steps']) || (window.BK_LISTS_DEFAULT && window.BK_LISTS_DEFAULT['roastery.steps']) || [];
  return (
    <div data-bk-section="roastery">
      <PageHero dark overline={t('r.eyebrow')} title={t('r.title')} sub={t('r.sub')} />
      <section style={{ ...pwrap, padding: '76px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          {steps.map((s, i) => (
            <PCard key={s.t} variant="raised" padding={0} style={{ overflow: 'hidden' }}>
              <div style={{ height: 180, background: 'var(--bk-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={`${PA}/illustrations/${s.img}.png`} alt="" style={{ maxHeight: 150 }} />
              </div>
              <div style={{ padding: 22 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ ...pdisp('1.6rem'), margin: '6px 0 8px' }}>{s.t}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.d}</p>
              </div>
            </PCard>
          ))}
        </div>
      </section>
      <section style={{ background: 'var(--bk-brass-100)', borderTop: '1px solid var(--bk-brass-300)', borderBottom: '1px solid var(--bk-brass-300)' }}>
        <div style={{ ...pwrap, padding: '60px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={pol}>{t('r.estEyebrow')}</div>
            <h2 style={{ ...pdisp('2.4rem'), marginTop: 12 }}>{t('r.estTitle')}</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 14 }}>Every bag carries its estate, altitude and roast date. We pay above fair-trade and visit every farm we buy from.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['Baba Budangiri', '1,650 m · Light roast'], ['Chikmagalur', '1,100 m · Medium roast'], ['Coorg', '900 m · Medium-dark']].map(([e, m]) => (
              <div key={e} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: '16px 20px', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--text-primary)' }}>{e}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------- COFFEE / GROUND VARIANTS ----------------
function Coffee({ setPage, t }) {
  const grinds = (window.BK_LISTS && window.BK_LISTS['coffee.grinds']) || (window.BK_LISTS_DEFAULT && window.BK_LISTS_DEFAULT['coffee.grinds']) || [];
  return (
    <div data-bk-section="coffee">
      <PageHero overline={t('c.eyebrow')} title={t('c.title')} sub={t('c.sub')} />
      <section style={{ ...pwrap, padding: '64px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {grinds.map((g) => (
            <PCard key={g.t} variant="outline" interactive padding={22}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minHeight: 28 }}>
                <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--bk-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PIcon name="coffee" size={22} color="var(--text-accent)" />
                </span>
                {g.badge && <PBadge tone={g.tone}>{g.badge}</PBadge>}
              </div>
              <h3 style={{ ...pdisp('1.5rem'), margin: '16px 0 8px' }}>{g.t}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{g.d}</p>
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                <PIcon name="check" size={15} color="var(--success)" /> {g.use}
              </div>
            </PCard>
          ))}
        </div>
        <div style={{ marginTop: 30, textAlign: 'center' }}>
          <PButton size="lg" trailingIcon={<PIcon name="arrowRight" size={18} />} onClick={() => setPage && setPage('shop')}>{t('c.cta')}</PButton>
        </div>
      </section>
    </div>
  );
}

// ---------------- ACCESSORIES SHOP ----------------
function Shop({ t }) {
  const cart = window.useCart();
  const catalog = window.BK_PRODUCTS || window.BK_PRODUCTS_DEFAULT || [];
  const acc = catalog.filter((p) => p.cat === 'Gear');
  const [subCat, setSubCat] = React.useState('All');
  // The product model has no sub-category field yet (see content_products
  // schema) — the filter itself is real, but only 'All' has data behind it
  // today, same as the shop sidebar's 'Gifts' case. Empty-state below covers
  // the rest instead of silently rendering nothing.
  const filtered = subCat === 'All' ? acc : acc.filter((p) => p.subcat === subCat);
  return (
    <div data-bk-section="shop-accessories">
      <PageHero overline={t('s.eyebrow')} title={t('s.title')} sub={t('s.sub')} />
      <section style={{ ...pwrap, padding: '64px 40px 80px' }}>
        <div style={{ display: 'flex', gap: 9, marginBottom: 30 }}>
          {['All', 'Brewers', 'Serveware', 'Storage', 'Gifts'].map((c) => <PTag key={c} selected={subCat === c} onClick={() => setSubCat(c)}>{c}</PTag>)}
        </div>
        {filtered.length ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
            {filtered.map((p) => (
              <ProductCard key={p.id || p.name} p={p} size="sm" assetPath={PA} onAdd={(prod) => { cart && cart.add(prod); cart && cart.openDrawer(); }} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '70px 20px', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)' }}>
            {t('shop.noResults')}
          </div>
        )}
      </section>
    </div>
  );
}

// ---------------- CONSULTING ----------------
function Consulting({ t }) {
  const services = (window.BK_LISTS && window.BK_LISTS['consulting.services']) || (window.BK_LISTS_DEFAULT && window.BK_LISTS_DEFAULT['consulting.services']) || [];
  return (
    <div data-bk-section="consulting">
      <PageHero overline={t('cn.eyebrow')} title={t('cn.title')} sub={t('cn.sub')} />
      <section style={{ ...pwrap, padding: '70px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {services.map((s) => (
            <div key={s.t} style={{ display: 'flex', gap: 18, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-xs)' }}>
              <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--bk-terracotta-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PIcon name={s.icon} size={24} color="var(--color-primary)" />
              </span>
              <div>
                <h3 style={{ ...pdisp('1.5rem'), marginBottom: 6 }}>{s.t}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: 'var(--surface-sunken)' }}>
        <div style={{ ...pwrap, padding: '64px 40px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={pol}>{t('cn.formEyebrow')}</div>
            <h2 style={{ ...pdisp('2.4rem'), marginTop: 12 }}>{t('cn.formTitle')}</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 14 }}>Share a few details and our team will reach out within two working days.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, background: 'var(--surface-card)', padding: 26, borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
            <PInput placeholder="Your name" />
            <PInput placeholder="you@business.com" />
            <div style={{ gridColumn: '1 / -1' }}>
              <PSelect defaultValue="setup">
                <option value="setup">Café setup</option>
                <option value="menu">Menu & recipe design</option>
                <option value="training">Barista training</option>
                <option value="wholesale">Wholesale supply</option>
              </PSelect>
            </div>
            <div style={{ gridColumn: '1 / -1' }}><PTextarea rows={3} placeholder="Tell us about your space and timeline…" /></div>
            <div style={{ gridColumn: '1 / -1' }}><PButton fullWidth size="lg" trailingIcon={<PIcon name="arrowRight" size={18} />}>{t('cn.send')}</PButton></div>
          </form>
        </div>
      </section>
    </div>
  );
}

window.MarketingPages = { Roastery, Coffee, Shop, Consulting };
