import * as Sampler from 'openapi-sampler';

import type { OpenAPIMediaType } from '../../types';
import type { RedocNormalizedOptions } from '../RedocNormalizedOptions';
import { SchemaModel } from './Schema';

import { isJsonLike, mapValues } from '../../utils';
import type { OpenAPIParser } from '../OpenAPIParser';
import { ExampleModel } from './Example';

export class MediaTypeModel {
  examples?: { [name: string]: ExampleModel };
  schema?: SchemaModel;
  name: string;
  isRequestType: boolean;
  onlyRequiredInSamples: boolean;
  generatedSamplesMaxDepth: number;

  /**
   * @param isRequestType needed to know if skipe RO/RW fields in objects
   */
  constructor(
    parser: OpenAPIParser,
    name: string,
    isRequestType: boolean,
    info: OpenAPIMediaType,
    options: RedocNormalizedOptions,
  ) {
      throw new Error("STUB");
  }

  generateExample(parser: OpenAPIParser, info: OpenAPIMediaType) {
      throw new Error("STUB");
  }
}
