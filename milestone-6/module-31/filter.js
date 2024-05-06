const myArray = [2, 3, 5, 4, 7, 8];

const oddNumber = myArray.filter( n => n % 2 !== 0);
console.log(oddNumber);

const getterThanFive = myArray.filter(n => n > 5);
console.log(getterThanFive);

const whenNotMatched = myArray.filter(n => n < 0);
console.log(whenNotMatched);

/*
    filter return something based on fulfil the condition.
*/