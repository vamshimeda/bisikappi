import React from 'react';

export interface QuantityStepperProps {
  value?: number;
  defaultValue?: number;
  /** @default 1 */
  min?: number;
  /** @default 99 */
  max?: number;
  /** @default "md" */
  size?: 'sm' | 'md';
  disabled?: boolean;
  onChange?: (value: number) => void;
  style?: React.CSSProperties;
}

export function QuantityStepper(props: QuantityStepperProps): JSX.Element;
