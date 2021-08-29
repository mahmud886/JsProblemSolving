/** 
 * JavaScript Program to Find the Largest Among Three Numbers
 * In this example, you will learn to find the largest among three numbers in JavaScript.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript Comparison and Logical Operators
       JavaScript if...else Statement
 * 
 * 
 *    You can find the largest among three numbers using the if...else statement.
 */

/**
 * Example 1: Largest Number Among Three Numbers
 *
 */

largestNumber = (num1, num2, num3) => {
    let largest;
    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    return `The largest number of numbers is ${largest}`;
};
console.log(largestNumber(-100, -200, -300));

// OR

/**
 *
 * Example2: Using Math.max()
 */

const n1 = -10;
const n2 = -5;
const n3 = -9;

const result = Math.max(n1, n2, n3);
console.log(`largest Number is ${result}`);
