const loadCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>countriesData(data));
}

const countriesData = (countries) =>{
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    const showCountry = document.getElementById('countries')
}

const getCountry = (country) =>{
    console.log(country);
    return `
        <h2> ${country.name.common}</h2>

    `
}

loadCountries();