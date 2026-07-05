import React from 'react';

const sizes = { sm: 32, md: 40, lg: 48 };
const iconSizes = { sm: 16, md: 18, lg: 22 };

const variants = {
  solid:   { background: 'var(--color-primary)', color: 'var(--text-on-brand)', border: '1px solid var(--color-primary)', '--hover': 'var(--color-primary-hover)' },
  soft:    { background: 'var(--bk-terracotta-100)', color: 'var(--text-brand)', border: '1px solid transparent', '--hover': 'var(--bk-terracotta-300)' },
  ghost:   { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent', '--hover': 'var(--surface-sunken)' },
  outline: { background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)', '--hover': 'var(--surface-sunken)' },
};

/**
 * Square icon-only button. Pass a single icon node as children.
 */
export function IconButton({
  variant = 'ghost', size = 'md', disabled = false, label, children, style, ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim,
        background: disabled ? v.background : (hover ? v['--hover'] : v.background),
        color: v.color, border: v.border, borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--duration-fast) var(--ease-out)',
        padding: 0, lineHeight: 0,
        ...style,
      }}
      {...rest}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children, { width: iconSizes[size], height: iconSizes[size] })
        : children}
    </button>
  );
}
