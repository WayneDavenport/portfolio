import './skills.css';
import React, { useState, useEffect } from 'react';
import { useSpring, a } from '@react-spring/web';
import { useLocation } from 'react-router-dom';

export function Skills() {
    const [flipped, setFlipped] = useState(false);
    const location = useLocation();

    // Animate the card flip when the component mounts or the route changes
    useEffect(() => {
        setFlipped(true);
    }, [location]);

    // Create separate animations for each element with staggered delays
    const { transform: transformFront, opacity: opacityFront } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
        delay: 0,
    });

    const { transform: transformBack, opacity: opacityBack } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
        delay: 222,
    });

    const { transform: transformSide, opacity: opacitySide } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
        delay: 444,
    });

    return (
        <>
            <div className='skills-wrap'>

                <div><h1 className='skills-title'>My Tech Stack</h1></div>
                <div id='skill-tree'>
                    <a.section className='skill skill-front'
                        style={{
                            opacity: opacityFront,
                            transform: transformFront,
                            rotateY: '-180deg',
                        }}>
                        <h2 className='skill-type'>Front-End & Libraries</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SASS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Three.js/React-three-fiber</li>
                            <li>React-Spring</li>
                            <li>GSAP</li>
                        </ul>
                    </a.section>

                    <a.section className='skill skill-front'
                        style={{
                            opacity: opacityBack,
                            transform: transformBack,
                            rotateY: '-180deg',
                        }}>
                        <h2 className='skill-type'>Back-End</h2>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Templating Engines (EJS, PUG)</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </a.section>

                    <a.section className='skill skill-front'
                        style={{
                            opacity: opacitySide,
                            transform: transformSide,
                            rotateY: '-180deg',
                        }}>
                        <h2 className='skill-type'>Side Dishes</h2>
                        <ul>
                            <li>Figma</li>
                            <li>Git/Github</li>
                            <li>Krita</li>
                            <li>Ai & LLM Prompting &#128540;</li>
                            <li>C-Panel</li>
                        </ul>
                    </a.section>
                </div>
            </div>

        </>
    );
}
