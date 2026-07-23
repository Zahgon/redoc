import styled from '../styled-components';
import { PrismDiv } from './PrismDiv';

export const SampleControls = styled.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    background-color: transparent;
    border: 0;
    color: inherit;
    padding: 2px 10px;
    font-family: ${({ theme }) => { throw new Error("STUB"); }};
    font-size: ${({ theme }) => { throw new Error("STUB"); }};
    line-height: ${({ theme }) => { throw new Error("STUB"); }};
    cursor: pointer;
    outline: 0;

    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const SampleControlsWrap = styled.div`
  &:hover ${SampleControls} {
    opacity: 1;
  }
`;

export const StyledPre = styled(PrismDiv).attrs({
  as: 'pre',
})`
  font-family: ${props => { throw new Error("STUB"); }};
  font-size: ${props => { throw new Error("STUB"); }};
  overflow-x: auto;
  margin: 0;

  white-space: ${({ theme }) => { throw new Error("STUB"); }};
`;
