/** 
 *  JavaScript Program to Display the Multiplication Table

    In this example, you will learn to generate the multiplication table of a number in JavaScript.

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript for loop
 * 
 * 
 */

/**
 * Example 1: Multiplication Table Up to 10
 *
 */

const multiplicationTable = (number) => {
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
};
multiplicationTable(17);

/** 
 * Output: 
17 * 1 = 17
17 * 2 = 34
17 * 3 = 51
17 * 4 = 68
17 * 5 = 85
17 * 6 = 102
17 * 7 = 119
17 * 8 = 136
17 * 9 = 153
17 * 10 = 170
 */
