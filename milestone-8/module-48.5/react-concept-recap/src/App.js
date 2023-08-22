import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Country name='Bangladesh' region='Asia'></Country>
      <Country name='Germany' region='Europe'></Country>
      <Country name='Canada' region="North America"></Country>
    </div>
  );
}

function Country(props){
  return(
    <div className='bg-success m-4 p-4 text-white'>
      <h3>Country Name: {props.name}</h3>
      <h4>Country Region: {props.region}</h4>
    </div>
  )
}

export default App;
