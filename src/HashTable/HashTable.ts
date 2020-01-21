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
    this.table = [];
  }

  put(key: K, value: V) {
    const hashCode = hash<K>(key);
    const wrapper: KeyValueWrapper<K, V> = {
      key: key,
      value: value,
      hash: hashCode
    };
    const idx = hashCode % this.capacity;
    const list = this.table[idx];
    list.insertFirst(wrapper);
    this.size += 1;
  }

  get(key: K): V | null {
    const hashCode = hash<K>(key);
    const idx = hashCode % this.capacity;
    const list = this.table[idx];
    for (let wrapper of list) {
      if (wrapper.key === key) {
        return wrapper.value;
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
