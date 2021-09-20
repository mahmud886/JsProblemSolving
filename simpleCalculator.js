/** 
 * JavaScript Program to Make a Simple Calculator
 * 
 * In this example, you will learn to write a program to make a simple calculator in JavaScript.
 * 
 * To understand this example, you should have the knowledge of the following JavaScript programming topics:
 * 
 * 
 *     JavaScript if...else Statement
       JavaScript Switch Statement
 * 
 * 
 */

/**
 * Example 1: Simple Calculator with if..else if...else
 *
 */

const simpleCalculator = (num1, operator, num2) => {
    let result;

    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
};

simpleCalculator(5, '/', 10); // Output:  5 / 10 = 0.5

/**
 * Example 2: Simple Calculator with switch
 *
 *
 */

const simpleSwitchCalculator = (number1, operatorr, number2) => {
    let res;

    switch (operatorr) {
        case '+':
            res = number1 + number2;
            console.log(`${number1} + ${number2} = ${res}`);
            break;
        case '-':
            res = number1 - number2;
            console.log(`${number1} ${operatorr} = ${res}`);
            break;
        case '*':
            res = number1 * number2;
            console.log(`${number1} ${operatorr} ${number2} = ${res}`);
            break;
        case '/':
            res = number1 / number2;
            console.log(`${number1} ${operatorr} = ${res}`);
            break;
        default:
            console.log(`Invalid Operator`);
            break;
    }
};

simpleSwitchCalculator(10, '*', 5); // Output: 10 * 5 = 50
