var numberArray = [2, 3, 5, 1, 9, 8, 7, 11];
// console.log(numberArray);

var nameArray = ['a', 'b', 'c', 'r', 'e', 'p'];
console.log(nameArray)


// add new array element in last position/index
numberArray.push(22, 90);
// console.log(numberArray);


// remove new array element in last position/index
nameArray.pop();
console.log(nameArray);

// store which element is remove
var removeElement = nameArray.pop();
console.log("Removed Element from array is:",removeElement)