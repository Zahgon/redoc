import * as React from 'react';

import { StyledPre } from '../../common-elements/samples';
import { ExampleModel } from '../../services/models';
import { ExampleValue } from './ExampleValue';
import { useExternalExample } from './exernalExampleHook';

export interface ExampleProps {
  example: ExampleModel;
  mimeType: string;
}

export function Example({ example, mimeType }: ExampleProps) {
    throw new Error("STUB");
}

export function ExternalExample({ example, mimeType }: ExampleProps) {
    throw new Error("STUB");
}
