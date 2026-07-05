import React from 'react';

export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Body content. */
  children?: React.ReactNode;
  /** Footer action row (right-aligned). */
  footer?: React.ReactNode;
  /** @default 460 */
  width?: number;
  style?: React.CSSProperties;
}

export function Dialog(props: DialogProps): JSX.Element;
