import React from 'react';
import './Navigation.css';
import NikeLogo from "../../assets/Nike-Logo.png";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div id="nike-container">
            <Link to={'/'}>
                <img id="nikeimg" src={NikeLogo} alt="Nike"/>
            </Link>
            <ul className="store-menu">
                <li><a href="/">HOME</a></li>
                <li><a href="/shop/all">ALL ITEMS</a></li>
                <li><a href="/shop/men">MEN</a></li>
                <li><a href="/shop/women">WOMEN</a></li>
                <li><a href="/shop/kids">KIDS</a></li>
            </ul>
        </div>
    );
}

export default Navigation;
