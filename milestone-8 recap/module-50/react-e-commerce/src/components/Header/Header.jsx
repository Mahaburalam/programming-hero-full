import React from 'react';
import "./Header.css";
import Logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='header-style'>
            <img src={Logo} alt='logo'></img>
            <div className="nav-style">
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;