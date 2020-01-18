class BST2Node<K, V> {
  key: K;
  value: V;
  leftChild: BST2Node<K, V> | null;
  rightChild: BST2Node<K, V> | null;
  parent: BST2Node<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }
}

class BST2<K, V> {
  private root: BST2Node<K, V> | null;
  //private cmpF: (x: K, y: K) => number;

  constructor() {
    this.root = null;
    //this.cmpF = cmpF;
  }

  searchRecursive(node: BST2Node<K, V>, key: K): BST2Node<K, V> {
    if (key < node.key) {
      if (node.leftChild) return this.searchRecursive(node.leftChild, key);
    } else if (key > node.key) {
      if (node.rightChild) return this.searchRecursive(node.rightChild, key);
    }
    return node;
  }

  maximum(node: BST2Node<K, V>): BST2Node<K, V> {
    while (node.rightChild) {
      node = node.rightChild;
    }
    return node;
  }

  minimum(node: BST2Node<K, V>): BST2Node<K, V> {
    while (node.leftChild) {
      node = node.leftChild;
    }
    return node;
  }

  successor(node: BST2Node<K, V>): BST2Node<K, V> | null {
    if (node.rightChild) {
      return this.minimum(node.rightChild);
    }
    let temp = node.parent;
    while (temp && node === temp.rightChild) {
      node = temp;
      temp = temp.parent;
    }
    return temp;
  }

  insert(key: K, value: V) {
    let y: BST2Node<K, V> | null = null;
    let x = this.root;
    let z = new BST2Node(key, value);
    while (x) {
      y = x;
      if (z.key < x.key) {
        x = x.leftChild;
      } else {
        x = x.rightChild;
      }
    }
    z.parent = y;
    if (y === null) {
      this.root = z;
    } else if (z.key < y.key) {
      y.leftChild = z;
    } else {
      y.rightChild = z;
    }
  }
}
