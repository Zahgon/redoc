import type { OpenAPIExternalDocumentation, OpenAPIPath, OpenAPISpec, Referenced } from '../types';

import { MenuBuilder } from './MenuBuilder';
import { ApiInfoModel } from './models/ApiInfo';
import { WebhookModel } from './models/Webhook';
import { SecuritySchemesModel } from './models/SecuritySchemes';
import { OpenAPIParser } from './OpenAPIParser';
import type { RedocNormalizedOptions } from './RedocNormalizedOptions';
import type { ContentItemModel } from './types';
/**
 * Store that contains all the specification related information in the form of tree
 */
export class SpecStore {
  parser: OpenAPIParser;

  info: ApiInfoModel;
  externalDocs?: OpenAPIExternalDocumentation;
  contentItems: ContentItemModel[];
  securitySchemes: SecuritySchemesModel;
  webhooks?: WebhookModel;

  constructor(
    spec: OpenAPISpec,
    specUrl: string | undefined,
    private options: RedocNormalizedOptions,
  ) {
      throw new Error("STUB");
  }
}
