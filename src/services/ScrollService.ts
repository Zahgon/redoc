import { bind } from 'decko';
import { EventEmitter } from 'eventemitter3';

import { IS_BROWSER, querySelector, Throttle } from '../utils';
import type { RedocNormalizedOptions } from './RedocNormalizedOptions';

const EVENT = 'scroll';

export class ScrollService {
  private _scrollParent: Window | HTMLElement | undefined;
  private _emiter: EventEmitter;
  private _prevOffsetY = 0;
  constructor(private options: RedocNormalizedOptions) {
      throw new Error("STUB");
  }

  bind() {
    this._prevOffsetY = this.scrollY();
    if (this._scrollParent) {
      this._scrollParent.addEventListener('scroll', this.handleScroll);
    }
  }

  dispose() {
    if (this._scrollParent) {
      this._scrollParent.removeEventListener('scroll', this.handleScroll);
    }
    this._emiter.removeAllListeners(EVENT);
  }

  scrollY(): number {
    if (typeof HTMLElement !== 'undefined' && this._scrollParent instanceof HTMLElement) {
      return this._scrollParent.scrollTop;
    } else if (this._scrollParent !== undefined) {
      return (this._scrollParent as Window).pageYOffset;
    } else {
      return 0;
    }
  }

  isElementBellow(el: Element | null) {
      throw new Error("STUB");
  }

  isElementAbove(el: Element | null) {
      throw new Error("STUB");
  }

  subscribe(cb): () => void {
      throw new Error("STUB");
  }

  scrollIntoView(element: Element | null) {
    if (element === null) {
      return;
    }
    element.scrollIntoView();
    if (this._scrollParent && this._scrollParent.scrollBy) {
      // adding 1 account rounding errors in case scrollYOffset is float-number
      (this._scrollParent.scrollBy as any)(0, -this.options.scrollYOffset() + 1);
    }
  }

  scrollIntoViewBySelector(selector: string) {
      throw new Error("STUB");
  }

  @bind
  @Throttle(100)
  handleScroll() {
      throw new Error("STUB");
  }
}
