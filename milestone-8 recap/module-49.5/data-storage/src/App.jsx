import './App.css'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Products from './components/Products/Products'
import Shops from './components/Shops/Shops'
import ShowData from './components/ShowData/ShowData'

function App() {

  return (
    <>
      
      <h1>React Import & Export</h1>
      <div className="card">
        <Shops></Shops>
      </div>
      <h3>Show Information from array of data</h3>
      <div className='border'>
        <Products></Products>
      </div>
      <h3>Show personal info to generate data by - `Json Generator`</h3>
      <div className='border'>
        <PersonalInfo></PersonalInfo>
      </div>
      <h3>Show personal info from local API</h3>
      <div className='border'>
        <ShowData></ShowData>
      </div>
    </>
  )
}

export default App
