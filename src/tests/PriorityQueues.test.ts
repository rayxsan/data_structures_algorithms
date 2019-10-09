import { MaxPQ, MinPQ } from "../Queues/PriorityQueues";

describe("MaxPQ", () => {
  let cmpAscending = (x: number, y: number) => x < y;
  test("Create an empty PQ", () => {
    let myPQ = new MaxPQ(cmpAscending);
    expect(myPQ.isEmpty()).toBeTruthy();
  });

  test("Create a PQ of capacity n", () => {
    let myPQ = new MaxPQ(cmpAscending, 10);
    expect(myPQ.size()).toBe(10);
  });

  test("Create a PQ from an array of numbers", () => {
    const array = [13, 21, 3, 4, 8, 11, 6];
    let myPQ = new MaxPQ(cmpAscending, array);
    expect(myPQ.size()).toEqual(array.length);
  });

  test.todo("Insert elements in PQ and verify the size and the max value");

  test.todo("Insert elements pass the max capacity of the PQ");

  // test("Delete all values in the queue and verify order (from largest to smallest)", () => {
  //   const array = [4, 5, 6, 1, 2];
  //   const myPQ = new MaxPQ<number>((x: number, y: number) => x > y, array);
  //   array.sort((x: number, y: number) => y - x);
  //   for (let elem of array) {
  //     expect(myPQ.delMax()).toEqual(elem);
  //   }

  //   expect(myPQ.isEmpty()).toBeTruthy();
  // });

  test.todo("Get an error if try to delete or get max value from an empty PQ");
});
