import React from 'react';

export interface ToastProps {
  /** @default "default" */
  tone?: 'default' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Custom icon/glyph; falls back to a tone glyph. */
  icon?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}

export function Toast(props: ToastProps): JSX.Element;
