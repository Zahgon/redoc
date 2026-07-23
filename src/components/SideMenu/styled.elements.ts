import * as classnames from 'classnames';
import { darken } from 'polished';

import { deprecatedCss, ShelfIcon } from '../../common-elements';
import styled, { css, media, ResolvedThemeInterface } from '../../styled-components';

export const OperationBadge = styled.span.attrs((props: { type: string; color?: string }) => { throw new Error("STUB"); })<{ type: string; color?: string }>`
  width: 9ex;
  display: inline-block;
  height: ${props => { throw new Error("STUB"); }};
  line-height: ${props => { throw new Error("STUB"); }};
  background-color: ${props => { throw new Error("STUB"); }};
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: Verdana, sans-serif; // web-safe
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;

  &.get {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.post {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.put {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.options {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.patch {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.delete {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.basic {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.link {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.head {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.hook {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  &.schema {
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }
`;

function menuItemActive(
  depth,
  { theme }: { theme: ResolvedThemeInterface },
  option: string,
): string {
  if (depth > 1) {
    return theme.sidebar.level1Items[option];
  } else if (depth === 1) {
    return theme.sidebar.groupItems[option];
  } else {
    return '';
  }
}

export const MenuItemUl = styled.ul<{ $expanded: boolean }>`
  margin: 0;
  padding: 0;

  &:first-child {
    padding-bottom: 32px;
  }

  & & {
    font-size: 0.929em;
  }

  ${props => { throw new Error("STUB"); }};
`;

export const MenuItemLi = styled.li<{ depth: number }>`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${props => { throw new Error("STUB"); }};
`;

export const menuItemDepth = {
  0: css`
    opacity: 0.7;
    text-transform: ${({ theme }) => { throw new Error("STUB"); }};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
  `,
  1: css`
    font-size: 0.929em;
    text-transform: ${({ theme }) => { throw new Error("STUB"); }};
  `,
};

export interface MenuItemLabelType {
  $depth: number;
  $active: boolean;
  $deprecated?: boolean;
  $type?: string;
}

export const MenuItemLabel = styled.label.attrs((props: MenuItemLabelType) => { throw new Error("STUB"); })<MenuItemLabelType>`
  cursor: pointer;
  color: ${props =>
    { throw new Error("STUB"); }};
  margin: 0;
  padding: 12.5px ${props => { throw new Error("STUB"); }}px;
  ${({ $depth, $type, theme }) =>
    { throw new Error("STUB"); }}
  display: flex;
  justify-content: space-between;
  font-family: ${props => { throw new Error("STUB"); }};
  ${props => { throw new Error("STUB"); }};
  background-color: ${props =>
    { throw new Error("STUB"); }};

  ${props => { throw new Error("STUB"); }};

  &:hover {
    color: ${props => { throw new Error("STUB"); }};
    background-color: ${props => { throw new Error("STUB"); }};
  }

  ${ShelfIcon} {
    height: ${({ theme }) => { throw new Error("STUB"); }};
    width: ${({ theme }) => { throw new Error("STUB"); }};
    polygon {
      fill: ${({ theme }) => { throw new Error("STUB"); }};
    }
  }
`;

export const MenuItemTitle = styled.span<{ width?: string }>`
  display: inline-block;
  vertical-align: middle;
  width: ${props => { throw new Error("STUB"); }};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RedocAttribution = styled.div`
  ${({ theme }) => { throw new Error("STUB"); }};
  img {
    width: 15px;
    margin-right: 5px;
  }

  ${media.lessThan('small')`
    width: 100%;
  `};
`;
