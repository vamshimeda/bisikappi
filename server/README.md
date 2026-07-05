# Bisi Kaapi OS — API

Node.js/TypeScript + Postgres + WebSocket backend for Bisi Kaapi OS. Replaces
the client-simulated `bk-data.js` store with real persistence, real
role-based auth, and real live updates.

## Stack
- **Express** — REST API
- **Postgres** (`pg`) — system of record (see `src/schema.sql`)
- **ws** — WebSocket server for realtime push (orders, feed, KPIs, approvals)
- **jsonwebtoken** + **bcryptjs** — auth (login issues a JWT carrying the
  user's role and granted app keys)

## Setup
1. `createdb bisikaapi` (or point `DATABASE_URL` at any Postgres instance —
   Supabase, RDS, Railway, Neon, local Docker, etc.)
2. `cp .env.example .env` and fill in `DATABASE_URL` / `JWT_SECRET`.
3. `npm install`
4. `npm run migrate` — applies `src/schema.sql` (tables + seed roles/apps).
5. `npm run seed` — inserts demo data equivalent to the current frontend
   simulation (orders, inventory, shifts, integrations, roastery/supply/
   finance/CRM starter rows) so the API behaves like the prototype on day one.
6. `npm run dev` — starts the API on `http://localhost:4000` with the
   WebSocket server on the same port at `/ws`.

## Auth model
- `POST /api/auth/login` — email + password → `{ token, user }`. The JWT
  payload carries `{ sub, roleKey, apps: string[] }`.
- Every protected route reads `Authorization: Bearer <token>`.
- `requireAppAccess('cafe')` middleware (see `src/auth.ts`) rejects requests
  whose token's `apps` list doesn't include that app key — this is the same
  role → app grant model built into the Hub / Dev Portal "Access" tab, now
  enforced server-side instead of client-side.

## Realtime
Every mutating endpoint (`orders`, `inventory`, `shifts`, `approvals`,
`integrations`) broadcasts a typed event over the WebSocket (`src/realtime.ts`)
after committing to Postgres, so every connected client — Café Ops, Hub, the
mobile app — sees the same change instantly, from any origin, without
localStorage tab-syncing.

## API surface
See `src/routes/*.ts`. Grouped by domain: `access` (roles/apps/auth),
`orders` + `inventory` + `shifts` (Café Ops), `integrations` (Dev Portal),
`ops` (roastery batches, supply POs, finance ledger, CRM campaigns).

## Wiring the frontend
This pass ships the backend only — the frontend (`ui_kits/`) still runs on
the simulated `bk-data.js`. To connect them: replace `bk-data.js`'s in-memory
state + `localStorage` with `fetch()` calls to these routes and a `WebSocket`
subscription for live updates. The exposed hook shapes (`useBK`,
`useBKConfig`) can stay the same on the frontend — only their internals need
to change from "read local state" to "call the API."
