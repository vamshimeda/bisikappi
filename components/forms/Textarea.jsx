import React from 'react';

/** Multi-line text area sharing the Input well treatment. */
export function Textarea({ invalid = false, disabled = false, rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows} disabled={disabled}
      onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
      {...rest}
      style={{
        width: '100%', resize: 'vertical', padding: '11px 14px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)',
        color: 'var(--text-primary)', lineHeight: 'var(--leading-normal)',
        background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)', outline: 'none',
        boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
        transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    />
  );
}
