import React from 'react';

export interface RatingProps {
  /** Current rating (supports halves). */
  value?: number;
  /** @default 5 */
  max?: number;
  /** Bean size in px. @default 18 */
  size?: number;
  /** Pass to make it an interactive picker. */
  onChange?: (value: number) => void;
  /** Show the numeric value. */
  showValue?: boolean;
  /** Show a review count in parentheses. */
  count?: number;
  style?: React.CSSProperties;
}

export function Rating(props: RatingProps): JSX.Element;
