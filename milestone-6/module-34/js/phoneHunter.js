const loadPhone = async () => {
    const fetchPhone = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const response = await fetchPhone.json();
    // console.log(response);
    const data = response.data;
    displayPhones(data);
}

const displayPhones = (phones) => {
    // console.log(phones);
    // step:1
    const phoneContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        // console.log(phone);

        // step:2
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card p-4 bg-base-100 shadow-xl border-2 ms-5';

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

    })

}

// search option 
const buttonSearch = () => {
    console.log("search button clicked")
}

loadPhone();