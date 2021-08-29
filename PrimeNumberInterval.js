/** 
 * JavaScript Program to Print All Prime Numbers in an Interval
 * In this example, you will learn to write a JavaScript program to print all the prime 
 * numbers between two numbers entered by a user.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript if...else Statement
       JavaScript for loop
       JavaScript break Statement
 * 
 * A prime number is a positive integer that is only divisible by 1 and itself. For example, 
 *  2, 3, 5, 7, 11 are the first few prime numbers.
 * 
 * For example, 4 is not a prime number because it is divisible by 1, 2 and 4 itself. It is a composite number.
 * 
 * 
 * 
 */

/**
 * Example: Print Prime Numbers
 */

printAllPrimeNumbers = (min, max) => {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;

                continue;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
};

printAllPrimeNumbers(2, 10);
