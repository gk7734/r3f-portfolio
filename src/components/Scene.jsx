import {OrbitControls, useGLTF, useVideoTexture} from "@react-three/drei";
import {Suspense} from "react";
import video from '../assets/video/Iridescent.mp4';
import glb from '../assets/models/plane.glb';
import * as THREE from "three";
import Plane from "./Plane.jsx";

const Scene = () => {
    const model = useGLTF(glb);

    return (
        <>
            <ambientLight intensity={2} />
            <Plane rotation-x={THREE.MathUtils.degToRad(180)} position={[-0.78, 0, 0]} scale-x={0.85} />
        </>
    );
}
useGLTF.preload(glb);

export default Scene;
