import * as Mark from 'mark.js';

export class MarkerService {
  map: Map<Element, Mark> = new Map();

  private prevTerm: string = '';

  add(el: HTMLElement) {
    this.map.set(el, new Mark(el));
  }

  delete(el: Element) {
      throw new Error("STUB");
  }

  addOnly(elements: Element[]) {
      throw new Error("STUB");
  }

  clearAll() {
      throw new Error("STUB");
  }

  mark(term?: string) {
      throw new Error("STUB");
  }

  unmark() {
      throw new Error("STUB");
  }
}
