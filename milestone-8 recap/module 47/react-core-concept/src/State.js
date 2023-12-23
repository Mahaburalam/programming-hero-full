// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Counter App</h2>
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);

  // function
  const increaseNumber = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseNumber = () => {
    setCount(count - 1);
  }

  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber} style={{marginLeft:"5px"}} >Decrease</button>
    </div>
  )
}


export default App;
