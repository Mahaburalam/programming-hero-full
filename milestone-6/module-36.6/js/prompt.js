document.getElementById('on-click').addEventListener("click", ()=>{
    alert("Hi, there!! How are you?");
});

function confirmAlert() {
    confirm("Are you sure");
};

document.getElementById('prompt').addEventListener('click', () => {
    prompt("Write your name");
});