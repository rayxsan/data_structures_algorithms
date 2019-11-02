interface BSTNode<K, V> {
  left: BSTNode<K, V> | null;
  right: BSTNode<K, V> | null;
  key: K;
  value: V;
}

function create_node<K, V>(key: K, value: V): BSTNode<K, V> {
  return { key, value, left: null, right: null };
}

export class BST<K, V> {
  private root: BSTNode<K, V> | null;
  private cmp: (x: K, y: K) => number;
  private length: number;

  constructor(cmp: (x: K, y: K) => number) {
    this.root = null;
    this.length = 0;
    this.cmp = cmp;
  }

  put(key: K, value: V) {
    this.length++;
  }

  get(key: K) {}

  has(key: K): boolean {
    return false;
  }

  /**
   * D
   */
  del(key: K): V {
    return {} as V;
  }

  size(): number {
    return 0;
  }
}
