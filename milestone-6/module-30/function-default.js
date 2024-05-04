function defaultValue(x, y = 0){
    const sum = x + y;
    console.log(sum);
    return sum;
}
defaultValue(2, 8);
defaultValue(2); //2 + 0 = 0
defaultValue(); //undefine + 0 = NaN