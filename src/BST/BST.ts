import { is } from "@babel/types";

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

export enum DFSOrder {
  PreOder,
  InOrder,
  PosOrder
}

export class BST<K, V> {
  private root: BSTNode<K, V> | null;
  private cmp: (x: K, y: K) => number;

  constructor(cmp: (x: K, y: K) => number) {
    this.root = null;
    //this.root.left = null;
    //this.root.right = null;
    this.cmp = cmp;
  }

  /**
   * Get the numbers of elements currently in the tree
   */

  private sizeNode(node: BSTNode<K, V> | null): number {
    if (node) return node.nodesCount;
    else return 0;
  }

  size() {
    if (this.root) {
      return this.sizeNode(this.root);
    } else throw new Error("Is empty");
  }

  private getRecursive(node: BSTNode<K, V> | null, key: K): V | null {
    if (node) {
      if (this.cmp(node.key, key) <= 0 && node.left) {
        return this.getRecursive(node.left, key);
      } else if (this.cmp(node.key, key) > 0) {
        if (node.right) return this.getRecursive(node.right, key);
      }
      return node.value;
    } else return null;
  }

  get(key: K) {
    return this.getRecursive(this.root, key);
  }

  private putRecursive(
    node: BSTNode<K, V> | null,
    key: K,
    value: V
  ): BSTNode<K, V> {
    if (node === null) return new BSTNode(key, value, 1);
    if (this.cmp(node.key, key) <= 0) {
      node.left = this.putRecursive(node.left, key, value);
    } else if (this.cmp(node.key, key) > 0) {
      node.right = this.putRecursive(node.right, key, value);
    } else node.value = value;
    node.nodesCount = this.sizeNode(node.left) + this.sizeNode(node.right) + 1;

    return node;
  }

  put(key: K, value: V) {
    this.root = this.putRecursive(this.root, key, value);
  }

  has(key: K) {
    return true;
  }

  /**
   * *Delete entry with key @key
   * If no such entry is found, throw error
   */

  private delRecursive(node: BSTNode<K, V>, key: K): V {
    return {} as V;
  }
  del(key: K): V {
    if (this.root) {
      return this.delRecursive(this.root, key);
    } else throw new Error("Not found");
  }

  /**
   * Bread-First-Search Transversal
   */
  bfs(callback: (key: K, value: V) => any) {}

  /**
   * Depth-First-Search Transversal
   */
  dfs(
    callback: (key: K, value: V) => any,
    order: DFSOrder = DFSOrder.InOrder
  ) {}
}

const elements = [
  { key: 1, value: "a" },
  { key: 2, value: "b" },
  { key: 3, value: "c" },
  { key: 4, value: "d" },
  { key: 5, value: "e" }
];
let myBST = new BST<number, string>((x: number, y: number) => x - y);
myBST.put(1, "a");
myBST.put(2, "b");

console.log(myBST.get(2));
