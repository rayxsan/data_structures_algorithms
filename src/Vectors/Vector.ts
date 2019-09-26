class Vector<T> {
  private capacity: number;
  private len: number = 0;
  private array: T[];

  constructor(initialCapacity: number = 8) {
    const capacity = Math.max(initialCapacity, 8);
    this.capacity = capacity;
    this.len = 0;
    this.array = new Array<T>(capacity);
  }

  private grow() {
    //this.capacity = 2 * this.capacity;
    const newArray = new Array<T>(2 * this.capacity);

    for (let i = 0; i < this.len; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }

  pushBack(item: T) {
    if (this.len >= this.capacity) {
      this.grow();
    }
    this.array[this.len] = item;
    this.len++;
  }

  popBack(): T {
    if (!this.isEmpty()) {
      this.len--;
      return this.array[this.len];
    } else throw new Error("Vector is empty");
  }

  getAt(index: number): T {
    if (index < 0 || index > this.len - 1) {
      throw new Error("Invalid index");
    }
    return this.array[index];
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  size(): number {
    return this.len;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.len; i++) {
      yield this.array[i];
    }
  }

  forEach(cb: (elem: T, index: number) => void) {
    for (let i = 0; i < this.len; i++) {
      cb(this.array[i], i);
    }
  }

  map<U>(predicate: (elem: T, index?: number) => U): Vector<U> {
    const v = new Vector<U>(this.len);
    for (let i = 0; i < this.len; i++) {
      v.pushBack(predicate(this.array[i], i));
    }
    return v;
  }

  filter(predicate: (elem: T, index?: number) => boolean): Vector<T> {
    const v = new Vector<T>(this.len);
    for (let i = 0; i < this.len; i++) {
      if (predicate(this.array[i], i)) {
        v.pushBack(this.array[i]);
      }
    }
    return v;
  }

  reduce(
    predicate: (previous: T, current: T, index?: number) => T,
    initialValue: T
  ): T {
    let previous = initialValue;
    for (let i = 0; i < this.len; i++) {
      previous = predicate(previous, this.array[i], i);
    }
    return previous;
  }
}

export default Vector;
