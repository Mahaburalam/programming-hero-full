// step-2: what to add
const addListItem = document.createElement('li');
addListItem.innerText = 'Programming';

// step-1: Where to add
const getElements = document.getElementById('place-iteam');
console.log(getElements);
// step-3: added
getElements.appendChild(addListItem);


// add full section

// step-1: where to add
const main = document.getElementById("main-container");
// step-2: what to add
const addSection = document.createElement("section");
// addSection.appendChild(addUl);
// step-3: added as a child
main.appendChild(addSection);

// console.log(addSection);

const addHeading = document.createElement("h1");
addHeading.innerText = "Adding new section by Javascript";
addSection.appendChild(addHeading);
// console.log(test);

const addUl = document.createElement("ul");
addSection.appendChild(addUl);
const addList1 = document.createElement("li");
const addList2 = document.createElement("li");
const addList3 = document.createElement("li");
addList1.innerText = "Apple Brand";
addList2.innerText = "Samsung Brand";
addList3.innerText = "Lenovo Brand";
addUl.appendChild(addList1);
addUl.appendChild(addList2);
addUl.appendChild(addList3);

addSection.classList.add("section-style");
const sectionStyles = document.getElementsByClassName("section-style");
for(const sectionStyle of sectionStyles)
{
    sectionStyle.style.border = "2px solid #bd3009"
    sectionStyle.style.borderRadius = "20px"
    sectionStyle.style.padding = "10px"

}