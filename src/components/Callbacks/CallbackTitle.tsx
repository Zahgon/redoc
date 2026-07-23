import * as React from 'react';

import { darken } from 'polished';
import { ShelfIcon } from '../../common-elements';
import { OperationBadge } from '../SideMenu/styled.elements';
import { shortenHTTPVerb } from '../../utils/openapi';
import styled from '../../styled-components';
import { Badge } from '../../common-elements/';
import { l } from '../../services/Labels';

export interface CallbackTitleProps {
  name: string;
  opened?: boolean;
  httpVerb: string;
  deprecated?: boolean;
  className?: string;
  onClick?: () => void;
}

export const CallbackTitle = (props: CallbackTitleProps) => {
    throw new Error("STUB");
};

const CallbackTitleWrapper = styled.button`
  border: 0;
  width: 100%;
  text-align: left;
  & > * {
    vertical-align: middle;
  }

  ${ShelfIcon} {
    polygon {
      fill: ${({ theme }) => { throw new Error("STUB"); }};
    }
  }
`;

const CallbackName = styled.span<{ $deprecated?: boolean }>`
  text-decoration: ${props => { throw new Error("STUB"); }};
  margin-right: 8px;
`;

const OperationBadgeStyled = styled(OperationBadge)`
  margin: 0 5px 0 0;
`;
