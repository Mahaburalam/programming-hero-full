// object destructuring
const person = {
    name:"Mahabur Alam",
    age:29,
    origin: "Khulna",
    occupation: "Service",
    designation:"Senior Programmer",
    gender:"Male"
}
const {name, designation, age} = person;
console.log(`Show with out destructuring: ${person.origin}`); //call without destructuring
console.log(`Show with destructuring: ${name}`)
console.log(`Show with destructuring: ${age}`)
console.log(`Show with destructuring: ${designation}`)
console.log(`Show without destructuring: ${person.gender}`)

// array
const number = [2, 9, 11, 23, 9];
const [first, second, third, forth] = number;
console.log(first);
console.log(forth);

function myArrayDes(x, y){
    const number = [x * 2, y * 3]
    return number;
}
const [value1, value2] = myArrayDes(3, 5);
console.log(value1);
console.log(value2);