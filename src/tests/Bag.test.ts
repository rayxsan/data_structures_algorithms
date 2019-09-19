import Bag from "../Bags/Bag";

describe("Bags", () => {
  test("Add elem to Bag", () => {});

  test("Check if the bag is empty", () => {
    const myBag = new Bag();
    expect(myBag.isEmpty()).toBe(true);
    myBag.add(0);
    expect(myBag.isEmpty()).toBe(false);
  });

  test("Bag size", () => {
    const myBag = new Bag();
    expect(myBag.size()).toBe(0);

    for (let i = 0; i < 5; i++) {
      myBag.add(i);
      expect(myBag.size()).toBe(i + 1);
    }
  });
});
