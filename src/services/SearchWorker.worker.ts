import * as lunr from 'lunr';
import type { SearchResult } from './types';

/* just for better typings */
export default class Worker {
  add: typeof add = add;
  done = done;
  search: typeof search = search;
  toJS = toJS;
  load = load;
  dispose = dispose;
  fromExternalJS = fromExternalJS;
}

let store: any[] = [];

lunr.tokenizer.separator = /\s+/;

let builder: lunr.Builder;

let resolveIndex: (v: lunr.Index) => void;

let index: Promise<lunr.Index>;

function initEmpty() {
  builder = new lunr.Builder();
  builder.field('title');
  builder.field('description');
  builder.ref('ref');

  builder.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer);

  index = new Promise(resolve => {
      throw new Error("STUB");
  });
}

initEmpty();

const expandTerm = term => {
  const token = lunr.trimmer(new lunr.Token(term, {}));
  return '*' + lunr.stemmer(token) + '*';
};

export function add<T>(title: string, description: string, meta?: T) {
  const ref = store.push(meta) - 1;
  const item = { title: title.toLowerCase(), description: description.toLowerCase(), ref };
  builder.add(item);
}

export async function done() {
    throw new Error("STUB");
}

export async function toJS() {
  return {
    store,
    index: (await index).toJSON(),
  };
}

export async function fromExternalJS(path: string, exportName: string) {
    throw new Error("STUB");
}

export async function load(state: any) {
  store = state.store;
  resolveIndex(lunr.Index.load(state.index));
}

export async function dispose() {
  store = [];
  initEmpty();
}

export async function search<Meta = string>(
  q: string,
  limit = 0,
): Promise<Array<SearchResult<Meta>>> {
  if (q.trim().length === 0) {
    return [];
  }

  let searchResults = (await index).query(t => {
      throw new Error("STUB");
  });

  if (limit > 0) {
    searchResults = searchResults.slice(0, limit);
  }

  return searchResults.map(res => { throw new Error("STUB"); });
}
