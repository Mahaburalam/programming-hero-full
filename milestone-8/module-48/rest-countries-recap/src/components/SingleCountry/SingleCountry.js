import React from 'react';
import "./SingleCountry.css";

const SingleCountry = (props) => {
    console.log(props.country);
    const {name, capital, region, area, population, timeZone, flags} = props.country
    return (
        <div className='country-style'>

            {/* more modern way to view data */}
            <img style={{width:'350px'}} src={flags.svg} alt="flag" />
            <h5>Country Name : {name.official}</h5>
            <h5>Capital : {capital}</h5>
            <p>Region : {region}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            <p>Time Zone : {timeZone}</p>


            {/* modern way to view data */}
            {/* <img style={{width:'350px'}} src={props.country.flags.svg} alt="flag" />
            <h5>Country Name : {props.country.name.official}</h5>
            <h5>Capital : {props.country.capital}</h5>
            <p>Region : {props.country.region}</p>
            <p>Area : {props.country.area}</p>
            <p>Population : {props.country.population}</p>
            <p>Time Zone : {props.country.timezones}</p> */}

            {/* old way to view data */}
            {/* <img style={{width:'350px'}} src={props.flags} alt="flag" />
            <h5>Country Name : {props.cName}</h5>
            <h5>Capital : {props.capital}</h5>
            <p>Region : {props.region}</p>
            <p>Area : {props.area}</p>
            <p>Population : {props.population}</p>
            <p>Time Zone : {props.timezones}</p> */}
        </div>
    );
};

export default SingleCountry;