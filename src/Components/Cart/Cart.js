import React, { useState } from 'react';
import './cart-list.css';

const CartList = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 10, quantity: 1, Image: 'https://images.creativemarket.com/0.1.0/ps/6082888/1820/1214/m1/fpnw/wm1/un3hccflscqwz5yctttbdmaplnkc7tls4ydqqf9ick5dwcakigujzrwm2j8saw49-.jpg?1552905460&s=185526a2d3a8f86b8d10831b3eecb7a9'},
    { id: 2, name: 'Burger', price: 5, quantity: 2, Image: 'https://images3.alphacoders.com/939/939772.jpg'},
    { id: 3, name: 'Pasta', price: 8, quantity: 1, Image: 'https://www.pepperdelight.com/wp-content/uploads/2016/01/ChickenPasta1.jpg'},
    { id: 4, name: 'Chicken Lollipop', price: 9, quantity: 2, Image: 'https://spicytamarind.com.au/wp-content/uploads/2020/09/Chicken-Lollipop-11-2048x1643.jpg'}
  ])

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="background-container">
      <div className="background-image"></div>
      <div className="cart-list">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.Image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
            <p className="subtotal">Subtotal: ₹{item.price * item.quantity}</p>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.75" 
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 5.5A.5.5 0 0 1 3 5h10a.5.5 0 0 1 .5.5V6h-11v-.5zM4 7v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7H4z" />
                <path
                  fillRule="evenodd"
                  d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1h-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1H0V3zm2 2v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H2z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="total-bill">
          <div className="total-bill-item">
            <span>Total Items:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="total-bill-item">
            <span>Total Amount:</span>
            <span>₹{calculateTotalPrice()}</span>
          </div>
          <button className="proceed-button">Proceed to Pay</button>
        </div>
    </div>
  );
};

export default CartList;
