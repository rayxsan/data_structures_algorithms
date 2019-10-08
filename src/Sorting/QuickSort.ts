import { SSL_OP_COOKIE_EXCHANGE } from "constants";

/**
 * array: array of elements to be sorted
 * cmp: return -1 if a < b; 0 if a === b; and 1 if b > a
 */
function quickSort<T>(array: T[], cmp: (a: T, b: T) => number) {
  sort(array, 0, array.length - 1, cmp);
}

function partition<T>(
  src: T[],
  lo: number,
  hi: number,
  cmp: (a: T, b: T) => number
): number {
  let i = lo;
  let j = hi + 1;
  let c = src[lo];

  while (true) {
    while (cmp(src[++i], c) <= 0) if (i === hi) break;
    while (cmp(c, src[--j]) <= 0) if (j === lo) break;
    if (i >= j) break;
    exch(src, i, j);
  }
  exch(src, lo, j);
  return j;
}

function exch<T>(array: T[], i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sort<T>(
  src: T[],
  lo: number,
  hi: number,
  cmp: (a: T, b: T) => number
) {
  if (hi <= lo) return;
  const j = partition(src, lo, hi, cmp);
  sort(src, lo, j - 1, cmp);
  sort(src, j + 1, hi, cmp);
}

export default quickSort;
