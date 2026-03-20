import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

interface Section3DContainerProps {
  children: React.ReactNode;
  cameraPos?: [number, number, number];
  className?: string;
}

const InteractiveGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.5, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.3, 0.05);
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
  return (
    <div className={`${className} pointer-events-none`}>
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ pointerEvents: 'none' }}>
        <PerspectiveCamera makeDefault position={cameraPos} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#d4af37" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <InteractiveGroup>
            {children}
          </InteractiveGroup>
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
          <Environment preset="night" />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} makeDefault />
      </Canvas>
    </div>
  );
};

export default Section3DContainer;
