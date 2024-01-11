const storeSessionData = (id) =>{
    const getQuantity = localStorage.getItem(id);

    if(getQuantity)
    {
        // console.log("This product already store");
        const repeatCount = Number(getQuantity) + 1;
        localStorage.setItem(id, repeatCount);
    }
    else
    {
        localStorage.setItem(id, 1);
    }
}

export {storeSessionData};