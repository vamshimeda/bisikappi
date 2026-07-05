/* @ds-bundle: {"format":4,"namespace":"BisiKaapiDesignSystem_2fbe5e","components":[{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Rating","sourcePath":"components/display/Rating.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/display/Accordion.jsx":"03051f5cc140","components/display/Avatar.jsx":"3828077cd486","components/display/Card.jsx":"9a7cd26c1dcd","components/display/Divider.jsx":"4bb2ba0ac40a","components/display/Rating.jsx":"df81c49920d2","components/display/Tabs.jsx":"d9c6016bac3f","components/feedback/Badge.jsx":"06d7e53d77a5","components/feedback/Dialog.jsx":"c833fa395dcf","components/feedback/Spinner.jsx":"78921fa058a0","components/feedback/Tag.jsx":"ee5575f4f141","components/feedback/Toast.jsx":"ebf03acf1e63","components/feedback/Tooltip.jsx":"d77bf867c49a","components/forms/Button.jsx":"9d7a796b020d","components/forms/Checkbox.jsx":"1e40a9fc50c8","components/forms/IconButton.jsx":"29442c1f9f78","components/forms/Input.jsx":"4cf032bfe4cc","components/forms/QuantityStepper.jsx":"e9ca64a21917","components/forms/Radio.jsx":"41c62065b1d6","components/forms/Select.jsx":"7f0a6057305d","components/forms/Switch.jsx":"39af315dc9b5","components/forms/Textarea.jsx":"5112a70644cc","config.js":"8563866990b8","server/src/auth.ts":"ea8e72ab10b0","server/src/crud.ts":"a48270621075","server/src/db.ts":"d91430a1ed78","server/src/index.ts":"71195f7227cd","server/src/realtime.ts":"c87675eed54c","server/src/routes/access.ts":"4b046d0c3547","server/src/routes/cafe.ts":"1f3b4188b950","server/src/routes/content.ts":"90dac5c43cf8","server/src/routes/integrations.ts":"6d9999733fcd","server/src/routes/ops.ts":"dcc6b1181fa5","server/src/seed.ts":"882f8549e1e1","ui_kits/customer/marketing/MarketingApp.jsx":"810539f22264","ui_kits/customer/marketing/MarketingCommerce.jsx":"2537f31c5698","ui_kits/customer/marketing/MarketingPages.jsx":"51379c12dbed","ui_kits/customer/marketing/i18n.js":"46ddc4855681","ui_kits/customer/marketing/icons.jsx":"9f2f9b0b0538","ui_kits/customer/mobile-app/MobileApp.jsx":"b238806785f4","ui_kits/customer/mobile-app/icons.jsx":"9f2f9b0b0538","ui_kits/customer/onboarding/OnboardingApp.jsx":"351c4591fa86","ui_kits/customer/onboarding/icons.jsx":"9f2f9b0b0538","ui_kits/customer/shared/ProductCard.jsx":"0e30fa8c6747","ui_kits/customer/shared/content-bridge.js":"b70503bf4c74","ui_kits/customer/shared/lists-defaults.js":"60ee19471066","ui_kits/customer/shared/products.js":"0484eb818dbb","ui_kits/customer/shop/ShopApp.jsx":"4447e95247f3","ui_kits/customer/shop/icons.jsx":"9f2f9b0b0538","ui_kits/ops/cafe-portal/CafePortal.jsx":"ae4453856958","ui_kits/ops/crm-portal/CRMPortal.jsx":"471e6d513265","ui_kits/ops/finance-portal/FinancePortal.jsx":"7dbdc820265d","ui_kits/ops/orchestrator/Orchestrator.jsx":"d3897ea5e709","ui_kits/ops/orchestrator/icons.jsx":"bcb2183ac1f1","ui_kits/ops/roastery-portal/RoasteryPortal.jsx":"13a000fcb6b5","ui_kits/ops/shop-admin/ShopAdmin.jsx":"94aaa97a54a4","ui_kits/ops/supply-portal/SupplyPortal.jsx":"22124836fc6e","ui_kits/platform/content-admin/ContentAdmin.jsx":"58e4d3f1387d","ui_kits/platform/content-admin/content-config.js":"970c258bdf0b","ui_kits/platform/dev-portal/DevPortal.jsx":"2c0b35573e42","ui_kits/platform/hub/Hub.jsx":"65bab9495ac0","ui_kits/platform/hub/tweaks-panel.jsx":"6591467622ed","ui_kits/platform/shared/bk-data.js":"bd306cd719a4","ui_kits/platform/shared/portal-kit.jsx":"20fc1c9b8ff3"},"inlinedExternals":[],"unexposedExports":[{"name":"accessRouter","sourcePath":"server/src/routes/access.ts"},{"name":"broadcast","sourcePath":"server/src/realtime.ts"},{"name":"buildSet","sourcePath":"server/src/crud.ts"},{"name":"cafeRouter","sourcePath":"server/src/routes/cafe.ts"},{"name":"contentRouter","sourcePath":"server/src/routes/content.ts"},{"name":"crudRouter","sourcePath":"server/src/crud.ts"},{"name":"hashPassword","sourcePath":"server/src/auth.ts"},{"name":"initRealtime","sourcePath":"server/src/realtime.ts"},{"name":"integrationsRouter","sourcePath":"server/src/routes/integrations.ts"},{"name":"opsRouter","sourcePath":"server/src/routes/ops.ts"},{"name":"pool","sourcePath":"server/src/db.ts"},{"name":"query","sourcePath":"server/src/db.ts"},{"name":"queryOne","sourcePath":"server/src/db.ts"},{"name":"requireAppAccess","sourcePath":"server/src/auth.ts"},{"name":"requireAuth","sourcePath":"server/src/auth.ts"},{"name":"signToken","sourcePath":"server/src/auth.ts"},{"name":"upsertRouter","sourcePath":"server/src/crud.ts"},{"name":"verifyPassword","sourcePath":"server/src/auth.ts"}]} */

(() => {

const __ds_ns = (window.BisiKaapiDesignSystem_2fbe5e = window.BisiKaapiDesignSystem_2fbe5e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Accordion.jsx
try { (() => {
/**
 * Accordion. `items` = [{id,title,content}]. Single-open by default;
 * set `multiple` to allow several open at once.
 */
function Accordion({
  items = [],
  defaultOpen = [],
  multiple = false,
  style
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      ...style
    }
  }, items.map(it => {
    const isOpen = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(it.id),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        width: '100%',
        padding: '16px 4px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-lg)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-primary)'
      }
    }, it.title, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        flexShrink: 0,
        color: 'var(--text-brand)',
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px 18px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)',
        color: 'var(--text-secondary)',
        lineHeight: 'var(--leading-relaxed)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const sizes = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80
};

/** Avatar — image, or initials on a warm tinted disc. */
function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  style
}) {
  const dim = typeof size === 'number' ? size : sizes[size] || sizes.md;
  const initials = (name || alt || '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--bk-terracotta-100)',
      color: 'var(--text-brand)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: dim * 0.4,
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '☕');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  raised: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-sm)'
  },
  outline: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'none'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  dark: {
    background: 'var(--surface-dark)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: 'var(--shadow-md)',
    color: 'var(--text-on-dark)'
  }
};

/**
 * Surface container. `interactive` adds hover lift; compose freely
 * with Card.Body / Card.Header or your own children.
 */
function Card({
  variant = 'raised',
  interactive = false,
  padding = 20,
  radius = 'var(--radius-lg)',
  children,
  style,
  ...rest
}) {
  const v = variants[variant] || variants.raised;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...v,
      borderRadius: radius,
      padding,
      color: v.color || 'inherit',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : v.boxShadow,
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
/**
 * Divider. `decorative` swaps the plain rule for a small centered
 * brass coffee-bean motif — the brand's section break.
 */
function Divider({
  orientation = 'horizontal',
  decorative = false,
  label,
  style
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--border-default)',
        ...style
      }
    });
  }
  if (decorative || label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-default)'
      }
    }), label ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-accent)'
      }
    }, label) : /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        width: 7,
        height: 11,
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        background: 'var(--color-accent)',
        transform: 'rotate(12deg)',
        position: 'relative',
        boxShadow: 'inset -1.5px 0 0 rgba(43,26,18,0.25)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-default)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      height: 1,
      background: 'var(--border-default)',
      margin: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Rating.jsx
try { (() => {
function Bean({
  size,
  filled,
  half
}) {
  const id = React.useMemo(() => 'bk-bean-' + Math.random().toString(36).slice(2), []);
  const fill = filled ? 'var(--color-accent)' : 'var(--bk-warm-200)';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      display: 'block'
    }
  }, half && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "var(--color-accent)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "var(--bk-warm-200)"
  }))), /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "12",
    rx: "7.5",
    ry: "10",
    transform: "rotate(20 12 12)",
    fill: half ? `url(#${id})` : fill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3 C9 8 15 16 12 21",
    fill: "none",
    stroke: "var(--bk-bark)",
    strokeOpacity: "0.55",
    strokeWidth: "1.3",
    transform: "rotate(20 12 12)"
  }));
}

/**
 * Coffee-bean rating. Read-only display or interactive picker
 * (pass `onChange`). Brand replacement for star ratings.
 */
function Rating({
  value = 0,
  max = 5,
  size = 18,
  onChange,
  showValue = false,
  count,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const interactive = !!onChange;
  const shown = hover ?? value;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    },
    onMouseLeave: () => setHover(null)
  }, Array.from({
    length: max
  }).map((_, i) => {
    const idx = i + 1;
    const filled = shown >= idx;
    const half = !filled && shown >= idx - 0.5;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onMouseEnter: interactive ? () => setHover(idx) : undefined,
      onClick: interactive ? () => onChange(idx) : undefined,
      style: {
        cursor: interactive ? 'pointer' : 'default',
        lineHeight: 0
      }
    }, /*#__PURE__*/React.createElement(Bean, {
      size: size,
      filled: filled,
      half: half
    }));
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Rating.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
/**
 * Underlined tab bar. `tabs` = [{id,label,icon?}]. Controlled (`value`)
 * or uncontrolled (`defaultValue`).
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.id);
  const active = isControlled ? value : internal;
  const pick = id => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '10px 14px',
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--text-brand)' : 'var(--text-secondary)',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: -1,
        borderBottom: `2px solid ${on ? 'var(--color-primary)' : 'transparent'}`,
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, t.icon, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: 'var(--bk-warm-100)',
    fg: 'var(--text-secondary)',
    bd: 'var(--border-default)'
  },
  brand: {
    bg: 'var(--bk-terracotta-100)',
    fg: 'var(--text-brand)',
    bd: 'transparent'
  },
  accent: {
    bg: 'var(--bk-brass-100)',
    fg: 'var(--text-accent)',
    bd: 'transparent'
  },
  success: {
    bg: 'var(--success-soft)',
    fg: '#3F5536',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--warning-soft)',
    fg: '#8A5E12',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--danger-soft)',
    fg: '#7C2A1E',
    bd: 'transparent'
  },
  solid: {
    bg: 'var(--color-primary)',
    fg: 'var(--text-on-brand)',
    bd: 'transparent'
  }
};

/** Small status/label pill. */
function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  children,
  style
}) {
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 11px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: pad,
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.02em',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.8
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog with scrim, warm card, optional title/footer. */
function Dialog({
  open = false,
  onClose,
  title,
  description,
  children,
  footer,
  width = 460,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'rgba(43, 22, 7, 0.45)',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xl)',
      padding: '28px',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-display)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: title || description ? 18 : 0
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/** Spinning loader — a rotating coffee-ring arc in terracotta. */
function Spinner({
  size = 24,
  thickness = 3,
  color = 'var(--color-primary)',
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": label || 'Loading',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 50 50",
    style: {
      animation: 'bk-spin 0.9s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    stroke: "var(--border-default)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: "90 160"
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes bk-spin{to{transform:rotate(360deg);transform-origin:center}}`)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/** Removable / selectable chip — used for filters, tags, dietary marks. */
function Tag({
  children,
  selected = false,
  onRemove,
  leadingIcon,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: selected ? 'var(--text-on-brand)' : 'var(--text-secondary)',
      background: selected ? 'var(--color-primary)' : hover && clickable ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, leadingIcon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      opacity: 0.7,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  default: {
    accent: 'var(--color-primary)',
    icon: '☕'
  },
  success: {
    accent: 'var(--success)',
    icon: '✓'
  },
  warning: {
    accent: 'var(--warning)',
    icon: '!'
  },
  danger: {
    accent: 'var(--danger)',
    icon: '!'
  }
};

/** Toast notification card. Render inside a fixed-position stack. */
function Toast({
  tone = 'default',
  title,
  description,
  onClose,
  icon,
  style
}) {
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      width: 360,
      maxWidth: '90vw',
      padding: '14px 16px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-lg)',
      borderLeft: `4px solid ${t.accent}`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: t.accent,
      color: '#FFF7EE',
      fontSize: 14,
      fontWeight: 700
    }
  }, icon || t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: 2,
      lineHeight: 0,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover/focus tooltip. Wraps a single trigger child. */
function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      pointerEvents: 'none',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bk-espresso)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      transform: `${pos.transform} translateY(${open ? '0' : '2px'})`,
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '7px 14px',
    fontSize: 'var(--text-sm)',
    radius: 'var(--radius-sm)',
    gap: '6px'
  },
  md: {
    padding: '11px 22px',
    fontSize: 'var(--text-md)',
    radius: 'var(--radius-md)',
    gap: '8px'
  },
  lg: {
    padding: '15px 30px',
    fontSize: 'var(--text-lg)',
    radius: 'var(--radius-md)',
    gap: '10px'
  }
};
const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--color-primary)',
    '--hover-bg': 'var(--color-primary-hover)',
    '--active-bg': 'var(--color-primary-active)',
    boxShadow: 'var(--shadow-sm)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
    '--hover-bg': 'var(--surface-sunken)',
    '--active-bg': 'var(--bk-warm-150)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--bk-espresso)',
    border: '1px solid var(--color-accent)',
    '--hover-bg': 'var(--color-accent-hover)',
    '--active-bg': 'var(--bk-brass-700)',
    boxShadow: 'var(--shadow-sm)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--bk-terracotta-100)',
    '--active-bg': 'var(--bk-terracotta-100)'
  },
  danger: {
    background: 'var(--danger)',
    color: '#FFF7EE',
    border: '1px solid var(--danger)',
    '--hover-bg': '#922F22',
    '--active-bg': '#7C2A1E',
    boxShadow: 'var(--shadow-sm)'
  }
};

/**
 * Bisi Kaapi primary button. Terracotta-forward, warm, calm motion.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  leadingIcon,
  trailingIcon,
  children,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled ? undefined : active && v['--active-bg'] ? v['--active-bg'] : hover && v['--hover-bg'] ? v['--hover-bg'] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: '0.005em',
      background: bg,
      color: v.color,
      border: v.border,
      borderRadius: s.radius,
      boxShadow: disabled ? 'none' : v.boxShadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : undefined,
      transform: active && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      ...style
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with terracotta fill and warm-cream box. Controlled or uncontrolled. */
function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
      boxShadow: on ? 'none' : 'var(--shadow-inset)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    stroke: "#FFF7EE",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
const iconSizes = {
  sm: 16,
  md: 18,
  lg: 22
};
const variants = {
  solid: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--color-primary)',
    '--hover': 'var(--color-primary-hover)'
  },
  soft: {
    background: 'var(--bk-terracotta-100)',
    color: 'var(--text-brand)',
    border: '1px solid transparent',
    '--hover': 'var(--bk-terracotta-300)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
    '--hover': 'var(--surface-sunken)'
  },
  outline: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
    '--hover': 'var(--surface-sunken)'
  }
};

/**
 * Square icon-only button. Pass a single icon node as children.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  children,
  style,
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      background: disabled ? v.background : hover ? v['--hover'] : v.background,
      color: v.color,
      border: v.border,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-out)',
      padding: 0,
      lineHeight: 0,
      ...style
    }
  }, rest), React.isValidElement(children) ? React.cloneElement(children, {
    width: iconSizes[size],
    height: iconSizes[size]
  }) : children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with warm cream well, brass focus ring, optional affixes.
 */
function Input({
  size = 'md',
  invalid = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  prefix,
  suffix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'sm' ? '8px 12px' : size === 'lg' ? '14px 16px' : '11px 14px';
  const fs = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-lg)' : 'var(--text-md)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: pad,
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
      transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, leadingIcon), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: fs,
      fontFamily: 'var(--font-mono)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      color: 'var(--text-primary)',
      lineHeight: 1.4
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: fs,
      fontFamily: 'var(--font-mono)'
    }
  }, suffix), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
/** Quantity stepper for ordering — − [n] +  with brass framing. */
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 99,
  size = 'md',
  onChange,
  disabled = false,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const n = isControlled ? value : internal;
  const dim = size === 'sm' ? 30 : 38;
  const set = next => {
    const v = Math.max(min, Math.min(max, next));
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  const btn = (label, onClick, off) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    disabled: disabled || off,
    style: {
      width: dim,
      height: dim,
      border: 'none',
      background: 'transparent',
      color: disabled || off ? 'var(--text-muted)' : 'var(--text-brand)',
      fontSize: '20px',
      lineHeight: 0,
      cursor: disabled || off ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled || off ? 0.4 : 1
    }
  }, label === 'increase' ? '+' : '−');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      ...style
    }
  }, btn('decrease', () => set(n - 1), n <= min), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: dim,
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, n), btn('increase', () => set(n + 1), n >= max));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Radio group. Pass `options` [{value,label}] plus `value`/`onChange`,
 * or use individual <Radio.Item> via children-less single radios.
 */
function Radio({
  options = [],
  value,
  defaultValue,
  name,
  onChange,
  disabled = false,
  direction = 'column',
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const groupName = React.useMemo(() => name || 'bk-radio-' + Math.random().toString(36).slice(2), [name]);
  const pick = v => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? '20px' : '12px',
      ...style
    }
  }, options.map(opt => {
    const on = current === opt.value;
    const d = disabled || opt.disabled;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        cursor: d ? 'not-allowed' : 'pointer',
        opacity: d ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: groupName,
      checked: on,
      onChange: () => pick(opt.value),
      disabled: d,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        flexShrink: 0,
        border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
        background: 'var(--surface-card)',
        boxShadow: on ? 'none' : 'var(--shadow-inset)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border-color var(--duration-fast) var(--ease-out)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--color-primary)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)',
        color: 'var(--text-primary)'
      }
    }, opt.label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with custom chevron and warm well. */
function Select({
  size = 'md',
  invalid = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'sm' ? '8px 36px 8px 12px' : size === 'lg' ? '14px 40px 14px 16px' : '11px 38px 11px 14px';
  const fs = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-lg)' : 'var(--text-md)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      padding: pad,
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
      transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      opacity: disabled ? 0.6 : 1
    }
  }), children), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch. Terracotta when on, warm track when off. */
function Switch({
  checked,
  defaultChecked,
  disabled = false,
  label,
  size = 'md',
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const W = size === 'sm' ? 36 : 46;
  const H = size === 'sm' ? 20 : 26;
  const knob = H - 6;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: W,
      height: H,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      background: on ? 'var(--color-primary)' : 'var(--bk-warm-300)',
      boxShadow: on ? 'none' : 'var(--shadow-inset)',
      transition: 'background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? W - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: 'var(--bk-milk)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text area sharing the Input well treatment. */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    }
  }, rest, {
    style: {
      width: '100%',
      resize: 'vertical',
      padding: '11px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-normal)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
      transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// config.js
try { (() => {
// Bisi Kaapi — externalized runtime config (lightweight 12-factor: config
// lives in ONE place outside the code, separate from build/deploy).
//
// This is a static, no-build-step project, so there's no env-var injection
// at build time — this file IS the "environment" for the browser-side apps.
// To point the marketing site / shop / Content admin at a different API
// (staging, production, a teammate's local server), edit `apiBase` below —
// nothing else in the codebase should ever hardcode an API URL.
//
// Precedence (highest first), so a deploy can override without editing this
// file: window.BK_API_BASE set by an inline script before this loads > the
// user's own localStorage override (set from the Content admin's "API
// server URL" field) > the value configured here.
(function () {
  const DEFAULT_API_BASE = 'http://localhost:4000';
  let stored = null;
  try {
    stored = window.localStorage && localStorage.getItem('bk_api_base');
  } catch (e) {}
  window.BK_CONFIG = {
    apiBase: window.BK_API_BASE || stored || DEFAULT_API_BASE
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "config.js", error: String((e && e.message) || e) }); }

// server/src/auth.ts
try { (() => {
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
function hashPassword(pw) {
  return bcrypt.hash(pw, 10);
}
function verifyPassword(pw, hash) {
  return bcrypt.compare(pw, hash);
}
function signToken(user) {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: '7d'
  });
}
/** Verifies the bearer JWT and attaches req.user. 401s if missing/invalid. */
function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({
    error: 'Missing bearer token'
  });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({
      error: 'Invalid or expired token'
    });
  }
}

/** Enforces the same role -> app grant model as the Hub / Dev Portal Access tab. */
function requireAppAccess(appKey) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({
      error: 'Not authenticated'
    });
    if (!req.user.apps.includes(appKey)) {
      return res.status(403).json({
        error: `Role "${req.user.roleKey}" is not granted "${appKey}"`
      });
    }
    next();
  };
}
Object.assign(__ds_scope, { hashPassword, verifyPassword, signToken, requireAuth, requireAppAccess });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/auth.ts", error: String((e && e.message) || e) }); }

// server/src/db.ts
try { (() => {
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
async function query(text, params) {
  const res = await pool.query(text, params);
  return res.rows;
}
async function queryOne(text, params) {
  const rows = await query(text, params);
  return rows[0] ?? null;
}
Object.assign(__ds_scope, { pool, query, queryOne });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/db.ts", error: String((e && e.message) || e) }); }

// server/src/realtime.ts
try { (() => {
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
let wss = null;
const clients = new Set();

/** Attaches the realtime WebSocket server at ws(s)://host/ws. */
function initRealtime(server) {
  wss = new WebSocketServer({
    server,
    path: '/ws'
  });
  wss.on('connection', (socket, req) => {
    // Optional ?token=... so we can scope broadcasts by role later if needed.
    try {
      const url = new URL(req.url || '', 'http://localhost');
      const token = url.searchParams.get('token');
      if (token) jwt.verify(token, JWT_SECRET);
    } catch {
      // Anonymous/invalid token: still allow the connection for public feeds
      // (e.g. a kiosk menu board) but broadcasts stay unscoped for now.
    }
    clients.add(socket);
    socket.on('close', () => clients.delete(socket));
  });
  return wss;
}

/** Broadcasts a typed event to every connected client.
 *  Frontend equivalent of bk-data.js's pub/sub `emit()`. */
function broadcast(type, payload) {
  const msg = JSON.stringify({
    type,
    payload,
    ts: new Date().toISOString()
  });
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) client.send(msg);
  }
}
Object.assign(__ds_scope, { initRealtime, broadcast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/realtime.ts", error: String((e && e.message) || e) }); }

// server/src/crud.ts
try { (() => {
/**
 * Reusable data-access + routing helpers so every domain router (café,
 * roastery, supply, finance, CRM, content…) doesn't hand-roll the same
 * "list / create / patch / delete" or "key -> row upsert" plumbing.
 *
 * Use `crudRouter()` for a plain single-table resource with a numeric/uuid
 * id (suppliers, campaigns, products…). Use `upsertRouter()` for a
 * key -> row dictionary where writes are "insert or update by primary key"
 * (content strings, content lists). Anything with joins, computed defaults
 * beyond a static object, or sub-action routes (e.g. PATCH .../status) stays
 * hand-written — these helpers cover the common shape, not every shape.
 *
 * Table/column names are config passed in by the (trusted, hardcoded) route
 * files in this project, never from request input — assertIdent()/
 * assertOrderBy() below are a fail-fast guard against a typo or a future
 * caller accidentally wiring user input into one of these, not a defense
 * against untrusted callers.
 */

const IDENT = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function assertIdent(name, label) {
  if (!IDENT.test(name)) throw new Error(`crud.ts: unsafe/invalid identifier for ${label}: "${name}"`);
}
function assertOrderBy(clause) {
  if (!/^[a-zA-Z0-9_,.\s]+$/.test(clause)) throw new Error(`crud.ts: unsafe orderBy clause: "${clause}"`);
}

/** Builds `col = $n` SET clauses + a values array from whichever of `fields`
 *  are present in `body`. Shared by crudRouter's PATCH and any hand-written
 *  partial-update route. */
function buildSet(fields, body) {
  const sets = [];
  const vals = [];
  fields.forEach(f => {
    if (body[f] !== undefined) {
      vals.push(body[f]);
      sets.push(`${f} = $${vals.length}`);
    }
  });
  return {
    sets,
    vals
  };
}
/** GET list / POST create / PATCH update / DELETE for one table. */
function crudRouter(opts) {
  assertIdent(opts.table, 'table');
  const idCol = opts.idColumn || 'id';
  assertIdent(idCol, 'idColumn');
  opts.insertFields.forEach(f => assertIdent(f, 'insertFields'));
  const updateFields = opts.updateFields || opts.insertFields;
  updateFields.forEach(f => assertIdent(f, 'updateFields'));
  if (opts.orderBy) assertOrderBy(opts.orderBy);
  const router = Router();
  const authGuard = opts.skipRequireAuth ? [] : [__ds_scope.requireAuth];
  const mutateGuards = [...authGuard, __ds_scope.requireAppAccess(opts.appKey)];
  const readGuards = opts.publicRead ? [] : mutateGuards;
  router.get('/', ...readGuards, async (_req, res) => {
    res.json(await __ds_scope.query(`select * from ${opts.table} order by ${opts.orderBy || idCol}`));
  });
  router.post('/', ...mutateGuards, async (req, res) => {
    const extra = opts.defaults ? await opts.defaults(req.body || {}) : {};
    const body = {
      ...extra,
      ...(req.body || {})
    };
    if (opts.requiredFields) {
      const missing = opts.requiredFields.filter(f => body[f] === undefined || body[f] === '');
      if (missing.length) return res.status(400).json({
        error: `${missing.join(', ')} required`
      });
    }
    const cols = opts.insertFields.filter(f => body[f] !== undefined);
    if (!cols.length) return res.status(400).json({
      error: 'no fields provided'
    });
    const vals = cols.map(c => body[c]);
    const row = await __ds_scope.queryOne(`insert into ${opts.table} (${cols.join(',')}) values (${cols.map((_, i) => `$${i + 1}`).join(',')}) returning *`, vals);
    if (opts.broadcastChannel) __ds_scope.broadcast(opts.broadcastChannel, row);
    res.status(201).json(row);
  });
  const updateHandler = async (req, res) => {
    const {
      sets,
      vals
    } = buildSet(updateFields, req.body || {});
    if (!sets.length) return res.status(400).json({
      error: 'no fields to update'
    });
    vals.push(req.params.id);
    const row = await __ds_scope.queryOne(`update ${opts.table} set ${sets.join(', ')} where ${idCol} = $${vals.length} returning *`, vals);
    if (!row) return res.status(404).json({
      error: 'not found'
    });
    if (opts.broadcastChannel) __ds_scope.broadcast(opts.broadcastChannel, row);
    res.json(row);
  };
  // Accept both verbs — callers that treat this as a REST "replace the
  // resource" (PUT) and callers doing a partial PATCH mean the same thing
  // here, since only whitelisted fields present in the body are touched.
  router.patch('/:id', ...mutateGuards, updateHandler);
  router.put('/:id', ...mutateGuards, updateHandler);
  router.delete('/:id', ...mutateGuards, async (req, res) => {
    await __ds_scope.query(`delete from ${opts.table} where ${idCol} = $1`, [req.params.id]);
    const idVal = opts.idType === 'number' ? Number(req.params.id) : req.params.id;
    if (opts.broadcastChannel) __ds_scope.broadcast(`${opts.broadcastChannel}-deleted`, {
      [idCol]: idVal
    });
    res.status(204).end();
  });
  return router;
}
/** GET all rows / PUT :key — insert-or-update-by-primary-key. Missing columns
 *  in the PUT body fall back to the existing row's value (partial update),
 *  which also covers "always send every column" callers (full replace). */
function upsertRouter(opts) {
  assertIdent(opts.table, 'table');
  assertIdent(opts.keyColumn, 'keyColumn');
  opts.columns.forEach(c => assertIdent(c, 'columns'));
  const router = Router();
  const isJson = c => !!opts.jsonbColumns?.includes(c);
  const authGuard = opts.skipRequireAuth ? [] : [__ds_scope.requireAuth];
  const mutateGuards = [...authGuard, __ds_scope.requireAppAccess(opts.appKey)];
  const readGuards = opts.publicRead === false ? mutateGuards : [];
  router.get('/', ...readGuards, async (_req, res) => {
    res.json(await __ds_scope.query(`select ${opts.keyColumn}, ${opts.columns.join(', ')} from ${opts.table} order by ${opts.keyColumn}`));
  });
  router.put('/:key', ...mutateGuards, async (req, res) => {
    const body = req.body || {};
    const present = opts.columns.filter(c => body[c] !== undefined);
    if (!present.length) return res.status(400).json({
      error: `${opts.columns.join(' and/or ')} required`
    });
    if (opts.validate) {
      const err = opts.validate(body);
      if (err) return res.status(400).json({
        error: err
      });
    }
    const existing = await __ds_scope.queryOne(`select * from ${opts.table} where ${opts.keyColumn} = $1`, [req.params.key]);
    const finalVals = opts.columns.map(c => body[c] !== undefined ? body[c] : existing ? existing[c] : isJson(c) ? [] : '');
    const castedVals = opts.columns.map((c, i) => isJson(c) ? JSON.stringify(finalVals[i]) : finalVals[i]);
    const insertVals = [req.params.key, ...castedVals];
    const insertCols = [opts.keyColumn, ...opts.columns];
    const placeholders = insertCols.map((c, i) => `$${i + 1}${isJson(c) ? '::jsonb' : ''}`);
    const updateSet = opts.columns.map((c, i) => `${c} = $${i + 2}${isJson(c) ? '::jsonb' : ''}`).join(', ');
    const row = await __ds_scope.queryOne(`insert into ${opts.table} (${insertCols.join(',')}) values (${placeholders.join(',')})
       on conflict (${opts.keyColumn}) do update set ${updateSet}, updated_at = now()
       returning ${opts.keyColumn}, ${opts.columns.join(', ')}`, insertVals);
    if (opts.broadcastChannel) __ds_scope.broadcast(opts.broadcastChannel, row);
    res.json(row);
  });
  return router;
}
Object.assign(__ds_scope, { buildSet, crudRouter, upsertRouter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/crud.ts", error: String((e && e.message) || e) }); }

// server/src/routes/access.ts
try { (() => {
const accessRouter = Router();
async function appsForRole(roleKey) {
  const rows = await __ds_scope.query('select app_key from role_app_grants where role_key = $1', [roleKey]);
  return rows.map(r => r.app_key);
}

// ---- Auth ----
accessRouter.post('/auth/login', async (req, res) => {
  const {
    email,
    password
  } = req.body || {};
  if (!email || !password) return res.status(400).json({
    error: 'email and password required'
  });
  const user = await __ds_scope.queryOne('select id, email, name, password_hash, role_key from users where email = $1', [email]);
  if (!user || !(await __ds_scope.verifyPassword(password, user.password_hash))) {
    return res.status(401).json({
      error: 'Invalid credentials'
    });
  }
  const apps = await appsForRole(user.role_key);
  const payload = {
    sub: user.id,
    email: user.email,
    name: user.name,
    roleKey: user.role_key,
    apps
  };
  res.json({
    token: __ds_scope.signToken(payload),
    user: payload
  });
});
accessRouter.post('/auth/register', async (req, res) => {
  const {
    email,
    password,
    name,
    roleKey
  } = req.body || {};
  if (!email || !password || !name || !roleKey) return res.status(400).json({
    error: 'email, password, name, roleKey required'
  });
  const role = await __ds_scope.queryOne('select key from roles where key = $1', [roleKey]);
  if (!role) return res.status(400).json({
    error: 'Unknown roleKey'
  });
  const existing = await __ds_scope.queryOne('select id from users where email = $1', [email]);
  if (existing) return res.status(409).json({
    error: 'Email already registered'
  });
  const hash = await __ds_scope.hashPassword(password);
  const user = await __ds_scope.queryOne('insert into users (email, password_hash, name, role_key) values ($1,$2,$3,$4) returning id', [email, hash, name, roleKey]);
  const apps = await appsForRole(roleKey);
  const payload = {
    sub: user.id,
    email,
    name,
    roleKey,
    apps
  };
  res.status(201).json({
    token: __ds_scope.signToken(payload),
    user: payload
  });
});

// ---- Roles & app catalog (Dev Portal "Access" tab) ----
accessRouter.get('/apps', async (_req, res) => {
  res.json(await __ds_scope.query('select key, name, group_name as "group", icon from apps order by group_name, name'));
});
accessRouter.get('/roles', __ds_scope.requireAuth, async (_req, res) => {
  const roles = await __ds_scope.query('select key, name, icon from roles order by name');
  const grants = await __ds_scope.query('select role_key, app_key from role_app_grants');
  const byRole = {};
  for (const g of grants) (byRole[g.role_key] ||= []).push(g.app_key);
  res.json(roles.map(r => ({
    ...r,
    apps: byRole[r.key] || []
  })));
});
accessRouter.post('/roles', __ds_scope.requireAuth, async (req, res) => {
  const {
    key,
    name,
    icon = 'user',
    apps = []
  } = req.body || {};
  if (!key || !name) return res.status(400).json({
    error: 'key and name required'
  });
  const existing = await __ds_scope.queryOne('select key from roles where key = $1', [key]);
  if (existing) return res.status(409).json({
    error: 'Role already exists'
  });
  await __ds_scope.query('insert into roles (key, name, icon) values ($1,$2,$3)', [key, name, icon]);
  for (const appKey of apps) {
    await __ds_scope.query('insert into role_app_grants (role_key, app_key) values ($1,$2) on conflict do nothing', [key, appKey]);
  }
  res.status(201).json({
    key,
    name,
    icon,
    apps
  });
});
accessRouter.delete('/roles/:key', __ds_scope.requireAuth, async (req, res) => {
  await __ds_scope.query('delete from roles where key = $1', [req.params.key]);
  res.status(204).end();
});

// Replaces the full app-grant list for a role (matches setRoleApps() in bk-data.js).
accessRouter.put('/roles/:key/apps', __ds_scope.requireAuth, async (req, res) => {
  const {
    apps
  } = req.body || {};
  if (!Array.isArray(apps)) return res.status(400).json({
    error: 'apps must be an array of app keys'
  });
  await __ds_scope.query('delete from role_app_grants where role_key = $1', [req.params.key]);
  for (const appKey of apps) {
    await __ds_scope.query('insert into role_app_grants (role_key, app_key) values ($1,$2) on conflict do nothing', [req.params.key, appKey]);
  }
  res.json({
    roleKey: req.params.key,
    apps
  });
});
Object.assign(__ds_scope, { accessRouter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/routes/access.ts", error: String((e && e.message) || e) }); }

// server/src/routes/cafe.ts
try { (() => {
const cafeRouter = Router();
cafeRouter.use(__ds_scope.requireAuth, __ds_scope.requireAppAccess('cafe'));

// ---- Orders ----
let orderSeq = 1000;
async function nextOrderId() {
  const row = await __ds_scope.queryOne(`select count(*)::int as n from cafe_orders`);
  return '#A-' + (241 + (row?.n ?? 0) + (orderSeq++ - 1000));
}
cafeRouter.get('/orders', async (_req, res) => {
  res.json(await __ds_scope.query('select * from cafe_orders order by created_at desc'));
});
cafeRouter.post('/orders', async (req, res) => {
  const {
    who,
    items,
    source = 'walkin'
  } = req.body || {};
  if (!who || !items) return res.status(400).json({
    error: 'who and items required'
  });
  const id = await nextOrderId();
  const order = await __ds_scope.queryOne(`insert into cafe_orders (id, who, items, source) values ($1,$2,$3,$4) returning *`, [id, who, items, source]);
  __ds_scope.broadcast('order:new', order);
  res.status(201).json(order);
});
const FLOW = ['new', 'brewing', 'ready'];
cafeRouter.patch('/orders/:id/advance', async (req, res) => {
  const current = await __ds_scope.queryOne('select status from cafe_orders where id = $1', [req.params.id]);
  if (!current) return res.status(404).json({
    error: 'Order not found'
  });
  const i = FLOW.indexOf(current.status);
  const next = i < 2 ? FLOW[i + 1] : current.status;
  const order = await __ds_scope.queryOne('update cafe_orders set status = $1, updated_at = now() where id = $2 returning *', [next, req.params.id]);
  __ds_scope.broadcast('order:update', order);
  res.json(order);
});
cafeRouter.delete('/orders/:id', async (req, res) => {
  await __ds_scope.query('delete from cafe_orders where id = $1', [req.params.id]);
  __ds_scope.broadcast('order:remove', {
    id: req.params.id
  });
  res.status(204).end();
});

// ---- Inventory ----
cafeRouter.get('/inventory', async (_req, res) => {
  res.json(await __ds_scope.query('select * from cafe_inventory order by name'));
});
cafeRouter.post('/inventory', async (req, res) => {
  const {
    name,
    pct = 100
  } = req.body || {};
  if (!name) return res.status(400).json({
    error: 'name required'
  });
  const item = await __ds_scope.queryOne('insert into cafe_inventory (name, pct) values ($1,$2) returning *', [name, pct]);
  __ds_scope.broadcast('inventory:new', item);
  res.status(201).json(item);
});
cafeRouter.patch('/inventory/:id', async (req, res) => {
  const {
    pct
  } = req.body || {};
  if (pct == null) return res.status(400).json({
    error: 'pct required'
  });
  const item = await __ds_scope.queryOne('update cafe_inventory set pct = $1, updated_at = now() where id = $2 returning *', [Math.max(0, Math.min(100, pct)), req.params.id]);
  __ds_scope.broadcast('inventory:update', item);
  res.json(item);
});
cafeRouter.delete('/inventory/:id', async (req, res) => {
  await __ds_scope.query('delete from cafe_inventory where id = $1', [req.params.id]);
  __ds_scope.broadcast('inventory:remove', {
    id: req.params.id
  });
  res.status(204).end();
});

// ---- Shifts ----
cafeRouter.get('/shifts', async (_req, res) => {
  res.json(await __ds_scope.query('select * from cafe_shifts where clock_out is null order by clock_in'));
});
cafeRouter.post('/shifts', async (req, res) => {
  const {
    name,
    role
  } = req.body || {};
  if (!name || !role) return res.status(400).json({
    error: 'name and role required'
  });
  const shift = await __ds_scope.queryOne('insert into cafe_shifts (name, role) values ($1,$2) returning *', [name, role]);
  __ds_scope.broadcast('shift:new', shift);
  res.status(201).json(shift);
});
cafeRouter.patch('/shifts/:id/clock-out', async (req, res) => {
  const shift = await __ds_scope.queryOne(`update cafe_shifts set clock_out = now(),
       hours = round(extract(epoch from (now() - clock_in)) / 3600.0, 1)
     where id = $1 returning *`, [req.params.id]);
  __ds_scope.broadcast('shift:clockout', shift);
  res.json(shift);
});
cafeRouter.patch('/shifts/:id/hours', async (req, res) => {
  const {
    delta
  } = req.body || {};
  const shift = await __ds_scope.queryOne('update cafe_shifts set hours = greatest(0, hours + $1) where id = $2 returning *', [delta ?? 0, req.params.id]);
  __ds_scope.broadcast('shift:update', shift);
  res.json(shift);
});
Object.assign(__ds_scope, { cafeRouter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/routes/cafe.ts", error: String((e && e.message) || e) }); }

// server/src/routes/content.ts
try { (() => {
/**
 * Marketing content CMS — backs the Content admin panel. Reads are public
 * (the marketing site + shop fetch these on load with no auth); writes
 * require a login with the 'content' app grant, same access model as every
 * other portal. Built entirely on the shared crud/upsert helpers (see
 * ../crud.ts) — this file is just each resource's shape.
 */
const contentRouter = Router();

// ---- Strings (i18n copy: hero, trust strip, story, page heros, shop chrome…) ----
contentRouter.use('/strings', __ds_scope.upsertRouter({
  table: 'content_strings',
  keyColumn: 'key',
  columns: ['en', 'kn'],
  appKey: 'content',
  broadcastChannel: 'content:string'
}));

// ---- Structured copy lists (roastery steps, coffee grinds, consulting services) ----
contentRouter.use('/lists', __ds_scope.upsertRouter({
  table: 'content_lists',
  keyColumn: 'key',
  columns: ['items'],
  jsonbColumns: ['items'],
  appKey: 'content',
  broadcastChannel: 'content:list',
  validate: body => body.items !== undefined && !Array.isArray(body.items) ? 'items must be an array' : null
}));

// ---- Product catalogue (shop + homepage "From our roastery") ----
// `id` is a DB-generated identity column (see schema.sql) — clients never
// supply it, which avoids the "client computes max(id)+1" collision the
// previous version of this endpoint had.
contentRouter.use('/products', __ds_scope.crudRouter({
  table: 'content_products',
  appKey: 'content',
  publicRead: true,
  idType: 'number',
  orderBy: 'sort_order, id',
  insertFields: ['name', 'cat', 'tag', 'tone', 'origin', 'roast', 'price', 'rating', 'count', 'img', 'featured', 'sort_order'],
  updateFields: ['name', 'cat', 'tag', 'tone', 'origin', 'roast', 'price', 'rating', 'count', 'img', 'featured', 'sort_order'],
  requiredFields: ['name'],
  defaults: async body => {
    const base = {
      cat: 'Beans',
      price: 0,
      rating: 4.5,
      count: 0,
      img: 'motif-coffee-bean',
      featured: false
    };
    if (body.sort_order === undefined) {
      const row = await __ds_scope.queryOne('select coalesce(max(sort_order), 0) + 1 as max from content_products');
      base.sort_order = row ? Number(row.max) : 1;
    }
    return base;
  },
  broadcastChannel: 'content:product'
}));
Object.assign(__ds_scope, { contentRouter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/routes/content.ts", error: String((e && e.message) || e) }); }

// server/src/routes/integrations.ts
try { (() => {
const integrationsRouter = Router();
integrationsRouter.use(__ds_scope.requireAuth, __ds_scope.requireAppAccess('devportal'));
integrationsRouter.get('/', async (_req, res) => {
  res.json(await __ds_scope.query('select * from integrations order by name'));
});
integrationsRouter.post('/:id/connect', async (req, res) => {
  const {
    creds = {}
  } = req.body || {};
  const existing = await __ds_scope.queryOne('select creds from integrations where id = $1', [req.params.id]);
  if (!existing) return res.status(404).json({
    error: 'Unknown integration'
  });
  const merged = {
    ...existing.creds,
    ...creds
  };
  const integ = await __ds_scope.queryOne(`update integrations set creds = $1, connected = true, enabled = true, updated_at = now() where id = $2 returning *`, [JSON.stringify(merged), req.params.id]);
  __ds_scope.broadcast('integration:update', integ);
  res.json(integ);
});
integrationsRouter.post('/:id/disconnect', async (req, res) => {
  const integ = await __ds_scope.queryOne(`update integrations set connected = false, enabled = false, updated_at = now() where id = $1 returning *`, [req.params.id]);
  __ds_scope.broadcast('integration:update', integ);
  res.json(integ);
});
integrationsRouter.patch('/:id/toggle', async (req, res) => {
  const {
    on
  } = req.body || {};
  const integ = await __ds_scope.queryOne(`update integrations set enabled = ($1 and connected), updated_at = now() where id = $2 returning *`, [!!on, req.params.id]);
  __ds_scope.broadcast('integration:update', integ);
  res.json(integ);
});
Object.assign(__ds_scope, { integrationsRouter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/routes/integrations.ts", error: String((e && e.message) || e) }); }

// server/src/routes/ops.ts
try { (() => {
// Lighter CRUD for the remaining ops domains — enough structure to back each
// portal's dashboard without overbuilding features the frontend doesn't use yet.
const opsRouter = Router();
opsRouter.use(__ds_scope.requireAuth);

// ---- Roastery ----
opsRouter.get('/roastery/batches', __ds_scope.requireAppAccess('roastery'), async (_req, res) => {
  res.json(await __ds_scope.query('select * from roast_batches order by started_at desc nulls last'));
});
opsRouter.post('/roastery/batches', __ds_scope.requireAppAccess('roastery'), async (req, res) => {
  const {
    code,
    origin,
    profile,
    kg
  } = req.body || {};
  if (!code) return res.status(400).json({
    error: 'code required'
  });
  const batch = await __ds_scope.queryOne(`insert into roast_batches (code, origin, profile, kg, status, started_at) values ($1,$2,$3,$4,'roasting', now()) returning *`, [code, origin, profile, kg]);
  __ds_scope.broadcast('roastery:batch', batch);
  res.status(201).json(batch);
});
opsRouter.patch('/roastery/batches/:id/status', __ds_scope.requireAppAccess('roastery'), async (req, res) => {
  const {
    status
  } = req.body || {};
  const done = status === 'done';
  const batch = await __ds_scope.queryOne(`update roast_batches set status = $1, completed_at = case when $2 then now() else completed_at end where id = $3 returning *`, [status, done, req.params.id]);
  __ds_scope.broadcast('roastery:batch', batch);
  res.json(batch);
});
// Green stock is a plain single-table resource — same shared crud helper.
opsRouter.use('/roastery/green-stock', __ds_scope.crudRouter({
  table: 'green_stock',
  appKey: 'roastery',
  orderBy: 'estate',
  insertFields: ['estate', 'kg'],
  requiredFields: ['estate'],
  broadcastChannel: 'roastery:green-stock',
  skipRequireAuth: true // opsRouter already runs requireAuth for every route in this file
}));

// ---- Supply chain ----
// Suppliers is a plain single-table resource — built on the shared crud
// helper (list/create/patch/delete) instead of hand-rolled routes.
opsRouter.use('/supply/suppliers', __ds_scope.crudRouter({
  table: 'suppliers',
  appKey: 'supply',
  orderBy: 'name',
  insertFields: ['name', 'category', 'reliability'],
  requiredFields: ['name'],
  skipRequireAuth: true
}));
opsRouter.get('/supply/purchase-orders', __ds_scope.requireAppAccess('supply'), async (_req, res) => {
  res.json(await __ds_scope.query(`
    select po.*, s.name as supplier_name from purchase_orders po
    left join suppliers s on s.id = po.supplier_id order by po.created_at desc`));
});
opsRouter.post('/supply/purchase-orders', __ds_scope.requireAppAccess('supply'), async (req, res) => {
  const {
    supplierId,
    amount
  } = req.body || {};
  const po = await __ds_scope.queryOne('insert into purchase_orders (supplier_id, amount) values ($1,$2) returning *', [supplierId, amount]);
  __ds_scope.broadcast('supply:po', po);
  res.status(201).json(po);
});
opsRouter.patch('/supply/purchase-orders/:id/status', __ds_scope.requireAppAccess('supply'), async (req, res) => {
  const {
    status
  } = req.body || {};
  const po = await __ds_scope.queryOne('update purchase_orders set status = $1 where id = $2 returning *', [status, req.params.id]);
  __ds_scope.broadcast('supply:po', po);
  res.json(po);
});

// ---- Finance ----
opsRouter.get('/finance/ledger', __ds_scope.requireAppAccess('finance'), async (_req, res) => {
  res.json(await __ds_scope.query('select * from ledger_entries order by recorded_at desc limit 200'));
});
opsRouter.post('/finance/ledger', __ds_scope.requireAppAccess('finance'), async (req, res) => {
  const {
    account,
    debit = 0,
    credit = 0,
    memo
  } = req.body || {};
  if (!account) return res.status(400).json({
    error: 'account required'
  });
  const entry = await __ds_scope.queryOne('insert into ledger_entries (account, debit, credit, memo) values ($1,$2,$3,$4) returning *', [account, debit, credit, memo]);
  __ds_scope.broadcast('finance:entry', entry);
  res.status(201).json(entry);
});

// ---- CRM ----
// Campaigns: list/create/update/delete via the shared crud helper, plus a
// dedicated status sub-action route the Content/CRM UI already calls.
opsRouter.use('/crm/campaigns', __ds_scope.crudRouter({
  table: 'campaigns',
  appKey: 'crm',
  orderBy: 'created_at desc',
  insertFields: ['name', 'channel'],
  requiredFields: ['name'],
  broadcastChannel: 'crm:campaign',
  skipRequireAuth: true
}));
opsRouter.patch('/crm/campaigns/:id/status', __ds_scope.requireAppAccess('crm'), async (req, res) => {
  const {
    status
  } = req.body || {};
  const campaign = await __ds_scope.queryOne('update campaigns set status = $1 where id = $2 returning *', [status, req.params.id]);
  __ds_scope.broadcast('crm:campaign', campaign);
  res.json(campaign);
});

// ---- Approvals (Orchestrator human-in-loop) ----
opsRouter.get('/approvals', __ds_scope.requireAppAccess('orchestrator'), async (_req, res) => {
  res.json(await __ds_scope.query(`select * from approvals where status = 'pending' order by created_at desc`));
});
opsRouter.post('/approvals/:id/decide', __ds_scope.requireAppAccess('orchestrator'), async (req, res) => {
  const {
    approve
  } = req.body || {};
  const approval = await __ds_scope.queryOne(`update approvals set status = $1, decided_at = now() where id = $2 returning *`, [approve ? 'approved' : 'rejected', req.params.id]);
  __ds_scope.broadcast('approval:decide', approval);
  res.json(approval);
});
Object.assign(__ds_scope, { opsRouter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/routes/ops.ts", error: String((e && e.message) || e) }); }

// server/src/index.ts
try { (() => {
dotenv.config();
const app = express();
const origins = (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: origins.length ? origins : true,
  credentials: true
}));
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({
  ok: true
}));
app.use('/api', __ds_scope.accessRouter);
app.use('/api/cafe', __ds_scope.cafeRouter);
app.use('/api/integrations', __ds_scope.integrationsRouter);
app.use('/api/ops', __ds_scope.opsRouter);
app.use('/api/content', __ds_scope.contentRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal server error'
  });
});
const server = http.createServer(app);
__ds_scope.initRealtime(server);
const port = Number(process.env.PORT) || 4000;
server.listen(port, () => {
  console.log(`Bisi Kaapi API listening on :${port} (WebSocket at /ws)`);
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/index.ts", error: String((e && e.message) || e) }); }

// server/src/seed.ts
try { (() => {
dotenv.config();
// Seeds demo data equivalent to the current frontend simulation, so the API
// behaves like the prototype (bk-data.js) on day one. Safe to re-run.
async function main() {
  const client = await __ds_scope.pool.connect();
  try {
    console.log('Seeding users...');
    const demoUsers = [{
      email: 'akshay@bisikaapi.coffee',
      name: 'Akshay Meda',
      role: 'owner'
    }, {
      email: 'meera@bisikaapi.coffee',
      name: 'Meera S',
      role: 'ops'
    }, {
      email: 'asha@bisikaapi.coffee',
      name: 'Asha R',
      role: 'cafe'
    }, {
      email: 'bala@bisikaapi.coffee',
      name: 'Bala K',
      role: 'roaster'
    }, {
      email: 'dev@bisikaapi.coffee',
      name: 'Dev P',
      role: 'supply'
    }, {
      email: 'chitra@bisikaapi.coffee',
      name: 'Chitra M',
      role: 'finance'
    }];
    const passwordHash = await __ds_scope.hashPassword(process.env.SEED_PASSWORD || 'bisikaapi123');
    for (const u of demoUsers) {
      await client.query(`insert into users (email, password_hash, name, role_key) values ($1,$2,$3,$4)
         on conflict (email) do nothing`, [u.email, passwordHash, u.name, u.role]);
    }
    console.log('Seeding café orders...');
    await client.query(`delete from cafe_orders`);
    await client.query(`
      insert into cafe_orders (id, who, items, status, source) values
      ('#A-241','Table 4','Bisi Kaapi ×2 · Masala Dosa','new','walkin'),
      ('#A-240','Takeaway · Asha','Bella Kaapi · Filter Coffee Cake','brewing','walkin'),
      ('#A-239','Table 9','Cardamom Latte · Cold Brew','brewing','walkin'),
      ('#A-238','Swiggy · 8821','Mysore Bonda ×3','ready','swiggy'),
      ('#A-237','Table 2','Cortado · Sukku Kaapi','new','walkin')
    `);
    console.log('Seeding café inventory...');
    await client.query(`delete from cafe_inventory`);
    await client.query(`
      insert into cafe_inventory (name, pct) values
      ('Filter coffee powder', 28), ('Full-cream milk', 64),
      ('Jaggery', 82), ('Paper cups (12oz)', 47)
    `);
    console.log('Seeding café shifts...');
    await client.query(`delete from cafe_shifts`);
    await client.query(`
      insert into cafe_shifts (name, role, clock_in, hours) values
      ('Asha R','Barista', now() - interval '3.1 hours', 3.1),
      ('Bala K','Barista', now() - interval '2.6 hours', 2.6),
      ('Chitra M','Floor', now() - interval '2.9 hours', 2.9),
      ('Dev P','Kitchen', now() - interval '9.2 hours', 9.2)
    `);
    console.log('Seeding integrations...');
    const integrations = [['square', 'Square POS', 'Square POS', 'Point of Sale', true], ['shopify', 'Shopify', 'Shopify', 'E-commerce', true], ['razorpay', 'Razorpay', 'Razorpay', 'Payments', true], ['tally', 'Tally', 'Tally', 'Accounting', true], ['shiprocket', 'Shiprocket', 'Shiprocket', 'Logistics', true], ['whatsapp', 'WhatsApp Business', 'WhatsApp', 'Messaging', true], ['gmail', 'Gmail', 'Gmail', 'Email', true], ['slack', 'Slack', 'Slack', 'Team', true], ['sheets', 'Google Sheets', 'Google Sheets', 'Data', true], ['zoho', 'Zoho People', 'Zoho People', 'HR', false], ['zomato', 'Zomato', 'Zomato', 'Delivery', false], ['swiggy', 'Swiggy', 'Swiggy', 'Delivery', false]];
    for (const [id, name, source, category, on] of integrations) {
      await client.query(`insert into integrations (id, name, source, category, enabled, connected)
         values ($1,$2,$3,$4,$5,$5) on conflict (id) do nothing`, [id, name, source, category, on]);
    }
    console.log('Seeding roastery / supply / finance / CRM...');
    await client.query(`
      insert into roast_batches (code, origin, profile, kg, status, started_at) values
      ('#2048','Coorg','Medium-dark', 12, 'roasting', now())
      on conflict do nothing
    `);
    await client.query(`
      insert into green_stock (estate, kg) values
      ('Chikmagalur', 420), ('Coorg', 260), ('Baba Budangiri', 180)
    `);
    await client.query(`
      insert into suppliers (name, category, reliability) values
      ('Sunrise Estates', 'Green coffee', 0.94), ('Western Ghats Co-op', 'Green coffee', 0.9)
    `);
    await client.query(`
      insert into campaigns (name, channel, status, reach) values
      ('New Coorg roast', 'Email + WhatsApp', 'draft', 12400)
    `);
    console.log('Done. Demo login: akshay@bisikaapi.coffee / bisikaapi123 (all demo users share this password).');
  } finally {
    client.release();
    await __ds_scope.pool.end();
  }
}
main().catch(e => {
  console.error(e);
  process.exit(1);
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "server/src/seed.ts", error: String((e && e.message) || e) }); }

// ui_kits/customer/marketing/MarketingApp.jsx
try { (() => {
const {
  Button,
  Rating,
  Divider,
  Input
} = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;
const ASSET = '../../../assets';
const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 40px'
};
const overline = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-xs)',
  fontWeight: 700,
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  color: 'var(--text-brand)'
};
const display = size => ({
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: size,
  lineHeight: 1.04,
  letterSpacing: '-0.02em',
  color: 'var(--text-primary)',
  margin: 0
});

// ---------------- NAV ----------------
const NAV = [['home', 'Home'], ['roastery', 'Roastery'], ['coffee', 'Coffee'], ['shop', 'Shop'], ['consulting', 'Consulting']];
function Nav({
  cart,
  page,
  setPage,
  lang,
  setLang,
  t
}) {
  const count = cart ? cart.count : 0;
  return /*#__PURE__*/React.createElement("header", {
    "data-bk-section": "nav",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(250,239,219,0.88)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      height: 74
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark.png`,
    alt: "",
    width: "42",
    height: "42"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, "Bisi Kaapi")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 18
    }
  }, NAV.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage(id);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 500,
      color: page === id ? 'var(--text-brand)' : 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, t('nav.' + id)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: 2
    }
  }, [['en', 'EN'], ['kn', 'ಕ']].map(([lc, lab]) => /*#__PURE__*/React.createElement("button", {
    key: lc,
    onClick: () => setLang(lc),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontFamily: lc === 'kn' ? 'var(--font-script)' : 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 700,
      background: lang === lc ? 'var(--color-primary)' : 'transparent',
      color: lang === lc ? '#FFF7EE' : 'var(--text-secondary)'
    }
  }, lab))), /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => cart && cart.openDrawer(),
    "aria-label": "Cart",
    style: {
      position: 'relative',
      display: 'flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    color: "var(--text-secondary)"
  }), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -3,
      right: -5,
      background: 'var(--color-primary)',
      color: '#fff',
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      width: 17,
      height: 17,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, count)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setPage('shop')
  }, t('nav.order')))));
}

// ---------------- HERO ----------------
function Hero({
  setPage,
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-bk-section": "hero",
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center',
      padding: '64px 40px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: overline
  }, t('hero.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...display('clamp(3rem, 5vw, 4.6rem)'),
      marginTop: 18
    }
  }, t('hero.title1'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--text-brand)'
    }
  }, t('hero.titleEm')), " ", t('hero.title2')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      marginTop: 22,
      maxWidth: '46ch'
    }
  }, t('hero.body')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => setPage('coffee')
  }, t('hero.cta1')), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => setPage('shop')
  }, t('hero.cta2'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 4.8,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "4.8 \xB7 ", t('hero.rating')))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-2xl)',
      padding: '28px',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/story-arch.png`,
    alt: "Bisi Kaapi story illustration",
    style: {
      height: 420,
      maxWidth: '100%'
    }
  })));
}

// ---------------- TRUST STRIP ----------------
function TrustStrip({
  t
}) {
  const items = [{
    icon: 'leaf',
    t: t('trust.origin'),
    s: t('trust.originS')
  }, {
    icon: 'coffee',
    t: t('trust.roasted'),
    s: t('trust.roastedS')
  }, {
    icon: 'truck',
    t: t('trust.shipped'),
    s: t('trust.shippedS')
  }, {
    icon: 'award',
    t: t('trust.trust'),
    s: t('trust.trustS')
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-bk-section": "trust",
    style: {
      background: 'var(--bk-brass-100)',
      borderTop: '1px solid var(--bk-brass-300)',
      borderBottom: '1px solid var(--bk-brass-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      padding: '22px 40px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--bk-milk)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 20,
    color: "var(--text-accent)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, it.s))))));
}

// ---------------- STORY ----------------
function Story({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-bk-section": "story",
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 60,
      alignItems: 'center',
      padding: '86px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/chemex.png`,
    alt: "",
    style: {
      height: 280
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/espresso-machine.png`,
    alt: "",
    style: {
      height: 200,
      alignSelf: 'flex-end'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: overline
  }, t('story.eyebrow')), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display('2.8rem'),
      marginTop: 14,
      whiteSpace: 'pre-line'
    }
  }, t('story.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginTop: 18
    }
  }, t('story.body')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    })
  }, t('story.cta')))));
}

// ---------------- PRODUCTS ----------------
const PRODUCTS_FALLBACK = (window.BK_PRODUCTS_DEFAULT || []).filter(p => p.featured);
function Products({
  onAdd,
  setPage,
  t
}) {
  // window.BK_PRODUCTS is undefined until content-bridge.js's fetch resolves (or fails)
  // — that's "not loaded yet", distinct from a live catalog that loaded but genuinely
  // has zero featured items. Only the former should fall back to hardcoded defaults;
  // the latter should just render nothing rather than show stale/wrong picks.
  const liveLoaded = window.BK_PRODUCTS !== undefined;
  const items = liveLoaded ? window.BK_PRODUCTS.filter(p => p.featured) : PRODUCTS_FALLBACK;
  if (liveLoaded && !items.length) return null;
  return /*#__PURE__*/React.createElement("section", {
    "data-bk-section": "products",
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: overline
  }, t('prod.eyebrow')), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display('2.6rem'),
      marginTop: 12
    }
  }, t('prod.title'))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => setPage('shop')
  }, t('prod.shopAll'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 26
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id || p.name,
    p: p,
    size: "lg",
    assetPath: ASSET,
    onAdd: onAdd,
    addLabel: t('prod.add')
  })))));
}

// ---------------- CAFÉ FEATURE (marigold) ----------------
function CafeFeature({
  t
}) {
  const pts = [t('cafe.p1'), t('cafe.p2'), t('cafe.p3')];
  return /*#__PURE__*/React.createElement("section", {
    "data-bk-section": "cafe",
    style: {
      background: 'var(--bk-marigold)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '78px 40px',
      position: 'relative',
      zIndex: 2,
      maxWidth: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '54%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...overline,
      color: 'var(--bk-bark)'
    }
  }, t('cafe.eyebrow')), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display('3rem'),
      color: 'var(--bk-bark)',
      marginTop: 14
    }
  }, t('cafe.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      color: 'rgba(56,20,8,0.86)',
      lineHeight: 1.6,
      marginTop: 18
    }
  }, t('cafe.body')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 26
    }
  }, pts.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--bk-bark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--bk-marigold)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 500,
      color: 'var(--bk-bark)'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      background: 'var(--bk-bark)',
      borderColor: 'var(--bk-bark)'
    }
  }, t('cafe.cta'))))), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/coffee-branch-color.png`,
    alt: "",
    style: {
      position: 'absolute',
      right: -20,
      bottom: 0,
      maxWidth: '42%',
      maxHeight: '96%',
      objectFit: 'contain',
      objectPosition: 'bottom right',
      zIndex: 1,
      opacity: 0.95,
      pointerEvents: 'none'
    }
  }));
}

// ---------------- JOIN ----------------
function Join({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-bk-section": "join",
    style: {
      ...wrap,
      padding: '80px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    decorative: true
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display('2.4rem'),
      marginTop: 26
    }
  }, t('join.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, t('join.body')), /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    },
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: t('join.ph'),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    })
  })), /*#__PURE__*/React.createElement(Button, null, t('join.cta')))));
}

// ---------------- FOOTER ----------------
function Footer({
  setPage
}) {
  const cols = [{
    h: 'Explore',
    items: [['Menu', 'coffee'], ['Beans & gear', 'shop'], ['Our story', 'roastery'], ['Wholesale', 'consulting']]
  }, {
    h: 'Visit',
    items: [['Find a café', 'consulting'], ['Hours', 'consulting'], ['Reserve a table', 'consulting'], ['Events', 'consulting']]
  }, {
    h: 'Help',
    items: [['Shipping', 'shop'], ['Returns', 'shop'], ['Contact', 'consulting'], ['FAQs', 'consulting']]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    "data-bk-section": "footer",
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '60px 40px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark-cream.png`,
    alt: "",
    width: "44",
    height: "44"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26
    }
  }, "Bisi Kaapi")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 20,
      color: 'var(--bk-brass-300)',
      marginTop: 6
    }
  }, "\u0CAC\u0CBF\u0CB8\u0CBF \u0C95\u0CBE\u0CAB\u0CBF"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,247,238,0.7)',
      lineHeight: 1.6,
      marginTop: 12,
      maxWidth: '32ch'
    }
  }, "Here's to fresh beginnings, unforgettable aromas, and countless cups shared together.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--bk-brass-300)',
      marginBottom: 14
    }
  }, c.h), c.items.map(([label, page]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage(page);
    },
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,247,238,0.78)',
      textDecoration: 'none',
      marginBottom: 9,
      cursor: 'pointer'
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      borderTop: '1px solid rgba(255,247,238,0.12)',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,247,238,0.55)'
    }
  }, "\xA9 2026 Bisi Kaapi \xB7 Brand & design by Nomadiic Horse Designs \xB7 Built with Quantink.AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 19,
    color: "rgba(255,247,238,0.7)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 19,
    color: "rgba(255,247,238,0.7)"
  }))));
}
function MarketingApp() {
  const cart = window.useCartStore();
  const initialPage = new URLSearchParams(location.search).get('page') || 'home';
  const [page, setPage] = React.useState(initialPage);
  const [lang, setLang] = React.useState('en');
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  const t = React.useCallback(k => window.bkTranslate(k, lang), [lang]);
  const P = window.MarketingPages;
  const {
    CartDrawer,
    CommerceAssistant
  } = window.MarketingCommerce;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  React.useEffect(() => {
    window.BK_GOTO_PAGE = setPage;
    return window.BK_CONTENT ? window.BK_CONTENT.subscribe(forceUpdate) : undefined;
  }, []);
  return /*#__PURE__*/React.createElement(window.BKCart.Provider, {
    value: cart
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    cart: cart,
    page: page,
    setPage: setPage,
    lang: lang,
    setLang: setLang,
    t: t
  }), page === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    setPage: setPage,
    t: t
  }), /*#__PURE__*/React.createElement(TrustStrip, {
    t: t
  }), /*#__PURE__*/React.createElement(Story, {
    t: t
  }), /*#__PURE__*/React.createElement(Products, {
    onAdd: p => {
      cart.add(p);
      cart.openDrawer();
    },
    setPage: setPage,
    t: t
  }), /*#__PURE__*/React.createElement(CafeFeature, {
    t: t
  }), /*#__PURE__*/React.createElement(Join, {
    t: t
  })), page === 'roastery' && /*#__PURE__*/React.createElement(P.Roastery, {
    t: t
  }), page === 'coffee' && /*#__PURE__*/React.createElement(P.Coffee, {
    setPage: setPage,
    t: t
  }), page === 'shop' && /*#__PURE__*/React.createElement(P.Shop, {
    t: t
  }), page === 'consulting' && /*#__PURE__*/React.createElement(P.Consulting, {
    t: t
  }), /*#__PURE__*/React.createElement(Footer, {
    setPage: setPage,
    t: t
  }), /*#__PURE__*/React.createElement(CartDrawer, null), /*#__PURE__*/React.createElement(CommerceAssistant, null)));
}
window.MarketingApp = MarketingApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/marketing/MarketingApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/marketing/MarketingCommerce.jsx
try { (() => {
// Bisi Kaapi storefront commerce: cart context, slide-in cart drawer, and a
// Claude-powered shopping assistant ("Claude Commerce"). Loaded before the
// page scripts so both MarketingApp and MarketingPages can read the cart.
const {
  Button: CButton,
  QuantityStepper: CQty,
  Badge: CBadge
} = window.BisiKaapiDesignSystem_2fbe5e;
const CIcon = window.Icon;
const CA = '../../../assets';

// Unified catalog the assistant can recommend from.
const BK_CATALOG = [{
  id: 1,
  name: 'Mysore Filter Blend',
  price: 240,
  img: 'motif-coffee-bean',
  note: 'Chikmagalur · medium roast · our signature filter coffee'
}, {
  id: 2,
  name: 'Coorg Single Estate',
  price: 320,
  img: 'motif-coffee-plant',
  note: 'Coorg · medium-dark · bold & chocolatey'
}, {
  id: 3,
  name: 'Peaberry Reserve',
  price: 420,
  img: 'motif-coffee-bean',
  note: 'Baba Budangiri · light roast · bright & floral'
}, {
  id: 4,
  name: 'Brass Davara Tumbler',
  price: 690,
  img: 'motif-filter-cup',
  note: 'Serveware · the traditional way to drink kaapi'
}, {
  id: 5,
  name: 'Pour-over Carafe',
  price: 1290,
  img: 'chemex',
  note: 'Brewer · glass · 600ml'
}, {
  id: 6,
  name: 'Hand Grinder',
  price: 1850,
  img: 'hand-grinder',
  note: 'Brewer · burr · grind fresh at home'
}, {
  id: 7,
  name: 'Filter Decoction Press',
  price: 540,
  img: 'motif-coffee-bean',
  note: 'Brewer · stainless steel South-Indian filter'
}];
window.BK_CATALOG = BK_CATALOG;
const BKCart = React.createContext(null);
window.BKCart = BKCart;
window.useCart = () => React.useContext(BKCart);

// ----- provider hook (used by MarketingApp) -----
window.useCartStore = function useCartStore() {
  const [items, setItems] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [placed, setPlaced] = React.useState(null);
  const add = (p, qty = 1) => {
    setItems(c => {
      const ex = c.find(x => x.id === p.id);
      if (ex) return c.map(x => x.id === p.id ? {
        ...x,
        qty: x.qty + qty
      } : x);
      return [...c, {
        id: p.id,
        name: p.name,
        price: p.price,
        img: p.img,
        qty
      }];
    });
    setPlaced(null);
  };
  const setQty = (id, q) => setItems(c => q <= 0 ? c.filter(x => x.id !== id) : c.map(x => x.id === id ? {
    ...x,
    qty: q
  } : x));
  const remove = id => setItems(c => c.filter(x => x.id !== id));
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return {
    items,
    add,
    setQty,
    remove,
    clear,
    count,
    total,
    drawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
    placed,
    setPlaced
  };
};

// ----- Cart drawer -----
function CartDrawer() {
  const cart = window.useCart();
  if (!cart) return null;
  const {
    items,
    setQty,
    remove,
    total,
    drawerOpen,
    closeDrawer,
    placed,
    setPlaced,
    clear
  } = cart;
  const delivery = total > 0 ? 49 : 0;
  const checkout = () => {
    setPlaced('BK-' + Math.floor(2000 + Math.random() * 7999));
    clear();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      pointerEvents: drawerOpen ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: closeDrawer,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(43,22,7,0.42)',
      opacity: drawerOpen ? 1 : 0,
      transition: 'opacity .3s'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: 400,
      maxWidth: '92vw',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-xl)',
      transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform .32s var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-primary)'
    }
  }, "Your cart"), /*#__PURE__*/React.createElement("button", {
    onClick: closeDrawer,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "check",
    size: 0
  }), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "var(--text-secondary)",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), placed ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: 'var(--success-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "check",
    size: 40,
    color: "var(--success)",
    strokeWidth: 2.6
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-primary)',
      margin: '20px 0 8px'
    }
  }, "Order placed!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, "Order ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "#", placed), " is being roasted & packed. We'll email you tracking shortly."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    fullWidth: true,
    onClick: () => {
      setPlaced(null);
      closeDrawer();
    }
  }, "Keep shopping"))) : items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 30,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${CA}/illustrations/motif-filter-cup.png`,
    alt: "",
    style: {
      height: 90,
      opacity: 0.5,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15
    }
  }, "Your cup's empty \u2014 add something warm.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '8px 22px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'center',
      padding: '15px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bk-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${CA}/illustrations/${it.img}.png`,
    alt: "",
    style: {
      maxHeight: 44
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      margin: '2px 0 6px'
    }
  }, "\u20B9", it.price), /*#__PURE__*/React.createElement(CQty, {
    size: "sm",
    value: it.qty,
    onChange: v => setQty(it.id, v)
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => remove(it.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u20B9", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Delivery"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u20B9", delivery)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-primary)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u20B9", total + delivery)), /*#__PURE__*/React.createElement(CButton, {
    fullWidth: true,
    size: "lg",
    onClick: checkout
  }, "Checkout \xB7 \u20B9", total + delivery)))));
}

// ----- Claude Commerce assistant -----
function CommerceAssistant() {
  const cart = window.useCart();
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([{
    role: 'bot',
    text: "Hi! I'm your Bisi Kaapi guide ☕ Tell me how you brew or what you like, and I'll suggest the right beans or gear."
  }]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, open]);
  const catalogText = BK_CATALOG.map(p => `${p.name} (₹${p.price}) — ${p.note}`).join('\n');
  const send = async text => {
    const q = (text || input).trim();
    if (!q || busy) return;
    setInput('');
    setMsgs(m => [...m, {
      role: 'user',
      text: q
    }]);
    setBusy(true);
    const prompt = `You are Claude Commerce, the friendly shopping assistant for Bisi Kaapi, a South-Indian filter-coffee brand. Warm, concise, sentence-case voice. Here is the catalogue:\n${catalogText}\n\nCustomer says: "${q}"\n\nReply in 1–3 short sentences recommending from the catalogue. If you recommend specific products, append one line per product at the very end in the exact form: ADD: <exact product name>. Do not mention the ADD lines in your prose.`;
    let reply = null;
    try {
      if (window.claude && window.claude.complete) reply = await window.claude.complete(prompt);
    } catch (e) {}
    if (!reply) reply = "I'd start with our Mysore Filter Blend — the signature South-Indian filter coffee. Pair it with a brass davara tumbler for the full ritual.\nADD: Mysore Filter Blend\nADD: Brass Davara Tumbler";
    const adds = [];
    const prose = reply.split('\n').filter(line => {
      const m = line.match(/^\s*ADD:\s*(.+)$/i);
      if (m) {
        const p = BK_CATALOG.find(c => c.name.toLowerCase() === m[1].trim().toLowerCase());
        if (p) adds.push(p);
        return false;
      }
      return true;
    }).join('\n').trim();
    setMsgs(m => [...m, {
      role: 'bot',
      text: prose,
      recs: adds
    }]);
    setBusy(false);
  };
  const quick = ['I drink filter coffee', 'Gift under ₹1000', 'I have an espresso machine'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Shopping assistant",
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 70,
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--color-primary)',
      boxShadow: 'var(--shadow-lg)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: open ? 'arrowRight' : 'coffee',
    size: 26,
    color: "#FFF7EE"
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 96,
      zIndex: 70,
      width: 372,
      maxWidth: '92vw',
      height: 520,
      maxHeight: '76vh',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '15px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${CA}/logo/bisi-kaapi-mark-cream.png`,
    width: "30",
    height: "30",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17
    }
  }, "Claude Commerce"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--bk-brass-300)',
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--success)'
    }
  }), " Bisi Kaapi shopping guide"))), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: 'var(--bk-paper)'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
      maxWidth: '86%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.role === 'user' ? 'var(--color-primary)' : 'var(--surface-card)',
      color: m.role === 'user' ? '#FFF7EE' : 'var(--text-primary)',
      border: m.role === 'user' ? 'none' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '10px 13px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      lineHeight: 1.55,
      whiteSpace: 'pre-wrap'
    }
  }, m.text), m.recs && m.recs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      marginTop: 8
    }
  }, m.recs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bk-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${CA}/illustrations/${p.img}.png`,
    alt: "",
    style: {
      maxHeight: 30
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "\u20B9", p.price)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      cart.add(p);
      cart.openDrawer();
    },
    style: {
      border: 'none',
      background: 'var(--bk-terracotta-100)',
      color: 'var(--text-brand)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 10px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "Add")))))), busy && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      display: 'flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--color-accent)',
      animation: 'bk-pulse 1s infinite'
    }
  }), " brewing a suggestion\u2026"), msgs.length === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      marginTop: 4
    }
  }, quick.map(q => /*#__PURE__*/React.createElement("button", {
    key: q,
    onClick: () => send(q),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      cursor: 'pointer'
    }
  }, q)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "Ask about beans, gear, gifts\u2026",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => send(),
    style: {
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: '50%',
      width: 40,
      height: 40,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "arrowRight",
    size: 18
  })))));
}
window.MarketingCommerce = {
  CartDrawer,
  CommerceAssistant
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/marketing/MarketingCommerce.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/marketing/MarketingPages.jsx
try { (() => {
// Additional Bisi Kaapi marketing pages: Roastery, Coffee (grinds), Accessories, Consulting.
// Each babel file has its own scope, so re-declare the small helpers and read globals.
const {
  Button: PButton,
  Badge: PBadge,
  Card: PCard,
  Rating: PRating,
  Tag: PTag,
  Input: PInput,
  Textarea: PTextarea,
  Select: PSelect,
  Divider: PDivider
} = window.BisiKaapiDesignSystem_2fbe5e;
const PIcon = window.Icon;
const PA = '../../../assets';
const pwrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 40px'
};
const pol = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-xs)',
  fontWeight: 700,
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  color: 'var(--text-brand)'
};
const pdisp = (size, color) => ({
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: size,
  lineHeight: 1.05,
  letterSpacing: '-0.02em',
  color: color || 'var(--text-primary)',
  margin: 0
});
function PageHero({
  overline,
  title,
  sub,
  dark
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: dark ? 'var(--surface-dark)' : 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pwrap,
      padding: '70px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pol,
      color: dark ? 'var(--bk-brass-300)' : 'var(--text-brand)'
    }
  }, overline), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...pdisp('clamp(2.6rem,4.5vw,4rem)', dark ? 'var(--bk-paper)' : 'var(--text-primary)'),
      marginTop: 14,
      maxWidth: '20ch'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      color: dark ? 'rgba(255,247,238,0.78)' : 'var(--text-secondary)',
      lineHeight: 1.6,
      marginTop: 16,
      maxWidth: '52ch'
    }
  }, sub)));
}

// ---------------- ROASTERY ----------------
function Roastery({
  t
}) {
  const steps = window.BK_LISTS && window.BK_LISTS['roastery.steps'] || window.BK_LISTS_DEFAULT && window.BK_LISTS_DEFAULT['roastery.steps'] || [];
  return /*#__PURE__*/React.createElement("div", {
    "data-bk-section": "roastery"
  }, /*#__PURE__*/React.createElement(PageHero, {
    dark: true,
    overline: t('r.eyebrow'),
    title: t('r.title'),
    sub: t('r.sub')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...pwrap,
      padding: '76px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(PCard, {
    key: s.t,
    variant: "raised",
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: 'var(--bk-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${PA}/illustrations/${s.img}.png`,
    alt: "",
    style: {
      maxHeight: 150
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-accent)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...pdisp('1.6rem'),
      margin: '6px 0 8px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bk-brass-100)',
      borderTop: '1px solid var(--bk-brass-300)',
      borderBottom: '1px solid var(--bk-brass-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pwrap,
      padding: '60px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: pol
  }, t('r.estEyebrow')), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...pdisp('2.4rem'),
      marginTop: 12
    }
  }, t('r.estTitle')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "Every bag carries its estate, altitude and roast date. We pay above fair-trade and visit every farm we buy from.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Baba Budangiri', '1,650 m · Light roast'], ['Chikmagalur', '1,100 m · Medium roast'], ['Coorg', '900 m · Medium-dark']].map(([e, m]) => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-primary)'
    }
  }, e), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, m)))))));
}

// ---------------- COFFEE / GROUND VARIANTS ----------------
function Coffee({
  setPage,
  t
}) {
  const grinds = window.BK_LISTS && window.BK_LISTS['coffee.grinds'] || window.BK_LISTS_DEFAULT && window.BK_LISTS_DEFAULT['coffee.grinds'] || [];
  return /*#__PURE__*/React.createElement("div", {
    "data-bk-section": "coffee"
  }, /*#__PURE__*/React.createElement(PageHero, {
    overline: t('c.eyebrow'),
    title: t('c.title'),
    sub: t('c.sub')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...pwrap,
      padding: '64px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, grinds.map(g => /*#__PURE__*/React.createElement(PCard, {
    key: g.t,
    variant: "outline",
    interactive: true,
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      minHeight: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--bk-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "coffee",
    size: 22,
    color: "var(--text-accent)"
  })), g.badge && /*#__PURE__*/React.createElement(PBadge, {
    tone: g.tone
  }, g.badge)), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...pdisp('1.5rem'),
      margin: '16px 0 8px'
    }
  }, g.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, g.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "check",
    size: 15,
    color: "var(--success)"
  }), " ", g.use)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(PButton, {
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(PIcon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => setPage && setPage('shop')
  }, t('c.cta')))));
}

// ---------------- ACCESSORIES SHOP ----------------
function Shop({
  t
}) {
  const cart = window.useCart();
  const catalog = window.BK_PRODUCTS || window.BK_PRODUCTS_DEFAULT || [];
  const acc = catalog.filter(p => p.cat === 'Gear');
  return /*#__PURE__*/React.createElement("div", {
    "data-bk-section": "shop-accessories"
  }, /*#__PURE__*/React.createElement(PageHero, {
    overline: t('s.eyebrow'),
    title: t('s.title'),
    sub: t('s.sub')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...pwrap,
      padding: '64px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginBottom: 30
    }
  }, ['All', 'Brewers', 'Serveware', 'Storage', 'Gifts'].map((c, i) => /*#__PURE__*/React.createElement(PTag, {
    key: c,
    selected: i === 0,
    onClick: () => {}
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, acc.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id || p.name,
    p: p,
    size: "sm",
    assetPath: PA,
    onAdd: prod => {
      cart && cart.add(prod);
      cart && cart.openDrawer();
    }
  })))));
}

// ---------------- CONSULTING ----------------
function Consulting({
  t
}) {
  const services = window.BK_LISTS && window.BK_LISTS['consulting.services'] || window.BK_LISTS_DEFAULT && window.BK_LISTS_DEFAULT['consulting.services'] || [];
  return /*#__PURE__*/React.createElement("div", {
    "data-bk-section": "consulting"
  }, /*#__PURE__*/React.createElement(PageHero, {
    overline: t('cn.eyebrow'),
    title: t('cn.title'),
    sub: t('cn.sub')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...pwrap,
      padding: '70px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    style: {
      display: 'flex',
      gap: 18,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bk-terracotta-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: s.icon,
    size: 24,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...pdisp('1.5rem'),
      marginBottom: 6
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: 0
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pwrap,
      padding: '64px 40px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: pol
  }, t('cn.formEyebrow')), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...pdisp('2.4rem'),
      marginTop: 12
    }
  }, t('cn.formTitle')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "Share a few details and our team will reach out within two working days.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      background: 'var(--surface-card)',
      padding: 26,
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(PInput, {
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(PInput, {
    placeholder: "you@business.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(PSelect, {
    defaultValue: "setup"
  }, /*#__PURE__*/React.createElement("option", {
    value: "setup"
  }, "Caf\xE9 setup"), /*#__PURE__*/React.createElement("option", {
    value: "menu"
  }, "Menu & recipe design"), /*#__PURE__*/React.createElement("option", {
    value: "training"
  }, "Barista training"), /*#__PURE__*/React.createElement("option", {
    value: "wholesale"
  }, "Wholesale supply"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(PTextarea, {
    rows: 3,
    placeholder: "Tell us about your space and timeline\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(PButton, {
    fullWidth: true,
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(PIcon, {
      name: "arrowRight",
      size: 18
    })
  }, t('cn.send')))))));
}
window.MarketingPages = {
  Roastery,
  Coffee,
  Shop,
  Consulting
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/marketing/MarketingPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/marketing/i18n.js
try { (() => {
// Bisi Kaapi — marketing i18n dictionary (EN + Kannada). window.BK_I18N + window.t
// Kannada strings are conversational, matching the brand's warm tone.
(function () {
  const STR = {
    // nav
    'nav.home': ['Home', 'ಮುಖಪುಟ'],
    'nav.roastery': ['Roastery', 'ರೋಸ್ಟರಿ'],
    'nav.coffee': ['Coffee', 'ಕಾಫಿ'],
    'nav.shop': ['Shop', 'ಅಂಗಡಿ'],
    'nav.consulting': ['Consulting', 'ಸಲಹೆ'],
    'nav.order': ['Order online', 'ಆನ್‌ಲೈನ್ ಆರ್ಡರ್'],
    // hero
    'hero.eyebrow': ['Estd. with love · ಬಿಸಿ ಕಾಫಿ', 'ಪ್ರೀತಿಯಿಂದ ಸ್ಥಾಪನೆ · ಬಿಸಿ ಕಾಫಿ'],
    'hero.title1': ['Slow down,', 'ನಿಧಾನಿಸಿ,'],
    'hero.titleEm': ['savour', 'ಸವಿಯಿರಿ'],
    'hero.title2': ['the brew.', 'ಕಾಫಿಯನ್ನು.'],
    'hero.body': ['Because everybody loves "Bisi" (hot) + "Kaapi" (coffee). Every brew celebrates the warmth of home, the richness of tradition, and the joy of slowing down.', 'ಏಕೆಂದರೆ ಎಲ್ಲರಿಗೂ "ಬಿಸಿ" + "ಕಾಫಿ" ಇಷ್ಟ. ಪ್ರತಿ ಕಪ್ ಮನೆಯ ಬೆಚ್ಚನೆ, ಸಂಪ್ರದಾಯದ ಶ್ರೀಮಂತಿಕೆ ಮತ್ತು ನಿಧಾನಿಸುವ ಸಂತೋಷವನ್ನು ಆಚರಿಸುತ್ತದೆ.'],
    'hero.cta1': ['Explore the menu', 'ಮೆನು ನೋಡಿ'],
    'hero.cta2': ['Shop beans', 'ಬೀನ್ಸ್ ಕೊಳ್ಳಿ'],
    'hero.rating': ['loved by 3,400+ regulars', '3,400+ ಗ್ರಾಹಕರ ಮೆಚ್ಚುಗೆ'],
    // trust
    'trust.origin': ['Single-origin', 'ಏಕ-ಮೂಲ'],
    'trust.originS': ['Western Ghats estates', 'ಪಶ್ಚಿಮ ಘಟ್ಟದ ತೋಟಗಳು'],
    'trust.roasted': ['Freshly roasted', 'ತಾಜಾ ರೋಸ್ಟ್'],
    'trust.roastedS': ['Small batches, weekly', 'ಸಣ್ಣ ಬ್ಯಾಚ್, ಪ್ರತಿ ವಾರ'],
    'trust.shipped': ['Shipped pan-India', 'ಭಾರತದಾದ್ಯಂತ ರವಾನೆ'],
    'trust.shippedS': ['In 2–4 days', '2–4 ದಿನಗಳಲ್ಲಿ'],
    'trust.trust': ['Decades in the making', 'ದಶಕಗಳ ಶ್ರಮ'],
    'trust.trustS': ['A name people trust', 'ನಂಬಿಕೆಯ ಹೆಸರು'],
    // story
    'story.eyebrow': ['Our story', 'ನಮ್ಮ ಕಥೆ'],
    'story.title': ['Decades in the making.\nBut the new beginning.', 'ದಶಕಗಳ ಶ್ರಮ.\nಆದರೆ ಹೊಸ ಆರಂಭ.'],
    'story.body': ['After all these years, it felt like time to step into a more modern chapter — a new identity, a new space, and a new way of sharing what we do. The same heart: great coffee, loyal regulars, a name people already loved.', 'ಇಷ್ಟು ವರ್ಷಗಳ ನಂತರ, ಹೊಸ ಅಧ್ಯಾಯಕ್ಕೆ ಕಾಲಿಡುವ ಸಮಯ ಬಂದಿತ್ತು — ಹೊಸ ಗುರುತು, ಹೊಸ ಸ್ಥಳ. ಅದೇ ಹೃದಯ: ಉತ್ತಮ ಕಾಫಿ, ನಿಷ್ಠಾವಂತ ಗ್ರಾಹಕರು.'],
    'story.cta': ['Read the full story', 'ಪೂರ್ಣ ಕಥೆ ಓದಿ'],
    // products
    'prod.eyebrow': ['From our roastery', 'ನಮ್ಮ ರೋಸ್ಟರಿಯಿಂದ'],
    'prod.title': ['Take a little warmth home', 'ಸ್ವಲ್ಪ ಬೆಚ್ಚನೆಯನ್ನು ಮನೆಗೆ'],
    'prod.shopAll': ['Shop all', 'ಎಲ್ಲಾ ನೋಡಿ'],
    'prod.add': ['Add', 'ಸೇರಿಸಿ'],
    // cafe feature
    'cafe.eyebrow': ['More than a café', 'ಕೆಫೆಗಿಂತ ಹೆಚ್ಚು'],
    'cafe.title': ['So we designed it to make more than a café.', 'ಆದ್ದರಿಂದ ನಾವು ಕೆಫೆಗಿಂತ ಹೆಚ್ಚಿನದನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿದೆವು.'],
    'cafe.body': ['The new space brings everything together — all under one roof.', 'ಹೊಸ ಸ್ಥಳ ಎಲ್ಲವನ್ನೂ ಒಂದೇ ಸೂರಿನಡಿ ತರುತ್ತದೆ.'],
    'cafe.p1': ['A café that feels like home', 'ಮನೆಯಂತೆ ಅನಿಸುವ ಕೆಫೆ'],
    'cafe.p2': ['Fresh foods, all day', 'ತಾಜಾ ಆಹಾರ, ದಿನವಿಡೀ'],
    'cafe.p3': ['Our own range of coffee products', 'ನಮ್ಮದೇ ಕಾಫಿ ಉತ್ಪನ್ನಗಳ ಶ್ರೇಣಿ'],
    'cafe.cta': ['Visit us', 'ಭೇಟಿ ನೀಡಿ'],
    // join
    'join.title': ['Fresh beginnings, unforgettable aromas.', 'ಹೊಸ ಆರಂಭ, ಮರೆಯಲಾಗದ ಸುವಾಸನೆ.'],
    'join.body': ['Join the list for new roasts, seasonal brews, and quiet invitations to slow down.', 'ಹೊಸ ರೋಸ್ಟ್, ಋತುಮಾನದ ಕಾಫಿ ಮತ್ತು ನಿಧಾನಿಸುವ ಆಹ್ವಾನಗಳಿಗಾಗಿ ಸೇರಿ.'],
    'join.cta': ['Join us', 'ಸೇರಿ'],
    'join.ph': ['you@email.com', 'you@email.com'],
    // footer
    'foot.tagline': ["Here's to fresh beginnings, unforgettable aromas, and countless cups shared together.", 'ಹೊಸ ಆರಂಭ, ಮರೆಯಲಾಗದ ಸುವಾಸನೆ ಮತ್ತು ಹಂಚಿಕೊಂಡ ಅಸಂಖ್ಯ ಕಪ್‌ಗಳಿಗೆ.'],
    'foot.explore': ['Explore', 'ಅನ್ವೇಷಿಸಿ'],
    'foot.visit': ['Visit', 'ಭೇಟಿ'],
    'foot.help': ['Help', 'ಸಹಾಯ'],
    // Roastery page
    'r.eyebrow': ['The Roastery', 'ರೋಸ್ಟರಿ'],
    'r.title': ['From cherry to cup, the slow way.', 'ಚೆರಿಯಿಂದ ಕಪ್‌ವರೆಗೆ, ನಿಧಾನವಾಗಿ.'],
    'r.sub': ['Our roastery is the heart of Bisi Kaapi — where green beans from the Western Ghats become the filter coffee you grew up with. Roasted in small batches, profiled by hand.', 'ರೋಸ್ಟರಿ ಬಿಸಿ ಕಾಫಿಯ ಹೃದಯ — ಪಶ್ಚಿಮ ಘಟ್ಟದ ಹಸಿರು ಬೀನ್ಸ್ ನೀವು ಬೆಳೆದ ಫಿಲ್ಟರ್ ಕಾಫಿಯಾಗುತ್ತದೆ. ಸಣ್ಣ ಬ್ಯಾಚ್‌ಗಳಲ್ಲಿ, ಕೈಯಿಂದ ರೋಸ್ಟ್.'],
    'r.estEyebrow': ['Our estates', 'ನಮ್ಮ ತೋಟಗಳು'],
    'r.estTitle': ['Single-origin, full traceability', 'ಏಕ-ಮೂಲ, ಪೂರ್ಣ ಜಾಡು'],
    // Coffee page
    'c.eyebrow': ['Ground to order', 'ಆರ್ಡರ್‌ಗೆ ತಕ್ಕಂತೆ ಪುಡಿ'],
    'c.title': ['Find your grind.', 'ನಿಮ್ಮ ಗ್ರೈಂಡ್ ಕಂಡುಕೊಳ್ಳಿ.'],
    'c.sub': ['One blend, ground exactly for how you brew. Tell us your method and we’ll dial it in — from whole bean to extra-coarse cold brew.', 'ಒಂದೇ ಬ್ಲೆಂಡ್, ನೀವು ತಯಾರಿಸುವ ರೀತಿಗೆ ತಕ್ಕಂತೆ ಪುಡಿ. ನಿಮ್ಮ ವಿಧಾನ ಹೇಳಿ — ಪೂರ್ಣ ಬೀನ್‌ನಿಂದ ಕೋಲ್ಡ್ ಬ್ರೂವರೆಗೆ.'],
    'c.cta': ['Shop the blend', 'ಬ್ಲೆಂಡ್ ಕೊಳ್ಳಿ'],
    // Shop (accessories) page
    's.eyebrow': ['Accessories', 'ಪರಿಕರಗಳು'],
    's.title': ['Brew it right.', 'ಸರಿಯಾಗಿ ತಯಾರಿಸಿ.'],
    's.sub': ['The gear that turns a kitchen into a coffee corner — brass tumblers, carafes, grinders and presses, chosen and used by our own baristas.', 'ಅಡುಗೆಮನೆಯನ್ನು ಕಾಫಿ ಮೂಲೆಯಾಗಿಸುವ ಸಾಧನಗಳು — ಹಿತ್ತಾಳೆ ಟಂಬ್ಲರ್, ಕ್ಯಾರಫೆ, ಗ್ರೈಂಡರ್. ನಮ್ಮ ಬರಿಸ್ಟಾಗಳೇ ಆಯ್ಕೆ ಮಾಡಿದವು.'],
    's.add': ['Add', 'ಸೇರಿಸಿ'],
    // Consulting page
    'cn.eyebrow': ['Consulting', 'ಸಲಹೆ'],
    'cn.title': ['Bisi Kaapi, for your business.', 'ಬಿಸಿ ಕಾಫಿ, ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕೆ.'],
    'cn.sub': ['Decades of running a beloved café, packaged into a service. We help cafés, offices and hotels brew coffee worth slowing down for.', 'ಪ್ರೀತಿಯ ಕೆಫೆ ನಡೆಸಿದ ದಶಕಗಳ ಅನುಭವ, ಸೇವೆಯಾಗಿ. ಕೆಫೆ, ಕಚೇರಿ ಮತ್ತು ಹೋಟೆಲ್‌ಗಳಿಗೆ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.'],
    'cn.formEyebrow': ['Start a conversation', 'ಸಂಭಾಷಣೆ ಆರಂಭಿಸಿ'],
    'cn.formTitle': ['Tell us what you’re brewing.', 'ನೀವು ಏನು ತಯಾರಿಸುತ್ತಿದ್ದೀರಿ ಹೇಳಿ.'],
    'cn.send': ['Send enquiry', 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ'],
    // Shop app
    'shop.nav.shop': ['Shop', 'ಅಂಗಡಿ'],
    'shop.nav.beans': ['Beans', 'ಬೀನ್ಸ್'],
    'shop.nav.gear': ['Gear', 'ಸಾಧನಗಳು'],
    'shop.nav.gifts': ['Gifts', 'ಉಡುಗೊರೆಗಳು'],
    'shop.admin': ['Admin', 'ನಿರ್ವಹಣೆ'],
    'shop.eyebrow': ['The Bisi Kaapi store', 'ಬಿಸಿ ಕಾಫಿ ಅಂಗಡಿ'],
    'shop.title': ['Beans, gear & little rituals', 'ಬೀನ್ಸ್, ಸಾಧನಗಳು ಮತ್ತು ಪುಟ್ಟ ಆಚರಣೆಗಳು'],
    'shop.category': ['Category', 'ವರ್ಗ'],
    'shop.catAll': ['All', 'ಎಲ್ಲಾ'],
    'shop.roast': ['Roast', 'ರೋಸ್ಟ್'],
    'shop.roastLight': ['Light', 'ಹಗುರ'],
    'shop.roastMedium': ['Medium', 'ಮಧ್ಯಮ'],
    'shop.roastMD': ['Medium-dark', 'ಮಧ್ಯಮ-ಗಾಢ'],
    'shop.roastDark': ['Dark', 'ಗಾಢ'],
    'shop.noResults': ['No products match these filters.', 'ಈ ಫಿಲ್ಟರ್‌ಗಳಿಗೆ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ.'],
    'shop.subTitle': ['Subscribe & save 15%', 'ಚಂದಾದಾರರಾಗಿ, 15% ಉಳಿಸಿ'],
    'shop.subBody': ['Fresh beans at your door, every fortnight.', 'ಪ್ರತಿ ಹದಿನೈದು ದಿನಗಳಿಗೊಮ್ಮೆ ತಾಜಾ ಬೀನ್ಸ್ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ.'],
    'shop.addToCart': ['Add to cart', 'ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ'],
    'shop.back': ['Back to shop', 'ಅಂಗಡಿಗೆ ಹಿಂತಿರುಗಿ'],
    'shop.size': ['Size', 'ಗಾತ್ರ'],
    'shop.addQty': ['Add', 'ಸೇರಿಸಿ'],
    'shop.tastingNotes': ['Tasting notes', 'ರುಚಿ ಟಿಪ್ಪಣಿಗಳು'],
    'shop.tastingBody': ['Jaggery sweetness, roasted almond, a cocoa finish. Pairs beautifully with milk and a spoon of sugar.', 'ಬೆಲ್ಲದ ಸಿಹಿ, ಹುರಿದ ಬಾದಾಮಿ, ಕೋಕೋ ಅಂತ್ಯ. ಹಾಲು ಮತ್ತು ಒಂದು ಚಮಚ ಸಕ್ಕರೆಯೊಂದಿಗೆ ಚೆನ್ನಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.'],
    'shop.howToBrew': ['How to brew', 'ಹೇಗೆ ತಯಾರಿಸುವುದು'],
    'shop.brewBody': ['Use a South-Indian filter: 2 tbsp per cup, fill the upper chamber, let it drip 15–20 minutes, then mix 1:1 with hot milk.', 'ದಕ್ಷಿಣ ಭಾರತದ ಫಿಲ್ಟರ್ ಬಳಸಿ: ಪ್ರತಿ ಕಪ್‌ಗೆ 2 ಚಮಚ, ಮೇಲಿನ ಕೋಣೆ ತುಂಬಿಸಿ, 15–20 ನಿಮಿಷ ಸೋರಲಿ, ನಂತರ ಬಿಸಿ ಹಾಲಿನೊಂದಿಗೆ 1:1 ಬೆರೆಸಿ.'],
    'shop.ship': ['Shipping & freshness', 'ರವಾನೆ ಮತ್ತು ತಾಜಾತನ'],
    'shop.shipBody': ['Roasted to order and shipped within 24 hours. Reaches most cities in 2–4 days.', 'ಆರ್ಡರ್‌ಗೆ ತಕ್ಕಂತೆ ರೋಸ್ಟ್ ಮಾಡಿ 24 ಗಂಟೆಗಳಲ್ಲಿ ರವಾನಿಸಲಾಗುತ್ತದೆ. ಹೆಚ್ಚಿನ ನಗರಗಳಿಗೆ 2–4 ದಿನಗಳಲ್ಲಿ ತಲುಪುತ್ತದೆ.']
  };
  const LANGS = {
    en: 0,
    kn: 1
  };
  window.BK_I18N = STR;
  window.bkTranslate = function (key, lang) {
    const e = STR[key];
    if (!e) return key;
    return e[LANGS[lang] || 0];
  };
  // Bulk-merge overrides from the Content API (content-bridge.js). Mutates
  // STR in place so every existing bkTranslate() call picks up new copy on
  // next render — no need to re-wire call sites.
  window.BK_I18N_MERGE = function (patch) {
    Object.assign(STR, patch);
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/marketing/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/customer/marketing/icons.jsx
try { (() => {
// Lucide-style inline icons (stroke 2, round) — substituting the Lucide set,
// inlined so the kit renders offline. See readme ICONOGRAPHY.
const BK_ICON_PATHS = {
  menu: 'M4 6h16M4 12h16M4 18h16',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  cart: 'M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 7H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowLeft: 'M19 12H5M11 18l-6-6 6-6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  award: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  mapPin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  instagram: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm1 4.5h.01M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
  check: 'M20 6L9 17l-5-5',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = BK_ICON_PATHS[name];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, (d || '').split('M').filter(Boolean).map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: 'M' + seg
  })));
}
window.Icon = Icon;
window.BK_ICON_PATHS = BK_ICON_PATHS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/marketing/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/mobile-app/MobileApp.jsx
try { (() => {
const {
  Button,
  Badge,
  Rating,
  Tag,
  QuantityStepper,
  IconButton
} = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;
const ASSET = '../../../assets';
const ITEMS = [{
  id: 1,
  name: 'Bisi Kaapi',
  desc: 'The classic filter coffee',
  price: 40,
  rating: 4.9,
  count: 820,
  img: 'motif-filter-cup'
}, {
  id: 2,
  name: 'Bella Kaapi',
  desc: 'Jaggery-sweetened',
  price: 50,
  rating: 4.8,
  count: 410,
  img: 'motif-filter-cup'
}, {
  id: 3,
  name: 'Cardamom Latte',
  desc: 'Espresso · cardamom',
  price: 180,
  rating: 4.7,
  count: 192,
  img: 'motif-coffee-bean'
}, {
  id: 4,
  name: 'Cold Brew',
  desc: '18-hour, single origin',
  price: 190,
  rating: 4.6,
  count: 138,
  img: 'motif-coffee-plant'
}];

// ---------- Phone shell ----------
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: '#1c1109',
      borderRadius: 48,
      padding: 11,
      boxShadow: 'var(--shadow-xl)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--color-bg)',
      borderRadius: 38,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 14,
    color: "var(--text-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 11,
      border: '1.5px solid var(--text-primary)',
      borderRadius: 3,
      display: 'inline-block',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1.5,
      background: 'var(--text-primary)',
      borderRadius: 1
    }
  })))), children));
}
function TabBar({
  tab,
  setTab,
  cartCount
}) {
  const tabs = [{
    id: 'home',
    icon: 'coffee'
  }, {
    id: 'menu',
    icon: 'menu'
  }, {
    id: 'orders',
    icon: 'clock'
  }, {
    id: 'profile',
    icon: 'user'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 64,
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      flexShrink: 0
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 8,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 23,
    color: tab === t.id ? 'var(--color-primary)' : 'var(--text-muted)',
    strokeWidth: tab === t.id ? 2.4 : 2
  }))));
}

// ---------- Home ----------
function Home({
  onOpen,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 13,
    color: "var(--text-brand)"
  }), " Jayanagar \xB7 Bengaluru"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--text-primary)',
      marginTop: 2
    }
  }, "Good morning \u2615")), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark.png`,
    width: "40",
    height: "40",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '11px 16px',
      boxShadow: 'var(--shadow-inset)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "Search filter coffee, snacks\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-xl)',
      padding: '20px 22px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Today's pour"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--bk-paper)',
      marginTop: 10,
      maxWidth: '64%'
    }
  }, "Bella Kaapi, on us"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'rgba(255,247,238,0.78)',
      marginTop: 5,
      maxWidth: '64%'
    }
  }, "Free with any order over \u20B9200 today."), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/motif-filter-cup.png`,
    alt: "",
    style: {
      position: 'absolute',
      right: -16,
      bottom: -14,
      height: 130,
      opacity: 0.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      padding: '20px 22px 4px',
      overflowX: 'auto'
    }
  }, ['Kaapi', 'Espresso', 'Cold', 'Snacks'].map((c, i) => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: i === 0,
    onClick: () => {}
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      margin: '10px 0 12px'
    }
  }, "Popular today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ITEMS.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    onClick: () => onOpen(it),
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 11,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bk-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/${it.img}.png`,
    alt: "",
    style: {
      maxHeight: 50
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-primary)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      marginBottom: 4
    }
  }, it.desc), /*#__PURE__*/React.createElement(Rating, {
    value: it.rating,
    size: 12,
    count: it.count
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, "\u20B9", it.price), /*#__PURE__*/React.createElement(IconButton, {
    label: "Add",
    variant: "solid",
    size: "sm",
    onClick: e => {
      e.stopPropagation();
      onAdd(it);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }))))))));
}

// ---------- Item detail ----------
function ItemDetail({
  item,
  onBack,
  onAdd
}) {
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState('Regular');
  const [milk, setMilk] = React.useState('Whole milk');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bk-paper)',
      height: 230,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 14,
      left: 16,
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 19,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/${item.img}.png`,
    alt: "",
    style: {
      maxHeight: 170
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: item.rating,
    size: 14,
    showValue: true,
    count: item.count
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--text-primary)'
    }
  }, "\u20B9", item.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      marginTop: 12
    }
  }, item.desc, " \u2014 brewed strong in a traditional South-Indian filter and finished with frothy boiled milk. Warmth of home, in a steel tumbler."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9
    }
  }, ['Small', 'Regular', 'Large'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: size === s,
    onClick: () => setSize(s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Milk"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, ['Whole milk', 'Oat', 'No milk'].map(m => /*#__PURE__*/React.createElement(Tag, {
    key: m,
    selected: milk === m,
    onClick: () => setMilk(m)
  }, m)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => onAdd(item, qty)
  }, "Add \xB7 \u20B9", item.price * qty)));
}
function Lbl({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 9
    }
  }, children);
}

// ---------- Cart ----------
function Cart({
  cart,
  setCart,
  onBack,
  onPlace
}) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal > 0 ? 29 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 22,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Your order")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 22px'
    }
  }, cart.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginTop: 60
    }
  }, "Your cup's empty \u2014 add something warm."), cart.map((it, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bk-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/${it.img}.png`,
    alt: "",
    style: {
      maxHeight: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--text-primary)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "\u20B9", it.price)), /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "sm",
    value: it.qty,
    onChange: v => setCart(c => c.map((x, i) => i === idx ? {
      ...x,
      qty: v
    } : x))
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderTop: '1px solid var(--border-default)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Subtotal",
    v: subtotal
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Delivery",
    v: delivery
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-default)',
      margin: '10px 0'
    }
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Total",
    v: subtotal + delivery,
    bold: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: cart.length === 0,
    onClick: onPlace
  }, "Place order"))));
}
function Row({
  k,
  v,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: bold ? 16 : 14,
      fontWeight: bold ? 700 : 400,
      color: bold ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: bold ? 18 : 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "\u20B9", v));
}

// ---------- Confirm ----------
function Confirm({
  onDone,
  orderId
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'var(--success-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 44,
    color: "var(--success)",
    strokeWidth: 2.6
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--text-primary)',
      margin: '22px 0 8px'
    }
  }, "Order placed!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      maxWidth: '30ch'
    }
  }, "Your kaapi is being brewed \u2014 and it just landed on the Caf\xE9 Ops board. Order ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, orderId || '#BK-2048'), " \u2014 ready in about 12 minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onDone
  }, "Back to home")));
}
function MobileApp() {
  const [tab, setTab] = React.useState('home');
  const [screen, setScreen] = React.useState('home'); // home | item | cart | confirm
  const [active, setActive] = React.useState(null);
  const [cart, setCart] = React.useState([{
    ...ITEMS[1],
    qty: 1
  }]);
  const [placedId, setPlacedId] = React.useState(null);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const addToCart = (item, qty = 1) => {
    setCart(c => {
      const ex = c.find(x => x.id === item.id);
      if (ex) return c.map(x => x.id === item.id ? {
        ...x,
        qty: x.qty + qty
      } : x);
      return [...c, {
        ...item,
        qty
      }];
    });
    setScreen('home');
  };
  const placeOrder = () => {
    const items = cart.map(i => i.qty > 1 ? `${i.name} ×${i.qty}` : i.name).join(' · ');
    if (window.BKData) {
      const o = window.BKData.addOrder({
        who: 'Mobile app · Guest',
        items,
        source: 'mobile'
      });
      setPlacedId(o.id);
    } else {
      setPlacedId(null);
    }
    setScreen('confirm');
  };
  return /*#__PURE__*/React.createElement(Phone, null, screen === 'home' && /*#__PURE__*/React.createElement(Home, {
    onOpen: it => {
      setActive(it);
      setScreen('item');
    },
    onAdd: it => addToCart(it, 1)
  }), screen === 'item' && /*#__PURE__*/React.createElement(ItemDetail, {
    item: active,
    onBack: () => setScreen('home'),
    onAdd: addToCart
  }), screen === 'cart' && /*#__PURE__*/React.createElement(Cart, {
    cart: cart,
    setCart: setCart,
    onBack: () => setScreen('home'),
    onPlace: placeOrder
  }), screen === 'confirm' && /*#__PURE__*/React.createElement(Confirm, {
    orderId: placedId,
    onDone: () => {
      setCart([]);
      setPlacedId(null);
      setScreen('home');
    }
  }), screen === 'home' && /*#__PURE__*/React.createElement("button", {
    onClick: () => setScreen('cart'),
    style: {
      position: 'absolute',
      right: 18,
      bottom: 80,
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      border: 'none',
      boxShadow: 'var(--shadow-lg)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    size: 24,
    color: "#FFF7EE"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      background: 'var(--bk-bark)',
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      width: 22,
      height: 22,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--color-bg)'
    }
  }, cartCount)), (screen === 'home' || screen === 'cart') && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab,
    cartCount: cartCount
  }));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/mobile-app/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/mobile-app/icons.jsx
try { (() => {
// Lucide-style inline icons (stroke 2, round) — substituting the Lucide set,
// inlined so the kit renders offline. See readme ICONOGRAPHY.
const BK_ICON_PATHS = {
  menu: 'M4 6h16M4 12h16M4 18h16',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  cart: 'M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 7H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowLeft: 'M19 12H5M11 18l-6-6 6-6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  award: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  mapPin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  instagram: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm1 4.5h.01M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
  check: 'M20 6L9 17l-5-5',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = BK_ICON_PATHS[name];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, (d || '').split('M').filter(Boolean).map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: 'M' + seg
  })));
}
window.Icon = Icon;
window.BK_ICON_PATHS = BK_ICON_PATHS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/mobile-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/onboarding/OnboardingApp.jsx
try { (() => {
const {
  Button,
  Input,
  Tag,
  Badge,
  Card
} = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;
const ASSET = '../../../assets';

// ---- Kaapi Club program model ----
const TIERS = [{
  id: 'sapling',
  name: 'Sapling',
  min: 0,
  perks: ['Welcome 50 beans', 'Birthday cup']
}, {
  id: 'brewer',
  name: 'Brewer',
  min: 200,
  perks: ['Free upsize', 'Double-bean weekends', 'Early menu access']
}, {
  id: 'connoisseur',
  name: 'Connoisseur',
  min: 500,
  perks: ['Free 250g bag monthly', 'Free delivery', 'Reserve roasts']
}];
function tierFor(beans) {
  let t = TIERS[0];
  for (const x of TIERS) if (beans >= x.min) t = x;
  return t;
}
function nextTier(beans) {
  return TIERS.find(x => x.min > beans) || null;
}

// ---- Phone shell ----
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: '#1c1109',
      borderRadius: 48,
      padding: 11,
      boxShadow: 'var(--shadow-xl)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--color-bg)',
      borderRadius: 38,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 11,
      border: '1.5px solid var(--text-primary)',
      borderRadius: 3,
      display: 'inline-block',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1.5,
      background: 'var(--text-primary)',
      borderRadius: 1
    }
  }))), children));
}
const lbl = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  color: 'var(--text-accent)',
  marginBottom: 9
};
const disp = s => ({
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: s,
  lineHeight: 1.05,
  color: 'var(--text-primary)',
  margin: 0,
  letterSpacing: '-0.02em'
});

// ---- Progress dots ----
function Steps({
  n,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      padding: '4px 22px 0'
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 3,
      background: i <= n ? 'var(--color-primary)' : 'var(--bk-warm-200)',
      transition: 'background .3s'
    }
  })));
}

// ---- Step 0: Welcome ----
function Welcome({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '12px 26px 26px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark.png`,
    width: "92",
    height: "92",
    alt: "",
    style: {
      animation: 'bk-pop .5s ease'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...disp(34),
      marginTop: 22
    }
  }, "Join the", /*#__PURE__*/React.createElement("br", null), "Kaapi Club"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: '30ch'
    }
  }, "Earn beans on every cup, unlock perks, and make each visit warmer. Slow down \u2014 we'll remember how you like it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 26
    }
  }, [['coffee', 'Earn beans'], ['award', 'Unlock perks'], ['heart', 'Your usual']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--bk-terracotta-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, t))))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onStart
  }, "Get started"), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      marginTop: 14,
      cursor: 'pointer'
    }
  }, "I already have an account"));
}

// ---- Step 1: Sign up ----
function SignUp({
  data,
  set,
  onNext
}) {
  const ok = data.name.trim() && data.phone.trim().length >= 10;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '18px 26px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Step 1 \xB7 You"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...disp(28),
      marginBottom: 6
    }
  }, "Let's get acquainted"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginBottom: 22
    }
  }, "We'll text a one-time code to verify \u2014 no spam, just beans."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Name"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Asha Rao",
    value: data.name,
    onChange: e => set({
      name: e.target.value
    }),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Mobile"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "98860 12345",
    prefix: "+91",
    inputMode: "tel",
    value: data.phone,
    onChange: e => set({
      phone: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Email (optional)"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "asha@email.com",
    value: data.email,
    onChange: e => set({
      email: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 9,
      marginTop: 18,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      marginTop: 3,
      accentColor: 'var(--color-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, "Send me new-roast drops & perks on WhatsApp."))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !ok,
    onClick: onNext,
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    })
  }, "Continue"));
}

// ---- Step 2: Taste profile ----
const BREW = ['Filter Kaapi', 'Espresso', 'Cold brew', 'Pour-over'];
const STRENGTH = ['Light', 'Balanced', 'Strong'];
const MILK = ['With milk', 'Black', 'Oat'];
const FLAV = ['Jaggery', 'Cardamom', 'Chocolatey', 'Nutty', 'Fruity', 'Floral'];
function Taste({
  data,
  set,
  onNext
}) {
  const toggle = (key, v, multi) => {
    if (multi) {
      const arr = data[key];
      set({
        [key]: arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]
      });
    } else set({
      [key]: v
    });
  };
  const Group = ({
    title,
    opts,
    key,
    multi
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, opts.map(o => /*#__PURE__*/React.createElement(Tag, {
    key: o,
    selected: multi ? data[key].includes(o) : data[key] === o,
    onClick: () => toggle(key, o, multi)
  }, o))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '18px 26px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Step 2 \xB7 Taste profile"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...disp(28),
      marginBottom: 6
    }
  }, "How do you take it?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginBottom: 20
    }
  }, "So we can pour your usual and suggest beans you'll love."), /*#__PURE__*/React.createElement(Group, {
    title: "Your brew",
    opts: BREW,
    key: "brew",
    multi: true
  }), /*#__PURE__*/React.createElement(Group, {
    title: "Strength",
    opts: STRENGTH,
    key: "strength"
  }), /*#__PURE__*/React.createElement(Group, {
    title: "Milk",
    opts: MILK,
    key: "milk"
  }), /*#__PURE__*/React.createElement(Group, {
    title: "Flavour notes you love",
    opts: FLAV,
    key: "flavours",
    multi: true
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onNext,
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    })
  }, "Save my profile"));
}

// ---- Step 3: Welcome reward / first order ----
function Reward({
  data,
  onFinish
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '18px 26px 26px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      animation: 'bk-pop .5s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'var(--surface-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/motif-filter-cup.png`,
    alt: "",
    style: {
      height: 88,
      filter: 'brightness(0) invert(1)',
      opacity: 0.9
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -6,
      right: -6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "+50 \u2615"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...disp(30),
      marginTop: 24
    }
  }, "Welcome, ", data.name.split(' ')[0] || 'friend', "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      marginTop: 12,
      maxWidth: '30ch'
    }
  }, "You've earned ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "50 welcome beans"), " and a free ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Bella Kaapi"), " on your first order."), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: 14,
    style: {
      marginTop: 20,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bk-milk)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 20,
    color: "var(--text-accent)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, "FIRSTCUP"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, "Free Bella Kaapi \xB7 auto-applied")))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onFinish
  }, "See my rewards"));
}

// ---- Rewards dashboard ----
function Dashboard({
  data
}) {
  const [beans, setBeans] = React.useState(50);
  const tier = tierFor(beans);
  const next = nextTier(beans);
  const pct = next ? Math.min(100, Math.round((beans - tier.min) / (next.min - tier.min) * 100)) : 100;
  const activity = [{
    t: 'Welcome bonus',
    d: 'Joined Kaapi Club',
    b: '+50',
    when: 'just now'
  }, {
    t: 'Filter Coffee ×2',
    d: 'Jayanagar café',
    b: '+8',
    when: 'mock'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      padding: '20px 22px 26px',
      color: 'var(--text-on-dark)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--bk-brass-300)',
      fontWeight: 600
    }
  }, "Kaapi Club \xB7 ", tier.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26
    }
  }, data.name.split(' ')[0] || 'Member')), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark-cream.png`,
    width: "40",
    height: "40",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 40,
      lineHeight: 1
    }
  }, beans), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'rgba(255,247,238,0.8)'
    }
  }, "beans \u2615")), next && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 6,
      background: 'rgba(255,247,238,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: 'var(--bk-marigold)',
      borderRadius: 6,
      transition: 'width .5s'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'rgba(255,247,238,0.78)',
      marginTop: 7
    }
  }, next.min - beans, " beans to ", /*#__PURE__*/React.createElement("b", null, next.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Your perks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 20
    }
  }, tier.perks.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 13px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Earn more beans"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 20
    }
  }, [['coffee', 'Buy a cup', '1 / ₹10'], ['truck', 'Order online', '2× beans'], ['heart', 'Refer a friend', '+100'], ['star', 'Review a roast', '+15']].map(([ic, t, v]) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setBeans(b => b + 10),
    style: {
      textAlign: 'left',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-primary)',
      marginTop: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-accent)',
      marginTop: 2
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--bk-terracotta-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "coffee",
    size: 16,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, a.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, a.d)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--success)'
    }
  }, a.b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginTop: 18
    }
  }, "Tap an earn tile to simulate earning beans \u2615")));
}
function OnboardingApp() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '',
    phone: '',
    email: '',
    brew: ['Filter Kaapi'],
    strength: 'Balanced',
    milk: 'With milk',
    flavours: ['Jaggery']
  });
  const set = patch => setData(d => ({
    ...d,
    ...patch
  }));
  return /*#__PURE__*/React.createElement(Phone, null, step > 0 && step < 4 && /*#__PURE__*/React.createElement(Steps, {
    n: step - 1,
    total: 3
  }), step === 0 && /*#__PURE__*/React.createElement(Welcome, {
    onStart: () => setStep(1)
  }), step === 1 && /*#__PURE__*/React.createElement(SignUp, {
    data: data,
    set: set,
    onNext: () => setStep(2)
  }), step === 2 && /*#__PURE__*/React.createElement(Taste, {
    data: data,
    set: set,
    onNext: () => setStep(3)
  }), step === 3 && /*#__PURE__*/React.createElement(Reward, {
    data: data,
    onFinish: () => setStep(4)
  }), step === 4 && /*#__PURE__*/React.createElement(Dashboard, {
    data: data
  }));
}
window.OnboardingApp = OnboardingApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/onboarding/OnboardingApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/onboarding/icons.jsx
try { (() => {
// Lucide-style inline icons (stroke 2, round) — substituting the Lucide set,
// inlined so the kit renders offline. See readme ICONOGRAPHY.
const BK_ICON_PATHS = {
  menu: 'M4 6h16M4 12h16M4 18h16',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  cart: 'M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 7H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowLeft: 'M19 12H5M11 18l-6-6 6-6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  award: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  mapPin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  instagram: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm1 4.5h.01M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
  check: 'M20 6L9 17l-5-5',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = BK_ICON_PATHS[name];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, (d || '').split('M').filter(Boolean).map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: 'M' + seg
  })));
}
window.Icon = Icon;
window.BK_ICON_PATHS = BK_ICON_PATHS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/onboarding/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/shared/ProductCard.jsx
try { (() => {
// Bisi Kaapi — shared product card, used by the marketing homepage's
// "From our roastery" grid, the Online Shop grid, and the marketing site's
// Shop (accessories) page. One card markup, three call sites, three sizes.
// Design-system components (Card/Badge/Rating/Button/IconButton) + the Icon
// helper are read off window at render time, matching how every other
// customer-facing file in this project consumes them.
const PRODUCT_CARD_SIZES = {
  lg: {
    imgHeight: 200,
    imgMax: 150,
    pad: 20,
    titleSize: 'var(--text-xl)',
    priceSize: 'var(--text-xl)',
    ratingSize: 15
  },
  md: {
    imgHeight: 180,
    imgMax: 134,
    pad: 18,
    titleSize: 'var(--text-lg)',
    priceSize: 'var(--text-lg)',
    ratingSize: 14
  },
  sm: {
    imgHeight: 168,
    imgMax: 124,
    pad: 16,
    titleSize: '1.25rem',
    priceSize: 'var(--text-lg)',
    ratingSize: 13
  }
};
function ProductCard({
  p,
  size = 'md',
  onOpen,
  onAdd,
  addLabel = 'Add',
  iconOnlyAdd = false,
  assetPath = '../../../assets'
}) {
  const {
    Button,
    Badge,
    Card,
    Rating,
    IconButton
  } = window.BisiKaapiDesignSystem_2fbe5e;
  const Icon = window.Icon;
  const s = PRODUCT_CARD_SIZES[size] || PRODUCT_CARD_SIZES.md;
  return /*#__PURE__*/React.createElement(Card, {
    "data-bk-section": p.id ? `product-${p.id}` : undefined,
    variant: "raised",
    interactive: true,
    padding: 0,
    style: {
      overflow: 'hidden'
    },
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bk-paper)',
      height: s.imgHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, p.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone
  }, p.tag)), /*#__PURE__*/React.createElement("img", {
    src: `${assetPath}/illustrations/${p.img}.png`,
    alt: p.name,
    style: {
      maxHeight: s.imgMax
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: s.pad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, p.origin), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s.titleSize,
      margin: '4px 0 8px',
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    size: s.ratingSize,
    count: p.count
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: s.priceSize,
      color: 'var(--text-primary)'
    }
  }, "\u20B9", p.price), onAdd && (iconOnlyAdd ? /*#__PURE__*/React.createElement(IconButton, {
    label: "Add to cart",
    variant: "soft",
    onClick: e => {
      e.stopPropagation();
      onAdd(p);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18
  })) : /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    }),
    onClick: e => {
      e.stopPropagation();
      onAdd(p);
    }
  }, addLabel)))));
}
window.ProductCard = ProductCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/shared/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/shared/content-bridge.js
try { (() => {
// Bisi Kaapi — content bridge: wires the marketing site + shop to the real
// Content API (server/src/routes/content.ts) so copy edited in the Content
// admin panel shows up live, with zero code changes needed to publish.
// Falls back to the static defaults (i18n.js / products.js) when the API
// isn't reachable — so every page still works with no backend running.
(function () {
  // Single externalized source of truth for the API URL — see /config.js
  // (loaded before this file). Never hardcode an API URL here.
  const API_BASE = window.BK_CONFIG && window.BK_CONFIG.apiBase || 'http://localhost:4000';
  const subs = new Set();
  function notify() {
    subs.forEach(fn => {
      try {
        fn();
      } catch (e) {}
    });
  }
  function subscribe(fn) {
    subs.add(fn);
    return () => subs.delete(fn);
  }
  async function loadStrings() {
    try {
      const res = await fetch(API_BASE + '/api/content/strings');
      if (!res.ok) return false;
      const rows = await res.json();
      if (window.BK_I18N_MERGE && rows.length) {
        const patch = {};
        rows.forEach(r => {
          patch[r.key] = [r.en, r.kn];
        });
        window.BK_I18N_MERGE(patch);
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  async function loadProducts() {
    try {
      const res = await fetch(API_BASE + '/api/content/products');
      if (!res.ok) return false;
      const rows = await res.json();
      if (rows.length) {
        window.BK_PRODUCTS = rows.map(r => ({
          ...r,
          price: Number(r.price),
          rating: Number(r.rating),
          count: Number(r.count)
        }));
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  async function loadLists() {
    try {
      const res = await fetch(API_BASE + '/api/content/lists');
      if (!res.ok) return false;
      const rows = await res.json();
      if (rows.length) {
        window.BK_LISTS = window.BK_LISTS || {};
        rows.forEach(r => {
          window.BK_LISTS[r.key] = r.items;
        });
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  let connected = false;
  async function refresh() {
    const [s, p, l] = await Promise.all([loadStrings(), loadProducts(), loadLists()]);
    connected = !!(s || p || l);
    notify();
    return connected;
  }
  window.BK_CONTENT = {
    API_BASE,
    subscribe,
    refresh,
    isConnected: () => connected
  };
  refresh();

  // Cross-window bridge for the Content admin panel's live-preview iframe.
  window.addEventListener('message', e => {
    if (!e.data || typeof e.data !== 'object') return;
    if (e.data.type === 'bk-content-refresh') refresh();
    if (e.data.type === 'bk-goto-page' && window.BK_GOTO_PAGE) window.BK_GOTO_PAGE(e.data.page);
  });

  // Edit mode (?content_admin=1): outline content-bearing sections and turn
  // clicks into a postMessage to the parent admin panel instead of navigating.
  const params = new URLSearchParams(location.search);
  if (params.get('content_admin') === '1') {
    document.documentElement.classList.add('bk-content-admin');
    const style = document.createElement('style');
    style.textContent = ['.bk-content-admin [data-bk-section] { position: relative; cursor: pointer; outline: 1px dashed transparent; outline-offset: -1px; }', '.bk-content-admin [data-bk-section]:hover { outline: 2px dashed rgba(196,120,60,0.85); outline-offset: -2px; }', '.bk-content-admin [data-bk-section].bk-active { outline: 2px solid #A8481F; outline-offset: -2px; }'].join('\n');
    document.head.appendChild(style);
    document.addEventListener('click', e => {
      const el = e.target && e.target.closest && e.target.closest('[data-bk-section]');
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.bk-active').forEach(x => x.classList.remove('bk-active'));
      el.classList.add('bk-active');
      window.parent.postMessage({
        type: 'bk-section-click',
        section: el.getAttribute('data-bk-section')
      }, '*');
    }, true);

    // Clicks inside a data-bk-section block are intercepted above (so admin
    // clicks select-for-editing instead of firing Add-to-cart / nav /
    // language toggle etc.) — call that out so it isn't mistaken for a bug.
    document.addEventListener('DOMContentLoaded', () => {
      const banner = document.createElement('div');
      banner.textContent = 'Preview mode — click a highlighted block to edit its content (buttons & links are disabled here)';
      banner.style.cssText = 'position:fixed;bottom:14px;left:50%;transform:translateX(-50%);z-index:99999;background:#2A1608;color:#FFF7EE;font:600 12px system-ui,sans-serif;padding:8px 14px;border-radius:999px;box-shadow:0 4px 16px rgba(0,0,0,.25);pointer-events:none;white-space:nowrap;';
      document.body.appendChild(banner);
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/shared/content-bridge.js", error: String((e && e.message) || e) }); }

// ui_kits/customer/shared/lists-defaults.js
try { (() => {
// Bisi Kaapi — structured copy list defaults (fallback for content-bridge.js
// and the Content admin panel). Mirrors server/src/schema.sql `content_lists`
// seed: roastery process steps, coffee grind types, consulting services.
(function () {
  window.BK_LISTS_DEFAULT = {
    'roastery.steps': [{
      t: 'Sourced',
      d: 'Hand-picked cherries from 12 estates across Chikmagalur, Coorg & Baba Budangiri.',
      img: 'coffee-branch-color'
    }, {
      t: 'Roasted',
      d: 'Small 12kg batches, profiled by hand each week — never more than the week can drink.',
      img: 'espresso-machine'
    }, {
      t: 'Rested & ground',
      d: 'Rested 48 hours to settle, then ground to order for your brew method.',
      img: 'hand-grinder'
    }],
    'coffee.grinds': [{
      t: 'Whole Bean',
      d: 'Grind fresh at home for the brightest cup.',
      use: 'Any method',
      badge: 'Freshest',
      tone: 'accent'
    }, {
      t: 'South-Indian Filter',
      d: 'Medium-fine, built for the steel davara filter.',
      use: 'Filter / decoction',
      badge: 'Signature',
      tone: 'brand'
    }, {
      t: 'Espresso Fine',
      d: 'Tight, even grind for 9-bar extraction.',
      use: 'Espresso machine',
      badge: null,
      tone: null
    }, {
      t: 'Moka & Stovetop',
      d: 'A touch coarser than espresso, for the moka pot.',
      use: 'Moka pot',
      badge: null,
      tone: null
    }, {
      t: 'French Press',
      d: 'Coarse grind that won\u2019t cloud your cup.',
      use: 'Press / immersion',
      badge: null,
      tone: null
    }, {
      t: 'Cold Brew Coarse',
      d: 'Extra-coarse for a smooth 18-hour steep.',
      use: 'Cold brew',
      badge: 'New',
      tone: 'brand'
    }],
    'consulting.services': [{
      icon: 'coffee',
      t: 'Café Setup',
      d: 'End-to-end build — layout, equipment, sourcing and the first pour.'
    }, {
      icon: 'leaf',
      t: 'Menu & Recipe Design',
      d: 'A signature menu rooted in South-Indian coffee, tuned to your audience.'
    }, {
      icon: 'award',
      t: 'Barista Training',
      d: 'Hands-on programs from filter decoction to latte art.'
    }, {
      icon: 'truck',
      t: 'Wholesale Bean Supply',
      d: 'Freshly roasted beans, delivered on your schedule with full traceability.'
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/shared/lists-defaults.js", error: String((e && e.message) || e) }); }

// ui_kits/customer/shared/products.js
try { (() => {
// Bisi Kaapi — canonical product catalogue (fallback defaults).
// Mirrors server/src/schema.sql `content_products` seed. Used by the
// marketing homepage (featured picks), the shop, and the Content admin panel
// as the offline/no-backend fallback. content-bridge.js overwrites
// window.BK_PRODUCTS with live data from the API when it's reachable.
(function () {
  window.BK_PRODUCTS_DEFAULT = [{
    id: 1,
    name: 'Mysore Filter Blend',
    cat: 'Beans',
    tag: 'Bestseller',
    tone: 'accent',
    origin: 'Chikmagalur',
    roast: 'Medium',
    price: 240,
    rating: 4.8,
    count: 212,
    img: 'motif-coffee-bean',
    featured: true,
    sort_order: 1
  }, {
    id: 2,
    name: 'Coorg Single Estate',
    cat: 'Beans',
    tag: 'New',
    tone: 'brand',
    origin: 'Coorg',
    roast: 'Medium-dark',
    price: 320,
    rating: 4.7,
    count: 96,
    img: 'motif-coffee-plant',
    featured: true,
    sort_order: 2
  }, {
    id: 3,
    name: 'Peaberry Reserve',
    cat: 'Beans',
    tag: null,
    tone: null,
    origin: 'Baba Budangiri',
    roast: 'Light',
    price: 420,
    rating: 4.9,
    count: 64,
    img: 'motif-coffee-bean',
    featured: false,
    sort_order: 3
  }, {
    id: 4,
    name: 'Davara Tumbler Set',
    cat: 'Gear',
    tag: null,
    tone: null,
    origin: 'Brass · serves 2',
    roast: '—',
    price: 690,
    rating: 4.9,
    count: 154,
    img: 'motif-filter-cup',
    featured: true,
    sort_order: 4
  }, {
    id: 5,
    name: 'Pour-over Carafe',
    cat: 'Gear',
    tag: 'Low stock',
    tone: 'warning',
    origin: 'Glass · 600ml',
    roast: '—',
    price: 1290,
    rating: 4.6,
    count: 38,
    img: 'chemex',
    featured: false,
    sort_order: 5
  }, {
    id: 6,
    name: 'Filter Decoction Press',
    cat: 'Gear',
    tag: null,
    tone: null,
    origin: 'Stainless steel',
    roast: '—',
    price: 540,
    rating: 4.5,
    count: 71,
    img: 'hand-grinder',
    featured: false,
    sort_order: 6
  }];
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/shared/products.js", error: String((e && e.message) || e) }); }

// ui_kits/customer/shop/ShopApp.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Rating,
  Tag,
  Tabs,
  Accordion,
  QuantityStepper,
  IconButton,
  Divider
} = window.BisiKaapiDesignSystem_2fbe5e;
const Icon = window.Icon;
const ASSET = '../../../assets';
const shopWrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 36px'
};
const overlineS = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-xs)',
  fontWeight: 700,
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  color: 'var(--text-brand)'
};

// Catalogue is fetched live from the Content API by content-bridge.js
// (window.BK_PRODUCTS); falls back to the static defaults when offline.
function getProducts() {
  return window.BK_PRODUCTS || window.BK_PRODUCTS_DEFAULT || [];
}
function TopBar({
  cart,
  lang,
  setLang,
  t
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...shopWrap,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      height: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark.png`,
    alt: "",
    width: "38",
    height: "38"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 23,
      color: 'var(--text-primary)'
    }
  }, "Bisi Kaapi")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      marginLeft: 14
    }
  }, [['shop.nav.shop', true], ['shop.nav.beans', false], ['shop.nav.gear', false], ['shop.nav.gifts', false]].map(([k, active]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 500,
      color: active ? 'var(--text-brand)' : 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, t(k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: 2
    }
  }, [['en', 'EN'], ['kn', 'ಕ']].map(([lc, lab]) => /*#__PURE__*/React.createElement("button", {
    key: lc,
    onClick: () => setLang(lc),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontFamily: lc === 'kn' ? 'var(--font-script)' : 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 700,
      background: lang === lc ? 'var(--color-primary)' : 'transparent',
      color: lang === lc ? '#FFF7EE' : 'var(--text-secondary)'
    }
  }, lab))), /*#__PURE__*/React.createElement("a", {
    href: "../../ops/shop-admin/index.html",
    onClick: e => {
      e.preventDefault();
      window.location.assign('../../ops/shop-admin/index.html' + window.location.search);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-brand)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 16
  }), " ", t('shop.admin')), /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -7,
      right: -9,
      background: 'var(--color-primary)',
      color: '#fff',
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      width: 17,
      height: 17,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cart)))));
}
function FilterSidebar({
  cat,
  setCat,
  roast,
  setRoast,
  t
}) {
  const CATS = [['All', 'shop.catAll'], ['Beans', 'shop.nav.beans'], ['Gear', 'shop.nav.gear'], ['Gifts', 'shop.nav.gifts']];
  const ROASTS = [['Light', 'shop.roastLight'], ['Medium', 'shop.roastMedium'], ['Medium-dark', 'shop.roastMD'], ['Dark', 'shop.roastDark']];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 224,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: overlineS
  }, t('shop.category')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 14
    }
  }, CATS.map(([c, k]) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      textAlign: 'left',
      border: 'none',
      background: cat === c ? 'var(--bk-terracotta-100)' : 'transparent',
      color: cat === c ? 'var(--text-brand)' : 'var(--text-secondary)',
      fontWeight: cat === c ? 600 : 500,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      padding: '9px 13px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    }
  }, t(k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    style: overlineS
  }, t('shop.roast')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 14
    }
  }, ROASTS.map(([r, k]) => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    selected: roast === r,
    onClick: () => setRoast(roast === r ? null : r)
  }, t(k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)'
    }
  }, t('shop.subTitle')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      opacity: 0.82,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, t('shop.subBody'))));
}
function ProductGrid({
  products,
  onOpen,
  onAdd,
  t
}) {
  if (!products.length) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: 'center',
        padding: '70px 20px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)'
      }
    }, t('shop.noResults'));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      flex: 1
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    size: "md",
    assetPath: ASSET,
    onOpen: () => onOpen(p),
    onAdd: () => onAdd(),
    iconOnlyAdd: true
  })));
}
function ProductDetail({
  p,
  onBack,
  onAdd,
  t
}) {
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState('250g');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      cursor: 'pointer',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 16
  }), " ", t('shop.back')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bk-paper)',
      borderRadius: 'var(--radius-xl)',
      height: 440,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/${p.img}.png`,
    alt: p.name,
    style: {
      maxHeight: 320
    }
  })), /*#__PURE__*/React.createElement("div", null, p.tag && /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone
  }, p.tag), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '2.6rem',
      lineHeight: 1.05,
      color: 'var(--text-primary)',
      margin: '12px 0 8px'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    size: 16,
    showValue: true,
    count: p.count
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginTop: 16
    }
  }, p.origin, " \xB7 ", p.roast, " roast. Small-batch roasted in the Western Ghats \u2014 bright, full-bodied, and built for a strong South-Indian filter decoction."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: '2rem',
      color: 'var(--text-primary)',
      margin: '20px 0'
    }
  }, "\u20B9", p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      ...overlineS,
      marginBottom: 10
    }
  }, t('shop.size')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginBottom: 22
    }
  }, ['250g', '500g', '1kg'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: size === s,
    onClick: () => setSize(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "cart",
      size: 18
    }),
    onClick: () => onAdd(qty),
    style: {
      flex: 1
    }
  }, t('shop.addQty'), " ", qty, " \xB7 \u20B9", p.price * qty)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: ['tasting'],
    items: [{
      id: 'tasting',
      title: t('shop.tastingNotes'),
      content: t('shop.tastingBody')
    }, {
      id: 'brew',
      title: t('shop.howToBrew'),
      content: t('shop.brewBody')
    }, {
      id: 'ship',
      title: t('shop.ship'),
      content: t('shop.shipBody')
    }]
  })))));
}
function ShopApp() {
  const [cart, setCart] = React.useState(2);
  const [cat, setCat] = React.useState('All');
  const [roast, setRoast] = React.useState(null);
  const [active, setActive] = React.useState(null);
  const [lang, setLang] = React.useState('en');
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  const t = React.useCallback(k => window.bkTranslate(k, lang), [lang]);
  React.useEffect(() => window.BK_CONTENT ? window.BK_CONTENT.subscribe(forceUpdate) : undefined, []);
  const all = getProducts();
  const products = all.filter(p => (cat === 'All' || p.cat === cat) && (!roast || p.roast === roast));
  const add = (n = 1) => setCart(c => c + n);
  return /*#__PURE__*/React.createElement("div", {
    "data-bk-section": "shop-catalog",
    style: {
      fontFamily: 'var(--font-sans)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    cart: cart,
    lang: lang,
    setLang: setLang,
    t: t
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...shopWrap,
      padding: '34px 36px 70px'
    }
  }, active ? /*#__PURE__*/React.createElement(ProductDetail, {
    p: active,
    onBack: () => setActive(null),
    onAdd: add,
    t: t
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: overlineS
  }, t('shop.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '2.6rem',
      color: 'var(--text-primary)',
      margin: '10px 0 0'
    }
  }, t('shop.title'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(FilterSidebar, {
    cat: cat,
    setCat: setCat,
    roast: roast,
    setRoast: setRoast,
    t: t
  }), /*#__PURE__*/React.createElement(ProductGrid, {
    products: products,
    onOpen: setActive,
    onAdd: add,
    t: t
  })))));
}
window.ShopApp = ShopApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/shop/ShopApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer/shop/icons.jsx
try { (() => {
// Lucide-style inline icons (stroke 2, round) — substituting the Lucide set,
// inlined so the kit renders offline. See readme ICONOGRAPHY.
const BK_ICON_PATHS = {
  menu: 'M4 6h16M4 12h16M4 18h16',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  cart: 'M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 7H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowLeft: 'M19 12H5M11 18l-6-6 6-6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  award: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  mapPin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  instagram: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm1 4.5h.01M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
  check: 'M20 6L9 17l-5-5',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = BK_ICON_PATHS[name];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, (d || '').split('M').filter(Boolean).map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: 'M' + seg
  })));
}
window.Icon = Icon;
window.BK_ICON_PATHS = BK_ICON_PATHS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer/shop/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/cafe-portal/CafePortal.jsx
try { (() => {
const {
  Shell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const NAV = [{
  icon: 'grid',
  label: 'Overview',
  view: 'overview'
}, {
  icon: 'list',
  label: 'Orders',
  badge: 4,
  view: 'orders'
}, {
  icon: 'coffee',
  label: 'Menu & 86',
  badge: 2,
  view: 'menu'
}, {
  icon: 'users',
  label: 'Shifts',
  view: 'shifts'
}, {
  icon: 'box',
  label: 'Inventory',
  view: 'inventory'
}, {
  icon: 'dollar',
  label: 'Sales',
  view: 'sales'
}];
const ORDER_FLOW = ['new', 'brewing', 'ready'];
const ORDER_META = {
  new: {
    tone: 'info',
    label: 'New'
  },
  brewing: {
    tone: 'warn',
    label: 'Brewing'
  },
  ready: {
    tone: 'good',
    label: 'Ready'
  }
};
function CafePortal() {
  const orders = window.useBK(s => s.orders);
  const [newOrder, setNewOrder] = React.useState({
    who: '',
    items: ''
  });
  const advance = id => window.BKData.advanceOrder(id);
  const clear = id => window.BKData.clearOrder(id);
  const placeWalkIn = () => {
    if (!newOrder.who.trim() || !newOrder.items.trim()) return;
    window.BKData.addOrder({
      who: newOrder.who.trim(),
      items: newOrder.items.trim(),
      source: 'walkin'
    });
    setNewOrder({
      who: '',
      items: ''
    });
  };
  const SOURCE_LABEL = {
    walkin: null,
    online: 'Online',
    zomato: 'Zomato',
    swiggy: 'Swiggy',
    mobile: 'App'
  };
  const [menu, setMenu] = React.useState([{
    name: 'Bisi Kaapi',
    on: true
  }, {
    name: 'Bella Kaapi',
    on: true
  }, {
    name: 'Masala Dosa',
    on: true
  }, {
    name: 'Filter Coffee Cake',
    on: false
  }, {
    name: 'Cold Brew',
    on: true
  }, {
    name: 'Mysore Bonda',
    on: false
  }]);
  const [shifts, setShifts] = React.useState([{
    id: 's1',
    name: 'Asha R',
    role: 'Barista',
    in: '06:30',
    hrs: 3.1,
    tone: 'good'
  }, {
    id: 's2',
    name: 'Bala K',
    role: 'Barista',
    in: '07:00',
    hrs: 2.6,
    tone: 'good'
  }, {
    id: 's3',
    name: 'Chitra M',
    role: 'Floor',
    in: '06:45',
    hrs: 2.9,
    tone: 'good'
  }, {
    id: 's4',
    name: 'Dev P',
    role: 'Kitchen',
    in: '05:30',
    hrs: 9.2,
    tone: 'warn'
  }]);
  const [offShift, setOffShift] = React.useState([]);
  const [newShift, setNewShift] = React.useState({
    name: '',
    role: 'Barista'
  });
  const nowHM = () => {
    const d = new Date();
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  };
  const clockIn = () => {
    if (!newShift.name.trim()) return;
    setShifts(s => [...s, {
      id: 's' + Date.now(),
      name: newShift.name.trim(),
      role: newShift.role,
      in: nowHM(),
      hrs: 0,
      tone: 'good'
    }]);
    setNewShift({
      name: '',
      role: 'Barista'
    });
  };
  const clockOut = id => {
    setShifts(s => {
      const leaving = s.find(x => x.id === id);
      if (leaving) setOffShift(o => [{
        ...leaving,
        out: nowHM()
      }, ...o].slice(0, 8));
      return s.filter(x => x.id !== id);
    });
  };
  const bumpHrs = (id, d) => setShifts(s => s.map(x => x.id === id ? {
    ...x,
    hrs: Math.max(0, +(x.hrs + d).toFixed(1)),
    tone: x.hrs + d > 8 ? 'warn' : 'good'
  } : x));
  const invTone = pct => pct < 40 ? 'bad' : pct < 70 ? 'warn' : 'good';
  const [inventory, setInventory] = React.useState([{
    id: 'i1',
    name: 'Filter coffee powder',
    pct: 28
  }, {
    id: 'i2',
    name: 'Full-cream milk',
    pct: 64
  }, {
    id: 'i3',
    name: 'Jaggery',
    pct: 82
  }, {
    id: 'i4',
    name: 'Paper cups (12oz)',
    pct: 47
  }]);
  const [newItem, setNewItem] = React.useState('');
  const restock = id => setInventory(inv => inv.map(x => x.id === id ? {
    ...x,
    pct: 100
  } : x));
  const setPct = (id, pct) => setInventory(inv => inv.map(x => x.id === id ? {
    ...x,
    pct: Math.max(0, Math.min(100, pct))
  } : x));
  const removeItem = id => setInventory(inv => inv.filter(x => x.id !== id));
  const addItem = () => {
    if (!newItem.trim()) return;
    setInventory(inv => [...inv, {
      id: 'i' + Date.now(),
      name: newItem.trim(),
      pct: 100
    }]);
    setNewItem('');
  };
  const off = menu.filter(m => !m.on).length;
  const live = window.useBK(s => s.kpis);
  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [{
    icon: 'dollar',
    value: '₹' + live.cafeSales.toLocaleString('en-IN'),
    label: 'Sales today',
    delta: '+9%'
  }, {
    icon: 'list',
    value: String(orders.length),
    label: 'Open orders'
  }, {
    icon: 'receipt',
    value: '₹186',
    label: 'Avg ticket',
    delta: '+4%'
  }, {
    icon: 'coffee',
    value: String(off),
    label: 'Items 86’d',
    down: true,
    delta: off ? 'check' : 'clear'
  }, {
    icon: 'users',
    value: String(shifts.length),
    label: 'On shift'
  }];
  const toneBg = {
    bad: 'var(--danger)',
    warn: 'var(--warning)',
    good: 'var(--success)'
  };
  const [view, setView] = React.useState('overview');
  const nav = NAV.map(n => ({
    ...n,
    active: n.view === view
  }));
  const show = v => view === 'overview' || view === v;
  const HEAD = {
    overview: 'Front of house',
    orders: 'Live orders',
    menu: 'Menu & 86',
    shifts: 'Shifts & time',
    inventory: 'Inventory',
    sales: 'Sales'
  };
  return /*#__PURE__*/React.createElement(Shell, {
    portal: "Caf\xE9 Ops \xB7 Jayanagar",
    tagline: "Service live",
    headerTitle: HEAD[view],
    headerRight: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "good",
      pulse: true
    }, "Lunch rush"),
    nav: nav,
    onNav: setView
  }, (view === 'overview' || view === 'sales') && /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis.map((x, i) => kpiOv[i] != null ? {
      ...x,
      value: kpiOv[i]
    } : x),
    editable: kpiManual,
    onEdit: (i, v) => setKpiOv(o => ({
      ...o,
      [i]: v
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: view === 'overview' ? '1.6fr 1fr' : '1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Live orders",
    icon: "list",
    pad: 14,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, "tap to advance"),
    style: {
      display: show('orders') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, orders.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, o.id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, o.who)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, o.items), SOURCE_LABEL[o.source] && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--text-accent)',
      background: 'var(--bk-brass-100)',
      padding: '2px 8px',
      borderRadius: 999
    }
  }, SOURCE_LABEL[o.source]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: o.min >= 6 ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, o.min, "m"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: ORDER_META[o.status].tone,
    pulse: o.status === 'brewing'
  }, ORDER_META[o.status].label), o.status === 'ready' ? /*#__PURE__*/React.createElement("button", {
    onClick: () => clear(o.id),
    style: btn('var(--success)')
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "check",
    size: 15,
    color: "#fff"
  }), " Done") : /*#__PURE__*/React.createElement("button", {
    onClick: () => advance(o.id),
    style: btn('var(--color-primary)')
  }, "Advance ", /*#__PURE__*/React.createElement(PIcon, {
    name: "arrowRight",
    size: 15,
    color: "#fff"
  })))), orders.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "No open orders \u2014 all caught up."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newOrder.who,
    onChange: e => setNewOrder(n => ({
      ...n,
      who: e.target.value
    })),
    placeholder: "Table / name",
    style: {
      width: 140,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: newOrder.items,
    onChange: e => setNewOrder(n => ({
      ...n,
      items: e.target.value
    })),
    placeholder: "Items \u2014 e.g. Bisi Kaapi \xD72",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: placeWalkIn,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 13
  }), " New order")))), /*#__PURE__*/React.createElement(Panel, {
    title: "Inventory \u2014 caf\xE9 store",
    icon: "box",
    pad: 16,
    action: /*#__PURE__*/React.createElement(StatusPill, {
      tone: inventory.some(it => invTone(it.pct) === 'bad') ? 'bad' : 'good'
    }, inventory.filter(it => invTone(it.pct) === 'bad').length, " critical"),
    style: {
      display: show('inventory') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, inventory.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      marginBottom: 5,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 500,
      flex: 1
    }
  }, it.name), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    max: "100",
    value: it.pct,
    onChange: e => setPct(it.id, +e.target.value),
    style: {
      width: 48,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 5px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      textAlign: 'right'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, "%"), /*#__PURE__*/React.createElement("button", {
    onClick: () => restock(it.id),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-brand)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Restock"), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeItem(it.id),
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: '4px 2px'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "x",
    size: 14,
    color: "var(--text-muted)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 6,
      background: 'var(--bk-warm-150)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: it.pct + '%',
      height: '100%',
      background: toneBg[invTone(it.pct)],
      borderRadius: 6
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newItem,
    onChange: e => setNewItem(e.target.value),
    placeholder: "Add stock item\u2026",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addItem,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 13
  }), " Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, (view === 'overview' || view === 'sales') && /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI Service Insight",
    buildPrompt: () => `You are the café operations assistant for Bisi Kaapi (Jayanagar outlet). Right now: ${orders.length} open orders, ${off} menu items 86'd (Filter Coffee Cake, Mysore Bonda), filter coffee powder at 28% (critical), milk at 64%, one barista on a 9.2h overtime shift, sales ₹48,260 (+9%). Give exactly 3 short operational insights for the floor manager, each with one action, as plain-text bullets starting with "• ".`,
    fallback: `• Filter coffee powder is at 28% during the lunch rush — pull a 1kg pack from the back now or you'll 86 your signature kaapi.
• Two kitchen items are 86'd (cake, bonda); push the barista-led specials so tickets keep moving.
• Dev P is into overtime at 9.2h — schedule a break and line up the evening reliever.`
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Menu availability (86)",
    icon: "coffee",
    pad: 14,
    style: {
      display: show('menu') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, menu.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 11px',
      borderRadius: 'var(--radius-sm)',
      background: m.on ? 'var(--bk-paper)' : 'var(--danger-soft)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-primary)',
      textDecoration: m.on ? 'none' : 'line-through',
      opacity: m.on ? 1 : 0.7
    }
  }, m.name), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenu(mm => mm.map((x, j) => j === i ? {
      ...x,
      on: !x.on
    } : x)),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 700,
      background: m.on ? 'var(--success-soft)' : 'var(--bk-warm-100)',
      color: m.on ? '#3F5536' : 'var(--text-muted)'
    }
  }, m.on ? 'Available' : '86’d'))))), /*#__PURE__*/React.createElement(Panel, {
    title: "On shift \u2014 time tracking",
    icon: "clock",
    pad: 14,
    style: {
      display: show('shifts') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, shifts.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--bk-terracotta-100)',
      color: 'var(--text-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      flexShrink: 0
    }
  }, s.name.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, s.role, " \xB7 in ", s.in)), /*#__PURE__*/React.createElement("button", {
    onClick: () => bumpHrs(s.id, -0.5),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      width: 22,
      height: 22,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\u2212"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: s.tone
  }, s.hrs, "h"), /*#__PURE__*/React.createElement("button", {
    onClick: () => bumpHrs(s.id, 0.5),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      width: 22,
      height: 22,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "+"), /*#__PURE__*/React.createElement("button", {
    onClick: () => clockOut(s.id),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-brand)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Clock out"))), shifts.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Nobody's clocked in."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 6,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newShift.name,
    onChange: e => setNewShift(n => ({
      ...n,
      name: e.target.value
    })),
    placeholder: "Name",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: newShift.role,
    onChange: e => setNewShift(n => ({
      ...n,
      role: e.target.value
    })),
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 8px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }, ['Barista', 'Floor', 'Kitchen', 'Cashier'].map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r
  }, r))), /*#__PURE__*/React.createElement("button", {
    onClick: clockIn,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 13
  }), " Clock in")), offShift.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, "Clocked out today"), offShift.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      padding: '3px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, s.name, " \xB7 ", s.role), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, s.in, "\u2013", s.out, " \xB7 ", s.hrs, "h")))))))));
}
function btn(bg) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    border: 'none',
    background: bg,
    color: '#FFF7EE',
    borderRadius: 'var(--radius-sm)',
    padding: '7px 11px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 12.5,
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  };
}
window.CafePortal = CafePortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/cafe-portal/CafePortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/crm-portal/CRMPortal.jsx
try { (() => {
const {
  Shell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const NAV = [{
  icon: 'grid',
  label: 'Overview',
  view: 'overview'
}, {
  icon: 'megaphone',
  label: 'Campaigns',
  badge: 3,
  view: 'campaigns'
}, {
  icon: 'users',
  label: 'Segments',
  view: 'segments'
}, {
  icon: 'refresh',
  label: 'Journeys',
  view: 'journeys'
}, {
  icon: 'award',
  label: 'Offers',
  view: 'offers'
}];
const CH_TONE = {
  Email: 'info',
  WhatsApp: 'good',
  Push: 'warn',
  SMS: 'idle',
  Instagram: 'brand'
};
function CRMPortal() {
  const live = window.useBK ? window.useBK(s => s.kpis) : null;
  const [view, setView] = React.useState('overview');
  const [toast, setToast] = React.useState(null);
  const nav = NAV.map(n => ({
    ...n,
    active: n.view === view
  }));
  const flash = m => {
    setToast(m);
    setTimeout(() => setToast(null), 1900);
  };
  const [campaigns, setCampaigns] = React.useState([{
    id: 1,
    name: 'New Coorg roast drop',
    ch: 'WhatsApp',
    status: 'live',
    sent: 12400,
    open: 62,
    ctr: 14
  }, {
    id: 2,
    name: 'Monsoon filter offer',
    ch: 'Email',
    status: 'live',
    sent: 8600,
    open: 38,
    ctr: 6
  }, {
    id: 3,
    name: 'Kaapi Club · double beans',
    ch: 'Push',
    status: 'live',
    sent: 5200,
    open: 51,
    ctr: 11
  }, {
    id: 4,
    name: 'Weekend brunch invite',
    ch: 'Instagram',
    status: 'draft',
    sent: 0,
    open: 0,
    ctr: 0
  }, {
    id: 5,
    name: 'Win-back · 30 days idle',
    ch: 'SMS',
    status: 'scheduled',
    sent: 0,
    open: 0,
    ctr: 0
  }]);
  const segments = [{
    name: 'Kaapi Club members',
    size: 3421,
    desc: 'Active loyalty members'
  }, {
    name: 'Filter loyalists',
    size: 1890,
    desc: 'Order filter coffee weekly'
  }, {
    name: 'Lapsed (30d+)',
    size: 640,
    desc: 'No order in a month',
    warn: true
  }, {
    name: 'High-value (₹2k+/mo)',
    size: 410,
    desc: 'Top spenders'
  }, {
    name: 'New this month',
    size: 280,
    desc: 'Joined in last 30 days'
  }];
  const journeys = [{
    name: 'Welcome series',
    trigger: 'On sign-up',
    steps: 4,
    ch: 'WhatsApp + Email',
    active: true
  }, {
    name: 'First-order nudge',
    trigger: 'Signed up, no order 48h',
    steps: 2,
    ch: 'WhatsApp',
    active: true
  }, {
    name: 'Win-back',
    trigger: 'No order 30 days',
    steps: 3,
    ch: 'SMS + Email',
    active: true
  }, {
    name: 'Birthday cup',
    trigger: 'On birthday',
    steps: 1,
    ch: 'Push',
    active: false
  }];
  const [offers, setOffers] = React.useState([{
    code: 'FIRSTCUP',
    desc: 'Free Bella Kaapi, first order',
    redeemed: 820,
    active: true
  }, {
    code: 'MONSOON20',
    desc: '20% off 500g beans',
    redeemed: 341,
    active: true
  }, {
    code: 'REFER100',
    desc: '100 beans per referral',
    redeemed: 156,
    active: true
  }, {
    code: 'DIWALI',
    desc: 'Gift set bundle',
    redeemed: 0,
    active: false
  }]);
  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [{
    icon: 'users',
    value: '6,940',
    label: 'Contacts',
    delta: '+4%'
  }, {
    icon: 'megaphone',
    value: String(campaigns.filter(c => c.status === 'live').length),
    label: 'Live campaigns'
  }, {
    icon: 'trendingUp',
    value: '48%',
    label: 'Avg open rate',
    delta: '+3pt'
  }, {
    icon: 'dollar',
    value: '₹1.8L',
    label: 'Attributed revenue',
    delta: '+15%'
  }, {
    icon: 'award',
    value: String(offers.filter(o => o.active).length),
    label: 'Active offers'
  }];
  const campaignsPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Campaigns",
    icon: "megaphone",
    pad: 0,
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => flash('New campaign draft created'),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        border: 'none',
        background: 'var(--color-primary)',
        color: '#FFF7EE',
        borderRadius: 'var(--radius-sm)',
        padding: '7px 12px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12.5,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: "plus",
      size: 14
    }), " New campaign")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 110px 100px 90px 90px 100px',
      gap: 12,
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Campaign"), /*#__PURE__*/React.createElement("span", null, "Channel"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Sent"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Open"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "CTR")), campaigns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 110px 100px 90px 90px 100px',
      gap: 12,
      alignItems: 'center',
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, c.name), /*#__PURE__*/React.createElement(StatusPill, {
    tone: CH_TONE[c.ch]
  }, c.ch), /*#__PURE__*/React.createElement(StatusPill, {
    tone: c.status === 'live' ? 'good' : c.status === 'scheduled' ? 'warn' : 'idle'
  }, c.status), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, c.sent ? c.sent.toLocaleString('en-IN') : '—'), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: c.open ? 'var(--success)' : 'var(--text-muted)'
    }
  }, c.open ? c.open + '%' : '—'), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, c.ctr ? c.ctr + '%' : '—'))));
  const segmentsPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Segments",
    icon: "users",
    pad: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, segments.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: s.warn ? 'var(--warning-soft)' : 'var(--bk-terracotta-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "users",
    size: 16,
    color: s.warn ? 'var(--warning)' : 'var(--color-primary)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, s.desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, s.size.toLocaleString('en-IN')), /*#__PURE__*/React.createElement("button", {
    onClick: () => flash('Targeting "' + s.name + '"'),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-brand)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Target")))));
  const journeysPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Automated journeys",
    icon: "refresh",
    pad: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, journeys.map(j => /*#__PURE__*/React.createElement("div", {
    key: j.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, j.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, j.trigger, " \xB7 ", j.steps, " steps \xB7 ", j.ch)), /*#__PURE__*/React.createElement(StatusPill, {
    tone: j.active ? 'good' : 'idle',
    pulse: j.active
  }, j.active ? 'Active' : 'Paused')))));
  const offersPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Offers & promo codes",
    icon: "award",
    pad: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, offers.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.code,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-accent)',
      background: 'var(--bk-brass-100)',
      padding: '4px 9px',
      borderRadius: 'var(--radius-sm)'
    }
  }, o.code), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, o.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, o.redeemed, " used"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOffers(os => os.map(x => x.code === o.code ? {
      ...x,
      active: !x.active
    } : x)),
    style: {
      width: 40,
      height: 23,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: o.active ? 'var(--color-primary)' : 'var(--bk-warm-300)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: o.active ? 20 : 3,
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left .2s'
    }
  }))))));
  const aiPanel = /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI Marketing Insight",
    buildPrompt: () => `You are the CRM/marketing assistant for Bisi Kaapi coffee. Status: 6,940 contacts, avg open 48%, WhatsApp "New Coorg roast" at 62% open/14% CTR (best), Email offer at 38%/6%, 640 lapsed (30d+) contacts, ₹1.8L attributed revenue. Give exactly 3 short marketing actions, plain-text bullets starting with "• ".`,
    fallback: `• WhatsApp outperforms email 62% vs 38% open — shift the monsoon offer to WhatsApp and A/B the subject line.
• 640 contacts are lapsed 30d+ — trigger the win-back journey with a free-cup code before they churn.
• Your best CTR is the Coorg drop; retarget openers who didn't buy with a 24h "still warm" reminder.`
  });
  return /*#__PURE__*/React.createElement(Shell, {
    portal: "CRM & Marketing",
    tagline: "Audience engaged",
    headerTitle: {
      overview: 'CRM & marketing',
      campaigns: 'Campaigns',
      segments: 'Segments',
      journeys: 'Journeys',
      offers: 'Offers'
    }[view],
    headerRight: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "good",
      pulse: true
    }, campaigns.filter(c => c.status === 'live').length, " live"),
    nav: nav,
    onNav: setView
  }, view === 'overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis.map((x, i) => kpiOv[i] != null ? {
      ...x,
      value: kpiOv[i]
    } : x),
    editable: kpiManual,
    onEdit: (i, v) => setKpiOv(o => ({
      ...o,
      [i]: v
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, campaignsPanel, journeysPanel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, aiPanel, offersPanel))), view === 'campaigns' && campaignsPanel, view === 'segments' && segmentsPanel, view === 'journeys' && journeysPanel, view === 'offers' && offersPanel, toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderLeft: '4px solid var(--success)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 16px',
      animation: 'bk-fade .3s ease'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "check",
    size: 16,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, toast)));
}
window.CRMPortal = CRMPortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/crm-portal/CRMPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/finance-portal/FinancePortal.jsx
try { (() => {
const {
  Shell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const NAV = [{
  icon: 'grid',
  label: 'Overview',
  view: 'overview'
}, {
  icon: 'dollar',
  label: 'P&L statement',
  view: 'pnl'
}, {
  icon: 'receipt',
  label: 'Ledger',
  badge: 6,
  view: 'ledger'
}, {
  icon: 'scale',
  label: 'Balance sheet',
  view: 'balance'
}, {
  icon: 'refresh',
  label: 'Cash flow',
  view: 'cashflow'
}];

// ₹ helpers
const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
const lakh = n => '₹' + (n / 100000).toFixed(2) + 'L';

// ---- P&L model (monthly, ₹) ----
const REVENUE = [{
  name: 'Café sales',
  amt: 1420000
}, {
  name: 'Online & retail beans',
  amt: 680000
}, {
  name: 'Wholesale supply',
  amt: 340000
}, {
  name: 'Consulting',
  amt: 120000
}];
const COGS = [{
  name: 'Green coffee',
  amt: 490000
}, {
  name: 'Milk & dairy',
  amt: 180000
}, {
  name: 'Packaging',
  amt: 95000
}, {
  name: 'Other ingredients',
  amt: 135000
}];
const OPEX = [{
  name: 'Rent & premises',
  amt: 320000
}, {
  name: 'Salaries & wages',
  amt: 640000
}, {
  name: 'Utilities',
  amt: 85000
}, {
  name: 'Marketing',
  amt: 140000
}, {
  name: 'Logistics & delivery',
  amt: 70000
}, {
  name: 'Misc & admin',
  amt: 45000
}];
const DEPRECIATION = 60000,
  INTEREST = 40000,
  TAX = 65000;
const PERIODS = [['MTD', 1], ['QTD', 3.05], ['FY', 11.4]];
function FinancePortal() {
  const live = window.useBK ? window.useBK(s => s.kpis) : null;
  const [view, setView] = React.useState('overview');
  const [period, setPeriod] = React.useState(0);
  const nav = NAV.map(n => ({
    ...n,
    active: n.view === view
  }));
  const mult = PERIODS[period][1];
  const rev = REVENUE.reduce((s, x) => s + x.amt, 0) * mult;
  const cogs = COGS.reduce((s, x) => s + x.amt, 0) * mult;
  const gross = rev - cogs;
  const opex = OPEX.reduce((s, x) => s + x.amt, 0) * mult;
  const ebitda = gross - opex;
  const dep = DEPRECIATION * mult,
    int = INTEREST * mult,
    tax = TAX * mult;
  const ebit = ebitda - dep;
  const pbt = ebit - int;
  const net = pbt - tax;
  const pctRev = n => (n / rev * 100).toFixed(1) + '%';
  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [{
    icon: 'dollar',
    value: lakh(rev),
    label: 'Revenue',
    delta: '+12%'
  }, {
    icon: 'trendingUp',
    value: pctRev(gross),
    label: 'Gross margin',
    delta: '+1.4pt'
  }, {
    icon: 'scale',
    value: lakh(ebitda),
    label: 'EBITDA',
    delta: '+8%'
  }, {
    icon: 'receipt',
    value: lakh(net),
    label: 'Net profit',
    delta: '+6%'
  }, {
    icon: 'trendingUp',
    value: pctRev(net),
    label: 'Net margin',
    delta: ''
  }];

  // ---- Ledger (Tally-synced) ----
  const ledger = [{
    date: '30 Jun',
    type: 'Sales',
    acct: 'Café POS — Jayanagar',
    dr: 0,
    cr: 48260,
    ref: 'SAL-2048'
  }, {
    date: '30 Jun',
    type: 'Purchase',
    acct: 'Baba Budangiri Estate',
    dr: 336000,
    cr: 0,
    ref: 'PUR-1192'
  }, {
    date: '29 Jun',
    type: 'Payment',
    acct: 'CityFresh Dairy',
    dr: 44000,
    cr: 0,
    ref: 'PAY-882'
  }, {
    date: '29 Jun',
    type: 'Receipt',
    acct: 'Razorpay settlement',
    dr: 0,
    cr: 321540,
    ref: 'RCP-5521'
  }, {
    date: '28 Jun',
    type: 'Expense',
    acct: 'Electricity — BESCOM',
    dr: 28500,
    cr: 0,
    ref: 'EXP-410'
  }, {
    date: '28 Jun',
    type: 'Journal',
    acct: 'Depreciation — equipment',
    dr: 60000,
    cr: 0,
    ref: 'JNL-77'
  }];
  const TYPE_TONE = {
    Sales: 'good',
    Receipt: 'good',
    Purchase: 'warn',
    Payment: 'info',
    Expense: 'bad',
    Journal: 'idle'
  };

  // ---- Balance sheet ----
  const assets = [['Cash & bank', 1840000], ['Inventory (green + finished)', 1260000], ['Accounts receivable', 540000], ['Equipment (net)', 2150000]];
  const liabilities = [['Accounts payable', 720000], ['Working-capital loan', 1400000], ['GST payable', 185000]];
  const totalAssets = assets.reduce((s, x) => s + x[1], 0);
  const totalLiab = liabilities.reduce((s, x) => s + x[1], 0);
  const equity = totalAssets - totalLiab;

  // ---- Cash flow ----
  const cash = [['Operating activities', 412000, 'good'], ['Investing activities', -180000, 'bad'], ['Financing activities', -95000, 'bad']];
  const netCash = cash.reduce((s, x) => s + x[1], 0);
  const HEAD = {
    overview: 'Finance',
    pnl: 'Profit & loss',
    ledger: 'Ledger',
    balance: 'Balance sheet',
    cashflow: 'Cash flow'
  };

  // ---- statement row ----
  const Row = ({
    label,
    amt,
    bold,
    indent,
    tone,
    pct,
    top
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: bold ? '11px 0' : '7px 0',
      borderTop: top ? '1.5px solid var(--border-strong)' : 'none',
      borderBottom: bold ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      paddingLeft: indent ? 16 : 0,
      fontFamily: 'var(--font-sans)',
      fontSize: bold ? 14.5 : 13.5,
      fontWeight: bold ? 700 : 400,
      color: bold ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, label), pct && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, pct), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 130,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: bold ? 15 : 13.5,
      fontWeight: bold ? 700 : 500,
      color: tone === 'bad' ? 'var(--danger)' : tone === 'good' ? 'var(--success)' : 'var(--text-primary)'
    }
  }, amt < 0 ? '(' + inr(-amt) + ')' : inr(amt)));
  const pnlPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Profit & loss statement",
    icon: "dollar",
    pad: 20,
    action: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "good"
    }, "Tally-synced")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Revenue",
    bold: true
  }), REVENUE.map(r => /*#__PURE__*/React.createElement(Row, {
    key: r.name,
    label: r.name,
    amt: r.amt * mult,
    indent: true,
    pct: pctRev(r.amt * mult)
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Total revenue",
    amt: rev,
    bold: true,
    top: true,
    pct: "100%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Cost of goods sold",
    bold: true
  }), COGS.map(r => /*#__PURE__*/React.createElement(Row, {
    key: r.name,
    label: r.name,
    amt: -r.amt * mult,
    indent: true,
    tone: "bad"
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Gross profit",
    amt: gross,
    bold: true,
    top: true,
    pct: pctRev(gross)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Operating expenses",
    bold: true
  }), OPEX.map(r => /*#__PURE__*/React.createElement(Row, {
    key: r.name,
    label: r.name,
    amt: -r.amt * mult,
    indent: true,
    tone: "bad"
  })), /*#__PURE__*/React.createElement(Row, {
    label: "EBITDA",
    amt: ebitda,
    bold: true,
    top: true,
    pct: pctRev(ebitda)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Depreciation",
    amt: -dep,
    indent: true,
    tone: "bad"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Interest",
    amt: -int,
    indent: true,
    tone: "bad"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Tax",
    amt: -tax,
    indent: true,
    tone: "bad"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Net profit",
    amt: net,
    bold: true,
    top: true,
    pct: pctRev(net),
    tone: "good"
  })));
  const ledgerPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "General ledger \u2014 Tally-synced",
    icon: "receipt",
    pad: 0,
    action: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "good",
      pulse: true
    }, "live sync")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '70px 92px 1fr 110px 110px 90px',
      padding: '10px 18px',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", null, "Type"), /*#__PURE__*/React.createElement("span", null, "Account"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Debit"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Credit"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Ref")), ledger.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '70px 92px 1fr 110px 110px 90px',
      alignItems: 'center',
      padding: '11px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, e.date), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(StatusPill, {
    tone: TYPE_TONE[e.type]
  }, e.type)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, e.acct), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: e.dr ? 'var(--text-primary)' : 'var(--text-muted)'
    }
  }, e.dr ? inr(e.dr) : '—'), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: e.cr ? 'var(--success)' : 'var(--text-muted)'
    }
  }, e.cr ? inr(e.cr) : '—'), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, e.ref))));
  const balancePanel = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Assets",
    icon: "scale",
    pad: 18
  }, assets.map(a => /*#__PURE__*/React.createElement(Row, {
    key: a[0],
    label: a[0],
    amt: a[1]
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Total assets",
    amt: totalAssets,
    bold: true,
    top: true
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Liabilities & equity",
    icon: "scale",
    pad: 18
  }, liabilities.map(a => /*#__PURE__*/React.createElement(Row, {
    key: a[0],
    label: a[0],
    amt: a[1]
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Total liabilities",
    amt: totalLiab,
    bold: true,
    top: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Owner's equity",
    amt: equity,
    bold: true,
    tone: "good"
  })));
  const cashflowPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Cash flow summary",
    icon: "refresh",
    pad: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, cash.map(c => /*#__PURE__*/React.createElement(Row, {
    key: c[0],
    label: c[0],
    amt: c[1],
    tone: c[2]
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Net change in cash",
    amt: netCash,
    bold: true,
    top: true,
    tone: netCash >= 0 ? 'good' : 'bad'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Opening balance",
    amt: 1703000
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Closing balance",
    amt: 1703000 + netCash,
    bold: true,
    top: true
  })));
  const insightPanel = /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI Finance Insight",
    buildPrompt: () => `You are the finance assistant for Bisi Kaapi coffee. Monthly P&L: revenue ${inr(rev)}, gross margin ${pctRev(gross)}, EBITDA ${inr(ebitda)}, net profit ${inr(net)} (${pctRev(net)}). Salaries ${inr(640000 * mult)} and rent ${inr(320000 * mult)} are the biggest opex; green coffee is the biggest COGS. Cash: operating +₹4.12L, investing −₹1.8L. A ₹14L working-capital loan is outstanding. Give exactly 3 short finance insights for the owner, each with one action, plain-text bullets starting with "• ".`,
    fallback: `• Gross margin is healthy at ~65%, but net margin is thin (~7.6%) — salaries + rent eat most of it; revisit the Jayanagar lease at renewal.
• Green-coffee COGS is your largest variable cost — lock Q3 estate pricing now while you have operating cash positive.
• Operating cash (+₹4.12L) comfortably covers the loan servicing; consider prepaying part of the ₹14L facility to cut interest.`
  });
  return /*#__PURE__*/React.createElement(Shell, {
    portal: "Finance & Accounts",
    tagline: "Books balanced",
    headerTitle: HEAD[view],
    headerRight: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-pill)',
        padding: 3
      }
    }, PERIODS.map(([lab], i) => /*#__PURE__*/React.createElement("button", {
      key: lab,
      onClick: () => setPeriod(i),
      style: {
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 12px',
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        fontWeight: 600,
        background: period === i ? 'var(--color-primary)' : 'transparent',
        color: period === i ? '#FFF7EE' : 'var(--text-secondary)'
      }
    }, lab))),
    nav: nav,
    onNav: setView
  }, view === 'overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis.map((x, i) => kpiOv[i] != null ? {
      ...x,
      value: kpiOv[i]
    } : x),
    editable: kpiManual,
    onEdit: (i, v) => setKpiOv(o => ({
      ...o,
      [i]: v
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, pnlPanel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, insightPanel, /*#__PURE__*/React.createElement(Panel, {
    title: "Cash position",
    icon: "refresh",
    pad: 18
  }, cash.map(c => /*#__PURE__*/React.createElement(Row, {
    key: c[0],
    label: c[0],
    amt: c[1],
    tone: c[2]
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Net change",
    amt: netCash,
    bold: true,
    top: true,
    tone: netCash >= 0 ? 'good' : 'bad'
  }))))), view === 'pnl' && pnlPanel, view === 'ledger' && ledgerPanel, view === 'balance' && balancePanel, view === 'cashflow' && cashflowPanel);
}
window.FinancePortal = FinancePortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/finance-portal/FinancePortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/orchestrator/Orchestrator.jsx
try { (() => {
const OIcon = window.OIcon;
const ASSET = '../../../assets';
const UNITS = ['All', 'Café', 'Roastery', 'Supply Chain'];
const STATUS = {
  active: {
    label: 'Working',
    fg: '#3F5536',
    bg: 'var(--success-soft)',
    dot: 'var(--success)'
  },
  waiting: {
    label: 'Waiting',
    fg: '#8A5E12',
    bg: 'var(--warning-soft)',
    dot: 'var(--warning)'
  },
  approval: {
    label: 'Needs you',
    fg: '#7C2A1E',
    bg: 'var(--danger-soft)',
    dot: 'var(--danger)'
  },
  idle: {
    label: 'Idle',
    fg: 'var(--text-muted)',
    bg: 'var(--bk-warm-100)',
    dot: 'var(--bk-warm-400)'
  }
};
function StatusPill({
  status
}) {
  const s = STATUS[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.dot,
      animation: status === 'active' ? 'bk-pulse 1.6s infinite' : 'none'
    }
  }), s.label);
}
function Panel({
  title,
  icon,
  action,
  children,
  pad = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, icon && /*#__PURE__*/React.createElement(OIcon, {
    name: icon,
    size: 17,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-primary)',
      flex: 1
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children));
}
async function askClaude(prompt) {
  try {
    if (window.claude && window.claude.complete) return await window.claude.complete(prompt);
  } catch (e) {}
  return null;
}
function AIInsights({
  unit,
  pendingCount
}) {
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [q, setQ] = React.useState('');
  const FALLBACK = `• Roastery is the bottleneck today — Mysore Filter 250g hit its reorder point mid-roast. Action: bump a 250g roast ahead of the Coorg single-origin.
• A ₹7.62L payment run is queued against ₹3.2L settled today. Action: stagger the supplier run to net-30 dates to protect the float.
• On-time delivery slipped on the Coorg lane. Action: pre-book the alternate carrier before the evening dispatch.`;
  const gen = async (prompt, fb) => {
    setLoading(true);
    const r = await askClaude(prompt);
    setText(r || fb);
    setLoading(false);
  };
  React.useEffect(() => {
    gen(`You are the ops orchestrator for Bisi Kaapi coffee (café, roastery, supply chain). Focus: ${unit}. ${pendingCount} approvals pending, a stock reorder on Mysore Filter 250g, batch #2048 roasting, 142 orders dispatching, on-time 96%, ₹3.2L settled and a ₹7.62L payment run queued. Give exactly 3 crisp operational insights, each with one action, plain-text bullets starting with "• ".`, FALLBACK);
  }, []);
  const ask = async () => {
    if (!q.trim()) return;
    const question = q;
    setQ('');
    gen(`You are the ops orchestrator for Bisi Kaapi coffee. Answer concisely in plain text (max 4 short bullets): "${question}"`, '• I could not reach the model just now — try again in a moment.');
  };
  return /*#__PURE__*/React.createElement(Panel, {
    title: "AI Operations Insight",
    icon: "sparkles",
    pad: 16,
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => gen(`Refresh the 3-bullet ops briefing for Bisi Kaapi (${unit}), each with an action, bullets starting with "• ".`, FALLBACK),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        border: '1px solid var(--border-strong)',
        background: 'var(--surface-card)',
        color: 'var(--text-secondary)',
        borderRadius: 'var(--radius-sm)',
        padding: '5px 9px',
        fontSize: 12,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(OIcon, {
      name: "refresh",
      size: 13
    }), " Refresh")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg, rgba(196,154,72,0.10), transparent)',
      border: '1px solid var(--bk-brass-300)',
      borderRadius: 'var(--radius-md)',
      padding: 14,
      minHeight: 120
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--color-accent)',
      animation: 'bk-pulse 1s infinite'
    }
  }), " Thinking through operations\u2026") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-primary)',
      lineHeight: 1.65,
      whiteSpace: 'pre-wrap'
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => e.key === 'Enter' && ask(),
    placeholder: "Ask the orchestrator\u2026",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '9px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      outline: 'none',
      boxShadow: 'var(--shadow-inset)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: ask,
    style: {
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "arrowRight",
    size: 18
  }))));
}

// ---- Settings (config) drawer ----
function Toggle({
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 40,
      height: 23,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: on ? 'var(--color-primary)' : 'var(--bk-warm-300)',
      position: 'relative',
      flexShrink: 0,
      transition: 'background .2s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 20 : 3,
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left .2s'
    }
  }));
}
function Row({
  label,
  sub,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, sub)), children);
}
function IntegrationCard({
  it
}) {
  const connected = it.state.connected && it.state.enabled;
  const [openForm, setOpenForm] = React.useState(false);
  const [vals, setVals] = React.useState(() => ({
    ...it.state.creds
  }));
  const [reveal, setReveal] = React.useState(false);
  const save = () => {
    window.BKData.connectIntegration(it.id, vals);
    setOpenForm(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${connected ? 'var(--bk-brass-300)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      background: connected ? 'linear-gradient(180deg, rgba(196,154,72,0.07), transparent)' : 'var(--bk-paper)',
      padding: 12,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: it.icon,
    size: 16,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, it.name), it.featured && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#3F5536',
      background: 'var(--success-soft)',
      padding: '1px 6px',
      borderRadius: 999
    }
  }, "New")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, it.category)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      color: connected ? '#3F5536' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: connected ? 'var(--success)' : 'var(--bk-warm-400)'
    }
  }), connected ? 'Connected' : 'Not set')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenForm(o => !o),
    style: {
      flex: 1,
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, connected ? 'Manage keys' : 'Add API key'), connected && /*#__PURE__*/React.createElement("button", {
    onClick: () => window.BKData.disconnectIntegration(it.id),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--danger)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "Disconnect")), openForm && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, it.fields.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.k
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      marginBottom: 3
    }
  }, f.label, f.secret && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, " \xB7 secret")), /*#__PURE__*/React.createElement("input", {
    value: vals[f.k] || '',
    onChange: e => setVals(v => ({
      ...v,
      [f.k]: e.target.value
    })),
    placeholder: f.ph || (f.secret ? '••••••••' : ''),
    type: f.secret && !reveal ? 'password' : 'text',
    style: {
      width: '100%',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 10px',
      fontFamily: f.secret ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      outline: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: reveal,
    onChange: e => setReveal(e.target.checked)
  }), " Show secrets"), /*#__PURE__*/React.createElement("a", {
    href: 'https://' + it.docs,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-brand)',
      marginLeft: 'auto'
    }
  }, "Docs \u2197")), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: {
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer',
      marginTop: 2
    }
  }, "Save & connect")));
}
function IntegrationManager() {
  useBKConfigRerender();
  const items = window.BKData.listIntegrations();
  const health = window.BKData.connectorHealth();
  const [filter, setFilter] = React.useState('All');
  const cats = ['All', ...Array.from(new Set(items.map(i => i.category)))];
  const shown = filter === 'All' ? items : items.filter(i => i.category === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--success)',
      margin: '2px 0 10px'
    }
  }, health.on, "/", health.total, " connected"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 12
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      border: '1px solid var(--border-strong)',
      background: filter === c ? 'var(--color-primary)' : 'var(--surface-card)',
      color: filter === c ? '#fff' : 'var(--text-secondary)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, c))), shown.map(it => /*#__PURE__*/React.createElement(IntegrationCard, {
    key: it.id,
    it: it
  })));
}
// re-render integration manager when config changes
function useBKConfigRerender() {
  const [, set] = React.useState(0);
  React.useEffect(() => window.BKData.subscribe(() => set(n => n + 1)), []);
}
function SettingsDrawer({
  open,
  onClose
}) {
  const [cfg, setCfg] = window.useBKConfig();
  const sec = {
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-accent)',
    margin: '18px 0 2px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(43,22,7,0.42)',
      opacity: open ? 1 : 0,
      transition: 'opacity .3s'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: 400,
      maxWidth: '94vw',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-xl)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform .32s var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "settings",
    size: 18,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      color: 'var(--text-primary)',
      flex: 1
    }
  }, "Configuration"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "x",
    size: 20,
    color: "var(--text-secondary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sec
  }, "Organisation"), /*#__PURE__*/React.createElement(Row, {
    label: "Outlet",
    sub: cfg.org.outlet
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, cfg.org.currency)), /*#__PURE__*/React.createElement("div", {
    style: sec
  }, "Live data stream"), /*#__PURE__*/React.createElement(Row, {
    label: "Streaming",
    sub: cfg.streaming ? 'Receiving live events' : 'Paused'
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: cfg.streaming,
    onClick: () => setCfg({
      streaming: !cfg.streaming
    })
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Refresh rate",
    sub: `Every ${(cfg.refreshMs / 1000).toFixed(1)}s`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1000",
    max: "10000",
    step: "500",
    value: cfg.refreshMs,
    onChange: e => setCfg({
      refreshMs: +e.target.value
    }),
    style: {
      width: 130,
      accentColor: 'var(--color-primary)'
    }
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Autonomy",
    sub: "Human-in-loop on spend & comms"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      padding: 3
    }
  }, ['supervised', 'autonomous'].map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => setCfg({
      autonomy: a
    }),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      textTransform: 'capitalize',
      background: cfg.autonomy === a ? 'var(--color-primary)' : 'transparent',
      color: cfg.autonomy === a ? '#fff' : 'var(--text-secondary)'
    }
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: sec
  }, "Features"), Object.entries(cfg.features).map(([k, v]) => /*#__PURE__*/React.createElement(Row, {
    key: k,
    label: k.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: v,
    onClick: () => setCfg({
      features: {
        [k]: !v
      }
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: sec
  }, "Integrations & API keys"), /*#__PURE__*/React.createElement(IntegrationManager, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.BKData.resetConfig(),
    style: {
      marginTop: 18,
      width: '100%',
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-md)',
      padding: '10px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Reset to defaults"))));
}
function FeedComposer() {
  const [text, setText] = React.useState('');
  const [tone, setTone] = React.useState('active');
  const add = () => {
    if (!text.trim()) return;
    window.BKData.addFeedEntry({
      text,
      tone
    });
    setText('');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bk-brass-100)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => e.key === 'Enter' && add(),
    placeholder: "Log a manual entry\u2026",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: tone,
    onChange: e => setTone(e.target.value),
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "active"
  }, "Active"), /*#__PURE__*/React.createElement("option", {
    value: "waiting"
  }, "Waiting")), /*#__PURE__*/React.createElement("button", {
    onClick: add,
    style: {
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 14px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Add"));
}

// ---- main ----
function Orchestrator() {
  const state = window.useBK();
  const [cfg] = window.useBKConfig();
  const [unit, setUnit] = React.useState('All');
  const [toast, setToast] = React.useState(null);
  const [settings, setSettings] = React.useState(false);
  const [view, setView] = React.useState('overview');
  const agents = state.agents.filter(a => unit === 'All' || a.unit === unit || a.unit === 'Cross');
  const health = window.BKData.connectorHealth();
  const cur = cfg.org.currency;
  const decide = (a, ok) => {
    window.BKData.decideApproval(a.id, ok);
    setToast({
      ok,
      title: a.title
    });
    setTimeout(() => setToast(null), 2600);
  };
  const k = state.kpis;
  const manual = cfg.dataMode === 'manual';
  const kpis = [{
    label: 'Revenue today',
    k: 'revenue',
    value: `${cur}${(k.revenue / 100000).toFixed(2)}L`,
    raw: k.revenue,
    icon: 'dollar',
    delta: '+12%'
  }, {
    label: 'Orders',
    k: 'orders',
    value: String(k.orders),
    raw: k.orders,
    icon: 'truck',
    delta: '+8%'
  }, {
    label: 'Batches roasting',
    k: 'batches',
    value: String(k.batches),
    raw: k.batches,
    icon: 'coffee',
    delta: 'on track'
  }, {
    label: 'On-time delivery',
    k: 'onTime',
    value: k.onTime + '%',
    raw: k.onTime,
    icon: 'checkCircle',
    delta: ''
  }, {
    label: 'Pending approvals',
    value: String(state.approvals.length),
    icon: 'alert',
    delta: state.approvals.length ? 'review' : 'clear'
  }];
  const NAV = [['grid', 'Overview', 'overview'], ['bot', 'Agents', 'agents'], ['list', 'Task feed', 'feed'], ['checkCircle', 'Approvals', 'approvals'], ['plug', 'Connectors', 'connectors'], ['settings', 'Settings', 'settings']];
  const VIEW_TITLE = {
    overview: 'Operations',
    agents: 'Agent roster',
    feed: 'Live task feed',
    approvals: 'Approvals',
    connectors: 'Connected sources'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 230,
      flexShrink: 0,
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark-cream.png`,
    width: "34",
    height: "34",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      whiteSpace: 'nowrap'
    }
  }, "Bisi Kaapi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bk-brass-300)',
      marginTop: 2
    }
  }, "Ops Orchestrator"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, NAV.map(([ic, label, v]) => {
    const active = v === view;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        v === 'settings' ? setSettings(true) : setView(v);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--bk-paper)' : 'rgba(255,247,238,0.66)',
        background: active ? 'rgba(255,247,238,0.10)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(OIcon, {
      name: ic,
      size: 18,
      color: active ? 'var(--bk-brass-300)' : 'rgba(255,247,238,0.6)'
    }), " ", label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../../platform/hub/index.html",
    onClick: e => {
      e.preventDefault();
      window.location.assign('../../platform/hub/index.html' + window.location.search);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '9px 12px',
      marginBottom: 10,
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--bk-brass-300)',
      background: 'rgba(255,247,238,0.06)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "grid",
    size: 16,
    color: "var(--bk-brass-300)"
  }), " Bisi Kaapi OS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,247,238,0.06)',
      borderRadius: 'var(--radius-md)',
      padding: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--bk-brass-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: cfg.streaming ? 'var(--success)' : 'var(--bk-warm-400)',
      animation: cfg.streaming ? 'bk-pulse 1.6s infinite' : 'none'
    }
  }), " ", state.agents.length, " agents \xB7 ", health.on, "/", health.total, " sources"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,247,238,0.6)',
      marginTop: 5,
      lineHeight: 1.5,
      textTransform: 'capitalize'
    }
  }, "Autonomy: ", cfg.autonomy)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(250,239,219,0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '14px 26px',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      margin: 0
    }
  }, VIEW_TITLE[view]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 8,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: 3
    }
  }, UNITS.map(u => /*#__PURE__*/React.createElement("button", {
    key: u,
    onClick: () => setUnit(u),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 13px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      background: unit === u ? 'var(--color-primary)' : 'transparent',
      color: unit === u ? '#FFF7EE' : 'var(--text-secondary)'
    }
  }, u))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: 3
    }
  }, [['live', 'Live'], ['manual', 'Manual']].map(([m, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => window.BKData.setDataMode(m),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      background: cfg.dataMode === m ? 'var(--color-primary)' : 'transparent',
      color: cfg.dataMode === m ? '#FFF7EE' : 'var(--text-secondary)'
    }
  }, lbl))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: cfg.streaming ? 'var(--success)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: cfg.streaming ? 'var(--success)' : 'var(--bk-warm-400)',
      animation: cfg.streaming ? 'bk-pulse 1.6s infinite' : 'none'
    }
  }), " ", manual ? 'Manual entry' : cfg.streaming ? 'Live' : 'Paused'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSettings(true),
    "aria-label": "Settings",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "settings",
    size: 19,
    color: "var(--text-secondary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--bk-terracotta-100)',
      color: 'var(--text-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 13
    }
  }, "RK"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px 40px'
    }
  }, (view === 'overview' || view === 'agents') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 14,
      marginBottom: 22
    }
  }, kpis.map(kp => /*#__PURE__*/React.createElement("div", {
    key: kp.label,
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${manual && kp.k ? 'var(--bk-brass-300)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: kp.icon,
    size: 18,
    color: "var(--text-accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, kp.delta)), manual && kp.k ? /*#__PURE__*/React.createElement("input", {
    type: "number",
    defaultValue: kp.raw,
    onBlur: e => window.BKData.setKPI(kp.k, e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') e.target.blur();
    },
    style: {
      width: '100%',
      marginTop: 8,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 8px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-primary)',
      background: 'var(--bk-paper)',
      outline: 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-primary)',
      marginTop: 10
    }
  }, kp.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, kp.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: view === 'overview' ? '1.62fr 1fr' : '1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, (view === 'overview' || view === 'agents') && /*#__PURE__*/React.createElement(Panel, {
    title: `Agent roster · ${agents.length}`,
    icon: "bot",
    pad: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: view === 'agents' ? 'repeat(3,1fr)' : 'repeat(2,1fr)',
      gap: 13
    }
  }, agents.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 14,
      background: a.status === 'approval' ? 'var(--danger-soft)' : 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: a.icon,
    size: 18,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--text-muted)'
    }
  }, "via ", a.src)), /*#__PURE__*/React.createElement(StatusPill, {
    status: a.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.45,
      minHeight: 36
    }
  }, a.task), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 10,
      paddingTop: 9,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, a.metric), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, a.metricLabel)))))), (view === 'overview' || view === 'feed') && /*#__PURE__*/React.createElement(Panel, {
    title: "Live task feed",
    icon: "list",
    pad: 0,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: cfg.streaming ? 'var(--success)' : 'var(--text-muted)'
      }
    }, manual ? 'manual' : cfg.streaming ? 'streaming' : 'paused')
  }, manual && /*#__PURE__*/React.createElement(FeedComposer, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: view === 'feed' ? 'none' : 320,
      overflow: 'auto'
    }
  }, state.feed.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e._k || i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '11px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      animation: i === 0 ? 'bk-fade 0.3s ease' : 'none',
      background: e.manual ? 'var(--bk-brass-100)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      flexShrink: 0,
      width: 40
    }
  }, e.ts), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: STATUS[e.tone === 'active' ? 'active' : 'waiting'].dot,
      marginTop: 5,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'var(--text-brand)'
    }
  }, e.agent), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, " \u2014 ", e.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--text-muted)',
      marginLeft: 6
    }
  }, "\xB7 ", e.src)), manual && /*#__PURE__*/React.createElement("button", {
    onClick: () => window.BKData.removeFeedEntry(e._k),
    title: "Remove",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "x",
    size: 13,
    color: "var(--text-muted)"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: view === 'overview' || view === 'approvals' || view === 'connectors' ? 'flex' : 'none',
      flexDirection: 'column',
      gap: 20
    }
  }, view === 'overview' && cfg.features.aiInsights && /*#__PURE__*/React.createElement(AIInsights, {
    unit: unit,
    pendingCount: state.approvals.length
  }), (view === 'overview' || view === 'approvals') && cfg.features.approvals && /*#__PURE__*/React.createElement(Panel, {
    title: `Approvals · ${state.approvals.length}`,
    icon: "checkCircle",
    pad: 14
  }, state.approvals.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      padding: '10px 2px'
    }
  }, "All clear \u2014 nothing needs you right now. \u2615"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, state.approvals.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 13,
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: a.icon,
    size: 15,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-primary)',
      flex: 1
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-accent)'
    }
  }, a.amount)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.45
    }
  }, a.detail), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 11
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => decide(a, true),
    style: {
      flex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "check",
    size: 15
  }), " Approve"), /*#__PURE__*/React.createElement("button", {
    onClick: () => decide(a, false),
    style: {
      flex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: "x",
    size: 15
  }), " Reject")))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Connected sources",
    icon: "plug",
    pad: 14,
    action: view === 'overview' || view === 'connectors' ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--success)'
      }
    }, health.on, "/", health.total, " live") : null,
    style: {
      display: view === 'overview' || view === 'connectors' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 8
    }
  }, health.list.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 10px',
      background: 'var(--bk-paper)',
      opacity: c.ok ? 1 : 0.55
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: c.ok ? 'var(--success)' : 'var(--bk-warm-400)',
      flexShrink: 0,
      animation: c.ok ? 'bk-pulse 2s infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, c.n))))))))), /*#__PURE__*/React.createElement(SettingsDrawer, {
    open: settings,
    onClose: () => setSettings(false)
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderLeft: `4px solid ${toast.ok ? 'var(--success)' : 'var(--warning)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '13px 16px',
      animation: 'bk-fade 0.3s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: toast.ok ? 'var(--success)' : 'var(--warning)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(OIcon, {
    name: toast.ok ? 'check' : 'x',
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, toast.ok ? 'Approved' : 'Rejected'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, toast.title))));
}
window.Orchestrator = Orchestrator;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/orchestrator/Orchestrator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/orchestrator/icons.jsx
try { (() => {
// Orchestrator icon set (Lucide-style, stroke 2, round). window.OIcon
const O_PATHS = {
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  bot: 'M12 8V4M8 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM2 14h2M20 14h2M9 14v.01M15 14v.01',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  checkCircle: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
  plug: 'M9 2v6M15 2v6M12 8a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zM12 21v-6',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2',
  box: 'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8',
  card: 'M2 5h20v14H2zM2 10h20',
  receipt: 'M4 2v20l3-2 3 2 3-2 3 2 3-2V2l-3 2-3-2-3 2-3-2zM8 7h8M8 11h8M8 15h5',
  megaphone: 'M3 11l15-7v16l-15-7zM3 11v4M7 13v5a2 2 0 0 0 4 0',
  support: 'M4 14a8 8 0 0 1 16 0M4 14v2a2 2 0 0 0 2 2M20 14v2a2 2 0 0 0-2 2h-3',
  dollar: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  pause: 'M6 4h4v16H6zM14 4h4v16h-4z',
  alert: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
  check: 'M20 6L9 17l-5-5',
  x: 'M18 6L6 18M6 6l12 12',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  sparkles: 'M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z',
  refresh: 'M23 4v6h-6M1 20v-6h6M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.81 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.6l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 10 4.6V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 16 4.6l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 10H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'
};
function OIcon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = O_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, d.split('M').filter(Boolean).map((s, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: 'M' + s
  })));
}
window.OIcon = OIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/orchestrator/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/roastery-portal/RoasteryPortal.jsx
try { (() => {
const {
  Shell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const NAV = [{
  icon: 'grid',
  label: 'Overview',
  view: 'overview'
}, {
  icon: 'flame',
  label: 'Roast batches',
  badge: 3,
  view: 'batches'
}, {
  icon: 'leaf',
  label: 'Green stock',
  view: 'green'
}, {
  icon: 'checkCircle',
  label: 'Quality (QC)',
  view: 'qc'
}, {
  icon: 'box',
  label: 'Packaging',
  badge: 2,
  view: 'packaging'
}];
const STAGE = ['Charge', 'Drying', 'Maillard', 'Develop', 'Cool', 'Done'];
function RoasteryPortal() {
  const [batches, setBatches] = React.useState([{
    id: '#2048',
    bean: 'Coorg Single Estate',
    profile: 'Medium-dark',
    kg: 12,
    stage: 2,
    temp: 198,
    tone: 'good'
  }, {
    id: '#2047',
    bean: 'Mysore Filter Blend',
    profile: 'Medium',
    kg: 15,
    stage: 3,
    temp: 205,
    tone: 'good'
  }, {
    id: '#2046',
    bean: 'Peaberry Reserve',
    profile: 'Light',
    kg: 8,
    stage: 4,
    temp: 92,
    tone: 'good'
  }, {
    id: '#2045',
    bean: 'Robusta Bold',
    profile: 'Dark',
    kg: 18,
    stage: 1,
    temp: 165,
    tone: 'warn'
  }]);
  const advance = id => setBatches(b => b.map(x => x.id === id ? {
    ...x,
    stage: Math.min(5, x.stage + 1)
  } : x));
  const green = [{
    name: 'Baba Budangiri AA',
    kg: 320,
    pct: 80,
    tone: 'good'
  }, {
    name: 'Chikmagalur AB',
    kg: 96,
    pct: 30,
    tone: 'warn'
  }, {
    name: 'Coorg Estate',
    kg: 210,
    pct: 62,
    tone: 'good'
  }, {
    name: 'Robusta Parchment',
    kg: 38,
    pct: 16,
    tone: 'bad'
  }];
  const qc = [{
    batch: '#2046',
    metric: 'Cupping score',
    val: '86.5',
    tone: 'good'
  }, {
    batch: '#2044',
    metric: 'Moisture',
    val: '10.8%',
    tone: 'good'
  }, {
    batch: '#2043',
    metric: 'Defects',
    val: '3 / 300g',
    tone: 'warn'
  }];
  const packaging = [{
    sku: 'Mysore Filter 250g',
    qty: 180,
    tone: 'good'
  }, {
    sku: 'Coorg Estate 500g',
    qty: 40,
    tone: 'warn'
  }, {
    sku: 'Peaberry 250g',
    qty: 0,
    tone: 'bad'
  }];
  const toneBg = {
    bad: 'var(--danger)',
    warn: 'var(--warning)',
    good: 'var(--success)'
  };
  const [view, setView] = React.useState('overview');
  const nav = NAV.map(n => ({
    ...n,
    active: n.view === view
  }));
  const show = v => view === 'overview' || view === v;
  const live = window.useBK(s => s.kpis);
  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [{
    icon: 'flame',
    value: live.roastedKg + ' kg',
    label: 'Roasted today',
    delta: '+6%'
  }, {
    icon: 'box',
    value: String(batches.length),
    label: 'Active batches'
  }, {
    icon: 'leaf',
    value: '664 kg',
    label: 'Green stock'
  }, {
    icon: 'checkCircle',
    value: '98%',
    label: 'QC pass rate'
  }, {
    icon: 'scale',
    value: '14.2%',
    label: 'Roast shrinkage',
    down: true,
    delta: '+0.3%'
  }];
  return /*#__PURE__*/React.createElement(Shell, {
    portal: "Roastery Ops",
    tagline: "3 roasters live",
    headerTitle: {
      overview: 'Roastery',
      batches: 'Roast batches',
      green: 'Green stock',
      qc: 'Quality (QC)',
      packaging: 'Packaging'
    }[view],
    headerRight: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "good",
      pulse: true
    }, "Roasting"),
    nav: nav,
    onNav: setView
  }, view === 'overview' && /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis.map((x, i) => kpiOv[i] != null ? {
      ...x,
      value: kpiOv[i]
    } : x),
    editable: kpiManual,
    onEdit: (i, v) => setKpiOv(o => ({
      ...o,
      [i]: v
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: view === 'overview' ? '1.6fr 1fr' : '1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Roast batches in progress",
    icon: "flame",
    pad: 14,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, "advance stage"),
    style: {
      display: show('batches') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, batches.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px',
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, b.id), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, b.bean), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, b.profile, " \xB7 ", b.kg, " kg \xB7 ", b.temp, "\xB0C")), /*#__PURE__*/React.createElement(StatusPill, {
    tone: b.tone,
    pulse: b.stage < 5
  }, STAGE[b.stage]), /*#__PURE__*/React.createElement("button", {
    onClick: () => advance(b.id),
    disabled: b.stage >= 5,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: b.stage >= 5 ? 'var(--bk-warm-200)' : 'var(--color-primary)',
      color: b.stage >= 5 ? 'var(--text-muted)' : '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 11px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: b.stage >= 5 ? 'default' : 'pointer'
    }
  }, "Next ", /*#__PURE__*/React.createElement(PIcon, {
    name: "arrowRight",
    size: 14,
    color: b.stage >= 5 ? 'var(--text-muted)' : '#fff'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, STAGE.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      height: 5,
      borderRadius: 3,
      background: i <= b.stage ? toneBg[b.tone] : 'var(--bk-warm-150)'
    }
  }))))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Green coffee stock",
    icon: "leaf",
    pad: 16,
    action: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "bad"
    }, "1 low"),
    style: {
      display: show('green') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, green.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, g.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, g.kg, " kg")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 6,
      background: 'var(--bk-warm-150)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: g.pct + '%',
      height: '100%',
      background: toneBg[g.tone],
      borderRadius: 6
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, view === 'overview' && /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI Roastery Insight",
    buildPrompt: () => `You are the roastery operations assistant for Bisi Kaapi. Status: 4 batches roasting (Coorg, Mysore, Peaberry, Robusta), green stock 664kg total but Robusta Parchment at 16% (low) and Chikmagalur AB at 30%, QC pass 98%, roast shrinkage 14.2%, Peaberry 250g packaging at zero stock. Give exactly 3 short insights for the head roaster, each with one action, plain-text bullets starting with "• ".`,
    fallback: `• Robusta Parchment is at 16% — book the next green lot before the dark-roast run or you'll stall #2045.
• Peaberry 250g pouches are out of stock while batch #2046 cools — print labels now so it can pack straight off the roaster.
• Shrinkage ticked to 14.2%; check the Robusta develop time, it's trending long.`
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "QC log \u2014 latest",
    icon: "checkCircle",
    pad: 14,
    style: {
      display: show('qc') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, qc.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '9px 11px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bk-paper)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, q.batch), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, " \xB7 ", q.metric)), /*#__PURE__*/React.createElement(StatusPill, {
    tone: q.tone
  }, q.val))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Packaging queue",
    icon: "box",
    pad: 14,
    style: {
      display: show('packaging') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, packaging.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.sku,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '9px 11px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bk-paper)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, p.sku), /*#__PURE__*/React.createElement(StatusPill, {
    tone: p.tone
  }, p.qty, " packs"))))))));
}
window.RoasteryPortal = RoasteryPortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/roastery-portal/RoasteryPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/shop-admin/ShopAdmin.jsx
try { (() => {
const {
  Shell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const NAV = [{
  icon: 'grid',
  label: 'Overview',
  view: 'overview'
}, {
  icon: 'box',
  label: 'Products',
  badge: 7,
  view: 'products'
}, {
  icon: 'warehouse',
  label: 'Inventory',
  view: 'inventory'
}, {
  icon: 'dollar',
  label: 'Pricing',
  view: 'pricing'
}, {
  icon: 'clipboard',
  label: 'Categories',
  view: 'categories'
}];
const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
const SEED = [{
  id: 1,
  name: 'Mysore Filter Blend',
  cat: 'Beans',
  price: 240,
  cost: 132,
  stock: 180,
  reorder: 60,
  img: 'motif-coffee-bean',
  active: true
}, {
  id: 2,
  name: 'Coorg Single Estate',
  cat: 'Beans',
  price: 320,
  cost: 178,
  stock: 96,
  reorder: 50,
  img: 'motif-coffee-plant',
  active: true
}, {
  id: 3,
  name: 'Peaberry Reserve',
  cat: 'Beans',
  price: 420,
  cost: 246,
  stock: 40,
  reorder: 45,
  img: 'motif-coffee-bean',
  active: true
}, {
  id: 4,
  name: 'Brass Davara Tumbler',
  cat: 'Serveware',
  price: 690,
  cost: 430,
  stock: 24,
  reorder: 15,
  img: 'motif-filter-cup',
  active: true
}, {
  id: 5,
  name: 'Pour-over Carafe',
  cat: 'Brewers',
  price: 1290,
  cost: 820,
  stock: 8,
  reorder: 10,
  img: 'chemex',
  active: true
}, {
  id: 6,
  name: 'Hand Grinder',
  cat: 'Brewers',
  price: 1850,
  cost: 1180,
  stock: 15,
  reorder: 8,
  img: 'hand-grinder',
  active: true
}, {
  id: 7,
  name: 'Filter Decoction Press',
  cat: 'Brewers',
  price: 540,
  cost: 355,
  stock: 0,
  reorder: 12,
  img: 'motif-coffee-bean',
  active: false
}];
const CATS = ['Beans', 'Brewers', 'Serveware', 'Gifts'];
const ASSET = '../../../assets';
const stockState = p => p.stock === 0 ? 'bad' : p.stock <= p.reorder ? 'warn' : 'good';
const stockLabel = p => p.stock === 0 ? 'Out of stock' : p.stock <= p.reorder ? 'Low' : 'In stock';
function ShopAdmin() {
  const [rows, setRows] = React.useState(SEED);
  const [view, setView] = React.useState('overview');
  const [cat, setCat] = React.useState('All');
  const [toast, setToast] = React.useState(null);
  const nav = NAV.map(n => ({
    ...n,
    active: n.view === view
  }));
  const edit = (id, patch) => setRows(r => r.map(x => x.id === id ? {
    ...x,
    ...patch
  } : x));
  const bump = (id, d) => setRows(r => r.map(x => x.id === id ? {
    ...x,
    stock: Math.max(0, x.stock + d)
  } : x));
  const flash = m => {
    setToast(m);
    setTimeout(() => setToast(null), 1800);
  };
  const addProduct = () => {
    const id = Math.max(...rows.map(x => x.id)) + 1;
    setRows(r => [...r, {
      id,
      name: 'New product',
      cat: 'Beans',
      price: 0,
      cost: 0,
      stock: 0,
      reorder: 10,
      img: 'motif-coffee-bean',
      active: false
    }]);
    flash('Product added — fill in details');
  };
  const shown = cat === 'All' ? rows : rows.filter(x => x.cat === cat);
  const skus = rows.length;
  const low = rows.filter(x => x.stock > 0 && x.stock <= x.reorder).length;
  const out = rows.filter(x => x.stock === 0).length;
  const invValue = rows.reduce((s, x) => s + x.cost * x.stock, 0);
  const avgMargin = Math.round(rows.reduce((s, x) => s + (x.price ? (x.price - x.cost) / x.price : 0), 0) / rows.length * 100);
  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [{
    icon: 'box',
    value: String(skus),
    label: 'Active SKUs'
  }, {
    icon: 'warehouse',
    value: inr(invValue),
    label: 'Inventory value'
  }, {
    icon: 'alert',
    value: String(low),
    label: 'Low stock',
    down: low > 0,
    delta: low ? 'reorder' : 'ok'
  }, {
    icon: 'x',
    value: String(out),
    label: 'Out of stock',
    down: out > 0
  }, {
    icon: 'trendingUp',
    value: avgMargin + '%',
    label: 'Avg margin'
  }];

  // ---- editable cells ----
  const NumCell = ({
    value,
    onChange,
    prefix,
    w = 78
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 8px',
      background: 'var(--surface-card)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    onChange: e => onChange(Math.max(0, +e.target.value || 0)),
    style: {
      width: w,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }));

  // ---- products / inventory / pricing table ----
  const cols = {
    products: '46px 1.6fr 1fr 100px 150px 120px 90px',
    inventory: '46px 1.8fr 1fr 150px 110px 130px',
    pricing: '46px 1.8fr 110px 110px 110px 100px'
  };
  const Th = ({
    children,
    right
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      textAlign: right ? 'right' : 'left'
    }
  }, children);
  const Thumb = ({
    p
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bk-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/illustrations/${p.img}.png`,
    alt: "",
    style: {
      maxHeight: 26
    }
  }));
  const Name = ({
    p
  }) => /*#__PURE__*/React.createElement("input", {
    value: p.name,
    onChange: e => edit(p.id, {
      name: e.target.value
    }),
    style: {
      border: '1px solid transparent',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 7px',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-primary)',
      width: '100%'
    },
    onFocus: e => e.target.style.borderColor = 'var(--border-default)',
    onBlur: e => e.target.style.borderColor = 'transparent'
  });
  const CatSelect = ({
    p
  }) => /*#__PURE__*/React.createElement("select", {
    value: p.cat,
    onChange: e => edit(p.id, {
      cat: e.target.value
    }),
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 8px',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)));
  const Stepper = ({
    p
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => bump(p.id, -1),
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-brand)',
      fontSize: 16,
      cursor: 'pointer',
      width: 26,
      height: 28
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: p.stock,
    onChange: e => edit(p.id, {
      stock: Math.max(0, +e.target.value || 0)
    }),
    style: {
      width: 42,
      textAlign: 'center',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => bump(p.id, 1),
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-brand)',
      fontSize: 16,
      cursor: 'pointer',
      width: 26,
      height: 28
    }
  }, "+"));
  const Toggle = ({
    p
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => edit(p.id, {
      active: !p.active
    }),
    style: {
      width: 40,
      height: 23,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: p.active ? 'var(--color-primary)' : 'var(--bk-warm-300)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: p.active ? 20 : 3,
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left .2s'
    }
  }));
  const catBar = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      alignItems: 'center'
    }
  }, ['All', ...CATS].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      border: '1px solid var(--border-strong)',
      background: cat === c ? 'var(--color-primary)' : 'var(--surface-card)',
      color: cat === c ? '#fff' : 'var(--text-secondary)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, c)), /*#__PURE__*/React.createElement("button", {
    onClick: addProduct,
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 13px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 15
  }), " Add product"));
  const productsTable = /*#__PURE__*/React.createElement(Panel, {
    title: "Catalogue",
    icon: "box",
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px 0'
    }
  }, catBar), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols.products,
      gap: 12,
      padding: '4px 18px 10px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Th, null), /*#__PURE__*/React.createElement(Th, null, "Product"), /*#__PURE__*/React.createElement(Th, null, "Category"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Price"), /*#__PURE__*/React.createElement(Th, null, "Stock"), /*#__PURE__*/React.createElement(Th, null, "Status"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Margin")), shown.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: cols.products,
      gap: 12,
      alignItems: 'center',
      padding: '10px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      background: p.active ? 'transparent' : 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    p: p
  }), /*#__PURE__*/React.createElement(Name, {
    p: p
  }), /*#__PURE__*/React.createElement(CatSelect, {
    p: p
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(NumCell, {
    value: p.price,
    prefix: "\u20B9",
    w: 58,
    onChange: v => edit(p.id, {
      price: v
    })
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    p: p
  }), /*#__PURE__*/React.createElement(StatusPill, {
    tone: stockState(p)
  }, stockLabel(p))), /*#__PURE__*/React.createElement(Toggle, {
    p: p
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, p.price ? Math.round((p.price - p.cost) / p.price * 100) : 0, "%"))));
  const inventoryTable = /*#__PURE__*/React.createElement(Panel, {
    title: "Inventory & reorder",
    icon: "warehouse",
    pad: 0,
    action: /*#__PURE__*/React.createElement(StatusPill, {
      tone: out ? 'bad' : low ? 'warn' : 'good'
    }, out ? out + ' out' : low ? low + ' low' : 'healthy')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols.inventory,
      gap: 12,
      padding: '14px 18px 10px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Th, null), /*#__PURE__*/React.createElement(Th, null, "Product"), /*#__PURE__*/React.createElement(Th, null, "Category"), /*#__PURE__*/React.createElement(Th, null, "On hand"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Reorder pt"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Status")), rows.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: cols.inventory,
      gap: 12,
      alignItems: 'center',
      padding: '10px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      background: stockState(p) === 'bad' ? 'var(--danger-soft)' : stockState(p) === 'warn' ? 'var(--warning-soft)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    p: p
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, p.cat), /*#__PURE__*/React.createElement(Stepper, {
    p: p
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(NumCell, {
    value: p.reorder,
    w: 44,
    onChange: v => edit(p.id, {
      reorder: v
    })
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: stockState(p)
  }, stockLabel(p))))));
  const pricingTable = /*#__PURE__*/React.createElement(Panel, {
    title: "Pricing & margins",
    icon: "dollar",
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols.pricing,
      gap: 12,
      padding: '14px 18px 10px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Th, null), /*#__PURE__*/React.createElement(Th, null, "Product"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Cost"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Price"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Margin"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Profit")), rows.map(p => {
    const m = p.price ? Math.round((p.price - p.cost) / p.price * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'grid',
        gridTemplateColumns: cols.pricing,
        gap: 12,
        alignItems: 'center',
        padding: '10px 18px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Thumb, {
      p: p
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        justifySelf: 'end'
      }
    }, /*#__PURE__*/React.createElement(NumCell, {
      value: p.cost,
      prefix: "\u20B9",
      w: 54,
      onChange: v => edit(p.id, {
        cost: v
      })
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        justifySelf: 'end'
      }
    }, /*#__PURE__*/React.createElement(NumCell, {
      value: p.price,
      prefix: "\u20B9",
      w: 54,
      onChange: v => edit(p.id, {
        price: v
      })
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(StatusPill, {
      tone: m >= 45 ? 'good' : m >= 30 ? 'warn' : 'bad'
    }, m, "%")), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-primary)'
      }
    }, inr(p.price - p.cost)));
  }));
  const categoriesPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Categories",
    icon: "clipboard",
    pad: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, CATS.map(c => {
    const items = rows.filter(x => x.cat === c);
    return /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 14px',
        background: 'var(--bk-paper)'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: "box",
      size: 18,
      color: "var(--text-brand)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 14,
        color: 'var(--text-primary)'
      }
    }, c), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        color: 'var(--text-secondary)'
      }
    }, items.length, " SKUs"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        color: 'var(--text-accent)'
      }
    }, inr(items.reduce((s, x) => s + x.cost * x.stock, 0))));
  })));
  const aiPanel = /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI Merchandising Insight",
    buildPrompt: () => `You are the shop admin assistant for Bisi Kaapi. Catalogue: ${rows.map(p => `${p.name} — ${inr(p.price)} (cost ${inr(p.cost)}, ${Math.round((p.price - p.cost) / p.price * 100)}% margin), stock ${p.stock}${p.stock <= p.reorder ? ' (reorder pt ' + p.reorder + ')' : ''}`).join('; ')}. ${out} out of stock, ${low} low. Give exactly 3 short pricing/inventory actions for the merchandiser, plain-text bullets starting with "• ".`,
    fallback: `• Filter Decoction Press is out of stock — reorder or hide it so the storefront doesn't show a dead SKU.
• Pour-over Carafe (8 left, reorder at 10) is below its point — raise a PO before the weekend rush.
• Peaberry Reserve has the thinnest margin at ~41%; nudge price to ₹440 or negotiate green cost to protect profit.`
  });
  return /*#__PURE__*/React.createElement(Shell, {
    portal: "Shop Admin",
    tagline: "Catalogue synced",
    headerTitle: {
      overview: 'Shop admin',
      products: 'Products',
      inventory: 'Inventory',
      pricing: 'Pricing',
      categories: 'Categories'
    }[view],
    headerRight: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "good",
      pulse: true
    }, "Storefront live"),
    nav: nav,
    onNav: setView
  }, view === 'overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis.map((x, i) => kpiOv[i] != null ? {
      ...x,
      value: kpiOv[i]
    } : x),
    editable: kpiManual,
    onEdit: (i, v) => setKpiOv(o => ({
      ...o,
      [i]: v
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, productsTable), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, aiPanel, categoriesPanel))), view === 'products' && productsTable, view === 'inventory' && inventoryTable, view === 'pricing' && pricingTable, view === 'categories' && categoriesPanel, toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderLeft: '4px solid var(--success)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 16px',
      animation: 'bk-fade .3s ease'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "check",
    size: 16,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, toast)));
}
window.ShopAdmin = ShopAdmin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/shop-admin/ShopAdmin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/supply-portal/SupplyPortal.jsx
try { (() => {
const {
  Shell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const NAV = [{
  icon: 'grid',
  label: 'Overview',
  view: 'overview'
}, {
  icon: 'users',
  label: 'Suppliers',
  view: 'suppliers'
}, {
  icon: 'clipboard',
  label: 'Procurement',
  badge: 5,
  view: 'procurement'
}, {
  icon: 'truck',
  label: 'Deliveries',
  badge: 3,
  view: 'deliveries'
}, {
  icon: 'warehouse',
  label: 'Warehouse',
  view: 'warehouse'
}];
const PO_FLOW = ['Draft', 'Sent', 'Confirmed', 'Received'];
const PO_TONE = {
  Draft: 'idle',
  Sent: 'info',
  Confirmed: 'warn',
  Received: 'good'
};
function SupplyPortal() {
  const [pos, setPos] = React.useState([{
    id: 'PO-1192',
    sup: 'Baba Budangiri Estate',
    item: 'Green AA · 800 kg',
    val: '₹3,36,000',
    stage: 0
  }, {
    id: 'PO-1191',
    sup: 'Sunrise Packaging',
    item: 'Kraft pouches · 5,000',
    val: '₹62,500',
    stage: 1
  }, {
    id: 'PO-1190',
    sup: 'Chikmagalur Coop',
    item: 'Green AB · 400 kg',
    val: '₹1,48,000',
    stage: 2
  }, {
    id: 'PO-1189',
    sup: 'Brass Works Mysore',
    item: 'Davara tumblers · 200',
    val: '₹78,000',
    stage: 1
  }, {
    id: 'PO-1188',
    sup: 'CityFresh Dairy',
    item: 'Milk contract · weekly',
    val: '₹44,000',
    stage: 3
  }]);
  const advance = id => setPos(p => p.map(x => x.id === id ? {
    ...x,
    stage: Math.min(3, x.stage + 1)
  } : x));
  const deliveries = [{
    id: 'SR-8841',
    what: '142 online orders',
    carrier: 'Shiprocket',
    eta: 'Today 6 PM',
    tone: 'good'
  }, {
    id: 'TR-204',
    what: 'Green AB · 400 kg',
    carrier: 'Inbound · Chikmagalur',
    eta: 'Tomorrow',
    tone: 'warn'
  }, {
    id: 'SR-8839',
    what: '38 café restocks',
    carrier: 'Own fleet',
    eta: 'Delayed · Coorg lane',
    tone: 'bad'
  }];
  const suppliers = [{
    name: 'Baba Budangiri Estate',
    cat: 'Green coffee',
    score: 4.9,
    tone: 'good'
  }, {
    name: 'Chikmagalur Coop',
    cat: 'Green coffee',
    score: 4.6,
    tone: 'good'
  }, {
    name: 'Sunrise Packaging',
    cat: 'Packaging',
    score: 4.2,
    tone: 'warn'
  }, {
    name: 'CityFresh Dairy',
    cat: 'Dairy',
    score: 4.7,
    tone: 'good'
  }];
  const warehouse = [{
    name: 'Green coffee bay',
    pct: 72,
    tone: 'good'
  }, {
    name: 'Finished goods',
    pct: 88,
    tone: 'warn'
  }, {
    name: 'Packaging & gear',
    pct: 41,
    tone: 'good'
  }, {
    name: 'Cold store (dairy)',
    pct: 94,
    tone: 'bad'
  }];
  const toneBg = {
    bad: 'var(--danger)',
    warn: 'var(--warning)',
    good: 'var(--success)'
  };
  const [view, setView] = React.useState('overview');
  const nav = NAV.map(n => ({
    ...n,
    active: n.view === view
  }));
  const show = v => view === 'overview' || view === v;
  const live = window.useBK(s => s.kpis);
  const [cfgKpi] = window.useBKConfig();
  const kpiManual = cfgKpi.dataMode === 'manual';
  const [kpiOv, setKpiOv] = React.useState({});
  const kpis = [{
    icon: 'clipboard',
    value: String(pos.filter(p => p.stage < 3).length),
    label: 'Open POs'
  }, {
    icon: 'truck',
    value: '3',
    label: 'In transit'
  }, {
    icon: 'checkCircle',
    value: live.onTime + '%',
    label: 'On-time',
    down: true,
    delta: '-1%'
  }, {
    icon: 'warehouse',
    value: '74%',
    label: 'Warehouse used'
  }, {
    icon: 'users',
    value: '18',
    label: 'Active suppliers'
  }];
  return /*#__PURE__*/React.createElement(Shell, {
    portal: "Supply Chain",
    tagline: "Network healthy",
    headerTitle: {
      overview: 'Supply chain',
      suppliers: 'Suppliers & estates',
      procurement: 'Procurement',
      deliveries: 'Deliveries & logistics',
      warehouse: 'Warehouse'
    }[view],
    headerRight: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "warn",
      pulse: true
    }, "1 delay"),
    nav: nav,
    onNav: setView
  }, view === 'overview' && /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis.map((x, i) => kpiOv[i] != null ? {
      ...x,
      value: kpiOv[i]
    } : x),
    editable: kpiManual,
    onEdit: (i, v) => setKpiOv(o => ({
      ...o,
      [i]: v
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: view === 'overview' ? '1.6fr 1fr' : '1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Purchase orders",
    icon: "clipboard",
    pad: 14,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, "advance status"),
    style: {
      display: show('procurement') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, pos.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, p.id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-accent)'
    }
  }, p.val)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, p.sup), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p.item)), /*#__PURE__*/React.createElement(StatusPill, {
    tone: PO_TONE[PO_FLOW[p.stage]],
    pulse: p.stage === 2
  }, PO_FLOW[p.stage]), /*#__PURE__*/React.createElement("button", {
    onClick: () => advance(p.id),
    disabled: p.stage >= 3,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: p.stage >= 3 ? 'var(--bk-warm-200)' : 'var(--color-primary)',
      color: p.stage >= 3 ? 'var(--text-muted)' : '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 11px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: p.stage >= 3 ? 'default' : 'pointer'
    }
  }, p.stage >= 3 ? 'Done' : 'Advance'))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Deliveries & logistics",
    icon: "truck",
    pad: 14,
    action: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "bad"
    }, "1 delayed"),
    style: {
      display: show('deliveries') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, deliveries.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 13px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--bk-paper)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "truck",
    size: 20,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, d.what), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, d.id, " \xB7 ", d.carrier)), /*#__PURE__*/React.createElement(StatusPill, {
    tone: d.tone,
    pulse: d.tone === 'bad'
  }, d.eta)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, view === 'overview' && /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI Supply Insight",
    buildPrompt: () => `You are the supply-chain assistant for Bisi Kaapi coffee. Status: 4 open POs incl. ₹3.36L green coffee draft and a ₹1.48L lot confirmed; a green-coffee inbound truck due tomorrow; 38 café restocks delayed on the Coorg lane; cold store at 94% capacity and finished goods at 88%; on-time delivery 96%. Give exactly 3 short insights for the supply-chain lead, each with one action, plain-text bullets starting with "• ".`,
    fallback: `• Cold store is at 94% — schedule the dairy draw-down before tomorrow's milk delivery or you'll have no space.
• The Coorg-lane café restock is delayed; switch those 38 orders to the own fleet to protect store availability.
• The ₹3.36L green PO is still a draft while Robusta runs low — send it today to keep the dark roast on schedule.`
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Suppliers & estates",
    icon: "users",
    pad: 14,
    style: {
      display: show('suppliers') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, suppliers.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '9px 11px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bk-paper)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, s.cat)), /*#__PURE__*/React.createElement(StatusPill, {
    tone: s.tone
  }, "\u2605 ", s.score))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Warehouse capacity",
    icon: "warehouse",
    pad: 16,
    style: {
      display: show('warehouse') ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, warehouse.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, w.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, w.pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 6,
      background: 'var(--bk-warm-150)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w.pct + '%',
      height: '100%',
      background: toneBg[w.tone],
      borderRadius: 6
    }
  })))))))));
}
window.SupplyPortal = SupplyPortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/supply-portal/SupplyPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/content-admin/ContentAdmin.jsx
try { (() => {
const {
  Panel,
  StatusPill,
  AdminShell
} = window.PortalKit;
const PIcon = window.PIcon;
const CFG = window.BK_CONTENT_CONFIG;
const ASSET = '../../../assets';
function iframeSrcFor(app, page) {
  return app === 'shop' ? '../../customer/shop/index.html?content_admin=1' : `../../customer/marketing/index.html?content_admin=1&page=${page || 'home'}`;
}

// ---------------- Login ----------------
function LoginScreen({
  apiBase,
  setApiBase,
  onLoggedIn,
  embedded
}) {
  const [email, setEmail] = React.useState('akshay@bisikaapi.coffee');
  const [password, setPassword] = React.useState('');
  const [err, setErr] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      let res;
      try {
        res = await fetch(apiBase + '/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        });
      } catch (networkErr) {
        throw new Error(`No response from ${apiBase}. Either the API in server/ isn't running (npm install && npm run migrate && npm run seed && npm run dev, see server/README.md), or it's running but hasn't allowlisted this page's origin in CORS_ORIGINS (server/.env) — open the browser console to tell which.`);
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      if (!data.user.apps.includes('content')) throw new Error(`Role "${data.user.roleKey}" isn't granted Content access`);
      onLoggedIn(data.token, data.user);
    } catch (e) {
      setErr(e.message || 'Could not reach the API');
    }
    setBusy(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: embedded ? {
      fontFamily: 'var(--font-sans)'
    } : {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-sunken)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: 380,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark.png`,
    width: "34",
    height: "34",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19
    }
  }, "Content"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, "Sign in to edit marketing copy & products"))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      marginBottom: 5
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    style: inputStyle
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      margin: '14px 0 5px'
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    style: inputStyle
  }), /*#__PURE__*/React.createElement("details", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, "API server URL"), /*#__PURE__*/React.createElement("input", {
    value: apiBase,
    onChange: e => setApiBase(e.target.value),
    style: {
      ...inputStyle,
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  })), err && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 12.5,
      color: 'var(--danger)',
      lineHeight: 1.5
    }
  }, err), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: busy,
    style: {
      marginTop: 18,
      width: '100%',
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '11px 0',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, busy ? 'Signing in…' : 'Sign in'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 11,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, "Demo login: akshay@bisikaapi.coffee / bisikaapi123 \u2014 only valid once you've run the backend (server/README.md: npm install, npm run migrate, npm run seed, npm run dev). No backend running? Fields below still load from local defaults, read-only.")));
}
const inputStyle = {
  width: '100%',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  padding: '9px 11px',
  fontFamily: 'var(--font-sans)',
  fontSize: 13.5,
  background: 'var(--bk-paper)',
  color: 'var(--text-primary)',
  boxSizing: 'border-box'
};

// ---------------- String field ----------------
function StringField({
  row,
  lang,
  canEdit,
  onSave,
  highlighted
}) {
  const val = lang === 'kn' ? row.kn : row.en;
  const long = CFG.LONGFORM.test(row.key) || val && val.length > 60;
  const ref = React.useRef(null);
  const commit = () => {
    const v = ref.current.value;
    if (v === val) return;
    onSave(row.key, lang, v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)',
      background: highlighted ? 'var(--bk-terracotta-100)' : 'transparent',
      transition: 'background .6s ease',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, CFG.prettify(row.key)), /*#__PURE__*/React.createElement("code", {
    style: {
      fontSize: 10,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, row.key)), long ? /*#__PURE__*/React.createElement("textarea", {
    key: row.key + lang,
    ref: ref,
    defaultValue: val,
    disabled: !canEdit,
    onBlur: commit,
    rows: val && val.length > 140 ? 4 : 2,
    style: {
      ...inputStyle,
      resize: 'vertical',
      fontFamily: lang === 'kn' ? 'var(--font-script)' : 'var(--font-sans)'
    }
  }) : /*#__PURE__*/React.createElement("input", {
    key: row.key + lang,
    ref: ref,
    defaultValue: val,
    disabled: !canEdit,
    onBlur: commit,
    style: {
      ...inputStyle,
      fontFamily: lang === 'kn' ? 'var(--font-script)' : 'var(--font-sans)'
    }
  }));
}

// ---------------- Product row ----------------
function ProductRow({
  p,
  canEdit,
  onSave,
  onDelete,
  highlighted
}) {
  const [local, setLocal] = React.useState(p);
  React.useEffect(() => setLocal(p), [p]);
  const field = (k, v) => setLocal(s => ({
    ...s,
    [k]: v
  }));
  const commit = k => {
    if (local[k] !== p[k]) onSave(p.id, {
      [k]: local[k]
    });
  };
  const num = v => {
    const n = Number(v);
    return isNaN(n) ? 0 : n;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 90px 90px 90px 1fr 70px 60px 60px 40px',
      gap: 8,
      alignItems: 'center',
      padding: '9px 12px',
      borderBottom: '1px solid var(--border-subtle)',
      background: highlighted ? 'var(--bk-terracotta-100)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("input", {
    disabled: !canEdit,
    value: local.name,
    onChange: e => field('name', e.target.value),
    onBlur: () => commit('name'),
    style: cellStyle
  }), /*#__PURE__*/React.createElement("select", {
    disabled: !canEdit,
    value: local.cat,
    onChange: e => {
      field('cat', e.target.value);
      onSave(p.id, {
        cat: e.target.value
      });
    },
    style: cellStyle
  }, /*#__PURE__*/React.createElement("option", null, "Beans"), /*#__PURE__*/React.createElement("option", null, "Gear")), /*#__PURE__*/React.createElement("input", {
    disabled: !canEdit,
    value: local.tag || '',
    placeholder: "\u2014",
    onChange: e => field('tag', e.target.value),
    onBlur: () => commit('tag'),
    style: cellStyle
  }), /*#__PURE__*/React.createElement("input", {
    disabled: !canEdit,
    value: local.roast || '',
    placeholder: "\u2014",
    onChange: e => field('roast', e.target.value),
    onBlur: () => commit('roast'),
    style: cellStyle
  }), /*#__PURE__*/React.createElement("input", {
    disabled: !canEdit,
    value: local.origin || '',
    onChange: e => field('origin', e.target.value),
    onBlur: () => commit('origin'),
    style: cellStyle
  }), /*#__PURE__*/React.createElement("input", {
    disabled: !canEdit,
    value: local.price,
    onChange: e => field('price', num(e.target.value)),
    onBlur: () => commit('price'),
    style: {
      ...cellStyle,
      fontFamily: 'var(--font-mono)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    disabled: !canEdit,
    value: local.rating,
    onChange: e => field('rating', num(e.target.value)),
    onBlur: () => commit('rating'),
    style: {
      ...cellStyle,
      fontFamily: 'var(--font-mono)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    disabled: !canEdit,
    checked: !!local.featured,
    onChange: e => {
      field('featured', e.target.checked);
      onSave(p.id, {
        featured: e.target.checked
      });
    },
    title: "Featured on homepage"
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !canEdit,
    onClick: () => onDelete(p.id),
    title: "Delete",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--danger)',
      cursor: canEdit ? 'pointer' : 'not-allowed'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "x",
    size: 15
  })));
}
const cellStyle = {
  width: '100%',
  border: '1px solid var(--border-subtle)',
  borderRadius: 5,
  padding: '5px 7px',
  fontSize: 12.5,
  background: 'var(--surface-card)',
  color: 'var(--text-primary)',
  boxSizing: 'border-box'
};

// ---------------- List editor (roastery steps / grind types / consulting services) ----------------
function ListItemCard({
  item,
  fields,
  canEdit,
  onChange,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 12,
      background: 'var(--surface-card)',
      marginBottom: 10,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    disabled: !canEdit,
    onClick: onRemove,
    title: "Remove",
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      border: 'none',
      background: 'transparent',
      color: 'var(--danger)',
      cursor: canEdit ? 'pointer' : 'not-allowed'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "x",
    size: 13
  })), fields.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.key,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      marginBottom: 3
    }
  }, f.label), f.long ? /*#__PURE__*/React.createElement("textarea", {
    disabled: !canEdit,
    value: item[f.key] || '',
    onChange: e => onChange(f.key, e.target.value),
    rows: 2,
    style: {
      ...inputStyle,
      resize: 'vertical',
      fontSize: 12.5
    }
  }) : /*#__PURE__*/React.createElement("input", {
    disabled: !canEdit,
    value: item[f.key] || '',
    onChange: e => onChange(f.key, e.target.value),
    style: {
      ...inputStyle,
      fontSize: 12.5
    }
  }))));
}
function ListEditor({
  listKey,
  label,
  fields,
  items,
  canEdit,
  onSaveList,
  highlighted
}) {
  const [local, setLocal] = React.useState(items || []);
  React.useEffect(() => setLocal(items || []), [items]);
  const timerRef = React.useRef(null);
  React.useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);
  // All mutations (typing, add, remove) funnel through here and debounce to
  // one save ~600ms after the last change — avoids the old bug where a
  // field's blur-triggered autosave and an Add/Remove button's own save
  // could race and land out of order.
  const scheduleSave = next => {
    setLocal(next);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSaveList(listKey, next);
      timerRef.current = null;
    }, 600);
  };
  const updateItem = (i, key, val) => scheduleSave(local.map((it, idx) => idx === i ? {
    ...it,
    [key]: val
  } : it));
  const removeItem = i => scheduleSave(local.filter((_, idx) => idx !== i));
  const addItem = () => {
    const blank = {};
    fields.forEach(f => {
      blank[f.key] = '';
    });
    scheduleSave([...local, blank]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: highlighted ? 'var(--bk-terracotta-100)' : 'transparent',
      borderRadius: 8,
      padding: highlighted ? 6 : 0,
      transition: 'background .6s ease'
    }
  }, local.map((item, i) => /*#__PURE__*/React.createElement(ListItemCard, {
    key: i,
    item: item,
    fields: fields,
    canEdit: canEdit,
    onChange: (k, v) => updateItem(i, k, v),
    onRemove: () => removeItem(i)
  })), /*#__PURE__*/React.createElement("button", {
    onClick: addItem,
    disabled: !canEdit,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: '1px dashed var(--border-strong)',
      background: 'transparent',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 11px',
      fontSize: 12,
      fontWeight: 600,
      cursor: canEdit ? 'pointer' : 'not-allowed'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 13
  }), " Add item"));
}

// ---------------- Main ----------------
function ContentAdmin() {
  const [apiBase, setApiBase] = React.useState(window.BK_CONFIG && window.BK_CONFIG.apiBase || 'http://localhost:4000');
  const [token, setToken] = React.useState(localStorage.getItem('bk_content_token') || '');
  const [user, setUser] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bk_content_user') || 'null');
    } catch (e) {
      return null;
    }
  });
  const [health, setHealth] = React.useState('checking');
  const [stringsArr, setStringsArr] = React.useState(() => Object.keys(window.BK_I18N || {}).map(k => ({
    key: k,
    en: window.BK_I18N[k][0],
    kn: window.BK_I18N[k][1]
  })));
  const [products, setProducts] = React.useState(window.BK_PRODUCTS_DEFAULT || []);
  const [lists, setLists] = React.useState(() => ({
    ...(window.BK_LISTS_DEFAULT || {})
  }));
  const [activePageId, setActivePageId] = React.useState('home');
  const [lang, setLang] = React.useState('en');
  const [iframeApp, setIframeApp] = React.useState('marketing');
  const [iframeSrc, setIframeSrc] = React.useState(() => iframeSrcFor('marketing', 'home'));
  const [toast, setToast] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const [highlight, setHighlight] = React.useState(null); // {key} or {productId}
  const iframeRef = React.useRef(null);
  const activePage = CFG.PAGES.find(p => p.id === activePageId);
  const flash = (m, bad) => {
    setToast({
      m,
      bad
    });
    setTimeout(() => setToast(null), 2400);
  };
  const authHeaders = () => ({
    'Content-Type': 'application/json',
    ...(token ? {
      Authorization: `Bearer ${token}`
    } : {})
  });
  const loadAll = React.useCallback(async () => {
    try {
      const h = await fetch(apiBase + '/api/health');
      setHealth(h.ok ? 'online' : 'offline');
      if (!h.ok) return;
      const [sRes, pRes] = await Promise.all([fetch(apiBase + '/api/content/strings'), fetch(apiBase + '/api/content/products')]);
      const sRows = await sRes.json();
      const sMap = {};
      sRows.forEach(r => {
        sMap[r.key] = r;
      });
      setStringsArr(prev => prev.map(row => sMap[row.key] ? {
        ...row,
        en: sMap[row.key].en,
        kn: sMap[row.key].kn
      } : row));
      const pRows = await pRes.json();
      if (pRows.length) setProducts(pRows.map(r => ({
        ...r,
        price: Number(r.price),
        rating: Number(r.rating),
        count: Number(r.count)
      })));
      const lRes = await fetch(apiBase + '/api/content/lists');
      const lRows = await lRes.json();
      if (lRows.length) {
        const lMap = {};
        lRows.forEach(r => {
          lMap[r.key] = r.items;
        });
        setLists(prev => ({
          ...prev,
          ...lMap
        }));
      }
    } catch (e) {
      setHealth('offline');
    }
  }, [apiBase]);
  React.useEffect(() => {
    loadAll();
  }, [loadAll]);
  React.useEffect(() => {
    function onMsg(e) {
      if (!e.data || e.data.type !== 'bk-section-click') return;
      const section = e.data.section;
      if (section && section.startsWith('product-')) {
        const id = Number(section.split('-')[1]);
        setActivePageId('catalog');
        setHighlight({
          productId: id
        });
        setTimeout(() => setHighlight(null), 2200);
        return;
      }
      const target = CFG.SECTION_TO_PAGE[section];
      if (target) {
        setActivePageId(target.pageId);
        setHighlight({
          section
        });
        setTimeout(() => setHighlight(null), 2200);
      }
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const refreshPreview = () => {
    try {
      iframeRef.current && iframeRef.current.contentWindow.postMessage({
        type: 'bk-content-refresh'
      }, '*');
    } catch (e) {}
  };
  const selectPage = p => {
    setActivePageId(p.id);
    if (p.app !== iframeApp) {
      // Only changing apps (marketing <-> shop) remounts/reloads the iframe.
      // Navigating between pages within the SAME app must never touch `src`
      // — that used to recompute every render and cause a full reload on
      // every sidebar click, racing with the postMessage below.
      setIframeApp(p.app);
      setIframeSrc(iframeSrcFor(p.app, p.page));
    } else if (p.page && iframeRef.current) {
      try {
        iframeRef.current.contentWindow.postMessage({
          type: 'bk-goto-page',
          page: p.page
        }, '*');
      } catch (e) {}
    }
  };
  const canEdit = health === 'online' && !!token;
  const saveString = async (key, field, value) => {
    setStringsArr(prev => prev.map(r => r.key === key ? {
      ...r,
      [field]: value
    } : r));
    if (!canEdit) {
      flash('Sign in (with a backend running) to save', true);
      return;
    }
    try {
      const res = await fetch(`${apiBase}/api/content/strings/${encodeURIComponent(key)}`, {
        method: 'PUT',
        headers: authHeaders(),
        body: JSON.stringify({
          [field]: value
        })
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Save failed');
      }
      flash('Saved · live on the site');
      refreshPreview();
    } catch (e) {
      flash(e.message, true);
    }
  };
  const saveProduct = async (id, patch) => {
    setProducts(prev => prev.map(p => p.id === id ? {
      ...p,
      ...patch
    } : p));
    if (!canEdit) {
      flash('Sign in (with a backend running) to save', true);
      return;
    }
    try {
      const res = await fetch(`${apiBase}/api/content/products/${id}`, {
        method: 'PUT',
        headers: authHeaders(),
        body: JSON.stringify(patch)
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Save failed');
      }
      flash('Saved · live on the site');
      refreshPreview();
    } catch (e) {
      flash(e.message, true);
    }
  };
  const addProduct = async () => {
    if (!canEdit) {
      flash('Sign in (with a backend running) to add products', true);
      return;
    }
    // id and sort_order are assigned server-side — the draft only carries editable fields.
    const draft = {
      name: 'New product',
      cat: 'Beans',
      origin: '',
      roast: 'Medium',
      price: 0,
      rating: 4.5,
      count: 0,
      img: 'motif-coffee-bean',
      featured: false
    };
    try {
      const res = await fetch(`${apiBase}/api/content/products`, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(draft)
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Could not create product');
      }
      const row = await res.json();
      setProducts(prev => [...prev, {
        ...row,
        price: Number(row.price),
        rating: Number(row.rating),
        count: Number(row.count)
      }]);
      refreshPreview();
    } catch (e) {
      flash(e.message, true);
    }
  };
  const deleteProduct = async id => {
    if (!canEdit) return;
    setProducts(prev => prev.filter(p => p.id !== id));
    try {
      await fetch(`${apiBase}/api/content/products/${id}`, {
        method: 'DELETE',
        headers: authHeaders()
      });
      refreshPreview();
    } catch (e) {}
  };
  const saveList = async (key, items) => {
    setLists(prev => ({
      ...prev,
      [key]: items
    }));
    if (!canEdit) {
      flash('Sign in (with a backend running) to save', true);
      return;
    }
    try {
      const res = await fetch(`${apiBase}/api/content/lists/${encodeURIComponent(key)}`, {
        method: 'PUT',
        headers: authHeaders(),
        body: JSON.stringify({
          items
        })
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Save failed');
      }
      flash('Saved · live on the site');
      refreshPreview();
    } catch (e) {
      flash(e.message, true);
    }
  };
  const logout = () => {
    localStorage.removeItem('bk_content_token');
    localStorage.removeItem('bk_content_user');
    setToken('');
    setUser(null);
  };
  const navItems = CFG.PAGES.map(p => ({
    ...p,
    active: p.id === activePageId
  }));
  const panelHeader = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      margin: 0,
      flex: 1
    }
  }, activePage.label), !activePage.isCatalog && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: 2
    }
  }, [['en', 'EN'], ['kn', 'ಕ']].map(([lc, lab]) => /*#__PURE__*/React.createElement("button", {
    key: lc,
    onClick: () => setLang(lc),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontSize: 12,
      fontWeight: 700,
      background: lang === lc ? 'var(--color-primary)' : 'transparent',
      color: lang === lc ? '#FFF7EE' : 'var(--text-secondary)'
    }
  }, lab))));
  const panelBody = /*#__PURE__*/React.createElement(React.Fragment, null, !canEdit && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 0',
      padding: 10,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--warning-soft)',
      color: '#8A5E12',
      fontSize: 12,
      lineHeight: 1.5
    }
  }, health === 'offline' ? /*#__PURE__*/React.createElement(React.Fragment, null, "No API reachable at ", /*#__PURE__*/React.createElement("code", null, apiBase), " \u2014 showing local defaults, read-only.") : 'Viewing only.'), activePage.isCatalog ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 90px 90px 90px 1fr 70px 60px 60px 40px',
      gap: 8,
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      padding: '0 12px 6px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Name"), /*#__PURE__*/React.createElement("span", null, "Cat"), /*#__PURE__*/React.createElement("span", null, "Tag"), /*#__PURE__*/React.createElement("span", null, "Roast"), /*#__PURE__*/React.createElement("span", null, "Origin"), /*#__PURE__*/React.createElement("span", null, "Price"), /*#__PURE__*/React.createElement("span", null, "Rating"), /*#__PURE__*/React.createElement("span", null, "Feat."), /*#__PURE__*/React.createElement("span", null)), products.map(p => /*#__PURE__*/React.createElement(ProductRow, {
    key: p.id,
    p: p,
    canEdit: canEdit,
    onSave: saveProduct,
    onDelete: deleteProduct,
    highlighted: highlight?.productId === p.id
  })), /*#__PURE__*/React.createElement("button", {
    onClick: addProduct,
    disabled: !canEdit,
    style: {
      marginTop: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 13px',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: canEdit ? 'pointer' : 'not-allowed'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 14
  }), " Add product"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      marginTop: 14,
      lineHeight: 1.6
    }
  }, "This catalogue feeds the Online Shop grid, the marketing site's Shop (accessories) page, and any product marked \"Featured\" appears in the homepage \"From our roastery\" section.")) : activePage.groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.listKey || g.prefix,
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 6
    }
  }, g.label), g.kind === 'list' ? /*#__PURE__*/React.createElement(ListEditor, {
    listKey: g.listKey,
    label: g.label,
    fields: g.fields,
    items: lists[g.listKey],
    canEdit: canEdit,
    onSaveList: saveList,
    highlighted: highlight?.section === g.section
  }) : stringsArr.filter(r => r.key.startsWith(g.prefix)).map(row => /*#__PURE__*/React.createElement(StringField, {
    key: row.key,
    row: row,
    lang: lang,
    canEdit: canEdit,
    onSave: saveString,
    highlighted: highlight?.section === g.section
  })))));
  const toolbar = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusPill, {
    tone: health === 'online' ? 'good' : health === 'checking' ? 'idle' : 'bad',
    pulse: health === 'online'
  }, health === 'online' ? 'API connected' : health === 'checking' ? 'Checking…' : 'API offline'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Click any block in the preview to jump to its fields"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      loadAll();
      refreshPreview();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 11px',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "refresh",
    size: 13
  }), " Refresh")));
  const preview = /*#__PURE__*/React.createElement("iframe", {
    key: iframeApp,
    ref: iframeRef,
    src: iframeSrc,
    title: "Live preview",
    style: {
      width: '100%',
      height: '100%',
      border: 'none',
      background: '#fff'
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, showLogin && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(30,18,10,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onClick: e => {
      if (e.target === e.currentTarget) setShowLogin(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLogin(false),
    style: {
      position: 'absolute',
      top: -14,
      right: -14,
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "x",
    size: 14
  })), /*#__PURE__*/React.createElement(LoginScreen, {
    apiBase: apiBase,
    setApiBase: v => {
      setApiBase(v);
      localStorage.setItem('bk_api_base', v);
    },
    onLoggedIn: (t, u) => {
      setToken(t);
      setUser(u);
      localStorage.setItem('bk_content_token', t);
      localStorage.setItem('bk_content_user', JSON.stringify(u));
      setShowLogin(false);
      loadAll();
    },
    embedded: true
  }))), /*#__PURE__*/React.createElement(AdminShell, {
    portal: "Content",
    nav: navItems,
    onNav: selectPage,
    user: token ? user : null,
    onSignIn: () => setShowLogin(true),
    onSignOut: logout,
    panelHeader: panelHeader,
    panelBody: panelBody,
    toolbar: toolbar,
    preview: preview
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderLeft: `4px solid ${toast.bad ? 'var(--danger)' : 'var(--success)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 16px',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: toast.bad ? 'alert' : 'check',
    size: 16,
    color: toast.bad ? 'var(--danger)' : 'var(--success)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500
    }
  }, toast.m)));
}
window.ContentAdmin = ContentAdmin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/content-admin/ContentAdmin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/content-admin/content-config.js
try { (() => {
// Bisi Kaapi Content admin — page/section config shared by ContentAdmin.jsx.
// Maps the i18n key prefixes (ui_kits/customer/marketing/i18n.js) and the
// data-bk-section markers (added to MarketingApp/MarketingPages/ShopApp) to
// editable groups, so a click in the live preview opens the right fields.
(function () {
  const LABELS = {
    'hero.titleEm': 'Title — emphasised word',
    'hero.title1': 'Title — line 1',
    'hero.title2': 'Title — line 2',
    'hero.eyebrow': 'Eyebrow',
    'hero.body': 'Body copy',
    'hero.cta1': 'Primary button',
    'hero.cta2': 'Secondary button',
    'hero.rating': 'Rating caption',
    'cafe.p1': 'Point 1',
    'cafe.p2': 'Point 2',
    'cafe.p3': 'Point 3',
    'cafe.cta': 'Button',
    'story.title': 'Title',
    'story.body': 'Body copy',
    'story.cta': 'Link text',
    'r.estEyebrow': 'Estates — eyebrow',
    'r.estTitle': 'Estates — title',
    'cn.formEyebrow': 'Form — eyebrow',
    'cn.formTitle': 'Form — title',
    'cn.send': 'Submit button',
    'shop.admin': 'Admin link label',
    'shop.addToCart': 'Add-to-cart button',
    'shop.addQty': 'Add-quantity button'
  };
  function prettify(key) {
    if (LABELS[key]) return LABELS[key];
    const seg = key.split('.').pop();
    const withSpaces = seg.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[a-z]/, c => c.toUpperCase());
    return withSpaces.replace(/\bEyebrow\b/, 'Eyebrow').replace(/\bSub\b/, 'Subtitle').replace(/\bCta\b/i, 'Button text').replace(/\bS\b$/, 'Sub-caption');
  }

  // Long-form fields render as a textarea instead of a single-line input.
  const LONGFORM = /body|sub$|tagline|estTitle$|title$/i;
  const PAGES = [{
    id: 'home',
    label: 'Homepage',
    icon: 'coffee',
    app: 'marketing',
    page: 'home',
    groups: [{
      prefix: 'nav.',
      section: 'nav',
      label: 'Navigation'
    }, {
      prefix: 'hero.',
      section: 'hero',
      label: 'Hero'
    }, {
      prefix: 'trust.',
      section: 'trust',
      label: 'Trust strip'
    }, {
      prefix: 'story.',
      section: 'story',
      label: 'Our story'
    }, {
      prefix: 'prod.',
      section: 'products',
      label: 'Featured products (copy)'
    }, {
      prefix: 'cafe.',
      section: 'cafe',
      label: 'Café feature'
    }, {
      prefix: 'join.',
      section: 'join',
      label: 'Join the list'
    }, {
      prefix: 'foot.',
      section: 'footer',
      label: 'Footer'
    }]
  }, {
    id: 'roastery',
    label: 'Roastery',
    icon: 'flame',
    app: 'marketing',
    page: 'roastery',
    groups: [{
      prefix: 'r.',
      section: 'roastery',
      label: 'Roastery page copy'
    }, {
      kind: 'list',
      listKey: 'roastery.steps',
      section: 'roastery',
      label: 'Process steps',
      fields: [{
        key: 't',
        label: 'Title'
      }, {
        key: 'd',
        label: 'Description',
        long: true
      }, {
        key: 'img',
        label: 'Illustration key'
      }]
    }]
  }, {
    id: 'coffee',
    label: 'Coffee',
    icon: 'coffee',
    app: 'marketing',
    page: 'coffee',
    groups: [{
      prefix: 'c.',
      section: 'coffee',
      label: 'Coffee / grinds page copy'
    }, {
      kind: 'list',
      listKey: 'coffee.grinds',
      section: 'coffee',
      label: 'Grind types',
      fields: [{
        key: 't',
        label: 'Title'
      }, {
        key: 'd',
        label: 'Description',
        long: true
      }, {
        key: 'use',
        label: 'Best for'
      }, {
        key: 'badge',
        label: 'Badge (optional)'
      }]
    }]
  }, {
    id: 'shop-page',
    label: 'Shop (accessories)',
    icon: 'box',
    app: 'marketing',
    page: 'shop',
    groups: [{
      prefix: 's.',
      section: 'shop-accessories',
      label: 'Accessories page'
    }]
  }, {
    id: 'consulting',
    label: 'Consulting',
    icon: 'clipboard',
    app: 'marketing',
    page: 'consulting',
    groups: [{
      prefix: 'cn.',
      section: 'consulting',
      label: 'Consulting page copy'
    }, {
      kind: 'list',
      listKey: 'consulting.services',
      section: 'consulting',
      label: 'Services',
      fields: [{
        key: 't',
        label: 'Title'
      }, {
        key: 'd',
        label: 'Description',
        long: true
      }, {
        key: 'icon',
        label: 'Icon key'
      }]
    }]
  }, {
    id: 'online-shop',
    label: 'Online Shop',
    icon: 'box',
    app: 'shop',
    page: null,
    groups: [{
      prefix: 'shop.',
      section: 'shop-catalog',
      label: 'Shop chrome & product detail copy'
    }]
  }, {
    id: 'catalog',
    label: 'Product Catalog',
    icon: 'list',
    app: 'shop',
    page: null,
    isCatalog: true,
    groups: []
  }];
  const SECTION_TO_PAGE = {};
  PAGES.forEach(p => p.groups.forEach(g => {
    if (!g.kind) SECTION_TO_PAGE[g.section] = {
      pageId: p.id,
      prefix: g.prefix
    };
  }));
  PAGES.forEach(p => p.groups.forEach(g => {
    if (!SECTION_TO_PAGE[g.section]) SECTION_TO_PAGE[g.section] = {
      pageId: p.id
    };
  }));
  window.BK_CONTENT_CONFIG = {
    PAGES,
    SECTION_TO_PAGE,
    prettify,
    LONGFORM
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/content-admin/content-config.js", error: String((e && e.message) || e) }); }

// ui_kits/platform/dev-portal/DevPortal.jsx
try { (() => {
const {
  Shell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const NAV = [{
  icon: 'grid',
  label: 'Overview',
  view: 'overview'
}, {
  icon: 'lock',
  label: 'API keys',
  view: 'keys'
}, {
  icon: 'plug',
  label: 'Endpoints',
  view: 'endpoints'
}, {
  icon: 'bell',
  label: 'Webhooks',
  view: 'webhooks'
}, {
  icon: 'truck',
  label: 'Partners',
  badge: 2,
  view: 'partners'
}, {
  icon: 'shield',
  label: 'Access',
  view: 'access'
}];
const ENDPOINTS = [{
  m: 'GET',
  p: '/v1/products',
  d: 'List catalogue with price & stock'
}, {
  m: 'GET',
  p: '/v1/products/:id',
  d: 'Retrieve a single product'
}, {
  m: 'POST',
  p: '/v1/orders',
  d: 'Inject an order (delivery partners)'
}, {
  m: 'GET',
  p: '/v1/orders/:id',
  d: 'Order status & fulfilment'
}, {
  m: 'PATCH',
  p: '/v1/inventory/:id',
  d: 'Update stock level'
}, {
  m: 'GET',
  p: '/v1/stores',
  d: 'Store directory & hours'
}, {
  m: 'POST',
  p: '/v1/webhooks',
  d: 'Register a webhook endpoint'
}];
const M_TONE = {
  GET: 'good',
  POST: 'info',
  PATCH: 'warn',
  DELETE: 'bad'
};
const EVENTS = ['order.created', 'order.updated', 'order.ready', 'inventory.low', 'payment.settled', 'menu.updated'];
function DevPortal() {
  const [view, setView] = React.useState('overview');
  const [toast, setToast] = React.useState(null);
  const [cfg] = window.useBKConfig();
  const ROLES = cfg.access.roles;
  const APP_CATALOG = window.BKData.APP_CATALOG;
  const [newRole, setNewRole] = React.useState({
    name: '',
    who: ''
  });
  const [keys, setKeys] = React.useState([{
    id: 'k1',
    name: 'Storefront (publishable)',
    prefix: 'pk_live_',
    tail: '9f2a',
    scope: 'read',
    created: '12 Jun',
    last: '2m ago'
  }, {
    id: 'k2',
    name: 'Server (secret)',
    prefix: 'sk_live_',
    tail: 'c71e',
    scope: 'read/write',
    created: '12 Jun',
    last: '14s ago'
  }, {
    id: 'k3',
    name: 'Zomato partner',
    prefix: 'pk_prt_',
    tail: 'z88a',
    scope: 'orders',
    created: '20 Jun',
    last: '1m ago'
  }]);
  const [hooks, setHooks] = React.useState([{
    id: 'h1',
    url: 'https://zomato.com/webhooks/bisikaapi',
    events: ['order.created', 'order.updated'],
    ok: true
  }, {
    id: 'h2',
    url: 'https://swiggy.com/partner/hooks/bk',
    events: ['order.created'],
    ok: true
  }, {
    id: 'h3',
    url: 'https://hooks.internal.bisikaapi/os',
    events: ['inventory.low', 'payment.settled'],
    ok: false
  }]);
  const [reveal, setReveal] = React.useState({});
  const [log, setLog] = React.useState([{
    ts: '09:42',
    partner: 'Zomato',
    ev: 'order.created',
    code: 201,
    id: 'ZOM-8841'
  }, {
    ts: '09:39',
    partner: 'Swiggy',
    ev: 'order.created',
    code: 201,
    id: 'SWG-2207'
  }, {
    ts: '09:33',
    partner: 'Zomato',
    ev: 'order.updated',
    code: 200,
    id: 'ZOM-8840'
  }]);
  const nav = NAV.map(n => ({
    ...n,
    active: n.view === view,
    badge: n.view === 'access' ? Object.keys(ROLES).length : n.badge
  }));
  const flash = m => {
    setToast(m);
    setTimeout(() => setToast(null), 2000);
  };
  const now = () => {
    const d = new Date();
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  };
  const revoke = id => {
    setKeys(k => k.filter(x => x.id !== id));
    flash('API key revoked');
  };
  const rotate = id => {
    setKeys(k => k.map(x => x.id === id ? {
      ...x,
      tail: Math.random().toString(16).slice(2, 6),
      last: 'just now'
    } : x));
    flash('Key rotated');
  };
  const addKey = () => {
    setKeys(k => [...k, {
      id: 'k' + Date.now(),
      name: 'New key',
      prefix: 'pk_live_',
      tail: Math.random().toString(16).slice(2, 6),
      scope: 'read',
      created: now(),
      last: 'never'
    }]);
    flash('API key created');
  };
  const inject = partner => {
    const id = partner.slice(0, 3).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 8999);
    setLog(l => [{
      ts: now(),
      partner,
      ev: 'order.created',
      code: 201,
      id,
      _k: Math.random()
    }, ...l].slice(0, 40));
    try {
      if (window.BKData) window.BKData.tick();
    } catch (e) {}
    flash(partner + ' order ' + id + ' injected → POST /v1/orders');
  };
  const partners = [{
    name: 'Zomato',
    cat: 'Delivery marketplace',
    ok: true,
    orders: 128,
    img: 'truck'
  }, {
    name: 'Swiggy',
    cat: 'Delivery marketplace',
    ok: true,
    orders: 96,
    img: 'truck'
  }, {
    name: 'DotPe',
    cat: 'QR ordering',
    ok: false,
    orders: 0,
    img: 'plug'
  }, {
    name: 'Google Reserve',
    cat: 'Bookings',
    ok: false,
    orders: 0,
    img: 'calendar'
  }];
  const kpis = [{
    icon: 'plug',
    value: '18.4k',
    label: 'API calls today',
    delta: '+11%'
  }, {
    icon: 'lock',
    value: String(keys.length),
    label: 'Active keys'
  }, {
    icon: 'bell',
    value: String(hooks.filter(h => h.ok).length) + '/' + hooks.length,
    label: 'Webhooks healthy'
  }, {
    icon: 'truck',
    value: String(partners.filter(p => p.ok).length),
    label: 'Live partners'
  }, {
    icon: 'checkCircle',
    value: '99.95%',
    label: 'Uptime'
  }];
  const KeyRow = ({
    k
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1.4fr 100px 90px 150px',
      gap: 12,
      alignItems: 'center',
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, k.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      background: 'var(--surface-sunken)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, k.prefix, reveal[k.id] ? '4b8e2f' + k.tail : '••••••', reveal[k.id] ? '' : k.tail), /*#__PURE__*/React.createElement("button", {
    onClick: () => setReveal(r => ({
      ...r,
      [k.id]: !r[k.id]
    })),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 11,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600
    }
  }, reveal[k.id] ? 'Hide' : 'Show')), /*#__PURE__*/React.createElement(StatusPill, {
    tone: k.scope.includes('write') ? 'warn' : k.scope === 'orders' ? 'info' : 'good'
  }, k.scope), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, k.last), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => rotate(k.id),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Rotate"), /*#__PURE__*/React.createElement("button", {
    onClick: () => revoke(k.id),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--danger)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Revoke")));
  const keysPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "API keys",
    icon: "lock",
    pad: 0,
    action: /*#__PURE__*/React.createElement("button", {
      onClick: addKey,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        border: 'none',
        background: 'var(--color-primary)',
        color: '#FFF7EE',
        borderRadius: 'var(--radius-sm)',
        padding: '7px 12px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12.5,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: "plus",
      size: 14
    }), " Create key")
  }, keys.map(k => /*#__PURE__*/React.createElement(KeyRow, {
    key: k.id,
    k: k
  })), keys.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "No keys \u2014 create one to start."));
  const endpointsPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "REST API \u2014 v1",
    icon: "plug",
    pad: 0,
    action: /*#__PURE__*/React.createElement("code", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'var(--text-muted)'
      }
    }, "https://api.bisikaapi.coffee")
  }, ENDPOINTS.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      textAlign: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: M_TONE[e.m]
  }, e.m)), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-primary)',
      minWidth: 200
    }
  }, e.p), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, e.d))));
  const webhooksPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Webhook endpoints",
    icon: "bell",
    pad: 0,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, EVENTS.length, " events available")
  }, hooks.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: h.ok ? 'var(--success)' : 'var(--danger)',
      flexShrink: 0,
      animation: h.ok ? 'bk-pulse 2s infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-primary)'
    }
  }, h.url), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 5,
      flexWrap: 'wrap'
    }
  }, h.events.map(ev => /*#__PURE__*/React.createElement("span", {
    key: ev,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--text-accent)',
      background: 'var(--bk-brass-100)',
      padding: '2px 7px',
      borderRadius: 999
    }
  }, ev)))), /*#__PURE__*/React.createElement(StatusPill, {
    tone: h.ok ? 'good' : 'bad'
  }, h.ok ? 'Delivering' : 'Failing'), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setHooks(hs => hs.map(x => x.id === h.id ? {
        ...x,
        ok: !x.ok
      } : x));
      flash('Webhook ' + (h.ok ? 'paused' : 'resumed'));
    },
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, h.ok ? 'Pause' : 'Resume'))));
  const partnersPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Delivery & channel partners",
    icon: "truck",
    pad: 16,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--success)'
      }
    }, "orders \u2192 POST /v1/orders \u2192 live store")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12
    }
  }, partners.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 14,
      background: 'var(--bk-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: p.img,
    size: 17,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, p.cat)), /*#__PURE__*/React.createElement(StatusPill, {
    tone: p.ok ? 'good' : 'idle'
  }, p.ok ? 'Connected' : 'Off')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, p.orders, " orders today"), p.ok ? /*#__PURE__*/React.createElement("button", {
    onClick: () => inject(p.name),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 11px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 13
  }), " Inject test order") : /*#__PURE__*/React.createElement("button", {
    onClick: () => flash(p.name + ' — enter partner API key in Settings'),
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-brand)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 11px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "Connect"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      margin: '20px 0 10px'
    }
  }, "Inbound order log"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, log.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e._k || i,
    style: {
      display: 'grid',
      gridTemplateColumns: '54px 90px 1fr 70px 110px',
      gap: 10,
      alignItems: 'center',
      padding: '9px 13px',
      borderBottom: i < log.length - 1 ? '1px solid var(--border-subtle)' : 'none',
      animation: i === 0 ? 'bk-fade .3s ease' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, e.ts), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, e.partner), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-accent)'
    }
  }, e.ev), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--success)'
    }
  }, e.code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-secondary)',
      textAlign: 'right'
    }
  }, e.id)))));
  const aiPanel = /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI API Insight",
    buildPrompt: () => `You are the developer-platform assistant for Bisi Kaapi's public API. Status: 18.4k calls today (+11%), ${keys.length} API keys, ${hooks.filter(h => !h.ok).length} failing webhook (internal OS hook), Zomato + Swiggy connected injecting orders via POST /v1/orders, 99.95% uptime. Give exactly 3 short actions for the platform engineer, plain-text bullets starting with "• ".`,
    fallback: `• The internal OS webhook is failing — check its endpoint auth before inventory.low events pile up in the retry queue.
• Zomato & Swiggy are both live on POST /v1/orders; add idempotency keys so retried deliveries don't double-inject orders.
• The server secret key hasn't rotated since 12 Jun — rotate it and update the partner configs to keep credentials fresh.`
  });
  const toggleRoleApp = (roleKey, appKey) => {
    const role = ROLES[roleKey];
    const apps = role.apps.includes(appKey) ? role.apps.filter(a => a !== appKey) : [...role.apps, appKey];
    window.BKData.setRoleApps(roleKey, apps);
  };
  const createRole = () => {
    if (!newRole.name.trim()) return;
    const key = newRole.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const ok = window.BKData.addRole(key, {
      name: newRole.name.trim(),
      who: newRole.who.trim() || 'Unassigned',
      icon: 'user',
      apps: []
    });
    if (ok) {
      setNewRole({
        name: '',
        who: ''
      });
      flash('Role "' + newRole.name.trim() + '" created');
    } else flash('A role with that name already exists');
  };
  const accessPanel = /*#__PURE__*/React.createElement(Panel, {
    title: "Roles & app access",
    icon: "shield",
    pad: 0,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, Object.keys(ROLES).length, " roles \xB7 ", APP_CATALOG.length, " apps")
  }, Object.entries(ROLES).map(([k, r]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '16px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bk-paper)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: r.icon,
    size: 17,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement("input", {
    value: r.who,
    onChange: e => window.BKData.renameRole(k, {
      who: e.target.value
    }),
    style: {
      border: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      padding: 0,
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, r.apps.length, "/", APP_CATALOG.length, " apps"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      window.BKData.removeRole(k);
      flash('Role "' + r.name + '" removed');
    },
    style: {
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      color: 'var(--danger)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Remove")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, APP_CATALOG.map(a => {
    const on = r.apps.includes(a.key);
    return /*#__PURE__*/React.createElement("button", {
      key: a.key,
      onClick: () => toggleRoleApp(k, a.key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: '1px solid ' + (on ? 'var(--color-primary)' : 'var(--border-default)'),
        background: on ? 'var(--bk-terracotta-100)' : 'var(--surface-card)',
        color: on ? 'var(--text-brand)' : 'var(--text-muted)',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 11px 5px 8px',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: on ? 'checkCircle' : a.icon,
      size: 13,
      color: on ? 'var(--text-brand)' : 'var(--text-muted)'
    }), " ", a.name);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newRole.name,
    onChange: e => setNewRole(n => ({
      ...n,
      name: e.target.value
    })),
    placeholder: "New role name",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: newRole.who,
    onChange: e => setNewRole(n => ({
      ...n,
      who: e.target.value
    })),
    placeholder: "Assigned to",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: createRole,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 14px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "plus",
    size: 14
  }), " Add role")));
  return /*#__PURE__*/React.createElement(Shell, {
    portal: "Developer Platform",
    tagline: "API healthy",
    headerTitle: {
      overview: 'Developer portal',
      keys: 'API keys',
      endpoints: 'Endpoints',
      webhooks: 'Webhooks',
      partners: 'Partners',
      access: 'Access'
    }[view],
    headerRight: /*#__PURE__*/React.createElement(StatusPill, {
      tone: "good",
      pulse: true
    }, "api.bisikaapi.coffee"),
    nav: nav,
    onNav: setView
  }, view === 'overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, partnersPanel, endpointsPanel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, aiPanel, keysPanel))), view === 'keys' && keysPanel, view === 'endpoints' && endpointsPanel, view === 'webhooks' && webhooksPanel, view === 'partners' && partnersPanel, view === 'access' && accessPanel, toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderLeft: '4px solid var(--success)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 16px',
      animation: 'bk-fade .3s ease',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "check",
    size: 16,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, toast)));
}
window.DevPortal = DevPortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/dev-portal/DevPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/hub/Hub.jsx
try { (() => {
const {
  Panel,
  KPIRow,
  StatusPill,
  AIInsight
} = window.PortalKit;
const PIcon = window.PIcon;
const ASSET = '../../../assets';

// ---- Apps (portals) ----
const APPS = [{
  key: 'orchestrator',
  group: 'Operations',
  name: 'Agent Orchestrator',
  desc: 'Run the business with 12 AI agents — feed, approvals, connectors.',
  icon: 'bot',
  href: '../../ops/orchestrator/index.html',
  status: 'live',
  accent: 'var(--color-primary)'
}, {
  key: 'cafe',
  group: 'Operations',
  name: 'Café Ops',
  desc: 'Front-of-house — live orders, 86 board, shifts, inventory.',
  icon: 'store',
  href: '../../ops/cafe-portal/index.html',
  status: 'live',
  accent: 'var(--bk-terracotta-500)'
}, {
  key: 'roastery',
  group: 'Operations',
  name: 'Roastery Ops',
  desc: 'Roast batches, green stock, QC, packaging.',
  icon: 'flame',
  href: '../../ops/roastery-portal/index.html',
  status: 'live',
  accent: 'var(--bk-coffee-700)'
}, {
  key: 'supply',
  group: 'Operations',
  name: 'Supply Chain',
  desc: 'Suppliers, procurement, deliveries, warehouse.',
  icon: 'truck',
  href: '../../ops/supply-portal/index.html',
  status: 'live',
  accent: 'var(--bk-brass-600)'
}, {
  key: 'finance',
  group: 'Operations',
  name: 'Finance & Accounts',
  desc: 'P&L, Tally-synced ledger, balance sheet, cash flow.',
  icon: 'dollar',
  href: '../../ops/finance-portal/index.html',
  status: 'live',
  accent: 'var(--bk-coffee-600)'
}, {
  key: 'crm',
  group: 'Operations',
  name: 'CRM & Marketing',
  desc: 'Campaigns, segments, journeys, offers & A/B.',
  icon: 'megaphone',
  href: '../../ops/crm-portal/index.html',
  status: 'live',
  accent: 'var(--bk-marigold-600)'
}, {
  key: 'shopadmin',
  group: 'Operations',
  name: 'Shop Admin',
  desc: 'Manage catalogue — inventory, pricing, availability.',
  icon: 'box',
  href: '../../ops/shop-admin/index.html',
  status: 'live',
  accent: 'var(--bk-terracotta-600)'
}, {
  key: 'store',
  group: 'Customer',
  name: 'Marketing Site',
  desc: 'Public storefront, story, products & Claude Commerce.',
  icon: 'coffee',
  href: '../../customer/marketing/index.html',
  status: 'live',
  accent: 'var(--bk-marigold-600)'
}, {
  key: 'shop',
  group: 'Customer',
  name: 'Online Shop',
  desc: 'Beans & gear catalogue, product detail, checkout.',
  icon: 'box',
  href: '../../customer/shop/index.html',
  status: 'live',
  accent: 'var(--bk-cardamom, #5E7A4F)'
}, {
  key: 'onboarding',
  group: 'Customer',
  name: 'Onboarding & Kaapi Club',
  desc: 'Sign-up, taste profile & rewards dashboard.',
  icon: 'award',
  href: '../../customer/onboarding/index.html',
  status: 'live',
  accent: 'var(--bk-marigold-500, #D9A441)'
}, {
  key: 'devportal',
  group: 'Platform',
  name: 'Developer Portal',
  desc: 'Public API — keys, endpoints, webhooks, Zomato/Swiggy.',
  icon: 'plug',
  href: '../dev-portal/index.html',
  status: 'live',
  accent: 'var(--bk-coffee-700)'
}, {
  key: 'content',
  group: 'Platform',
  name: 'Content',
  desc: 'Edit marketing copy, EN/Kannada strings & product catalogue.',
  icon: 'coffee',
  href: '../content-admin/index.html',
  status: 'live',
  accent: 'var(--bk-terracotta-500)'
}];
const SECTIONS = ['Operations', 'Customer', 'Platform'];

// ---- Roles & access ----
// Sourced live from window.BKData (managed in the Developer Portal → Access
// tab), so a grant/revoke there reflects here immediately.

const KPIS = {
  orchestrator: {
    icon: 'dollar',
    value: '₹3.24L',
    label: 'Revenue today',
    delta: '+12%'
  },
  cafe: {
    icon: 'store',
    value: '₹48.2K',
    label: 'Café sales',
    delta: '+9%'
  },
  finance: {
    icon: 'dollar',
    value: '₹1.95L',
    label: 'Net profit (MTD)',
    delta: '+6%'
  },
  roastery: {
    icon: 'flame',
    value: '53 kg',
    label: 'Roasted today',
    delta: '+6%'
  },
  supply: {
    icon: 'truck',
    value: '96%',
    label: 'On-time delivery',
    down: true,
    delta: '-1%'
  },
  store: {
    icon: 'coffee',
    value: '142',
    label: 'Online orders',
    delta: '+8%'
  },
  shop: {
    icon: 'box',
    value: '4.8★',
    label: 'Shop rating'
  }
};

// ---- Login ----
function Login({
  onPick,
  roles
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(120% 90% at 80% 10%, rgba(196,154,72,0.12), transparent 55%), var(--bk-bark)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark.png`,
    width: "44",
    height: "44",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--text-primary)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "Bisi Kaapi OS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "One sign-in for every portal"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.55,
      margin: '14px 0 18px'
    }
  }, "Choose your role to continue. Access to apps is granted by role."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, Object.entries(roles).map(([k, r]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => onPick(k),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      width: '100%',
      textAlign: 'left',
      border: '1px solid var(--border-default)',
      background: 'var(--bk-paper)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      cursor: 'pointer'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--color-primary)';
      e.currentTarget.style.background = 'var(--bk-terracotta-100)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.background = 'var(--bk-paper)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: r.icon,
    size: 18,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, r.who, " \xB7 ", r.apps.length, " apps")), /*#__PURE__*/React.createElement(PIcon, {
    name: "arrowRight",
    size: 17,
    color: "var(--text-muted)"
  }))))));
}

// ---- Hub Tweaks (expressive: reshape the whole feel) ----
const HUB_TWEAKS = /*EDITMODE-BEGIN*/{
  "mood": "warm",
  "density": "cozy",
  "accent": "#A8481F"
} /*EDITMODE-END*/;
const MOOD_VARS = {
  warm: {},
  midnight: {
    '--color-bg': '#241307',
    '--surface-card': '#3A2113',
    '--surface-sunken': '#2E1A0C',
    '--surface-dark': '#190D04',
    '--bk-paper': '#321C0E',
    '--text-primary': '#F5ECDB',
    '--text-secondary': '#CDB79B',
    '--text-muted': '#A1855F',
    '--border-subtle': 'rgba(245,236,219,0.08)',
    '--border-default': 'rgba(245,236,219,0.13)',
    '--border-strong': 'rgba(245,236,219,0.20)'
  },
  festive: {
    '--color-bg': '#FBE6C8',
    '--bk-paper': '#FFF1DC',
    '--surface-sunken': '#F6E2C2'
  }
};
const ACCENTS = ['#A8481F', '#FB8B24', '#7C2D1C', '#5E7A4F'];

// ---- Hub ----
function Hub() {
  const [roleKey, setRoleKey] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const lk = window.useBK ? window.useBK(s => s.kpis) : null;
  const [cfg] = window.useBKConfig();
  const ROLES = cfg.access.roles;
  const [tw, setTweak] = window.useTweaks(HUB_TWEAKS);
  if (!roleKey || !ROLES[roleKey]) return /*#__PURE__*/React.createElement(Login, {
    onPick: setRoleKey,
    roles: ROLES
  });
  const role = ROLES[roleKey];
  const can = k => role.apps.includes(k);
  const liveKpis = lk ? {
    ...KPIS,
    orchestrator: {
      ...KPIS.orchestrator,
      value: '₹' + (lk.revenue / 100000).toFixed(2) + 'L'
    },
    cafe: {
      ...KPIS.cafe,
      value: '₹' + (lk.cafeSales / 1000).toFixed(1) + 'K'
    },
    roastery: {
      ...KPIS.roastery,
      value: lk.roastedKg + ' kg'
    },
    supply: {
      ...KPIS.supply,
      value: lk.onTime + '%'
    },
    store: {
      ...KPIS.store,
      value: String(lk.orders)
    }
  } : KPIS;
  const kpis = role.apps.filter(k => liveKpis[k]).slice(0, 5).map(k => liveKpis[k]);
  const rootVars = {
    ...MOOD_VARS[tw.mood],
    '--color-primary': tw.accent,
    '--color-primary-hover': tw.accent,
    '--text-brand': tw.accent,
    '--text-accent': tw.accent,
    '--border-brand': tw.accent
  };
  const compact = tw.density === 'compact';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      fontFamily: 'var(--font-sans)',
      ...rootVars
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '0 26px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark-cream.png`,
    width: "32",
    height: "32",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: 'nowrap'
    }
  }, "Bisi Kaapi OS"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--success)',
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--success)',
      animation: 'bk-pulse 1.6s infinite'
    }
  }), " All systems live"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenu(m => !m),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(255,247,238,0.08)',
      border: '1px solid rgba(255,247,238,0.14)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 8px 6px 14px',
      cursor: 'pointer',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      fontWeight: 600
    }
  }, role.who), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10.5,
      color: 'var(--bk-brass-300)'
    }
  }, role.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--bk-terracotta-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12
    }
  }, role.who.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement(PIcon, {
    name: "chevronDown",
    size: 15,
    color: "var(--bk-brass-300)"
  })), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 'calc(100% + 8px)',
      width: 230,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--border-default)',
      padding: 7,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '6px 10px'
    }
  }, "Switch role"), Object.entries(ROLES).map(([k, r]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setRoleKey(k);
      setMenu(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: k === roleKey ? 'var(--bk-terracotta-100)' : 'transparent',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 10px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: r.icon,
    size: 15,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      fontWeight: k === roleKey ? 600 : 400
    }
  }, r.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '6px 4px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoleKey(null),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 10px',
      cursor: 'pointer',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "logout",
    size: 15,
    color: "var(--text-secondary)"
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, "Sign out"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '28px 26px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      color: 'var(--text-primary)',
      margin: '6px 0 0'
    }
  }, "Good morning, ", role.who.split(' ')[0], " \u2615")), kpis.length > 0 && /*#__PURE__*/React.createElement(KPIRow, {
    items: kpis
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.55fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Your apps",
    icon: "grid",
    pad: 18,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, role.apps.length, " of ", APPS.length, " granted")
  }, SECTIONS.map(sec => {
    const secApps = APPS.filter(a => a.group === sec);
    if (!secApps.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: sec,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        margin: '2px 0 10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-accent)'
      }
    }, sec), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--text-muted)'
      }
    }, secApps.filter(a => can(a.key)).length, "/", secApps.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: compact ? 'repeat(3,1fr)' : 'repeat(2,1fr)',
        gap: compact ? 10 : 14
      }
    }, secApps.map(a => {
      const allowed = can(a.key);
      const Inner = /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          padding: 16,
          background: allowed ? 'var(--bk-paper)' : 'var(--surface-sunken)',
          opacity: allowed ? 1 : 0.62,
          height: '100%',
          transition: 'box-shadow .2s, transform .2s'
        },
        onMouseEnter: allowed ? e => {
          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } : undefined,
        onMouseLeave: allowed ? e => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'none';
        } : undefined
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          marginBottom: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-md)',
          background: allowed ? a.accent : 'var(--bk-warm-300)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement(PIcon, {
        name: a.icon,
        size: 20,
        color: "#FFF7EE"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 16.5,
          color: 'var(--text-primary)'
        }
      }, a.name), allowed ? /*#__PURE__*/React.createElement(StatusPill, {
        tone: "good",
        pulse: true
      }, "Live") : /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--text-muted)'
        }
      }, /*#__PURE__*/React.createElement(PIcon, {
        name: "lock",
        size: 12,
        color: "var(--text-muted)"
      }), " No access"))), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 12.5,
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          margin: 0,
          minHeight: 36
        }
      }, a.desc), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 600,
          color: allowed ? 'var(--text-brand)' : 'var(--text-muted)'
        }
      }, allowed ? /*#__PURE__*/React.createElement(React.Fragment, null, "Open app ", /*#__PURE__*/React.createElement(PIcon, {
        name: "arrowRight",
        size: 15,
        color: "var(--text-brand)"
      })) : 'Request access'));
      return allowed ? /*#__PURE__*/React.createElement("a", {
        key: a.key,
        href: a.href,
        onClick: e => {
          e.preventDefault();
          window.location.assign(a.href + window.location.search);
        },
        style: {
          textDecoration: 'none'
        }
      }, Inner) : /*#__PURE__*/React.createElement("div", {
        key: a.key,
        title: "You don't have access to this app"
      }, Inner);
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(AIInsight, {
    title: "AI Briefing",
    buildPrompt: () => `You are Bisi Kaapi OS, the unified ops assistant for a South-Indian coffee company. The signed-in user is the ${role.name} (${role.who}) with access to: ${role.apps.join(', ')}. Today: revenue ₹3.24L (+12%), café sales ₹48.2K, 53kg roasted, on-time delivery 96%, 142 online orders, one cold-store at 94% capacity and a filter-powder reorder at the café. Give a 3-bullet morning briefing tailored to THIS role's responsibilities, each with one action, plain-text bullets starting with "• ".`,
    fallback: `• Revenue is up 12% but the café's filter-coffee powder is at 28% — clear the restock before the rush.
• Roastery is on track at 53 kg; the cold store is at 94%, so coordinate today's dairy draw-down.
• On-time delivery dipped to 96% on the Coorg lane — confirm the alternate carrier before evening dispatch.`
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Your access",
    icon: "shield",
    pad: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, APPS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.key,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: a.icon,
    size: 15,
    color: can(a.key) ? 'var(--text-brand)' : 'var(--text-muted)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: can(a.key) ? 'var(--text-primary)' : 'var(--text-muted)'
    }
  }, a.name), can(a.key) ? /*#__PURE__*/React.createElement(StatusPill, {
    tone: "good"
  }, "Granted") : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "lock",
    size: 11,
    color: "var(--text-muted)"
  }), " Locked")))))))), /*#__PURE__*/React.createElement(window.TweaksPanel, null, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Mood"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Mood",
    value: tw.mood,
    options: ['warm', 'midnight', 'festive'],
    onChange: v => setTweak('mood', v)
  }), /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Layout"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Density",
    value: tw.density,
    options: ['cozy', 'compact'],
    onChange: v => setTweak('density', v)
  }), /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Accent"
  }), /*#__PURE__*/React.createElement(window.TweakColor, {
    label: "Accent",
    value: tw.accent,
    options: ACCENTS,
    onChange: v => setTweak('accent', v)
  })));
}
window.Hub = Hub;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/hub/Hub.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/hub/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/hub/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/shared/bk-data.js
try { (() => {
/* ============================================================================
 * Bisi Kaapi OS — shared live datastore + config (plain JS, window.BKData)
 * A single configurable source of truth that simulates a live event stream
 * from every connected source (POS, Shopify, Razorpay, Tally, Shiprocket,
 * WhatsApp, …). All apps subscribe to it, so data is consistent and live.
 *
 * Swap the `connectors` adapters' `pull()` stubs for real fetch()/WebSocket
 * calls to go from simulated to production data with no UI changes.
 * ========================================================================== */
(function () {
  const CONFIG_KEY = 'bk_os_config_v1';

  /* ---- Integration catalog ----
   * Every external tool is a configurable integration. `source` is the stream
   * key it feeds; `fields` are the credentials a user enters (secret = masked).
   * Swap each adapter's pull() for a real call using creds[field] in prod. */
  const INTEGRATIONS = [{
    id: 'square',
    name: 'Square POS',
    source: 'Square POS',
    category: 'Point of Sale',
    icon: 'store',
    docs: 'developer.squareup.com',
    fields: [{
      k: 'accessToken',
      label: 'Access token',
      secret: true
    }, {
      k: 'locationId',
      label: 'Location ID'
    }]
  }, {
    id: 'shopify',
    name: 'Shopify',
    source: 'Shopify',
    category: 'E-commerce',
    icon: 'box',
    docs: 'shopify.dev',
    fields: [{
      k: 'shop',
      label: 'Shop domain',
      ph: 'bisikaapi.myshopify.com'
    }, {
      k: 'apiKey',
      label: 'Admin API key',
      secret: true
    }]
  }, {
    id: 'razorpay',
    name: 'Razorpay',
    source: 'Razorpay',
    category: 'Payments',
    icon: 'card',
    docs: 'razorpay.com/docs',
    fields: [{
      k: 'keyId',
      label: 'Key ID',
      ph: 'rzp_live_…'
    }, {
      k: 'keySecret',
      label: 'Key secret',
      secret: true
    }]
  }, {
    id: 'tally',
    name: 'Tally',
    source: 'Tally',
    category: 'Accounting',
    icon: 'receipt',
    docs: 'tallysolutions.com',
    fields: [{
      k: 'url',
      label: 'Tally server URL',
      ph: 'http://localhost:9000'
    }, {
      k: 'company',
      label: 'Company name'
    }]
  }, {
    id: 'shiprocket',
    name: 'Shiprocket',
    source: 'Shiprocket',
    category: 'Logistics',
    icon: 'truck',
    docs: 'apidocs.shiprocket.in',
    fields: [{
      k: 'email',
      label: 'Account email'
    }, {
      k: 'token',
      label: 'API token',
      secret: true
    }]
  }, {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    source: 'WhatsApp',
    category: 'Messaging',
    icon: 'message',
    docs: 'developers.facebook.com/docs/whatsapp',
    featured: true,
    fields: [{
      k: 'phoneId',
      label: 'Phone number ID'
    }, {
      k: 'wabaId',
      label: 'WABA ID'
    }, {
      k: 'token',
      label: 'Permanent access token',
      secret: true
    }, {
      k: 'verifyToken',
      label: 'Webhook verify token',
      secret: true
    }]
  }, {
    id: 'gmail',
    name: 'Gmail',
    source: 'Gmail',
    category: 'Email',
    icon: 'mail',
    docs: 'developers.google.com/gmail',
    fields: [{
      k: 'clientId',
      label: 'OAuth client ID'
    }, {
      k: 'clientSecret',
      label: 'Client secret',
      secret: true
    }]
  }, {
    id: 'slack',
    name: 'Slack',
    source: 'Slack',
    category: 'Team',
    icon: 'hash',
    docs: 'api.slack.com',
    fields: [{
      k: 'botToken',
      label: 'Bot token',
      secret: true,
      ph: 'xoxb-…'
    }]
  }, {
    id: 'sheets',
    name: 'Google Sheets',
    source: 'Google Sheets',
    category: 'Data',
    icon: 'grid',
    docs: 'developers.google.com/sheets',
    fields: [{
      k: 'serviceKey',
      label: 'Service-account JSON',
      secret: true
    }]
  }, {
    id: 'zoho',
    name: 'Zoho People',
    source: 'Zoho People',
    category: 'HR',
    icon: 'users',
    docs: 'zoho.com/people/api',
    fields: [{
      k: 'token',
      label: 'OAuth token',
      secret: true
    }]
  }, {
    id: 'zomato',
    name: 'Zomato',
    source: 'Zomato',
    category: 'Delivery',
    icon: 'truck',
    docs: 'partner-api.zomato.com',
    fields: [{
      k: 'partnerKey',
      label: 'Partner API key',
      secret: true
    }, {
      k: 'resId',
      label: 'Restaurant ID'
    }]
  }, {
    id: 'swiggy',
    name: 'Swiggy',
    source: 'Swiggy',
    category: 'Delivery',
    icon: 'truck',
    docs: 'partner.swiggy.com',
    fields: [{
      k: 'partnerKey',
      label: 'Partner API key',
      secret: true
    }, {
      k: 'outletId',
      label: 'Outlet ID'
    }]
  }];
  // Which integrations ship pre-connected (with demo creds) vs. need setup.
  const PRECONNECTED = {
    square: 1,
    shopify: 1,
    razorpay: 1,
    tally: 1,
    shiprocket: 1,
    whatsapp: 1,
    gmail: 1,
    slack: 1,
    sheets: 1
  };
  function seedIntegrations() {
    const out = {};
    INTEGRATIONS.forEach(i => {
      const on = !!PRECONNECTED[i.id];
      const creds = {};
      if (on) i.fields.forEach(f => {
        creds[f.k] = f.secret ? '••••••••••' + i.id.slice(0, 3) : 'demo-' + f.k;
      });
      out[i.id] = {
        enabled: on,
        connected: on,
        creds
      };
    });
    return out;
  }
  function connectorsFromIntegrations(integrations) {
    const c = {};
    INTEGRATIONS.forEach(i => {
      c[i.source] = !!(integrations[i.id] && integrations[i.id].enabled && integrations[i.id].connected);
    });
    return c;
  }

  // ---- Live café order queue (shared across tabs via localStorage) ----
  // Feeds Café Ops directly: online/delivery orders stream in automatically,
  // walk-ins are added manually from Café Ops, and the mobile app's checkout
  // pushes a real order here too — all three intake paths land in one queue.
  const ORDERS_KEY = 'bk_os_orders_v1';
  function seedOrders() {
    return [{
      id: '#A-241',
      who: 'Table 4',
      items: 'Bisi Kaapi ×2 · Masala Dosa',
      status: 'new',
      min: 0,
      source: 'walkin'
    }, {
      id: '#A-240',
      who: 'Takeaway · Asha',
      items: 'Bella Kaapi · Filter Coffee Cake',
      status: 'brewing',
      min: 3,
      source: 'walkin'
    }, {
      id: '#A-239',
      who: 'Table 9',
      items: 'Cardamom Latte · Cold Brew',
      status: 'brewing',
      min: 5,
      source: 'walkin'
    }, {
      id: '#A-238',
      who: 'Swiggy · 8821',
      items: 'Mysore Bonda ×3',
      status: 'ready',
      min: 8,
      source: 'swiggy'
    }, {
      id: '#A-237',
      who: 'Table 2',
      items: 'Cortado · Sukku Kaapi',
      status: 'new',
      min: 1,
      source: 'walkin'
    }];
  }
  function loadOrders() {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return seedOrders();
  }
  function saveOrders(orders) {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    } catch (e) {}
  }
  let orderSeq = 242;
  function nextOrderId() {
    return '#A-' + orderSeq++;
  }
  function addOrder({
    who,
    items,
    source = 'walkin'
  }) {
    const o = {
      id: nextOrderId(),
      who: who || 'Walk-in',
      items: items || '—',
      status: 'new',
      min: 0,
      source
    };
    state.orders = [o, ...state.orders];
    saveOrders(state.orders);
    logFeed(source === 'mobile' ? 'Customer Support' : 'Shipment', source === 'mobile' ? 'App' : SOURCE.online, `New order ${o.id} — ${o.who}`, 'active');
    return o;
  }
  function advanceOrder(id) {
    const FLOW = ['new', 'brewing', 'ready'];
    state.orders = state.orders.map(x => {
      if (x.id !== id) return x;
      const i = FLOW.indexOf(x.status);
      return i < 2 ? {
        ...x,
        status: FLOW[i + 1]
      } : x;
    });
    saveOrders(state.orders);
    emit();
  }
  function clearOrder(id) {
    state.orders = state.orders.filter(x => x.id !== id);
    saveOrders(state.orders);
    emit();
  }
  window.addEventListener('storage', e => {
    if (e.key === ORDERS_KEY) {
      state.orders = loadOrders();
      emit();
    }
  });

  // ---- Access management (roles → app grants) ----
  // Single source of truth for Bisi Kaapi OS role-based access. The Hub reads
  // this to gate the launcher; the Developer Portal's "Access" tab manages it.
  const APP_CATALOG = [{
    key: 'orchestrator',
    name: 'Agent Orchestrator',
    group: 'Operations',
    icon: 'bot'
  }, {
    key: 'cafe',
    name: 'Café Ops',
    group: 'Operations',
    icon: 'store'
  }, {
    key: 'roastery',
    name: 'Roastery Ops',
    group: 'Operations',
    icon: 'flame'
  }, {
    key: 'supply',
    name: 'Supply Chain',
    group: 'Operations',
    icon: 'truck'
  }, {
    key: 'finance',
    name: 'Finance & Accounts',
    group: 'Operations',
    icon: 'dollar'
  }, {
    key: 'crm',
    name: 'CRM & Marketing',
    group: 'Operations',
    icon: 'megaphone'
  }, {
    key: 'shopadmin',
    name: 'Shop Admin',
    group: 'Operations',
    icon: 'box'
  }, {
    key: 'store',
    name: 'Marketing Site',
    group: 'Customer',
    icon: 'coffee'
  }, {
    key: 'shop',
    name: 'Online Shop',
    group: 'Customer',
    icon: 'box'
  }, {
    key: 'onboarding',
    name: 'Onboarding & Kaapi Club',
    group: 'Customer',
    icon: 'award'
  }, {
    key: 'devportal',
    name: 'Developer Portal',
    group: 'Platform',
    icon: 'plug'
  }, {
    key: 'content',
    name: 'Content',
    group: 'Platform',
    icon: 'coffee'
  }];
  const DEFAULT_ROLES = {
    owner: {
      name: 'Owner / Admin',
      who: 'Akshay Meda',
      icon: 'shield',
      apps: ['orchestrator', 'cafe', 'roastery', 'supply', 'store', 'shop', 'onboarding', 'finance', 'shopadmin', 'devportal', 'crm', 'content']
    },
    ops: {
      name: 'Ops Director',
      who: 'Meera S',
      icon: 'grid',
      apps: ['orchestrator', 'cafe', 'roastery', 'supply', 'shop', 'onboarding', 'finance', 'shopadmin', 'crm', 'content']
    },
    cafe: {
      name: 'Café Manager',
      who: 'Asha R',
      icon: 'store',
      apps: ['cafe', 'store', 'shop', 'onboarding', 'content']
    },
    roaster: {
      name: 'Head Roaster',
      who: 'Bala K',
      icon: 'flame',
      apps: ['roastery']
    },
    supply: {
      name: 'Supply Lead',
      who: 'Dev P',
      icon: 'truck',
      apps: ['supply', 'orchestrator']
    },
    finance: {
      name: 'Finance',
      who: 'Chitra M',
      icon: 'dollar',
      apps: ['orchestrator', 'finance', 'shop']
    }
  };
  const DEFAULT_CONFIG = {
    org: {
      name: 'Bisi Kaapi',
      outlet: 'Jayanagar · Bengaluru',
      currency: '₹',
      locale: 'en'
    },
    streaming: true,
    access: {
      roles: DEFAULT_ROLES
    },
    dataMode: 'live',
    // 'live' (auto stream) | 'manual' (paused, human-edited)
    refreshMs: 4000,
    autonomy: 'supervised',
    // supervised | autonomous
    features: {
      aiInsights: true,
      claudeCommerce: true,
      approvals: true,
      notifications: true
    },
    integrations: seedIntegrations(),
    // derived source->bool map kept in sync for the stream filter
    connectors: connectorsFromIntegrations(seedIntegrations())
  };
  function loadConfig() {
    try {
      const raw = localStorage.getItem(CONFIG_KEY);
      if (raw) return deepMerge(structuredClone(DEFAULT_CONFIG), JSON.parse(raw));
    } catch (e) {}
    return structuredClone(DEFAULT_CONFIG);
  }
  function saveConfig() {
    try {
      localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
    } catch (e) {}
  }
  function deepMerge(a, b) {
    for (const k in b) {
      if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k])) a[k] = deepMerge(a[k] || {}, b[k]);else a[k] = b[k];
    }
    return a;
  }
  let config = loadConfig();

  // ---- which source each kind of event comes from ----
  const SOURCE = {
    order: 'Square POS',
    online: 'Shopify',
    pay: 'Razorpay',
    ledger: 'Tally',
    ship: 'Shiprocket',
    msg: 'WhatsApp',
    email: 'Gmail',
    team: 'Slack',
    sheet: 'Google Sheets'
  };

  // ---- seed state ----
  function seed() {
    return {
      kpis: {
        revenue: 324000,
        orders: 142,
        batches: 3,
        onTime: 96,
        cafeSales: 48260,
        roastedKg: 53,
        pendingApprovals: 4
      },
      agents: [{
        id: 'sourcing',
        name: 'Sourcing',
        unit: 'Supply Chain',
        icon: 'leaf',
        status: 'active',
        task: 'Negotiating Q3 green contract — Baba Budangiri estate',
        metric: '12',
        metricLabel: 'estates',
        src: 'Google Sheets'
      }, {
        id: 'roasting',
        name: 'Roasting',
        unit: 'Roastery',
        icon: 'coffee',
        status: 'active',
        task: 'Profiling batch #2048 — Coorg medium-dark',
        metric: '3',
        metricLabel: 'batches',
        src: 'Square POS'
      }, {
        id: 'inventory',
        name: 'Inventory',
        unit: 'Roastery',
        icon: 'box',
        status: 'waiting',
        task: 'Reorder point hit: Mysore Filter 250g',
        metric: '94%',
        metricLabel: 'fill rate',
        src: 'Google Sheets'
      }, {
        id: 'otp',
        name: 'Order-to-Pay',
        unit: 'Cross',
        icon: 'card',
        status: 'active',
        task: 'Matching 38 POs against GRNs & invoices',
        metric: '38',
        metricLabel: 'in flight',
        src: 'Tally'
      }, {
        id: 'accounts',
        name: 'Account Processing',
        unit: 'Cross',
        icon: 'receipt',
        status: 'approval',
        task: 'Vendor invoice ₹1,84,200 over tolerance',
        metric: '7',
        metricLabel: 'to post',
        src: 'Tally'
      }, {
        id: 'shipment',
        name: 'Shipment & Logistics',
        unit: 'Supply Chain',
        icon: 'truck',
        status: 'active',
        task: 'Dispatching 142 online orders via Shiprocket',
        metric: '96%',
        metricLabel: 'on-time',
        src: 'Shiprocket'
      }, {
        id: 'marketing',
        name: 'Marketing Comms',
        unit: 'Cross',
        icon: 'megaphone',
        status: 'approval',
        task: 'Drafted "New Coorg roast" campaign',
        metric: '5',
        metricLabel: 'channels',
        src: 'Gmail'
      }, {
        id: 'support',
        name: 'Customer Support',
        unit: 'Café',
        icon: 'support',
        status: 'active',
        task: 'Resolved 23 chats · 2 escalations',
        metric: '1m48s',
        metricLabel: 'avg reply',
        src: 'WhatsApp'
      }, {
        id: 'finance',
        name: 'Finance',
        unit: 'Cross',
        icon: 'dollar',
        status: 'active',
        task: 'Reconciling Razorpay settlements & GST',
        metric: '₹3.2L',
        metricLabel: 'today',
        src: 'Razorpay'
      }, {
        id: 'time',
        name: 'Time Tracking',
        unit: 'Café',
        icon: 'clock',
        status: 'active',
        task: 'Clocked 18 baristas · 1 overtime flag',
        metric: '18',
        metricLabel: 'on shift',
        src: 'Zoho People'
      }, {
        id: 'notify',
        name: 'Notifications',
        unit: 'Cross',
        icon: 'bell',
        status: 'active',
        task: 'Routed 64 alerts across channels',
        metric: '64',
        metricLabel: 'sent · 1h',
        src: 'Slack'
      }, {
        id: 'connectors',
        name: 'Connectors',
        unit: 'Cross',
        icon: 'plug',
        status: 'active',
        task: 'Syncing all source systems',
        metric: '9/10',
        metricLabel: 'healthy',
        src: 'Google Sheets'
      }],
      approvals: [{
        id: 'a1',
        agent: 'Account Processing',
        icon: 'receipt',
        title: 'Vendor invoice over tolerance',
        detail: 'Sunrise Estates · ₹1,84,200 — 6% above PO.',
        amount: '₹1,84,200',
        src: 'Tally'
      }, {
        id: 'a2',
        agent: 'Marketing Comms',
        icon: 'megaphone',
        title: 'Send "New Coorg roast" campaign',
        detail: 'Email + WhatsApp + Instagram to 12,400 contacts.',
        amount: '12.4k reach',
        src: 'Gmail'
      }, {
        id: 'a3',
        agent: 'Sourcing',
        icon: 'leaf',
        title: 'Approve Q3 green coffee contract',
        detail: 'Baba Budangiri · 800 kg @ ₹420/kg.',
        amount: '₹3,36,000',
        src: 'Google Sheets'
      }, {
        id: 'a4',
        agent: 'Order-to-Pay',
        icon: 'card',
        title: 'Release supplier payment run',
        detail: '11 invoices · net-30 due today.',
        amount: '₹7,62,900',
        src: 'Razorpay'
      }],
      feed: [{
        ts: '09:42',
        agent: 'Roasting',
        src: SOURCE.order,
        text: 'Started batch #2048 — Coorg, 12 kg, medium-dark',
        tone: 'active'
      }, {
        ts: '09:39',
        agent: 'Shipment',
        src: SOURCE.ship,
        text: 'Handed 142 orders to Shiprocket · 3 RTO flagged',
        tone: 'active'
      }, {
        ts: '09:36',
        agent: 'Inventory',
        src: SOURCE.sheet,
        text: 'Reorder point hit: Mysore Filter 250g (stock 40)',
        tone: 'waiting'
      }, {
        ts: '09:31',
        agent: 'Finance',
        src: SOURCE.pay,
        text: 'Razorpay settlement ₹3,21,540 reconciled',
        tone: 'active'
      }, {
        ts: '09:28',
        agent: 'Support',
        src: SOURCE.msg,
        text: 'Escalated ticket #8821 — wrong grind',
        tone: 'waiting'
      }],
      orders: loadOrders()
    };
  }
  let state = seed();

  // ---- event generators per source (simulated "pull") ----
  const CAFE_ITEMS = ['Bisi Kaapi', 'Bella Kaapi', 'Davara Kaapi', 'Cardamom Latte', 'Cold Brew', 'Masala Dosa', 'Mysore Bonda'];
  const randItems = () => {
    const n = 1 + Math.floor(Math.random() * 2);
    const picks = [];
    for (let i = 0; i < n; i++) picks.push(CAFE_ITEMS[Math.floor(Math.random() * CAFE_ITEMS.length)]);
    return picks.join(' · ');
  };
  const STREAM = [{
    src: SOURCE.online,
    agent: 'Shipment',
    tone: 'active',
    mk: () => `New online order #${1000 + Math.floor(Math.random() * 8999)} · ₹${(Math.floor(Math.random() * 6) + 2) * 100}`,
    kpi: k => {
      k.orders++;
      k.revenue += 240;
    },
    order: () => ({
      who: 'Online · Shopify',
      items: randItems(),
      source: 'online'
    })
  }, {
    src: SOURCE.order,
    agent: 'Support',
    tone: 'active',
    mk: () => `Café ticket settled · table ${Math.floor(Math.random() * 12) + 1}`,
    kpi: k => {
      k.cafeSales += 180;
    }
  }, {
    src: SOURCE.pay,
    agent: 'Finance',
    tone: 'active',
    mk: () => `Razorpay capture ₹${(Math.floor(Math.random() * 9) + 1) * 100} settled`,
    kpi: k => {
      k.revenue += 300;
    }
  }, {
    src: SOURCE.ship,
    agent: 'Shipment',
    tone: 'waiting',
    mk: () => `Delivery update — Coorg lane rerouted`,
    kpi: k => {
      k.onTime = Math.max(92, k.onTime - 1);
    }
  }, {
    src: SOURCE.msg,
    agent: 'Notifications',
    tone: 'active',
    mk: () => `WhatsApp low-stock alert sent to roastery`,
    kpi: () => {}
  }, {
    src: SOURCE.ledger,
    agent: 'Order-to-Pay',
    tone: 'active',
    mk: () => `Tally voucher posted · 3-way match passed`,
    kpi: () => {}
  }, {
    src: SOURCE.team,
    agent: 'Marketing',
    tone: 'active',
    mk: () => `Slack: campaign A/B winner picked (+18% open)`,
    kpi: () => {}
  }, {
    src: SOURCE.sheet,
    agent: 'Inventory',
    tone: 'waiting',
    mk: () => `Cycle count variance 0.4% — within tolerance`,
    kpi: () => {}
  }, {
    src: 'WhatsApp',
    agent: 'Support',
    tone: 'active',
    mk: () => `WhatsApp: customer order confirmed via chat`,
    kpi: k => {
      k.orders++;
    },
    wa: {
      from: 'Customer',
      text: 'Order confirmed — thanks! ☕'
    }
  }, {
    src: 'WhatsApp',
    agent: 'Marketing',
    tone: 'active',
    mk: () => `WhatsApp broadcast delivered to 1,240 contacts`,
    kpi: () => {}
  }, {
    src: 'Zomato',
    agent: 'Shipment',
    tone: 'active',
    mk: () => `Zomato order injected · ₹${(Math.floor(Math.random() * 5) + 2) * 100}`,
    kpi: k => {
      k.orders++;
      k.revenue += 260;
    },
    order: () => ({
      who: 'Zomato',
      items: randItems(),
      source: 'zomato'
    })
  }];

  // ---- pub/sub ----
  const subs = new Set();
  function emit() {
    state = {
      ...state
    };
    subs.forEach(fn => {
      try {
        fn(state);
      } catch (e) {}
    });
  }
  function subscribe(fn) {
    subs.add(fn);
    return () => subs.delete(fn);
  }

  // ---- streaming engine ----
  let timer = null;
  function now() {
    const d = new Date();
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
  function tick() {
    // only stream from ENABLED connectors
    const live = STREAM.filter(s => config.connectors[s.src]);
    if (!live.length) return;
    const e = live[Math.floor(Math.random() * live.length)];
    e.kpi(state.kpis);
    state.feed = [{
      ts: now(),
      agent: e.agent,
      src: e.src,
      text: e.mk(),
      tone: e.tone,
      _k: Math.random()
    }, ...state.feed].slice(0, 60);
    if (e.wa) state.whatsapp = [{
      ts: now(),
      from: e.wa.from,
      text: e.wa.text,
      _k: Math.random()
    }, ...(state.whatsapp || [])].slice(0, 30);
    if (e.order) {
      const o = e.order();
      state.orders = [{
        id: nextOrderId(),
        status: 'new',
        min: 0,
        ...o
      }, ...state.orders].slice(0, 40);
      saveOrders(state.orders);
    }
    emit();
  }
  function startStream() {
    stopStream();
    if (config.streaming) timer = setInterval(tick, config.refreshMs);
  }
  function stopStream() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  startStream();

  // ---- actions ----
  function decideApproval(id, ok) {
    const a = state.approvals.find(x => x.id === id);
    state.approvals = state.approvals.filter(x => x.id !== id);
    state.kpis.pendingApprovals = state.approvals.length;
    if (a) state.feed = [{
      ts: now(),
      agent: a.agent,
      src: a.src,
      text: (ok ? 'Approved: ' : 'Rejected: ') + a.title,
      tone: ok ? 'active' : 'waiting',
      _k: Math.random()
    }, ...state.feed].slice(0, 60);
    emit();
  }

  // ---- config API ----
  function getConfig() {
    return config;
  }
  function setConfig(patch) {
    config = deepMerge(structuredClone(config), patch);
    config.connectors = connectorsFromIntegrations(config.integrations);
    saveConfig();
    startStream(); // re-apply streaming + refreshMs
    emit();
  }
  function resetConfig() {
    config = structuredClone(DEFAULT_CONFIG);
    saveConfig();
    startStream();
    emit();
  }

  // ---- integration API (configurable tools with API keys) ----
  function listIntegrations() {
    return INTEGRATIONS.map(meta => ({
      ...meta,
      state: config.integrations[meta.id] || {
        enabled: false,
        connected: false,
        creds: {}
      }
    }));
  }
  function getIntegration(id) {
    const meta = INTEGRATIONS.find(i => i.id === id);
    return meta ? {
      ...meta,
      state: config.integrations[id] || {
        enabled: false,
        connected: false,
        creds: {}
      }
    } : null;
  }
  // Save creds + mark connected when required fields are present.
  function connectIntegration(id, creds) {
    const meta = INTEGRATIONS.find(i => i.id === id);
    if (!meta) return false;
    const merged = {
      ...(config.integrations[id] && config.integrations[id].creds),
      ...creds
    };
    const ok = meta.fields.every(f => merged[f.k] && String(merged[f.k]).trim());
    setConfig({
      integrations: {
        [id]: {
          creds: merged,
          connected: ok,
          enabled: ok
        }
      }
    });
    logFeed(meta.name, meta.source, ok ? `${meta.name} connected via API key` : `${meta.name} credentials saved (incomplete)`, ok ? 'active' : 'waiting');
    return ok;
  }
  function disconnectIntegration(id) {
    const meta = INTEGRATIONS.find(i => i.id === id);
    if (!meta) return;
    setConfig({
      integrations: {
        [id]: {
          enabled: false,
          connected: false
        }
      }
    });
    logFeed(meta.name, meta.source, `${meta.name} disconnected`, 'waiting');
  }
  function toggleIntegration(id, on) {
    const cur = config.integrations[id] || {};
    setConfig({
      integrations: {
        [id]: {
          enabled: on && cur.connected
        }
      }
    });
  }
  function logFeed(agent, src, text, tone) {
    state.feed = [{
      ts: now(),
      agent,
      src,
      text,
      tone,
      _k: Math.random()
    }, ...state.feed].slice(0, 60);
    emit();
  }

  // ---- manual edit API (human overrides alongside the live stream) ----
  // Data mode: 'live' streams auto events; 'manual' pauses the stream so
  // hand-entered values persist. Individual edits work in either mode.
  function setDataMode(mode) {
    config.dataMode = mode;
    // manual mode pauses auto-streaming so edits aren't overwritten
    config.streaming = mode !== 'manual';
    saveConfig();
    startStream();
    emit();
  }
  function setKPI(key, value) {
    const num = typeof value === 'string' && value.trim() !== '' && !isNaN(+value) ? +value : value;
    state.kpis = {
      ...state.kpis,
      [key]: num
    };
    logFeed('Manual entry', 'Manual', `KPI updated — ${key} set to ${value}`, 'active');
  }
  function addFeedEntry({
    agent = 'Manual entry',
    src = 'Manual',
    text,
    tone = 'active'
  }) {
    if (!text || !text.trim()) return;
    state.feed = [{
      ts: now(),
      agent,
      src,
      text: text.trim(),
      tone,
      manual: true,
      _k: Math.random()
    }, ...state.feed].slice(0, 60);
    emit();
  }
  function updateFeedEntry(k, patch) {
    state.feed = state.feed.map(e => e._k === k ? {
      ...e,
      ...patch,
      manual: true
    } : e);
    emit();
  }
  function removeFeedEntry(k) {
    state.feed = state.feed.filter(e => e._k !== k);
    emit();
  }
  function updateAgent(id, patch) {
    state.agents = state.agents.map(a => a.id === id ? {
      ...a,
      ...patch,
      manual: true
    } : a);
    emit();
  }
  function addApproval({
    title,
    detail = '',
    amount = '',
    agent = 'Manual entry',
    icon = 'clipboard',
    src = 'Manual'
  }) {
    if (!title || !title.trim()) return;
    state.approvals = [{
      id: 'm' + Math.random().toString(36).slice(2, 7),
      title: title.trim(),
      detail,
      amount,
      agent,
      icon,
      src,
      manual: true
    }, ...state.approvals];
    state.kpis = {
      ...state.kpis,
      pendingApprovals: state.approvals.length
    };
    emit();
  }
  function updateApproval(id, patch) {
    state.approvals = state.approvals.map(a => a.id === id ? {
      ...a,
      ...patch
    } : a);
    emit();
  }
  // ---- access API (role → app grants, managed from Developer Portal) ----
  function setRoleApps(roleKey, apps) {
    setConfig({
      access: {
        roles: {
          [roleKey]: {
            apps
          }
        }
      }
    });
    const r = config.access.roles[roleKey];
    logFeed('Access control', 'Manual', `${r ? r.name : roleKey} access updated — ${apps.length} app(s) granted`, 'active');
  }
  function addRole(key, role) {
    if (!key || !key.trim() || config.access.roles[key]) return false;
    setConfig({
      access: {
        roles: {
          [key]: {
            name: role.name || 'New role',
            who: role.who || 'Unassigned',
            icon: role.icon || 'user',
            apps: role.apps || []
          }
        }
      }
    });
    logFeed('Access control', 'Manual', `Role "${role.name || key}" created`, 'active');
    return true;
  }
  function removeRole(key) {
    if (!config.access.roles[key]) return;
    const name = config.access.roles[key].name;
    const roles = {
      ...config.access.roles
    };
    delete roles[key];
    config.access = {
      ...config.access,
      roles
    };
    saveConfig();
    emit();
    logFeed('Access control', 'Manual', `Role "${name}" removed`, 'waiting');
  }
  function renameRole(key, patch) {
    setConfig({
      access: {
        roles: {
          [key]: patch
        }
      }
    });
  }
  function connectorHealth() {
    const list = INTEGRATIONS.map(i => ({
      n: i.name,
      source: i.source,
      ok: !!(config.integrations[i.id] && config.integrations[i.id].enabled && config.integrations[i.id].connected)
    }));
    return {
      on: list.filter(x => x.ok).length,
      total: list.length,
      list
    };
  }
  window.BKData = {
    getState: () => state,
    subscribe,
    tick,
    getConfig,
    setConfig,
    resetConfig,
    connectorHealth,
    listIntegrations,
    getIntegration,
    connectIntegration,
    disconnectIntegration,
    toggleIntegration,
    decideApproval,
    startStream,
    stopStream,
    setDataMode,
    setKPI,
    addFeedEntry,
    updateFeedEntry,
    removeFeedEntry,
    updateAgent,
    addApproval,
    updateApproval,
    logFeed,
    setRoleApps,
    addRole,
    removeRole,
    renameRole,
    addOrder,
    advanceOrder,
    clearOrder,
    INTEGRATIONS,
    DEFAULT_CONFIG,
    APP_CATALOG
  };

  // ---- React hooks (available once React is loaded) ----
  window.useBK = function (selector) {
    const [snap, set] = React.useState(() => selector ? selector(state) : state);
    React.useEffect(() => window.BKData.subscribe(s => set(selector ? selector(s) : s)), []);
    return snap;
  };
  window.useBKConfig = function () {
    const [cfg, set] = React.useState(config);
    React.useEffect(() => window.BKData.subscribe(() => set({
      ...config
    })), []);
    return [cfg, window.BKData.setConfig];
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/shared/bk-data.js", error: String((e && e.message) || e) }); }

// ui_kits/platform/shared/portal-kit.jsx
try { (() => {
// Shared scaffold for Bisi Kaapi internal ops portals (Café · Roastery · Supply Chain).
// Standalone: tokens + inline React, no DS bundle. Exposes window.PortalKit + window.PIcon.
const PORTAL_PATHS = {
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  store: 'M3 9l1.5-5h15L21 9M4 9v11h16V9M4 9h16M9 20v-6h6v6',
  flame: 'M12 2c1 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3 .5 2 2 2.5 2 2.5C9 8 12 6 12 2z',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  box: 'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8',
  warehouse: 'M22 8.35V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.35a2 2 0 0 1 1.26-1.86l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35zM6 18h12M6 14h12M6 10h12',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  calendar: 'M3 4h18v18H3zM3 10h18M8 2v4M16 2v4',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  checkCircle: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
  alert: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  plug: 'M9 2v6M15 2v6M12 8a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zM12 21v-6',
  sparkles: 'M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z',
  refresh: 'M23 4v6h-6M1 20v-6h6M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  check: 'M20 6L9 17l-5-5',
  x: 'M18 6L6 18M6 6l12 12',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.81 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.6l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 10 4.6V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 16 4.6l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 10H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  dollar: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2',
  thermometer: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z',
  scale: 'M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0L7 7zM17 7l-3 7a3 3 0 0 0 6 0l-3-7zM7 21h10',
  trendingUp: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  trendingDown: 'M23 18l-9.5-9.5-5 5L1 6M17 18h6v-6',
  clipboard: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z',
  droplet: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  plus: 'M12 5v14M5 12h14',
  receipt: 'M4 2v20l3-2 3 2 3-2 3 2 3-2V2l-3 2-3-2-3 2-3-2zM8 7h8M8 11h8M8 15h5',
  lock: 'M5 11h14v10H5zM8 11V8a4 4 0 0 1 8 0v3',
  shield: 'M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  chevronDown: 'M6 9l6 6 6-6',
  bot: 'M12 8V4M8 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM2 14h2M20 14h2M9 14v.01M15 14v.01'
};
function PIcon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = PORTAL_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, d.split('M').filter(Boolean).map((s, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: 'M' + s
  })));
}
window.PIcon = PIcon;
const ASSET = '../../../assets';

// ---- Shell ----
function DataModeToggle() {
  const cfg = window.useBKConfig ? window.useBKConfig()[0] : {
    dataMode: 'live'
  };
  const mode = cfg.dataMode || 'live';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: 3
    }
  }, [['live', 'Live'], ['manual', 'Manual']].map(([m, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => window.BKData && window.BKData.setDataMode(m),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      background: mode === m ? 'var(--color-primary)' : 'transparent',
      color: mode === m ? '#FFF7EE' : 'var(--text-secondary)'
    }
  }, lbl)));
}
function Shell({
  portal,
  tagline,
  nav,
  onNav,
  headerTitle,
  headerRight,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 224,
      flexShrink: 0,
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark-cream.png`,
    width: "32",
    height: "32",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: 'nowrap'
    }
  }, "Bisi Kaapi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bk-brass-300)',
      marginTop: 2
    }
  }, portal))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onNav) onNav(n.view || n.label);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '9px 12px',
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      fontSize: 13.5,
      fontWeight: n.active ? 600 : 500,
      color: n.active ? 'var(--bk-paper)' : 'rgba(255,247,238,0.64)',
      background: n.active ? 'rgba(255,247,238,0.10)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: n.icon,
    size: 17,
    color: n.active ? 'var(--bk-brass-300)' : 'rgba(255,247,238,0.58)'
  }), " ", n.label, n.badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      background: 'var(--color-primary)',
      color: '#fff',
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      minWidth: 18,
      height: 18,
      borderRadius: 9,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  }, n.badge)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../../platform/hub/index.html",
    onClick: e => {
      e.preventDefault();
      window.location.assign('../../platform/hub/index.html' + window.location.search);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '9px 12px',
      marginBottom: 10,
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--bk-brass-300)',
      background: 'rgba(255,247,238,0.06)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "grid",
    size: 16,
    color: "var(--bk-brass-300)"
  }), " Bisi Kaapi OS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,247,238,0.06)',
      borderRadius: 'var(--radius-md)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 11.5,
      fontWeight: 700,
      color: 'var(--bk-brass-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--success)',
      animation: 'bk-pulse 1.6s infinite'
    }
  }), " ", tagline)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(250,239,219,0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '14px 26px',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 23,
      margin: 0
    }
  }, headerTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, window.useBKConfig && /*#__PURE__*/React.createElement(DataModeToggle, null), headerRight, /*#__PURE__*/React.createElement(PIcon, {
    name: "search",
    size: 18,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement(PIcon, {
    name: "bell",
    size: 18,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--bk-terracotta-100)',
      color: 'var(--text-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12
    }
  }, "RK"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px 44px'
    }
  }, children)));
}
function Panel({
  title,
  icon,
  action,
  children,
  pad = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '13px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, icon && /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: 16,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-primary)',
      flex: 1
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children));
}

// ---- AdminShell: sidebar nav + a field/detail panel + a live preview pane.
// The CMS/admin-tool counterpart to Shell() — used by "edit X, see it live"
// tools (Content admin today; any future admin panel reuses this instead of
// hand-rolling the sidebar + two-pane layout again).
function AdminShell({
  brand = 'Bisi Kaapi',
  portal,
  nav,
  onNav,
  user,
  onSignIn,
  onSignOut,
  panelWidth = 400,
  panelHeader,
  panelBody,
  toolbar,
  preview
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 216,
      flexShrink: 0,
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/bisi-kaapi-mark-cream.png`,
    width: "30",
    height: "30",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--bk-brass-300)',
      marginTop: 2
    }
  }, portal))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(p);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '9px 12px',
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      fontSize: 13.5,
      fontWeight: p.active ? 600 : 500,
      color: p.active ? 'var(--bk-paper)' : 'rgba(255,247,238,0.64)',
      background: p.active ? 'rgba(255,247,238,0.10)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: p.icon,
    size: 16,
    color: p.active ? 'var(--bk-brass-300)' : 'rgba(255,247,238,0.58)'
  }), " ", p.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../../platform/hub/index.html",
    onClick: e => {
      e.preventDefault();
      window.location.assign('../../platform/hub/index.html' + window.location.search);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '9px 12px',
      marginBottom: 10,
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--bk-brass-300)',
      background: 'rgba(255,247,238,0.06)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "grid",
    size: 15,
    color: "var(--bk-brass-300)"
  }), " Bisi Kaapi OS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,247,238,0.06)',
      borderRadius: 'var(--radius-md)',
      padding: 10,
      fontSize: 11.5
    }
  }, user ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--bk-brass-300)'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.7,
      marginTop: 2
    }
  }, user.roleKey), onSignOut && /*#__PURE__*/React.createElement("button", {
    onClick: onSignOut,
    style: {
      marginTop: 8,
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,247,238,0.7)',
      fontSize: 11,
      cursor: 'pointer',
      padding: 0
    }
  }, "Sign out")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--bk-brass-300)'
    }
  }, "Viewing only"), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.7,
      marginTop: 2
    }
  }, "Sign in to save changes"), onSignIn && /*#__PURE__*/React.createElement("button", {
    onClick: onSignIn,
    style: {
      marginTop: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#FFF7EE',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 10px',
      fontSize: 11.5,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Sign in"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: panelWidth,
      flexShrink: 0,
      borderRight: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, panelHeader && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 12px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, panelHeader), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '4px 18px 30px'
    }
  }, panelBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, toolbar && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-card)'
    }
  }, toolbar), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#00000010',
      position: 'relative'
    }
  }, preview)));
}
function KPIRow({
  items,
  editable,
  onEdit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length},1fr)`,
      gap: 14,
      marginBottom: 20
    }
  }, items.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: k.label,
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${editable ? 'var(--bk-brass-300)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: k.icon,
    size: 18,
    color: "var(--text-accent)"
  }), k.delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: k.down ? 'var(--danger)' : 'var(--success)'
    }
  }, k.delta)), editable ? /*#__PURE__*/React.createElement("input", {
    defaultValue: k.value,
    onBlur: e => onEdit && onEdit(i, e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') e.target.blur();
    },
    style: {
      width: '100%',
      marginTop: 9,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 8px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--text-primary)',
      background: 'var(--bk-paper)',
      outline: 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 25,
      color: 'var(--text-primary)',
      marginTop: 10
    }
  }, k.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, k.label))));
}
const STATUS_TONES = {
  good: {
    fg: '#3F5536',
    bg: 'var(--success-soft)',
    dot: 'var(--success)'
  },
  warn: {
    fg: '#8A5E12',
    bg: 'var(--warning-soft)',
    dot: 'var(--warning)'
  },
  bad: {
    fg: '#7C2A1E',
    bg: 'var(--danger-soft)',
    dot: 'var(--danger)'
  },
  idle: {
    fg: 'var(--text-muted)',
    bg: 'var(--bk-warm-100)',
    dot: 'var(--bk-warm-400)'
  },
  info: {
    fg: 'var(--text-brand)',
    bg: 'var(--bk-terracotta-100)',
    dot: 'var(--color-primary)'
  }
};
function StatusPill({
  tone = 'idle',
  children,
  pulse
}) {
  const s = STATUS_TONES[tone] || STATUS_TONES.idle;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.dot,
      animation: pulse ? 'bk-pulse 1.6s infinite' : 'none'
    }
  }), children);
}
async function askClaude(prompt) {
  try {
    if (window.claude && window.claude.complete) return await window.claude.complete(prompt);
  } catch (e) {}
  return null;
}

// Reusable Claude insight panel. buildPrompt() -> string, fallback string.
function AIInsight({
  title = 'AI Insight',
  buildPrompt,
  fallback
}) {
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const gen = async () => {
    setLoading(true);
    const res = await askClaude(buildPrompt());
    setText(res || fallback);
    setLoading(false);
  };
  React.useEffect(() => {
    gen();
  }, []);
  return /*#__PURE__*/React.createElement(Panel, {
    title: title,
    icon: "sparkles",
    pad: 16,
    action: /*#__PURE__*/React.createElement("button", {
      onClick: gen,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        border: '1px solid var(--border-strong)',
        background: 'var(--surface-card)',
        color: 'var(--text-secondary)',
        borderRadius: 'var(--radius-sm)',
        padding: '5px 9px',
        fontSize: 12,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: "refresh",
      size: 13
    }), " Refresh")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg, rgba(196,154,72,0.10), transparent)',
      border: '1px solid var(--bk-brass-300)',
      borderRadius: 'var(--radius-md)',
      padding: 14,
      minHeight: 96
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--color-accent)',
      animation: 'bk-pulse 1s infinite'
    }
  }), " Analysing\u2026") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-primary)',
      lineHeight: 1.65,
      whiteSpace: 'pre-wrap'
    }
  }, text)));
}
window.PortalKit = {
  Shell,
  AdminShell,
  Panel,
  KPIRow,
  StatusPill,
  AIInsight,
  askClaude
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/shared/portal-kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
