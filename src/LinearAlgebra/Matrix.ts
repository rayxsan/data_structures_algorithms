// NOTE: Matrices are inmutable (not modifyable) once created.
// Operations like scalar multiplication simple create a new matrix, and never modify the existing matrix.

class Matrix {
  constructor(rows: Array<Array<number>>) {}

  getRow(n: number): Array<number> {}

  getColumn(n: number): Array<number> {}

  get(row: number, column: number): number {}

  transpose(): Matrix {}

  determinant(): number {}

  add(other: Matrix): Matrix {}

  multiply(other: Matrix): Matrix {}

  scalarProduct(alpha: number): Matrix {}

  equal(other: Matrix): boolean {}

  toString(): string {}
}

/**
 * Create an Identity matrix
 * @param size number of rows and columns
 */
export function IdentityMatrix(size: number): Matrix {}

export default Matrix;
