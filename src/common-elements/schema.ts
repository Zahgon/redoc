import styled from '../styled-components';
import { darken } from 'polished';
import { deprecatedCss } from './mixins';

export const OneOfList = styled.div`
  margin: 0 0 3px 0;
  display: inline-block;
`;

export const OneOfLabel = styled.span`
  font-size: 0.9em;
  margin-right: 10px;
  color: ${props => { throw new Error("STUB"); }};
  font-family: ${props => { throw new Error("STUB"); }};
}
`;

export const OneOfButton = styled.button<{ $active: boolean; $deprecated: boolean }>`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  cursor: pointer;
  border: 1px solid ${props => { throw new Error("STUB"); }};
  padding: 2px 10px;
  line-height: 1.5em;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px ${props => { throw new Error("STUB"); }};
  }

  ${({ $deprecated }) => { throw new Error("STUB"); }};

  ${props => {
    throw new Error("STUB");
}}
`;

export const ArrayOpenningLabel = styled.div`
  font-size: 0.9em;
  font-family: ${props => { throw new Error("STUB"); }};
  &::after {
    content: ' [';
  }
`;

export const ArrayClosingLabel = styled.div`
  font-size: 0.9em;
  font-family: ${props => { throw new Error("STUB"); }};
  &::after {
    content: ']';
  }
`;
