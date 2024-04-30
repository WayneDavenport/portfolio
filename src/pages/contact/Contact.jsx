import React from 'react';
import './contact.css';

const icons = {
    phone: './pics/phone-icon.png',
    email: './pics/email-icon.png',
    github: './pics/git-icon.png',
    linkedin: './pics/linkedin-icon.png',
};


export function Contact() {
    return (
        <div className="contact-wrap">
            <h1>Contact Info</h1>
            <ul className="contact-methods">
                <li className="contact-method">
                    <img src={icons.email} alt="Email Icon" /> wayne86davenport@gmail.com
                </li>
                <li className="contact-method">
                    <img src={icons.phone} alt="Phone Icon" /> (979)235-7001
                </li>

                <li className="contact-method">
                    <img src={icons.github} alt="GitHub Icon" /> WayneDavenport
                </li>
                <li className="correct-link contact-method">
                    <img src={icons.linkedin} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/wayne-davenport-webdev">
                        Wayne Davenport (Web Dev)
                    </a>
                </li>
            </ul>
        </div>
    )
} 