var myArray = [1, 3, 9, 3, 5, 4, 7, 8];
console.log(myArray.length);

// find array index
var indexNumber = myArray[6];
console.log(indexNumber);

// find array element of index
var elementNumber = myArray.indexOf(5)
console.log(elementNumber);

var notExistArrayElement = myArray.indexOf(1111);
console.log(notExistArrayElement); // return -1

// element update
// myArray[3, 5] = 10, 111;
myArray [3] = 101;
myArray [5] = 202;
console.log(myArray);