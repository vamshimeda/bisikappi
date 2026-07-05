# Bisi Kaapi — Design System & Platform

> ಬಿಸಿ ಕಾಫಿ · "Bisi" (hot) + "Kaapi" (coffee). A South-Indian filter-coffee brand celebrating the warmth of home, the richness of tradition, and the joy of slowing down.

This project is both the consumable **design system** (tokens, fonts, brand assets, reusable React components) and a full **product platform** built on it: a multi-page marketing site with functional commerce, an online shop, a café menu board, a mobile ordering app, three internal ops portals, a multi-agent orchestrator, and a role-based hub — all driven by a shared configurable live datastore. Consuming projects link `styles.css` and read components from `window.BisiKaapiDesignSystem_2fbe5e`.

## Sources
Brand by **Nomadiic Horse Designs**. The source of truth is the mounted **"Bisi Kaapi.fig"** Figma — specifically the official **"Coffee Chakra" brand guidelines** (Colours --- Done, Typography --- Done, Logo Design --- Done, Brand Tone --- Done pages) plus rich illustration/pattern/doodle/social pages. Early work also drew on a user-supplied launch carousel (`assets/brand/`) and the logo. Tokens + fonts are reconciled to the Figma; `figma-extract/fig-tokens.css` holds the materialized Figma Variables.

---

## CONTENT FUNDAMENTALS
How Bisi Kaapi writes (three brand-tone personas in the Figma: **The Mindful Guide** — calm, centred, inviting; **The Purist** — craft-driven, authentic, passionate; **The Welcomer** — friendly, familiar, rooted):
- **Tone** — warm, reflective, unhurried. It *invites*, never instructs. Sensory over salesy.
- **Structure** — short declaratives, often a pause then a turn: *"Decades in the making. But the new beginning."* Em-dashes for asides.
- **Voice** — first-person plural ("we"), addressed to "you". Heritage worn lightly, with pride.
- **Casing** — sentence case everywhere, including headings & buttons.
- **Bilingual** — the Kannada lockup **ಬಿಸಿ ಕಾಫಿ** appears as an accent beside the wordmark, never as body copy.
- **Emoji** — sparing; an occasional ☕ in product/UI context. Never decorative emoji walls.
- **Examples** — "Slow down, savour the brew." · "Because everybody loves 'Bisi' (hot) + 'Kaapi' (coffee)." · "Take a little warmth home."
- **Avoid** — hype, ALL-CAPS shouting, exclamation pile-ups, jargon.

## VISUAL FOUNDATIONS
- **Colour — official "Coffee Chakra" palette.** Deep Espresso `#381E0D` (ink/dark), Roasted Cherry `#7C2D1C` (deep accent), **Caramel Crema `#FB8B24`** (signature vivid orange / `--bk-marigold`), Steamed Milk (warm cream), Sweet Latte `#E4C4AD` (tan), Cappuccino `#DAC2A3` (dominant surface fill). Page bg `--bk-paper #EFE6D4`; primary action is roasted-caramel `--color-primary #A8481F`; accent amber `--bk-brass-500`. Neutrals are tan-tinted, never cold grey. Semantic colours come from the spice rack (cardamom green, turmeric, chili, indigo).
- **Type** — `Figtree` (display: bold headlines & the wordmark, 28–96px, tight tracking); `Satoshi` (geometric humanist sans, all body & UI — served from Fontshare); `Readex Pro` (numerals & supporting labels); `Spline Sans Mono` (prices, weights, specs); `Anek Kannada` (Kannada accent only). Overlines are uppercase amber with wide tracking.
- **Spacing** — 4px base grid, generous and unhurried (`--section-y` clamps 4–8rem).
- **Backgrounds** — flat warm colour fields, occasionally a faint amber radial glow on espresso-dark. No noisy gradients, no purple. Illustrations sit on flat fields.
- **Illustration** — the brand's signature is line-art / monoline cultural motifs and a story-arch panel; the Figma adds monochrome elements, pencil-drawn, doodle, iconography, and wall-abstract registers. Current kits use hand-extracted crops in `assets/illustrations/` as placeholders (story arch, coffee gear, botanical branch, motif tiles) — replace with the real Figma illustration exports when pulled. Never hand-roll new SVG illustrations.
- **Corners** — soft: cards `--radius-lg` (18px), pills for tags/quantity.
- **Cards** — warm near-white `--surface-card`, 1px subtle warm border, soft espresso-tinted shadow; a `dark` (espresso) variant for feature cards. Hover lifts 2px.
- **Shadows** — always espresso-tinted, never neutral grey. Inset shadow on input wells.
- **Motion** — calm, never bouncy. `--ease-out` ~200ms. Buttons translate 1px on press; cards lift on hover. No infinite decorative loops.
- **States** — hover darkens the fill one step; press darkens again + 1px nudge. Focus uses a caramel ring (`--shadow-focus`).

## ICONOGRAPHY
- UI uses **Lucide**-style line icons (2px stroke, round caps/joins), inlined per kit (`window.Icon` / `window.OIcon` / `window.PIcon`) so kits render offline. ⚠️ *Substitution flag: confirm or replace with the real Lucide package.*
- **Brand glyph** — the coffee-**bean** is the house motif: it forms the `Rating` beans, the decorative `Divider`, and section breaks. Prefer it over stars.
- **Logo** — the swirling-steam medallion (`assets/logo/`) in four colourways (ink, cream, brass, terracotta); confirmed to match the official Figma logo exactly.
- **Unicode** — `₹` for prices (always mono).

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (imports only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css`.
- `figma-extract/fig-tokens.css` — materialized Figma Variables (all theme modes).
- `_ds_bundle.js` — auto-generated component bundle. Namespace: `BisiKaapiDesignSystem_2fbe5e`.

**Assets** (`assets/`)
- `logo/` — medallion mark in 4 colourways + original.
- `illustrations/` — hand-extracted brand crops (story arch, coffee gear, botanical branch, motif tiles) — placeholders pending real Figma exports.
- `brand/` — source launch creatives (reference).

**Components** (`window.BisiKaapiDesignSystem_2fbe5e`) — 21 total
- *forms/* — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, QuantityStepper
- *feedback/* — Badge, Tag, Tooltip, Toast, Dialog, Spinner
- *display/* — Card, Avatar, Divider, Tabs, Accordion, Rating (bean rating)

**Shared platform infra** (`ui_kits/_shared/`)
- `bk-data.js` — configurable **live datastore**: simulates a multi-source event stream (Square POS, Shopify, Razorpay, Tally, Shiprocket, **WhatsApp Business**, Gmail, Slack, Sheets, Zoho, Zomato, Swiggy), pub/sub (`useBK`, `useBKConfig`), persisted config, and an **integration catalog** where every tool is configurable via API keys. Swap each adapter's `pull()` for real fetch/WebSocket to go live.
- `portal-kit.jsx` — shared portal shell, panels, KPI rows, status pills, and a reusable Claude `AIInsight` component (`window.PortalKit`).

**Customer surfaces** (`ui_kits/`)
- `marketing/` — multi-page site: Home, Roastery, Coffee (grinds), Accessories shop, Consulting. **Functional cart + drawer + checkout**, **Claude Commerce** AI shopping assistant. Footer credits Nomadiic Horse Designs · Quantink.AI.
- `shop/` — online store: product grid + filters + product detail.
- `menu-board/` — in-store 16:9 café menu board (pure HTML/CSS).
- `mobile-app/` — iOS-sized ordering app: home → item → cart → confirm.

**Internal apps** (`ui_kits/`)
- `hub/` — **Bisi Kaapi OS**: login + **role-based access** launchpad linking every app (owner Akshay Meda + 5 roles); AI briefing per role.
- `orchestrator/` — **multi-agent orchestrator** (12 agents: sourcing, roasting, inventory, order-to-pay, account processing, shipment, marketing comms, support, finance, time-tracking, notifications, connectors). Live task feed, human-in-loop approvals, **Settings → Integrations manager** (API-key entry/connect/disconnect), Claude insight + ask box. Runs on `bk-data`.
- `cafe-portal/` — front-of-house: live orders, 86/menu, shifts, inventory, AI insight.
- `roastery-portal/` — roast batches, green stock, QC, packaging, AI insight.
- `supply-portal/` — suppliers, procurement, deliveries, warehouse, AI insight.

**Slides** (`slides/`) — sample brand deck (16:9): title, section, content, big quote, stats, closing.

**Foundation cards** (`guidelines/`) — Design System tab specimens for Colours, Type, Spacing, Brand.

## CAVEATS & OPEN ITEMS
- **Fonts** — Satoshi loads from Fontshare; Figtree/Readex Pro/Spline/Anek from Google Fonts. No local binaries yet (flagged for self-hosting). **Comico** (Figma decorative face) isn't webfont-available — substituted by Figtree.
- **Icons** — inlined Lucide-style set (substitution; confirm real system).
- **Illustrations / photography** — kits use hand-extracted crops & illustrations as placeholders for real Figma exports and product photography.
- **In progress** — functional left-nav across portals; wiring hub + café/roastery/supply portals to `bk-data`; EN/ಕನ್ನಡ language toggle; deploy-ready standalone build. See project todos.
