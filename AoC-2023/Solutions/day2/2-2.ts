import { convertArrayToMatrix, readFileSynchronously, sliceLastChar, sliceStartString, splitByNewLine, sumArrayOfNumbers } from '../util';

const filePath = './day2/2-2.txt';
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
        let red = 1;
        let green = 1;
        let blue = 1;

        // Iterate over each column in the current row
        for (let j = 0; j < matrix[i].length; j++) {
            // Access the current element
            const element = matrix[i][j];
            const [, numberPart, textPart] = element.match(/(\d+)\s*(\D+)/) || [];
            const parsedNumberPart = parseInt(numberPart);

            if (textPart === 'red') {
                console.log('red');
                if(parsedNumberPart > red) {
                    red = parsedNumberPart;
                }
            }

            if (textPart === 'green') {
                console.log('green');
                if(parsedNumberPart > green) {
                    green = parsedNumberPart;
                }
            }

            if (textPart === 'blue') {
                console.log('blue');
                if(parsedNumberPart > blue) {
                    blue = parsedNumberPart;
                }
            }
        }

        console.log(i + 1);
        let powerOfEachGame = red*green*blue;
        sum += powerOfEachGame;
    }
    console.log("Total sum:", sum);
}

evaluateEachElement(matrix);