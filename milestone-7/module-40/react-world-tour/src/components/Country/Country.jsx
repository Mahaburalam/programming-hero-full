import { useState } from 'react';
import './Country.css';

const Country = ({countryData, myVisitedCountryList}) => {
    // eslint-disable-next-line no-unused-vars
    const {name, flags, capital, region, area, population, continents} = countryData;
    
    const [visited, setVisited] = useState(false);
    const isVisited = () => {
        setVisited(!visited);
    }
    console.log(myVisitedCountryList);
    
    return (
        <div className={`county-style ${visited && 'country-bg'}`}>
            <img style={{width:"320px", height:"213px"}} src={flags.png} alt='county-flag'></img>
            <p>Country Name: {name.common}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Continents: {continents}</p>
            {/* <p>Time Zone: {timezones}</p> */}
            <button onClick={isVisited}>{visited?"already visit":"would be visit"}</button>
            {
                visited?" I already visit this place":"I would be visit one day!"
            }   
            
        </div>
    );
};

export default Country;