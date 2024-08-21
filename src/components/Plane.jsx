
import React, { useRef } from 'react'
import {useGLTF, useVideoTexture} from '@react-three/drei'
import glb from '../assets/models/plane.glb'
import video from "../assets/video/Iridescent.mp4";

export function Plane(props) {
    const texture = useVideoTexture(video);
    const { nodes, materials } = useGLTF(glb)
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                position={[0, 0, 1.671]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1.743, 1.743, 2.488]}
            >
                <meshBasicMaterial map={texture} />
            </mesh>
        </group>
    )
}

useGLTF.preload(glb)

export default Plane;
