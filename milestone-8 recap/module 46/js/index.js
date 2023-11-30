const loadCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>countriesData(data));
}

const countriesData = (countries) =>{
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    // console.log(countriesHTML[0]);
    const showCountry = document.getElementById('countries');
    showCountry.innerHTML = countriesHTML.join(' ');
}

const getCountry = (country) =>{
    // console.log(country);
    return `
        <div class='country'>
            <h3> ${country.name.common}</h3>
            <img src="${country.flags.png}">
        </div>

    `
}

loadCountries();