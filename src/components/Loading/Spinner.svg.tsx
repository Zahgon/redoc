import * as React from 'react';
import styled, { keyframes } from '../../styled-components';

const _Spinner = (props: { className?: string; color: string }) => { throw new Error("STUB"); };

const rotate = keyframes`
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(_Spinner)`
  animation: 2s ${rotate} linear infinite;
  width: 50px;
  height: 50px;
  content: '';
  display: inline-block;
  margin-left: -25px;

  path {
    fill: ${props => { throw new Error("STUB"); }};
  }
`;
