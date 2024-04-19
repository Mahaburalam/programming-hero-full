// to get/select single element
const getSingleElement = document.getElementById('country-name').innerHTML = "The Most Beautiful Countries In The World.";
// console.log(getSingleElement);
document.getElementById('country-name').style.color = "#e534eb";

// to get/select multiple element
const selectMultipleElement = document.getElementsByClassName('place-style');
console.log(selectMultipleElement);

for(listItem of selectMultipleElement)
{
    console.log(listItem);
    console.log(listItem.innerHTML);
    console.log("\n");
    // listItem[0].style.color = "blue"
}

// change html element style
const listItemColor = document.getElementsByClassName('place-style')
for(let i = 0; i < listItemColor.length; i++)
{
    listItemColor[i].style.color = "#ebdb34";
}