import List from "../Lists/List";
import hash from "../utils/Hashing";

const defaultInitialCapacity = 4;

interface ValueWrapper<T> {
  hash: number;
  value: T;
}

class Set<T> {
  private buckets: Array<List<ValueWrapper<T>>>;
  private size: number;
  private capacity: number;
  private growCnt: number;
  private compF: (x: T, y: T) => boolean;

  // TODO(raymel): take as input a function that knows how to hash T and how to T1 === T2
  constructor(
    compF: (x: T, y: T) => boolean,
    initialCapacity: number = defaultInitialCapacity
  ) {
    this.capacity = Math.max(defaultInitialCapacity, initialCapacity);
    this.compF = compF;
    this.size = 0;
    this.buckets = new Array<List<ValueWrapper<T>>>(initialCapacity);
    this.growCnt = 0;
  }

  private compare(x: T, y: T): boolean {
    return this.compF(x, y);
  }

  private growSet() {
    const newCapacity = this.capacity * 2;
    const newBuckets = new Array<List<ValueWrapper<T>>>(newCapacity);

    for (let i = 0; i < this.capacity; i++) {
      const list = this.buckets[i];
      if (list) {
        list.forEach(wrapper => {
          const newIdx = wrapper.hash % newCapacity;
          if (newBuckets[newIdx] === undefined) {
            newBuckets[newIdx] = new List();
          }
          newBuckets[newIdx].insertLast(wrapper);
        });
      }
    }

    this.capacity = newCapacity;
    this.buckets = newBuckets;
    this.growCnt += 1;
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
    if (this.buckets[idx] === undefined) {
      this.buckets[idx] = new List();
    }

    for (let elements of this.buckets[idx]) {
      if (this.compare(wrapper.value, elements.value)) {
        // if we find the element on the set, we don't do anything
        return this;
      }
    }

    this.buckets[idx].insertLast(wrapper);
    this.size++;

    return this;
  }

  /**
   * The delete() method removes the specified element from a Set object.
   * @param value     The value of the element to remove from the Set object.
   */
  delete(value: T): boolean {
    const idx = hash(value) % this.capacity;
    const list = this.buckets[idx];

    if (list) {
      for (let wrapper of list) {
        if (wrapper.value === value) {
          list.delete(wrapper);
          this.size--;
          return true;
        }
      }
    }
    return false;
  }

  /**
   * The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
   * @param value The value to test for presence in the Set object.
   */
  has(value: T): boolean {
    const hashCode = hash(value);
    const idx = hashCode % this.capacity;
    const list = this.buckets[idx];
    let result = false;

    if (list) {
      for (let wrapper of list) {
        if (wrapper.value === value) {
          result = true;
          break;
        }
      }
    }

    console.log("Set.has", hashCode, idx, result);
    return result;
  }

  /**
   * The clear() method removes all elements from a Set object.
   */
  clear() {
    this.buckets = new Array<List<ValueWrapper<T>>>(defaultInitialCapacity);
    this.capacity = defaultInitialCapacity;
    this.size = 0;
    this.growCnt = 0;
  }

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
  forEach(cb: (value: T) => void) {
    for (let i = 0; i < this.capacity; i++) {
      const list = this.buckets[i];
      if (list) {
        for (let wrapper of list) {
          cb(wrapper.value);
        }
      }
    }
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.capacity; i++) {
      const list = this.buckets[i];
      if (list) {
        for (let wrapper of list) {
          yield wrapper.value;
        }
      }
    }
  }

  printDebug() {
    console.log(
      `Set size: ${this.size} cap: ${this.capacity} grown: ${this.growCnt}`
    );
    for (let i = 0; i < this.capacity; i++) {
      let line = "  " + i.toString() + ": ";
      const list = this.buckets[i];
      if (list === undefined) {
        line += "undefined";
      } else {
        for (let wrapper of list) {
          line += wrapper.value + " ";
        }
      }
      console.log(line);
    }
  }
}

export default Set;
