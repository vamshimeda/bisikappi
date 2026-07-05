import React from 'react';

export interface SpinnerProps {
  /** Pixel size. @default 24 */
  size?: number;
  /** @default 3 */
  thickness?: number;
  /** Arc color. @default terracotta */
  color?: string;
  /** Optional text rendered beside the spinner. */
  label?: string;
  style?: React.CSSProperties;
}

export function Spinner(props: SpinnerProps): JSX.Element;
