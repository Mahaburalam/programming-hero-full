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
        // console.log("test");
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
                    <button class="btn btn-primary text-2xl">Show Details</button>
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