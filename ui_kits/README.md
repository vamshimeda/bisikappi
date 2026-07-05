# Bisi Kaapi OS — Platform Architecture

The platform is organized into **three tiers** under `ui_kits/`, on top of the design-system **foundation** at the project root. One entry point launches everything: **`platform/hub/index.html`** (Bisi Kaapi OS), with role-based access.

```
ui_kits/
├── customer/      ← what guests & buyers see
│   ├── marketing/     Multi-page site (Home · Roastery · Coffee · Shop · Consulting) + Claude Commerce
│   ├── shop/          Online store — catalogue, product detail, cart, checkout
│   ├── mobile-app/    iOS-sized ordering app (home → item → cart → confirm)
│   ├── menu-board/    In-store 16:9 café menu board
│   └── onboarding/    Sign-up + taste profile + Kaapi Club rewards
│
├── ops/           ← internal back-office (role-gated)
│   ├── orchestrator/  Multi-agent operations brain (12 agents, live feed, approvals, integrations)
│   ├── cafe-portal/       Front-of-house — orders, 86 board, shifts, inventory
│   ├── roastery-portal/   Roast batches, green stock, QC, packaging
│   ├── supply-portal/     Suppliers, procurement, deliveries, warehouse
│   ├── finance-portal/    P&L, Tally ledger, balance sheet, cash flow
│   ├── crm-portal/        Campaigns, segments, journeys, offers, A/B
│   └── shop-admin/        Catalogue management — inventory & pricing
│
└── platform/      ← the shell & shared plumbing
    ├── hub/           Bisi Kaapi OS — login, role-based launcher (START HERE)
    ├── dev-portal/    Public API — keys, endpoints, webhooks, Zomato/Swiggy
    └── shared/        bk-data.js (live datastore + config) · portal-kit.jsx (Shell, panels, AI insight)
```

## How it fits together
- **Foundation** (`/styles.css`, `/tokens`, `/components`, `/assets`, `/guidelines`) — the design system every surface consumes. Apps link `../../../styles.css` and the compiled `../../../_ds_bundle.js`.
- **`platform/shared/bk-data.js`** — a single configurable **live data stream** (POS, Shopify, Razorpay, Tally, Shiprocket, WhatsApp, …) with pub/sub, persisted config, and an integration/API-key registry. Every ops app subscribes to it, so numbers stay consistent and update live.
- **`platform/shared/portal-kit.jsx`** — the shared ops **Shell** (sidebar + header + back-to-OS link), `Panel`, `KPIRow`, `StatusPill`, and the reusable Claude `AIInsight` component. All ops portals are built from it.
- **`platform/hub`** — the canonical front door. Sign in as a role (Owner, Ops Director, Café Manager, Head Roaster, Supply Lead, Finance); it launches only the apps that role may access, grouped **Operations / Customer / Platform**.

## Path conventions (post-regroup)
Apps live two levels under `ui_kits/` (`<tier>/<app>/`), so:
- Root assets → `../../../styles.css`, `../../../_ds_bundle.js`, `../../../assets/…`
- Shared plumbing → from ops: `../../platform/shared/…`; from platform siblings: `../shared/…`
- Cross-app links → `../../<tier>/<app>/index.html` (same-tier siblings use `../<app>/`)

## Entry points
| Surface | Path |
|---|---|
| **Bisi Kaapi OS (start here)** | `ui_kits/platform/hub/index.html` |
| Marketing site | `ui_kits/customer/marketing/index.html` |
| Online shop | `ui_kits/customer/shop/index.html` |
| Agent orchestrator | `ui_kits/ops/orchestrator/index.html` |
| Developer portal | `ui_kits/platform/dev-portal/index.html` |
