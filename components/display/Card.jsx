import React from 'react';

const variants = {
  raised:  { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' },
  outline: { background: 'var(--surface-card)', border: '1px solid var(--border-strong)', boxShadow: 'none' },
  sunken:  { background: 'var(--surface-sunken)', border: '1px solid transparent', boxShadow: 'none' },
  dark:    { background: 'var(--surface-dark)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'var(--shadow-md)', color: 'var(--text-on-dark)' },
};

/**
 * Surface container. `interactive` adds hover lift; compose freely
 * with Card.Body / Card.Header or your own children.
 */
export function Card({ variant = 'raised', interactive = false, padding = 20, radius = 'var(--radius-lg)', children, style, ...rest }) {
  const v = variants[variant] || variants.raised;
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        ...v, borderRadius: radius, padding,
        color: v.color || 'inherit',
        boxShadow: interactive && hover ? 'var(--shadow-lg)' : v.boxShadow,
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
