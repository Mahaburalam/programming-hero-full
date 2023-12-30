/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import "./Countries.css";

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);
    return (
        <div>
            <h1>Show Country Information</h1>
            <h3>Total Number of Available Countries: {countries.length}</h3>
            <div className='country-style'>
                {
                    countries.map(country=><CountryDetails
                    key={country.cca3}
                    country={country}
                    ></CountryDetails>)
                }
            </div>
        </div>
    );
};

export default Country;