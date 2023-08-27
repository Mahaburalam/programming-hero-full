/* eslint-disable react/prop-types */
import React from 'react';
import "./User.css";

const User = (props) => {
    console.log(props);
    const {id, address, name, username, email, website, phone, company} = props.userData;
    return (
        <div className='user-style'>
            <p>User ID : {id}</p>
            <p>Name : {name}</p>
            <p>User Name : {username}</p>
            <p>Email : {email}</p>
            <p>Address : {address.city}</p>
            <p>Road No : {address.street}</p>
            <p>Zip Code : {address.zipcode}</p>
            <p>Website : {website}</p>
            <p>Phone No : {phone}</p>
            <p>Company Name : {company.name}</p>
        </div>
    );
};

export default User;