import React from 'react';

/**
 * Divider. `decorative` swaps the plain rule for a small centered
 * brass coffee-bean motif — the brand's section break.
 */
export function Divider({ orientation = 'horizontal', decorative = false, label, style }) {
  if (orientation === 'vertical') {
    return <span style={{ width: 1, alignSelf: 'stretch', background: 'var(--border-default)', ...style }} />;
  }
  if (decorative || label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, ...style }}>
        <span style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
        {label
          ? <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{label}</span>
          : <span aria-hidden style={{ width: 7, height: 11, borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', background: 'var(--color-accent)', transform: 'rotate(12deg)', position: 'relative', boxShadow: 'inset -1.5px 0 0 rgba(43,26,18,0.25)' }} />}
        <span style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
      </div>
    );
  }
  return <hr style={{ border: 'none', height: 1, background: 'var(--border-default)', margin: 0, ...style }} />;
}
