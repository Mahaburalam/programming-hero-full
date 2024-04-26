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

})