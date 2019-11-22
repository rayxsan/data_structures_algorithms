import Queue from "../Queues/Queue";

type NodeLabel = "root" | "left" | "right";

class BSTNode<K, V> {
  key: K;
  value: V;
  nodesCount: number;
  left: BSTNode<K, V> | null;
  right: BSTNode<K, V> | null;
  parent: BSTNode<K, V> | null;

  constructor(key: K, value: V, parent: BSTNode<K, V> | null) {
    this.key = key;
    this.value = value;
    this.nodesCount = 1;
    this.left = null;
    this.right = null;
    this.parent = parent;
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
    return this.sizeNode(this.root);
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
    root: BSTNode<K, V> | null,
    node: BSTNode<K, V>
  ): BSTNode<K, V> {
    if (root == null) {
      return node;
    } else {
      const cmpResult = this.cmp(node.key, root.key);
      console.log(`cmp(${node.key}, ${root.key}) = ${cmpResult}`);
      if (cmpResult < 0) {
        node.parent = root;
        node.left = this.putRecursive(root.left, node);
      } else if (cmpResult > 0) {
        node.parent = root;
        node.right = this.putRecursive(root.right, node);
      } else {
        root.value = node.value;
      }
      root.nodesCount =
        this.sizeNode(root.left) + this.sizeNode(root.right) + 1;

      return root;
    }
  }

  put(key: K, value: V) {
    const node = new BSTNode(key, value, null);
    this.root = this.putRecursive(this.root, node);
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
      while (this.root.left !== null) {
        this.root = this.root.left;
      }

      return this.root.key;
    } else throw new Error("Empty tree");

    /* if (this.root) {
      return this.minRecursive(this.root).key;
    } else throw new Error("Not found"); */
  }

  max(): K {
    if (this.root) {
      while (this.root.right !== null) {
        this.root = this.root.right;
      }
      return this.root.key;
    } else throw new Error("Empty tree");
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

  successor(node: BSTNode<K, V>) {
    if (node.right) return this.minRecursive(node.right);
    let y = node.parent;
    while (y && node === y.right) {
      node = y;
      y = y.parent;
    }
    return y;
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

  bfs(callback: (key: K, value: V) => boolean) {
    // https://en.wikipedia.org/wiki/Breadth-first_search
    const q = new Queue<BSTNode<K, V>>();
    if (this.root) q.enqueue(this.root);
    while (!q.isEmpty()) {
      const node = q.dequeue();
      const shouldContinue = callback(node.key, node.value);
      if (shouldContinue) {
        if (node.left) q.enqueue(node.left);
        if (node.right) q.enqueue(node.right);
      } else {
        break;
      }
    }
  }

  /**
   * Depth-First-Search Transversal
   */
  dfs(
    callback: (key: K, value: V) => boolean,
    order: DFSOrder = DFSOrder.InOrder
  ) {
    // https://en.wikipedia.org/wiki/Tree_traversal
    const inOrderTraversal = (node: BSTNode<K, V> | null) => {
      if (node === null) return;
      if (node.left !== null) inOrderTraversal(node.left);
      callback(node.key, node.value);
      if (node.right !== null) inOrderTraversal(node.right);
    };

    const preOrderTransversal = (node: BSTNode<K, V> | null) => {
      if (node === null) return;
      callback(node.key, node.value);
      if (node.left !== null) inOrderTraversal(node.left);
      if (node.right !== null) inOrderTraversal(node.right);
    };

    const posOrderTransversal = (node: BSTNode<K, V> | null) => {
      if (node === null) return;
      if (node.left !== null) inOrderTraversal(node.left);
      if (node.right !== null) inOrderTraversal(node.right);
      callback(node.key, node.value);
    };

    switch (order) {
      case DFSOrder.InOrder: {
        inOrderTraversal(this.root);
      }
      case DFSOrder.PreOder: {
        preOrderTransversal(this.root);
      }
      case DFSOrder.PosOrder: {
        posOrderTransversal(this.root);
      }
    }
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
//myBST.deleteMin();
//console.log(myBST.has(1));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
