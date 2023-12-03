import { writeFileSync } from 'fs';
import { isDigit, readFileSynchronously, sliceLastChar, sliceStartString, splitByNewLine, sumArrayOfNumbers } from '../util';

// Another approach
const filePath = './day3/3-1.txt';
const rawData = readFileSynchronously(filePath);

const lines = rawData.split("\r\n");

const getNumber = (matrix: string[], row: number, col: number): { [key: string]: object } => {
    let char = matrix[row][col];
    const digits = {};
    digits[row] = {}
    digits[row][col] = char;
    const org = col
    // going left
    while (true) {
        if(isDigit(matrix[row][col-1])) {
            digits[row][col-1] = matrix[row][col-1];
            col--;
        }
        else
            break
    }
    col = org
    // going right
    while (true) {
        if(isDigit(matrix[row][col+1])) {
            digits[row][col+1] = matrix[row][col+1];
            col++;
        }
        else
            break
    }
    return digits;
}

const isSameNumber = (a: number, b: number): boolean => {
    for (let k of Object.keys(a)) {
        console.log("inner",a[k], b[k])
        if (a[k] !== b[k])
            return false
        for(let kk of Object.keys(a[k])) {
            console.log("outer", a[k][kk], b[k][kk])
            if (a[k][kk] !== b[k][kk])
                return false
        }
    }
    // console.log(a,b)
    return true
}

const findAdjacent = (matrix: string[], x: number, y: number): any[] => {
    const result = []
    for (let dx = x-1; dx <= x+1; dx++) {
        if (dx >= 0 && dx < matrix.length) {
            for (let dy = y-1; dy <= y+1; dy++) {
                if (isDigit(matrix[dx][dy])) {
                    const current = getNumber(matrix, dx, dy)
                    result.push(current)
                }
            }
        }
    }
    return result;
}

const objToNumber = (obj): number => {
    const p = Object.values(obj)[0]
    return parseInt(Object.values(p).join(''))
}

function objectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}


const evaluateInput = (lines: string[]) => {
    const numbers = new Set()
    for (let i = 0; i < lines.length; i++) {
        const row = lines[i]
        for (let j = 0; j < row.length; j++) {
            const char = row[j];
            if (!isDigit(char) && char !== '.') {
                const found = findAdjacent(lines, i, j)
                found.forEach(element => {
                    numbers.add(element)
                });
            }  
        }
    }
    const arr = Array.from(numbers)
    for (let k = 0; k < arr.length; k++) {
        const curr = arr[k];
        for (let z = arr.length-1; z >= 0; z--) {
            if (z === k)
                continue
            const temp = arr[z];
            if (objectsEqual(curr, temp))
                arr.splice(z,1)
        }
    }
    arr.sort((a,e)=>parseInt(Object.keys(a)[0]) - parseInt(Object.keys(e)[0]))
    console.log(arr)
    const nums = arr.map(e=>objToNumber(e))

    console.log(sumArrayOfNumbers(nums))
}

evaluateInput(lines);
