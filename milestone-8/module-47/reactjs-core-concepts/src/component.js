import React from 'react';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
};

const personStyle = {
  backgroundColor:"gray",
  color:'green',
  border:'2px sold red',
  borderRadius:'20px',
  padding:'12px',
  margin:'9px'
}

const Person = () => {
  return(
    <div style={personStyle}>
      <h1>Private Car Brand</h1>
      <p>BMW</p>
      <p>AUDI</p>
    </div>
  )
}

export default App;