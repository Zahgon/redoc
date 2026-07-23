import { UnderlinedHeader } from '../../common-elements';
import styled from '../../styled-components';
import { ResponseTitle } from './ResponseTitle';

export const StyledResponseTitle = styled(ResponseTitle)`
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  cursor: pointer;

  color: ${props => { throw new Error("STUB"); }};
  background-color: ${props => { throw new Error("STUB"); }};
  &:focus {
    outline: auto ${props => { throw new Error("STUB"); }};
  }
  ${props =>
    { throw new Error("STUB"); }};
`;

export const ResponseDetailsWrap = styled.div`
  padding: 10px;
`;

export const HeadersCaption = styled(UnderlinedHeader).attrs({
  as: 'caption',
})`
  text-align: left;
  margin-top: 1em;
  caption-side: top;
`;

export const Code = styled.strong`
  vertical-align: top;
`;
