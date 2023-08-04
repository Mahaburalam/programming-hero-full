import logo from './logo.svg';
import './App.css';

function App() {
  const countries = ["Bangladesh", "India", "Pakistan", "Nepal", "Germany"];

  return (
    <div className="App">
      <header className="App-header">
        {
          countries.map( country => <li><span>{country}</span></li>)
        }

        {
          countries.map( country => <Country cName={country}></Country>)
        }
       
        {/* <Country name={countries[0]}></Country> */}
        {/* <Country></Country> */}
      </header>
    </div>
  );
}

// country dynamic array props 
const Country = (props) =>{
  return(
    <div className='country-style'>
      <p>Name: {props.cName}</p>
      <p>Mobile Number: {}</p>
    </div>
  );
}


export default App;
