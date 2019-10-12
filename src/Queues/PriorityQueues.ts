export class MaxPQ<T> {
  private array: T[];
  private len: number = 0;
  private moreT: (x: T, y: T) => boolean;
  private maxCapacity: number = 0;

  constructor(moreThan: (x: T, y: T) => boolean, options?: number) {
    // check if options is defined, and if so, what type it is
    if (options) {
      this.maxCapacity = options;
      this.array = new Array<T>(this.maxCapacity + 1);
    } else this.array = new Array<T>();

    this.moreT = moreThan;
  }

  /**
   * insert a value in the priority queue
   */
  insert(value: T) {
    console.log(`${this.array[1]}" ",${this.maxCapacity}`);
    if (this.maxCapacity === 0 || this.len <= this.maxCapacity) {
      this.array[++this.len] = value;
      this.swim(this.len);
    } else if (this.len > this.maxCapacity) {
      throw new Error("Capacity exceed");
    }
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
  private array: T[];
  private len: number = 0;
  private minV: number = 0;

  constructor(maxCapacity?: number) {
    if (maxCapacity) {
      this.len = maxCapacity;
      this.array = new Array<T>(this.len);
    } else {
      this.array = new Array<T>();
    }
  }

  /**
   * insert a value in the priority queue
   */
  insert(index: number, value: T) {
    this.array[index] = value;
  }

  /**
   * change the item associated with index to value
   */
  change(index: number, value: T) {
    this.array[index] = value;
    if (value < this.array[this.minV]) {
      this.minV = index;
    }
  }

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
    return this.array[this.minV];
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
    return this.len === 0;
  }

  /**
   * return the number of values in the priority queue
   */
  size(): number {
    return this.len;
  }
}

let myPQ = new MaxPQ((x: number, y: number) => x < y, 3);
myPQ.insert(4);
myPQ.insert(5);
myPQ.insert(6);
myPQ.insert(7);
console.log(myPQ.max());

let myArray = [];
myArray.push(3);
myArray.push(3);
myArray.push(3);
myArray.push(4);
console.log(myArray);
