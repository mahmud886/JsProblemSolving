/**
 * Javascript program to swap two variables.
 *
 * In this example, your will learn to write a program to swap two
 * variables in javascript using various methods.
 *
 * To Understand this example, your should have the knowledage of the following Topics:
 * ** Javascript Variables and Constant
 * ** Javascript Operators
 *
 *
 * *** Example: Using a temporary variable to swap two variables:
 *
 */

// Javascript program to swap two variables:
let a = 5;
let b = 9;

console.log(`The value before swap ${a}`);
console.log(`The value before swap ${b}`);

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value after swap ${a}`);
console.log(`The value after swap ${b}`);

/**
 * Example 2: Using es6(ES2015) Destructuring assignment
 *
 */

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(`The value after swap ${x}`);
console.log(`The value after swap ${y}`);
