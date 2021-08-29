/** 
 * We are required to write a JavaScript function that takes in an array of numbers.

The function should return the sum of all the prime numbers present in the array.

Let’s say the following is our array −
 * 
 * const arr = [43, 6, 6, 5, 54, 81, 71, 56, 8, 877, 4, 4];
 * 
 * The function should sum the prime numbers i.e.
 * 
 * 43 + 5 + 71 + 877 = 996
 * 
*/

const arr = [43, 6, 6, 5, 54, 81, 71, 56, 8, 877, 4, 4];

const isPrime = (number) => {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (let j = 2; j < number; j++) {
            if (number % j === 0) {
                return false;
            }
        }
        return true;
    }
};

const sumOfPrimeNumbers = (arr) => {
    let sum = 0;
    const allPrimeNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            continue;
        }
        allPrimeNumber.push(arr[i]);
        sum += arr[i];
    }
    return `Prime numbers [${allPrimeNumber}] and total sum = ${sum}`;
};
console.log(sumOfPrimeNumbers(arr));
