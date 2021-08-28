/** 
 * 
        * JavaScript Program to Convert Kilometers to Miles

        * In this example, you will learn how to convert kilometer values to miles in JavaScript.

        * To understand this example, you should have the knowledge of the following JavaScript programming topics:

        ** JavaScript Variables and Constants
        ** JavaScript Operators

        -----> We know that 1 kilometer is equal to 0.621371 miles.

        -----> So to convert kilometers to miles, you can use the formula:

        ------> miles = kilometers * 
 */

/**
 * Example: Kilometers to Miles
 */

// Solving Code

// taking kilometer input

const kilometers = 99.99;

// conversion factor
const factor = 0.621371; // 1 kilo = 0.621371 miles

// calculate miles
const miles = (kilometers * factor).toFixed(3); // your defined to fixed(3)

console.log(`${kilometers} kilometers is equal to ${miles} miles`);

/**
 * Inputed : 2.5
 * Output: 2.5 kilometers is equal to 1.553 miles
 */
/**
 * Inputed : 10
 * Output: 10 kilometers is equal to 6.214 miles
 */
/**
 * Inputed : 99.99
 * Output: 99.99 kilometers is equal to 62.131 miles
 */
