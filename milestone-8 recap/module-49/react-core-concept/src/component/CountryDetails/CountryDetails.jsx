/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './CountryDetails.css';

const CountryDetails = (props) => {
    console.log(props);
    const {name, independent, capital, region, area, population, 
        timezones, continents, flags, maps} = props.country;
    return (
        <div className='specific-country border rounded border-info my-4 p-4 bg-success-subtle'>
            <img src={flags.svg} alt='country flag' className='img-fluid w-50'></img>
            <h3><small>Country Official Name : </small>{name.official}</h3>
            <h3><small>Country Name : </small>{name.common}</h3>
            <h3><small>Capital : </small>{capital}</h3>
            <h3><small>Population : </small>{population}</h3>
            <h3><small>Area : </small>{area} km²</h3>
            <h3><small>Country Region : </small>{region}</h3>
            <h3><small>Continents : </small>{continents}</h3>
            <h3><small>Country Timezone : </small>{timezones}</h3>
            {/* <link href={maps.googleMaps}></link> */}
            {/* <h1>{independent}</h1> */}
        </div>
    );
};

export default CountryDetails;