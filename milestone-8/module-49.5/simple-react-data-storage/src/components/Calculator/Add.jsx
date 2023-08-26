// import Addition from '../../utility/calculate';
import {Addition} from '../../utility/calculate';

const Add = () => {
    const num1 = 32;
    const num2 = 12;
    const result = Addition(num1, num2);
    return (
        <div>
            <p>Output of addition is : {result}</p>
        </div>
    );
};

export default Add;