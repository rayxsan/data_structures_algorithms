import { isArraySorted, binarySearch } from "../binarysearch";

describe("Array is sorted", () => {
  test("sorted", () => {
    const array = [1, 2, 3, 4];
    expect(isArraySorted(array)).toBe(true);
  });

  test("empty-sorted", () => {
    expect(isArraySorted([])).toBe(true);
  });

  test("not-sorted", () => {
    const array = [1, 3, 5, 4, 7, 8];
    expect(isArraySorted(array)).toBe(false);
  });
});

describe("binarySearch", () => {
  test("searching for element at position 2", () => {
    const array = [1, 2, 3, 4, 5];
    expect(binarySearch(array, 3)).toBe(2);
  });

  test("searching in an empty array", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });

  test("search for an element not present", () => {
    const array = [1, 2, 3, 4, 5];
    expect(binarySearch(array, 7)).toBe(-1);
  });
});
