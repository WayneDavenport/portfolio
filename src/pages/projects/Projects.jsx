import './projects.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useLazyLoad from './useLazyLoad';

const videoDescription = {
    healingWarriors: "A website I built for a non-profit. I used vanilla JavaScript, HTML, and CSS. I didn't use any frameworks because I didn't know one at the time. We utilized third party plug-in's for email lists, a calendar, and donations. I used a combination of free assets, Ai art, parallax scrolling, a warm color pallet, and subtle CSS and GSAP animations, to deliver the user experience.",
    dashBoard: "A full-stack, to-do list that I made using vanilla front-end code, Express, EJS, MongoDB and Node.js. It can create, read, and delete list items in the database. I also utilized a weather api, and coded a timer as well as a clock for the app. I actually use this quite a bit for myself and plan to keep adding and improving features, simply for personal use.",
    lotto: "A simple lottery number generator using some pseudo roulette strategy. It takes the last 3 months worth of winning numbers, and randomly selects 3 numbers from the top 13 most frequent numbers, and two random numbers from the remaining numbers. I got the idea from a website my mom used, and it turned out to be a great exercise for array manipulation.",
    blog: "A personal blog I’m working on. It contains multiple routed pages for different styles of content, which will have dynamically rendered thumbnails on the home feed. I currently have this feature working using redux. For the 3d assets I used awesome bump to generate texture files from images and mapped them to 3d objects in Three.JS.",
    buddies: 'I was involved in a group portfolio project that split up for various reasons. I built the back-end for it using Node.js, Express, MongoDB and Firebase for authentication. It was a social media web app that would connect immigrants with buddies to get adjusted in a new place. Features I had working included profile creation, sign in/out, user search with filters, and a friend request system. '
}

export function Projects() {

    const videoRef = useRef(null);
    /* useLazyLoad(videoRef); */

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('loadeddata', () => {
                const parent = video.parentElement;
                const parentHeight = parent.offsetHeight;
                const parentWidth = parent.offsetWidth;
                video.style.height = `${parentHeight}px`;
                const videoWidth = video.offsetWidth;
                const leftAdjust = (parentWidth - videoWidth) / 2;
                video.style.left = `${leftAdjust}px`;
            });
        }
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: .60,
                ease: 'power1.out',
                stagger: 0
            }
        });

        tl.fromTo('.vid', {
            x: '-900%',
            opacity: 0.5
        }, {
            x: '50%',
            opacity: 1,
            stagger: 0
        })
            .to('.vid', {
                x: '0%',
                opacity: 1,


            });
    }, []);


    useEffect(() => {

        const tlThree = gsap.timeline({
            defaults: {
                duration: .60,
                ease: 'power1.out',
                stagger: 0
            }
        });



        tlThree.fromTo('.description', {
            x: '900%',
            opacity: 0.5
        }, {
            x: '-50%',
            opacity: 1,
            stagger: 0
        })
            .to('.description', {
                x: '0%',
                opacity: 1
            });
    }, []);

    return (
        <>
            <h1 className='projects-title' >Projects</h1>
            <div className="projects">

                <section className="vids">

                    <div className='vid-wrap'>
                        <h2 className='title'>Healing Warriors Inc.</h2>
                        <div className="vid">
                            <video ref={videoRef} loop autoPlay muted style={{ position: 'absolute', width: '100%', height: '100%' }} poster="/pics/hw-shot.png" >
                                <source src="/vids/healing-vid.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p className='description'>{videoDescription.healingWarriors}</p>
                    </div>

                    <div className='vid-wrap'>
                        <h2 className='title'>To-Do List</h2>
                        <div className="vid">
                            <video ref={videoRef} loop autoPlay muted style={{ position: 'absolute', width: '100%', height: '100%' }} poster="/pics/dash-shot.png">
                                <source src="/vids/dashboard-vid.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p className='description'>{videoDescription.dashBoard}</p>
                    </div>

                    <div className='vid-wrap'>
                        <h2 className='title'>Lottory Generator</h2>
                        <div className="vid">
                            <video ref={videoRef} loop autoPlay muted style={{ position: 'absolute', width: '100%', height: '100%' }} poster="/pics/lotto-shot.png">
                                <source src="/vids/lotto-vid.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p className='description'>{videoDescription.lotto}</p>
                    </div>

                    <div className='vid-wrap'>
                        <h2 className='title'>Personal Blog</h2>
                        <div className="vid">
                            <video ref={videoRef} loop autoPlay muted style={{ position: 'absolute', width: '100%', height: '100%' }} poster="/pics/chimp-shot.png">
                                <source src="/vids/blog-vid.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p className='description'>{videoDescription.blog}</p>
                    </div>

                    <div className='vid-wrap'>
                        <h2 className='title'>Social Media Backend</h2>
                        <div className="vid">
                            <video ref={videoRef} loop autoPlay muted style={{ position: 'absolute', width: '100%', height: '100%' }} poster="/pics/back-shot.png"  >
                                <source src="/vids/buddies-vid.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p className='description'>{videoDescription.buddies}</p>
                    </div>
                </section >
            </div >

        </>
    )
} 