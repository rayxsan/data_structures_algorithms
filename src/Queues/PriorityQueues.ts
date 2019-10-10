export class MaxPQ<T> {
  private array: T[];
  private len: number = 0;
  private moreT: (x: T, y: T) => boolean;

  constructor(moreThan: (x: T, y: T) => boolean, options?: number) {
    // check if options is defined, and if so, what type it is

    if (options) {
      this.len = options;
      this.array = new Array<T>(this.len);
    } else this.array = new Array<T>();

    // if (options) {
    //   if (typeof options === "number") {
    //     this.len = Math.max(options);
    //     this.key = new Array<T>(this.len);
    // } else {
    //   this.key = new Array<T>();
    // }
    // console.log(`${this.key}`);
    this.moreT = moreThan;
  }

  /**
   * insert a value in the priority queue
   */
  insert(value: T) {
    this.array[++this.len] = value;
    this.swim(this.len);
    console.log(this.array);
  }

  /**
   * return the largest value or error if empty
   */
  max(): T {
    if (!this.isEmpty()) {
      return this.array[1];
    } else {
      throw new Error("Is empty");
    }
  }

  /**
   * return and remove the largest value or error if empty
   */
  delMax(): T {
    this.exch(1, this.len--);
    this.sink(1);
    return this.max();
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

  //helpers
  private less(i: number, j: number): boolean {
    return this.moreT(this.array[i], this.array[j]);
  }

  private exch(i: number, j: number) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  private swim(k: number) {
    while (k > 1 && this.less(Math.ceil(k / 2), k)) {
      this.exch(Math.ceil(k / 2), k);
      k = Math.ceil(k / 2);
    }
  }

  private sink(k: number) {
    while (2 * k <= this.len) {
      let j = 2 * k;
      if (j < this.len && this.less(j, j + 1)) j++;
      if (!this.less(k, j)) break;
      this.exch(k, j);
      k = j;
    }
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

const array = [4, 5, 6, 3, 2, 9];
const myPQ = new MaxPQ<number>((x: number, y: number) => x < y);
for (let i = 0; i < array.length; i++) {
  myPQ.insert(array[i]);
}
array.sort((x: number, y: number) => x - y);
console.log(myPQ.delMax());
for (let i = 1; i < array.length - 1; i++) {
  console.log(myPQ.delMax());
}
