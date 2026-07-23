import * as React from 'react';
import styled from '../styled-components';

const directionMap = {
  left: '90deg',
  right: '-90deg',
  up: '-180deg',
  down: '0',
};

const IntShelfIcon = (props: {
  className?: string;
  float?: 'left' | 'right';
  size?: string;
  color?: string;
  direction: 'left' | 'right' | 'up' | 'down';
  style?: React.CSSProperties;
}): JSX.Element => {
    throw new Error("STUB");
};

export const ShelfIcon = styled(IntShelfIcon)`
  height: ${props => { throw new Error("STUB"); }};
  width: ${props => { throw new Error("STUB"); }};
  min-width: ${props => { throw new Error("STUB"); }};
  vertical-align: middle;
  float: ${props => { throw new Error("STUB"); }};
  transition: transform 0.2s ease-out;
  transform: rotateZ(${props => { throw new Error("STUB"); }});

  polygon {
    fill: ${({ color, theme }) =>
      { throw new Error("STUB"); }};
  }
`;

export const Badge = styled.span<{ type: string; color?: string }>`
  display: inline-block;
  padding: 2px 8px;
  margin: 0;
  background-color: ${props => { throw new Error("STUB"); }};
  color: ${props => { throw new Error("STUB"); }};
  font-size: ${props => { throw new Error("STUB"); }};
  vertical-align: middle;
  line-height: 1.6;
  border-radius: 4px;
  font-weight: ${({ theme }) => { throw new Error("STUB"); }};
  font-size: 12px;
  + span[type] {
    margin-left: 4px;
  }
`;
