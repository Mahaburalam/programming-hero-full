import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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

      {/* API Call Data Show */}
      <UserPost></UserPost>
    </div>
  );
}

function Country(props){
  const [increase, setIncrease] = useState(0)
  const myFunct = ()=>{
    // setIncrease(increase+1);
    const newValue = increase+1;
    setIncrease(newValue);
  }
  return(
    <div className='bg-success m-4 p-4 text-white'>
      <h2 >Increment: {increase}</h2>
      <button onClick={myFunct} className='py-2 mb-4'>Click to Increase</button>
      <h3>Country Name: {props.name}</h3>
      <h4>Country Region: {props.region}</h4>
    </div>
  )
}

const UserPost = ()=>{
  const [posts, setPosts] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    // .then(data=>console.log(data));
    .then(data=>setPosts(data));
  },[])
  return(
    <div>
      <h2>Total Number Of Post Is: {posts.length}</h2>
      {
        // posts.map( post => <li>{post.name}</li>)
        posts.map( post => <PostView post = {post} key = {post.id}></PostView>)
      }
    </div>
  )
}

const PostView = (props)=>{
  console.log(props.post);
  const {name, username, email, phone, website, company, address} = props.post;
  return(
    <div className='border border-dange border-2 rounded m-2 p-4 bg-warning text-center'>
      <h3>Name : {name}</h3>
      <h4>User Name : {username}</h4>
      <h5>Email : {email}</h5>
      <h5>Phone No : {phone}</h5>
      <h5>Website : {website}</h5>
      <h5>Company Name : {company.name}</h5>
      <h5>Street : {address.street}</h5>
      <h5>City : {address.city}</h5>
      <h5>Zip Code : {address.zipcode}</h5>
    </div>
  )
}

export default App;
