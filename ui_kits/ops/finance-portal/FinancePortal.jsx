const { Shell, Panel, KPIRow, StatusPill, AIInsight } = window.PortalKit;
const PIcon = window.PIcon;

const NAV = [
  { icon: 'grid', label: 'Overview', view: 'overview' },
  { icon: 'dollar', label: 'P&L statement', view: 'pnl' },
  { icon: 'receipt', label: 'Ledger', badge: 6, view: 'ledger' },
  { icon: 'scale', label: 'Balance sheet', view: 'balance' },
  { icon: 'refresh', label: 'Cash flow', view: 'cashflow' },
];

// ₹ helpers
const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
const lakh = (n) => '₹' + (n / 100000).toFixed(2) + 'L';

// ---- P&L model (monthly, ₹) ----
const REVENUE = [
  { name: 'Café sales', amt: 1420000 },
  { name: 'Online & retail beans', amt: 680000 },
  { name: 'Wholesale supply', amt: 340000 },
  { name: 'Consulting', amt: 120000 },
];
const COGS = [
  { name: 'Green coffee', amt: 490000 },
  { name: 'Milk & dairy', amt: 180000 },
  { name: 'Packaging', amt: 95000 },
  { name: 'Other ingredients', amt: 135000 },
];
const OPEX = [
  { name: 'Rent & premises', amt: 320000 },
  { name: 'Salaries & wages', amt: 640000 },
  { name: 'Utilities', amt: 85000 },
  { name: 'Marketing', amt: 140000 },
  { name: 'Logistics & delivery', amt: 70000 },
  { name: 'Misc & admin', amt: 45000 },
];
const DEPRECIATION = 60000, INTEREST = 40000, TAX = 65000;

const PERIODS = [['MTD', 1], ['QTD', 3.05], ['FY', 11.4]];

function FinancePortal() {
  const live = window.useBK ? window.useBK((s) => s.kpis) : null;
  const [view, setView] = React.useState('overview');
  const [period, setPeriod] = React.useState(0);
  const nav = NAV.map((n) => ({ ...n, active: n.view === view }));
  const mult = PERIODS[period][1];

  const rev = REVENUE.reduce((s, x) => s + x.amt, 0) * mult;
  const cogs = COGS.reduce((s, x) => s + x.amt, 0) * mult;
  const gross = rev - cogs;
  const opex = OPEX.reduce((s, x) => s + x.amt, 0) * mult;
  const ebitda = gross - opex;
  const dep = DEPRECIATION * mult, int = INTEREST * mult, tax = TAX * mult;
  const ebit = ebitda - dep;
  const pbt = ebit - int;
  const net = pbt - tax;
  const pctRev = (n) => ((n / rev) * 100).toFixed(1) + '%';

  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [
    { icon: 'dollar', value: lakh(rev), label: 'Revenue', delta: '+12%' },
    { icon: 'trendingUp', value: pctRev(gross), label: 'Gross margin', delta: '+1.4pt' },
    { icon: 'scale', value: lakh(ebitda), label: 'EBITDA', delta: '+8%' },
    { icon: 'receipt', value: lakh(net), label: 'Net profit', delta: '+6%' },
    { icon: 'trendingUp', value: pctRev(net), label: 'Net margin', delta: '' },
  ];

  // ---- Ledger (Tally-synced) ----
  const ledger = [
    { date: '30 Jun', type: 'Sales', acct: 'Café POS — Jayanagar', dr: 0, cr: 48260, ref: 'SAL-2048' },
    { date: '30 Jun', type: 'Purchase', acct: 'Baba Budangiri Estate', dr: 336000, cr: 0, ref: 'PUR-1192' },
    { date: '29 Jun', type: 'Payment', acct: 'CityFresh Dairy', dr: 44000, cr: 0, ref: 'PAY-882' },
    { date: '29 Jun', type: 'Receipt', acct: 'Razorpay settlement', dr: 0, cr: 321540, ref: 'RCP-5521' },
    { date: '28 Jun', type: 'Expense', acct: 'Electricity — BESCOM', dr: 28500, cr: 0, ref: 'EXP-410' },
    { date: '28 Jun', type: 'Journal', acct: 'Depreciation — equipment', dr: 60000, cr: 0, ref: 'JNL-77' },
  ];
  const TYPE_TONE = { Sales: 'good', Receipt: 'good', Purchase: 'warn', Payment: 'info', Expense: 'bad', Journal: 'idle' };

  // ---- Balance sheet ----
  const assets = [['Cash & bank', 1840000], ['Inventory (green + finished)', 1260000], ['Accounts receivable', 540000], ['Equipment (net)', 2150000]];
  const liabilities = [['Accounts payable', 720000], ['Working-capital loan', 1400000], ['GST payable', 185000]];
  const totalAssets = assets.reduce((s, x) => s + x[1], 0);
  const totalLiab = liabilities.reduce((s, x) => s + x[1], 0);
  const equity = totalAssets - totalLiab;

  // ---- Cash flow ----
  const cash = [['Operating activities', 412000, 'good'], ['Investing activities', -180000, 'bad'], ['Financing activities', -95000, 'bad']];
  const netCash = cash.reduce((s, x) => s + x[1], 0);

  const HEAD = { overview: 'Finance', pnl: 'Profit & loss', ledger: 'Ledger', balance: 'Balance sheet', cashflow: 'Cash flow' };

  // ---- statement row ----
  const Row = ({ label, amt, bold, indent, tone, pct, top }) => (
    <div style={{ display: 'flex', alignItems: 'center', padding: bold ? '11px 0' : '7px 0', borderTop: top ? '1.5px solid var(--border-strong)' : 'none', borderBottom: bold ? 'none' : '1px solid var(--border-subtle)' }}>
      <span style={{ flex: 1, paddingLeft: indent ? 16 : 0, fontFamily: 'var(--font-sans)', fontSize: bold ? 14.5 : 13.5, fontWeight: bold ? 700 : 400, color: bold ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{label}</span>
      {pct && <span style={{ width: 64, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>{pct}</span>}
      <span style={{ width: 130, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: bold ? 15 : 13.5, fontWeight: bold ? 700 : 500, color: tone === 'bad' ? 'var(--danger)' : tone === 'good' ? 'var(--success)' : 'var(--text-primary)' }}>{amt < 0 ? '(' + inr(-amt) + ')' : inr(amt)}</span>
    </div>
  );

  const pnlPanel = (
    <Panel title="Profit & loss statement" icon="dollar" pad={20} action={<StatusPill tone="good">Tally-synced</StatusPill>}>
      <div style={{ maxWidth: 720 }}>
        <Row label="Revenue" bold />
        {REVENUE.map((r) => <Row key={r.name} label={r.name} amt={r.amt * mult} indent pct={pctRev(r.amt * mult)} />)}
        <Row label="Total revenue" amt={rev} bold top pct="100%" />
        <div style={{ height: 14 }} />
        <Row label="Cost of goods sold" bold />
        {COGS.map((r) => <Row key={r.name} label={r.name} amt={-r.amt * mult} indent tone="bad" />)}
        <Row label="Gross profit" amt={gross} bold top pct={pctRev(gross)} />
        <div style={{ height: 14 }} />
        <Row label="Operating expenses" bold />
        {OPEX.map((r) => <Row key={r.name} label={r.name} amt={-r.amt * mult} indent tone="bad" />)}
        <Row label="EBITDA" amt={ebitda} bold top pct={pctRev(ebitda)} />
        <div style={{ height: 8 }} />
        <Row label="Depreciation" amt={-dep} indent tone="bad" />
        <Row label="Interest" amt={-int} indent tone="bad" />
        <Row label="Tax" amt={-tax} indent tone="bad" />
        <Row label="Net profit" amt={net} bold top pct={pctRev(net)} tone="good" />
      </div>
    </Panel>
  );

  const ledgerPanel = (
    <Panel title="General ledger — Tally-synced" icon="receipt" pad={0} action={<StatusPill tone="good" pulse>live sync</StatusPill>}>
      <div style={{ display: 'grid', gridTemplateColumns: '70px 92px 1fr 110px 110px 90px', padding: '10px 18px', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        <span>Date</span><span>Type</span><span>Account</span><span style={{ textAlign: 'right' }}>Debit</span><span style={{ textAlign: 'right' }}>Credit</span><span style={{ textAlign: 'right' }}>Ref</span>
      </div>
      {ledger.map((e, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 92px 1fr 110px 110px 90px', alignItems: 'center', padding: '11px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{e.date}</span>
          <span><StatusPill tone={TYPE_TONE[e.type]}>{e.type}</StatusPill></span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{e.acct}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: e.dr ? 'var(--text-primary)' : 'var(--text-muted)' }}>{e.dr ? inr(e.dr) : '—'}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: e.cr ? 'var(--success)' : 'var(--text-muted)' }}>{e.cr ? inr(e.cr) : '—'}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{e.ref}</span>
        </div>
      ))}
    </Panel>
  );

  const balancePanel = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <Panel title="Assets" icon="scale" pad={18}>
        {assets.map((a) => <Row key={a[0]} label={a[0]} amt={a[1]} />)}
        <Row label="Total assets" amt={totalAssets} bold top />
      </Panel>
      <Panel title="Liabilities & equity" icon="scale" pad={18}>
        {liabilities.map((a) => <Row key={a[0]} label={a[0]} amt={a[1]} />)}
        <Row label="Total liabilities" amt={totalLiab} bold top />
        <div style={{ height: 10 }} />
        <Row label="Owner's equity" amt={equity} bold tone="good" />
      </Panel>
    </div>
  );

  const cashflowPanel = (
    <Panel title="Cash flow summary" icon="refresh" pad={20}>
      <div style={{ maxWidth: 620 }}>
        {cash.map((c) => <Row key={c[0]} label={c[0]} amt={c[1]} tone={c[2]} />)}
        <Row label="Net change in cash" amt={netCash} bold top tone={netCash >= 0 ? 'good' : 'bad'} />
        <div style={{ height: 10 }} />
        <Row label="Opening balance" amt={1703000} />
        <Row label="Closing balance" amt={1703000 + netCash} bold top />
      </div>
    </Panel>
  );

  const insightPanel = (
    <AIInsight title="AI Finance Insight"
      buildPrompt={() => `You are the finance assistant for Bisi Kaapi coffee. Monthly P&L: revenue ${inr(rev)}, gross margin ${pctRev(gross)}, EBITDA ${inr(ebitda)}, net profit ${inr(net)} (${pctRev(net)}). Salaries ${inr(640000 * mult)} and rent ${inr(320000 * mult)} are the biggest opex; green coffee is the biggest COGS. Cash: operating +₹4.12L, investing −₹1.8L. A ₹14L working-capital loan is outstanding. Give exactly 3 short finance insights for the owner, each with one action, plain-text bullets starting with "• ".`}
      fallback={`• Gross margin is healthy at ~65%, but net margin is thin (~7.6%) — salaries + rent eat most of it; revisit the Jayanagar lease at renewal.
• Green-coffee COGS is your largest variable cost — lock Q3 estate pricing now while you have operating cash positive.
• Operating cash (+₹4.12L) comfortably covers the loan servicing; consider prepaying part of the ₹14L facility to cut interest.`} />
  );

  return (
    <Shell portal="Finance & Accounts" tagline="Books balanced" headerTitle={HEAD[view]}
      headerRight={
        <div style={{ display: 'flex', gap: 4, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: 3 }}>
          {PERIODS.map(([lab], i) => <button key={lab} onClick={() => setPeriod(i)} style={{ border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '5px 12px', fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 600, background: period === i ? 'var(--color-primary)' : 'transparent', color: period === i ? '#FFF7EE' : 'var(--text-secondary)' }}>{lab}</button>)}
        </div>
      }
      nav={nav} onNav={setView}>

      {view === 'overview' && <>
        <KPIRow items={kpis.map((x, i) => (kpiOv[i] != null ? { ...x, value: kpiOv[i] } : x))} editable={kpiManual} onEdit={(i, v) => setKpiOv((o) => ({ ...o, [i]: v }))} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, alignItems: 'start' }}>
          <div>{pnlPanel}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {insightPanel}
            <Panel title="Cash position" icon="refresh" pad={18}>
              {cash.map((c) => <Row key={c[0]} label={c[0]} amt={c[1]} tone={c[2]} />)}
              <Row label="Net change" amt={netCash} bold top tone={netCash >= 0 ? 'good' : 'bad'} />
            </Panel>
          </div>
        </div>
      </>}
      {view === 'pnl' && pnlPanel}
      {view === 'ledger' && ledgerPanel}
      {view === 'balance' && balancePanel}
      {view === 'cashflow' && cashflowPanel}
    </Shell>
  );
}

window.FinancePortal = FinancePortal;
