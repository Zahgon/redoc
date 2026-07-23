import styled from '../../styled-components';

export const OperationEndpointWrap = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`;

export const ServerRelativeURL = styled.span`
  font-family: ${props => { throw new Error("STUB"); }};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const EndpointInfo = styled.button<{ $expanded?: boolean; $inverted?: boolean }>`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${props => { throw new Error("STUB"); }};
  border-radius: ${props => { throw new Error("STUB"); }};
  background-color: ${props =>
    { throw new Error("STUB"); }};
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${props => { throw new Error("STUB"); }};
  border-bottom: ${props => { throw new Error("STUB"); }};
  transition: border-color 0.25s ease;

  ${props =>
    { throw new Error("STUB"); }}

  .${ServerRelativeURL} {
    color: ${props => { throw new Error("STUB"); }};
  }
  &:focus {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(128, 128, 128, 0.25);
  }
`;

export const HttpVerb = styled.span.attrs((props: { type: string; $compact?: boolean }) => { throw new Error("STUB"); })<{ type: string; $compact?: boolean }>`
  font-size: ${props => { throw new Error("STUB"); }};
  line-height: ${props => { throw new Error("STUB"); }};
  background-color: ${props => { throw new Error("STUB"); }};
  color: #ffffff;
  padding: ${props => { throw new Error("STUB"); }};
  text-transform: uppercase;
  font-family: ${props => { throw new Error("STUB"); }};
  margin: 0;
`;

export const ServersOverlay = styled.div<{ $expanded: boolean }>`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${props => { throw new Error("STUB"); }};
  color: ${props => { throw new Error("STUB"); }};
  box-sizing: border-box;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.25s ease;
  visibility: hidden;
  ${props => { throw new Error("STUB"); }}
`;

export const ServerItem = styled.div`
  padding: 10px;
`;

export const ServerUrl = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
  background: ${props => { throw new Error("STUB"); }};
  word-break: break-all;
  color: ${props => { throw new Error("STUB"); }};
  > span {
    color: ${props => { throw new Error("STUB"); }};
  }
`;
