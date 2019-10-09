export class MaxPQ<T> {
  private key: T[];
  private len: number = 0;

  constructor(moreThan: (x: T, y: T) => boolean, options?: number | T[]) {
    // check if options is defined, and if so, what type it is
    if (options) {
      if (typeof options === "number") {
        this.len = Math.max(options);
        let array = new Array<T>(this.len);
      } else if (options instanceof Array) {
        this.len = options.length;
        let array = options;
      }
    } else {
      let array = new Array<T>();
    }
    this.key = array;
    //let pq = this.key;
    console.log(`${this.key}`);
    const moreT = moreThan(this.key[1], this.key[2]);
  }

  /**
   * insert a value in the priority queue
   */
  insert(value: T) {}

  /**
   * return the largest value or error if empty
   */
  max(): T {
    return {} as T;
  }

  /**
   * return and remove the largest value or error if empty
   */
  delMax(): T {
    return {} as T;
  }

  /**
   * check if it is empty
   */
  isEmpty(): boolean {
    return this.len === 0;
  }

  /**
   * return the number of values in the priority queue
   */
  size(): number {
    return this.len;
  }
}

export class MinPQ<T> {
  constructor(lessThan: (x: T, y: T) => boolean, options?: number | T[]) {
    // check if options is defined, and if so, what type it is
  }

  /**
   * insert a value in the priority queue
   */
  insert(value: T) {}

  /**
   * return the smallest value or error if empty
   */
  min(): T {
    return {} as T;
  }

  /**
   * return and remove the smallest value or error if empty
   */
  delMin(): T {
    return {} as T;
  }

  /**
   * check if it is empty
   */
  isEmpty(): boolean {
    return true;
  }

  /**
   * return the number of values in the priority queue
   */
  size(): number {
    return -1;
  }
}

const array1 = [13, 21, 3, 4, 8, 11, 6];
let myPQ = new MaxPQ((x: number, y: number) => x < y, array1);

console.log(myPQ.size());
