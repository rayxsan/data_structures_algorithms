export class MaxPQ<T> {
  constructor(moreThan: (x: T, y: T) => boolean, options?: number | T[]) {
    // check if options is defined, and if so, what type it is
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
    return true;
  }

  /**
   * return the number of values in the priority queue
   */
  size(): number {
    return -1;
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
