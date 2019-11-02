import { BST } from "../BST/BST";

describe("BST", () => {
  let cmpF = (x: number, y: number) => x - y;
  const elements = [
    { key: 1, value: "a" },
    { key: 2, value: "b" },
    { key: 3, value: "c" },
    { key: 4, value: "d" },
    { key: 5, value: "e" }
  ];

  test("Check size of a BST", () => {
    const myBST = new BST<number, string>(cmpF);
    expect(myBST.size()).toEqual(0);
  });

  test("inserting values", () => {
    const myBST = new BST<number, string>(cmpF);
    let itemCount = 1;
    for (let element of elements) {
      myBST.put(element.key, element.value);
      expect(myBST.size()).toEqual(itemCount++);
    }
  });

  test("getting values", () => {
    const myBST = new BST<number, string>(cmpF);

    for (let element of elements) {
      myBST.put(element.key, element.value);
    }

    for (let element of elements) {
      const value = myBST.get(element.key);
      expect(value).toEqual(element.value);
    }
  });

  test("deleting values in tree", () => {
    const myBST = new BST<number, string>(cmpF);

    for (let element of elements) {
      myBST.put(element.key, element.value);
    }

    let itemCount = elements.length;
    for (let element of elements) {
      const value = myBST.del(element.key);
      expect(value).toEqual(element.value);
      expect(myBST.size()).toEqual(--itemCount);
    }
  });

  test("delete elements that are not in the tree", () => {
    const myBST = new BST<number, string>(cmpF);
    // This should throw an error
  });

  test("Has values in key?", () => {
    const myBST = new BST<number, string>(cmpF);

    elements
      .filter(elem => elem.key % 2 == 0)
      .forEach(elem => {
        myBST.put(elem.key, elem.value);
      });

    elements
      .map((elem, idx) => {
        return {
          ...elem,
          shouldBeInTree: idx % 2 === 0
        };
      })
      .forEach(obj => {
        const result = myBST.has(obj.key);
        expect(result).toEqual(obj.shouldBeInTree);
      });
  });
});
