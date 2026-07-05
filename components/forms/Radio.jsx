import React from 'react';

/**
 * Radio group. Pass `options` [{value,label}] plus `value`/`onChange`,
 * or use individual <Radio.Item> via children-less single radios.
 */
export function Radio({ options = [], value, defaultValue, name, onChange, disabled = false, direction = 'column', style }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const groupName = React.useMemo(() => name || 'bk-radio-' + Math.random().toString(36).slice(2), [name]);

  const pick = (v) => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? '20px' : '12px', ...style }}>
      {options.map((opt) => {
        const on = current === opt.value;
        const d = disabled || opt.disabled;
        return (
          <label key={opt.value} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: d ? 'not-allowed' : 'pointer', opacity: d ? 0.5 : 1 }}>
            <input type="radio" name={groupName} checked={on} onChange={() => pick(opt.value)} disabled={d}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span style={{
              width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
              border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
              background: 'var(--surface-card)', boxShadow: on ? 'none' : 'var(--shadow-inset)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color var(--duration-fast) var(--ease-out)',
            }}>
              {on && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-primary)' }} />}
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-primary)' }}>{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}
