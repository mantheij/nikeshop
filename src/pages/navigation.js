import React from 'react';
import './navigation.css';
import NikeLogo from "../assets/Nike-Logo.png";

function Navigation() {
    return (
        <nav className="navigation">
            <div className={'logo-container'}>
                <img id={"nike"} src={NikeLogo} alt="Nike"/>
            </div>
            <ul className="navigation-menu">
            <li><a href="/">SEARCH</a></li>
                <li><a href="/signin">SIGN IN</a></li>
                <li><a href="/cart">CART</a></li>
            </ul>
            <ul className={"store-menu"}>
                <li><a href="/shop/">ALL ITEMS</a></li>
                <li><a href="/shop/men">MEN</a></li>
                <li><a href="/shop/men">WOMEN</a></li>
                <li><a href="/shop/men">KIDS</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;