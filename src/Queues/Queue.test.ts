import Queue from "../Queues/Queue";

describe("Queue", () => {
  const a = [1, 2, 3, 4, 5];
  const myQueue = new Queue<number>();
  test("Is Empty? ", () => {
    expect(myQueue.isEmpty()).toBeTruthy;
    for (let i = 0; i < a.length; i++) {
      myQueue.enqueue(a[i]);
    }
    expect(myQueue.isEmpty()).toBeFalsy;
  });
  test("Remove element", () => {
    const b: number[] = [];
    for (let i = 0; i < a.length; i++) {
      myQueue.enqueue(a[i]);
      b[i] = myQueue.dequeue();
    }
    /*for (let i = 0; i < 5; i++) {
      b[i] = myQueue.dequeue();
    }*/
    for (let i = 0; i < a.length; i++) {
      expect(a[i]).toBe(b[i]);
    }
  });
});
