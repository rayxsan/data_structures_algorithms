import List from "../Lists/List";

class Queue<T> {
  private list: List<T>;
  private len = 0;
  constructor() {
    this.list = new List<T>();
  }
  enqueue(item: T) {
    this.list.insertLast(item);
    this.len = this.len + 1;
  }
  dequeue(): T {
    if (!this.list.isEmpty()) {
      let value = this.list.getFirst();
      this.list.removeFirst();
      this.len = this.len - 1;
      return value;
    } else throw new Error("Queue is empty");
  }
  isEmpty(): boolean {
    return this.list.isEmpty();
  }
  size(): number {
    return this.len;
  }
}

export default Queue;
