import styled from '../../styled-components';
import { CallbackTitle } from './CallbackTitle';
import { darken } from 'polished';

export const StyledCallbackTitle = styled(CallbackTitle)`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  background-color: ${({ theme }) => { throw new Error("STUB"); }};
  cursor: pointer;
  outline-color: ${({ theme }) => { throw new Error("STUB"); }};
`;

export const CallbackDetailsWrap = styled.div`
  padding: 10px 25px;
  background-color: ${({ theme }) => { throw new Error("STUB"); }};
  margin-bottom: 5px;
  margin-top: 5px;
`;
