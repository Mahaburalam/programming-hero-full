import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    return (
        <div className='shop-style'>
            <div className="products-style">
                <h2>Product Component</h2>
                <p>Product Length:{products.length}</p>
            </div>
            <div className="cart-style">
                <h2>Cart Component</h2>
            </div>
        </div>
    );
};

export default Shop;