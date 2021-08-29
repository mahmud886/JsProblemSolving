/** 
 * Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

function digit_root(n) {
    let sum = 0;
    let digits = n.toString().split('').map(Number);

    for (let i = 0; i < digits.length; i++) {
        return (sum += digits[i]);
    }

    let sumString = sum.toString();

    if (sumString.length > 1) {
        let sumDigits = sumString.split('').map(Number);
        let firstDigit = sumDigits.slice(0);
        let lastDigit = sumDigits.slice(-1);
        return firstDigit[0] + lastDigit[0];
    } else {
        return sum;
    }
}
console.log(digit_root(6));

/** OR */

return n.toString().length == 1
    ? n
    : digital_root(
          Number(n)
              .toString()
              .split('')
              .reduce((acc, item) => Number(acc) + Number(item), 0)
      );

/** OR */
