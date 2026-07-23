import * as React from 'react';

import {
  argValueToBoolean,
  RedocNormalizedOptions,
  RedocRawOptions,
} from '../services/RedocNormalizedOptions';
import { ErrorBoundary } from './ErrorBoundary';
import { Loading } from './Loading/Loading';
import { Redoc } from './Redoc/Redoc';
import { StoreBuilder } from './StoreBuilder';

export interface RedocStandaloneProps {
  spec?: object;
  specUrl?: string;
  options?: RedocRawOptions;
  onLoaded?: (e?: Error) => any;
}

declare let __webpack_nonce__: string;

export const RedocStandalone = function (props: RedocStandaloneProps) {
    throw new Error("STUB");
};
