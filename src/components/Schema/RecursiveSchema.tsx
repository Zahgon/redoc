import * as React from 'react';
import { observer } from 'mobx-react';

import { RecursiveLabel, TypeName, TypeTitle } from '../../common-elements/fields';
import { l } from '../../services/Labels';
import type { SchemaProps } from '.';

export const RecursiveSchema = observer(({ schema }: SchemaProps) => {
    throw new Error("STUB");
});
