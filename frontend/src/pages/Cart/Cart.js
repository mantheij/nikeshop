import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext';

class Cart extends Component {
    render() {
        return (
            <CartContext.Consumer>
                {({ cart }) => (
                    <div>
                        <h1 className={'title-text'}>CART</h1>
                        <div className={'grid-container'}>
                            {cart.length > 0 ? (
                                cart.map((product, index) => (
                                    <div key={index} className={'cart-item'}>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                    </div>
                                ))
                            ) : (
                                <p style={{ marginLeft: '160%' }}>Your cart is empty</p>
                            )}
                        </div>
                    </div>
                )}
            </CartContext.Consumer>
        );
    }
}

Cart.propTypes = {};

export default Cart;
