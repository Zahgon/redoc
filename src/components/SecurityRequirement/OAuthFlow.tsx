import * as React from 'react';
import { OpenAPISecurityScheme } from '../../types';
import { SecurityRow } from './styled.elements';
import { SeeMore } from '../SeeMore/SeeMore';
import { Markdown } from '../Markdown/Markdown';

export interface OAuthFlowProps {
  type: string;
  flow: OpenAPISecurityScheme['flows'][keyof OpenAPISecurityScheme['flows']];
  RequiredScopes?: JSX.Element;
}

export function OAuthFlowComponent(props: OAuthFlowProps) {
    throw new Error("STUB");
}

export const OAuthFlow = React.memo<OAuthFlowProps>(OAuthFlowComponent);
