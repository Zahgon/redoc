import * as React from 'react';
import styled from '../../styled-components';

import { SampleControls } from '../../common-elements';
import { CopyButtonWrapper } from '../../common-elements/CopyButtonWrapper';
import { PrismDiv } from '../../common-elements/PrismDiv';
import { jsonToHTML } from '../../utils/jsonToHtml';
import { OptionsContext } from '../OptionsProvider';
import { jsonStyles } from './style';

export interface JsonProps {
  data: any;
  className?: string;
}

const JsonViewerWrap = styled.div`
  &:hover > ${SampleControls} {
    opacity: 1;
  }
`;

const Json = (props: JsonProps) => {
    throw new Error("STUB");
};

export const JsonViewer = styled(Json)`
  ${jsonStyles};
`;
