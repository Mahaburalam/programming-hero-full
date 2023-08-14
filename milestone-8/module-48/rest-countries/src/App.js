import './App.css'
import Country from './component/Country/Country';
import Header from './component/Header/Header';
import Person from './component/Person/Person';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Country></Country>
      <Person></Person>
    </div>
  );
}

export default App;
