interface BSTNode<K, V> {
  left: BSTNode<K, V> | null;
  right: BSTNode<K, V> | null;
  key: K;
  value: V;
  nodesCount: number;
}

function createNode<K, V>(key: K, value: V): BSTNode<K, V> {
  return { key, value, left: null, right: null, nodesCount: 1 };
}

export enum DFSOrder {
  PreOrder,
  InOrder,
  PostOrder
}

export class BST<K, V> {
  private root: BSTNode<K, V> | null;
  private cmp: (x: K, y: K) => number;

  constructor(cmp: (x: K, y: K) => number) {
    this.root = null;
    this.cmp = cmp;
  }

  private putRecursive(
    parent: BSTNode<K, V>,
    node: BSTNode<K, V>
  ): BSTNode<K, V> {
    if (this.cmp(parent.key, node.key) <= 0) {
      if (parent.left) parent.left = this.putRecursive(parent.left, node);
    } else if (this.cmp(parent.key, node.key) > 0) {
      if (parent.right) parent.right = this.putRecursive(parent.right, node);
    } else parent.value = node.value;
    if (parent.right && parent.left)
      parent.nodesCount =
        this.sizeNode(parent.left) + this.sizeNode(parent.right) + 1;

    return parent;
  }

  put(key: K, value: V) {
    const node = createNode(key, value);
    if (this.root) {
      this.putRecursive(this.root, node);
    } else {
      this.root = node;
    }
  }

  private getRecursive(node: BSTNode<K, V>, key: K) {}

  get(key: K) {
    if (this.root) {
      return this.getRecursive(this.root, key);
    } else {
      throw new Error("Not found");
    }
  }

  has(key: K): boolean {
    return false;
  }

  /**
   * Delete entry with key @key
   * If no such entry is found, throw error
   */

  private delRecursive(node: BSTNode<K, V>, key: K): V {
    return {} as V;
  }
  del(key: K): V {
    if (this.root) {
      return this.delRecursive(this.root, key);
    } else {
      throw new Error("Not found");
    }
  }

  /**
   * Get the number of elements currently in the tree
   */
  private sizeNode(node: BSTNode<K, V>): number {
    if (node === null) return 0;
    else return node.nodesCount;
  }
  size(): number {
    if (this.root) {
      return this.sizeNode(this.root);
    } else {
      throw new Error("Is empty");
    }
  }

  /**
   * Bread-First-Search Traversal
   */
  bfs(callback: (key: K, value: V) => any) {}

  /**
   * Depth-First-Search Traversal
   */
  dfs(
    callback: (key: K, value: V) => any,
    order: DFSOrder = DFSOrder.InOrder
  ) {}
}
