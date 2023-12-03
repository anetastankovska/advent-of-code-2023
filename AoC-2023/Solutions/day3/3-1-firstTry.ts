import { writeFileSync } from 'fs';
import { convertArrayToMatrix, isDigit, readFileSynchronously, sliceLastChar, sliceStartString, splitByNewLine, sumArrayOfNumbers } from '../util';

const filePath = './day3/3-1.txt';
const rawData = readFileSynchronously(filePath);
// console.log(rawData);
// Split the data into rows based on newlines (handle both '\r\n' and '\n')
const rows: string[] = rawData.split(/\r?\n/);

// Remove empty rows
const nonEmptyRows: string[] = rows.filter(row => row.trim() !== '');

// Trim the '\r' character at the end of each row
const trimmedRows: string[] = nonEmptyRows.map(row => row.replace(/\r$/, ''));

// Split each row into individual characters
// Now 'matrix' is a 2D array without '\r' characters at the end of each row
const matrix: string[][] = trimmedRows.map(row => row.split(''));

// console.log(matrix);



const numberOfCharacters = 140;


const checkAdjascent = (matrix: string[][], row: number, col: number): boolean => {

    const chars = [];

    try {
        chars.push(matrix[row-1][col-1]);
    } catch (error) {
        
    }
    try {
        chars.push(matrix[row-1][col]);
    } catch (error) {
        
    }try {
        chars.push(matrix[row-1][col+1]);
        
    } catch (error) {
        
    }try {
        chars.push(matrix[row][col-1]);
    } catch (error) {
        
    }try {
        chars.push(matrix[row][col+1]);
    } catch (error) {
        
    }
    try {
        chars.push(matrix[row+1][col-1]);
    } catch (error) {
        
    }try {
        chars.push(matrix[row+1][col]);
    } catch (error) {
        
    }try {
        chars.push(matrix[row+1][col+1]);
    } catch (error) {
        
    }

    const result = chars.filter(char => char !== '.' || isDigit(char));

    if (result.length === 0) {
        return false;
    }

    if (result.every(e => isDigit(e))) {
        return false;
    }
    return true;
}

const evaluateInput = (matrix: string[][]): number => {
    const validNumbers = [];
    // Iterate over each row in the array
    for (let i = 0; i < matrix.length; i++) {

        let digitArr = [];
        // Iterate over each column in the current row
        for (let j = 0; j < matrix[i].length; j++) {
            // let hasAdjascentChar = false;
            if (isDigit(matrix[i][j])) {
                digitArr.push(matrix[i][j]);
                if (checkAdjascent(matrix, i, j)) {
                    while (j < matrix[i].length && isDigit(matrix[i][j+1])) {
                        digitArr.push(matrix[i][j+1]);
                        j++;
                    }
                    validNumbers.push(parseInt(digitArr.join(''))); 
                    digitArr.length = 0;
                }
            } else {
                digitArr.length = 0;
            }
        }
    }
    writeFileSync('valid1.txt', validNumbers.join('\n'));
    const finalResult = sumArrayOfNumbers(validNumbers)
    console.log(finalResult);
    return finalResult;
}

evaluateInput(matrix);



