// get data of input field
function getInputFieldById(valueId){
    const inputElement = document.getElementById(valueId);
    const inputElementToValue = inputElement.value;
    const inputValueToNumber = Number(inputElementToValue);
    inputElement.value = '';
    return inputValueToNumber;

    // after function return, console is not working;
    // console.log(inputValueToNumber, typeof(inputValueToNumber));
}

// get data of element field
function getElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const ElementAmount = Number(elementValue);
    return ElementAmount;
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldById('deposit-input');
    // console.log(newDepositAmount);
    const currentElementAmount = getElementById('deposit-amount');
    // console.log(currentElementAmount);
    const currentTotalBalance = getElementById("current-balance");
    // console.log(currentTotalBalance);
})