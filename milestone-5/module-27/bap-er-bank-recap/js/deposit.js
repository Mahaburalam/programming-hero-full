// step-1: get deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('tttt')

    // step-2: input deposit element 
    const depositInputElement = document.getElementById('deposit-input');
    // console.log(depositInputElement);

    // step-3: get input value and convert to number
    const depositInputValue = depositInputElement.value;
    const newDepositAmount = Number(depositInputValue);
    // console.log(newDepositAmount);

    // step-4: clear input field value
    depositInputElement.value = '';

    // step-3.1: input validation
    if(isNaN(newDepositAmount))
    {
        alert("Please input valid amount");
        return;
    }

    // step-5: get current deposit field
    const currentDepositElement = document.getElementById('deposit-amount');
    // console.log(currentDepositElement);

    // step-6: get current deposit value and convert to number
    const currentDepositValue = currentDepositElement.innerText;
    // console.log(currentDepositValue);
    const currentDepositAmount = parseFloat(currentDepositValue);
    // console.log(currentDepositAmount);

    // step-7: calculate and set current deposit amount
    const totalDepositAmount = currentDepositAmount + newDepositAmount
    currentDepositElement.innerText = totalDepositAmount;

    // step-8: get current total balance element
    const currentBalanceElement = document.getElementById("current-balance");
    // console.log(currentBalanceElement);

    // step-9: get current total balance amount
    const currentBalanceValue = currentBalanceElement.innerText;
    // console.log(currentBalanceValue, typeof(currentBalanceValue));
    const currentBalanceAmount = Number(currentBalanceValue);
    // console.log(currentBalanceAmount, typeof(currentBalanceAmount));

    // step-9.1: validation
    // if(newDepositAmount <= currentDepositAmount)
    // {
    //     alert("It is not impact in current total balance");
    //     return;
    // }

    // step-10: calculate and update current total balance
    const newTotalBalance = currentBalanceAmount + newDepositAmount;
    currentBalanceElement.innerText = newTotalBalance;

})