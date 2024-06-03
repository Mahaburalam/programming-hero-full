// 1. how to declare a variable using 'let' & 'const'
const permanentAddress = "Chuknagor, Dumuria, Khulna";
let age = 25;
age = 27;

// condition: >, <, >=, <=, ===, !==, &&, ||
const fatherName = "Mahabur";
const motherName = "Nusrat";
let ourAge;

//2. console.log(ourAge);

if(fatherName === "Mahabur" && ourAge === 27) {
    console.log("Yes, he is a father of Ahnaf");
} else if(motherName === "Nusrat" || ourAge === 27) {
    console.log("Yes, she is a mother of Ahnaf");
} else {
    console.log("Neither Father not Mother")
}

// array declare, index, push, pop, length
const myArray = [23, 1, 8, 99, 65, 7];
// console.log(myArray.length);
// console.log(myArray[0]);
for(let x of myArray) {
    // console.log(x);
}
myArray.push(11, 32, 90);
myArray.pop()
// console.log(myArray);

// for loop
for(let x = 0; x < 10; x++) {
    // console.log(x);
}

// function
function myFunc(num1, num2) {
    return (num1 * num2);
}
// console.log(myFunc(2.4, 7))

// object, access object property
const myObj = {
    fullName: "Ahnaf Anas",
    age: 1.6,
    location: "Khulna",
    goal: ["playing", "Eating", "adda"]
}

const name = myObj.fullName;

console.log(myObj.age); // dot notation
console.log(myObj['goal']); // bracket notation
console.log(name); // access from variable