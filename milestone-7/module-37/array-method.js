// map, forEach, filter, find
const products = [
    {productName:"Laptop", quantity: 13, price:374000, brand:"Apple"},
    {productName:"Mobile", quantity: 53, price:134000, brand:"Nothing"},
    {productName:"Smart Watch", quantity: 3, price:34000, brand:"Xiaomi"},
    {productName:"Camera", quantity: 8, price:249000, brand:"Canon"},
    {productName:"Printer", quantity: 17, price:324000, brand:"HP"}
];

// console.log(products);

// map method
const arrayMap = products.map(product => [product.productName, product.price, product.brand]);
// console.log(arrayMap);

// for each method
// const arrayForEach = products.forEach(product => console.log(product.brand));
// console.log(arrayForEach);

// filter method
const arrayFilter = products.filter(product => (product.quantity > 8)); //show all match of the condition
console.log(arrayFilter);

// find method
const arrayFind = products.find(product => (product.quantity > 8)); //show only the 1st match of the condition
console.log(arrayFind);