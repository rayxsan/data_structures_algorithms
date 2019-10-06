/**
 * array: array of elements to be sorted
 * cmp: return -1 if a < b; 0 if a === b; and 1 if b > a
 */
function merge<T>(
  src: T[],
  lo: number,
  mid: number,
  hi: number,
  dest: T[],
  cmp: (a: T, b: T) => number
) {
  let left = lo;
  let right = mid;

  for (let idx = lo; idx < hi; idx++) {
    if (left >= mid) {
      dest[idx] = src[right++];
    } else if (right >= hi) {
      dest[idx] = src[left++];
    } else if (cmp(src[left], src[right]) <= 0) {
      dest[idx] = src[left++];
    } else {
      dest[idx] = src[right++];
    }
  }
}

function sort<T>(
  src: T[],
  lo: number,
  hi: number,
  dest: T[],
  cmp: (a: T, b: T) => number
) {
  if (hi - lo < 2) {
    return;
  }
  const mid = Math.floor((lo + hi) / 2);
  sort(dest, lo, mid, src, cmp);
  sort(dest, mid, hi, src, cmp);
  merge(src, lo, mid, hi, dest, cmp);
}

function mergeSort<T>(array: T[], cmp: (a: T, b: T) => number) {
  if (array.length === 1) {
    return array;
  }

  const buffer = new Array<T>(array.length);
  for (let i = 0; i < array.length; i++) {
    buffer[i] = array[i];
  }

  sort(buffer, 0, array.length, array, cmp);
}

export default mergeSort;
