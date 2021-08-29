/**
 * Sum of consecutive numbers in JavaScript
 *
 * Let’s say, we have to write a function that takes in an array and returns another array in which
 * the consecutive similar numbers are added up together.
 *
 * For example −
 * const array = [1, 5, 5, 5, 8, 8, 9, 1, 4, 4, 2];
 * The output should be −
 * [1, 15, 16, 9, 1, 8, 2]
 *
 * All consecutive 5s added up to 15, then 2 consecutive 8s added up to 16 similarly 4s added up to 8.
 *
 * Therefore, let’s write the code for this function. We will use the Array.prototype.reduce()
 *
 * method here to reduce the original array and simultaneously construct a new one.
 *
 *
 */

const array = [1, 5, 5, 5, 8, 8, 9, 1, 4, 4, 2];

const sumConsecutive = (array) => {
    return array.reduce(
        (acc, val) => {
            if (acc.last === val) {
                acc.arr[acc.arr.length - 1] += val;
            } else {
                acc.arr.push(val);
                acc.last = val;
            }
            return acc;
        },
        { arr: [], last: undefined }
    ).arr;
};
console.log(sumConsecutive(array));

/**
 * Output:
 * [ 1, 15, 16, 9, 1, 8,  2 ]
 */
