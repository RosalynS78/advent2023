// file system module
import fs from 'fs';

// block of text - trim white space - split on new lines - array on all - filter empty lines - put into an array

// \r = CR (Carriage Return) → Used as a new line character in Mac OS before X
// \n = LF (Line Feed) → Used as a new line character in Unix/Mac OS X
// \r\n = CR + LF → Used as a new line character in Windows





//look at all the lines
// pass in the file name (easily switch between examples)
function partOne(file) {
    // const lines = fs.readFileSync('./example.txt', 'utf-8').trim().split('\r\n');
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\r\n');


    //search from beginning and if we find a number we'll put it into a variable. call it value and start off as empty string
    const values = lines
    .map((line) => {
        // let value = '';
        //.split('') to make it into an array to make a string
        let first = line.split('').find((v) => !Number.isNaN(Number(v)));
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)));
        return Number(first + last);
    });

    // console.log(values);
    //to sum them all together 
    //The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements
    //sum + value
    return values.reduce((s, v) => s + v);
}

// console.log(partOne('./example.txt')); 
console.log(partOne('./input.txt')); 

//55477