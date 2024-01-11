import React from 'react';
import { addition, division } from '../../utilities';
import Country from '../Country/Country';
// import addition from '../../utilities';
// import {addition, division} from '../../utilities';

const Shops = () => {
    const firstValue = 232;
    const secondValue = 123;
    const output = addition(firstValue, secondValue);
    const divisionResult = division(firstValue, secondValue);
    return (
        <div>
            <h2>Total amount of shopping:{output} <small>tk</small></h2>
            <Country></Country>
            <h3>Division of two number is:{divisionResult}</h3>
            
        </div>
    );
};

export default Shops;