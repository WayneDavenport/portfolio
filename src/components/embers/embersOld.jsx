import { useLoader, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const Particles = () => {
    const particles = useRef();
    const [positions, setPositions] = useState([]);

    useFrame((_, delta) => {
        // Update the y position of each particle
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += delta * 0.1; // Move particles upwards
        }
        // Update the geometry with the new positions
        particles.current.geometry.attributes.position.needsUpdate = true;
        particles.current.geometry.attributes.position.array.set(positions);
    });

    const verticesAmount = 500;
    const positionArray = new Float32Array(verticesAmount * 3);

    for (let i = 0; i < verticesAmount * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 10.0;
    }

    // Store the initial positions
    useEffect(() => {
        setPositions(Array.from(positionArray));
    }, []);

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positionArray.length / 3}
                    itemSize={3}
                    array={positionArray}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                transparent
                depthTest={false}
            />
        </points>
    );
};

export default Particles;
