import React from 'react';
import './NikeLogo.css';
import NikeLogo from "../assets/Nike-Logo.png";

function Navigation() {

    return (
        <nav className="navigation">
                    <img id={"nikeimg"} src={NikeLogo} alt="Nike" />

        </nav>
    );
}

export default Navigation;
