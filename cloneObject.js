/** 
 * JavaScript Program to Clone a JS Object
 *  In this example, you will learn to write a program that clones an object.

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript Objects
    JavaScript Object.assign()
 * 
 */

/**
 * Example 1. Clone the Object Using Object.assign()
 */

const person = {
    name: 'Snigdho',
    age: 25,
};

//cloning the object
const clonePerson = Object.assign({}, person);
console.log(clonePerson);

clonePerson.name = 'Raj';

console.log(clonePerson.name);
console.log(person.name);

/**
 * Example 2: Clone the Object Using Spread Syntax
 */

const user = {
    name: 'John',
    age: 25,
};

const cloneUser = { ...user };

console.log(cloneUser);

cloneUser.name = 'Doe';
console.log(cloneUser.name);
console.log(user.name);
