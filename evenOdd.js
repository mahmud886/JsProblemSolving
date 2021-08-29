/** 
 * Javascript Program to Check if a Number is Odd or Even
 * 
 * In this example, you will learn to write a JavaScript program to check if the number is odd or even.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *       JavaScript Comparison and Logical Operators
         JavaScript if...else Statement
         JavaScript Ternary Operator 
 * 

* Even numbers are those numbers that are exactly divisible by 2.
*
* 
 */

// The remainder operator % gives the remainder when used with a number. For example,
const n = 6;
const r = n % 2; // 0 so ---> even number
console.log(r);

//Hence, when % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.

/**
 * Example 1: Using if...else check even or odd.
 *
 */

evenOdd = (number) => {
    if (number % 2 == 0) {
        return `The number ${number} is even.`;
    } else {
        return `The number ${number} is odd`;
    }
};
console.log(evenOdd(9)); // The number 9 is odd

/**
 * Example 2: Using Ternary Operator
 */

evenOddTernary = (num) => {
    const result =
        num % 2 == 0 ? `The number ${num} is even` : `The number ${num} is odd`;
    return result;
};
console.log(evenOddTernary(10)); // The number 10 is even
