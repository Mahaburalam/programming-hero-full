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

// total number of calculation in entry
/*
total number of step:
    1. get the element where to show/ add the element/ result
    2. create new element
    3. if needed add class
    4. set inner html in dynamically
    5. append child
*/
function totalEntryCalculation(geometryType, area){
    // console.log(geometryType, area);

    // 1.
    const getElement = document.getElementById("calculate-entry");
    // 1.1 child element count
    const count = getElement.childElementCount;
    // 2.
    const p = document.createElement('p');
    // 3.
    p.classList.add('my-2');
    // 4.
    p.innerHTML = (`${count +1}. ${geometryType} ${area}cm<sup>2</sup> <button class='btn btn-success btn-sm my-2'>convert to m<sup>2</sup></button>`);
    // 5. 
    getElement.appendChild(p);
}