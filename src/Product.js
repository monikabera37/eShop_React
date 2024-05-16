import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';


const Product = ({ title, image, price, rating, id }) => {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                title:title,
                price: price,
                rating: rating
            }
        });
    }

    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}

                </div>
            </div>
            <img src={image} alt='productDetails' />
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
