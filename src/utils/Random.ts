export function getRndInRange(
  min: number,
  max: number,
  useIntegers = true
): number {
  const randomNumber = Math.random() * (max - min) + min;
  return useIntegers ? Math.floor(randomNumber) : randomNumber;
}

export interface RndNumbOptions {
  min: number;
  max: number;
  useIntegers: boolean;
}

export function getRndNumbers(
  n: number,
  options: RndNumbOptions = { min: 0, max: 1, useIntegers: false }
) {
  const numbers = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    numbers[i] = getRndInRange(options.min, options.max, options.useIntegers);
  }
  return numbers;
}
