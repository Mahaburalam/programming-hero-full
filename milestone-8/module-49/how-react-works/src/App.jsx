import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {/* nested child component */}
        <Watch></Watch>

        <Device name='iPhone' price='120k' origin='USA'></Device>
        <Device name='Samsung' price='90k' origin='Korea'></Device>
        <Device name='Google Pixel' price='87k' origin='USA'></Device>
        <Device name='Nothing' price='53k' origin="UK"></Device>
      </div>
    </>
  )
}

export default App
