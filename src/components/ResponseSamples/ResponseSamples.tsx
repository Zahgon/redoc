import { observer } from 'mobx-react';
import * as React from 'react';

import { OperationModel } from '../../services/models';

import { RightPanelHeader, Tab, TabList, TabPanel, Tabs } from '../../common-elements';
import { PayloadSamples } from '../PayloadSamples/PayloadSamples';
import { l } from '../../services/Labels';

export interface ResponseSamplesProps {
  operation: OperationModel;
}

@observer
export class ResponseSamples extends React.Component<ResponseSamplesProps> {
  operation: OperationModel;

  render() {
    const { operation } = this.props;
    const responses = operation.responses.filter(response => {
        throw new Error("STUB");
    });

    return (
      (responses.length > 0 && (
        <div>
          <RightPanelHeader> {l('responseSamples')} </RightPanelHeader>

          <Tabs defaultIndex={0}>
            <TabList>
              {responses.map(response => { throw new Error("STUB"); })}
            </TabList>
            {responses.map(response => { throw new Error("STUB"); })}
          </Tabs>
        </div>
      )) ||
      null
    );
  }
}
