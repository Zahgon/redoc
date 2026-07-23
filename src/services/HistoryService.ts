import { bind, debounce } from 'decko';
import { EventEmitter } from 'eventemitter3';
import { IS_BROWSER } from '../utils/';

const EVENT = 'hashchange';

export class HistoryService {
  private _emiter;

  constructor() {
      throw new Error("STUB");
  }

  get currentId(): string {
      throw new Error("STUB");
  }

  linkForId(id: string) {
    if (!id) {
      return '';
    }
    return '#' + id;
  }

  subscribe(cb): () => void {
      throw new Error("STUB");
  }

  emit = () => {
      throw new Error("STUB");
  };

  bind() {
    if (IS_BROWSER) {
      window.addEventListener('hashchange', this.emit, false);
    }
  }

  dispose() {
    if (IS_BROWSER) {
      window.removeEventListener('hashchange', this.emit);
    }
  }

  @bind
  @debounce
  replace(id: string | null, rewriteHistory: boolean = false) {
    if (!IS_BROWSER) {
      return;
    }

    if (id == null || id === this.currentId) {
      return;
    }
    if (rewriteHistory) {
      window.history.replaceState(
        null,
        '',
        window.location.href.split('#')[0] + this.linkForId(id),
      );

      return;
    }
    window.history.pushState(null, '', window.location.href.split('#')[0] + this.linkForId(id));
    this.emit();
  }
}

export const history = new HistoryService();

if (module.hot) {
  module.hot.dispose(() => {
      throw new Error("STUB");
  });
}
