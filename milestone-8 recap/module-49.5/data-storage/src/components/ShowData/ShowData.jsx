import React, { useEffect, useState } from 'react';

const ShowData = () => {
    const [users, setUsers] = useState([]);
    useEffect( ()=>{
        fetch("personalData.json")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);
    return (
        <div>
            {
                users.map(user=><ViewUser
                key={user.id}
                showUser={user}
                ></ViewUser>)
            }
        </div>
    );
};

const ViewUser = (props) =>{
    // console.log(props);
    const {id, name, phone, gender, age, address} = props.showUser;
    return(
        <div className='border rounded-2 bg-warning-subtle text-info p-3 m-4'>
            <p>ID:{id}</p>
            <p>Name:{name}</p>
            <p>Phone:{phone}</p>
            <p>Gender:{gender}</p>
            <p>Age:{age}</p>
            <p>Address:{address}</p>
        </div>
    )
}

export default ShowData;