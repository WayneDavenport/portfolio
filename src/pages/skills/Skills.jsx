import './skills.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  // Grid positions: [column, row]
  { id: 'html', name: 'HTML', icon: '🏗️', gridPos: [3, 10], description: 'Structure & Semantic Markup' },
  { id: 'css', name: 'CSS', icon: '🎨', gridPos: [3, 8], description: 'Styling & Layout' },
  { id: 'tailwind', name: 'Tailwind', icon: '💨', gridPos: [1, 7], description: 'Utility-First CSS' },
  { id: 'javascript', name: 'JavaScript', icon: '⚡', gridPos: [3, 6], description: 'Core Programming' },
  { id: 'threejs', name: 'Three.js', icon: '🎮', gridPos: [5, 5], description: '3D Graphics' },
  { id: 'node', name: 'Node.js', icon: '🟢', gridPos: [3, 4], description: 'Server Runtime' },
  { id: 'mongodb', name: 'MongoDB', icon: '🍃', gridPos: [1, 4], description: 'NoSQL Database' },
  { id: 'express', name: 'Express', icon: '🚀', gridPos: [5, 2], description: 'Web Framework' },
  { id: 'react', name: 'React', icon: '⚛️', gridPos: [3, 2], description: 'UI Library' },
  { id: 'nextjs', name: 'Next.js', icon: '▲', gridPos: [2, 1], description: 'React Framework' },
  { id: 'react-native', name: 'React Native', icon: '📱', gridPos: [4, 1], description: 'Mobile Development' }
];

const connections = [
  { from: 'html', to: 'css' },
  { from: 'css', to: 'tailwind' },
  { from: 'css', to: 'javascript' },
  { from: 'javascript', to: 'threejs' },
  { from: 'javascript', to: 'node' },
  { from: 'node', to: 'mongodb' },
  { from: 'node', to: 'express' },
  { from: 'node', to: 'react' },
  { from: 'react', to: 'nextjs' },
  { from: 'react', to: 'react-native' }
];

// Framer Motion pathLength breaks on perfectly vertical/horizontal paths.
// Adding a 1px nudge to the bezier control point fixes it invisibly.
const makePath = (x1, y1, x2, y2) => {
  const cpx = (x1 + x2) / 2 + (x1 === x2 ? 1 : 0);
  const cpy = (y1 + y2) / 2 + (y1 === y2 ? 1 : 0);
  return `M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`;
};

const SkillNode = ({ skill, isUnlocked, delay, nodeRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      ref={nodeRef}
      className={`skill-node ${isUnlocked ? 'unlocked' : 'locked'}`}
      style={{
        gridColumn: skill.gridPos[0],
        gridRow: skill.gridPos[1]
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isUnlocked ? 1 : 0.5, 
        opacity: isUnlocked ? 1 : 0.3 
      }}
      transition={{ delay: delay * 0.15, duration: 0.5, type: 'spring' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
      
      {isHovered && isUnlocked && (
        <motion.div 
          className="skill-tooltip"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {skill.description}
        </motion.div>
      )}
    </motion.div>
  );
};

export function Skills() {
  const [unlockedSkills, setUnlockedSkills] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [nodePositions, setNodePositions] = useState({});
  const containerRef = useRef(null);
  const nodeRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skillsData.forEach((skill, index) => {
        setTimeout(() => {
          setUnlockedSkills(prev => new Set([...prev, skill.id]));
        }, index * 150);
      });
    }
  }, [isVisible]);

  // Calculate node positions once after visibility — don't re-run on every unlock
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      const positions = {};
      Object.keys(nodeRefs.current).forEach(skillId => {
        const node = nodeRefs.current[skillId];
        if (node) {
          const rect = node.getBoundingClientRect();
          const containerRect = containerRef.current?.querySelector('.skill-tree')?.getBoundingClientRect();
          if (containerRect) {
            positions[skillId] = {
              x: rect.left - containerRect.left + rect.width / 2,
              y: rect.top - containerRect.top + rect.height / 2
            };
          }
        }
      });
      setNodePositions(positions);
    }, 100);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const isSkillUnlocked = (skillId) => unlockedSkills.has(skillId);

  return (
    <div className="skills-container" ref={containerRef}>
      <h1 className="skills-title">Skill Tree</h1>
      
      <div className="skill-tree-layout">
      <div className="skill-tree-wrapper">
        {/* SVG Connection Lines */}
        <svg className="connection-lines">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {connections.map((conn, index) => {
            const fromPos = nodePositions[conn.from];
            const toPos = nodePositions[conn.to];
            const isActive = isSkillUnlocked(conn.from) && isSkillUnlocked(conn.to);

            if (!fromPos || !toPos) return null;

            return (
              <motion.path
                key={`${conn.from}-${conn.to}`}
                d={makePath(fromPos.x, fromPos.y, toPos.x, toPos.y)}
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: isActive ? 1 : 0,
                  opacity: isActive ? 0.8 : 0.15
                }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              />
            );
          })}
        </svg>

        {/* Skill Grid */}
        <div className="skill-tree">
          {skillsData.map((skill, index) => (
            <SkillNode 
              key={skill.id} 
              skill={skill} 
              isUnlocked={isSkillUnlocked(skill.id)}
              delay={index}
              nodeRef={(el) => nodeRefs.current[skill.id] = el}
            />
          ))}
        </div>
      </div>

      {/* Other Tech Card — sits beside the tree */}
      <motion.div 
        className="other-tech-card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <h3>Tools & Extras</h3>
        <ul>
          <li>🎯 Git/GitHub</li>
          <li>🎨 Figma</li>
          <li>⚡ Vite</li>
          <li>📦 Expo</li>
          <li>🧠 AI & LLM</li>
          <li>🤖 On-Device AI</li>
          <li>🏗️ Atomic Design</li>
          <li>📡 Local-First</li>
          <li>🔄 Redux/Zustand</li>
          <li>🌐 WebRTC</li>
          <li>🔥 Supabase</li>
          <li>🗄️ PostgreSQL</li>
        </ul>
      </motion.div>
      </div>{/* end skill-tree-layout */}
    </div>
  );
}
