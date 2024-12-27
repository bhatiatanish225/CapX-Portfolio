import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const AnimatedBackground = () => {
    return (
        <Canvas
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
            }}
        >
            {/* Stars for a dynamic background */}
            <Stars
                radius={100} // Sphere radius
                depth={50} // Star field depth
                count={5000} // Number of stars
                factor={4} // Size of stars
                saturation={0} // Star saturation
                fade // Fading effect
            />

            {/* Ambient Light for better visibility */}
            <ambientLight intensity={0.5} />

            {/* Rotating Controls */}
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
};

export default AnimatedBackground;
