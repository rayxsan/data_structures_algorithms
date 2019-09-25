import Vector from "../Vectors/Vector";

describe("testing vector operations", () => {
  test("test pushBack", () => {
    // in a loop, add elements to the vector
    // in another loop check the correct elements are at the correct index
    // for (let elem of myVector) {...}
  });

  test("test popBack", () => {
    // check that elements are poped in the right order
  });

  test("pop en empty vector", () => {});

  test("test empty", () => {
    // test both cases, empty and non-empty
  });

  test("test size", () => {
    // use 2 loops, one inserting elements and checking the size
    // another popping elements and checking the size
  });

  test("test getAt valid", () => {
    // in a loop, add elements to the vector
    // in another loop, check the correct elements are at the correct index using getAt
  });
  test("test getAt invalid", () => {
    const v = new Vector<string>();
    v.popBack("a");
    v.popBack("b");
    v.popBack("c");
    v.getAt(5);
  });

  test("test forEach", () => {
    // in a loop, add elements to the vector
    // use the forEach to check that the right elements are are the right position
  });
});
