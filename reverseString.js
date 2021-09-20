/** 
 * JavaScript Program to Reverse a String
 * 
 * In this tutorial, you will learn to write a JavaScript program that reverses a string.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript String
       JavaScript Function and Function Expressions
 * 
 * 
 */

/**
 *
 * Example 1: Reverse a String Using for Loop
 */

let string = 'hello world';

const reverseString = (str) => {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};

const result = reverseString(string);

console.log(result);

/**
 *
 * Example 2: Reverse a String Using built-in Methods
 */

let strr = 'Love Javascript';

const reverseStringMethods = (strr) => {
    const arrStrings = strr.split('');
    const reverseArr = arrStrings.reverse();

    const joinArr = reverseArr.join('');

    return joinArr;
};

const results = reverseStringMethods(strr);
console.log(results);
