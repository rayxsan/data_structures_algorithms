class ListNode {
  value: number;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class List {
  sentinel: ListNode;

  constructor() {
    this.sentinel = new ListNode(0);
    this.sentinel.next = this.sentinel;
    this.sentinel.prev = this.sentinel;
  }

  isEmpty(): boolean {
    return this.sentinel.next === this.sentinel;
  }

  insert_first(value: number) {
    const n = new ListNode(value);
    n.next = this.sentinel.next;
    this.sentinel.next.prev = n;
    n.prev = this.sentinel;
    this.sentinel.next = n;
  }

  insert_last(value: number) {
    const n = new ListNode(value);
    n.prev = this.sentinel.prev;
    this.sentinel.prev.next = n;
    this.sentinel.prev = n;
    n.next = this.sentinel;
  }

  remove_first() {
    if (!this.isEmpty()) {
      this.sentinel.next = this.sentinel.next.next;
      this.sentinel.next.next.prev = this.sentinel;
    } else throw new Error("List is Empty");
  }

  remove_last() {
    if (!this.isEmpty()) {
      this.sentinel.prev = this.sentinel.prev.prev;
      this.sentinel.prev.prev.next = this.sentinel;
    } else throw new Error("not implemented yet");
  }

  get_first() {
    if (!this.isEmpty()) {
      return this.sentinel.next.value;
    }

    throw new Error("List is empty");
  }

  get_last() {
    if (!this.isEmpty()) {
      return this.sentinel.prev.value;
    }
    throw new Error("List is empty");
  }
}

export default List;
