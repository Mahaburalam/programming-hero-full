import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <Users></Users>
    </div>
  );
}

function Users(){

  // use state
  const [users, setUsers] = useState([]);
  // console.log(users);
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  
  return(
    <div>
      <h3>Total Users: {users.length}</h3>
      {
        users.map( user=><User name={user.name} uName={user.username} email={user.email} city={user.address.city} phone={user.phone} website={user.website} compName={user.company.name}></User>)
      }
    </div>
  )
}

function User(props){
  // console.log(props);
  return(
    <div className='user-style'>
      <h3>Name:{props.name}</h3>
      <h4>User Name:{props.uName}</h4>
      <h5>User Email:{props.email}</h5>
      <p>Mobole Number:{props.phone}</p>
      <p>City:{props.city}</p>
      <p>Website:{props.website}</p>
      <p>Company Name:{props.compName}</p>
    </div>
  )
}


export default App;
