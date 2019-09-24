// TODO: use generics so that lists can handle any type

class SListNode<T> {
  value: T;
  next: SListNode<T> | null;

  constructor(value: T, next: SListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class SList<T> {
  private first: SListNode<T> | null;
  constructor() {
    this.first = null;
  }

  isEmpty(): boolean {
    return this.first === null;
  }

  insertFirst(value: T) {
    const n = new SListNode(value, this.first);
    this.first = n;
  }

  delete_first() {
    if (!this.isEmpty() && this.first) {
      this.first = this.first.next;
    } else throw new Error("List is empty");
  }

  getFirst() {
    if (!this.isEmpty() && this.first) {
      return this.first.value;
    } else throw new Error("List is empty");
  }

  // this methods allows us to loop over the list like this
  // for (let val of myList) {
  //   console.log(val); // prints the values stored in the list
  // }
  //
  *[Symbol.iterator]() {
    for (let itr = this.first; itr !== null; itr = itr.next) {
      yield itr.value;
    }
  }

  // Here is an example of the forEach
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  forEach(cb: (elem: T) => void) {
    for (let itr = this.first; itr !== null; itr = itr.next) {
      cb(itr.value);
    }
  }
}

export default SList;
