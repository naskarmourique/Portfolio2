import React from 'react';
import { motion } from 'framer-motion';
import { Swords, Scroll, Tablet, Shield, Map as MapIcon } from 'lucide-react';
import { SKILLS } from '@/constants/content';
import Section3DContainer from '../common/Section3DContainer';

const ShieldModel = () => {
  return (
    <group rotation={[0, -Math.PI / 4, 0]}>
      {/* Shield Base */}
      <mesh position={[0, 0, 0]} scale={[2, 2.5, 0.2]}>
        <boxGeometry />
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Shield Rim */}
      <mesh position={[0, 0, 0.1]} scale={[2.1, 2.6, 0.1]}>
        <boxGeometry />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
      </mesh>
      {/* Shield Cross Decoration */}
      <mesh position={[0, 0, 0.15]} scale={[0.3, 1.8, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color="#8a0303" metalness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.15]} scale={[1.4, 0.3, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color="#8a0303" metalness={0.5} />
      </mesh>
    </group>
  );
};

const TheArmory = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'swords': return <Swords className="w-6 h-6" />;
      case 'scrolls': return <Scroll className="w-6 h-6" />;
      case 'tablets': return <Tablet className="w-6 h-6" />;
      case 'shields': return <Shield className="w-6 h-6" />;
      case 'map': return <MapIcon className="w-6 h-6" />;
      default: return <Swords className="w-6 h-6" />;
    }
  };

  return (
    <section id="armory" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Section3DContainer cameraPos={[5, 0, 10]} className="w-full h-full">
           <ShieldModel />
        </Section3DContainer>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <Swords className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-jiang text-white">The Armory</h2>
          <p className="font-serif italic text-muted-foreground mt-4 max-w-2xl mx-auto">
            Each tool, a weapon forged in the fires of curiosity and honed through the battles of code.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="stone-card p-6 rounded-none relative group overflow-hidden"
            >
              {/* Rack Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-border/50 pb-4">
                <div className="p-3 bg-secondary/50 border border-primary/30 rounded-full group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {getIcon(category.type)}
                </div>
                <h3 className="font-cinzel text-lg font-bold tracking-widest text-primary">{category.category}</h3>
              </div>

              {/* Items Grid */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                    className="px-4 py-2 bg-background border border-border/30 hover:border-primary/50 text-xs md:text-sm font-sans tracking-wide transition-all cursor-default flex items-center gap-2 group/item shadow-inner"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors" />
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* Background texture for the rack */}
              <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheArmory;
