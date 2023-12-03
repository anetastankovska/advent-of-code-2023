import { convertArrayToMatrix, readFileSynchronously, sliceLastChar, sliceStartString, splitByNewLine, sumArrayOfNumbers } from '../util';

const filePath = './day2/2-1.txt';
const rawData = readFileSynchronously(filePath);

const splittedRawData = splitByNewLine(rawData);

const rawStringArray = sliceLastChar(splittedRawData);
// console.log(rawStringArray);

const slicedArr = sliceStartString(rawStringArray, 8);
// console.log(slicedArr);

const matrix = convertArrayToMatrix(slicedArr);
// console.log(matrix)

const limits = ['12 red', '13 green', '14 blue'];

const evaluateEachElement = (matrix: string[][]): any => {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let conditionMet = false;

        // Iterate over each column in the current row
        for (let j = 0; j < matrix[i].length; j++) {
            // Access the current element
            const element = matrix[i][j];
            const [, numberPart, textPart] = element.match(/(\d+)\s*(\D+)/) || [];
            const parsedNumberPart = parseInt(numberPart);

            if (textPart === 'red' && parsedNumberPart > 12) {
                console.log('red');
                conditionMet = true;
                break; // Stop and go to the next i
            }

            if (textPart === 'green' && parsedNumberPart > 13) {
                console.log('green');
                conditionMet = true;
                break; // Stop and go to the next i
            }

            if (textPart === 'blue' && parsedNumberPart > 14) {
                console.log('blue');
                conditionMet = true;
                break; // Stop and go to the next i
            }
        }

        if (!conditionMet) {
            console.log(i + 1);
            sum += i + 1;
        }
    }
    console.log("Total sum:", sum);
}

evaluateEachElement(matrix);




