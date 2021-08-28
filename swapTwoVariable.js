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

/**
 * Example 3: Using Arithmetic Operators
 */

let i = 5;
let j = 9;

i = i + j; // 5 + 9 = 14
j = i - j; // 14 - 9 = 5
i = i - j; // 14 - 5 = 9

console.log(`The value after swap ${i}`); // 9
console.log(`The value after swap ${j}`); // 5

/**
 * Example 4: Using Bitwise XOR operator
 */

let p = 3;
let q = 9;

// XOR Operator
p = p ^ q;
q = p ^ q;
p = p ^ q;

console.log(`The value after swap ${p}`); // 9
console.log(`The value after swap ${q}`); // 3
