import React from 'react';

const DeviceDetails = (props) => {
    console.log(props);
    return (
        <div>
            <h4>Device Price is : {props.price}</h4>
            <h4>Device Origin From : {props.origin}</h4>
        </div>
    );
};

export default DeviceDetails;