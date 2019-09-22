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

  get_value(index: number) {
    if (!this.isEmpty()) {
      if (this.b_array[index] != undefined) {
        return this.b_array[index];
      } else throw new Error("Undefined value");
    } else throw new Error("Bag is empty");
  }

  size(): number {
    return this.b_array.length;
  }
}

export default BagArray;
