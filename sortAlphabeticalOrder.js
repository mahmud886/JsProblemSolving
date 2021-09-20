/*** 
 * JavaScript Program to Sort Words in Alphabetical Order
 * 
 * In this example, you will learn to write a JavaScript program that sorts words in a string in alphabetical order.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript String
       JavaScript Array
       JavaScript Array sort()
 * 
 * 
 */

/**
 * Example: Sort Words in Alphabetical Order
 */

const string = 'i am learning javaScript';

const words = string.split(' ');

words.sort();

console.log('The sorted words are: ');

for (const element of words) {
    console.log(element);
}
