document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldById('withdraw-input');
    const previousWithdrawAmount = getElementById('withdraw-element');

    const updateWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    setElementAmount('withdraw-element', updateWithdrawAmount);

    const currentBalanceAmount = getElementById('current-balance');
    const updatedBalanceAmount = currentBalanceAmount - newWithdrawAmount;
    setElementAmount('current-balance', updatedBalanceAmount);
})