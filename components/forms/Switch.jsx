import React from 'react';

/** Toggle switch. Terracotta when on, warm track when off. */
export function Switch({ checked, defaultChecked, disabled = false, label, size = 'md', onChange, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const W = size === 'sm' ? 36 : 46;
  const H = size === 'sm' ? 20 : 26;
  const knob = H - 6;

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };

  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" checked={on} onChange={toggle} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        position: 'relative', width: W, height: H, borderRadius: 'var(--radius-pill)', flexShrink: 0,
        background: on ? 'var(--color-primary)' : 'var(--bk-warm-300)',
        boxShadow: on ? 'none' : 'var(--shadow-inset)',
        transition: 'background var(--duration-base) var(--ease-out)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: on ? W - knob - 3 : 3,
          width: knob, height: knob, borderRadius: '50%', background: 'var(--bk-milk)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--duration-base) var(--ease-out)',
        }} />
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
