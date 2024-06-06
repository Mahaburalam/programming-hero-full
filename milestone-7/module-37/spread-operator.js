const products = [
    {productName:"Laptop", quantity: 13, price:374000, brand:"Apple"},
    {productName:"Mobile", quantity: 53, price:134000, brand:"Nothing"},
    {productName:"Smart Watch", quantity: 3, price:34000, brand:"Xiaomi"},
    {productName:"Camera", quantity: 8, price:249000, brand:"Canon"},
    {productName:"Printer", quantity: 17, price:324000, brand:"HP"}
];

const newProducts = {productName:"Tab", quantity: 7, price:4000, brand:"Oneplus"};

const myAllProducts = {... products, newProducts};
console.log(myAllProducts);