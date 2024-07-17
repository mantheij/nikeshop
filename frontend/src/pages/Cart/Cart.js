import React, {Component} from 'react';
import PropTypes from 'prop-types';
import product from "../Shop/Product";

class Cart extends Component {
    render() {
        return (
            <div>
                <h1 className={'cart-title'}>CART</h1>
                <p className={'cart-text'}>text</p>

            </div>
        );
    }
}

Cart.propTypes = {};

export default Cart;