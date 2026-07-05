import React from 'react';

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  name?: string;
  disabled?: boolean;
  /** @default "column" */
  direction?: 'row' | 'column';
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export function Radio(props: RadioProps): JSX.Element;
