import * as React from 'react';
import { SecuritySchemeModel } from '../../services';
import { titleize } from '../../utils';
import { StyledMarkdownBlock } from '../Markdown/styled.elements';
import { SecurityRow } from './styled.elements';
import { OAuthFlow } from './OAuthFlow';

interface SecuritySchemaProps {
  RequiredScopes?: JSX.Element;
  scheme: SecuritySchemeModel;
}
export function SecurityDetails(props: SecuritySchemaProps) {
    throw new Error("STUB");
}
