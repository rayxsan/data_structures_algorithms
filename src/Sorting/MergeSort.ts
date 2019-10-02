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

function mergeSort<T>(array: T[], cmp: (a: T, b: T) => number): number[] {
  // create an aux array
  // a, b
  // a -merge-into-> b
  // b -merge-into-> a
  return [];
}

function merge1(a: number[], lo: number, mid: number, hi: number) {
  //Merge Array 1 with Array 2
}

export default mergeSort;

let myArray = [4, 5, 6, 8, 9, 11, 12, 21, 1, 4];

sort(myArray, 0, myArray.length - 1);

console.log(myArray);
