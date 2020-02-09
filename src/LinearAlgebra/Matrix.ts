// NOTE: Matrices are immutable (not modifiable) once created.
// Operations like scalar multiplication simple create a new matrix, and never modify the existing matrix.

class Matrix {
  constructor(rows: Array<Array<number>>) {}

  getRow(n: number): Array<number> {
    return [1];
  }

  getColumn(n: number): Array<number> {
    return [1];
  }

  get(row: number, column: number): number {
    return 0;
  }

  transpose(): Matrix {
    return {} as Matrix;
  }

  determinant(): number {
    return 0;
  }

  add(other: Matrix): Matrix {
    return {} as Matrix;
  }

  multiply(other: Matrix): Matrix {
    return {} as Matrix;
  }

  scalarProduct(alpha: number): Matrix {
    return {} as Matrix;
  }

  equal(other: Matrix): boolean {
    return false;
  }

  toString(): string {
    return "";
  }
}

/**
 * Create an Identity matrix
 * @param size number of rows and columns
 */
export function IdentityMatrix(size: number): Matrix {
  return {} as Matrix;
}

export default Matrix;
