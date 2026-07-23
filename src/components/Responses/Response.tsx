import * as React from 'react';
import { observer } from 'mobx-react';

import type { ResponseModel, MediaTypeModel } from '../../services/models';
import { ResponseDetails } from './ResponseDetails';
import { ResponseDetailsWrap, StyledResponseTitle } from './styled.elements';

export interface ResponseViewProps {
  response: ResponseModel;
}

export const ResponseView = observer(({ response }: ResponseViewProps): React.ReactElement => {
    throw new Error("STUB");
});
