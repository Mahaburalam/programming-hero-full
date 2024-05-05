const persons = {
    name:"Mahabur",
    age: 29,
    gender:"Male"
}

for(const person in persons)
{
    const value = persons[person] //find value
    console.log(person, value);
    console.log(person) //show key
    console.log(value) //show value
}