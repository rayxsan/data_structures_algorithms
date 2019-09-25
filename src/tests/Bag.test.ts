import Bag from "../Bags/Bag";

describe("Bags", () => {
  //test("Add elem to Bag", () => {});

  test("Check if the bag is empty", () => {
    const myBag = new Bag();
    expect(myBag.isEmpty()).toBe(true);
    myBag.add(2);
    expect(myBag.isEmpty()).toBe(false);
  });

  test("verify add and size", () => {
    const myBag = new Bag<number>();
    expect(myBag.size()).toBe(0);

    const array = [1, 2, 3, 4, 5];
    for (let elem of myBag) {
      expect(array.includes(elem)).toBeTruthy;
    }
  });
});
