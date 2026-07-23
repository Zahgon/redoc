import * as React from 'react';
import { TypeFormat, TypePrefix } from '../../common-elements/fields';
import { ConstraintsView } from './FieldConstraints';
import { Pattern } from './Pattern';
import { SchemaModel } from '../../services';
import styled from '../../styled-components';
import { OptionsContext } from '../OptionsProvider';

export function ArrayItemDetails({ schema }: { schema: SchemaModel }) {
    throw new Error("STUB");
}

const Wrapper = styled(TypePrefix)`
  margin: 0 5px;
  vertical-align: text-top;
`;
