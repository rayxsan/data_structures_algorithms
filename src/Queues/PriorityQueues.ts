export class MaxPQ<T> {
  private array: T[];
  private len: number = 0;
  private moreT: (x: T, y: T) => boolean;

  constructor(moreThan: (x: T, y: T) => boolean, options?: number) {
    // check if options is defined, and if so, what type it is
    const maxCapacity = options;
    if (options) {
      this.len = options;
      this.array = new Array<T>(this.len);
    } else this.array = new Array<T>();

    this.moreT = moreThan;
  }

  /**
   * insert a value in the priority queue
   */
  insert(value: T) {
    this.array[++this.len] = value;
    this.swim(this.len);
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
    if (!this.isEmpty()) {
      const result = this.max();
      this.exch(1, this.len--);
      this.sink(1);
      return result;
    } else throw new Error("Is empty");
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
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      this.exch(Math.floor(k / 2), k);
      k = Math.floor(k / 2);
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

export class indexMinPQ<T> {
  constructor(lessThan: (x: T, y: T) => boolean, capacity?: number) {
    // check if options is defined, and if so, what type it is
  }

  /**
   * insert a value in the priority queue
   */
  insert(index: number, value: T) {}

  /**
   * change the item associated with index to value
   */
  change(index: number, value: T) {}

  /**
   * return true if index has some value associated, false otherwise
   */
  contains(index: number): boolean {
    return false;
  }
  /**
   * removes index and its associated value
   */
  delete(index: number) {}

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
