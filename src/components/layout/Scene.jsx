import { OrbitControls, SpotLight, } from "@react-three/drei";
import Particles from "../embers/Embers";
import { Ground } from "../ground/Ground";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFrame, useThree } from '@react-three/fiber';
import { isMobile } from 'react-device-detect';



import useMediaQuery from "./useMediaQuery"; //custom hook


const pathToIndexMap = {
    "/": 0,
    "/about-me": 1,
    "/skills": 2,
    "/projects": 3,
    "/contact": 4,
};

const cameraPositions = [
    { x: 3.5, y: 0, z: 0 },
    { x: 3, y: 0, z: 3 },
    { x: 0, y: 0.6, z: 3 },
    { x: -3, y: -0.5, z: 3 },
    { x: 2, y: 0.85, z: 1 },
];

const Scene = () => {
    const { pathname } = useLocation(); // Correctly obtain pathname from useLocation
    const { camera } = useThree();
    const [targetPosition, setTargetPosition] = useState(cameraPositions[0]);


    useEffect(() => {
        // Determine the target position based on the current pathname
        const index = pathToIndexMap[pathname];
        if (index !== undefined) {
            setTargetPosition(cameraPositions[index]);
        }
    }, [pathname]);

    useFrame(() => {
        // Smoothly animate the camera to the target position
        camera.position.lerp(targetPosition, 0.05);
        camera.lookAt(0, 0, 0);
        // Adjust camera FOV based on mobile detection
        const mobileFOV = 108; // Set FOV for mobile devices
        const desktopFOV = 60; // Set FOV for desktops
        camera.fov = isMobile ? mobileFOV : desktopFOV;
        camera.updateProjectionMatrix();


    });

    return (
        <>
            <OrbitControls />


            <spotLight
                color={[.14, 0.5, 0.95]}
                intensity={3}
                coneAngle={80}
                angle={0.8}
                penumbra={0.5}
                position={[-7, -1.2, 7]} ////
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[.14, 0.5, 0.95]}
                intensity={3}
                coneAngle={80}
                angle={0.8}
                penumbra={0.5}
                position={[-7, -1.2, -7]} ////
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[.14, 0.5, 0.95]}
                intensity={3}
                coneAngle={80}
                angle={0.8}
                penumbra={0.5}
                position={[7, -1.2, -7]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[.14, 0.5, 0.95]}
                intensity={3}
                coneAngle={80}
                angle={0.8}
                penumbra={0.5}
                position={[7, -1.2, 7]}
                castShadow
                shadow-bias={-0.0001}
            />
            <directionalLight
                color={[5.14, 5.05, 5.75]}
                position={[1, 4.75, -1]}
            />

            <ambientLight intensity={0.75} />
            <Particles />
            <Ground />
        </>
    );
};

export default Scene;
