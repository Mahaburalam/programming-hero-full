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
        countries.map( country => <CountryView official={country.name.official} language={country.capital}></CountryView>)
      }
    </div>
  )
}

function CountryView(props){
  return(
    <div>
      <h4>Country Official Name: {props.official}</h4>
      <p>Language: {}</p>
    </div>
  )
}

export default App;
