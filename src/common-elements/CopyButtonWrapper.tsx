import * as React from 'react';
import { Tooltip } from '../common-elements/Tooltip';

import { ClipboardService } from '../services/ClipboardService';

export interface CopyButtonWrapperProps {
  data: any;
  children: (props: { renderCopyButton: () => React.ReactNode }) => React.ReactNode;
}

export const CopyButtonWrapper = (
  props: CopyButtonWrapperProps & { tooltipShown?: boolean },
): JSX.Element => {
    throw new Error("STUB");
};
