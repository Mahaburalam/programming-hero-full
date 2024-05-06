const number = [22, 11, 33, 4, 55, 2];
const sum = number.reduce((currentState, previousState) => currentState + previousState ,0);
console.log(sum);

const summ = number.reduce((currentState, previousState) => currentState + previousState ,3);
console.log(summ);

/*
    reduce method return a cumulative number;
*/