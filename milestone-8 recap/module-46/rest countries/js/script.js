const loadCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    // .then(data=>console.log(data));
    .then(data=>displayCountries(data));
}

const displayCountries = (countries) =>{
    console.log(countries);
    const viewCountries = countries.map(country => getCountry(country));
    console.log(viewCountries[0]);
    const singleCountry = document.getElementById('countries'); 
    singleCountry.innerHTML = viewCountries.join(" ");
}

const getCountry = (countryData) =>{
    // disturing oprion:1
    const {capital, timezones} = countryData;
    return(
        `
            <div class="country-style">
                <img src='${countryData.flags.png}'>
                <h3>Country Name: ${countryData.name.common}</h3>
                <h4>Capital: ${capital}</h4>
                <h4>Population: ${countryData.population}</h4>
                <h4>Regoin: ${countryData.continents}</h4>
                <h4>Time: ${timezones}</h4>
            </div>
        `
    )
}

loadCountries();