import * as React from 'react';
import styled from 'styled-components';

const TOLERANCE_PX = 20;

interface SeeMoreProps {
  children?: React.ReactNode;
  height: string;
}

export function SeeMore({ children, height }: SeeMoreProps): JSX.Element {
    throw new Error("STUB");
}

const Container = styled.div`
  overflow-y: hidden;
`;

const ButtonContainer = styled.div<{ $dimmed?: boolean }>`
  text-align: center;
  line-height: 1.5em;
  ${({ $dimmed }) =>
    { throw new Error("STUB"); }}
`;

const ButtonLinkStyled = styled.a`
  cursor: pointer;
`;
