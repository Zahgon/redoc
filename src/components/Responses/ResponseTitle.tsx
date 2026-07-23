import * as React from 'react';

import { Code } from './styled.elements';
import { ShelfIcon } from '../../common-elements';
import { Markdown } from '../Markdown/Markdown';

export interface ResponseTitleProps {
  code: string;
  title: string;
  type: string;
  empty?: boolean;
  opened?: boolean;
  className?: string;
  onClick?: () => void;
}

function ResponseTitleComponent({
  title,
  type,
  empty,
  code,
  opened,
  className,
  onClick,
}: ResponseTitleProps): React.ReactElement {
    throw new Error("STUB");
}

export const ResponseTitle = React.memo<ResponseTitleProps>(ResponseTitleComponent);
