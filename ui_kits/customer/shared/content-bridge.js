// Bisi Kaapi — content bridge: wires the marketing site + shop to the real
// Content API (server/src/routes/content.ts) so copy edited in the Content
// admin panel shows up live, with zero code changes needed to publish.
// Falls back to the static defaults (i18n.js / products.js) when the API
// isn't reachable — so every page still works with no backend running.
(function () {
  // Single externalized source of truth for the API URL — see /config.js
  // (loaded before this file). Never hardcode an API URL here.
  const API_BASE = (window.BK_CONFIG && window.BK_CONFIG.apiBase) || 'http://localhost:4000';
  const subs = new Set();
  function notify() { subs.forEach((fn) => { try { fn(); } catch (e) {} }); }
  function subscribe(fn) { subs.add(fn); return () => subs.delete(fn); }

  async function loadStrings() {
    try {
      const res = await fetch(API_BASE + '/api/content/strings');
      if (!res.ok) return false;
      const rows = await res.json();
      if (window.BK_I18N_MERGE && rows.length) {
        const patch = {};
        rows.forEach((r) => { patch[r.key] = [r.en, r.kn]; });
        window.BK_I18N_MERGE(patch);
      }
      return true;
    } catch (e) { return false; }
  }

  async function loadProducts() {
    try {
      const res = await fetch(API_BASE + '/api/content/products');
      if (!res.ok) return false;
      const rows = await res.json();
      if (rows.length) {
        window.BK_PRODUCTS = rows.map((r) => ({ ...r, price: Number(r.price), rating: Number(r.rating), count: Number(r.count) }));
      }
      return true;
    } catch (e) { return false; }
  }

  async function loadLists() {
    try {
      const res = await fetch(API_BASE + '/api/content/lists');
      if (!res.ok) return false;
      const rows = await res.json();
      if (rows.length) {
        window.BK_LISTS = window.BK_LISTS || {};
        rows.forEach((r) => { window.BK_LISTS[r.key] = r.items; });
      }
      return true;
    } catch (e) { return false; }
  }

  let connected = false;
  async function refresh() {
    const [s, p, l] = await Promise.all([loadStrings(), loadProducts(), loadLists()]);
    connected = !!(s || p || l);
    notify();
    return connected;
  }

  window.BK_CONTENT = { API_BASE, subscribe, refresh, isConnected: () => connected };
  refresh();

  // Cross-window bridge for the Content admin panel's live-preview iframe.
  window.addEventListener('message', (e) => {
    if (!e.data || typeof e.data !== 'object') return;
    if (e.data.type === 'bk-content-refresh') refresh();
    if (e.data.type === 'bk-goto-page' && window.BK_GOTO_PAGE) window.BK_GOTO_PAGE(e.data.page);
  });

  // Edit mode (?content_admin=1): outline content-bearing sections and turn
  // clicks into a postMessage to the parent admin panel instead of navigating.
  const params = new URLSearchParams(location.search);
  if (params.get('content_admin') === '1') {
    document.documentElement.classList.add('bk-content-admin');
    const style = document.createElement('style');
    style.textContent = [
      '.bk-content-admin [data-bk-section] { position: relative; cursor: pointer; outline: 1px dashed transparent; outline-offset: -1px; }',
      '.bk-content-admin [data-bk-section]:hover { outline: 2px dashed rgba(196,120,60,0.85); outline-offset: -2px; }',
      '.bk-content-admin [data-bk-section].bk-active { outline: 2px solid #A8481F; outline-offset: -2px; }',
    ].join('\n');
    document.head.appendChild(style);
    document.addEventListener('click', (e) => {
      const el = e.target && e.target.closest && e.target.closest('[data-bk-section]');
      if (!el) return;
      e.preventDefault(); e.stopPropagation();
      document.querySelectorAll('.bk-active').forEach((x) => x.classList.remove('bk-active'));
      el.classList.add('bk-active');
      window.parent.postMessage({ type: 'bk-section-click', section: el.getAttribute('data-bk-section') }, '*');
    }, true);

    // Clicks inside a data-bk-section block are intercepted above (so admin
    // clicks select-for-editing instead of firing Add-to-cart / nav /
    // language toggle etc.) — call that out so it isn't mistaken for a bug.
    document.addEventListener('DOMContentLoaded', () => {
      const banner = document.createElement('div');
      banner.textContent = 'Preview mode — click a highlighted block to edit its content (buttons & links are disabled here)';
      banner.style.cssText = 'position:fixed;bottom:14px;left:50%;transform:translateX(-50%);z-index:99999;background:#2A1608;color:#FFF7EE;font:600 12px system-ui,sans-serif;padding:8px 14px;border-radius:999px;box-shadow:0 4px 16px rgba(0,0,0,.25);pointer-events:none;white-space:nowrap;';
      document.body.appendChild(banner);
    });
  }
})();
