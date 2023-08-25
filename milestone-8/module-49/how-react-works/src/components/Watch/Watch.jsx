import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {

    const [steps, setSteps] = useState(0);
    const stepsCounet = () =>{
        setSteps(steps+1);
    }
    return (
        <div style={{border:'2px solid greenyellow', padding:'9px'}}>
            <h3>This is a watch component</h3>
            <p>Total Number of steps: {steps}</p>
            <button onClick={stepsCounet}>Click to increase step</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;