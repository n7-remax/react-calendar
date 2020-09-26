import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className="Header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
