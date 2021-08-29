/** 
 *  Javascript Program to Generate a Random Number

    In this example, you will learn to generate a random number in JavaScript.

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

    ** JavaScript Math random()
    ** JavaScript Math floor()
 */
/** 
 *  In JavaScript, you can generate a random number with the Math.random() function.

    Math.random() returns a random floating-point number ranging from 0 to less than 1 
    (inclusive of 0 and exclusive of 1)
 */

/**
 * Example: Generate a random number;
 */

//Generate a random number
const a = Math.random();
console.log(a);

/** 
 * Example 2: Get a Random Number between 1 and 10
 * 
 * We can use this value in the range (0,1) to find the random value between any two numbers using formula:

    Math.random() * (highestNumber - lowestNumber) + lowestNumber
 */

//generating a random numbers

const b = Math.random() * (10 - 1) + 1;
console.log(`Random value between 1 and 10 is ${b}`);

/** 
 * All the above examples give floating-point random numbers.

    You can use Math.floor() to get a random integer value. Math.floor() returns the number 
    by decreasing the value to the nearest integer value. For example,
 */
console.log(Math.floor(5.344)); //5
console.log(Math.floor(5.898)); // 5

// The syntax to find the ransom integer value between two numbers
// Math.floor(Math.random() * (max - low) ) + low

/**
 * Example 3: Integer Value between 1 and 10
 */

// generating a random number
const i = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${i}`);

/** 
 * Similarly, if you want to find the random integer in between min (inclusive) to max (inclusive), you can use the following formula:

    Math.floor(Math.random() * (max - min + 1)) + min
 */

/**
 * Example 4: Integer Value between Two Numbers (Inclusive)
 */

const maximum = 40;
const minimum = 20;

const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(`Random value between ${minimum} and ${maximum} is ${result}`);
