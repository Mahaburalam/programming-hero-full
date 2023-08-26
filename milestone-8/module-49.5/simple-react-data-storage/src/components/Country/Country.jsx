import { Multiplication } from "../../utility/calculate";

const Country = () => {
    const value1 = 12;
    const value2 = 3;
    const output = Multiplication(value1, value2);
    return (
        <div>
            <p>Output of Multiply is : {output}</p>
        </div>
    );
};

export default Country;