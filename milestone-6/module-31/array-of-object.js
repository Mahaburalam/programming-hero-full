const person = [
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "123-456-7890",
      money: 1000
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      money: 2000
    },
    {
      id: 3,
      name: "Alice Johnson",
      phoneNumber: "555-555-5555",
      money: 1500
    }
  ]

// console.log(person);

// array map method
const personMap = person.map(test => test.name);
console.log('Result of map method:', personMap);

// forEach
person.forEach(persons => console.log(persons.money));

// filter
const personFilter = person.filter(test => test.money > 1000);
console.log('After filter the result is:', personFilter);
// console.log(`${personFilter}`);

// find
const personFind = person.find(person => person.money > 1000);
console.log(personFind);

// reduce
const personCostReduce = person.reduce((current, previous) => current + previous.money,0)
console.log('reduce', personCostReduce);