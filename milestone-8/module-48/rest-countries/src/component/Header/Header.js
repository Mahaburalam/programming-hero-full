import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is my website Header</h2>
            <nav>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About Us</li></a>
                <a href="#"><li>Post</li></a>
                <a href="#"><li>Contact</li></a>
            </nav>
        </div>
    );
};

export default Header;