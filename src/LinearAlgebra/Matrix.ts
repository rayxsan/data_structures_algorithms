// NOTE: Matrices are immutable (not modifiable) once created.
// Operations like scalar multiplication simple create a new matrix, and never modify the existing matrix.

class Matrix {
  private rows: Array<Array<number>>;
  constructor(rows: Array<Array<number>>) {
    this.rows = rows;
  }

  getRow(n: number): Array<number> {
    return this.rows[n - 1];
  }

  getColumn(n: number): Array<number> {
    const temp = new Array<number>();
    for (let i = 0; i < this.rows.length; i++) {
      temp[i] = this.rows[i][n - 1];
    }
    return temp;
  }

  get(row: number, column: number): number {
    return this.rows[row - 1][column - 1];
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
  const temp = new Array<Array<number>>();
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (!temp[i]) {
        temp[i] = [];
      }
      if (i === j) {
        temp[i][j] = 1;
      } else {
        temp[i][j] = 0;
      }
    }
  }
  return new Matrix(temp);
}

export default Matrix;

const m = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

const iMatrix = IdentityMatrix(3);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === j) console.log(iMatrix.get(i, j));
  }
}
