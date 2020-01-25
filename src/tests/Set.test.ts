import Set from "../Set/Set";

describe("Sets", () => {
  test("add", () => {
    const mySet = new Set();
    for (let i = 1; i <= 4; i++) {
      mySet.add(i);
      expect(mySet.getSize()).toEqual(i);
    }
    expect(mySet.getCapacity()).toEqual(4);
    mySet.add(5).add(6);
    expect(mySet.getCapacity()).toEqual(8);

    expect(() => mySet.add(2)).toThrowError("Duplicate entry");
  });

  test.todo("delete");

  test("has", () => {
    const mySet = new Set();
    for (let i = 0; i < 6; i++) {
      mySet.add(i);
      expect(mySet.has(i)).toBeTruthy;
    }
    expect(mySet.has(34)).toBeFalsy; // this should fail
  });

  test.todo("clear");

  test("getSize", () => {
    const mySet = new Set();
    for (let i = 0; i < 14; i++) {
      mySet.add(i);
      expect(mySet.getSize()).toEqual(i + 1);
    }
  });

  test.todo("forEach");

  test.todo("iterator");
});
