import Matrix, { IdentityMatrix } from "../LinearAlgebra/Matrix";

// NOTE: to verify some operations, use Wolfram Alpha.
// You can find examples here: https://www.wolframalpha.com/examples/mathematics/algebra/matrices/

describe("Matrix", () => {
  test.todo("getValues");
  test.todo("getRow");
  test.todo("getColumn");

  test.todo("multiply");
  test.todo("multiply with identity");

  test.todo("scalar product");

  test.todo("add");

  test.todo("transpose");
  /* 
  test("determinant", () => {
    const m = new Matrix([
      [9, 3, 5],
      [-6, -9, 7],
      [-1, -8, 1]
    ]);
    expect(m.determinant()).toEqual(615);

    // TODO: try other matrices too
  }); */

  test.todo("equal");

  /* test("toString", () => {
    const i = IdentityMatrix(3);
    expect(i.toString()).toEqual("{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}");
  }); */
});
