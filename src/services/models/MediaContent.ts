import { action, computed, observable, makeObservable } from 'mobx';

import type { OpenAPIMediaType } from '../../types';
import { MediaTypeModel } from './MediaType';

import { mergeSimilarMediaTypes } from '../../utils';
import type { OpenAPIParser } from '../OpenAPIParser';
import type { RedocNormalizedOptions } from '../RedocNormalizedOptions';

/**
 * MediaContent model ready to be sued by React components
 * Contains multiple MediaTypes and keeps track of the currently active one
 */
export class MediaContentModel {
  mediaTypes: MediaTypeModel[];

  @observable
  activeMimeIdx = 0;

  /**
   * @param isRequestType needed to know if skipe RO/RW fields in objects
   */
  constructor(
    parser: OpenAPIParser,
    info: Record<string, OpenAPIMediaType>,
    public isRequestType: boolean,
    options: RedocNormalizedOptions,
  ) {
      throw new Error("STUB");
  }

  /**
   * Set active media type by index
   * @param idx media type index
   */
  @action
  activate(idx: number) {
      throw new Error("STUB");
  }

  @computed
  get active() {
      throw new Error("STUB");
  }

  get hasSample(): boolean {
      throw new Error("STUB");
  }
}
