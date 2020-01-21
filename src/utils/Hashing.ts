/**
 * For more information, consult Algorithms 4th edition pg 459
 */

const largePrimeNumber = 4391;

interface HashStringOptions {
  M: number;
  R: number;
}

export function hashString(
  value: string,
  options: HashStringOptions = { M: largePrimeNumber, R: 31 }
): number {
  let hash = 0;
  const { R, M } = options;

  for (let i = 0; i < value.length; i++) {
    hash = (R * hash + value.charCodeAt(i)) % M;
  }

  return hash;
}

export function hashInteger(value: number, M: number = 0): number {
  if (Number.isInteger(value)) {
    return M > 0 ? value % M : value;
  } else throw new Error("Not an Integer");
}

export function hashFloat(value: number): number {
  // TODO: finish this whenever you can
  throw new Error("Not implemented yet!");
  return 0;
}

export default function hash<T>(value: T): number {
  if (typeof value === "string") {
    return hashString(value);
  } else if (typeof value === "number") {
    return Number.isInteger(value) ? hashInteger(value) : hashFloat(value);
  } else {
    throw new Error("I don't know how to hash that value");
    return 0;
  }
}
