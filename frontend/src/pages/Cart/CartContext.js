import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, itemQuantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + itemQuantity } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: itemQuantity }];
            }
        });
    };

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
        <CartContext.Provider value={{ cartItems, addItem, removeItem, total }}>
            {children}
        </CartContext.Provider>
    );
};
