export function isArraySorted(array: number[]): boolean {
  let result: boolean;
  // compare the i elements with the i-1, and check that they are in order
  if (array.length === 0) {
    result = true;
  } else {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] < array[i]) {
        result = true;
      } else result = false;
    }
  }
  return result;
}

/**
 * find a number in a sorted array
 *
 * If found, return the index of the element, and -1 otherwise
 */
export function binarySearch(array: number[], key: number): number {
  return 0;
}
