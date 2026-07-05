import React from 'react';

/**
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  /** Icon node rendered before the label */
  leadingIcon?: React.ReactNode;
  /** Icon node rendered after the label */
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
