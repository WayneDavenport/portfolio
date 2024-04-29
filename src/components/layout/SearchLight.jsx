import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SpotLight } from '@react-three/drei';

const AnimatedDirectionalLight = () => {
    const [currentLightIndex, setCurrentLightIndex] = useState(0);
    const lightPositions = [
        [-7, 1, 7], // Start position
        [7, 1, -5],
        [3, 1, 5],
        [-3, 1, -7],
        [5, 1, -5],
    ];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const nextIndex = (currentLightIndex + 1) % lightPositions.length;
            setCurrentLightIndex(nextIndex);
        }, 2000); // Change delay as needed (in milliseconds)

        return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, [currentLightIndex]);

    return (
        <directionalLight
            castShadow={true} // Enable shadows (optional)
            position={lightPositions[currentLightIndex]}
            intensity={1}
            color="white"
        />
    );
};

export default AnimatedDirectionalLight;



