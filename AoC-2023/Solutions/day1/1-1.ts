import { readFileSynchronously, sliceLastChar, splitByNewLine, sumArrayOfNumbers } from '../util';

const filePath = './day1/1-1.txt';
const rawData = readFileSynchronously(filePath);

const splittedRawData = splitByNewLine(rawData);

const rawStringArray = sliceLastChar(splittedRawData);

console.log(111111, rawStringArray);

const isDigit = (character: string): boolean => {
    // Use parseInt to convert the character to a number
    // and isNaN to check if it's NaN (not a number)
    return !isNaN(parseInt(character));
}

const isDigitRegex = (character: string): boolean => {
    // Use a regular expression to check if the character is a digit
    return /^\d$/.test(character);
}


const getDigitsArr = (cleanedArray: string[]): string[] => {
  return cleanedArray.map((str) => {
      const digitsString = str
      .split('')
      .filter((char) => isDigit(char))
      .join('');

      if (digitsString.length === 1) {
      return digitsString + digitsString;
      }

      return digitsString;
  });
};


const fullDigitsArr = getDigitsArr(rawStringArray);

const getOnlyFirstAndLastDigit = (digitsArray: string[]): number[] => {
    const result = [];
    digitsArray.forEach((str) => {
      const firstIndexElem = parseInt(str.charAt(0));
      const lastIndexElem = parseInt(str.charAt(str.length - 1));
      result.push(firstIndexElem * 10 + lastIndexElem);
    });
    return result;
  };

const finalDigitsArr = getOnlyFirstAndLastDigit(fullDigitsArr);

console.log(finalDigitsArr);

const finalResult = sumArrayOfNumbers(finalDigitsArr);

console.log('Final Result', finalResult);



