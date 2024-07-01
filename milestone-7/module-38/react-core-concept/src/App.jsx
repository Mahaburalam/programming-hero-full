import './App.css'
import Todo from './Todo';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Student 
        name="Mahabur Alam" class="Xi" phone="01783803843" schoolName="Mirpur Cantonment Public School and College">
      </Student>
      <Student 
        name="Ahanaf Anas" class="iv" phone="01920430757" schoolName="Wilfrid Laurier International School and College">
      </Student>
      <Device 
        name="Apple" price="305K"></Device>

      {/* another file component call to this file */}
      <Todo isShopping="Yes" items="Carrot"></Todo>
    </>
  )
}

function Person() {
  const technology = "JavaScript Library";
  const info = {
    founder:'Facebook',
    bio:"Most Popular UI Library"
  }
  return(
    <div className='person-style'>
      <h2>Hi, React JS is a {technology}</h2>
      <p>React js founder of {info.founder} and it is {info.bio}</p>
    </div>
  )
}

function Student(props) {
  // console.log(props);
  const studentStyle = {
    border:"2px solid green",
    borderRadius:"15px",
    margin:"12px",
    padding:"12px"
  }
  return(
    <div style={studentStyle}>
      <p>Name:{props.name}</p>
      <p>Class:{props.class}</p>
      <p>PhoneNumber: {props.phone}</p>
      <p>School Name: {props.schoolName}</p>
    </div>
  )
}

function Device({name, price}) {
  // const {price, name} = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default App
