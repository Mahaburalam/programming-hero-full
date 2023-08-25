import React from 'react';
import './Knob.css';

const Knob = (props) => {
    const step = props.step;
    return (
        <div className='knob-style'>
            <h4>This is knob component</h4>
            <p>Count of knob is : {step}</p>
        </div>
    );
};

export default Knob;