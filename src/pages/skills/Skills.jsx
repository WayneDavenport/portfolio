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
                            <li>Next.js</li>
                            <li>Redux</li>
                            <li>Three.js/React-three-fiber</li>
                            <li>React-Spring</li>
                            <li>GSAP</li>
                            <li>Framer Motion</li>
                        </ul>
                    </a.section>

                    <a.section className='skill skill-front'
                        style={{
                            opacity: opacityBack,
                            transform: transformBack,
                            rotateY: '-180deg',
                        }}>
                        <h2 className='skill-type'>Back-End & Mobile</h2>
                        <ul>
                            <li>React Native</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Supabase</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>RESTful APIs</li>
                            <li>WebRTC</li>
                            <li>Google ML Kit</li>
                        </ul>
                    </a.section>

                    <a.section className='skill skill-front'
                        style={{
                            opacity: opacitySide,
                            transform: transformSide,
                            rotateY: '-180deg',
                        }}>
                        <h2 className='skill-type'>Tools & Extras</h2>
                        <ul>
                            <li>Figma</li>
                            <li>Git/Github</li>
                            <li>Expo (Managed Workflow)</li>
                            <li>Vite</li>
                            <li>AI & LLM Prompting</li>
                            <li>On-device AI (ExecuTorch)</li>
                            <li>Atomic Design Patterns</li>
                            <li>Local-First Architecture</li>
                        </ul>
                    </a.section>
                </div>
            </div>

        </>
    );
}
