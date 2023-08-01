import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player name='Sakib Al Hasan' platform='Cricket' age='35'></Player>
        <Player name='Naymer Jr.' platform='Football' age='29'></Player>
        <Player name='Babar Azam' platform='Cricket' age='28'></Player>
      </header>
    </div>
  );
}

const Player = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.platform}</p>
      <p>Age:{props.age}</p>
    </div>
  )
}

export default App;
