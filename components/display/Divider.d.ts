import React from 'react';

export interface DividerProps {
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /** Show the centered brass coffee-bean motif. */
  decorative?: boolean;
  /** Centered overline label (implies decorative layout). */
  label?: string;
  style?: React.CSSProperties;
}

export function Divider(props: DividerProps): JSX.Element;
