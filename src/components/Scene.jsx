import * as THREE from "three";
import Plane from "./Plane.jsx";
import {useEffect, useState} from "react";
import {Html} from "@react-three/drei";
import Sub from "./Sub.jsx";

const Scene = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    console.log(windowSize.width)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let responsivePosition;
    let responsiveScale;
    let htmlPosition;

    if (windowSize.width >= 1800) {
        responsiveScale = 1.38;
        responsivePosition = -1
        htmlPosition = [-1.875, -0.55, 0];
    } else if (windowSize.width >= 1500) {
        responsiveScale = 1.36;
        responsivePosition = -1
        htmlPosition = [-1.836, -0.61, 0];
    } else if (windowSize.width >= 1024) {
        responsiveScale = 1.29;
        responsivePosition = -1
        htmlPosition = [-1.72, -0.6, 0];
    } else if (windowSize.width >= 820) {
        responsiveScale = 1.09;
        responsivePosition = -0.8;
        htmlPosition = [-1.44, 0.02, 0];
    } else {
        responsiveScale = 0.34;
        responsivePosition = -0.1
    }

    return (
        <>
            <ambientLight intensity={2} />
            <Plane
                rotation-x={THREE.MathUtils.degToRad(180)}
                position={[
                    responsivePosition,
                    0.01,
                    0,
                ]}
                scale={[
                    responsiveScale,
                    1,
                    1,
                ]}
            />
            <Html position={htmlPosition}>
                <Sub />
            </Html>
        </>
    );
}

export default Scene;
