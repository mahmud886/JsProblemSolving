/**
 * Javascript Program to Solve Quadratic Equation
 * In this example, you will learn to write a program that solves a quadratic equation in JavaScript.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript if...else Statement
    JavaScript Math sqrt()

    This program computes roots of a quadratic equation when its coefficients are known.

    The standard form of a quadratic equation is:

    ax2 + bx + c = 0, where
    a, b and c are real numbers and
    a ≠ 0

    To find the roots of such equation, we use the formula,

    (root1,root2) = (-b ± √b2-4ac)/2

    The term b2-4ac is known as the discriminant of a quadratic equation. It tells the nature of the roots.

    If the discriminant is greater than 0, the roots are real and different.
    If the discriminant is equal to 0, the roots are real and equal.
    If the discriminant is less than 0, the roots are complex and different.


 */

/**
 * Example: Roots of a Quadratic Equation
 */

let root1, root2;

// Inputed properties
let a = 3;
let b = 4;
let c = 5;

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The root of quadratic equation are ${root1} and ${root2}`);
}
// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The root of quadratic equation are ${root1} and ${root2}`);
}
// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
        `The root of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}`
    );
}

/**
 * if input is : 1, 6, 5
 * output: The root of quadratic equation are -1 and -5
 */

/**
 * if input is : 3, 10, 6
 * output: The root of quadratic equation are -0.7847495629784698 and -2.5485837703548637
 */

/**
 * if input is : 1, -6, 9
 * output: The root of quadratic equation are 3 and 3
 */

/**
 * if input is : 3, 4, 5
 * output: The root of quadratic equation are -0.67 + 1.11i and -0.67 - 1.11
 */
