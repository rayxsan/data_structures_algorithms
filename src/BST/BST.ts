import Queue from "../Queues/Queue";

type NodeLabel = "root" | "left" | "right";

class BSTNode<K, V> {
  key: K;
  value: V;
  nodesCount: number;
  left: BSTNode<K, V> | null;
  right: BSTNode<K, V> | null;
  parent: BSTNode<K, V> | null;

  constructor(key: K, value: V, nodesCount: number) {
    this.key = key;
    this.value = value;
    this.nodesCount = nodesCount;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export enum DFSOrder {
  PreOder,
  InOrder,
  PosOrder
}

/**
 * The comparison function must return an integer less than, equal to, or greater than zero
 * if the first argument is considered to be respectively less than, equal to, or greater than the second.
 * If two members compare as equal, their order in the sorted array is undefined.
 */
export class BST<K, V> {
  private root: BSTNode<K, V> | null;
  private cmp: (x: K, y: K) => number;
  private size: number = 0;

  constructor(cmp: (x: K, y: K) => number) {
    this.root = null;
    this.cmp = cmp;
  }

  getSize() {
    return this.size;
  }

  private getRecursive(node: BSTNode<K, V> | null, key: K): V {
    if (node) {
      const cmpResult = this.cmp(key, node.key);
      if (cmpResult < 0) {
        // key < node.key
        return this.getRecursive(node.left, key);
      } else if (cmpResult > 0) {
        // key > node.key
        return this.getRecursive(node.right, key);
      } else return node.value;
    } else throw new Error("Not found");
  }

  get(key: K): V {
    return this.getRecursive(this.root, key);
  }

  private putRecursive(
    root: BSTNode<K, V> | null,
    node: BSTNode<K, V>
  ): BSTNode<K, V> {
    if (root === null) {
      this.size += 1;
      return node;
    }

    // root.key - node.key
    const cmpResult = this.cmp(root.key, node.key);
    if (cmpResult < 0) {
      // node.key > root.key
      root.right = this.putRecursive(root.right, node);
    } else if (cmpResult > 0) {
      // node.key < root.key
      root.left = this.putRecursive(root.left, node);
    } else {
      // we have found an element with the same key, let's update the value
      root.value = node.value;
    }

    return root;
  }

  put(key: K, value: V) {
    const node = new BSTNode(key, value, 0);
    this.root = this.putRecursive(this.root, node);
  }

  has(key: K) {
    try {
      const value = this.get(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  private findMin(root: BSTNode<K, V> | null): BSTNode<K, V> | null {
    if (root) {
      while (root.left) {
        root = root.left;
      }
    }
    return root;
  }

  private findMax(root: BSTNode<K, V> | null): BSTNode<K, V> | null {
    if (root) {
      while (root.right) {
        root = root.right;
      }
    }
    return root;
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
}
