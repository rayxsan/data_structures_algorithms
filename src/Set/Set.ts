class Set<T> {
  /**
   * The add() method appends a new element with a specified value to the end of a Set object.
   * @param value The value of the element to add to the Set object.
   */
  add(value: T): Set<T> {
      return this;
  }

  /**
   * The delete() method removes the specified element from a Set object.
   * @param value     The value of the element to remove from the Set object.
   */
  delete(value: T) {}

  /**
   * The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
   * @param value The value to test for presence in the Set object.
   */
  has(value: T): boolean {
    return false;
  }

  /**
   * The clear() method removes all elements from a Set object.
   */
  clear() {}

  /**
   * returns the number of (unique) elements in a Set
   */
  getSize(): number {
    return 0;
  }

  /**
   * The forEach() method executes a provided function once for each value in the Set object, in insertion order.
   * @param cb Function to execute for each element
   */
  forEach(cb: (value: T) => void) {}

  *[Symbol.iterator]() {}
}

export default Set;
