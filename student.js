/*
========== LESSON 1 - VARIABLES ==========
Complete the following numbered tasks:
*/

// 1. Declare 2 variables below:
let x;
let y;

// Initialize 3 variables:

    // 2. Assign one to the type Number below:
const value = 1;

    // 3. Assign one to the type Boolean below:
let type = true;

    // 4. Assign one to the type String below:
let text = "String";

// console.log(text);
// console.log(value);

/*

========== LESSON 2 - FUNCTIONS ==========

*/

// 1. Create a doubleNumber function statement that takes in 1 number parameter and returns double the value.
function doubleNumber(a){
    console.log(a*2);
    return a * 2;
}

doubleNumber(3);


// 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square
function squareNumber(a){
    console.log(a**2);
    return a ** 2;
}

squareNumber(3);

// 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers

const productNumber = (a, b) => a * b;
console.log(productNumber(3, 5));