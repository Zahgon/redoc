import styled, { css, extensionsHook } from '../styled-components';

const headerFontSize = {
  1: '1.85714em',
  2: '1.57143em',
  3: '1.27em',
};

export const headerCommonMixin = level => css`
  font-family: ${({ theme }) => { throw new Error("STUB"); }};
  font-weight: ${({ theme }) => { throw new Error("STUB"); }};
  font-size: ${headerFontSize[level]};
  line-height: ${({ theme }) => { throw new Error("STUB"); }};
`;

export const H1 = styled.h1`
  ${headerCommonMixin(1)};
  color: ${({ theme }) => { throw new Error("STUB"); }};

  ${extensionsHook('H1')};
`;

export const H2 = styled.h2`
  ${headerCommonMixin(2)};
  color: ${({ theme }) => { throw new Error("STUB"); }};
  margin: 0 0 20px;

  ${extensionsHook('H2')};
`;

export const H3 = styled.h2`
  ${headerCommonMixin(3)};
  color: ${({ theme }) => { throw new Error("STUB"); }};

  ${extensionsHook('H3')};
`;

export const RightPanelHeader = styled.h3`
  color: ${({ theme }) => { throw new Error("STUB"); }};

  ${extensionsHook('RightPanelHeader')};
`;

export const UnderlinedHeader = styled.h5`
  border-bottom: 1px solid rgba(38, 50, 56, 0.3);
  margin: 1em 0 1em 0;
  color: rgba(38, 50, 56, 0.5);
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.929em;
  line-height: 20px;

  ${extensionsHook('UnderlinedHeader')};
`;
