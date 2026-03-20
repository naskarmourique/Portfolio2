import React, { useRef, Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { HERO_CONTENT } from '@/constants/content';
import { Button } from '@/components/ui/button';

const BattlefieldScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const swordRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (swordRef.current) {
      swordRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      swordRef.current.position.y = Math.sin(time * 1) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#d4af37" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8a0303" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={20} size={2} speed={0.5} color="#ff4500" />
      
      {/* Central Floating Symbol - A Shield/Sword representation */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <group ref={swordRef}>
          {/* Blade */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.2, 3, 0.05]} />
            <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Crossguard */}
          <mesh position={[0, -1.2, 0]}>
            <boxGeometry args={[1, 0.2, 0.2]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
          </mesh>
          {/* Hilt */}
          <mesh position={[0, -1.6, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.8]} />
            <meshStandardMaterial color="#2a0a0a" metalness={0.5} roughness={0.8} />
          </mesh>
          {/* Pommel */}
          <mesh position={[0, -2, 0]}>
            <sphereGeometry args={[0.15]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
          </mesh>
        </group>
      </Float>

      {/* Abstract Mystical Elements */}
      <mesh ref={meshRef} position={[5, 2, -5]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial color="#8a0303" speed={2} distort={0.4} />
      </mesh>
      
      <mesh position={[-5, -2, -8]} rotation={[0, 0, Math.PI / 4]}>
        <octahedronGeometry args={[2]} />
        <meshStandardMaterial color="#1a1a1a" wireframe />
      </mesh>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % HERO_CONTENT.titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }} dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
          <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
            <BattlefieldScene />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <div className="flex items-center gap-4 justify-center">
            <div className="h-[2px] w-12 md:w-24 bg-primary" />
            <span className="font-cinzel text-xs md:text-sm tracking-[0.5em] text-primary uppercase font-bold">The Chronicle Of</span>
            <div className="h-[2px] w-12 md:w-24 bg-primary" />
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-jiang font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          {HERO_CONTENT.name.split(" ").map((word, i) => (
            <span key={i} className="inline-block hover:text-primary transition-colors cursor-default">
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <div className="h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-serif italic text-primary/80"
            >
              「{HERO_CONTENT.titles[titleIndex]}」
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12"
        >
          <Button 
            asChild
            variant="outline" 
            className="group relative border-primary text-primary hover:bg-primary hover:text-primary-foreground font-cinzel px-8 py-6 rounded-none tracking-widest overflow-hidden"
          >
            <a href="#oath">
              <span className="relative z-10">Unfurl the Saga</span>
              <motion.div 
                className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-cinzel text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"
        />
      </motion.div>

      {/* Fog Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-[200%] h-full animate-fog-move-slow bg-[url('https://www.transparenttextures.com/patterns/foggy-birds.png')] opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
