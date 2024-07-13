import React from 'react';
import './navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation-menu">
                <li><a href="/">SEARCH</a></li>
                <li><a href="/shops">SIGN IN</a></li>
                <li><a href="/about">CART</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;