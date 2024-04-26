// step-1: get deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log("test");

    // step-2: deposit input amount
    const depositInput = document.getElementById('input-deposit');
    const newDepositAmount = depositInput.value;

    // const newDepositAmountNumber = Number(newDepositAmount);
    // console.log(newDepositAmount, typeof(newDepositAmount));

    // step-3: previous deposit amount field
    const depositField = document.getElementById('total-deposit');
    const previousDepositAmount = depositField.innerText;

    // const previousDepositAmountNumber = parseFloat(previousDepositAmount);
    // console.log(previousDepositAmount, typeof(previousDepositAmount));

    // step-4: calculate new deposit and previous deposit
    const totalDepositAmount = Number(previousDepositAmount) + Number(newDepositAmount);
    // step-5: set new total deposit
    depositField.innerText = totalDepositAmount;
    // console.log(totalDeposit);

    // step-6: get balance element
    const balanceElement = document.getElementById('total-balance');
    const previousBalance = balanceElement.innerText;
    const previousBalanceNumber = Number(previousBalance);
    // console.log(previousBalance), typeof(previousBalance);

    // step-7:calculate new total balance
    const newTotalBalance = previousBalanceNumber + Number(newDepositAmount);
    
    // step-8: set new total balance
    balanceElement.innerText = newTotalBalance;

    // step-9: clear deposit input field
    depositInput.value = '';

});

// withdraw part
// step-1 get withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function(){

    // step-2 withdraw input field
    const withdrawInput = document.getElementById('withdraw-input-field');
    // console.log(withdrawInput);
    
    // step-3 withdraw input field get value and conversion string to number 
    const withdrawInputString = withdrawInput.value;
    const newWithdrawAmount = Number(withdrawInputString);

    

    // step-4 previous withdraw element
    const withdrawElement = document.getElementById('withdraw-balance');
    //step-5 previous withdraw element value and convert string to number
    const withdrawBalanceString = withdrawElement.innerText;
    const previousWithdrawAmount = Number(withdrawBalanceString);

    // if(isNaN(newWithdrawAmount))
    // {
    //     alert("Please enter a valid number");
    //     return;
    // }

    // step-6 calculate total withdraw amount
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;

    // step-7 set total withdraw amount
    withdrawElement.innerText = totalWithdrawAmount;

    // step-8 get previous total balance and convert sting to number
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalance = totalBalanceElement.innerText;
    const newTotalBalance = Number(totalBalance);

    // step-9 calculate new total balance 
    const currentBalanceAfterWithdraw = newTotalBalance - newWithdrawAmount;

    // step-10
    totalBalanceElement.innerText = currentBalanceAfterWithdraw;
    
    // step-11
    withdrawInput.value = '';

})