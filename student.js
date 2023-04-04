// /*
// ========== LESSON 1 - VARIABLES ==========
// Complete the following numbered tasks:
// */

// // 1. Declare 2 variables below:
// let x;
// let y;

// // Initialize 3 variables:

//     // 2. Assign one to the type Number below:
// const value = 1;

//     // 3. Assign one to the type Boolean below:
// let type = true;

//     // 4. Assign one to the type String below:
// let text = "String";

// // console.log(text);
// // console.log(value);

// /*

// ========== LESSON 2 - FUNCTIONS ==========

// */

// // 1. Create a doubleNumber function statement that takes in 1 number parameter and returns double the value.
// function doubleNumber(a){
//     console.log(a*2);
//     return a * 2;
// }

// doubleNumber(3);


// // 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square
// function squareNumber(a){
//     console.log(a**2);
//     return a ** 2;
// }

// squareNumber(3);

// // 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers

// const productNumber = (a, b) => a * b;
// console.log(productNumber(3, 5));

/*
========== LESSON 3 - NUMBERS ==========
*/
// 1. Create a sumOfThree function statement that takes in 3 number parameter and returns sum.
function sumOfThree(a,b,c){
    console.log(a+b+c);
    return a+b+c;
}
sumOfThree(1,3,4);

// 2. Create a productofThree function expression that takes in 3 number parameter and returns the quotient.
let product = function productofThree(a,b,c){
    console.log(a*b*c);
    return a*b*c;
}
product(2,3,4);

// 3. Create a getRemainder arrow function that takes in 2 number parameters and returns the remainder of the first number divided by the second number
const getRemainder = (a, b) => a % b;
console.log(getRemainder(2, 4))
getRemainder(5,3);

// 4. Create a getRootRounded function that takes in 1 number, and returns the absolute value's square root, rounded up. Note: negative numbers should have their absolute value taken to still work.
function getRootRounded(a){
    const value = Math.round(Math.sqrt(Math.abs(a)));
    console.log(value);
    return value;
}
getRootRounded(20);

// 5. Create a getRandom function that returns a random number from 1-100.

function getRandom(a){
    const random = Math.random() * (100 - 1) + 1;
    console.log(random);
    return random;
}
getRandom();