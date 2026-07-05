import React from 'react';

/** Spinning loader — a rotating coffee-ring arc in terracotta. */
export function Spinner({ size = 24, thickness = 3, color = 'var(--color-primary)', label, style }) {
  return (
    <span role="status" aria-label={label || 'Loading'} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
      <svg width={size} height={size} viewBox="0 0 50 50" style={{ animation: 'bk-spin 0.9s linear infinite' }}>
        <circle cx="25" cy="25" r="20" fill="none" stroke="var(--border-default)" strokeWidth={thickness} />
        <circle cx="25" cy="25" r="20" fill="none" stroke={color} strokeWidth={thickness}
          strokeLinecap="round" strokeDasharray="90 160" />
        <style>{`@keyframes bk-spin{to{transform:rotate(360deg);transform-origin:center}}`}</style>
      </svg>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{label}</span>}
    </span>
  );
}
