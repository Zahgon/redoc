import { SecurityRequirementModel } from '../../services/models/SecurityRequirement';
import {
  ScopeName,
  SecurityRequirementAndWrap,
  SecurityRequirementOrWrap,
} from './styled.elements';
import * as React from 'react';
import { AUTH_TYPES } from '../SecuritySchemes/SecuritySchemes';

export interface SecurityRequirementProps {
  security: SecurityRequirementModel;
  showSecuritySchemeType?: boolean;
  expanded: boolean;
}

export function SecurityHeader(props: SecurityRequirementProps) {
    throw new Error("STUB");
}
