import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Filled terracotta when true. */
  selected?: boolean;
  /** Renders a × button that calls this. */
  onRemove?: () => void;
  onClick?: () => void;
  leadingIcon?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
