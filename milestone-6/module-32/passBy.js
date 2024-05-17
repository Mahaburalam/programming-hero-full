let number1 = 2;
let number2 = 5;
function multiply(num1, num2){
    num1 = 6
    return (num1 * num2);
}
const result = multiply(number1, number2);
// console.log(result);
// console.log(number1, number2);

// for non-primitive data type
let person1 = {fName:"Mahabur", age:34};
let person2 = {fName:"Nusrat", age:32};

function person(per1, per2){
    per1.age = 12;
    per2.age = 5;
    return per1, per2;
}
const output = person(person1, person2);
console.log(output);
console.log(person1, person2);

/*
    non-primitive data type e value function er vitor tke o update korlle bairer value o update hya jai.
*/

/*
    primitive data type e value function er vitor tke o update korlle bairer value o update hy na.
*/