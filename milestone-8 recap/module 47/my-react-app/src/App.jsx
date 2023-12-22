import './App.css'
import propTypes from 'prop-types';

// Your component code here


function App() {
  // array of country
  const countryInfos = ["Bangladesh", "Pakistan", "China", 'Japan', 'Korea', 'Germany', 'USA', 'Australia', 'Canada']

  const fruits = [
    { id: 1, name: 'Apple', color: 'Red', quantity: 10 },
    { id: 2, name: 'Banana', color: 'Yellow', quantity: 7 },
    { id: 3, name: 'Orange', color: 'Orange', quantity: 5 },
  ];

  return (
    <>
      <div>
        {
          countryInfos.map(countryInfo => <li> Name: {countryInfo}</li>)
        }
        {/* <FavouriteCountry></FavouriteCountry> */}
        <h2>Fully Dynamic Data pass to component through props</h2>
        {/* show data from array */}
        {
          countryInfos.map(countryInfo => <FavouriteCountry cName={countryInfo}></FavouriteCountry>)
        }

        {/* array of object */}
        {
          fruits.map(fruit => <FavouriteFood key={fruit.id} name={fruit.name} 
          color={fruit.color}
          quantity = {fruit.quantity}
          ></FavouriteFood>)
        }
      </div>
    </>
  )
}

// functional component
function FavouriteCountry(props)
{
  console.log(props);
  return(
    <div className="fav-country">
      <h4>Country Name: {props.cName}</h4>
    </div>
  )
}

// another functional component
function FavouriteFood(props){
  console.log(props);
  return(
    <div className='food-style'>
      <p>Name: {props.name}</p>
      <p>Color: {props.color}</p>
      <p>Quantity: {props.quantity}</p>
    </div>
  )
}

export default App
