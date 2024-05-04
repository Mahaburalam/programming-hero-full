// function declaration - regular function
function myFunc(x, y){
    const sum = (x + y);
    return sum;
}
// myFunc(2, 9);
console.log(`Regular function: ${myFunc(2, 9)}`);

// named function - function expression
const myFuncNew = function(a, b, c){
    return (a * b * c);
}
// const mul = (2, 7, 5);
// console.log(mul);
console.log('Result of named/ function expression is: ',myFuncNew(3, 5, 4));


// arrow function
const multiply = (x, y) => (x * y);
console.log(`result of arrow function: ${multiply(8, 3)}`);