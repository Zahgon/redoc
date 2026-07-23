import * as React from 'react';

import { darken, getLuminance, lighten } from 'polished';
import styled from '../../styled-components';
import { MenuItemLabel } from '../SideMenu/styled.elements';

export const SearchWrap = styled.div`
  padding: 5px 0;
`;

export const SearchInput = styled.input.attrs(() => { throw new Error("STUB"); })`
  width: calc(100% - ${props => { throw new Error("STUB"); }}px);
  box-sizing: border-box;
  margin: 0 ${props => { throw new Error("STUB"); }}px;
  padding: 5px ${props => { throw new Error("STUB"); }}px 5px
    ${props => { throw new Error("STUB"); }}px;
  border: 0;
  border-bottom: 1px solid
    ${({ theme }) =>
      { throw new Error("STUB"); }};
  font-family: ${({ theme }) => { throw new Error("STUB"); }};
  font-weight: bold;
  font-size: 13px;
  color: ${props => { throw new Error("STUB"); }};
  background-color: transparent;
  outline: none;
`;

export const SearchIcon = styled((props: { className?: string }) => { throw new Error("STUB"); }).attrs({
  className: 'search-icon',
})`
  position: absolute;
  left: ${props => { throw new Error("STUB"); }}px;
  height: 1.8em;
  width: 0.9em;

  path {
    fill: ${props => { throw new Error("STUB"); }};
  }
`;

export const SearchResultsBox = styled.div`
  padding: ${props => { throw new Error("STUB"); }}px 0;
  background-color: ${({ theme }) => { throw new Error("STUB"); }}};
  color: ${props => { throw new Error("STUB"); }};
  min-height: 150px;
  max-height: 250px;
  border-top: ${({ theme }) => { throw new Error("STUB"); }}};
  border-bottom: ${({ theme }) => { throw new Error("STUB"); }}};
  margin-top: 10px;
  line-height: 1.4;
  font-size: 0.9em;
  
  li {
    background-color: inherit;
  }

  ${MenuItemLabel} {
    padding-top: 6px;
    padding-bottom: 6px;

    &:hover,
    &.active {
      background-color: ${({ theme }) => { throw new Error("STUB"); }};
    }

    > svg {
      display: none;
    }
  }
`;

export const ClearIcon = styled.i`
  position: absolute;
  display: inline-block;
  width: ${props => { throw new Error("STUB"); }}px;
  text-align: center;
  right: ${props => { throw new Error("STUB"); }}px;
  line-height: 2em;
  vertical-align: middle;
  margin-right: 2px;
  cursor: pointer;
  font-style: normal;
  color: '#666';
`;
