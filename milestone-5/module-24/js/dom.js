console.log("External JavaScript File");


// change style
document.getElementById('Places').style.color ='white';
document.getElementById('Places').style.backgroundColor ='cyan';
document.getElementById('Places').style.textAlign ='center';
document.getElementById('Places').style.fontSize ='25px';
document.getElementById('Places').innerText = "Most Beautiful Places";

// get attribute
const title = document.getElementById('Places');
const viewAtt = title.getAttribute('id');
console.log(viewAtt);

// const getAtt = document.getElementsByClassName('test')
const showClass = title.getAttribute('class');
console.log(showClass);

// set attribute
title.setAttribute('title', "set tooltip by javascript");

// add class by javascript
title.classList.add("new1", "new2", "new3");
console.log(title.classList);

// remove call by javascript
title.classList.remove('new3')
console.log(title.classList);
