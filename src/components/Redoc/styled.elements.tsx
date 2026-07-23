import styled, { media } from '../../styled-components';

export const RedocWrap = styled.div`
  ${({ theme }) => { throw new Error("STUB"); }};
`;

export const ApiContentWrap = styled.div`
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: calc(100% - ${props => { throw new Error("STUB"); }});
  ${media.lessThan('small', true)`
    width: 100%;
  `};

  contain: layout;
`;

export const BackgroundStub = styled.div`
  background: ${({ theme }) => { throw new Error("STUB"); }};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${({ theme }) => {
    throw new Error("STUB");
}};
  ${media.lessThan('medium', true)`
    display: none;
  `};
`;
