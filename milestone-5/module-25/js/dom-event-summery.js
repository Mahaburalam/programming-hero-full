// option:1
function onClickHandler(){
    document.getElementById('change-text').innerText = 'The transparent keyword represents a fully transparent color. This makes the background behind the colored item completely visible. Technically, transparent is a shortcut for rgb(0 0 0 / 0%).'
}

// option:2
document.getElementById('addEventListener').addEventListener('click',function(){
    document.getElementById('change-text').innerText = 'If after checking these points the issue persists, please provide more details about your HTML structure and any other relevant CSS or JavaScript code so that I can help you further.';
})


// copy input filed text
document.getElementById('copy-text').addEventListener('click', function(){

    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;

    const updateText = document.getElementById('update-text');
    updateText.innerText = inputFieldValue;
    
    inputField.value = '';

});