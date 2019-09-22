import BagArray from "../Bags/BagArray";

describe("Bag Array", () => {
  test("Check if it is empty", () => {
    const my_bag = new BagArray();
    expect(my_bag.isEmpty()).toBeTruthy;
    my_bag.add("text");
    expect(my_bag.isEmpty()).toBeFalsy;
  });

  test("Bag size", () => {
    const myBag = new BagArray();
    expect(myBag.size()).toBe(0);

    for (let i = 0; i < 5; i++) {
      myBag.add(i);
      expect(myBag.size()).toBe(i + 1);
    }
  });

  test('Get a value on index "i"', () => {
    const myBag = new BagArray();

    expect(() => myBag.get_value(0)).toThrowError("Bag is empty");

    for (let i = 0; i < 5; i++) {
      myBag.add(i);
      expect(myBag.get_value(i)).toBe(i);
    }

    expect(() => myBag.get_value(5)).toThrowError("Undefined value");
  });
});
