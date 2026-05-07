// Problem_1:

const filterEvenNumbers = (input: number[]): number[] =>
  input.filter((n) => n % 2 === 0);

// Problem_2:

const reverseString = (inStr: string): string =>
  inStr.split("").reverse().join("");
