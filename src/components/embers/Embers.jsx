import { useLoader, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const Particles = () => {
  const particles = useRef();
  const [positions, setPositions] = useState([]);

  const texture = useLoader(THREE.TextureLoader, "/textures/zap.png");

  const maxHeight = 2.8;
  const minOpacity = 0.2;
  const maxOpacity = 1;

  useFrame((_, delta) => {

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += delta * 0.1; // Move particles upwards


      if (positions[i + 1] >= maxHeight) {
        // Reset the particle's position to a random height below maxHeight
        positions[i + 1] = Math.random() * (maxHeight - 5);

        // Adjust the particle's opacity based on its current position -linear interpolation        
        const opacity = positions[i + 1] / maxHeight * (maxOpacity - minOpacity) + minOpacity;
      }
    }

    // Update the geometry with the new positions
    particles.current.geometry.attributes.position.needsUpdate = true;
    particles.current.geometry.attributes.position.array.set(positions);

    ;
  });

  const verticesAmount = 600;
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
        alphaMap={texture}
        depthTest={false}
      />
    </points>
  );
};

export default Particles;
