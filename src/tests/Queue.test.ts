import Queue from "../Queues/Queue";

describe("Queue", () => {
  test("Is Empty? ", () => {
    const a = [1, 2, 3, 4, 5];
    const myQueue = new Queue<number>();
    expect(myQueue.isEmpty()).toBeTruthy;
    for (let i = 0; i < a.length; i++) {
      myQueue.enqueue(a[i]);
    }
    expect(myQueue.isEmpty()).toBeFalsy;
  });
  test("Remove element", () => {
    const a = [1, 2, 3, 4, 5];
    const myQueue = new Queue<number>();

    // Try to remove an element from an empty queue
    expect(() => myQueue.dequeue()).toThrowError("Queue is empty");

    const b: number[] = [];
    for (let i = 0; i < a.length; i++) {
      myQueue.enqueue(a[i]);
    }
    for (let i = 0; i < 5; i++) {
      b[i] = myQueue.dequeue();
    }
    for (let i = 0; i < a.length; i++) {
      expect(a[i]).toBe(b[i]);
    }
  });

  test("Size of the queue", () => {
    const a = [1, 2, 3, 4, 5];
    const myQueue = new Queue<number>();
    expect(myQueue.size()).toBe(0);
    for (let i = 0; i < a.length; i++) {
      myQueue.enqueue(a[i]);
    }
    expect(myQueue.size()).toBe(a.length);
  });
});
