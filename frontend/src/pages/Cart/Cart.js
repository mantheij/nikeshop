import React from 'react';
import ReactDOM from 'react-dom';
import './Cart.css'
import { useState } from 'react';

const item = ({ item, onRemove }) => (
    <div className="cart-item">
        <span>{item.name} </span>
        <span>{item.price}€ </span>
        <button className="remove" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
)

const Cart = () => {
const[cartItems, setCartItems] = useState([]);

const addItem = (item) => {
    setCartItems((prevItems) => {
        const existingItem = prevItems.find(i => i.id === item.id);
        if(existingItem) {
            return prevItems.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
        } else {
            return [...prevItems, { ...item, quantity: 1 }];
        }
    })
}

const removeItem = (itemId) => {
    setCartItems((prevItems) => 
    prevItems
        .map(item =>
            item.id === itemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
        .filter(item => item.quantity > 0)
    );
};

const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <div className='cart-container'>
        <h1>YOUR CART</h1>
        {cartItems.map((item) => (
            <Item key={item.id} item={item} onRemove={removeItem} />
        ))}
        <div className={'total'}>TOTAL: {total.toFixed(2)}€</div>
        <button>ORDER NOW</button>
    </div>
  )
}

export default Cart