import './App.css'

function App() {

  return (
    <>
      <div className="card">
        <h2>Component</h2>
        <DistrictInfo id='1' name="Khulna" visitingPlace="Sundarban"></DistrictInfo>
        <DistrictInfo id='2' name="Dhaka" visitingPlace="National Zoo"></DistrictInfo>
        <DistrictInfo id='3' name="Shyleth" visitingPlace="Khan Jahan Ali Mazar"></DistrictInfo>
      </div>
    </>
  )
}

const DistrictInfo = (props) =>{
  console.log(props);
  return(
    <div className='district-style'>
      <h4>Name: {props.name}</h4>
      <p>Historical Place: {props.visitingPlace}</p>
    </div>
  )
}

export default App
