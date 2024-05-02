// get input field
function getInputField(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value;
    inputElement.value = '';
    return inputValue;
}

// show area result
function showAreaResult(resultId, resultValue){
    const resultInput = document.getElementById(resultId);
    resultInput.innerText = resultValue;
}

// global validation
function globalValidation(firstValue, secondValue){
    if(isNaN(firstValue) | isNaN(secondValue))
    {
        alert("Please input valid number");
        return
    }
}