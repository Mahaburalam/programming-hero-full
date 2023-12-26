import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {name, population, flags, capital, independent, region, area, timezones, continents} = props.country;
    // console.log(abc);
    return (
        <div className='single-country bg-success'>
            <img src={flags.png}></img>
            <h4>Country Name:{name.common}</h4>
            <p>Population:{population}</p>
            <p>Capital:{capital}</p>
            <p>Independent:{independent}</p>
            <p>Region:{region}</p>
            <p>Area:{area}</p>
            <p>Timezones:{timezones}</p>
            <p>Continents:{continents}</p>
        </div>
    );
};

export default Country;