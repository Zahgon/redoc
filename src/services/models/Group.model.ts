import { action, observable, makeObservable } from 'mobx';

import type { OpenAPIExternalDocumentation, OpenAPITag } from '../../types';
import { safeSlugify } from '../../utils';
import { MarkdownRenderer } from '../MarkdownRenderer';
import type { ContentItemModel, IMenuItem, MarkdownHeading, MenuItemGroupType } from '../types';

/**
 * Operations Group model ready to be used by components
 */
export class GroupModel implements IMenuItem {
  //#region IMenuItem fields
  id: string;
  absoluteIdx?: number;
  name: string;
  sidebarLabel: string;
  description?: string;
  type: MenuItemGroupType;

  items: ContentItemModel[] = [];
  parent?: GroupModel;
  externalDocs?: OpenAPIExternalDocumentation;

  @observable
  active: boolean = false;
  @observable
  expanded: boolean = false;

  depth: number;
  level: number;
  //#endregion

  constructor(
    type: MenuItemGroupType,
    tagOrGroup: OpenAPITag | MarkdownHeading,
    parent?: GroupModel,
  ) {
      throw new Error("STUB");
  }

  @action
  activate() {
      throw new Error("STUB");
  }

  @action
  expand() {
    if (this.parent) {
      this.parent.expand();
    }
    this.expanded = true;
  }

  @action
  collapse() {
      throw new Error("STUB");
  }

  @action
  deactivate() {
      throw new Error("STUB");
  }
}
