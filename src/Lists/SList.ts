// TODO: use generics so that lists can handle any type

class SListNode {
  value: number;
  next: SListNode;

  constructor(value: number, next: SListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class SList {
  private first: SListNode | null;
  constructor() {
    this.first = null;
  }

  insert_first(value: number) {
    const n = new SListNode(value, this.first);
    this.first = n;
  }

  delete_first() {
    throw new Error("not implemented yet");
  }

  get_first() {
    throw new Error("not implemented yet");
  }

  isEmpty(): boolean {
    throw new Error("not implemented yet");
    return false;
  }
}

export default SList;
