import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  return (
    <>
      <div className="card">
        <h2>Component</h2>
        <DistrictInfo id='1' name="Khulna" visitingPlace="Sundarban"></DistrictInfo>
        <DistrictInfo id='2' name="Dhaka" visitingPlace="National Zoo"></DistrictInfo>
        <DistrictInfo id='3' name="Shyleth" visitingPlace="Khan Jahan Ali Mazar"></DistrictInfo>
        {/* state */}
        <h2>Example of State</h2>
        <IncrementButton></IncrementButton>
        <h2>Load Data from API using fetch method</h2>
        {/* load data */}
        <LoadData></LoadData>

      </div>
    </>
  )
}

const DistrictInfo = (props) =>{
  // console.log(props);
  return(
    <div className='district-style'>
      <h4>Name: {props.name}</h4>
      <p>Historical Place: {props.visitingPlace}</p>
    </div>
  )
}

// state
const IncrementButton = () => {
  // state
  const [currentValue, setCurrentValue] = useState(0);
  // increment
  const incrementValue = () =>{
    const newValue = currentValue + 1;
    setCurrentValue(newValue);
  }
  // decrement
  const decrementValue = () =>{
    setCurrentValue(currentValue - 1);
  }
  return(
    <div className='mt-4'>
      <h2>Current Value: {currentValue}</h2>
      <button className='bg-warning mx-3' onClick={incrementValue}>Increnent</button>
      <button className='bg-info text-white mb-4' onClick={decrementValue}>Decrement</button>
    </div>
  )
}

// fetch data
const LoadData = () =>{
  const [posts, setPosts] = useState([]);
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  
  return(
    <div>
      {
        posts.map(post=><ShowPost
        key={post.id}
        post={post}
        ></ShowPost>)
      }
      <h3>Total Post : {posts.length}</h3>
    </div>
  )
}
const ShowPost = (props) =>{
  console.log(props);
  const {id, body, title} = props.post;
  return(
    <div className='border border-danger rounded-4 my-3 p-4 bg-success text-white'>
      <h3>Post ID: {id}</h3>
      <h5>Post Body: {body}</h5>
      <p>Post Title: {title}</p>
    </div>
  )
}
export default App
