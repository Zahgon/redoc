import * as React from 'react';

import { DarkRightPanel, MiddlePanel, MimeLabel, Row, Section } from '../../common-elements';
import { MediaTypeModel, OpenAPIParser, RedocNormalizedOptions } from '../../services';
import styled from '../../styled-components';
import { OpenAPIMediaType } from '../../types';
import { DropdownOrLabel } from '../DropdownOrLabel/DropdownOrLabel';
import { MediaTypeSamples } from '../PayloadSamples/MediaTypeSamples';
import { InvertedSimpleDropdown } from '../PayloadSamples/styled.elements';
import { Schema } from '../Schema';

export interface ObjectDescriptionProps {
  schemaRef: string;
  exampleRef?: string;
  showReadOnly?: boolean;
  showWriteOnly?: boolean;
  showExample?: boolean;
  parser: OpenAPIParser;
  options: RedocNormalizedOptions;
}

export class SchemaDefinition extends React.PureComponent<ObjectDescriptionProps> {
  private static getMediaType(schemaRef: string, exampleRef?: string): OpenAPIMediaType {
      throw new Error("STUB");
  }

  private _mediaModel: MediaTypeModel;

  private get mediaModel() {
      throw new Error("STUB");
  }

  render() {
    const { showReadOnly = true, showWriteOnly = false, showExample = true } = this.props;
    return (
      <Section>
        <Row>
          <MiddlePanel>
            <Schema
              skipWriteOnly={!showWriteOnly}
              skipReadOnly={!showReadOnly}
              schema={this.mediaModel.schema}
            />
          </MiddlePanel>
          {showExample && (
            <DarkRightPanel>
              <MediaSamplesWrap>
                <MediaTypeSamples
                  renderDropdown={this.renderDropdown}
                  mediaType={this.mediaModel}
                />
              </MediaSamplesWrap>
            </DarkRightPanel>
          )}
        </Row>
      </Section>
    );
  }

  private renderDropdown = props => {
      throw new Error("STUB");
  };
}

const MediaSamplesWrap = styled.div`
  background: ${({ theme }) => { throw new Error("STUB"); }};
  & > div,
  & > pre {
    padding: ${props => { throw new Error("STUB"); }}px;
    margin: 0;
  }

  & > div > pre {
    padding: 0;
  }
`;
