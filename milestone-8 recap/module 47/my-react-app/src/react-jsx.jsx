import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // object
  const javaScriptOwner = {
    name:'Evan Youe',
    year:1996,
  }

  const javaScriptFeature = {
    first:"Interpreted",
    second:"Case Sencitive",
    third:"Dynamic Typing",
    forth:"Async",
    fifth:"Object Oriented",
  }
     

  // style
  const jsFeatureStyle ={
    color:'green',
    backgroundColor:"pink",
    fontSize:"17px",
    border:"3px solid",
    borderRadius:"15px",
  }

  return (
    <>
      <div>
        <h1 className='header-style'>JavaScript XML(JSX)</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* My work */}
      <h2>JavaScript Feature:</h2>
      <div className="js-feature" style={jsFeatureStyle}>
        <p>Creator:{javaScriptOwner.name}</p>
        <p>Year:{javaScriptOwner.year}</p>
      </div>
      <div className="js-lang-feature" style={{color:"hsl(39deg 100% 68%)", backgroundColor:"#4c3848b3", border:"3px solid gray", borderRadius:"12px", marginTop:"20px"}}>
        <p>1. {javaScriptFeature.first}</p>
        <p>2. {javaScriptFeature.second}</p>
        <p>3. {javaScriptFeature.third}</p>
        <p>4. {javaScriptFeature.forth}</p>
        <p>5. {javaScriptFeature.fifth}</p>
      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
