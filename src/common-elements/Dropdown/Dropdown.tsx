import * as React from 'react';
import styled from '../../styled-components';
import { ArrowIconProps, DropdownProps, DropdownOption } from './types';

const ArrowSvg = ({ className, style }: ArrowIconProps): JSX.Element => { throw new Error("STUB"); };

const ArrowIcon = styled(ArrowSvg)`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8px;
  margin: auto;
  text-align: center;
  polyline {
    color: ${props => { throw new Error("STUB"); }};
  }
`;

const DropdownComponent = (props: DropdownProps): JSX.Element => {
    throw new Error("STUB");
};

export const Dropdown = React.memo<DropdownProps>(DropdownComponent);
