/** 
 * JavaScript Program to Loop Through an Object
 * 
 * In this example, you will learn to write a JavaScript program that will loop through an object.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 * 
 *      JavaScript Objects
        JavaScript for...in loop
 * 
 * 
 */

/**
 * Example 1: Loop Through Object Using for...in
 *
 *
 */

const student = {
    name: 'Snigdho',
    age: 25,
    hobbies: ['Reading', 'Games', 'Coding'],
};

for (let key in student) {
    let value = student[key];
    value = student[key];

    console.log(key + ' - ' + value);
}

/** Output: 
 * 
 name - Snigdho
 age - 25
 hobbies - Reading,Games,Coding
 * 
 */

/**
 * Example 2: Loop Through Object Using Object.entries and for...of
 *
 *
 */

let user = {
    name2: 'Priya',
    age2: 23,
    hobbies2: ['Reading', 'Coding', 'Gaming'],
};

for (let [key2, value2] of Object.entries(user)) {
    console.log(key2 + ' - ' + value2);
}
