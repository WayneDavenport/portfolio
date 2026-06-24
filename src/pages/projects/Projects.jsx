import './projects.css';
import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '../../components/ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
    {
        id: 'mediaq',
        title: 'MediaQ',
        description: "A sophisticated social platform that transforms personal media consumption into a gamified and structured journey. Users can search for movies, TV shows, books, and video games, adding them to a personal queue. The standout feature is a unique 'locking' system that enables users to create dependencies between media items, turning a simple backlog into a personalized progression system. Enhanced by social features like friend recommendations, detailed progress charts, and integrations with services like JustWatch for streaming availability.",
        video: '/vids/mediaq-vid.mkv',
        poster: '/pics/back-shot.png',
        tech: ['Next.js', 'React', 'Supabase', 'NextAuth', 'Framer Motion', 'Radix UI', 'Zustand'],
        link: 'https://www.mediaq.io'
    },
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
        id: 'sharbee',
        title: 'Sharbee',
        hasToggle: true, // Special flag for toggle functionality
        variants: {
            app: {
                label: 'Desktop App',
                description: "A local-first desktop app for sharing files and chatting over your Wi-Fi network. No cloud, no accounts, no internet required. Built with Electron + Next.js, it features streamed file transfers capable of handling multi-GB files with constant memory usage, a host/guest model with automatic mDNS discovery, and zero configuration. Phones and computers connect as satellites through a browser with no install needed. Includes auto-updates via GitHub releases, session history, and native desktop integration with download toasts and folder access.",
                video: '/vids/sharbee-demo.mp4',
                poster: '/pics/sharbee-app-shot.png',
                tech: ['Electron', 'Next.js', 'React', 'Socket.io', 'Express', 'Tailwind CSS', 'Bonjour'],
            },
            website: {
                label: 'Landing Page',
                description: "A sleek, modern landing page showcasing the Sharbee app with responsive design and engaging animations. While simpler than my other projects, it demonstrates my ability to create polished, user-focused interfaces that convert.",
                devNote: "💡 Dev Note: To capture the look of data packets flying through a local network, I recycled the vertical particle engine from my portfolio site. By flipping the spatial X and Y vector trajectories, the particles drift seamlessly across the screen from left to right instead of floating up. To give it a unique software vibe, I mapped an array of random tech icons from React Icons to act as the particle meshes instead of standard geometric circles.",
                video: '/vids/get-sharbee.mp4',
                poster: '/pics/sharbee-website-shot.png',
                tech: ['React', 'Three.js', 'Tailwind CSS', 'React Router', 'Postprocessing', 'Iconify'],
            }
        },
        link: 'https://sharbee.app'
    }
];

export function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const [sharbeeVariant, setSharbeeVariant] = useState('app'); // 'app' or 'website'
    const videoRef = useRef(null);

    // Reset Sharbee variant when changing projects
    useEffect(() => {
        setSharbeeVariant('app');
    }, [currentProject]);

    useEffect(() => {
        setIsVideoLoading(true);
        const video = videoRef.current;
        if (video) {
            video.load();
            video.play().catch(err => console.log('Video autoplay prevented:', err));
        }
    }, [currentProject, sharbeeVariant]);

    const handleVideoLoad = () => {
        setIsVideoLoading(false);
    };

    // Get current project data (handling Sharbee's variants)
    const baseProject = projectsData[currentProject];
    const project = baseProject.hasToggle
        ? { ...baseProject, ...baseProject.variants[sharbeeVariant] }
        : baseProject;

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

                        {/* Toggle Switch for Sharbee */}
                        {baseProject.hasToggle && (
                            <motion.div
                                className="sharbee-toggle-container"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <button
                                    className={`toggle-btn ${sharbeeVariant === 'app' ? 'active' : ''}`}
                                    onClick={() => setSharbeeVariant('app')}
                                >
                                    {baseProject.variants.app.label}
                                </button>
                                <button
                                    className={`toggle-btn ${sharbeeVariant === 'website' ? 'active' : ''}`}
                                    onClick={() => setSharbeeVariant('website')}
                                >
                                    {baseProject.variants.website.label}
                                </button>
                            </motion.div>
                        )}

                        <motion.p
                            className="project-description"
                            variants={descriptionVariants}
                        >
                            {project.description}
                        </motion.p>

                        {/* Dev Note for Sharbee Website */}
                        {baseProject.hasToggle && sharbeeVariant === 'website' && project.devNote && (
                            <motion.p
                                className="dev-note"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {project.devNote}
                            </motion.p>
                        )}

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
