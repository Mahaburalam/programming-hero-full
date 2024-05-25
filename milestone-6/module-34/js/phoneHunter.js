const loadPhone = async (searchPhone) => {
    const fetchPhone = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const response = await fetchPhone.json();
    // console.log(response);
    const data = response.data;
    displayPhones(data);
}

const displayPhones = (phones) => {

    // show card 12
    phones = phones.slice(0, 12);

    // show all card
    let showAllButton = document.getElementById('show-all-button');
    if(phones.length >= 12){
        console.log("test");
        showAllButton.classList.remove('hidden');
    } else {
        showAllButton.classList.add('hidden');
    }
    // step:1
    const phoneContainer = document.getElementById('phones-container');

    // clear text content after search
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        // console.log(phone);
        // step:2
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card p-4 bg-base-100 shadow-xl border-2 my-5';

        // step:3
        phoneCard.innerHTML = `
            <figure class="mt-5">
                <img src="${phone.image}" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <h3 class='text-2xl text-center font-semibold'>$999</h3>
                <div class="card-actions justify-center px-5 mt-4">
                    <button onclick='showPhoneDetails("${phone.slug}")' class="btn btn-primary text-2xl">Show Details</button>
                </div>
            </div>
        `
        // step:4
        phoneContainer.appendChild(phoneCard);
        spinnerOrLoader(false);

    })
}

// search option 
const buttonSearch = () => {
    // console.log("search button clicked");
    spinnerOrLoader(true);
    const searchPhones = document.getElementById('phone-search');
    const getSearchPhone = searchPhones.value;
    // console.log(searchPhones);
    loadPhone(getSearchPhone);
    searchPhones.value = '';
}
// loadPhone(searchPhone);

// loading
const spinnerOrLoader = (loader) => {
    const loaderDiv = document.getElementById('loading');
    if(loader) {
        loaderDiv.classList.remove('hidden');
    }
    else {
        loaderDiv.classList.add('hidden');
    }
}

// show phone details
const showPhoneDetails = async (id) => {
    // console.log("Phone Clicked", id);
        const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
        const data = await res.json();
        let getData = data.data;
        console.log(getData);
        showSinglePhoneDetails(getData);
}

const showSinglePhoneDetails = (phone) => {
    my_modal_5.showModal();
    const showPhoneDetailsContainer = document.getElementById('show-phone-details-container');
    showPhoneDetailsContainer.innerHTML = `
        <img class="w-2/4 mx-auto border-1" src="${phone.image}" alt='phone photo'>
        <h2 class="text-2xl my-3 font-bold">${phone.name}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">Storage:</span> ${phone.mainFeatures.storage}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">Display Size:</span> ${phone.mainFeatures.displaySize}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">ChipSet:</span> ${phone.mainFeatures.chipSet}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">Memory:</span> ${phone.mainFeatures.memory}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">Slug:</span> ${phone.slug}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">Release Date:</span> ${phone.releaseDate}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">Brand:</span> ${phone.brand}</h2>
        <h2 class="text-xl my-3"><span class="text-xl my-3 font-bold">GPS:</span> ${phone.others.GPS}</h2>
    `
}

// loadPhone();