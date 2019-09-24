class BagNode<T> {
  item: T;
  next: BagNode<T> | null;

  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

class Bag<T> {
  private first: BagNode<T> | null;
  private bagSize: number = 0;
  constructor() {
    this.first = null;
  }

  add(item: T) {
    const b = new BagNode(item);
    b.next = this.first;
    this.first = b;
    this.bagSize = this.bagSize + 1;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
  size(): number {
    return this.bagSize;
  }

  *[Symbol.iterator]() {
    for (let itr = this.first; itr !== null; itr = itr.next) {
      yield itr.item;
    }
  }

  forEach(cb: (elem: T) => void) {
    for (let itr = this.first; itr !== null; itr = itr.next) {
      cb(itr.item);
    }
  }
}
export default Bag;
