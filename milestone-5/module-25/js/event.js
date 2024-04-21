// option:1
// <button onclick="document.body.style.backgroundColor = 'blueviolet'">make blueviolet</button>

// option:2 --commonly use--
function makeDarkseagreen(){
    document.body.style.backgroundColor = 'darkseagreen';
}

// option:3.1
const buttonLightseagreen = document.getElementById('lightseagreen');

buttonLightseagreen.onclick = makeLightseagreen;
function makeLightseagreen()
{
    document.body.style.backgroundColor = 'lightseagreen';
}

// option:3.2
const buttonMediumpurple = document.getElementById('mediumpurple');
buttonMediumpurple.onclick = function makeMediumpurple()
{
    document.body.style.backgroundColor = 'royalblue';
}

// option: 4
const buttonOlive = document.getElementById('olive');
buttonOlive.addEventListener('click', makeOlive);
function makeOlive(){
    document.body.style.backgroundColor = 'olive';
}

// option: 4.1
const buttonPlum = document.getElementById('plum');
buttonPlum.addEventListener('click', function makePlum(){
    document.body.style.backgroundColor = 'plum';
})

// option: 4.2 --commonly use--
document.getElementById("powderblue").addEventListener('click', function(){
    document.body.style.backgroundColor = 'powderblue';
})