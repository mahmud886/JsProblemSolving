/** 
 * JavaScript Program to Check Prime Number
 * In this example, you will learn to write a JavaScript program to check if a number is a prime number or not.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript for loop
       JavaScript if...else Statement
       JavaScript break Statement
 * 
 * 
 *     A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.
 * 
 */

/**
 * Example: Check Prime Number
 */

isPrimeNumber = (number) => {
    let isPrime = true;
    if (number === 1) {
        return `1 is neither a prime number nor composite number.`;
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                return `${number} Not a prime number.`;
            }
        }
        if (isPrime) {
            return `${number} is a prime number`;
        } else {
            `${number} is not prime number`;
        }
    } else {
        return `The ${number} is not a prime number`;
    }
};
console.log(isPrimeNumber(11)); // 11 is a prime number
