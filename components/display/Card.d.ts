import React from 'react';

/**
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "raised" */
  variant?: 'raised' | 'outline' | 'sunken' | 'dark';
  /** Adds hover lift + pointer. */
  interactive?: boolean;
  /** Padding in px. @default 20 */
  padding?: number;
  /** CSS radius value. @default var(--radius-lg) */
  radius?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
