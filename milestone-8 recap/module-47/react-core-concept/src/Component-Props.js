// import logo from './logo.svg';
import './App.css';

const visitingPlaces = [
  {
    id:1,
    name: 'Sundarbans Mangrove Forest',
    location: 'Khulna',
    description: 'The largest mangrove forest in the world and a UNESCO World Heritage Site.',
  },
  {
    id:2,
    name: 'Cox’s Bazar',
    location: 'Chittagong',
    description: 'The longest natural sea beach in the world.',
  },
  {
    id:3,
    name: 'Srimangal',
    location: 'Sylhet',
    description: 'Famous for tea gardens and the Lawachara National Park.',
  },
  {
    id:4,
    name: 'Rangamati',
    location: 'Chittagong Hill Tracts',
    description: 'Known for its beautiful lakes, hills, and tribal culture.',
  },
];

function App() {
  return (
    <div className="App">
      <GagatesInfo name="Laptop" price='1,20,000'></GagatesInfo>
      <GagatesInfo name="Phone" price='1,09,000'></GagatesInfo>
      <GagatesInfo name="Smart Watch" price='20,000'></GagatesInfo>

      {/* another component */}
      <h2>Array of object data</h2>
      {
        visitingPlaces.map(visitingPlace => <VisitingPlaceOfBangladesh
        key={visitingPlace.id} 
        place={visitingPlace.name}
        location={visitingPlace.location}
        des={visitingPlace.description}
        ></VisitingPlaceOfBangladesh>)
      }
    </div>
  );
}

// functional component
function GagatesInfo(props){
  console.log(props);
  return(
    <div className='gagate-style'>
      <p>Name: {props.name} </p>
      <p>Price: {props.price} tk</p>
    </div>
  )
}

function VisitingPlaceOfBangladesh(props){
  console.log(props);
  return(
    <div className='places-style'>
      <h3>Place Name:{props.place}</h3>
      <p>Location:{props.location}</p>
      <p>Description:{props.des}</p>
    </div>
  )
}

export default App;
