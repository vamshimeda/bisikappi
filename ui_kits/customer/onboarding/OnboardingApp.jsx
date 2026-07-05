const { Button, Input, Tag, Badge, Card } = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;
const ASSET = '../../../assets';

// ---- Kaapi Club program model ----
const TIERS = [
  { id: 'sapling', name: 'Sapling', min: 0, perks: ['Welcome 50 beans', 'Birthday cup'] },
  { id: 'brewer', name: 'Brewer', min: 200, perks: ['Free upsize', 'Double-bean weekends', 'Early menu access'] },
  { id: 'connoisseur', name: 'Connoisseur', min: 500, perks: ['Free 250g bag monthly', 'Free delivery', 'Reserve roasts'] },
];
function tierFor(beans) { let t = TIERS[0]; for (const x of TIERS) if (beans >= x.min) t = x; return t; }
function nextTier(beans) { return TIERS.find((x) => x.min > beans) || null; }

// ---- Phone shell ----
function Phone({ children }) {
  return (
    <div style={{ width: 390, height: 844, background: '#1c1109', borderRadius: 48, padding: 11, boxShadow: 'var(--shadow-xl)', flexShrink: 0 }}>
      <div style={{ width: '100%', height: '100%', background: 'var(--color-bg)', borderRadius: 38, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>9:41</span>
          <span style={{ width: 22, height: 11, border: '1.5px solid var(--text-primary)', borderRadius: 3, display: 'inline-block', position: 'relative' }}><span style={{ position: 'absolute', inset: 1.5, background: 'var(--text-primary)', borderRadius: 1 }}></span></span>
        </div>
        {children}
      </div>
    </div>
  );
}

const lbl = { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)', marginBottom: 9 };
const disp = (s) => ({ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: s, lineHeight: 1.05, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' });

// ---- Progress dots ----
function Steps({ n, total }) {
  return (
    <div style={{ display: 'flex', gap: 6, padding: '4px 22px 0' }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ flex: 1, height: 4, borderRadius: 3, background: i <= n ? 'var(--color-primary)' : 'var(--bk-warm-200)', transition: 'background .3s' }} />
      ))}
    </div>
  );
}

// ---- Step 0: Welcome ----
function Welcome({ onStart }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px 26px 26px', position: 'relative' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img src={`${ASSET}/logo/bisi-kaapi-mark.png`} width="92" height="92" alt="" style={{ animation: 'bk-pop .5s ease' }} />
        <h1 style={{ ...disp(34), marginTop: 22 }}>Join the<br />Kaapi Club</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 14, maxWidth: '30ch' }}>
          Earn beans on every cup, unlock perks, and make each visit warmer. Slow down — we'll remember how you like it.
        </p>
        <div style={{ display: 'flex', gap: 20, marginTop: 26 }}>
          {[['coffee', 'Earn beans'], ['award', 'Unlock perks'], ['heart', 'Your usual']].map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--bk-terracotta-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={21} color="var(--color-primary)" /></span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-secondary)', fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <Button size="lg" fullWidth onClick={onStart}>Get started</Button>
      <button style={{ border: 'none', background: 'transparent', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, marginTop: 14, cursor: 'pointer' }}>I already have an account</button>
    </div>
  );
}

// ---- Step 1: Sign up ----
function SignUp({ data, set, onNext }) {
  const ok = data.name.trim() && data.phone.trim().length >= 10;
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 26px 26px' }}>
      <div style={{ flex: 1 }}>
        <div style={lbl}>Step 1 · You</div>
        <h2 style={{ ...disp(28), marginBottom: 6 }}>Let's get acquainted</h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', marginBottom: 22 }}>We'll text a one-time code to verify — no spam, just beans.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div><div style={lbl}>Name</div><Input placeholder="Asha Rao" value={data.name} onChange={(e) => set({ name: e.target.value })} leadingIcon={<Icon name="user" size={18} />} /></div>
          <div><div style={lbl}>Mobile</div><Input placeholder="98860 12345" prefix="+91" inputMode="tel" value={data.phone} onChange={(e) => set({ phone: e.target.value })} /></div>
          <div><div style={lbl}>Email (optional)</div><Input placeholder="asha@email.com" value={data.email} onChange={(e) => set({ email: e.target.value })} /></div>
        </div>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 9, marginTop: 18, cursor: 'pointer' }}>
          <input type="checkbox" defaultChecked style={{ marginTop: 3, accentColor: 'var(--color-primary)' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>Send me new-roast drops & perks on WhatsApp.</span>
        </label>
      </div>
      <Button size="lg" fullWidth disabled={!ok} onClick={onNext} trailingIcon={<Icon name="arrowRight" size={18} />}>Continue</Button>
    </div>
  );
}

// ---- Step 2: Taste profile ----
const BREW = ['Filter Kaapi', 'Espresso', 'Cold brew', 'Pour-over'];
const STRENGTH = ['Light', 'Balanced', 'Strong'];
const MILK = ['With milk', 'Black', 'Oat'];
const FLAV = ['Jaggery', 'Cardamom', 'Chocolatey', 'Nutty', 'Fruity', 'Floral'];
function Taste({ data, set, onNext }) {
  const toggle = (key, v, multi) => {
    if (multi) { const arr = data[key]; set({ [key]: arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v] }); }
    else set({ [key]: v });
  };
  const Group = ({ title, opts, key, multi }) => (
    <div style={{ marginBottom: 18 }}>
      <div style={lbl}>{title}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {opts.map((o) => <Tag key={o} selected={multi ? data[key].includes(o) : data[key] === o} onClick={() => toggle(key, o, multi)}>{o}</Tag>)}
      </div>
    </div>
  );
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 26px 26px' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={lbl}>Step 2 · Taste profile</div>
        <h2 style={{ ...disp(28), marginBottom: 6 }}>How do you take it?</h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20 }}>So we can pour your usual and suggest beans you'll love.</p>
        <Group title="Your brew" opts={BREW} key="brew" multi />
        <Group title="Strength" opts={STRENGTH} key="strength" />
        <Group title="Milk" opts={MILK} key="milk" />
        <Group title="Flavour notes you love" opts={FLAV} key="flavours" multi />
      </div>
      <Button size="lg" fullWidth onClick={onNext} trailingIcon={<Icon name="arrowRight" size={18} />}>Save my profile</Button>
    </div>
  );
}

// ---- Step 3: Welcome reward / first order ----
function Reward({ data, onFinish }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 26px 26px', textAlign: 'center' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', animation: 'bk-pop .5s ease' }}>
          <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'var(--surface-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <img src={`${ASSET}/illustrations/motif-filter-cup.png`} alt="" style={{ height: 88, filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
          </div>
          <span style={{ position: 'absolute', bottom: -6, right: -6 }}><Badge tone="accent">+50 ☕</Badge></span>
        </div>
        <h2 style={{ ...disp(30), marginTop: 24 }}>Welcome, {data.name.split(' ')[0] || 'friend'}!</h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 12, maxWidth: '30ch' }}>
          You've earned <b style={{ color: 'var(--text-primary)' }}>50 welcome beans</b> and a free <b style={{ color: 'var(--text-primary)' }}>Bella Kaapi</b> on your first order.
        </p>
        <Card variant="sunken" padding={14} style={{ marginTop: 20, width: '100%', display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left' }}>
          <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--bk-milk)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="award" size={20} color="var(--text-accent)" /></span>
          <div><div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>FIRSTCUP</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-secondary)' }}>Free Bella Kaapi · auto-applied</div></div>
        </Card>
      </div>
      <Button size="lg" fullWidth onClick={onFinish}>See my rewards</Button>
    </div>
  );
}

// ---- Rewards dashboard ----
function Dashboard({ data }) {
  const [beans, setBeans] = React.useState(50);
  const tier = tierFor(beans);
  const next = nextTier(beans);
  const pct = next ? Math.min(100, Math.round(((beans - tier.min) / (next.min - tier.min)) * 100)) : 100;
  const activity = [
    { t: 'Welcome bonus', d: 'Joined Kaapi Club', b: '+50', when: 'just now' },
    { t: 'Filter Coffee ×2', d: 'Jayanagar café', b: '+8', when: 'mock' },
  ];
  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ background: 'var(--surface-dark)', padding: '20px 22px 26px', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--bk-brass-300)', fontWeight: 600 }}>Kaapi Club · {tier.name}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26 }}>{data.name.split(' ')[0] || 'Member'}</div>
          </div>
          <img src={`${ASSET}/logo/bisi-kaapi-mark-cream.png`} width="40" height="40" alt="" />
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 16 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 40, lineHeight: 1 }}>{beans}</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,247,238,0.8)' }}>beans ☕</span>
        </div>
        {next && (
          <div style={{ marginTop: 14 }}>
            <div style={{ height: 8, borderRadius: 6, background: 'rgba(255,247,238,0.18)', overflow: 'hidden' }}><div style={{ width: pct + '%', height: '100%', background: 'var(--bk-marigold)', borderRadius: 6, transition: 'width .5s' }} /></div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,247,238,0.78)', marginTop: 7 }}>{next.min - beans} beans to <b>{next.name}</b></div>
          </div>
        )}
      </div>

      <div style={{ padding: '18px 22px' }}>
        <div style={lbl}>Your perks</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {tier.perks.map((p) => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '11px 13px' }}>
              <Icon name="check" size={16} color="var(--success)" /><span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-primary)', fontWeight: 500 }}>{p}</span>
            </div>
          ))}
        </div>

        <div style={lbl}>Earn more beans</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
          {[['coffee', 'Buy a cup', '1 / ₹10'], ['truck', 'Order online', '2× beans'], ['heart', 'Refer a friend', '+100'], ['star', 'Review a roast', '+15']].map(([ic, t, v]) => (
            <button key={t} onClick={() => setBeans((b) => b + 10)} style={{ textAlign: 'left', border: '1px solid var(--border-subtle)', background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: 13, cursor: 'pointer' }}>
              <Icon name={ic} size={19} color="var(--color-primary)" />
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--text-primary)', marginTop: 8 }}>{t}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-accent)', marginTop: 2 }}>{v}</div>
            </button>
          ))}
        </div>

        <div style={lbl}>Recent activity</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {activity.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--bk-terracotta-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="coffee" size={16} color="var(--color-primary)" /></span>
              <div style={{ flex: 1 }}><div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-primary)' }}>{a.t}</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>{a.d}</div></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 14, color: 'var(--success)' }}>{a.b}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)', textAlign: 'center', marginTop: 18 }}>Tap an earn tile to simulate earning beans ☕</p>
      </div>
    </div>
  );
}

function OnboardingApp() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({ name: '', phone: '', email: '', brew: ['Filter Kaapi'], strength: 'Balanced', milk: 'With milk', flavours: ['Jaggery'] });
  const set = (patch) => setData((d) => ({ ...d, ...patch }));
  return (
    <Phone>
      {step > 0 && step < 4 && <Steps n={step - 1} total={3} />}
      {step === 0 && <Welcome onStart={() => setStep(1)} />}
      {step === 1 && <SignUp data={data} set={set} onNext={() => setStep(2)} />}
      {step === 2 && <Taste data={data} set={set} onNext={() => setStep(3)} />}
      {step === 3 && <Reward data={data} onFinish={() => setStep(4)} />}
      {step === 4 && <Dashboard data={data} />}
    </Phone>
  );
}

window.OnboardingApp = OnboardingApp;
