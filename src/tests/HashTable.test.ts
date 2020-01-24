import { SeparateChainingHashST } from "../HashTable/HashTable";

describe("HashTable", () => {
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

  test("Size", () => {
    const myHashT = new SeparateChainingHashST<number, string>();
    expect(myHashT.getSize()).toBe(0);
  });

  test("Put elements", () => {
    const myHashT = new SeparateChainingHashST<number, string>();
    for (let i = 0; i < elements.length; i++) {
      myHashT.put(elements[i].key, elements[i].value);
      expect(myHashT.getSize()).toBe(i + 1);
    }
  });

  test("Get elem", () => {
    const myHashT = new SeparateChainingHashST<number, string>();

    for (let i = 0; i < elements.length; i++) {
      myHashT.put(elements[i].key, elements[i].value);
      expect(myHashT.get(elements[i].key)).toEqual(elements[i].value);
    }
    expect(myHashT.get(3)).toEqual("c");
  });

  test("Grow Table", () => {
    const myHashT = new SeparateChainingHashST<number, string>();
    for (let i = 0; i < elements.length; i++) {
      myHashT.put(elements[i].key, elements[i].value);
    }
    expect(myHashT.getCapacity()).toEqual(8);
  });

  test("Deleting a Key entry", () => {
    const myHashT = new SeparateChainingHashST<number, string>();
    myHashT.put(1, "a");
    expect(myHashT.delete(1)).toBeTruthy;
    expect(myHashT.get(1)).toBeNull;
  });
});
