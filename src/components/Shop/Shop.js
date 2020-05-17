import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first15 = fakeData.slice(0, 15);

    const [products, setproducts] = useState(first15)
    return (
        <div className = "shop-container">

            <div className ="products-container">
                    {
                        products.map(product => <Product product = {product}></Product>)
                    }
            </div>

            <div className="cart-container">
                    <h3>This is Cart</h3>
            </div>

        </div>
    );
};

export default Shop;