import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [ countries, setCountries ] = useState([]);
    useEffect( () => {
        fetch('country-data.json')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    return (
        <div>
            <h3>Countries Information Showing Using API</h3>
            <h2>Total Countries: {countries.length}</h2>
            <div className="countries-style">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;