import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data => setUsers(data));
    // .then(data => console.log(data));
  },[])

  return (
    <div className="App">
      <h1>Total User: {users.length}</h1>
      {
        users.map(user => <User 
        key={user.id}
        name={user.name}
        email={user.email}
        phone={user.phone}
        website={user.website}
        address={user.address.city}
        ></User>)
      }
    </div>
  );
}

function User(props){
  console.log(props);
  return(
    <div className='user-style'>
      <h3>Users Name: {props.name}</h3>
      <h4>Phone: {props.phone}</h4>
      <p>Email:{props.phone}</p>
      <p>Address:{props.address}</p>
      <p>Web Site:{props.website}</p>
    </div>
  )
}




export default App;
