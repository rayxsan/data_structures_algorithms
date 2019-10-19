import { MaxPQ } from "../Queues/PriorityQueues";

describe("MaxPQ", () => {
  let cmpAscending = (x: number, y: number) => x > y;
  test("Create an empty PQ", () => {
    let myPQ = new MaxPQ(cmpAscending);
    expect(myPQ.isEmpty()).toBeTruthy();
  });

  test("Insert elements in PQ and verify the size and the max value", () => {
    const array = [4, 5, 6, 1, 2];
    const myPQ = new MaxPQ<number>(cmpAscending);
    for (let i = 0; i < array.length; i++) {
      myPQ.insert(array[i]);
      expect(myPQ.size()).toEqual(i + 1);
    }
  });

  test("Delete all values in the queue and verify order (from largest to smallest)", () => {
    const array = [4, 5, 6, 1, 2];
    const myPQ = new MaxPQ<number>(cmpAscending);
    for (let i = 0; i < array.length; i++) {
      myPQ.insert(array[i]);
    }
    array.sort((x: number, y: number) => y - x);
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      expect(myPQ.delMax()).toEqual(array[i]);
    }

    expect(myPQ.isEmpty()).toBeTruthy();
  });

  test("Get an error if try to delete or get max value from an empty PQ", () => {
    const myPQ = new MaxPQ<number>(cmpAscending);
    expect(() => myPQ.delMax()).toThrowError("Is empty");
    expect(() => myPQ.max()).toThrowError("Is empty");
  });
});
