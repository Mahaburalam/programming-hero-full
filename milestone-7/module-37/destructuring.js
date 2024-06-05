// array destructuring
const myArray = [12, 4, 8, 43];
// const x = myArray[0];
// const y = myArray[0];
// const z = myArray[0];
// const xx = myArray[0];

// const [a, b, c, d] = [12, 4, 8, 43];
const [a, b, c, d] = myArray;
// console.log(a, b, c, d);

const employee = {
    name:"Rahim",
    designation:"Developer",
    language:["python", "java", "JavaScript", "Golang"],
    specification: {
        height: 65,
        weight: "75 Kg",
        address: "Dhaka",
        watch:{
            color:"Silver",
            price:"5k",
            Brand:"Xiaomi"
        }
    }
};
const {name, designation} = employee;
// console.log(name, employee);

const [python, golang ] = employee.language
// console.log(python, golang);

const {specification} = employee;
console.log(specification);

const {watch} = employee.specification;
console.log(watch);