/** 
 * JavaScript Program to Replace Characters of a String
 * 
 * In this example, you will learn to write a JavaScript program that replaces a character of a string.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 *     JavaScript String
       JavaScript String replace()
 * 
 */

/**
 *
 * Example: Replace First Occurrence of a Character in a String
 */

// Program to replace a character of a string

const string = 'Mr Red has a red house and a red car';

const newText = string.replace('red', 'blue');

console.log(newText);

/** @
 * 
 * You could also pass a regular expression (regex) inside the replace() method to replace the string.
`*  Example 2: Replace Character of a String Using RegEx
 */

const string2 = 'Mr Red has a red house and a red car';

const regex = /red/g;

const newTextt = string2.replace(regex, 'blue');

console.log(newTextt);
