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
// json to stringify
const jsonStringify = JSON.stringify(employee);
console.log(jsonStringify);
console.log(typeof (jsonStringify));

// stringify to json object
const jsonObject = JSON.parse(jsonStringify);
console.log(jsonObject);
console.log(typeof jsonObject);