class BagArray<T> {
  b_array = new Array<T>();
  //value: T | undefined;
  //index: number = 0;
  constructor() {
    this.b_array = [];
    //this.value = undefined;
  }

  add(value: T) {
    this.b_array.push(value);
  }

  isEmpty(): boolean {
    if (this.b_array.length == 0) {
      return true;
    } else return false;
    //this.b_array.length == 0? true : false;
  }

  size(): number {
    return this.b_array.length;
  }
}

export default BagArray;
