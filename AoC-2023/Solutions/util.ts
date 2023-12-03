import { readFileSync } from 'fs';

export const log = (data: any): void => {
  console.log(data);
}

export function readFileSynchronously(filePath: string): string {
  try {
    const contentBuffer = readFileSync(filePath);
    const content = contentBuffer.toString('utf-8');
    return content;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

export function splitByWhiteSpace(input: string): string[] {
  const result = input.split(' ');
  return result;
}

export function splitByNewLine(input: string): string[] {
  const result = input.split('\n');
  return result;
}

export function splitByComma(input: string): string[] {
  const result = input.split(',');
  return result;
}

export const sumArrayOfNumbers = (inputArr: number[]): number => {
  let result = 0;
  inputArr.forEach(num =>  result += num)
  return result;
}

export const removeLastChar = (inputArr: string[]): string[] => {
  const result = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (i === inputArr.length - 1) {
      // Skip removing the last character for the last element
      result.push(inputArr[i]);
    } else {
      const slicedStr = inputArr[i].slice(0, -1);
      result.push(slicedStr);
    }
  }
  return result;
};


export const kmpSearch = (pattern: string, text: string): number => {
  if (pattern.length === 0) {
    return 0; // Immediate match
  }

  // Compute longest suffix-prefix table
  const lsp = [0]; // Base case
  for (let i = 1; i < pattern.length; i++) {
    let j = lsp[i - 1]; // Start by assuming we're extending the previous LSP
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = lsp[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j++;
    }
    lsp.push(j);
  }

  // Walk through text string
  let j = 0; // Number of chars matched in pattern
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = lsp[j - 1]; // Fall back in the pattern
    }
    if (text[i] === pattern[j]) {
      j++; // Next char matched, increment position
      if (j === pattern.length) {
        // Check if the next character is not a digit
        if (i === text.length - 1 || isNaN(parseInt(text[i + 1]))) {
          return i - (j - 1);
        } else {
          // If the next character is a digit, reset the search
          j = 0;
        }
      }
    }
  }
  return -1; // Not found
};


export const isDigit = (character: string): boolean => {
  // Use parseInt to convert the character to a number
  // and isNaN to check if it's NaN (not a number)
  return !isNaN(parseInt(character));
}

export const isChar = (character: string): boolean => {
  // Check if the character is not a digit or a period
  return !/[\d.]/.test(character);
}

export const getOnlyFirstAndLastDigit = (digitsArray: string[]): number[] => {
  const result = [];
  digitsArray.forEach((str) => {
    const firstIndexElem = parseInt(str.charAt(0));
    const lastIndexElem = parseInt(str.charAt(str.length - 1));
    result.push(firstIndexElem * 10 + lastIndexElem);
  });
  return result;
};

export const sliceLastChar = (dataArray: string[]): string[] => {
  const result = [];
  for (let i = 0; i < dataArray.length; i++) {
    const currentString = dataArray[i];
    const slicedString = currentString.length === 1 ? currentString + currentString : currentString.slice(0, -1);
    result.push(slicedString);
  }
  return result;
};

export const sliceStartString = (dataArray: string[], start: number): string[] => {
  const result = [];
  for (let i = 0; i < dataArray.length; i++) {
    const currentString = dataArray[i];
    const slicedString = currentString.length === 1 ? currentString + currentString : currentString.slice(start);
    result.push(slicedString);
  }
  return result;
};

export const convertArrayToMatrix = (input: string[]): string[][] => {
  const result = [];

  for (const line of input) {
    const lineArray = line.split(';').map((group) =>
      group.trim().split(',').map((item) => item.trim())
    );

    // Flatten the arrays within each lineArray into a single array
    const flattenedLineArray = lineArray.reduce((acc, val) => acc.concat(val), []);

    result.push(flattenedLineArray);
  }
  return result;
}


