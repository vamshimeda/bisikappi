import React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
