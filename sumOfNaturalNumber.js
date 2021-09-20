/** 
 * 
 * JavaScript Program to Find the Sum of Natural Numbers
 * 
 * In this example, you will learn to write a program that finds the sum of natural numbers in JavaScript.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript for loop
       JavaScript while and do...while Loop

 * 
       The positive integers 1, 2, 3, ... are known as natural numbers.
 * */

/**
 *
 * Example 1: Sum of Natural Numbers Using for Loop
 */

const sumOfNaturalNumbers = (number) => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    console.log(`Sum of the natural numbers: ${sum}`);
};

sumOfNaturalNumbers(100); // Sum of the natural numbers: 5050
