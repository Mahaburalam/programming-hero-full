import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Country.css';

const Country = () => {

    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    return (
        <div>
            <h2>Rest Countries API Data Call</h2>
            <h4>Total Number of Country:{countries.length}</h4>
            <div className='allCountry-style'>
                {   
                 countries.map( country=><SingleCountry 
                    // more modern way to pass props
                    country={country}
                    key={country.cca3}
                    
                    // old modern way to pass props

                    // cName={country.name.official}
                    // region={country.region}
                    // area={country.area}
                    // population={country.population}
                    // timezones={country.timezones}
                    // flags={country.flags.svg}
                    // capital={country.capital}
                    ></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default Country;