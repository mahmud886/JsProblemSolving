/** 
 * JavaScript Program to Find the Factorial of a Number
 * 
 * In this example, you will learn to write a JavaScript program to calculate the factorial of a number.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript if...else Statement
       JavaScript for loop
 * 
 * The factorial of a number is the product of all the numbers from 1 to that number. For example,
 * factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
 * 
 * The factorial of a positive number n is given by:
 * 
 * factorial of n (n!) = 1 * 2 * 3 * 4.....n
 * 
 * The factorial of negative numbers do not exist and the factorial of 0 is 1.
 * 
 * 
 * 
 */

/**
 *
 * Example: Find Factorial
 */

const Factorial = (number) => {
    if (number < 0) {
        return `Error! Factorial for negative number does not exist.`;
    } else if (number === 0) {
        return `The factorial of ${number} is 1.`;
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return `The factorial of ${number} is ${factorial}`;
    }
};
console.log(Factorial(5));
