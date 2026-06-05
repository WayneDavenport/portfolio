import './projects.css';
import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '../../components/ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
    {
        id: 'healing-warriors',
        title: 'Healing Warriors Inc.',
        description: "A website I built for a non-profit organization. I used vanilla JavaScript, HTML, and CSS, utilizing third-party plugins for email lists, calendars, and donations. I created an immersive experience using free assets, AI art, parallax scrolling, a warm color palette, and subtle CSS and GSAP animations to deliver an engaging user experience that effectively communicates the organization's mission.",
        video: '/vids/healing-vid.mp4',
        poster: '/pics/hw-shot.png',
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Parallax'],
        link: 'https://www.healingwarriorsinc.com'
    },
    {
        id: 'picto-nomo',
        title: 'Picto-Nomo',
        description: "A local-first photo transfer app with on-device AI categorization. Transfer photos from your phone to your PC over local WiFi using WebRTC - all without any cloud services! Features dual-mode AI (Google ML Kit for image labeling with heuristic fallback) with 11 smart categories, custom category creation, chunked P2P transfer with real-time progress tracking, and a polished UX with preview, filters, and batch operations. Built with Expo (React Native) for mobile and React + Vite for the web receiver.",
        video: '/vids/picto-dimo.mp4',
        poster: '/pics/back-shot.png',
        tech: ['React Native', 'Expo', 'Google ML Kit', 'WebRTC', 'React', 'Vite', 'Socket.io'],
        link: null
    },
    {
        id: 'mediaq',
        title: 'MediaQ',
        description: "A sophisticated social platform that transforms personal media consumption into a gamified and structured journey. Users can search for movies, TV shows, books, and video games, adding them to a personal queue. The standout feature is a unique 'locking' system that enables users to create dependencies between media items, turning a simple backlog into a personalized progression system. Enhanced by social features like friend recommendations, detailed progress charts, and integrations with services like JustWatch for streaming availability.",
        video: '/vids/mediaq-vid.mkv',
        poster: '/pics/back-shot.png',
        tech: ['Next.js', 'React', 'Supabase', 'NextAuth', 'Framer Motion', 'Radix UI', 'Zustand'],
        link: 'https://www.mediaq.io'
    }
];

export function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        setIsVideoLoading(true);
        const video = videoRef.current;
        if (video) {
            video.load();
            video.play().catch(err => console.log('Video autoplay prevented:', err));
        }
    }, [currentProject]);

    const handleVideoLoad = () => {
        setIsVideoLoading(false);
    };

    const project = projectsData[currentProject];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const badgeVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
        }
    };

    const videoContainerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
    };

    return (
        <div className="projects-container">
            {/* Project Navigation */}
            <nav className="project-nav">
                {projectsData.map((proj, index) => (
                    <button
                        key={proj.id}
                        className={`project-nav-btn ${currentProject === index ? 'active' : ''}`}
                        onClick={() => setCurrentProject(index)}
                    >
                        {proj.title}
                    </button>
                ))}
            </nav>

            {/* Project Content */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentProject}
                    className="project-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Video Section */}
                    <div className="project-video-section">
                        <motion.div 
                            className="project-video-container"
                            variants={videoContainerVariants}
                        >
                            {isVideoLoading && (
                                <div className="video-loading-spinner">
                                    <div className="spinner"></div>
                                </div>
                            )}
                            <video 
                                ref={videoRef}
                                loop 
                                autoPlay 
                                muted 
                                playsInline
                                poster={project.poster}
                                className="project-video"
                                onLoadedData={handleVideoLoad}
                                onCanPlay={handleVideoLoad}
                            >
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                        {/* Tech Stack Badges */}
                        <motion.div 
                            className="tech-badges"
                            variants={containerVariants}
                        >
                            {project.tech.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    variants={badgeVariants}
                                    custom={index}
                                >
                                    <Badge 
                                        variant={index % 4 === 0 ? 'default' : index % 4 === 1 ? 'secondary' : index % 4 === 2 ? 'success' : 'warning'}
                                    >
                                        {tech}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Description Section */}
                    <div className="project-description-section">
                        <motion.h1 
                            className="project-title"
                            variants={titleVariants}
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p 
                            className="project-description"
                            variants={descriptionVariants}
                        >
                            {project.description}
                        </motion.p>
                        {project.link && (
                            <motion.a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-link"
                                variants={descriptionVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Visit Site →
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
