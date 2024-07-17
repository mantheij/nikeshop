import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation2() {
    const location = useLocation();
    const showSearch = location.pathname.startsWith('/shop');

    return (
        <nav className="navigation">
            <ul className="navigation-menu">
                {showSearch && (
                    <li>
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="search-input"
                            onChange={(e) => {
                                const event = new CustomEvent('search', { detail: e.target.value });
                                window.dispatchEvent(event);
                            }}
                        />
                    </li>
                )}
                <li><a href="/signin">SIGN IN</a></li>
                <li><a href="/Cart/Cart">CART</a></li>
            </ul>
        </nav>
    );
}

export default Navigation2;
