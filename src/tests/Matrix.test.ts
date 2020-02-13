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

  test("Get Max Rows and Columns", () => {
    const m = new Matrix([
      [9, 3, 5],
      [-6, -9, 7]
    ]);
    expect(m.getMaxRows()).toEqual(2);
    expect(m.getMaxColumns()).toEqual(3);
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

  test("multiply", () => {
    const m = new Matrix([
      [9, 3, 5],
      [-6, -9, 7],
      [-1, -8, 1]
    ]);
    const n = new Matrix([
      [18, 6, 10],
      [-12, -18, 14],
      [-2, -16, 2]
    ]);
    expect(m.multiply(n).toString()).toEqual(
      "{{116, -80, 142}, {-14, 14, -172}, {76, 122, -120}}"
    );


  test("scalar product", () => {
    const m = new Matrix([
      [9, 3, 5],
      [-6, -9, 7],
      [-1, -8, 1]
    ]);
    const n = m.scalarProduct(2);
    expect(n.toString()).toEqual("{{18, 6, 10}, {-12, -18, 14}, {-2, -16, 2}}");
  });

  test("add", () => {
    const m = new Matrix([
      [0, 4],
      [7, 0],
      [3, 1]
    ]);

    const n = new Matrix([
      [1, 2],
      [2, 3],
      [0, 4]
    ]);

    expect(m.add(n).toString()).toEqual("{{1, 6}, {9, 3}, {3, 5}}");

    const x = new Matrix([
      [1, 6],
      [9, 3]
    ]);

    expect(x.add(IdentityMatrix(2).scalarProduct(-1)).toString()).toEqual(
      "{{0, 6}, {9, 2}}"
    );
  });

  test("transpose", () => {
    const m = new Matrix([
      [0, 4],
      [7, 0],
      [3, 1]
    ]);
    expect(m.transpose().toString()).toEqual("{{0, 7, 3}, {4, 0, 1}}");
  });

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
