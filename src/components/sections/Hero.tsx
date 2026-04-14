import React, { useRef, Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';
import { HERO_CONTENT } from '@/constants/content';
import { Button } from '@/components/ui/button';

const BattlefieldScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const swordRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
    }
    if (swordRef.current) {
      swordRef.current.rotation.y = time * 0.3;
      swordRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2.5} color="#d4af37" />
      <pointLight position={[-10, -5, 5]} intensity={1} color="#8a0303" />
      <Sparkles count={150} scale={20} size={1.5} speed={0.4} color="#ffaa00" opacity={0.6} />

      {/* Cinematic Ground Grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} transparent opacity={0.4} />
      </mesh>
      <gridHelper args={[100, 50, "#1a1a1a", "#0a0a0a"]} position={[0, -3.9, 0]} />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <group ref={swordRef} scale={1.2}>
          {/* Blade with reflection */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.18, 2.8, 0.04]} />
            <meshStandardMaterial
              color="#666666"
              metalness={1}
              roughness={0.15}
              emissive="#222222"
              emissiveIntensity={0.5}
            />
          </mesh>
          {/* Ornate Crossguard */}
          <mesh position={[0, -1, 0]}>
            <boxGeometry args={[1, 0.18, 0.18]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.05} />
          </mesh>
          {/* Leather Hilt */}
          <mesh position={[0, -1.4, 0]}>
            <cylinderGeometry args={[0.08, 0.1, 0.8, 16]} />
            <meshStandardMaterial color="#2a0a0a" metalness={0.3} roughness={0.9} />
          </mesh>
          {/* Golden Pommel */}
          <mesh position={[0, -1.8, 0]}>
            <octahedronGeometry args={[0.15]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.05} />
          </mesh>
        </group>
      </Float>

      {/* Spatially distant mystical elements */}
      <mesh ref={meshRef} position={[8, 3, -10]}>
        <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
        <meshStandardMaterial
          color="#8a0303"
          metalness={0.8}
          roughness={0.2}
          wireframe
          opacity={0.3}
          transparent
        />
      </mesh>

      {/* Floating debris for depth */}
      <group>
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh
            key={i}
            position={[Math.sin(i) * 15, Math.cos(i) * 10, -Math.random() * 20]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.5} />
          </mesh>
        ))}
      </group>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % HERO_CONTENT.titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" ref={(el) => {
      containerRef.current = el as HTMLDivElement;
      inViewRef(el);
    }} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {inView && (
          <Canvas
            shadows={false}
            dpr={[1, 1.2]}
            gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
            style={{ pointerEvents: 'none' }}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
            <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
              <BattlefieldScene />
            </Suspense>
          </Canvas>
        )}
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
            <a href="/Mourique-CV.pdf" download="Mourique-CV.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">Unfurl the Scroll</span>
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
