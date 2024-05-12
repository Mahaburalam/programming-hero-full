// primitive data type
const number = 23;
const name = "Ahnaf";
const isMuslim = true;

// primitive data type update/ assign
const x = 23;
const y = x;
console.log(x, y);



// non-primitive data type
const myFunc = function(){
    console.log("test");
}
const myArray = [2, 1, 9, 5];
const myObject = {name:"Nusrat", age:28};

const anotherObject = myObject;
console.log(myObject, anotherObject);

myObject.name = "Nusrat Jahan";
console.log(myObject, anotherObject);

// non-primitive
const xx = [23, 2, 9];
const yy = xx;
// x.push = 233;
xx[3] = 29;
console.log(xx, yy);