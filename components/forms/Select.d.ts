import React from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  disabled?: boolean;
  /** <option> elements */
  children?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
