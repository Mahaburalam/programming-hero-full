import { useEffect, useState } from "react";
import Person from "./Person";

const Persons = () => {
    const [persons, setPersons] = useState([]);
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    return (
        <div className="person-style">
            <h3>Total Number Of Person: {persons.length}</h3>
            {
                persons.map( person => <Person
                key={person.id}
                person={person}
                ></Person>)
            }
        </div>
    );
};

export default Persons;