import { readFileSynchronously, splitByNewLine, removeLastChar, isDigit, getOnlyFirstAndLastDigit, sumArrayOfNumbers } from '../util';


const digits: { [key: string]: string }[] = [
  {'one': '1'},
  {'two': '2'},
  {'three': '3'},
  {'four': '4'},
  {'five': '5'},
  {'six': '6'},
  {'seven': '7'},
  {'eight': '8'},
  {'nine': '9'}
];
  

const filePath = './day1/1-2.txt';
const rawData = readFileSynchronously(filePath);
const splittedRawData = splitByNewLine(rawData);
const splittedString = removeLastChar(splittedRawData);


export const convertStringsToDigits = (stringArr: string[], digits: { [key: string]: string }[]): string[] => {
    const result: string[] = [];
  
    for (const line of stringArr) {
      let modifiedString = '';
  
      for (let i = 0; i < line.length; i++) {
        let foundMatch = false;
  
        for (const digit of digits) {
          const key = Object.keys(digit)[0];
          const value = digit[key];
  
          if (line.startsWith(key, i)) {
            modifiedString += value;
          }
        };
        if (!foundMatch) {
          modifiedString += line[i];
        }
      }
      result.push(modifiedString);
    }
    return result;
  };

  const resultArray = convertStringsToDigits(splittedString, digits);
  console.log(resultArray);

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

const fullDigitsArr = getDigitsArr(resultArray);
console.log(fullDigitsArr);

const finalDigitsArr = getOnlyFirstAndLastDigit(fullDigitsArr);
console.log(finalDigitsArr);

const finalResult = sumArrayOfNumbers(finalDigitsArr);
console.log(finalResult)



