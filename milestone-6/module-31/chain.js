// object
const person = {
    name: "Test",
    age:29,
    gender:"Male"
}
console.log(person.name);

// array of object
const data = [{countryName:"Bangladesh", division:8, district:68, region:"Asia"}];
console.log(data[0].region);

// object of array of object
const data2 ={
    count: 500,
    id:12,
    data:[
        {
            target:"Be muslim",
            prayer:"yes"
        },
        {
            target:"Money",
            honest:"yes"
        }
    ]
};
console.log(data2.data[0].target);

// object of object of object
const user = {
    id:32,
    name:"Nayok",
    address:{
        city: "Dhaka",
        street:{
            block:"Kha",
            road: 29,
            house:"32/A",
        }
    }
}
console.log(user.address.street.house)