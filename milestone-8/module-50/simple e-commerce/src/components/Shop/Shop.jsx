import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';

const Shop = () => {
    // call data using fetch
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <p>Total Number of Products: {products.length}</p> */}
                {
                    products.map(product=><Product 
                    key={product.id}
                    allProduct={product}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <p>This is oder part</p>
            </div>
        </div>
    );
};

export default Shop;