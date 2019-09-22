import SList from "../Lists/SList";

describe("SList", () => {
  test("Check if the sList is empty", () => {
    const my_list = new SList();
    expect(my_list.isEmpty()).toBeTruthy;
    my_list.insert_first("Text");
    expect(my_list.isEmpty()).toBeFalsy;
  });

  test("Insert and get first item on the Slist", () => {
    const my_list = new SList();
    for (let i = 1; i < 10; i++) {
      my_list.insert_first(i);
      expect(my_list.get_first()).toBe(i);
    }
  });

  test("Deleting first value of the SList", () => {
    const my_list = new SList();
    for (let i = 1; i < 10; i++) {
      my_list.insert_first(i);
    }
    my_list.delete_first();
    expect(my_list.get_first()).toBe(8);
  });
});
