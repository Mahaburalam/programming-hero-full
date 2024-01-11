import React from 'react';
import { multiply, subtraction } from '../../utilities';

const Country = () => {
    const firstNumber = 23;
    const secondNumber = 7;
    const multiplyResult = multiply(firstNumber , secondNumber);
    const subResult = subtraction(firstNumber, secondNumber);
    return (
        <div>
            <p>Multiply of two number is:{multiplyResult}</p>
            <p>Subtraction of two number is:{subResult}</p>
        </div>
    );
};

export default Country;