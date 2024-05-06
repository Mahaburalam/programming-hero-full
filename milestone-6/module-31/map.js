const number = [2, 8, 4, 5];

// show double of this number
const doubled = [];
for(const num of number)
{
    const double = num *2;
    // return doubled;
    doubled.push(double);
}
// console.log(doubled);

// another way
function multiply2(num){
    return (num * 2)
}
const numberDouble = number.map(multiply2);
console.log(numberDouble);

// more easy way
const multiply = number.map(num => num *2);
// console.log(multiply)