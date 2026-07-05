import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "ghost" */
  variant?: 'solid' | 'soft' | 'ghost' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also used as title tooltip). */
  label: string;
  disabled?: boolean;
  /** A single icon node; auto-sized to the button. */
  children: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
