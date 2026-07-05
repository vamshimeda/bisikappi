import React from 'react';

/**
 * Underlined tab bar. `tabs` = [{id,label,icon?}]. Controlled (`value`)
 * or uncontrolled (`defaultValue`).
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, style }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.id);
  const active = isControlled ? value : internal;

  const pick = (id) => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };

  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-default)', ...style }}>
      {tabs.map((t) => {
        const on = active === t.id;
        return (
          <button key={t.id} role="tab" aria-selected={on} onClick={() => pick(t.id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 14px', border: 'none', background: 'transparent',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)',
              fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              color: on ? 'var(--text-brand)' : 'var(--text-secondary)',
              cursor: 'pointer', position: 'relative', marginBottom: -1,
              borderBottom: `2px solid ${on ? 'var(--color-primary)' : 'transparent'}`,
              transition: 'color var(--duration-fast) var(--ease-out)',
            }}>
            {t.icon}{t.label}
          </button>
        );
      })}
    </div>
  );
}
