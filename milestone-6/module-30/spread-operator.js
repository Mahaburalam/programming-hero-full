const number = [2, 4, 9, 8, 88, 33, 103, 9, 0];
const findMax = Math.max(2, 4, 9, 0, 11, 7);
console.log(findMax);
const findNumberMax = Math.max(number);
console.log(findNumberMax);
const findNumberMax1 = Math.max(...number);
console.log(findNumberMax1);

// another example
const value = [2, 3, 4, 5, 1, 9, 32];
console.log(value);
const valueOne = [11, 34,...value, 33, 89, 0];
console.log(valueOne)
console.log(value);