import React from 'react';
import { storeSessionData } from '../../utilities/session-data';

const Products = () => {
    const allProducts = [
        {id:'1', name:"Mobile Phone", price:"20100"},
        {id:'2', name:"Laptop", price:"310000"},
        {id:'3', name:"Smart Watch", price:"7000"},
        {id:'4', name:"Air Buds", price:"23000"},
        {id:'5', name:"Tab", price:"70100"},
    ]
    return (
        <div>
            {
                allProducts.map(product => <Gagate
                key={product.id}
                gagates={product}
                ></Gagate>)
            }
        </div>
    );
};

const Gagate = (props) =>{
    // console.log(props);
    const {id, name, price} = props.gagates;
    // event handler
    const addToCard = (id) =>{
        // console.log("card added", id);
        // localStorage.setItem(id, 1);
        storeSessionData(id);
    }
    const addToCardWithParam = () =>{
        addToCard(id);
    }
    return(
        <div className='border rounded m-4 p-4 bg-primary text-white'>
            <p>ID: {id}</p>
            <p>Gagates Name: {name}</p>
            <p>Price: {price}</p>
            {/* <button onClick={addToCardWithParam}>Add to card</button> */}
            <button onClick={() =>addToCard(id)}>Add to card</button>
        </div>
    )  
}

export default Products;