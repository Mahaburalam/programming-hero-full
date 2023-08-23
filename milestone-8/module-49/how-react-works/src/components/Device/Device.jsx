import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    console.log(props);
    return (
        <div style={{border:'2px solid blue', margin:'12px', padding:'7px'}}>
            <h2>My Device Name is : {props.name}</h2>
            <DeviceDetails price={props.price} origin={props.origin} key = {"test"}></DeviceDetails>
        </div>
    );
};

export default Device;