import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleWave = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a grid/cloud
  const count = 3000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread points primarily on the XZ plane
      positions[i * 3] = (Math.random() - 0.5) * 25; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock, pointer } = state;
    const t = clock.getElapsedTime();

    if (ref.current) {
        // Subtle rotation based on mouse
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.1, 0.05);
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -pointer.y * 0.1, 0.05);

        // Wave animation
        const positions = ref.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            const x = positions[i * 3];
            const z = positions[i * 3 + 2];
            
            // Calculate wave height based on position and time
            // A mix of sine waves creates a fluid, organic motion
            positions[i * 3 + 1] = 
                Math.sin(x * 0.5 + t * 0.5) * 1.5 + 
                Math.sin(z * 0.5 + t * 0.3) * 1.5 +
                Math.cos(x * 0.2 + z * 0.2 + t * 0.2) * 0.5;
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#88ccff"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

interface Scene3DProps {
    className?: string;
    opacity?: number;
}

const Scene3D: React.FC<Scene3DProps> = ({ className = "", opacity = 1 }) => {
  return (
    <div className={`${className}`} style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
      <Canvas
        camera={{ position: [0, 5, 10], fov: 45 }}
        dpr={[1, 2]} // Handle high DPI screens
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#050505', 5, 20]} />
        <ParticleWave />
      </Canvas>
    </div>
  );
};

export default Scene3D;