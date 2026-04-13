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
        <Section3DContainer cameraPos={[0, 0, 10]} className="w-full h-full">
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

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory pt-4 px-4 -mx-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="stone-card relative flex flex-col p-8 rounded-none border border-primary/20 hover:border-primary/50 group overflow-hidden transition-all duration-700 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] flex-none w-[85vw] md:w-[45vw] lg:w-[350px] snap-center shrink-0"
            >
              {/* Rack Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10 w-full">
                <div className="p-4 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-500 shrink-0">
                  {getIcon(category.type)}
                </div>
                <div className="flex-1 border-b border-primary/20 group-hover:border-primary/60 transition-colors pb-2 overflow-hidden">
                  <h3 className="font-cinzel text-lg md:text-xl font-bold tracking-[0.1em] text-white/90 group-hover:text-primary transition-colors truncate">{category.category}</h3>
                </div>
              </div>

              {/* Items Grid */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative px-3 py-2 bg-secondary/30 border border-primary/10 hover:border-primary/50 text-xs md:text-sm font-sans tracking-wide transition-all overflow-hidden flex items-center gap-2 group/item text-muted-foreground hover:text-white backdrop-blur-md cursor-default pointer-events-auto shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_rgba(212,175,55,1)] transition-all duration-300" />
                    <span className="relative z-10 whitespace-nowrap">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Background lighting effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none" />
              <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheArmory;
