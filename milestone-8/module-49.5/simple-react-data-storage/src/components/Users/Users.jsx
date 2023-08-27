import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect( ()=>{
        fetch('userData.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        // .then(data=>console.log(data))
    }, [])

    return (
        <div>
            <h3>View User Data From Local Json File</h3>
            <h4>We Get Total Number Of Users From API Is: {users.length}</h4>
            {
                users.map( user => <User 
                key={user.id}
                userData={user}></User>)
            }
        </div>
    );
};

export default Users;