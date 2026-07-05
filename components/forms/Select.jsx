import React from 'react';

/** Styled native select with custom chevron and warm well. */
export function Select({ size = 'md', invalid = false, disabled = false, children, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'sm' ? '8px 36px 8px 12px' : size === 'lg' ? '14px 40px 14px 16px' : '11px 38px 11px 14px';
  const fs = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-lg)' : 'var(--text-md)';
  return (
    <div style={{ position: 'relative', display: 'inline-flex', width: '100%', ...style }}>
      <select
        disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        {...rest}
        style={{
          appearance: 'none', WebkitAppearance: 'none', width: '100%',
          padding: pad, fontFamily: 'var(--font-sans)', fontSize: fs,
          color: 'var(--text-primary)', cursor: disabled ? 'not-allowed' : 'pointer',
          background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
          border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-md)', outline: 'none',
          boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
          transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {children}
      </select>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }}>
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
