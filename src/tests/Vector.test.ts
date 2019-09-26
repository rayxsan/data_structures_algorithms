import Vector from "../Vectors/Vector";

function getVectorOfNumbers(n: number) {
  const v = new Vector<number>(n);
  for (let i = 0; i < n; i++) {
    v.pushBack(i);
  }
  return v;
}

describe("testing vector operations", () => {
  test("test pushBack", () => {
    let n = 10;
    const v = getVectorOfNumbers(n);

    let i = 0;
    for (let elem of v) {
      expect(elem).toBe(i);
      expect(v.getAt(i)).toBe(elem);
      i++;
    }
  });

  test("test popBack", () => {
    let n = 10;
    const v = new Vector<number>();

    for (let i = 0; i < n; i++) {
      v.pushBack(i);
    }

    while (!v.isEmpty()) {
      const elem = v.popBack();
      expect(elem).toBe(n - 1);
      n--;
    }
  });

  test("pop an empty vector", () => {
    const v = new Vector<number>();
    expect(() => v.popBack()).toThrowError("Vector is empty");
  });

  test("test empty", () => {
    const v = new Vector<number>();

    expect(v.isEmpty()).toBeTruthy;
    // Non empty vector
    for (let i = 1; i < 8; i++) {
      v.pushBack(i);
      expect(v.isEmpty()).toBeFalsy;
    }

    while (!v.isEmpty()) {
      v.popBack();
    }

    expect(v.isEmpty()).toBeTruthy;
  });

  test("test size", () => {
    let n = 10;
    const v = new Vector<number>();

    for (let i = 0; i < n; i++) {
      v.pushBack(i);
      expect(v.size()).toBe(i + 1);
    }

    while (!v.isEmpty()) {
      v.popBack();
      n--;
      expect(v.size()).toBe(n);
    }
  });

  test("test getAt valid", () => {
    let n = 10;
    const v = new Vector<number>();

    for (let i = 0; i < n; i++) {
      v.pushBack(i);
    }

    let i = 0;
    v.forEach((elem, index) => {
      expect(v.getAt(index)).toBe(elem);
      expect(elem).toBe(i);
      i++;
    });
  });

  test("test getAt invalid", () => {
    const v = new Vector<string>();
    v.pushBack("a");
    v.pushBack("b");
    v.pushBack("c");

    expect(() => v.getAt(5)).toThrowError("Invalid index");
  });

  test("test forEach", () => {
    let n = 10;
    const v = new Vector<number>();

    for (let i = 0; i < n; i++) {
      v.pushBack(i);
    }

    let i = 0;
    v.forEach((elem, index) => {
      expect(v.getAt(i)).toBe(elem);
      expect(index).toBe(i);
      i++;
    });
  });

  test("Reduce", () => {
    let n = 10;
    const v = new Vector<number>();

    for (let i = 1; i <= n; i++) {
      v.pushBack(i);
    }
    const total = v.reduce((p, c) => {
      return p + c;
    }, 0);

    const sum = (n * (n + 1)) / 2;
    expect(total).toBe(sum);
  });

  test("Map", () => {
    let n = 10;
    const predicate = (elm: number) => elm + 2;
    const v = getVectorOfNumbers(n);
    const u = v.map(predicate);

    let i = 0;
    for (let elem of u) {
      expect(elem).toBe(predicate(v.getAt(i)));
      i++;
    }

    expect(v.size()).toBe(u.size());
  });

  test("Filter", () => {
    const n = 10;
    const v = getVectorOfNumbers(n + 1);

    // Read more about this here: https://en.wikipedia.org/wiki/Primality_test
    const isPrime = (n: number) => {
      if (n <= 3) {
        return n > 1;
      } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
      }

      let i = 5;
      while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
          return false;
        }
        i += 6;
      }

      return true;
    };

    const u = v.filter(isPrime);

    const firstPrimeNumbers = [2, 3, 5, 7];

    let i = 0;
    for (let elem of u) {
      expect(elem).toBe(firstPrimeNumbers[i]);
      i++;
    }
  });
});
