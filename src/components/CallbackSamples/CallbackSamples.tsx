import { observer } from 'mobx-react';
import * as React from 'react';

import styled from '../../styled-components';
import { RightPanelHeader } from '../../common-elements';
import { RedocNormalizedOptions } from '../../services';
import { CallbackModel } from '../../services/models';
import { OptionsContext } from '../OptionsProvider';
import { GenericChildrenSwitcher } from '../GenericChildrenSwitcher/GenericChildrenSwitcher';
import { DropdownOrLabel } from '../DropdownOrLabel/DropdownOrLabel';
import { InvertedSimpleDropdown, MimeLabel } from '../PayloadSamples/styled.elements';
import { CallbackPayloadSample } from './CallbackReqSamples';

export interface CallbackSamplesProps {
  callbacks: CallbackModel[];
}

@observer
export class CallbackSamples extends React.Component<CallbackSamplesProps> {
  static contextType = OptionsContext;
  context: RedocNormalizedOptions;

  private renderDropdown = props => {
      throw new Error("STUB");
  };

  render() {
    const { callbacks } = this.props;

    if (!callbacks || callbacks.length === 0) {
      return null;
    }

    const operations = callbacks
      .map(callback => { throw new Error("STUB"); })
      .reduce((a, b) => { throw new Error("STUB"); }, []);

    const hasSamples = operations.some(operation => { throw new Error("STUB"); });

    if (!hasSamples) {
      return null;
    }

    const dropdownOptions = operations.map((callback, idx) => {
        throw new Error("STUB");
    });

    return (
      <div>
        <RightPanelHeader> Callback payload samples </RightPanelHeader>

        <SamplesWrapper>
          <GenericChildrenSwitcher
            items={operations}
            renderDropdown={this.renderDropdown}
            label={'Callback'}
            options={dropdownOptions}
          >
            {callback => { throw new Error("STUB"); }}
          </GenericChildrenSwitcher>
        </SamplesWrapper>
      </div>
    );
  }
}

export const SamplesWrapper = styled.div`
  background: ${({ theme }) => { throw new Error("STUB"); }};
  padding: ${props => { throw new Error("STUB"); }}px;
`;
