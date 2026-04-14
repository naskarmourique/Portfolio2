import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';

interface Section3DContainerProps {
  children: React.ReactNode;
  cameraPos?: [number, number, number];
  className?: string;
}

const InteractiveGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group ref={groupRef}>{children}</group>
    </Float>
  );
};

const Section3DContainer: React.FC<Section3DContainerProps> = ({ 
  children, 
  cameraPos = [0, 0, 5], 
  className = "w-full h-full" 
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={`${className} pointer-events-none`}>
      {inView && (
        <Canvas 
          shadows={false} 
          dpr={[1, 1.2]} 
          gl={{ 
            antialias: false, 
            alpha: true, 
            powerPreference: "high-performance",
            stencil: false,
            depth: true 
          }} 
          style={{ pointerEvents: 'none' }}
          frameloop="always"
        >
          <PerspectiveCamera makeDefault position={cameraPos} fov={40} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#d4af37" />
          <pointLight position={[-10, -5, 5]} intensity={0.5} color="#8a0303" />
          
          <Suspense fallback={null}>
            <InteractiveGroup>
              {children}
            </InteractiveGroup>
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default Section3DContainer;
