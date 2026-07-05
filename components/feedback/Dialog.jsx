import React from 'react';

/** Modal dialog with scrim, warm card, optional title/footer. */
export function Dialog({ open = false, onClose, title, description, children, footer, width = 460, style }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
        background: 'rgba(43, 22, 7, 0.45)', backdropFilter: 'blur(2px)',
      }}
    >
      <div
        role="dialog" aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width, maxWidth: '100%', maxHeight: '90vh', overflow: 'auto',
          background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-xl)',
          padding: '28px', ...style,
        }}
      >
        {title && <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-display)', color: 'var(--text-primary)', margin: 0 }}>{title}</h3>}
        {description && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', marginTop: 8 }}>{description}</p>}
        {children && <div style={{ marginTop: title || description ? 18 : 0 }}>{children}</div>}
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 24 }}>{footer}</div>}
      </div>
    </div>
  );
}
