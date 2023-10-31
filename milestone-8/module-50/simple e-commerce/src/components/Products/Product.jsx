import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, img, price, ratings, seller, category} = props.allProduct;
    return (
        <div className='product'>
            {/* <p>test</p> */}
            <img src={img} alt="show image" />
            {/* <p>{category}</p> */}
            <div className='product-info'>
                <h6 className='produce-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button className='cart-add'>Add to cart</button>
        </div>
    );
};

export default Product;