import React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Switch(props: SwitchProps): JSX.Element;
