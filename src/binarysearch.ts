export function isArraySorted(array: number[]): boolean {
  let result: boolean;
  // compare the i elements with the i-1, and check that they are in order
  if (array.length === 0) {
    result = true;
  } else {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        result = false;
        break;
      } else result = true;
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
  let lo = 0; // First element in the array
  let hi = array.length - 1; // Last elem in the array
  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (key < array[mid]) {
      hi = mid - 1;
    } else {
      if (key > array[mid]) {
        lo = mid + 1;
      } else return mid;
    }
  }
  return -1;
}
