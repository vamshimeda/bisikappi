import React from 'react';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Ids open on mount. */
  defaultOpen?: string[];
  /** Allow multiple open at once. */
  multiple?: boolean;
  style?: React.CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
