import List from "../Lists/List";
import hash from "../utils/Hashing";

const defaultInitialCapacity = 4;

interface KeyValueWrapper<K, V> {
  hash: number;
  key: K;
  value: V;
}

export class SeparateChainingHashST<K, V> {
  private capacity: number;
  private size: number;
  private table: Array<List<KeyValueWrapper<K, V>>>;

  constructor(initialCapacity: number = defaultInitialCapacity) {
    this.capacity = Math.max(defaultInitialCapacity, initialCapacity);
    this.size = 0;
    this.table = new Array<List<KeyValueWrapper<K, V>>>(this.capacity);
  }

  put(key: K, value: V) {
    const loadFactor = this.size / this.capacity;
    const hashCode = hash<K>(key);
    const wrapper: KeyValueWrapper<K, V> = {
      hash: hashCode,
      key: key,
      value: value
    };
    if (loadFactor > 1) {
      this.growTable(); //grow and then inserting new values.
    }

    const idx = hashCode % this.capacity;
    if (this.table[idx] === undefined) {
      this.table[idx] = new List();
    }
    this.table[idx].insertFirst(wrapper);

    this.size += 1;
  }

  get(key: K): V | null {
    const hashCode = hash<K>(key);
    const idx = hashCode % this.capacity;
    const list = this.table[idx];
    if (list) {
      for (let elem of list) {
        if (elem.key === key) {
          return elem.value;
        }
      }
    }
    return null;
  }

  getSize() {
    return this.size;
  }

  getCapacity() {
    return this.capacity;
  }

  private growTable() {
    const newCapacity = this.capacity * 2;
    const tempArr = new Array<List<KeyValueWrapper<K, V>>>(newCapacity);

    for (let i = 0; i < this.capacity; i++) {
      const list = this.table[i];
      if (list) {
        list.forEach(wrapper => {
          const newIdx = wrapper.hash % newCapacity;
          if (tempArr[newIdx] === undefined) {
            tempArr[newIdx] = new List();
          }
          tempArr[newIdx].insertFirst(wrapper);
        });
      }
    }
    this.capacity = newCapacity;
    this.table = tempArr;
  }

  delete(key: K): boolean {
    const idx = hash(key) % this.capacity;
    const list = this.table[idx];
    for (let wrapper of list) {
      if (wrapper.key === key) {
        list.delete(wrapper);
        this.size--;
        return true;
      }
    }
    return false;
  }
}
