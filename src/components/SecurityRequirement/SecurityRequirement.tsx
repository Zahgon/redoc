import * as React from 'react';
import { useState } from 'react';
import { SecurityRequirementModel } from '../../services/models/SecurityRequirement';
import {
  AuthHeader,
  AuthHeaderColumn,
  SecuritiesColumn,
  SecurityDetailsStyle,
  Wrap,
} from './styled.elements';
import { useStore } from '../StoreBuilder';
import { SecurityHeader } from './SecurityHeader';
import { RequiredScopesRow } from './RequiredScopesRow';
import { AUTH_TYPES } from '../SecuritySchemes/SecuritySchemes';
import { Markdown } from '../Markdown/Markdown';
import { SecurityDetails } from './SecurityDetails';
import { ShelfIcon } from '../../common-elements';

export interface SecurityRequirementsProps {
  securities: SecurityRequirementModel[];
}

export function SecurityRequirements(props: SecurityRequirementsProps) {
    throw new Error("STUB");
}

const LockIcon = () => { throw new Error("STUB"); };

function getRequiredScopes(id: string, securities: SecurityRequirementModel[]): string[] {
    throw new Error("STUB");
}
