import React from 'react';

/**
 * Text input with warm cream well, brass focus ring, optional affixes.
 */
export function Input({
  size = 'md', invalid = false, disabled = false,
  leadingIcon, trailingIcon, prefix, suffix, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'sm' ? '8px 12px' : size === 'lg' ? '14px 16px' : '11px 14px';
  const fs = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-lg)' : 'var(--text-md)';

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)',
        padding: pad,
        boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
        transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {leadingIcon && <span style={{ display: 'flex', color: 'var(--text-muted)', flexShrink: 0 }}>{leadingIcon}</span>}
      {prefix && <span style={{ color: 'var(--text-muted)', fontSize: fs, fontFamily: 'var(--font-mono)' }}>{prefix}</span>}
      <input
        disabled={disabled}
        onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
        {...rest}
        style={{
          flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-sans)', fontSize: fs, color: 'var(--text-primary)',
          lineHeight: 1.4,
        }}
      />
      {suffix && <span style={{ color: 'var(--text-muted)', fontSize: fs, fontFamily: 'var(--font-mono)' }}>{suffix}</span>}
      {trailingIcon && <span style={{ display: 'flex', color: 'var(--text-muted)', flexShrink: 0 }}>{trailingIcon}</span>}
    </div>
  );
}
