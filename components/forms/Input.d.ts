import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  /** Static text prefix (mono), e.g. a currency symbol. */
  prefix?: React.ReactNode;
  /** Static text suffix (mono), e.g. a unit. */
  suffix?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
