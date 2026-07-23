import { Lambda, observe } from 'mobx';

import type { OpenAPISpec } from '../types';
import { loadAndBundleSpec } from '../utils/loadAndBundleSpec';
import { history } from './HistoryService';
import { MarkerService } from './MarkerService';
import { MenuStore } from './MenuStore';
import { SpecStore } from './models';
import { RedocNormalizedOptions } from './RedocNormalizedOptions';
import type { RedocRawOptions } from './RedocNormalizedOptions';
import { ScrollService } from './ScrollService';
import { SearchStore } from './SearchStore';

import { SchemaDefinition } from '../components/SchemaDefinition/SchemaDefinition';
import { SecurityDefs } from '../components/SecuritySchemes/SecuritySchemes';
import {
  SCHEMA_DEFINITION_JSX_NAME,
  SECURITY_DEFINITIONS_JSX_NAME,
  OLD_SECURITY_DEFINITIONS_JSX_NAME,
} from '../utils/openapi';

import { IS_BROWSER } from '../utils';
import type { StoreState } from './types';

export async function createStore(
  spec: object,
  specUrl: string | undefined,
  options: RedocRawOptions = {},
) {
  const resolvedSpec = await loadAndBundleSpec(spec || specUrl);
  return new AppStore(resolvedSpec, specUrl, options);
}

export class AppStore {
  /**
   * deserialize store
   * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
   */
  // TODO:
  static fromJS(state: StoreState): AppStore {
      throw new Error("STUB");
  }

  menu: MenuStore;
  spec: SpecStore;
  rawOptions: RedocRawOptions;
  options: RedocNormalizedOptions;
  search?: SearchStore<string>;
  marker = new MarkerService();

  private scroll: ScrollService;
  private disposer: Lambda | null = null;

  constructor(
    spec: OpenAPISpec,
    specUrl?: string,
    options: RedocRawOptions = {},
    createSearchIndex: boolean = true,
  ) {
      throw new Error("STUB");
  }

  onDidMount() {
      throw new Error("STUB");
  }

  dispose() {
    this.scroll.dispose();
    this.menu.dispose();
    if (this.search) {
      this.search.dispose();
    }
    if (this.disposer != null) {
      this.disposer();
    }
  }

  /**
   * serializes store
   * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
   */
  // TODO: improve
  async toJS(): Promise<StoreState> {
    return {
      menu: {
        activeItemIdx: this.menu.activeItemIdx,
      },
      spec: {
        url: this.spec.parser.specUrl,
        data: this.spec.parser.spec,
      },
      searchIndex: this.search ? await this.search.toJS() : undefined,
      options: this.rawOptions,
    };
  }

  private updateMarkOnMenu(idx: number) {
      throw new Error("STUB");
  }
}

const DEFAULT_OPTIONS: RedocRawOptions = {
  allowedMdComponents: {
    [SECURITY_DEFINITIONS_JSX_NAME]: {
      component: SecurityDefs,
      propsSelector: (store: AppStore) => { throw new Error("STUB"); },
    },
    [OLD_SECURITY_DEFINITIONS_JSX_NAME]: {
      component: SecurityDefs,
      propsSelector: (store: AppStore) => { throw new Error("STUB"); },
    },
    [SCHEMA_DEFINITION_JSX_NAME]: {
      component: SchemaDefinition,
      propsSelector: (store: AppStore) => { throw new Error("STUB"); },
    },
  },
};
