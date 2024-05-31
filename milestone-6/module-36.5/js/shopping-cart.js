document.getElementById('button').addEventListener("click", ()=>{
    // console.log("test");
    // get element
    const productName = document.getElementById('product-name');
    const productQuality = document.getElementById('product-quality');

    // get element value
    const productNameValue = productName.value;
    const productQualityValue = productQuality.value;

    // clear input value
    productName.value = "";
    productQuality.value = "";

    // console.log(productNameValue, productQualityValue);
    showProductList(productNameValue, productQualityValue);
    saveItemToLocalStore(productNameValue, productQualityValue);
});
// Show product list that is added in UI
function showProductList(productNameValue, productQualityValue){
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `
        ${productNameValue} : ${productQualityValue}
    `
    productContainer.appendChild(li);
}

// check To Added In Local Storage
const checkToAddedInLocalStorage = () => {
    let cartItem = {};
    const checkItemIsAlreadyAdded = localStorage.getItem('cartItem');
    if(checkItemIsAlreadyAdded) { //if true
        cartItem = JSON.parse(checkItemIsAlreadyAdded);
    }
    return cartItem;
}

// save item to local store
const saveItemToLocalStore = (product, quality) => {
    const alreadyAddedItem = checkToAddedInLocalStorage();
    // set product & quality
    alreadyAddedItem[product] = quality;
    console.log(alreadyAddedItem);
    // convert to string
    const addedItemStringify = JSON.stringify(alreadyAddedItem);
    // const saveItemToLocal = localStorage.setItem(cartItem, addedItemStringify);
    localStorage.setItem("cartItem", addedItemStringify);
}

// Show local store saved item
const showLocalStoreSavedItem = () => {
    const saveItem = checkToAddedInLocalStorage();
    // console.log(saveItem);
    for(let item in saveItem) {
        // console.log(item, saveItem[item]);
        showProductList(item, saveItem[item]);
    }
}
showLocalStoreSavedItem();