import * as React from 'react';
import { createContext, useContext } from 'react';

import { AppStore } from '../services/';
import { RedocRawOptions } from '../services/RedocNormalizedOptions';
import { loadAndBundleSpec } from '../utils';

export interface StoreBuilderProps {
  specUrl?: string;
  spec?: object;
  store?: AppStore;

  options?: RedocRawOptions;

  onLoaded?: (e?: Error) => void;

  children: (props: { loading: boolean; store: AppStore | null }) => any;
}

export interface StoreBuilderState {
  error?: Error;
  loading: boolean;
  resolvedSpec?: any;
  prevSpec?: any;
  prevSpecUrl?: string;
}

const StoreContext = createContext<AppStore | undefined>(undefined);
const { Provider, Consumer } = StoreContext;
export { Provider as StoreProvider, Consumer as StoreConsumer, StoreContext };

export function StoreBuilder(props: StoreBuilderProps) {
    throw new Error("STUB");
}

export function useStore(): AppStore | undefined {
    throw new Error("STUB");
}
