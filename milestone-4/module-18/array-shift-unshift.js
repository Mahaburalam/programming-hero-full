var ageArray = [12, 33, 5, 87, 45, 23, 58];
console.log(ageArray);
console.log("Array Length is:",ageArray.length);

// add new element in exist array in first position
ageArray.unshift(77);
console.log(ageArray);
console.log("After add new element array lenght is:",ageArray.length);


// create new array
var friendName = ["South", "Limon", "Rifat", "Mustakim", "Nuhash"];
console.log(friendName);
console.log(friendName.length);

// store which element remove
var deletedElement = friendName.shift();
console.log("Deleted Element is:", deletedElement);

// remove element from array in first position
friendName.shift();
console.log(friendName);
console.log(friendName.length);

