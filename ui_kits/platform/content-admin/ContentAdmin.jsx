const { Panel, StatusPill, AdminShell } = window.PortalKit;
const PIcon = window.PIcon;
const CFG = window.BK_CONTENT_CONFIG;
const ASSET = '../../../assets';

function iframeSrcFor(app, page) {
  return app === 'shop'
    ? '../../customer/shop/index.html?content_admin=1'
    : `../../customer/marketing/index.html?content_admin=1&page=${page || 'home'}`;
}

// ---------------- Login ----------------
function LoginScreen({ apiBase, setApiBase, onLoggedIn, embedded }) {
  const [email, setEmail] = React.useState('akshay@bisikaapi.coffee');
  const [password, setPassword] = React.useState('');
  const [err, setErr] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true); setErr('');
    try {
      let res;
      try {
        res = await fetch(apiBase + '/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      } catch (networkErr) {
        throw new Error(`No response from ${apiBase}. Either the API in server/ isn't running (npm install && npm run migrate && npm run seed && npm run dev, see server/README.md), or it's running but hasn't allowlisted this page's origin in CORS_ORIGINS (server/.env) — open the browser console to tell which.`);
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      if (!data.user.apps.includes('content')) throw new Error(`Role "${data.user.roleKey}" isn't granted Content access`);
      onLoggedIn(data.token, data.user);
    } catch (e) { setErr(e.message || 'Could not reach the API'); }
    setBusy(false);
  };
  return (
    <div style={embedded ? { fontFamily: 'var(--font-sans)' } : { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-sunken)', fontFamily: 'var(--font-sans)' }}>
      <form onSubmit={submit} style={{ width: 380, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <img src={`${ASSET}/logo/bisi-kaapi-mark.png`} width="34" height="34" alt="" />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19 }}>Content</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>Sign in to edit marketing copy & products</div>
          </div>
        </div>
        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 5 }}>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', margin: '14px 0 5px' }}>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        <details style={{ marginTop: 12 }}>
          <summary style={{ fontSize: 11.5, color: 'var(--text-muted)', cursor: 'pointer' }}>API server URL</summary>
          <input value={apiBase} onChange={(e) => setApiBase(e.target.value)} style={{ ...inputStyle, marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 12 }} />
        </details>
        {err && <div style={{ marginTop: 14, fontSize: 12.5, color: 'var(--danger)', lineHeight: 1.5 }}>{err}</div>}
        <button type="submit" disabled={busy} style={{ marginTop: 18, width: '100%', border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '11px 0', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>{busy ? 'Signing in…' : 'Sign in'}</button>
        <div style={{ marginTop: 14, fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.6 }}>Demo login: akshay@bisikaapi.coffee / bisikaapi123 — only valid once you've run the backend (server/README.md: npm install, npm run migrate, npm run seed, npm run dev). No backend running? Fields below still load from local defaults, read-only.</div>
      </form>
    </div>
  );
}
const inputStyle = { width: '100%', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '9px 11px', fontFamily: 'var(--font-sans)', fontSize: 13.5, background: 'var(--bk-paper)', color: 'var(--text-primary)', boxSizing: 'border-box' };

// ---------------- String field ----------------
function StringField({ row, lang, canEdit, onSave, highlighted }) {
  const val = lang === 'kn' ? row.kn : row.en;
  const long = CFG.LONGFORM.test(row.key) || (val && val.length > 60);
  const ref = React.useRef(null);
  const commit = () => {
    const v = ref.current.value;
    if (v === val) return;
    onSave(row.key, lang, v);
  };
  return (
    <div style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', background: highlighted ? 'var(--bk-terracotta-100)' : 'transparent', transition: 'background .6s ease', borderRadius: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>{CFG.prettify(row.key)}</label>
        <code style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{row.key}</code>
      </div>
      {long ? (
        <textarea key={row.key + lang} ref={ref} defaultValue={val} disabled={!canEdit} onBlur={commit} rows={val && val.length > 140 ? 4 : 2} style={{ ...inputStyle, resize: 'vertical', fontFamily: lang === 'kn' ? 'var(--font-script)' : 'var(--font-sans)' }} />
      ) : (
        <input key={row.key + lang} ref={ref} defaultValue={val} disabled={!canEdit} onBlur={commit} style={{ ...inputStyle, fontFamily: lang === 'kn' ? 'var(--font-script)' : 'var(--font-sans)' }} />
      )}
    </div>
  );
}

// ---------------- Product row ----------------
function ProductRow({ p, canEdit, onSave, onDelete, highlighted }) {
  const [local, setLocal] = React.useState(p);
  React.useEffect(() => setLocal(p), [p]);
  const field = (k, v) => setLocal((s) => ({ ...s, [k]: v }));
  const commit = (k) => { if (local[k] !== p[k]) onSave(p.id, { [k]: local[k] }); };
  const num = (v) => { const n = Number(v); return isNaN(n) ? 0 : n; };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 90px 90px 90px 1fr 70px 60px 60px 40px', gap: 8, alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid var(--border-subtle)', background: highlighted ? 'var(--bk-terracotta-100)' : 'transparent' }}>
      <input disabled={!canEdit} value={local.name} onChange={(e) => field('name', e.target.value)} onBlur={() => commit('name')} style={cellStyle} />
      <select disabled={!canEdit} value={local.cat} onChange={(e) => { field('cat', e.target.value); onSave(p.id, { cat: e.target.value }); }} style={cellStyle}>
        <option>Beans</option><option>Gear</option>
      </select>
      <input disabled={!canEdit} value={local.tag || ''} placeholder="—" onChange={(e) => field('tag', e.target.value)} onBlur={() => commit('tag')} style={cellStyle} />
      <input disabled={!canEdit} value={local.roast || ''} placeholder="—" onChange={(e) => field('roast', e.target.value)} onBlur={() => commit('roast')} style={cellStyle} />
      <input disabled={!canEdit} value={local.origin || ''} onChange={(e) => field('origin', e.target.value)} onBlur={() => commit('origin')} style={cellStyle} />
      <input disabled={!canEdit} value={local.price} onChange={(e) => field('price', num(e.target.value))} onBlur={() => commit('price')} style={{ ...cellStyle, fontFamily: 'var(--font-mono)' }} />
      <input disabled={!canEdit} value={local.rating} onChange={(e) => field('rating', num(e.target.value))} onBlur={() => commit('rating')} style={{ ...cellStyle, fontFamily: 'var(--font-mono)' }} />
      <input type="checkbox" disabled={!canEdit} checked={!!local.featured} onChange={(e) => { field('featured', e.target.checked); onSave(p.id, { featured: e.target.checked }); }} title="Featured on homepage" />
      <button disabled={!canEdit} onClick={() => onDelete(p.id)} title="Delete" style={{ border: 'none', background: 'transparent', color: 'var(--danger)', cursor: canEdit ? 'pointer' : 'not-allowed' }}><PIcon name="x" size={15} /></button>
    </div>
  );
}
const cellStyle = { width: '100%', border: '1px solid var(--border-subtle)', borderRadius: 5, padding: '5px 7px', fontSize: 12.5, background: 'var(--surface-card)', color: 'var(--text-primary)', boxSizing: 'border-box' };

// ---------------- List editor (roastery steps / grind types / consulting services) ----------------
function ListItemCard({ item, fields, canEdit, onChange, onRemove }) {
  return (
    <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 12, background: 'var(--surface-card)', marginBottom: 10, position: 'relative' }}>
      <button disabled={!canEdit} onClick={onRemove} title="Remove" style={{ position: 'absolute', top: 8, right: 8, border: 'none', background: 'transparent', color: 'var(--danger)', cursor: canEdit ? 'pointer' : 'not-allowed' }}><PIcon name="x" size={13} /></button>
      {fields.map((f) => (
        <div key={f.key} style={{ marginBottom: 8 }}>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 3 }}>{f.label}</label>
          {f.long ? (
            <textarea disabled={!canEdit} value={item[f.key] || ''} onChange={(e) => onChange(f.key, e.target.value)} rows={2} style={{ ...inputStyle, resize: 'vertical', fontSize: 12.5 }} />
          ) : (
            <input disabled={!canEdit} value={item[f.key] || ''} onChange={(e) => onChange(f.key, e.target.value)} style={{ ...inputStyle, fontSize: 12.5 }} />
          )}
        </div>
      ))}
    </div>
  );
}
function ListEditor({ listKey, label, fields, items, canEdit, onSaveList, highlighted }) {
  const [local, setLocal] = React.useState(items || []);
  React.useEffect(() => setLocal(items || []), [items]);
  const timerRef = React.useRef(null);
  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);
  // All mutations (typing, add, remove) funnel through here and debounce to
  // one save ~600ms after the last change — avoids the old bug where a
  // field's blur-triggered autosave and an Add/Remove button's own save
  // could race and land out of order.
  const scheduleSave = (next) => {
    setLocal(next);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { onSaveList(listKey, next); timerRef.current = null; }, 600);
  };
  const updateItem = (i, key, val) => scheduleSave(local.map((it, idx) => (idx === i ? { ...it, [key]: val } : it)));
  const removeItem = (i) => scheduleSave(local.filter((_, idx) => idx !== i));
  const addItem = () => { const blank = {}; fields.forEach((f) => { blank[f.key] = ''; }); scheduleSave([...local, blank]); };
  return (
    <div style={{ background: highlighted ? 'var(--bk-terracotta-100)' : 'transparent', borderRadius: 8, padding: highlighted ? 6 : 0, transition: 'background .6s ease' }}>
      {local.map((item, i) => (
        <ListItemCard key={i} item={item} fields={fields} canEdit={canEdit} onChange={(k, v) => updateItem(i, k, v)} onRemove={() => removeItem(i)} />
      ))}
      <button onClick={addItem} disabled={!canEdit} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px dashed var(--border-strong)', background: 'transparent', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '6px 11px', fontSize: 12, fontWeight: 600, cursor: canEdit ? 'pointer' : 'not-allowed' }}><PIcon name="plus" size={13} /> Add item</button>
    </div>
  );
}

// ---------------- Main ----------------
function ContentAdmin() {
  const [apiBase, setApiBase] = React.useState((window.BK_CONFIG && window.BK_CONFIG.apiBase) || 'http://localhost:4000');
  const [token, setToken] = React.useState(localStorage.getItem('bk_content_token') || '');
  const [user, setUser] = React.useState(() => { try { return JSON.parse(localStorage.getItem('bk_content_user') || 'null'); } catch (e) { return null; } });
  const [health, setHealth] = React.useState('checking');
  const [stringsArr, setStringsArr] = React.useState(() => Object.keys(window.BK_I18N || {}).map((k) => ({ key: k, en: window.BK_I18N[k][0], kn: window.BK_I18N[k][1] })));
  const [products, setProducts] = React.useState(window.BK_PRODUCTS_DEFAULT || []);
  const [lists, setLists] = React.useState(() => ({ ...(window.BK_LISTS_DEFAULT || {}) }));
  const [activePageId, setActivePageId] = React.useState('home');
  const [lang, setLang] = React.useState('en');
  const [iframeApp, setIframeApp] = React.useState('marketing');
  const [iframeSrc, setIframeSrc] = React.useState(() => iframeSrcFor('marketing', 'home'));
  const [toast, setToast] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const [highlight, setHighlight] = React.useState(null); // {key} or {productId}
  const iframeRef = React.useRef(null);
  const activePage = CFG.PAGES.find((p) => p.id === activePageId);

  const flash = (m, bad) => { setToast({ m, bad }); setTimeout(() => setToast(null), 2400); };

  const authHeaders = () => ({ 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) });

  const loadAll = React.useCallback(async () => {
    try {
      const h = await fetch(apiBase + '/api/health');
      setHealth(h.ok ? 'online' : 'offline');
      if (!h.ok) return;
      const [sRes, pRes] = await Promise.all([fetch(apiBase + '/api/content/strings'), fetch(apiBase + '/api/content/products')]);
      const sRows = await sRes.json();
      const sMap = {}; sRows.forEach((r) => { sMap[r.key] = r; });
      setStringsArr((prev) => prev.map((row) => (sMap[row.key] ? { ...row, en: sMap[row.key].en, kn: sMap[row.key].kn } : row)));
      const pRows = await pRes.json();
      if (pRows.length) setProducts(pRows.map((r) => ({ ...r, price: Number(r.price), rating: Number(r.rating), count: Number(r.count) })));
      const lRes = await fetch(apiBase + '/api/content/lists');
      const lRows = await lRes.json();
      if (lRows.length) { const lMap = {}; lRows.forEach((r) => { lMap[r.key] = r.items; }); setLists((prev) => ({ ...prev, ...lMap })); }
    } catch (e) { setHealth('offline'); }
  }, [apiBase]);

  React.useEffect(() => { loadAll(); }, [loadAll]);

  React.useEffect(() => {
    function onMsg(e) {
      if (!e.data || e.data.type !== 'bk-section-click') return;
      const section = e.data.section;
      if (section && section.startsWith('product-')) {
        const id = Number(section.split('-')[1]);
        setActivePageId('catalog');
        setHighlight({ productId: id });
        setTimeout(() => setHighlight(null), 2200);
        return;
      }
      const target = CFG.SECTION_TO_PAGE[section];
      if (target) {
        setActivePageId(target.pageId);
        setHighlight({ section });
        setTimeout(() => setHighlight(null), 2200);
      }
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const refreshPreview = () => { try { iframeRef.current && iframeRef.current.contentWindow.postMessage({ type: 'bk-content-refresh' }, '*'); } catch (e) {} };

  const selectPage = (p) => {
    setActivePageId(p.id);
    if (p.app !== iframeApp) {
      // Only changing apps (marketing <-> shop) remounts/reloads the iframe.
      // Navigating between pages within the SAME app must never touch `src`
      // — that used to recompute every render and cause a full reload on
      // every sidebar click, racing with the postMessage below.
      setIframeApp(p.app);
      setIframeSrc(iframeSrcFor(p.app, p.page));
    } else if (p.page && iframeRef.current) {
      try { iframeRef.current.contentWindow.postMessage({ type: 'bk-goto-page', page: p.page }, '*'); } catch (e) {}
    }
  };

  const canEdit = health === 'online' && !!token;

  const saveString = async (key, field, value) => {
    setStringsArr((prev) => prev.map((r) => (r.key === key ? { ...r, [field]: value } : r)));
    if (!canEdit) { flash('Sign in (with a backend running) to save', true); return; }
    try {
      const res = await fetch(`${apiBase}/api/content/strings/${encodeURIComponent(key)}`, { method: 'PUT', headers: authHeaders(), body: JSON.stringify({ [field]: value }) });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || 'Save failed'); }
      flash('Saved · live on the site');
      refreshPreview();
    } catch (e) { flash(e.message, true); }
  };

  const saveProduct = async (id, patch) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
    if (!canEdit) { flash('Sign in (with a backend running) to save', true); return; }
    try {
      const res = await fetch(`${apiBase}/api/content/products/${id}`, { method: 'PUT', headers: authHeaders(), body: JSON.stringify(patch) });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || 'Save failed'); }
      flash('Saved · live on the site');
      refreshPreview();
    } catch (e) { flash(e.message, true); }
  };

  const addProduct = async () => {
    if (!canEdit) { flash('Sign in (with a backend running) to add products', true); return; }
    // id and sort_order are assigned server-side — the draft only carries editable fields.
    const draft = { name: 'New product', cat: 'Beans', origin: '', roast: 'Medium', price: 0, rating: 4.5, count: 0, img: 'motif-coffee-bean', featured: false };
    try {
      const res = await fetch(`${apiBase}/api/content/products`, { method: 'POST', headers: authHeaders(), body: JSON.stringify(draft) });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || 'Could not create product'); }
      const row = await res.json();
      setProducts((prev) => [...prev, { ...row, price: Number(row.price), rating: Number(row.rating), count: Number(row.count) }]);
      refreshPreview();
    } catch (e) { flash(e.message, true); }
  };

  const deleteProduct = async (id) => {
    if (!canEdit) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
    try { await fetch(`${apiBase}/api/content/products/${id}`, { method: 'DELETE', headers: authHeaders() }); refreshPreview(); } catch (e) {}
  };

  const saveList = async (key, items) => {
    setLists((prev) => ({ ...prev, [key]: items }));
    if (!canEdit) { flash('Sign in (with a backend running) to save', true); return; }
    try {
      const res = await fetch(`${apiBase}/api/content/lists/${encodeURIComponent(key)}`, { method: 'PUT', headers: authHeaders(), body: JSON.stringify({ items }) });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || 'Save failed'); }
      flash('Saved · live on the site');
      refreshPreview();
    } catch (e) { flash(e.message, true); }
  };

  const logout = () => { localStorage.removeItem('bk_content_token'); localStorage.removeItem('bk_content_user'); setToken(''); setUser(null); };

  const navItems = CFG.PAGES.map((p) => ({ ...p, active: p.id === activePageId }));

  const panelHeader = (
    <>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, margin: 0, flex: 1 }}>{activePage.label}</h1>
      {!activePage.isCatalog && (
        <div style={{ display: 'flex', gap: 2, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: 2 }}>
          {[['en', 'EN'], ['kn', 'ಕ']].map(([lc, lab]) => <button key={lc} onClick={() => setLang(lc)} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '4px 10px', fontSize: 12, fontWeight: 700, background: lang === lc ? 'var(--color-primary)' : 'transparent', color: lang === lc ? '#FFF7EE' : 'var(--text-secondary)' }}>{lab}</button>)}
        </div>
      )}
    </>
  );

  const panelBody = (
    <>
      {!canEdit && (
        <div style={{ margin: '12px 0', padding: 10, borderRadius: 'var(--radius-sm)', background: 'var(--warning-soft)', color: '#8A5E12', fontSize: 12, lineHeight: 1.5 }}>
          {health === 'offline' ? <>No API reachable at <code>{apiBase}</code> — showing local defaults, read-only.</> : 'Viewing only.'}
        </div>
      )}
      {activePage.isCatalog ? (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 90px 90px 90px 1fr 70px 60px 60px 40px', gap: 8, fontSize: 10.5, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', padding: '0 12px 6px' }}>
            <span>Name</span><span>Cat</span><span>Tag</span><span>Roast</span><span>Origin</span><span>Price</span><span>Rating</span><span>Feat.</span><span></span>
          </div>
          {products.map((p) => <ProductRow key={p.id} p={p} canEdit={canEdit} onSave={saveProduct} onDelete={deleteProduct} highlighted={highlight?.productId === p.id} />)}
          <button onClick={addProduct} disabled={!canEdit} style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', background: 'var(--color-primary)', color: '#FFF7EE', borderRadius: 'var(--radius-sm)', padding: '8px 13px', fontWeight: 600, fontSize: 12.5, cursor: canEdit ? 'pointer' : 'not-allowed' }}><PIcon name="plus" size={14} /> Add product</button>
          <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 14, lineHeight: 1.6 }}>This catalogue feeds the Online Shop grid, the marketing site's Shop (accessories) page, and any product marked "Featured" appears in the homepage "From our roastery" section.</p>
        </div>
      ) : (
        activePage.groups.map((g) => (
          <div key={g.listKey || g.prefix} style={{ marginTop: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-accent)', marginBottom: 6 }}>{g.label}</div>
            {g.kind === 'list' ? (
              <ListEditor listKey={g.listKey} label={g.label} fields={g.fields} items={lists[g.listKey]} canEdit={canEdit} onSaveList={saveList} highlighted={highlight?.section === g.section} />
            ) : (
              stringsArr.filter((r) => r.key.startsWith(g.prefix)).map((row) => (
                <StringField key={row.key} row={row} lang={lang} canEdit={canEdit} onSave={saveString} highlighted={highlight?.section === g.section} />
              ))
            )}
          </div>
        ))
      )}
    </>
  );

  const toolbar = (
    <>
      <StatusPill tone={health === 'online' ? 'good' : health === 'checking' ? 'idle' : 'bad'} pulse={health === 'online'}>{health === 'online' ? 'API connected' : health === 'checking' ? 'Checking…' : 'API offline'}</StatusPill>
      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Click any block in the preview to jump to its fields</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <button onClick={() => { loadAll(); refreshPreview(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', padding: '6px 11px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}><PIcon name="refresh" size={13} /> Refresh</button>
      </div>
    </>
  );

  const preview = <iframe key={iframeApp} ref={iframeRef} src={iframeSrc} title="Live preview" style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }} />;

  return (
    <>
      {showLogin && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(30,18,10,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => { if (e.target === e.currentTarget) setShowLogin(false); }}>
          <div style={{ position: 'relative' }}>
            <button onClick={() => setShowLogin(false)} style={{ position: 'absolute', top: -14, right: -14, width: 28, height: 28, borderRadius: '50%', border: 'none', background: 'var(--surface-card)', boxShadow: 'var(--shadow-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PIcon name="x" size={14} /></button>
            <LoginScreen apiBase={apiBase} setApiBase={(v) => { setApiBase(v); localStorage.setItem('bk_api_base', v); }} onLoggedIn={(t, u) => { setToken(t); setUser(u); localStorage.setItem('bk_content_token', t); localStorage.setItem('bk_content_user', JSON.stringify(u)); setShowLogin(false); loadAll(); }} embedded />
          </div>
        </div>
      )}
      <AdminShell portal="Content" nav={navItems} onNav={selectPage} user={token ? user : null} onSignIn={() => setShowLogin(true)} onSignOut={logout} panelHeader={panelHeader} panelBody={panelBody} toolbar={toolbar} preview={preview} />
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderLeft: `4px solid ${toast.bad ? 'var(--danger)' : 'var(--success)'}`, borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', maxWidth: 380 }}>
          <PIcon name={toast.bad ? 'alert' : 'check'} size={16} color={toast.bad ? 'var(--danger)' : 'var(--success)'} /><span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500 }}>{toast.m}</span>
        </div>
      )}
    </>
  );
}

window.ContentAdmin = ContentAdmin;
