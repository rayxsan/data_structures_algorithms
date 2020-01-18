import { BST } from "../BST/BST";

describe("BST", () => {
  let cmpF = (x: number, y: number) => x - y;
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

  //insertElementsInTree(myBST, elements);

  test("Check size of a BST", () => {
    const myBST = new BST<number, string>(cmpF);
    expect(myBST.getSize()).toEqual(0);
  });

  test("inserting values", () => {
    const myBST = new BST<number, string>(cmpF);
    for (let element of elements) {
      myBST.put(element.key, element.value);
    }
    expect(myBST.getSize()).toEqual(elements.length);
  });

  test("getting values", () => {
    const myBST = new BST<number, string>(cmpF);

    insertElementsInTree(myBST, elements);

    for (let element of elements) {
      const value = myBST.get(element.key);
      expect(value).toEqual(element.value);
    }
  });

  test.todo("deleting values in tree");

  test("Has values in key?", () => {
    const myBST = new BST<number, string>(cmpF);

    elements
      .filter(elem => elem.key % 2 == 0)
      .forEach(elem => {
        myBST.put(elem.key, elem.value);
      });

    elements
      .map(elem => {
        return {
          ...elem,
          shouldBeInTree: elem.key % 2 === 0
        };
      })
      .forEach(obj => {
        const result = myBST.has(obj.key);
        expect(result).toEqual(obj.shouldBeInTree);
      });
  });
});
