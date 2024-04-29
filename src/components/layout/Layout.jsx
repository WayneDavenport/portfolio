import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import "./layout.css"
import HamburgerButton from './HamburgerButton';
import { motion } from "framer-motion"




function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


    useEffect(() => {
        const yoNavs = document.querySelectorAll('.yo-nav');
        const tl = gsap.timeline();
        tl.to(".yo-nav", .5, {
            scale: 1,
            y: 0,
            repeat: 0,
            opacity: 1,
            yoyo: true,
            stagger: {
                amount: .5,
                from: 0
            }
        });
        setTimeout(() => {
            yoNavs.forEach(yoNavs => yoNavs.classList.add('yo-trans'))
        }, 1000);
    }, []);

    return (
        <div className="nav-div">
            <nav className={`nav-burger ${isOpen ? 'open' : ''}`} >
                <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
                <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                    <motion.li
                        className="yo-nav"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link to='/'>Home</Link>
                    </motion.li>
                    <motion.li
                        className="yo-nav"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link to='/about-me'>About Me</Link>
                    </motion.li>
                    <motion.li
                        className="yo-nav"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link to='/skills'>Skills</Link>
                    </motion.li>
                    <motion.li
                        className="yo-nav"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link to='/projects'>Projects</Link>
                    </motion.li>
                    <motion.li
                        className="yo-nav"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link to='/contact'>Contact</Link>
                    </motion.li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>

        </div>
    );
}

export default Layout;