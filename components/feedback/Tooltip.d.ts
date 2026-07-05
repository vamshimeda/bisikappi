import React from 'react';

export interface TooltipProps {
  content: React.ReactNode;
  /** @default "top" */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps): JSX.Element;
