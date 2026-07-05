import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  /** Name used to derive initials when no src. */
  name?: string;
  /** Preset size or pixel number. @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
