import React from 'react';

const tones = {
  neutral:  { bg: 'var(--bk-warm-100)', fg: 'var(--text-secondary)', bd: 'var(--border-default)' },
  brand:    { bg: 'var(--bk-terracotta-100)', fg: 'var(--text-brand)', bd: 'transparent' },
  accent:   { bg: 'var(--bk-brass-100)', fg: 'var(--text-accent)', bd: 'transparent' },
  success:  { bg: 'var(--success-soft)', fg: '#3F5536', bd: 'transparent' },
  warning:  { bg: 'var(--warning-soft)', fg: '#8A5E12', bd: 'transparent' },
  danger:   { bg: 'var(--danger-soft)', fg: '#7C2A1E', bd: 'transparent' },
  solid:    { bg: 'var(--color-primary)', fg: 'var(--text-on-brand)', bd: 'transparent' },
};

/** Small status/label pill. */
export function Badge({ tone = 'neutral', size = 'md', dot = false, children, style }) {
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 11px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: pad, fontFamily: 'var(--font-sans)', fontSize: fs,
      fontWeight: 'var(--weight-semibold)', letterSpacing: '0.02em',
      color: t.fg, background: t.bg, border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)', lineHeight: 1.4, whiteSpace: 'nowrap', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: 0.8 }} />}
      {children}
    </span>
  );
}
