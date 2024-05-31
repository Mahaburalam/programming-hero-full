function cartButton() {
    // get input field
    const productNameElement = document.getElementById('product-name');
    const productQuantityElement = document.getElementById('product-quantity');

    // get input field value
    const productNameValue = productNameElement.value;
    const productQuantityValue = productQuantityElement.value;

    // clear input field value
    productNameElement.value = '';
    productQuantityElement.value = '';

    showItemWeWantToAdd(productNameValue, productQuantityValue);
    checkToLocalStorage(productNameValue, productQuantityValue);
}

// display function
function showItemWeWantToAdd(product, quantity) {
    // console.log(product, quantity);
    const cartItem = document.getElementById('item-container');
    const p = document.createElement('p');
    p.innerHTML = `
        ${product} : ${quantity}
    `;
    cartItem.appendChild(p);
}

// check if item saved in local storage
function checkSaveToLocalStorage() {
    let cart = {};
    const cartItemSaved = localStorage.getItem('cart');
    if(cartItemSaved) {
        cart = JSON.parse(cartItemSaved);
    }
    return cart
}

// save item to local storage
function checkToLocalStorage(product, quantity) {
    const previouslySavedData = checkSaveToLocalStorage();
    previouslySavedData[product] = quantity;

    const itemSaved = JSON.stringify(previouslySavedData);
    localStorage.setItem("cart", itemSaved);
}

// saved item show 
function showSavedItemFromLocalStorage() {
    const alreadySavedItem = checkSaveToLocalStorage();
    // console.log(alreadySavedItem);
    for(let item in alreadySavedItem) {
        // localStorage.setItem(item, 0)
        showItemWeWantToAdd(item, alreadySavedItem[item]);
    }
}
showSavedItemFromLocalStorage();

