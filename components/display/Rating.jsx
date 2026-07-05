import React from 'react';

function Bean({ size, filled, half }) {
  const id = React.useMemo(() => 'bk-bean-' + Math.random().toString(36).slice(2), []);
  const fill = filled ? 'var(--color-accent)' : 'var(--bk-warm-200)';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
      {half && (
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor="var(--color-accent)" />
            <stop offset="50%" stopColor="var(--bk-warm-200)" />
          </linearGradient>
        </defs>
      )}
      <ellipse cx="12" cy="12" rx="7.5" ry="10" transform="rotate(20 12 12)" fill={half ? `url(#${id})` : fill} />
      <path d="M12 3 C9 8 15 16 12 21" fill="none" stroke="var(--bk-bark)" strokeOpacity="0.55" strokeWidth="1.3" transform="rotate(20 12 12)" />
    </svg>
  );
}

/**
 * Coffee-bean rating. Read-only display or interactive picker
 * (pass `onChange`). Brand replacement for star ratings.
 */
export function Rating({ value = 0, max = 5, size = 18, onChange, showValue = false, count, style }) {
  const [hover, setHover] = React.useState(null);
  const interactive = !!onChange;
  const shown = hover ?? value;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...style }}>
      <span style={{ display: 'inline-flex', gap: 2 }} onMouseLeave={() => setHover(null)}>
        {Array.from({ length: max }).map((_, i) => {
          const idx = i + 1;
          const filled = shown >= idx;
          const half = !filled && shown >= idx - 0.5;
          return (
            <span key={i}
              onMouseEnter={interactive ? () => setHover(idx) : undefined}
              onClick={interactive ? () => onChange(idx) : undefined}
              style={{ cursor: interactive ? 'pointer' : 'default', lineHeight: 0 }}>
              <Bean size={size} filled={filled} half={half} />
            </span>
          );
        })}
      </span>
      {showValue && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{value.toFixed(1)}</span>}
      {count != null && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>({count})</span>}
    </span>
  );
}
