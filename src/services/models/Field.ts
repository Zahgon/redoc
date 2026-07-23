import { action, observable, makeObservable } from 'mobx';

import type {
  OpenAPIParameter,
  OpenAPIParameterLocation,
  OpenAPIParameterStyle,
  Referenced,
} from '../../types';
import type { RedocNormalizedOptions } from '../RedocNormalizedOptions';

import { extractExtensions } from '../../utils/openapi';
import type { OpenAPIParser } from '../OpenAPIParser';
import { SchemaModel } from './Schema';
import { ExampleModel } from './Example';
import { isArray, mapValues } from '../../utils/helpers';

const DEFAULT_SERIALIZATION: Record<
  OpenAPIParameterLocation,
  { explode: boolean; style: OpenAPIParameterStyle }
> = {
  path: {
    style: 'simple',
    explode: false,
  },
  query: {
    style: 'form',
    explode: true,
  },
  header: {
    style: 'simple',
    explode: false,
  },
  cookie: {
    style: 'form',
    explode: true,
  },
};

/**
 * Field or Parameter model ready to be used by components
 */
export class FieldModel {
  @observable
  expanded: boolean | undefined = undefined;

  schema: SchemaModel;
  name: string;
  required: boolean;
  description: string;
  example?: string;
  examples?: Record<string, ExampleModel> | any[];
  deprecated: boolean;
  in?: OpenAPIParameterLocation;
  kind: string;
  extensions?: Record<string, any>;
  explode: boolean;
  style?: OpenAPIParameterStyle;
  const?: any;

  serializationMime?: string;

  constructor(
    parser: OpenAPIParser,
    infoOrRef: Referenced<OpenAPIParameter> & { name?: string; kind?: string },
    pointer: string,
    options: RedocNormalizedOptions,
    refsStack?: string[],
  ) {
      throw new Error("STUB");
  }

  @action
  toggle() {
    this.expanded = !this.expanded;
  }

  @action
  collapse(): void {
      throw new Error("STUB");
  }

  @action
  expand(): void {
    this.expanded = true;
  }
}
