import SList from "../Lists/SList";

class Stack<T> {
  private item: SList<T>;
  private len = 0;
  constructor() {
    this.item = new SList();
  }
  push(item: T) {
    this.item.insertFirst(item);
    this.len = this.len + 1;
  }
  pop(): T {
    if (!this.item.isEmpty()) {
      let value = this.item.getFirst();
      this.item.deleteFirst();
      this.len = this.len - 1;
      return value;
    } else throw new Error("Stack is empty");
  }
  isEmpty(): boolean {
    return this.item.isEmpty();
  }
  size(): number {
    return this.len;
  }
}

export default Stack;
