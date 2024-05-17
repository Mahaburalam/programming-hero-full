function sum(a, b, c){
    // console.log(typeof arguments);
    const args = arguments;
    // console.log(args);
    for(let arg of args){
        console.log(arg);
    }
    const argArray = [...args];
    console.log(argArray, typeof argArray);
    const sum = (a + b + c);
    return sum;
}
const value = sum(2, 5, 1, 4, 12);
// console.log(value);