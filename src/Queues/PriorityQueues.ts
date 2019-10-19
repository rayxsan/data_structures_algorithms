export class MaxPQ<T> {
  private array: T[];
  private len: number = 0;
  private moreT: (x: T, y: T) => boolean;

  constructor(moreThan: (x: T, y: T) => boolean) {
    this.array = new Array<T>();
    this.moreT = moreThan;
  }

  /**
   * insert a value in the priority queue
   */
  insert(value: T) {
    this.array.push(value);
    this.swim(this.len);
    this.len++;
  }

  /**
   * return the largest value or error if empty
   */
  max(): T {
    if (this.isEmpty()) {
      throw new Error("Is empty");
    }
    return this.array[0];
  }

  /**
   * return and remove the largest value or error if empty
   */
  delMax(): T {
    if (this.isEmpty()) {
      throw new Error("Is empty");
    }

    const result = this.max();
    this.exch(0, this.len - 1);
    this.len--;
    this.sink(0);
    return result;
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
  private hasParent(i: number) {
    return i > 0;
  }
  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private leftChild(i: number) {
    return 2 * i + 1;
  }
  private rightChild(i: number) {
    return 2 * i + 2;
  }

  private less(i: number, j: number): boolean {
    return !this.moreT(this.array[i], this.array[j]);
  }

  private exch(i: number, j: number) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  private swim(k: number) {
    while (this.hasParent(k) && this.less(this.parent(k), k)) {
      this.exch(this.parent(k), k);
      k = this.parent(k);
    }
  }

  private sink(k: number) {
    while (this.leftChild(k) < this.len) {
      let j = this.leftChild(k);
      if (
        this.leftChild(k) < this.len - 1 &&
        this.less(this.leftChild(k), this.rightChild(k))
      ) {
        j = this.rightChild(k);
      }
      if (!this.less(k, j)) break;
      this.exch(k, j);
      k = j;
    }
  }
}

/*

#define PARENT(i) (((i)-1) / 2) // floor
#define LEFT(i) (2 * (i) + 1)
#define RIGHT(i) (2 * (i) + 2)
#define HAS_PARENT(i) ((i) > 0)

*/
