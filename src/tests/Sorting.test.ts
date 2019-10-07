import mergeSort from "../Sorting/MergeSort";
import { getRndNumbers } from "../utils/Random";
import { getRandomPersons, Person } from "../utils/Persons";

describe("testing merge-sort", () => {
  const cmpNumbersAscending = (x: number, y: number) => x - y;
  const cmpNumbersDescending = (x: number, y: number) => y - x;

  test("Array of Numbers", () => {
    const numbers = [1, 3, 9, 4, 5, 6];
    const sortedNumbers = [...numbers].sort(cmpNumbersAscending);
    mergeSort(numbers, cmpNumbersAscending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort random numbers in ascending order", () => {
    const numbers = getRndNumbers(10, { min: 1, max: 10, useIntegers: true });
    const sortedNumbers = [...numbers].sort(cmpNumbersAscending);
    mergeSort(numbers, cmpNumbersAscending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort random numbers in descending order", () => {
    const numbers = getRndNumbers(10);
    const sortedNumbers = [...numbers].sort(cmpNumbersDescending);
    mergeSort(numbers, cmpNumbersDescending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort sorted array (ascending)", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mergeSort(numbers, cmpNumbersAscending);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("sort sorted array (descending)", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sortedNumbers = [...numbers].sort(cmpNumbersDescending);
    mergeSort(numbers, cmpNumbersDescending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort array of random persons by ascending age", () => {
    const cmpPersonsAscending = (x: Person, y: Person) => x.age - y.age;
    const persons = getRandomPersons(10);
    const sortedPersons = [...persons].sort(cmpPersonsAscending);
    mergeSort(persons, cmpPersonsAscending);
    expect(persons).toEqual(sortedPersons);
  });

  test("sort array of random persons by name", () => {
    const cmpPersonsByLastName = (x: Person, y: Person) =>
      x.name.localeCompare(y.name);
    const persons = getRandomPersons(10);
    const sortedPersons = [...persons].sort(cmpPersonsByLastName);
    mergeSort(persons, cmpPersonsByLastName);
    expect(persons).toEqual(sortedPersons);
  });
});

describe("testing quick-sort", () => {
  const cmpNumbersAscending = (x: number, y: number) => x - y;
  const cmpNumbersDescending = (x: number, y: number) => y - x;

  test("Array of Numbers", () => {
    const numbers = [1, 3, 9, 4, 5, 6];
    const sortedNumbers = [...numbers].sort(cmpNumbersAscending);
    quickSort(numbers, cmpNumbersAscending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort random numbers in ascending order", () => {
    const numbers = getRndNumbers(10, { min: 1, max: 10, useIntegers: true });
    const sortedNumbers = [...numbers].sort(cmpNumbersAscending);
    quickSort(numbers, cmpNumbersAscending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort random numbers in descending order", () => {
    const numbers = getRndNumbers(10);
    const sortedNumbers = [...numbers].sort(cmpNumbersDescending);
    quickSort(numbers, cmpNumbersDescending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort sorted array (ascending)", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    quickSort(numbers, cmpNumbersAscending);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("sort sorted array (descending)", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sortedNumbers = [...numbers].sort(cmpNumbersDescending);
    quickSort(numbers, cmpNumbersDescending);
    expect(numbers).toEqual(sortedNumbers);
  });

  test("sort array of random persons by ascending age", () => {
    const cmpPersonsAscending = (x: Person, y: Person) => x.age - y.age;
    const persons = getRandomPersons(10);
    const sortedPersons = [...persons].sort(cmpPersonsAscending);
    quickSort(persons, cmpPersonsAscending);
    expect(persons).toEqual(sortedPersons);
  });

  test("sort array of random persons by name", () => {
    const cmpPersonsByLastName = (x: Person, y: Person) =>
      x.name.localeCompare(y.name);
    const persons = getRandomPersons(10);
    const sortedPersons = [...persons].sort(cmpPersonsByLastName);
    quickSort(persons, cmpPersonsByLastName);
    expect(persons).toEqual(sortedPersons);
  });
});
