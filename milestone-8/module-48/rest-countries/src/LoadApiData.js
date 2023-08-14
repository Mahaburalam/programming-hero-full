import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  // load rest countries api data
  const [countries, setCountries] = useState([]);

  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=>setCountries(data))
  }, [])

  return(
    <div>
      <h2>Visiting Rest Of The Countries In The World.</h2>
      <h3>Total Number Of Countries: { countries.length }</h3>
      {
        countries.map( country => <CountryView flags={country.flags.png} 
          official={country.name.official} 
          independent={country.independent} 
          region={country.region} 
          area={country.area}
          population={country.population} 
          timezones={country.timezones}
          ></CountryView>)
      }
    </div>
  )
}

function CountryView(props){
  // console.log(props);
  return(
    <div className='country-style'>
      <img src={props.flags} alt="country flag" />
      <h4>Country Official Name: {props.official}</h4>
      <p>Independent: {props.independent}</p>
      <p>Region: {props.region}</p>
      <p>Area: {props.area}</p>
      <p>Population: {props.population}</p>
      <p>Timezones: {props.timezones}</p>
    </div>
  )
}

export default App;
