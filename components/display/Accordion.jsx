import React from 'react';

/**
 * Accordion. `items` = [{id,title,content}]. Single-open by default;
 * set `multiple` to allow several open at once.
 */
export function Accordion({ items = [], defaultOpen = [], multiple = false, style }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };
  return (
    <div style={{ borderTop: '1px solid var(--border-default)', ...style }}>
      {items.map((it) => {
        const isOpen = open.has(it.id);
        return (
          <div key={it.id} style={{ borderBottom: '1px solid var(--border-default)' }}>
            <button onClick={() => toggle(it.id)} aria-expanded={isOpen}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                width: '100%', padding: '16px 4px', border: 'none', background: 'transparent',
                cursor: 'pointer', textAlign: 'left',
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)',
                fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)',
              }}>
              {it.title}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                style={{ flexShrink: 0, color: 'var(--text-brand)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' }}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div style={{
              display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows var(--duration-base) var(--ease-out)',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ padding: '0 4px 18px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  {it.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
