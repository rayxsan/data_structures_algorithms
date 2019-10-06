/**
 * array: array of elements to be sorted
 * cmp: return -1 if a < b; 0 if a === b; and 1 if b > a
 */
function merge(array: number[], lo: number, mid: number, hi: number) {
  let i = lo;
  let j = mid + 1;
  const aux = new Array(array.length);

  for (let k = lo; k <= hi; k++) {
    aux[k] = array[k];
  }

  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      array[k] = aux[j++];
    } else if (j > hi) {
      array[k] = aux[i++];
    } else if (aux[j] >= aux[i]) {
      array[k] = aux[j++];
    } else array[k] = aux[i++];
  }
}

function sort(array: number[], lo: number, hi: number) {
  console.log(`${lo}, ${hi}`);
  if (hi <= lo) {
    console.log("we are done");
    return;
  }
  const mid = Math.floor((lo + hi) / 2);
  sort(array, lo, mid);
  sort(array, mid + 1, hi);
  merge(array, lo, mid, hi);
}
//function mergeSort<T>(array: T[], cmp: (a: T, b: T) => number): T[]{}

function mergeSort<T>(array: T[], cmp: (a: T, b: T) => number): T[] {
  if (array.length === 1) {
    return array;
  }

  let left: T[] = [];
  let right: T[] = [];
  let mid = Math.floor(array.length / 2);

  for (let i = 0; i < array.length; i++) {
    if (i < mid) {
      left.push(array[i]);
    } else right.push(array[i]);
  }

  left = mergeSort(left, cmp);
  right = mergeSort(right, cmp);
  console.log(`${left} | ${right}`);
  return myMerge(left, right, cmp);
}

export default mergeSort;

let myArray = [6, 4, 5, 8, 9, 11, 12, 21, 1, 4];

function myMerge<T>(left: T[], right: T[], cmp: (a: T, b: T) => number) {
  const result: T[] = new Array();
  let i = 0;
  let j = 0;
  const comparable = cmp(left[i], right[j]);

  while (i < left.length && j < right.length) {
    if (comparable === -1 || comparable === 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

let a1 = [3, 2, 5, 6, 1, 0];
let a2 = [4];
let a3 = myMerge(a1, a2, (x: number, y: number) => {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else return 0;
});

//console.log(a3);

let a4 = mergeSort(a1, (x: number, y: number) => {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else return 0;
});

console.log(a4);
