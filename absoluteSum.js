/**
 * Taking the absolute sum of Array of Numbers in JavaScript
 *
 * We are required to write a JavaScript function that takes in an array with both positive and
 * negative numbers and returns the absolute sum of all the elements of the array. We are
 * required to do this without taking help of any inbuilt library function.
 *
 * For example: If the array is −
 *
 * const arr = [1, -5, -34, -5, 2, 5, 6];
 * Output
 *
 * Then the output should be −
 * 58
 *
 */

const arr = [1, -5, -34, -5, 2, 5, 6];

const absoluteSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < 0) {
            sum += element * -1; // for negative numbers
            continue;
        }
        sum += element;
    }
    return sum;
};
console.log(absoluteSum(arr));
