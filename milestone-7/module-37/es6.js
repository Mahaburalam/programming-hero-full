// template string
const myObj = {
    fullName: "Ahnaf Anas",
    age: 1.6,
    location: "Khulna",
    goal: ["playing", "Eating", "adda"]
}
const myArray = [23, 1, 8, 99, 65, 7];

const aboutMe = `Hi, I'm ${myObj.fullName}. My home town is ${myObj.location}, and I'm ${myObj.age} years old. My current goal is ${myObj.goal}. My favorite number is ${myArray[3]}`;
console.log(aboutMe);

// arrow function
const testFunc = (num1, num2) => {
    const multiply = (num1 * num2);
    return multiply;
}
console.log(testFunc(12, 4));

// spread operator
const array = [23, 1, 8, 99, 65, 7];
const newArray = [...array, 34];
console.log(array);

newArray.push(11, 33, 88, 0);
console.log(newArray);
