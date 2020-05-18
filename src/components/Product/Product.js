import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    return (
        <div className = "product">

            <div className="image">
                <img src={props.product.img} alt=""/>
            </div>

            <div className="information">
            <h3>{props.product.name}</h3>
            <br/>
            <p><small>by: {props.product.seller}</small></p>
            <p><>Only {props.product.stock} left in stock - Order soon!</></p>
            <br/>
            <h4>Price: {props.product.price}</h4>
            <button onClick = {() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />  Buy Now</button>
            </div>
        </div>
    );
};

export default Product;