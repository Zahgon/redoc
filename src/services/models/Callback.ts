import { action, observable, makeObservable } from 'mobx';

import { isOperationName, JsonPointer } from '../../utils';
import { OperationModel } from './Operation';
import type { OpenAPIParser } from '../OpenAPIParser';
import type { OpenAPICallback, Referenced } from '../../types';
import type { RedocNormalizedOptions } from '../RedocNormalizedOptions';

export class CallbackModel {
  @observable
  expanded: boolean = false;

  name: string;
  operations: OperationModel[] = [];

  constructor(
    parser: OpenAPIParser,
    name: string,
    infoOrRef: Referenced<OpenAPICallback>,
    pointer: string,
    options: RedocNormalizedOptions,
  ) {
      throw new Error("STUB");
  }

  @action
  toggle() {
    this.expanded = !this.expanded;
  }
}
