import React from 'react';

/** Quantity stepper for ordering — − [n] +  with brass framing. */
export function QuantityStepper({ value, defaultValue = 1, min = 1, max = 99, size = 'md', onChange, disabled = false, style }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const n = isControlled ? value : internal;
  const dim = size === 'sm' ? 30 : 38;

  const set = (next) => {
    const v = Math.max(min, Math.min(max, next));
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  const btn = (label, onClick, off) => (
    <button type="button" aria-label={label} onClick={onClick} disabled={disabled || off}
      style={{
        width: dim, height: dim, border: 'none', background: 'transparent',
        color: (disabled || off) ? 'var(--text-muted)' : 'var(--text-brand)',
        fontSize: '20px', lineHeight: 0, cursor: (disabled || off) ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        opacity: (disabled || off) ? 0.4 : 1,
      }}>{label === 'increase' ? '+' : '−'}</button>
  );

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)', overflow: 'hidden', ...style,
    }}>
      {btn('decrease', () => set(n - 1), n <= min)}
      <span style={{
        minWidth: dim, textAlign: 'center', fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-md)', fontWeight: 'var(--weight-medium)', color: 'var(--text-primary)',
      }}>{n}</span>
      {btn('increase', () => set(n + 1), n >= max)}
    </div>
  );
}
