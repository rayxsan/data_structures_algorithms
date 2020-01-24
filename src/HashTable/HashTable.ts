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
  private myList: List<KeyValueWrapper<K, V>>;
  private table: Array<List<KeyValueWrapper<K, V>>>;

  constructor(initialCapacity: number = defaultInitialCapacity) {
    this.capacity = Math.max(defaultInitialCapacity, initialCapacity);
    this.size = 0;
    this.table = [];
    this.myList = new List();
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
    this.table[idx] = this.myList;
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
    /*Need to create a new Array with double capacity
    Copy elements of old array into new one (need to use wrapper.hash to calculate
    new idx)*/
    const newCapacity = this.capacity * 2;

    const tempArr = new Array<List<KeyValueWrapper<K, V>>>();

    for (let i = 0; i < this.capacity; i++) {
      const list = this.table[i];
      if (list) {
        list.forEach(wrapper => {
          const newIdx = wrapper.hash % newCapacity;
          tempArr[newIdx] = this.myList;
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
        return true;
      }
    }
    return false;
  }
}
