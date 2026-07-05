import React from 'react';

const tones = {
  default: { accent: 'var(--color-primary)', icon: '☕' },
  success: { accent: 'var(--success)', icon: '✓' },
  warning: { accent: 'var(--warning)', icon: '!' },
  danger:  { accent: 'var(--danger)', icon: '!' },
};

/** Toast notification card. Render inside a fixed-position stack. */
export function Toast({ tone = 'default', title, description, onClose, icon, style }) {
  const t = tones[tone] || tones.default;
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: '12px',
      width: 360, maxWidth: '90vw', padding: '14px 16px',
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-lg)',
      borderLeft: `4px solid ${t.accent}`, ...style,
    }}>
      <span style={{
        flexShrink: 0, width: 26, height: 26, borderRadius: '50%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: t.accent, color: '#FFF7EE', fontSize: 14, fontWeight: 700,
      }}>{icon || t.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)', color: 'var(--text-primary)' }}>{title}</div>}
        {description && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 2 }}>{description}</div>}
      </div>
      {onClose && (
        <button type="button" aria-label="Dismiss" onClick={onClose}
          style={{ border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer', padding: 2, lineHeight: 0, flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      )}
    </div>
  );
}
