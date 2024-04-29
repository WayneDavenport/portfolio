import React, { useState, useEffect } from "react";
import Scene from "./Scene.jsx";
import { useLocation } from 'react-router-dom';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import "./scene.css"




const PositionedScene = () => {

    return (
        <div id="canvas-wrap" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -2 }}>
            <Canvas>
                <Scene />
            </Canvas>
        </div>
    );
};

export default PositionedScene;
