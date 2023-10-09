import React from 'react';
import "./Header.css";
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header-style'>
            <img src={logo} alt="website main logo" />
            {/* <h4>This is header</h4> */}
            <div className='nav-menu'>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;