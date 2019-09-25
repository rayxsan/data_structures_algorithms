import List from "../Lists/List";

class Queue<T> {
  list: List<T>;
  constructor() {
    this.list = new List<T>();
  }
  enqueue(item: T) {
    this.list.insertLast(item);
  }
  dequeue(): T {
    return {} as T;
  }
  isEmpty(): boolean {
    return this.list.isEmpty();
  }
  size(): number {
    let size = 0;
    this.list.forEach((elem: T) => {
      size = size + 1;
    });
    return size;
  }
}

export default Queue;
