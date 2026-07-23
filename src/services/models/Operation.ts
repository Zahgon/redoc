import { action, observable, makeObservable } from 'mobx';

import {
  extractExtensions,
  getOperationSummary,
  getStatusCodeType,
  isStatusCode,
  memoize,
  mergeParams,
  normalizeServers,
  sortByField,
  sortByRequired,
} from '../../utils';

import { GroupModel } from './Group.model';
import { SecurityRequirementModel } from './SecurityRequirement';
import { CallbackModel } from './Callback';
import { FieldModel } from './Field';
import { RequestBodyModel } from './RequestBody';
import { ResponseModel } from './Response';
import { SideNavStyleEnum } from '../types';

import type {
  OpenAPIExternalDocumentation,
  OpenAPIServer,
  OpenAPIXBadges,
  OpenAPIXCodeSample,
} from '../../types';
import type { OpenAPIParser } from '../OpenAPIParser';
import type { RedocNormalizedOptions } from '../RedocNormalizedOptions';
import type { MediaContentModel } from './MediaContent';
import type { ContentItemModel, ExtendedOpenAPIOperation, IMenuItem } from '../types';

export interface XPayloadSample {
  lang: 'payload';
  label: string;
  requestBodyContent: MediaContentModel;
  source: string;
}

export function isPayloadSample(
  sample: XPayloadSample | OpenAPIXCodeSample,
): sample is XPayloadSample {
  return sample.lang === 'payload' && (sample as any).requestBodyContent;
}

let isCodeSamplesWarningPrinted = false;

/**
 * Operation model ready to be used by components
 */
export class OperationModel implements IMenuItem {
  //#region IMenuItem fields
  id: string;
  absoluteIdx?: number;
  name: string;
  sidebarLabel: string;
  description?: string;
  type = 'operation' as const;

  parent?: GroupModel;
  externalDocs?: OpenAPIExternalDocumentation;
  items: ContentItemModel[] = [];

  depth: number;

  @observable
  ready?: boolean = true;
  @observable
  active: boolean = false;
  @observable
  expanded: boolean = false;
  //#endregion

  pointer: string;
  operationId?: string;
  operationHash?: string;
  httpVerb: string;
  badges: OpenAPIXBadges[];
  deprecated: boolean;
  path: string;
  servers: OpenAPIServer[];
  security: SecurityRequirementModel[];
  extensions: Record<string, any>;
  isCallback: boolean;
  isWebhook: boolean;
  isEvent: boolean;

  constructor(
    private parser: OpenAPIParser,
    private operationSpec: ExtendedOpenAPIOperation,
    parent: GroupModel | undefined,
    private options: RedocNormalizedOptions,
    isCallback: boolean = false,
  ) {
      throw new Error("STUB");
  }

  /**
   * set operation as active (used by side menu)
   */
  @action
  activate() {
      throw new Error("STUB");
  }

  /**
   * set operation as inactive (used by side menu)
   */
  @action
  deactivate() {
      throw new Error("STUB");
  }

  /**
   * Toggle expansion in middle panel (for callbacks, which are operations)
   */
  @action
  toggle() {
    this.expanded = !this.expanded;
  }

  expand() {
    if (this.parent) {
      this.parent.expand();
    }
  }

  collapse() {
      throw new Error("STUB");
  }

  @memoize
  get requestBody() {
      throw new Error("STUB");
  }

  @memoize
  get codeSamples() {
      throw new Error("STUB");
  }

  @memoize
  get parameters() {
      throw new Error("STUB");
  }

  @memoize
  get responses() {
      throw new Error("STUB");
  }

  @memoize
  get callbacks() {
      throw new Error("STUB");
  }
}
