import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  return (
    <>
      <div className="card">
        <LoadCountries></LoadCountries>
      </div>
    </>
  )
}

const LoadCountries = () => {
  // setp-1
  // const abc = useState([]);
  // console.log(abc);
  const [countries, setCountries] = useState([]);

  useEffect( ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[]);

  return(
    <div>
      <h2>React js API Call using FETCH Method</h2>
      <h3>Total Available Countries: {countries.length}</h3>
      {
        countries.map(country => <ViewCountry 
        key={country.id}
        name={country.name.common}
        capital={country.capital}
        ></ViewCountry>)
      }
    </div>
  )
}

const ViewCountry = (props) =>{
  console.log(props);
  return(
    <div className='country-style'>
      <h4>Country Name:{props.name}</h4>
      <p>Capital:{props.capital}</p>
    </div>
  )
}

export default App
