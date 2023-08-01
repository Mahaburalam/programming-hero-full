import logo from './logo.svg';
import './App.css';

function App() {

  const studentCount = 23;
  const studentInfo = {
    Id: 204,
    name: "Ahsan",
    email: "ahsan@gmail.com",
  }
  const styleStd = {
    color: "yellow",
    backgroundColor: "green"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <h1>Hello React Js</h1>
        <div className="student">
          <p>I'm Learning Reactjs</p>
        </div>
        <div style={{border: "5px solid greenyellow",
                    borderRadius: "13px",
                    backgroundColor: "#2c3953",
                    color: "azure",
                    margin: "7px",
                    padding: "12px"
                    }}>
          <h5>Total Student:{120 + studentCount}</h5>
          <p>ID : {studentInfo.Id}</p>
          <p>Name : {studentInfo.name}</p>
          <p style={styleStd}>Email : {studentInfo.email}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
