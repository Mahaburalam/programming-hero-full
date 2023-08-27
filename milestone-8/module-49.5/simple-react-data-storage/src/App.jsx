import './App.css'
import Add from './components/Calculator/Add'
import Country from './components/Country/Country'
import Department from './components/Department/Department'
import Users from './components/Users/Users'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Department></Department>
        <Add></Add>
        <Country></Country>
        <Users></Users>
      </div>
    </>
  )
}

export default App
