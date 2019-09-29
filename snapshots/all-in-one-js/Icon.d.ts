/* eslint-disable */

import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';

interface Props extends DOMAttributes<SVGElement> {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

declare const Icon: FunctionComponent<Props>;

export = Icon;
