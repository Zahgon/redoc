import * as React from 'react';
import { StyledComponent } from 'styled-components';

import { DropdownProps, MimeLabel, SimpleDropdown } from '../../common-elements/Dropdown';

export interface DropdownOrLabelProps extends DropdownProps {
  Label?: StyledComponent<any, any, Record<string, any>, never>;
  Dropdown?: StyledComponent<
    React.NamedExoticComponent<DropdownProps>,
    any,
    {
      fullWidth?: boolean | undefined;
    },
    never
  >;
}

export function DropdownOrLabel(props: DropdownOrLabelProps): JSX.Element {
    throw new Error("STUB");
}
