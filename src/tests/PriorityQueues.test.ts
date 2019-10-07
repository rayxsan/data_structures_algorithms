import { MaxPQ, MinPQ } from "../Queues/PriorityQueues";

describe("MaxPQ", () => {
  test.todo("Create an empty PQ");

  test.todo("Create a PQ of capacity n");

  test.todo("Create a PQ from an array of numbers");

  test.todo("Insert elements in PQ and verify the size and the max value");

  test.todo("Insert elements pass the max capacity of the PQ");

  test("Delete all values in the queue and verify order (from largest to smallest)", () => {
    const array = [4, 5, 6, 1, 2];
    const myPQ = new MaxPQ<number>((x: number, y: number) => x > y, array);
    array.sort((x: number, y: number) => y - x);
    for (let elem of array) {
      expect(myPQ.delMax()).toEqual(elem);
    }

    expect(myPQ.isEmpty()).toBeTruthy();
  });

  test.todo("Get an error if try to delete or get max value from an empty PQ");
});
