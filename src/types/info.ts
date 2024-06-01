import { JSXElementConstructor } from 'react';

export interface Info {
  title: string;
  total: string;
  percentage: string;
  icon: JSXElementConstructor<{ className: string }>;
  className: string;
}
