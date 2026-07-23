import * as React from 'react';
import { ExampleValue, FieldLabel } from '../../common-elements/fields';

export interface FieldDetailProps {
  value?: any;
  label: string;
  raw?: boolean;
}

function FieldDetailComponent({ value, label, raw }: FieldDetailProps) {
    throw new Error("STUB");
}

export const FieldDetail = React.memo<FieldDetailProps>(FieldDetailComponent);
