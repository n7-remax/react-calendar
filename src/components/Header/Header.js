import React from 'react';

import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className="Header">
            <div className="container">
                <div className="logo">
                    <a href="#">
                    <img src={logo} alt="logo" />
                    </a>
                </div>
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
