import { action, observable, makeObservable } from 'mobx';
import { querySelector } from '../utils/dom';
import { escapeHTMLAttrChars, flattenByProp, SECURITY_SCHEMES_SECTION_PREFIX } from '../utils';

import { history as historyInst, HistoryService } from './HistoryService';
import { GROUP_DEPTH } from './MenuBuilder';

import type { SpecStore } from './models';
import type { ScrollService } from './ScrollService';
import type { IMenuItem } from './types';

/** Generic interface for MenuItems */

export const SECTION_ATTR = 'data-section-id';

/**
 * Stores all side-menu related information
 */
export class MenuStore {
  /**
   * Statically try update scroll position
   * Used before hydrating from server-side rendered html to scroll page faster
   */
  static updateOnHistory(id: string = historyInst.currentId, scroll: ScrollService) {
      throw new Error("STUB");
  }

  /**
   * active item absolute index (when flattened). -1 means nothing is selected
   */
  @observable
  activeItemIdx: number = -1;

  /**
   * whether sidebar with menu is opened or not
   */
  @observable
  sideBarOpened: boolean = false;

  items: IMenuItem[];
  flatItems: IMenuItem[];

  /**
   * cached flattened menu items to support absolute indexing
   */
  private _unsubscribe: () => void;
  private _hashUnsubscribe: () => void;

  /**
   *
   * @param spec [SpecStore](#SpecStore) which contains page content structure
   * @param scroll scroll service instance used by this menu
   */
  constructor(spec: SpecStore, public scroll: ScrollService, public history: HistoryService) {
      throw new Error("STUB");
  }

  subscribe() {
      throw new Error("STUB");
  }

  @action
  toggleSidebar() {
      throw new Error("STUB");
  }

  @action
  closeSidebar() {
      throw new Error("STUB");
  }

  /**
   * update active items on scroll
   * @param isScrolledDown whether last scroll was downside
   */
  updateOnScroll = (isScrolledDown: boolean): void => {
      throw new Error("STUB");
  };

  /**
   * update active items on hash change
   * @param id current hash
   */
  updateOnHistory = (id: string = this.history.currentId) => {
      throw new Error("STUB");
  };

  /**
   * get section/operation DOM Node related to the item or null if it doesn't exist
   * @param idx item absolute index
   */
  getElementAt(idx: number): Element | null {
      throw new Error("STUB");
  }

  /**
   * get section/operation DOM Node related to the item or if it is group item, returns first item of the group
   * @param idx item absolute index
   */
  getElementAtOrFirstChild(idx: number): Element | null {
      throw new Error("STUB");
  }

  /**
   * current active item
   */
  get activeItem(): IMenuItem {
      throw new Error("STUB");
  }

  getItemById = (id: string) => {
      throw new Error("STUB");
  };

  /**
   * activate menu item
   * @param item item to activate
   * @param updateLocation [true] whether to update location
   * @param rewriteHistory [false] whether to rewrite browser history (do not create new entry)
   */
  @action
  activate(
    item: IMenuItem | undefined,
    updateLocation: boolean = true,
    rewriteHistory: boolean = false,
  ) {
      throw new Error("STUB");
  }

  /**
   * makes item and all the parents not active
   * @param item item to deactivate
   */
  deactivate(item: IMenuItem | undefined) {
      throw new Error("STUB");
  }

  /**
   * activate menu item and scroll to it
   * @see MenuStore.activate
   */
  @action.bound
  activateAndScroll(
    item: IMenuItem | undefined,
    updateLocation?: boolean,
    rewriteHistory?: boolean,
  ) {
      throw new Error("STUB");
  }

  /**
   * scrolls to active section
   */
  scrollToActive(): void {
      throw new Error("STUB");
  }

  dispose() {
    this._unsubscribe();
    this._hashUnsubscribe();
  }
}
