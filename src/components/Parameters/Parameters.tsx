import * as React from 'react';
import { DropdownOrLabel, DropdownOrLabelProps } from '../DropdownOrLabel/DropdownOrLabel';
import { ParametersGroup } from './ParametersGroup';

import { UnderlinedHeader } from '../../common-elements';

import { MediaContentModel } from '../../services';
import { FieldModel, RequestBodyModel } from '../../services/models';
import { MediaTypesSwitch } from '../MediaTypeSwitch/MediaTypesSwitch';
import { Schema } from '../Schema';

import { Markdown } from '../Markdown/Markdown';
import { ConstraintsView } from '../Fields/FieldConstraints';
import { RequiredLabel } from '../../common-elements/fields';
import styled from '../../styled-components';

function safePush(obj, prop, item) {
  if (!obj[prop]) {
    obj[prop] = [];
  }
  obj[prop].push(item);
}

export interface ParametersProps {
  parameters?: FieldModel[];
  body?: RequestBodyModel;
}

const PARAM_PLACES = ['path', 'query', 'cookie', 'header'];

export class Parameters extends React.PureComponent<ParametersProps> {
  orderParams(params: FieldModel[]): Record<string, FieldModel[]> {
    const res = {};
    params.forEach(param => {
        throw new Error("STUB");
    });
    return res;
  }

  render() {
    const { body, parameters = [] } = this.props;
    if (body === undefined && parameters === undefined) {
      return null;
    }

    const paramsMap = this.orderParams(parameters);

    const paramsPlaces = parameters.length > 0 ? PARAM_PLACES : [];

    const bodyContent = body && body.content;

    const bodyDescription = body && body.description;

    const bodyRequired = body && body.required;

    return (
      <>
        {paramsPlaces.map(place => { throw new Error("STUB"); })}
        {bodyContent && (
          <BodyContent
            content={bodyContent}
            description={bodyDescription}
            bodyRequired={bodyRequired}
          />
        )}
      </>
    );
  }
}

function DropdownWithinHeader({
  bodyRequired,
  ...props
}: DropdownOrLabelProps & { bodyRequired?: boolean }) {
    throw new Error("STUB");
}

export function BodyContent(props: {
  content: MediaContentModel;
  description?: string;
  bodyRequired?: boolean;
}): JSX.Element {
    throw new Error("STUB");
}

const commonStyles = `
  text-transform: lowercase;
  margin-left: 0;
  line-height: 1.5em;
`;

const RequiredBody = styled(RequiredLabel)`
  ${commonStyles}
`;

const OptionalBody = styled('div')`
  ${commonStyles}
  color: ${({ theme }) => { throw new Error("STUB"); }};
  font-size: ${props => { throw new Error("STUB"); }};
`;
