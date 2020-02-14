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
    return this.rows[n];
  }

  getColumn(n: number): Array<number> {
    const temp = new Array<number>();
    for (let i = 0; i < this.rows.length; i++) {
      temp[i] = this.rows[i][n];
    }
    return temp;
  }

  get(row: number, column: number): number {
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

  determinant(): number {
    return 0;
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
