class BSTNode<K, V> {
  key: K;
  value: V;
  nodesCount: number;
  left: BSTNode<K, V> | null;
  right: BSTNode<K, V> | null;

  constructor(key: K, value: V, count: number) {
    this.key = key;
    this.value = value;
    this.nodesCount = count;
    this.left = null;
    this.right = null;
  }
}
export class BST<K, V> {
  private root: BSTNode<K, V>;
  private cmp: (x: K, y: K) => number;

  constructor(cmp: (x: K, y: K) => number) {
    this.root = new BSTNode({} as K, {} as V, 1);
    this.root.left = null;
    this.root.right = null;
    this.cmp = cmp;
  }

  private sizeNode(node: BSTNode<K, V>) {
    if (node === null) return 0;
    else return node.nodesCount;
  }

  size() {
    return this.sizeNode(this.root);
  }

  private getRecursive(node: BSTNode<K, V>, key: K): V {
    if (node === null) throw new Error("Not found");
    if (this.cmp(node.key, key) <= 0 && node.left) {
      return this.getRecursive(node.left, key);
    } else if (this.cmp(node.key, key) > 0) {
      if (node.right) return this.getRecursive(node.right, key);
    } else return node.value;
  }

  get(key: K) {
    return this.getRecursive(this.root, key);
  }

  private putRecursive(node: BSTNode<K, V>, key: K, value: V): BSTNode<K, V> {
    if (node === null) return new BSTNode(key, value, 1);
    if (this.cmp(node.key, key) <= 0 && node.left) {
      node.left = this.putRecursive(node.left, key, value);
    } else if (this.cmp(node.key, key) > 0 && node.right) {
      node.right = this.putRecursive(node.right, key, value);
    } else node.value = value;
    if (node.left && node.right)
      node.nodesCount =
        this.sizeNode(node.left) + this.sizeNode(node.right) + 1;

    return node;
  }

  put(key: K, value: V) {
    this.root = this.putRecursive(this.root, key, value);
  }
}
