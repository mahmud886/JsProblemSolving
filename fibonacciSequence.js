/*
JavaScript Program to Print the Fibonacci Sequence

In this example, you will learn to program a Fibonacci sequence in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript for loop
    JavaScript while and do...while Loop

A fibonacci sequence is written as:

0, 1, 1, 2, 3, 5, 8, 13, 21, ...

The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, 
the next term is defined as the sum of the previous two terms.
*/

/**
 * Example 1: Fibonacci Series Up to n Terms
 */

const fibonacciSequence = (number) => {
    let n1 = 0,
        n2 = 1,
        nextTerm;

    console.log(`Fibonacci Series: `);

    for (let i = 1; i <= number; i++) {
        console.log(n1); // 0 1 1 2 3...
        nextTerm = n1 + n2; // 0 + 1 = 1, 1 + 1 = 2,...  swap the first term with the next term
        n1 = n2; // 1, 2, ..
        n2 = nextTerm; // 1,...
    }
};

fibonacciSequence(5);
