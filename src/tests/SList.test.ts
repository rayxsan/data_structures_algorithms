import SList from "../Lists/SList";

describe("SList", () => {
  test("Check if the sList is empty", () => {
    const my_list = new SList();
    expect(my_list.isEmpty()).toBeTruthy;
    my_list.insertFirst("Text");
    expect(my_list.isEmpty()).toBeFalsy;
  });

  test("Insert and get first item on the Slist", () => {
    const my_list = new SList();
    for (let i = 1; i < 10; i++) {
      my_list.insertFirst(i);
      expect(my_list.getFirst()).toBe(i);
    }
  });

  test("Deleting first value of the SList", () => {
    const my_list = new SList();
    for (let i = 1; i < 10; i++) {
      my_list.insertFirst(i);
    }
    my_list.deleteFirst();
    expect(my_list.getFirst()).toBe(8);
  });
});
