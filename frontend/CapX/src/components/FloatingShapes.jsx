import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, Box, MeshDistortMaterial } from '@react-three/drei';

const FloatingShapes = () => {
    return (
        <Canvas
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
            }}
        >
            {/* Floating Sphere */}
            <Sphere args={[1, 32, 32]} position={[-2, 1, -5]} scale={[1.5, 1.5, 1.5]}>
                <MeshDistortMaterial
                    color="#ff007f"
                    distort={0.3}
                    speed={2}
                    roughness={0}
                />
            </Sphere>

            {/* Floating Cube */}
            <Box args={[1, 1, 1]} position={[3, -1, -6]} scale={[1.5, 1.5, 1.5]}>
                <MeshDistortMaterial
                    color="#00ffbf"
                    distort={0.5}
                    speed={1.5}
                    roughness={0.1}
                />
            </Box>
        </Canvas>
    );
};

export default FloatingShapes;
	