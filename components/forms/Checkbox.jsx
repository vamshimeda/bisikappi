import React from 'react';

/** Checkbox with terracotta fill and warm-cream box. Controlled or uncontrolled. */
export function Checkbox({ checked, defaultChecked, disabled = false, label, onChange, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };

  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{ position: 'relative', display: 'inline-flex', flexShrink: 0 }}>
        <input type="checkbox" checked={on} onChange={toggle} disabled={disabled}
          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
        <span style={{
          width: 20, height: 20, borderRadius: 'var(--radius-xs)',
          border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
          background: on ? 'var(--color-primary)' : 'var(--surface-card)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
          boxShadow: on ? 'none' : 'var(--shadow-inset)',
        }}>
          {on && (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#FFF7EE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
