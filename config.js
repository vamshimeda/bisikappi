// Bisi Kaapi — externalized runtime config (lightweight 12-factor: config
// lives in ONE place outside the code, separate from build/deploy).
//
// This is a static, no-build-step project, so there's no env-var injection
// at build time — this file IS the "environment" for the browser-side apps.
// To point the marketing site / shop / Content admin at a different API
// (staging, production, a teammate's local server), edit `apiBase` below —
// nothing else in the codebase should ever hardcode an API URL.
//
// Precedence (highest first), so a deploy can override without editing this
// file: window.BK_API_BASE set by an inline script before this loads > the
// user's own localStorage override (set from the Content admin's "API
// server URL" field) > the value configured here.
(function () {
  const DEFAULT_API_BASE = 'http://localhost:4000';

  let stored = null;
  try { stored = window.localStorage && localStorage.getItem('bk_api_base'); } catch (e) {}

  window.BK_CONFIG = {
    apiBase: window.BK_API_BASE || stored || DEFAULT_API_BASE,
  };
})();
