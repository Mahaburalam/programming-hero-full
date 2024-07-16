import { useState } from 'react';
import './App.css'
function App() {
  const eventHandler = () => {
    alert("check your name");
    }

    const [count, setCount] = useState(0);

    const addCount = () => {
      const newAddCount = count + 1;
      // console.log(newCount);
      setCount(newAddCount);
    }

    const reduceCount = () => {
      const newReduceCount = count - 1;
      setCount(newReduceCount);
    }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={eventHandler}>Click</button>
      <br></br>
      <div>
        <h3>Count: {count}</h3>
        <button style={{marginRight:"12px"}} onClick={addCount}>Add</button>
        <button onClick={reduceCount}>Reduce</button>
      </div>
    </>
  )
}

export default App
