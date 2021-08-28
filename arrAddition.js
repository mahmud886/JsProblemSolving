/**
 * Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return 
 * the string true if any combination of numbers in the array (excluding the largest number) 
 * can be added up to equal the largest number in the array, otherwise return the string false. 
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true 
 * because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, 
 * and may contain negative numbers.
Examples
Input: [5,7,16,1,2]
Output: false
Input: [3,5,-1,8,12]
Output: true
 */

function ArrayAdditionI(array) {
    function newFunc(mainArr, max, result) {
        if (max === 0) {
            return true;
        }

        for (let i = 0; i < mainArr.length; i++) {
            let newArr = mainArr.slice();
            let spliceArr = newArr.splice(i, 1)[0];
            if (
                spliceArr <= max &&
                newFunc(newArr, max - spliceArr, result.concat(spliceArr))
            ) {
                return true;
            }
        }
        return false;
    }

    let largest,
        newResult = [];
    array.sort(function (a, b) {
        return b - a;
    });
    largest = array.shift();
    return newFunc(array, largest, newResult);
}

console.log(ArrayAdditionI([12, -1, 8, -1, 8, 3, -1, -1]));
