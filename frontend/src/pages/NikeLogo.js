import React from 'react';
import './NikeLogo.css';
import NikeLogo from "../assets/Nike-Logo.png";
import {Link} from "react-router-dom";

function Navigation() {

    return (
        <nav className="navigation">
            <Link to={'/'}>
                <img id={"nikeimg"} src={NikeLogo} alt="Nike"/>

            </Link>
        </nav>
    );
}

export default Navigation;
