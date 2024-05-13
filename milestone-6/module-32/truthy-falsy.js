/*
    JavaScript falsy value list:
    1. 0
    2. ''
    3. null
    4. undefined
    5. false
    6. NaN
*/
const value = false;
const value1 = null;
const value2 = 0;
const value3 = NaN;
const value4 = '';
const value5 = undefined;
const value6 = ' ';
if(value6){
    console.log("This is truthy value");
}
else{
    console.log("This is falsy value");
}