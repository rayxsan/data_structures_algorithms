import Stack from "../Stacks/Stack";

describe("Stacks", () => {
  test("Is Empty?", () => {
    // Create an empty Stack
    const myStack = new Stack<number>();
    expect(myStack.isEmpty()).toBeTruthy;

    // Fill the Stack with a[] values
    let a = [1, 2, 3, 4, 5];
    for (let i = 0; i < a.length; i++) {
      myStack.push(a[i]);
    }
    expect(myStack.isEmpty()).toBeFalsy;

    // Lets empty the Stack and then test that
    for (let i = 0; i < a.length; i++) {
      myStack.pop();
    }
    expect(myStack.isEmpty()).toBeTruthy;
  });

  test("Size", () => {
    let a = [1, 2, 3, 4, 5];
    const myStack = new Stack<number>();
    for (let i = 0; i < a.length; i++) {
      myStack.push(a[i]);
    }
    expect(myStack.size()).toBe(a.length);
  });

  test("Add an item to the stack", () => {
    let a = [1, 2, 3, 4, 5];
    const myStack = new Stack<number>();
    const b: number[] = [];

    for (let i = 0; i < a.length; i++) {
      myStack.push(a[i]);
    }
    for (let i = 0; i < a.length; i++) {
      b[i] = myStack.pop();
    }

    for (let i = 0; i < a.length; i++) {
      expect(b[i]).toBe(a[a.length - i - 1]);
    }
  });
});
