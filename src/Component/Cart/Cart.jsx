import React from 'react'
import React, { useState } from 'react';

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const newItem = { ...product };
        setCartItems([...cartItems, newItem]);
      };
  return (
    <div>
    <h2>Cart</h2>
    {cartItems.map((item, index) => (
      <div key={index}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    ))}
  </div>
  )
}

export default Cart