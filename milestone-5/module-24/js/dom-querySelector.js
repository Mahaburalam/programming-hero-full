// css selector
const querySelector = document.querySelector("#country-name");
console.log(querySelector);

const querySelectorAll = document.querySelectorAll('#place-iteam');
console.log(querySelectorAll);

const singleQuerySelector = document.querySelector('.place-style');
console.log(singleQuerySelector.innerHTML);

const allQuerySelector = document.querySelectorAll('.place-style');
console.log(allQuerySelector);


// more explore
const qSelector = document.querySelector(".fruits");
console.log(qSelector);

// single list select
const qListSelect = document.querySelector('.fruits li');
console.log(qListSelect);

// all list select
const qAllListSelect = document.querySelectorAll('.fruits li');
console.log(qAllListSelect);

for(list of qAllListSelect)
{
    console.log(list);
    console.log(list.innerText);
    console.log(list.innerHTML);
    console.log('\n');
}