import * as React from 'react';

import { FieldLabel, ExampleValue } from '../../common-elements/fields';
import { getSerializedValue, isArray } from '../../utils';

import { l } from '../../services/Labels';
import { FieldModel } from '../../services';
import styled from '../../styled-components';

export function Examples({ field }: { field: FieldModel }) {
    throw new Error("STUB");
}

const ExamplesList = styled.ul`
  margin-top: 1em;
  list-style-position: outside;
`;
