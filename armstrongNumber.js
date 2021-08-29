/*
JavaScript Program to Check Armstrong Number

In this example, you will learn to write a program in JavaScript to check whether
a number is an Armstrong number or not.

To understand this example, you should have the knowledge of the 
following JavaScript programming topics:

    JavaScript Operators
    JavaScript while and do...while Loop

    ----> A positive integer is called an Armstrong number (of order n) if

          abcd... = an + bn + cn + dn + ...

    ----> In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. 
          For example, 153 is an Armstrong number because

          153 = 1*1*1 + 5*5*5 + 3*3*3

    ----> Similarly, 1634 is an Armstrong number because:

          1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4

*/

/**
 * Example 1: Check Armstrong Number of Three Digits
 */

const ArmstrongNumber = (number) => {
    let sum = 0;
    let temp = number;

    while (temp > 0) {
        let remainder = temp % 10;

        sum += remainder * remainder * remainder * remainder;
        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        console.log(`${number} is an Armstrong Number`);
    } else {
        console.log(`${number} is not an Armstrong Number`);
    }
};

ArmstrongNumber(9474); // Four digits number is valid // if you can use three digit please remove a remainder;
