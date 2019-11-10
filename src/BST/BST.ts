import { is } from "@babel/types";
import { NONAME } from "dns";

type NodeLabel = "root" | "left" | "right";

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
    return node ? node.nodesCount : 0;
  }

  size() {
    if (this.root) {
      return this.sizeNode(this.root);
    } else throw new Error("Is empty");
  }

  private getRecursive(node: BSTNode<K, V> | null, key: K): V {
    if (node) {
      const cmpResult = this.cmp(key, node.key);
      if (cmpResult < 0) {
        return this.getRecursive(node.left, key);
      } else if (cmpResult > 0) {
        return this.getRecursive(node.right, key);
      } else return node.value;
    } else throw new Error("Not found");
  }

  get(key: K) {
    return this.getRecursive(this.root, key);
  }

  private putRecursive(
    node: BSTNode<K, V> | null,
    key: K,
    value: V
  ): BSTNode<K, V> {
    if (node) {
      const cmpResult = this.cmp(key, node.key);
      if (cmpResult < 0) {
        node.left = this.putRecursive(node.left, key, value);
      } else if (cmpResult > 0) {
        node.right = this.putRecursive(node.right, key, value);
      } else node.value = value;
      node.nodesCount =
        this.sizeNode(node.left) + this.sizeNode(node.right) + 1;

      return node;
    } else return new BSTNode(key, value, 1);
  }

  put(key: K, value: V) {
    this.root = this.putRecursive(this.root, key, value);
  }

  private hasRecursive(node: BSTNode<K, V> | null, key: K): boolean {
    if (node) {
      const cmpResult = this.cmp(key, node.key);
      if (cmpResult < 0) {
        return this.hasRecursive(node.left, key);
      } else if (cmpResult > 0) {
        return this.hasRecursive(node.right, key);
      } else return true;
    } else return false;
  }
  has(key: K) {
    return this.hasRecursive(this.root, key);
  }
  private minRecursive(node: BSTNode<K, V>): BSTNode<K, V> {
    if (node.left === null) return node;
    return this.minRecursive(node.left);
  }
  min(): K {
    if (this.root) {
      return this.minRecursive(this.root).key;
    } else throw new Error("Not found");
  }
  private deleteMinRecursive(node: BSTNode<K, V>): BSTNode<K, V> {
    if (node.left === null && node.right) return node.right;
    if (node.left) node.left = this.deleteMinRecursive(node.left);
    node.nodesCount = this.sizeNode(node.left) + this.sizeNode(node.right) + 1;
    return node;
  }
  deleteMin() {
    if (this.root) this.root = this.deleteMinRecursive(this.root);
  }
  /**
   * *Delete entry with key @key
   * If no such entry is found, throw error
   */

  private delRecursive(node: BSTNode<K, V> | null, key: K): V {
    if (node) {
      const cmpResult = this.cmp(key, node.key);
      if (cmpResult < 0) {
        if (node.left) node.left.value = this.delRecursive(node.left, key);
      } else if (cmpResult > 0) {
        if (node.right) node.right.value = this.delRecursive(node.right, key);
      } else {
        if (node.right === null && node.left !== null) return node.left.value;
        if (node.left === null && node.right !== null) return node.right.value;
        let t = node;
        if (t.right) {
          node = this.minRecursive(t.right);
          node.right = this.deleteMinRecursive(t.right);
        }
        node.left = t.left;
      }
      node.nodesCount =
        this.sizeNode(node.left) + this.sizeNode(node.right) + 1;
      return node.value;
    } else throw new Error("Not found");
  }
  del(key: K): V {
    if (this.root) {
      return this.delRecursive(this.root, key);
    } else throw new Error("Not found");
  }

  printRecursive(node: BSTNode<K, V>, label: NodeLabel, indent = 0) {
    const spaces = "  ".repeat(indent);
    console.log(
      `${spaces}Node(${label}): [key: ${node.key}, value: ${node.value}]`
    );
    if (node.left) this.printRecursive(node.left, "left", indent + 1);
    if (node.right) this.printRecursive(node.right, "right", indent + 1);
  }

  print() {
    if (this.root) this.printRecursive(this.root, "root");
  }

  /**
   * Bread-First-Search Transversal
   */
  bfs(callback: (key: K, value: V) => any) {
    // https://en.wikipedia.org/wiki/Breadth-first_search
  }

  /**
   * Depth-First-Search Transversal
   */
  dfs(callback: (key: K, value: V) => any, order: DFSOrder = DFSOrder.InOrder) {
    // https://en.wikipedia.org/wiki/Tree_traversal
  }
}

let myBST = new BST<number, string>((x: number, y: number) => x - y);
interface Pair<K, V> {
  key: K;
  value: V;
}

const elements: Pair<number, string>[] = [
  { key: 1, value: "a" },
  { key: 2, value: "b" },
  { key: 3, value: "c" },
  { key: 4, value: "d" },
  { key: 5, value: "e" },
  { key: 6, value: "f" },
  { key: 7, value: "g" }
];

function insertElementsInTreeRecursive(
  tree: BST<number, string>,
  elements: Pair<number, string>[],
  lo: number,
  hi: number
) {
  if (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);

    const elem = elements[mid];
    tree.put(elem.key, elem.value);

    insertElementsInTreeRecursive(tree, elements, lo, mid);
    insertElementsInTreeRecursive(tree, elements, mid + 1, hi);
  }
}

function insertElementsInTree(
  tree: BST<number, string>,
  elements: Pair<number, string>[]
) {
  elements.sort((a, b) => a.key - b.key);
  // [a, b)
  insertElementsInTreeRecursive(tree, elements, 0, elements.length);
}

insertElementsInTree(myBST, elements);

/**
 *        4
 *      /   \
 *     2     6
 *    / \   /  \
 *   1   3  5   7
 */

//myBST.print();
let value = myBST.del(1);
console.log(myBST.size());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
