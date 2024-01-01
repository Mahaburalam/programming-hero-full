const addition = (first, second) =>{
    return(first + second);
}

const subtraction = (first, second) =>{
    return(first - second);
}

const multiply = (first, second) =>{
    return (first * second);
}

const division = (first, second) =>{
    return(first / second);
}

// export default addition; //for single value export
export {addition, subtraction, multiply, division} //when multiple value need export, this is the way to export