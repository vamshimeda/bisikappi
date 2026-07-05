import React from 'react';

const sizes = { xs: 24, sm: 32, md: 40, lg: 56, xl: 80 };

/** Avatar — image, or initials on a warm tinted disc. */
export function Avatar({ src, alt = '', name, size = 'md', style }) {
  const dim = typeof size === 'number' ? size : (sizes[size] || sizes.md);
  const initials = (name || alt || '')
    .split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: dim, height: dim, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      background: 'var(--bk-terracotta-100)', color: 'var(--text-brand)',
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
      fontSize: dim * 0.4, border: '1px solid var(--border-subtle)', ...style,
    }}>
      {src
        ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '☕')}
    </span>
  );
}
