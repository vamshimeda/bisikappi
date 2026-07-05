import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  disabled?: boolean;
  /** @default 4 */
  rows?: number;
}

export function Textarea(props: TextareaProps): JSX.Element;
