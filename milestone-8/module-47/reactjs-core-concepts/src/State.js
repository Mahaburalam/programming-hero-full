import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  // console.log(count);
  const newCount = () =>{
    const countIncrease = count + 1;
    setCount(countIncrease);
  }
  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={newCount}>Increase</button>
    </div>
  )
}
export default App;
