import React from 'react';
import './Dial.css';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    // console.log(props);
    const step = props.steps;
    // console.log(props.steps);
    return (
        <div className='dial-style'>
            <h4>This is dial component</h4>
            <p>Show the dial count: {step}</p>
            <Knob step={step}></Knob>
        </div>
    );
};

export default Dial;