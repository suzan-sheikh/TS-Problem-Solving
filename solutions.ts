// Problem_1:

const filterEvenNumbers = (inNum: number[]): number[] =>
  inNum.filter((n) => n % 2 === 0);

// Problem_2:

const reverseString = (inStr: string): string =>
  inStr.split("").reverse().join("");

// Problem_3:

type StringOrNumber = string | number;
const checkType = (iStrNum: StringOrNumber): string =>
  typeof iStrNum === "string" ? "String" : "Number";

// Problem_4:

const getProperty = <T>(inputObj: T, inputKey: keyof T) => inputObj[inputKey];

// Problem_5:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (inputBook: Book): Book & {isRead: boolean} => {
  return {...inputBook, isRead: true}
} 
