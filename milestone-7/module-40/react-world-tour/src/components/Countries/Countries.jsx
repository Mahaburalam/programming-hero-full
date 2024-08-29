import { useEffect, useState } from "react";
import './Countries.css';
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries]= useState([]);
    const [myVisitedCountry, setMyVisitedCountry] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const myVisitedCountryList = (countryList) => {
        console.log("New");
        console.log(countryList);
    }

    return (
        <div>
            <h2>Total Number of Countries: {countries.length}</h2>
            <div>
                <h2>My Visited Country List</h2>
            </div>
            <div className="country-container">
                {
                    countries.map( country => <Country 
                        key={country.cca3}
                        countryData={country}
                        myVisitedCountryList={myVisitedCountryList}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;