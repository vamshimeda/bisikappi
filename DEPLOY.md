# Deploying Bisi Kaapi OS

This is a fully static, multi-page site — no build step. Every app (marketing
site, shop, mobile app, hub, ops portals, orchestrator, dev portal) is plain
HTML + React/Babel loaded from CDN, wired together with relative links and a
shared `ui_kits/platform/shared/bk-data.js` datastore (persisted to
`localStorage`, synced live across open tabs).

## Deploy as-is (static host)
Upload the **entire project folder** to any static host, preserving the
directory structure exactly as-is:

- **Vercel** — `vercel.json` is already set up (`cleanUrls: false` so `.html`
  paths keep working). `vercel --prod` from the project root, or connect the
  repo and deploy with no build command.
- **Netlify** — `netlify.toml` is set up (`publish = "."`, no build command).
  Drag-and-drop the folder in the Netlify dashboard, or connect the repo.
- **GitHub Pages / S3+CloudFront / any static bucket** — just upload the
  folder. No build command needed.

Entry point: `/index.html` redirects to `/ui_kits/platform/hub/index.html`
(Bisi Kaapi OS — the role-based launcher for every surface).

## Pointing at your API
`config.js` is the one place to change the API base URL for a deploy — set
`DEFAULT_API_BASE` there (or override without editing the file via
`window.BK_API_BASE` in an inline script, or the Content admin's "API server
URL" field, which is stored in `localStorage`). Nothing else in the codebase
should hardcode an API URL.

## What's simulated vs. real
- **UI, design system, and interactions** are fully real and production-grade.
- **Data** (orders, KPIs, inventory, shifts, integrations, roles) is simulated
  client-side in `bk-data.js` — it seeds realistic data, streams synthetic
  live events, and persists edits to `localStorage`. There is no backend.
- **Auth** is a role picker, not real authentication — anyone can pick any
  role in the Hub.

This is enough to demo and user-test the entire product end-to-end today. To
go from demo to production, a real backend now lives in `server/` — Node.js/
TypeScript + Postgres + WebSocket realtime, covering roles/access, café
orders/inventory/shifts, integrations, and roastery/supply/finance/CRM. See
`server/README.md` to run it. The frontend still runs on the simulated
`bk-data.js` store for now; wiring it to this API is the next step (swap
`bk-data.js`'s internals for `fetch`/`WebSocket` calls, keeping the same
`useBK`/`useBKConfig` hook shapes).

## Folders not needed in a production deploy
`figma-extract/`, `guidelines/`, `screenshots/`, `slides/`, `uploads/`,
`_adherence.oxlintrc.json`, and `_ds_manifest.json` are design-system
authoring artifacts — safe to exclude from the deployed bundle if you want a
leaner upload. Everything under `ui_kits/`, `assets/`, `components/`,
`tokens/`, `styles.css`, and `_ds_bundle.js` is required at runtime.
