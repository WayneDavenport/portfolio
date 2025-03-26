import React from 'react';
import QRCode from 'react-qr-code';
import './mediaq.css';

export function MediaQ() {
    return (
        <div className="mediaq-page">
            <h1>MediaQ</h1>
            <div className="mediaq-content">
                <div className="mediaq-hero">
                    <h2>Revolutionizing Media Management</h2>
                    <p className="hero-text">
                        Welcome to Mediaq, your central hub for organizing your movies, books, video games, and more.  Keep track of everything you want to watch, read, or play in one convenient place..
                    </p>
                </div>
                <div className="qr-section">
                    <div className="qr-code-container">
                        <QRCode value="https://www.mediaq.io" size={256} />
                    </div>
                    <a href="https://www.mediaq.io" className="mediaq-link">
                        www.mediaq.io
                    </a>
                </div>
            </div>
        </div>
    );
} 