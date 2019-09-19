import List from "../Lists/List";

describe("List", () => {
  test("Insert at head of list", () => {
    const myList = new List();
    for (let i = 0; i < 10; i++) {
      myList.insert_first(i);
      expect(myList.get_first()).toBe(i);
    }
  });

  test("Insert at end of List", () => {
    const myList = new List();
    for (let i = 0; i < 10; i++) {
      myList.insert_last(i);
      expect(myList.get_last()).toBe(i);
    }
  });

  test("check if the list is empty", () => {
    // TODO: make sure to cover both cases (empty and not-empty)
  });

  test("remove from the head of the list", () => {
    // TODO: finish this
  });

  test("remove from the tail of the list", () => {
    // TODO: finish this
  });
});
