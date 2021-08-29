/** 
 * Javascript Program to Check if a number is Positive, Negative, or Zero
 * 
 * In this example, you will learn to check whether the number entered by the user is positive, negative or zero.
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *      JavaScript Comparison and Logical Operators
        JavaScript if...else Statement

        You will be using the if...else if...else statement to write the program.
 * 
 */

/**
 * Example 1: Check Number Type with if...else if...else
 */

// now i am using funtion to solve this problem;

checkNumberType = (number) => {
    // check if number is greater than zero
    if (number > 0) {
        return 'the number is positive';
    }
    // check if number is zero
    else if (number === 0) {
        return 'The number is zero';
    }
    // if number is less than zero
    else {
        return 'The number is negative';
    }
};
console.log(checkNumberType(-10));
