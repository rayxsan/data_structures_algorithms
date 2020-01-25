import List from "../Lists/List";
import hash from "../utils/Hashing";

const defaultInitialCapacity = 4;

interface ValueWrapper<T> {
  hash: number;
  value: T;
}

class Set<T> {
  private set: Array<List<ValueWrapper<T>>>;
  private setList: List<ValueWrapper<T>>;
  private size: number;
  private capacity: number;

  constructor(initialCapacity: number = defaultInitialCapacity) {
    this.capacity = Math.max(defaultInitialCapacity, initialCapacity);
    this.size = 0;
    this.set = [];
    this.setList = new List();
  }

  private compare(x: T, y: T): boolean {
    return x === y;
  }

  private growSet() {
    const newCapacity = this.capacity * 2;
    const tempArr = new Array<List<ValueWrapper<T>>>();

    for (let i = 0; i < this.capacity; i++) {
      const list = this.set[i];
      if (List) {
        list.forEach(wrapper => {
          const newIdx = wrapper.hash % newCapacity;
          tempArr[newIdx] = new List();
          tempArr[newIdx].insertLast(wrapper);
        });
      }
    }

    this.capacity = newCapacity;
    this.set = tempArr;
  }

  getCapacity() {
    return this.capacity;
  }

  /**
   * The add() method appends a new element with a specified value to the end of a Set object.
   * @param value The value of the element to add to the Set object.
   */
  add(value: T): Set<T> {
    const loadFactor = this.size / this.capacity;
    const hashCode = hash(value);
    const wrapper: ValueWrapper<T> = {
      hash: hashCode,
      value: value
    };

    if (loadFactor > 1) {
      this.growSet();
    }

    const idx = hashCode % this.capacity;
    this.set[idx] = this.setList;

    for (let elements of this.set[idx]) {
      if (this.compare(wrapper.value, elements.value)) {
        throw new Error("Duplicate entry");
      }
    }
    this.set[idx].insertLast(wrapper);
    this.size++;

    return this;
  }

  /**
   * The delete() method removes the specified element from a Set object.
   * @param value     The value of the element to remove from the Set object.
   */
  delete(value: T) {}

  /**
   * The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
   * @param value The value to test for presence in the Set object.
   */
  has(value: T): boolean {
    const hashCode = hash(value);
    const idx = hashCode % this.capacity;
    this.set[idx] = new List();
    if (List) {
      for (let wrapper of this.set[idx]) {
        if (wrapper.value === value) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * The clear() method removes all elements from a Set object.
   */
  clear() {}

  /**
   * returns the number of (unique) elements in a Set
   */
  getSize(): number {
    return this.size;
  }

  /**
   * The forEach() method executes a provided function once for each value in the Set object, in insertion order.
   * @param cb Function to execute for each element
   */
  forEach(cb: (value: T) => void) {}

  *[Symbol.iterator]() {}
}

export default Set;
