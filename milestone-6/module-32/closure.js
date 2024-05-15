// important
function country(){
    division = 0;
    return function(){
        division ++;
        return division;
    }
}
const firstDivision = country();
console.log('For First',firstDivision());

const secondDivision = country();
console.log('For Second',secondDivision());
console.log('For Second',secondDivision());