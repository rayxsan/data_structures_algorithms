import List from "../Lists/List";

describe("List", () => {
  test("Insert at head of list", () => {
    const myList = new List();
    for (let i = 0; i < 10; i++) {
      myList.insertFirst(i);
      expect(myList.getFirst()).toBe(i);
    }
  });

  test("Insert at end of List", () => {
    const myList = new List();
    for (let i = 0; i < 10; i++) {
      myList.insertLast(i);
      expect(myList.getLast()).toBe(i);
    }
  });

  test("check if the list is empty", () => {
    // TODO: make sure to cover both cases (empty and not-empty)
  });

  test("remove from the head of the list", () => {
    const myList = new List();
    for (let i = 0; i < 10; i++) {
      myList.insertFirst(i);
    }
    myList.removeFirst();
    expect(myList.getFirst()).toBe(8);
  });

  test("remove from the tail of the list", () => {
    const myList = new List();
    for (let i = 0; i < 10; i++) {
      myList.insertFirst(i);
    }
    myList.removeLast();
    expect(myList.getLast()).toBe(1);
  });
});
