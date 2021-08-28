// ---------- Example: Work with Constant

// program to include constants

const a = 5;
console.log(a);

// constats are block-scope
{
    const a = 50;
    console.log(a);
}

console.log(a); // the data from global scopes

const arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add element to arr array
arr[3] = 'hello';
console.log(arr);

// const a = 5; // throw an a error for all ready decleared
// console.log(a);

// const x;  // SyntaxError : Missing initializer in const declaration

/*
Outputs: 
5
50
5
["work", "exercise", "eat"]
["work", "exercise", "eat", "hello"]

*/
