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
// object keys
const objKeys = Object.keys(employee);
console.log(objKeys);

// object values
const objValues = Object.values(employee);
console.log(objValues);