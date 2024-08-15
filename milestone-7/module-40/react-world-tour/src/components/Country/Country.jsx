import './Country.css';

const Country = ({countryData}) => {
    console.log(countryData);
    // eslint-disable-next-line no-unused-vars
    const {name, flags, capital, region, area, population, continents, timezones} = countryData;
    return (
        <div className="county-style">
            <img style={{width:"320px", height:"213px"}} src={flags.png} alt='county-flag'></img>
            <p>Country Name: {name.common}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Continents: {continents}</p>
            {/* <p>Time Zone: {timezones}</p> */}
        </div>
    );
};

export default Country;