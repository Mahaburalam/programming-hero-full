import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const {capital, flags, name, population, region, timezones, currencies} = country;

    const [visited, setVisited] = useState(false);

    const isVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className="single-country-style">
            <img src={flags.svg} style={{width:"300px", display:"block", margin:"0 auto", paddingTop:"7px"}}></img>
            <h3>Country Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            {/* <p>Currencies: {currencies[0][name]}</p> */}
            <p>Time Zone: {timezones}</p>
            <button onClick={isVisited}>{ visited? "Visited": "Going"}</button>
            { visited? "I already visited" : "I will visit one day"}
        </div>
    );
};

export default Country;