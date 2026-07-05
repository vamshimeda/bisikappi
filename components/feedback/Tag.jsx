import React from 'react';

/** Removable / selectable chip — used for filters, tags, dietary marks. */
export function Tag({ children, selected = false, onRemove, leadingIcon, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '5px 12px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        color: selected ? 'var(--text-on-brand)' : 'var(--text-secondary)',
        background: selected ? 'var(--color-primary)' : (hover && clickable ? 'var(--surface-sunken)' : 'var(--surface-card)'),
        border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-pill)', cursor: clickable ? 'pointer' : 'default',
        transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)',
        ...style,
      }}
    >
      {leadingIcon}
      {children}
      {onRemove && (
        <button type="button" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ display: 'inline-flex', border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 0, opacity: 0.7, lineHeight: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
        </button>
      )}
    </span>
  );
}
