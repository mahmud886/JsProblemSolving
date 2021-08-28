/* -------- Example: Area when base and height is known ------- //

* first of all we find the formula of area base triangle
* formula is : area = (base * height) / 2;

*/

const baseValue = 10;
const heightValue = 3;

const result = (baseValue + heightValue) % 2;

console.log(
    `The base value is ${baseValue} and height is ${heightValue} then area is ${result}`
);

/**
 * Output : The base value is 10 and height is 3 then area is 1
 */

/** ----------------
 * Example 2: Area When All Sides are Known
 *
 * if you know all the sides of a trianle, you can find the area using herons
 * formula. if a , b and c are the three sides of a triangle
 * formula is
 * s = (a+b+c) / 2;
 * area = sqrt(s(s-a)*(s-b)*(s-c))
 */

// COde

const side1 = 3;
const side2 = 4;
const side3 = 5;

// calculate the semi-parameter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(`the area of the triangle is: ${areaValue}`);
