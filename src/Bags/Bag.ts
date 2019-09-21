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
  private bag_size = 0;
  constructor() {
    this.first = null;
  }

  add(item: T) {
    const b = new BagNode(item);
    this.first = b;
    this.bag_size = this.bag_size + 1;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
  size(): number {
    return this.bag_size;
  }
}
export default Bag;
