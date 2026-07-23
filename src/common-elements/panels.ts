import { SECTION_ATTR } from '../services/MenuStore';
import styled, { media } from '../styled-components';

export const MiddlePanel = styled.div<{ $compact?: boolean }>`
  width: calc(100% - ${props => { throw new Error("STUB"); }});
  padding: 0 ${props => { throw new Error("STUB"); }}px;

  ${({ $compact, theme }) =>
    { throw new Error("STUB"); }};
`;

export const Section = styled.div.attrs(props => { throw new Error("STUB"); })<{ $underlined?: boolean }>`
  padding: ${props => { throw new Error("STUB"); }}px 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${media.lessThan('medium', true)`
    padding: 0;
  `}
  ${({ $underlined }) =>
    { throw new Error("STUB"); }}
`;

export const RightPanel = styled.div`
  width: ${props => { throw new Error("STUB"); }};
  color: ${({ theme }) => { throw new Error("STUB"); }};
  background-color: ${props => { throw new Error("STUB"); }};
  padding: 0 ${props => { throw new Error("STUB"); }}px;

  ${media.lessThan('medium', true)`
    width: 100%;
    padding: ${props =>
      { throw new Error("STUB"); }};
  `};
`;

export const DarkRightPanel = styled(RightPanel)`
  background-color: ${props => { throw new Error("STUB"); }};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 0;

  ${media.lessThan('medium', true)`
    flex-direction: column;
  `};
`;
