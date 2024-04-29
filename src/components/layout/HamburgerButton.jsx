import React from 'react';

function HamburgerButton({ isOpen, toggleMenu }) {
    return (
        <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar bar-top"></span>
            <span className="bar bar-middle"></span>
            <span className="bar bar-bottom"></span>
        </button>
    );
}

export default HamburgerButton;