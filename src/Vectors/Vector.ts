class Vector<T> {
  capacity: number;
  len: number = 0;
  array: T[];

  constructor(initialCapacity: number = 8) {
    const capacity = Math.max(initialCapacity, 8);
    this.capacity = capacity;
    this.len = 0;
    this.array = new Array<T>(capacity);
  }

  private grow() {
    // This function handles the case when we are out of space
    // when that is the case, then use the following strategy:
    // 1. create a new array of size 2 times bigger than the current one
    // 2. copy all elements to the new array
  }

  pushBack(item: T) {
    // check if there is space for one more item
    // if the array has no more space left, then
    // use the grow method to create more space
    // finally, add the new item to the end of the array
  }

  popBack(): T {
    // remove the last element from the array a return it
    // if the vector is empty, throw an error indicating so
  }

  getAt(index: number): T {
    // return the elements at position index
    // if the index is invalid (negative or bigger than the number of elements) throw an error
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  size(): number {
    return this.len;
  }

  *[Symbol.iterator]() {
    // yield elements in order, from the first to the last inserted
  }

  forEach(cb: (elem: T, index: number) => void) {
    // call cb with each element of the vector and its index in order, from the first to the last
  }
}

export default Vectors;
