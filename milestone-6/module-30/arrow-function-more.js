// return from array
const arrayReturn = (numbers) => numbers[2];
const number = [2, 9, 88, 33, 0];
console.log(arrayReturn(number));

// return from object
const objectReturn = (person) => person.occupation;
const person = {name:"Mahabur", age:29, occupation:"private service", designation:"Sr. Programmer"};
console.log(objectReturn(person));

const objectReturn1 = (persons) => {
    return persons.designation
};
const persons = {name:"Mahabur", age:29, occupation:"private service", designation:"Sr. Programmer"};
console.log(objectReturn1(persons));

// 
const sum = (firstNumber, secondNumber) =>{
    const addition = firstNumber + secondNumber;
    const multiplication = firstNumber * secondNumber
    const mix = addition + multiplication;
    return mix;
}
console.log(sum(3, 7));