import { IS_BROWSER } from '../utils/';
import type { IMenuItem } from './types';
import type { OperationModel } from './models';

import Worker from './SearchWorker.worker';

function getWorker() {
    throw new Error("STUB");
}

export class SearchStore<T> {
  searchWorker = getWorker();

  indexItems(groups: Array<IMenuItem | OperationModel>) {
      throw new Error("STUB");
  }

  add(title: string, body: string, meta?: T) {
    this.searchWorker.add(title, body, meta);
  }

  dispose() {
    (this.searchWorker as any).terminate();
    (this.searchWorker as any).dispose();
  }

  search(q: string) {
    return this.searchWorker.search<T>(q);
  }

  async toJS() {
    return this.searchWorker.toJS();
  }

  load(state: any) {
    this.searchWorker.load(state);
  }

  fromExternalJS(path?: string, exportName?: string) {
      throw new Error("STUB");
  }
}
