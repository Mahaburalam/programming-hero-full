const person = {
    name:"Mahabur Alam",
    age: 29,
    gender:"Male",
    designation:"senior Programmer",
    lastName:"Tipu",
    occupation:"Service"
};

// show object keys
const objectKeys = Object.keys(person);
console.log(objectKeys);
// console.log(`object keys: ${objectKeys}`); 

// show object values
const objectValues = Object.values(person);
console.log(objectValues);

// show object entries
const objectEntries = Object.entries(person);
console.log(objectEntries);

// delete object properties
delete person.lastName;
// console.log(person);

const {occupation, ...rest} = person;
// console.log(person)
console.log(rest)