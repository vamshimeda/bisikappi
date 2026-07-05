import React from 'react';

const sizes = {
  sm: { padding: '7px 14px', fontSize: 'var(--text-sm)', radius: 'var(--radius-sm)', gap: '6px' },
  md: { padding: '11px 22px', fontSize: 'var(--text-md)', radius: 'var(--radius-md)', gap: '8px' },
  lg: { padding: '15px 30px', fontSize: 'var(--text-lg)', radius: 'var(--radius-md)', gap: '10px' },
};

const variants = {
  primary: {
    background: 'var(--color-primary)', color: 'var(--text-on-brand)',
    border: '1px solid var(--color-primary)',
    '--hover-bg': 'var(--color-primary-hover)', '--active-bg': 'var(--color-primary-active)',
    boxShadow: 'var(--shadow-sm)',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
    '--hover-bg': 'var(--surface-sunken)', '--active-bg': 'var(--bk-warm-150)',
  },
  accent: {
    background: 'var(--color-accent)', color: 'var(--bk-espresso)',
    border: '1px solid var(--color-accent)',
    '--hover-bg': 'var(--color-accent-hover)', '--active-bg': 'var(--bk-brass-700)',
    boxShadow: 'var(--shadow-sm)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-brand)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--bk-terracotta-100)', '--active-bg': 'var(--bk-terracotta-100)',
  },
  danger: {
    background: 'var(--danger)', color: '#FFF7EE',
    border: '1px solid var(--danger)',
    '--hover-bg': '#922F22', '--active-bg': '#7C2A1E',
    boxShadow: 'var(--shadow-sm)',
  },
};

/**
 * Bisi Kaapi primary button. Terracotta-forward, warm, calm motion.
 */
export function Button({
  variant = 'primary', size = 'md', fullWidth = false, disabled = false,
  type = 'button', leadingIcon, trailingIcon, children, style, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const bg = disabled ? undefined
    : active && v['--active-bg'] ? v['--active-bg']
    : hover && v['--hover-bg'] ? v['--hover-bg']
    : v.background;

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, padding: s.padding, fontSize: s.fontSize,
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
        lineHeight: 1, letterSpacing: '0.005em',
        background: bg, color: v.color, border: v.border,
        borderRadius: s.radius, boxShadow: disabled ? 'none' : v.boxShadow,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : undefined,
        transform: active && !disabled ? 'translateY(1px)' : 'none',
        transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
