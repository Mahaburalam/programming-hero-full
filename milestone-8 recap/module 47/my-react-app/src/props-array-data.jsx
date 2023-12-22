import './App.css'
import propTypes from 'prop-types';

// Your component code here


function App() {
  // array of country
  const countryName = ["Bangladesh", "Pakistan", "China", "Japan", "Korea"]

  return (
    <>
      <div>
        <FavouriteCountry cName = {countryName[0]}></FavouriteCountry>
        <FavouriteCountry cName = {countryName[1]}></FavouriteCountry>
        <FavouriteCountry cName = {countryName[2]}></FavouriteCountry>
        <FavouriteCountry cName = {countryName[3]}></FavouriteCountry>
        <FavouriteCountry cName = {countryName[4]}></FavouriteCountry>
      </div>
    </>
  )
}

// functional component
function FavouriteCountry(props)
{
  console.log(props);

  // props validation
  FavouriteCountry.propTypes = {
    cName:propTypes.string.isRequired,
  }

  return(
    <div className="fav-country">
      <h3>Country Name: {props.cName}</h3>
    </div>
  )
}

export default App
