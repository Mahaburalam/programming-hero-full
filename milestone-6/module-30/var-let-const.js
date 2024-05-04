// var
/*
    to declare a variable using var can allow re-assign and re-declare.
*/

// case-1 re-assign value
var firstName = "Mahabur";
console.log(firstName);
firstName = "Nusrat";
console.log(firstName);

// case-2 re-declare and assign value
var secondName = "Tipu";
console.log(secondName);
var secondName = "Jahan";
console.log(secondName);
console.log(`-----------------------------------
-----------------------------------`)

// let
/*
    to declare a variable using let, can allow re-assign but not allow to de-declare.
*/

// case-1 re-assign
let myName = "Ahanaf";
console.log(myName);
myName = "Anas";
console.log(myName);

// case-2 re-declare and re-assign
let myFirstName = "Ahnaf";
console.log(myFirstName); 
// let myFirstName = "Anas"; //it is not allow in let
// console.log(myFirstName);

console.log(`-----------------------------------
-----------------------------------`)

// const
/*
    To declare a variable using const, it is not allow re-assign and re-declare
*/

// case-1
const countryName = "Bangladesh"
console.log(countryName);
// countryName = "Afghanistan" //it is not allowed in const
// console.log(countryName);