import './App.css'
import propTypes from 'prop-types';

// Your component code here


function App() {
  return (
    <>
      <div>
        <h1>This is my personal info</h1>
        <h3>Dynamic Component, pass data through Props</h3>
        {/* component call */}
        {/* pass dynamic data through props in component*/}
        <Myinfo name="Md Mahabur Alam" prof="Software Developer" country='Bangladesh' homeDis="Khulna"></Myinfo>
        <Myinfo name="Nusrat Jahan" prof="Digital Marketer" country="Bangladesh" homeDis="Satkhira"></Myinfo>
        <Myinfo name="Ahanaf Anas" prof="Pappa baby" country="Bangladesh" homeDis="Khulna"></Myinfo>
        {/* <p>This is my family info</p> */}
        {/* another component call */}
        <h1>This is my family background</h1>
        <h3>Static Component</h3>
        <Mybio></Mybio>
        <Mybio></Mybio>
        <Mybio></Mybio>
      </div>
    </>
  )
}

// finctional component
function Myinfo(props){
  console.log(props);
  // define props type
  Myinfo.propTypes = {
    name:propTypes.string.isRequired,
    prof: propTypes.string,
    country:propTypes.string,
    homeDis:propTypes.string,
  };
  
  return(
    <div className='my-bio'>
      <h3>Name: {props.name}</h3>
      <h5>Profession: {props.prof}</h5>
      <p>Country: {props.country}</p>
      <p>Home District: {props.homeDis}</p>
    </div>
  )
}

// another functional component
function Mybio(){
  return(
    <div className='family-info-style'>
      <p>My Wife Name: Nusrat Jahan</p>
      <p>My Child Name: Ahanaf Anas</p>
      <p>Family Bacground: My Mother is a Teacher and Father is a Business Man</p>
    </div>
  )
}
export default App
