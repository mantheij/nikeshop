import React from 'react';
import './Cart.css';
import { useCart } from './CartContext';

const CartItem = ({ item, onRemove }) => (
    <div className="cart-item">
        <span>{item.name} </span>
        <span>{item.price}€ </span>
        <button className="remove" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
);

const Cart = () => {
    const { cartItems, removeItem, total } = useCart();

    return (
        <div className='cart-container'>
            <h1>YOUR CART</h1>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeItem} />
            ))}
            <div className={'total'}>TOTAL: {total.toFixed(2)}€</div>
            <button>ORDER NOW</button>
        </div>
    );
};

export default Cart;
