import React from 'react';

/** Hover/focus tooltip. Wraps a single trigger child. */
export function Tooltip({ content, placement = 'top', children, style }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 8 },
  }[placement];

  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      <span role="tooltip" style={{
        position: 'absolute', ...pos, zIndex: 50, pointerEvents: 'none',
        padding: '6px 10px', borderRadius: 'var(--radius-sm)',
        background: 'var(--bk-espresso)', color: 'var(--text-on-dark)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)',
        whiteSpace: 'nowrap', boxShadow: 'var(--shadow-md)',
        opacity: open ? 1 : 0, transform: `${pos.transform} translateY(${open ? '0' : '2px'})`,
        transition: 'opacity var(--duration-fast) var(--ease-out)',
      }}>
        {content}
      </span>
    </span>
  );
}
