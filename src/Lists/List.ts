class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class List<T> {
  sentinel: ListNode<T>;

  constructor() {
    this.sentinel = new ListNode({} as T);
    this.sentinel.next = this.sentinel;
    this.sentinel.prev = this.sentinel;
  }

  isEmpty(): boolean {
    return this.sentinel.next === this.sentinel;
  }

  insertFirst(value: T) {
    const n = new ListNode(value);
    n.next = this.sentinel.next;
    if (this.sentinel.next) {
      this.sentinel.next.prev = n;
    }
    n.prev = this.sentinel;
    this.sentinel.next = n;
  }

  insertLast(value: T) {
    const n = new ListNode(value);
    n.prev = this.sentinel.prev;
    if (this.sentinel.prev) {
      this.sentinel.prev.next = n;
    }
    this.sentinel.prev = n;
    n.next = this.sentinel;
  }

  private remove(node: ListNode<T>) {
    // TODO: write a generic remove
  }

  removeFirst() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
    }

    if (this.sentinel.next) {
      this.remove(this.sentinel.next);
    }
  }

  removeLast() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
    }

    if (this.sentinel.prev) {
      this.remove(this.sentinel.prev);
    }
  }

  getFirst() {
    if (!this.isEmpty() && this.sentinel.next) {
      return this.sentinel.next.value;
    }

    throw new Error("List is empty");
  }

  getLast() {
    if (!this.isEmpty() && this.sentinel.prev) {
      return this.sentinel.prev.value;
    }
    throw new Error("List is empty");
  }

  *[Symbol.iterator]() {
    for (let itr = this.sentinel.next; itr !== this.sentinel; ) {
      if (itr) {
        yield itr.value;
        itr = itr.next;
      }
    }
  }

  forEach(cb: (elem: T) => void) {
    for (let itr = this.sentinel.next; itr !== this.sentinel; ) {
      if (itr) {
        cb(itr.value);
        itr = itr.next;
      }
    }
  }
}

export default List;
