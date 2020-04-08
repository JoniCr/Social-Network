import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav parent">
            <div className="nav__profile nav__elem"><a href="#" className="nav__link">Profile</a></div>
            <div className="nav__messages nav__elem"><a href="#" className="nav__link">Messages</a></div>
            <div className="nav__news nav__elem"><a href="#" className="nav__link">News</a></div>
            <div className="nav__music nav__elem"><a href="#" className="nav__link">Music</a></div>
            <div className="nav__settings nav__elem"><a href="#" className="nav__link">Settings</a></div>
        </nav>
    );

}


export default Navbar;