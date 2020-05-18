import React from 'react';

const Cart = (props) => {
    const cart = props.cart;


    const round = (value) => value.toFixed(2);

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    const totalRoundPrice = parseFloat(round(totalPrice));
    let vatTax = 0;

    if(totalPrice < 100) {
        vatTax = totalPrice * 0.1;
    } else if (totalPrice > 100 && totalPrice < 1000 ) {
        vatTax = totalPrice * 0.15;
    } else {
        vatTax = totalPrice * 0.2;
    }

    let shipping = 0;
    if (totalPrice === 0) {
        shipping = 0;
    } else if(totalPrice < 100) {
        shipping = 3;
    } else if (totalPrice > 100 && totalPrice < 1000 ) {
        shipping = 15;
    } else {
        shipping = 35;
    }

    const totalRoundVat = parseFloat(round(vatTax));
    const grandTotal = totalRoundPrice + totalRoundVat + shipping;
    const grandRoundTotal = parseFloat(round(grandTotal));
    

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Added: {cart.length}</p>
            <p>Products Price: ${totalRoundPrice}</p>
            <p>Vat+Tax: ${totalRoundVat}</p>
            <p>Shipping: ${shipping}</p>
    <h4>Grand Total: ${grandRoundTotal}</h4>
        </div>
    );
};

export default Cart;