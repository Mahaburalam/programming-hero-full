import logo from './logo.svg';
import './App.css';

function App() {
  const countries = ["Bangladesh", "India", "Pakistan", "Nepal", "Germany"];

  const deviceDetails = [
    {pName:"Samsung Galaxy A54", price:"43K"},
    {pName:"iPhone 15 Pro Max", price:"132K"},
    {pName:"Infinix Hot 30", price:"13K"},
    {pName:"Noting Phone 2", price:"72K"},
    {pName:"Oneplus 11 pro", price:"102K"},
  ]

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

        {
          deviceDetails.map( deviceDetail => <Device name={deviceDetail.pName} price={deviceDetail.price}></Device>)
        }
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

const Device = (props) =>{
  console.log(props);
  return(
    <div>
      <p>Model No:{props.name}</p>
      <p>Cost:{props.price}</p>
    </div>
  );
}


export default App;
