import React from 'react';
import './css/Cart.css';

function Cart({ cart }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt={product.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{product.name}</h2>
              <p className="cart-item-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
