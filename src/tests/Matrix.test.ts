import Matrix, { IdentityMatrix } from "../LinearAlgebra/Matrix";

// NOTE: to verify some operations, use Wolfram Alpha.
// You can find examples here: https://www.wolframalpha.com/examples/mathematics/algebra/matrices/

describe("Matrix", () => {
  test("getRow", () => {
    const m = new Matrix([
      [9, 3, 5],
      [-6, -9, 7],
      [-1, -8, 1]
    ]);
    expect(m.getRow(1)).toStrictEqual([9, 3, 5]);
    expect(m.getRow(2)).toStrictEqual([-6, -9, 7]);
    expect(m.getRow(3)).toStrictEqual([-1, -8, 1]);
  });
  test("getColumn", () => {
    const m = new Matrix([
      [9, 3, 5],
      [-6, -9, 7],
      [-1, -8, 1]
    ]);
    expect(m.getColumn(1)).toStrictEqual([9, -6, -1]);
    expect(m.getColumn(2)).toStrictEqual([3, -9, -8]);
    expect(m.getColumn(3)).toStrictEqual([5, 7, 1]);
  });
  test("getValues", () => {
    const m = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);

    const compArray = [];
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        compArray.push(m.get(i, j));
      }
    }
    for (let i = 0; i < compArray.length; i++) {
      expect(compArray[i]).toBe(i + 1);
    }
  });

  test.todo("multiply");
  test.todo("multiply with identity");

  test.todo("scalar product");

  test.todo("add");

  test.todo("transpose");

  test("determinant", () => {
    const m = new Matrix([
      [9, 3, 5],
      [-6, -9, 7],
      [-1, -8, 1]
    ]);
    expect(m.determinant()).toEqual(615);

    // TODO: try other matrices too
  });

  test("equal", () => {
    const m = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);

    const n = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);

    expect(m.equal(n)).toBe(true);
  });

  test("toString", () => {
    const i = IdentityMatrix(3);
    expect(i.toString()).toEqual("{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}");
  });
});
