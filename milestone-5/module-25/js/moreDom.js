const textArea = document.getElementById("text-area").addEventListener('keyup', function(event){
    const text = event.target.value;
    console.log(text);
    const deleteButton = document.getElementById('delete');
    console.log(deleteButton);
    if(text === 'delete')
    {
        deleteButton.removeAttribute('disabled');
    }
    else
    {
        deleteButton.removeAttribute("enabled");
    }
})