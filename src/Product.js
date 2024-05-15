import React from 'react';
import "./Product.css";
import { FaStar } from "react-icons/fa";


const Product = () => {
    return (
        <div className='product'>
            <div className="product_info">
                <p>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>11.98</strong>
                </p>
                <div className="product_rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt='productDetails'  />
            <button>Add to Basket</button>

        </div>
    )
}

export default Product
