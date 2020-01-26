import Set from "../Set/Set";

describe("Sets", () => {
  const compFn = (x: number, y: number) => {
    return x === y;
  };
  const compFs = (x: string, y: string) => {
    return x === y;
  };
  test("add", () => {
    const mySet = new Set<number>(compFn);
    for (let i = 1; i <= 4; i++) {
      mySet.add(i);
      expect(mySet.getSize()).toEqual(i);
    }
    expect(mySet.getCapacity()).toEqual(4);
    mySet.add(5).add(6);
    expect(mySet.getCapacity()).toEqual(8);

    // expect(() => mySet.add(2)).toThrowError("Duplicate entry");
  });

  test.todo("delete");

  test("has", () => {
    const mySet = new Set<number>(compFn);
    for (let i = 0; i < 6; i++) {
      mySet.add(i);
      expect(mySet.has(i)).toBe(true);
    }
    expect(mySet.has(21)).toBe(false);
  });

  test("clear", () => {
    const mySet = new Set<string>(compFs);
    expect(mySet.getSize()).toBe(0);

    mySet
      .add("a")
      .add("b")
      .add("c");
    expect(mySet.getSize()).toBe(3);

    mySet.clear();
    expect(mySet.getSize()).toBe(0);

    expect(mySet.has("a")).toBe(false);
    expect(mySet.has("b")).toBe(false);
    expect(mySet.has("c")).toBe(false);
    expect(mySet.has("anything-else")).toBe(false);
  });

  test("getSize", () => {
    const mySet = new Set(compFn);
    for (let i = 0; i < 14; i++) {
      mySet.add(i);
      expect(mySet.getSize()).toEqual(i + 1);
    }
  });

  test("forEach", () => {
    const mySet = new Set<string>(compFs);
    mySet
      .add("a")
      .add("b")
      .add("c")
      .add("b");

    const map = new Map<string, number>();
    mySet.forEach(value => {
      const cnt = map.get(value) || 0;
      map.set(value, cnt + 1);
    });

    map.forEach((cnt, value) => {
      expect(cnt).toEqual(1);
    });
    expect(map.size).toEqual(3);
  });

  test("iterator", () => {
    const mySet = new Set<number>(compFn);
    const n = 10;
    const counters = new Array<number>(n);

    for (let i = 0; i < n; i++) {
      mySet.add(i);
      if (i % 2 === 0) {
        mySet.add(i);
      }
      counters[i] = 0;
    }

    for (let value of mySet) {
      counters[value] += 1;
    }

    for (let i = 0; i < n; i++) {
      expect(counters[i]).toBe(1);
    }
  });
});
