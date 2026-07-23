import * as React from 'react';
import { observer } from 'mobx-react';

import {
  RecursiveLabel,
  TypeFormat,
  TypeName,
  TypePrefix,
  TypeTitle,
} from '../../common-elements/fields';
import { getSerializedValue, isArray, isObject } from '../../utils';
import { ExternalDocumentation } from '../ExternalDocumentation/ExternalDocumentation';
import { Markdown } from '../Markdown/Markdown';
import { EnumValues } from './EnumValues';
import { Extensions } from './Extensions';
import { FieldProps } from './Field';
import { Examples } from './Examples';
import { ConstraintsView } from './FieldConstraints';
import { FieldDetail } from './FieldDetail';

import { Badge } from '../../common-elements/';

import { l } from '../../services/Labels';
import { OptionsContext } from '../OptionsProvider';
import { Pattern } from './Pattern';
import { ArrayItemDetails } from './ArrayItemDetails';

export const FieldDetailsComponent = observer((props: FieldProps) => {
    throw new Error("STUB");
});

export const FieldDetails = React.memo<FieldProps>(FieldDetailsComponent);
