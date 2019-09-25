import SList from "../Lists/SList";

class Stack<T> {
  item: SList<T>;
  constructor() {
    this.item = new SList();
  }
  push(item: T) {
    this.item.insertFirst(item);
  }
  pop(): T {
    let value = this.item.getFirst();
    this.item.deleteFirst();
    return value;
  }
  isEmpty(): boolean {
    return this.item.isEmpty();
  }
  size(): number {
    let size = 0;
    this.item.forEach((elem: T) => {
      size = size + 1;
    });
    return size;
  }
}

export default Stack;
