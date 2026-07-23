import { action, observable, makeObservable } from 'mobx';

import type { OpenAPIResponse, Referenced } from '../../types';

import { getStatusCodeType, extractExtensions } from '../../utils';
import type { OpenAPIParser } from '../OpenAPIParser';
import type { RedocNormalizedOptions } from '../RedocNormalizedOptions';
import { FieldModel } from './Field';
import { MediaContentModel } from './MediaContent';

type ResponseProps = {
  parser: OpenAPIParser;
  code: string;
  defaultAsError: boolean;
  infoOrRef: Referenced<OpenAPIResponse>;
  options: RedocNormalizedOptions;
  isEvent: boolean;
};

export class ResponseModel {
  @observable
  expanded: boolean = false;

  content?: MediaContentModel;
  code: string;
  summary: string;
  description: string;
  type: string;
  headers: FieldModel[] = [];
  extensions: Record<string, any>;

  constructor({
    parser,
    code,
    defaultAsError,
    infoOrRef,
    options,
    isEvent: isRequest,
  }: ResponseProps) {
      throw new Error("STUB");
  }

  @action
  toggle() {
    this.expanded = !this.expanded;
  }
}
