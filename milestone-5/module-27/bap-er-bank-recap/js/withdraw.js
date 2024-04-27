// step-1: get withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // console.log("test.....");

    // step-2: get input element
    const withdrawInputElement = document.getElementById("withdraw-input");
    // console.log(withdrawInputElement);

    // step-3: get input value and convert to number
    const withdrawInputValue = withdrawInputElement.value;
    // console.log(withdrawInputValue)
    const newWithdrawAmount = Number(withdrawInputValue);
    // console.log(newWithdrawAmount, typeof(newWithdrawAmount));

    // step-4: input withdraw value clear
    withdrawInputElement.value = '';

    // step-4.1: validation
    if(isNaN(newWithdrawAmount))
    {
        alert("Please input valid amount");
        return;
    }

    // step-5: get current withdraw element
    const withdrawElement = document.getElementById('withdraw-element');
    
    // step-6: get current withdraw value and convert to number
    const currentWithdrawValue = withdrawElement.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawValue);
    // console.log(currentWithdrawAmount);

    // step-7: calculate and set current withdraw amount
    const totalWithdrawAmount = currentWithdrawAmount + newWithdrawAmount;
    withdrawElement.innerText = totalWithdrawAmount;

    // step-8: get total balance element
    const currentBalanceElement = document.getElementById("current-balance");
    // console.log(currentBalanceElement);

    // step-9: get current total balance amount
    const currentBalanceValue = currentBalanceElement.innerText;
    // console.log(currentBalanceValue, typeof(currentBalanceValue));
    const currentBalanceAmount = Number(currentBalanceValue);
    // console.log(currentBalanceAmount, typeof(currentBalanceAmount));

    // step-10: calculate new total balance
    const totalCurrentAmount = currentBalanceAmount - newWithdrawAmount;

    // step-10.1: validation of withdraw amount
    if(totalCurrentAmount <= newWithdrawAmount)
    {
        alert("The amount you want to withdraw in not possible!!");
        return;
    }

    // step-11 : set total balance amount
    currentBalanceElement.innerText = totalCurrentAmount;


    



})