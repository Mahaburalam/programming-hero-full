import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {
    // step-1
    const [countries, setCountries] = useState([]);
    // step-2
    useEffect( ()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h2>Total Available Countries: {countries.length}</h2>
            <div className="countries-style">
                {
                    countries.map(country=><Country 
                    key={country.cca3}
                    // name={country.name.common}
                    country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;