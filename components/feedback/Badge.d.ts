import React from 'react';

export interface BadgeProps {
  /** @default "neutral" */
  tone?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'solid';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
