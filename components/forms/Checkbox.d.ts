import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** Optional text label rendered beside the box. */
  label?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
