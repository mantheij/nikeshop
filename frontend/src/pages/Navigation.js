import React from 'react';
import './Navigation.css';
import NikeLogo from "../assets/Nike-Logo.png";

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation-menu">
                <li><a href="/signin">SIGN IN</a></li>
                <li><a href="/cart">CART</a></li>
            </ul>
            <ul className={"store-menu"}>
                <li><a href="/">HOME</a></li>
                <li><a href="/shop/all">ALL ITEMS</a></li>
                <li><a href="/shop/men">MEN</a></li>
                <li><a href="/shop/women">WOMEN</a></li>
                <li><a href="/shop/kids">KIDS</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;