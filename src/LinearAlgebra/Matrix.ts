// NOTE: Matrices are immutable (not modifiable) once created.
// Operations like scalar multiplication simple create a new matrix, and never modify the existing matrix.

class Matrix {
  private rows: Array<Array<number>>;

  constructor(rows: Array<Array<number>>) {
    for (let i = 1; i < rows.length; i++) {
      if (rows[i].length !== rows[0].length) {
        throw new Error("This is not a Matrix");
      }
    }
    this.rows = rows;
  }

  getRow(n: number): Array<number> {
    if (n < 0 || n > this.getMaxRows()) {
      throw new Error("Wrong Row Index");
    }
    return this.rows[n];
  }

  getColumn(n: number): Array<number> {
    if (n < 0 || n > this.getMaxColumns()) {
      throw new Error("Wrong Column Index");
    }
    const temp = new Array<number>();
    for (let i = 0; i < this.rows.length; i++) {
      temp[i] = this.rows[i][n];
    }
    return temp;
  }

  get(row: number, column: number): number {
    if (row < 0 || row > this.getMaxRows()) {
      throw new Error("Wrong Row Index");
    }
    if (column < 0 || column > this.getMaxColumns()) {
      throw new Error("Wrong Column Index");
    }
    return this.rows[row][column];
  }

  transpose(): Matrix {
    const result = new Array<Array<number>>();
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.rows[i].length; j++) {
        if (!result[j]) {
          result[j] = [];
        }
        result[j][i] = this.rows[i][j];
      }
    }

    return new Matrix(result);
  }

  private getCofactor(
    m: Array<Array<number>>,
    temp: Array<Array<number>>,
    p: number,
    q: number,
    n: number
  ) {
    let i = 0;
    let j = 0;

    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (row != p && col != q) {
          if (!temp[i]) {
            temp[i] = [];
          }

          temp[i][j++] = m[row][col];
          if (j === n - 1) {
            j = 0;
            i++;
          }
        }
      }
    }
  }
  determinant(): number {
    let result = 0;
    let n = this.getMaxRows();
    if (n === 1) {
      return this.rows[0][0];
    }

    let temp = new Array<Array<number>>(); //store coFactors

    let sign = 1;

    n = n - 1;
    /*  for (let f = 0; f < n; f++) {
      this.getCofactor(this.rows, temp, 0, f, n);
      result += sign * this.rows[0][f] * this.determinant();
      sign = -sign;
    }
 */
    return result;
  }

  add(other: Matrix): Matrix {
    const result = new Array<Array<number>>();

    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.rows[i].length; j++) {
        if (!result[i]) {
          result[i] = [];
        }
        result[i][j] = this.rows[i][j] + other.get(i, j);
      }
    }
    return new Matrix(result);
  }

  multiply(other: Matrix): Matrix {
    if (this.getMaxColumns() !== other.getMaxRows()) {
      throw new Error("Wrong Matrix Dimensions");
    }

    const result = new Array<Array<number>>();

    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < other.getMaxColumns(); j++) {
        for (let k = 0; k < this.rows[0].length; k++) {
          if (!result[i]) {
            result[i] = [];
            for (let l = 0; l < other.getMaxColumns(); l++) {
              result[i][l] = 0;
            }
          }
          result[i][j] += this.rows[i][k] * other.get(k, j);
        }
      }
    }
    return new Matrix(result);
  }

  scalarProduct(alpha: number): Matrix {
    const result = new Array<Array<number>>();

    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.rows[i].length; j++) {
        if (!result[i]) {
          result[i] = [];
        }
        result[i][j] = alpha * this.rows[i][j];
      }
    }
    return new Matrix(result);
  }

  equal(other: Matrix): boolean {
    if (!this.compare(other)) {
      throw new Error("Wrong Matrix Dimensions");
    }
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.rows[i].length; j++) {
        if (this.rows[i][j] !== other.get(i, j)) {
          return false;
        }
      }
    }
    return true;
  }

  toString(): string {
    // TODO: This seems unnecessarily complicated. Consider re-writing without using the .replace method.
    const header = "{";
    const footer = "}, ";
    let body = "";
    for (let i = 0; i < this.rows.length; i++) {
      body += header + this.rows[i].toString() + footer;
    }
    let result = header + body + "}";
    result = result
      .replace("}, }", "}}")
      .replace(/,/g, ", ")
      .replace(/},  /g, "}, ");
    return result;
  }

  getMaxRows(): number {
    return this.rows.length;
  }

  getMaxColumns() {
    return this.rows[0].length;
  }
  compare(other: Matrix): boolean {
    if (
      this.getMaxRows() === other.getMaxRows() &&
      this.getMaxColumns() === other.getMaxColumns()
    ) {
      return true;
    }
    return false;
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
      // NOTE: What about something like this....
      //temp[i][j] = i === j ? 1 : 0;
      // TypeError: Cannot set property '0' of undefined
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
