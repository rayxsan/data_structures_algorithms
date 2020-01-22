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
    const hashCode = hash<K>(key);
    const wrapper: KeyValueWrapper<K, V> = {
      hash: hashCode,
      key: key,
      value: value
    };
    const idx = hashCode % this.capacity;
    this.table[idx] = this.myList;
    this.table[idx].insertFirst(wrapper);

    this.size += 1;
  }

  get(key: K): V | null {
    const hashCode = hash<K>(key);
    const idx = hashCode % this.capacity;
    const list = this.table[idx];
    /*if (list) {
      list.forEach(elem => {
        if (elem.key === key) {
          result = elem.value;
        } else result = null;
        return result;
      });
    }*/
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
}
