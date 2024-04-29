document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldById('deposit-input');
    // console.log(newDepositAmount);
    const currentDepositAmount = getElementById('deposit-amount');
    // console.log(currentElementAmount);
    const currentTotalBalance = getElementById("current-balance");
    // console.log(currentTotalBalance);

    const updatedDepositAmount = currentDepositAmount + newDepositAmount;
    setElementAmount('deposit-amount', updatedDepositAmount);

    const updatedBalanceAmount = currentTotalBalance + newDepositAmount;
    setElementAmount('current-balance', updatedBalanceAmount);


})