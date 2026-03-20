import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Swords } from 'lucide-react';
import { OATH_CONTENT } from '@/constants/content';
import Section3DContainer from '../common/Section3DContainer';

const ScrollModel = () => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 3.5, 32]} />
        <meshStandardMaterial color="#F5E9C8" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.75, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.4, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -1.75, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.4, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Wax Seal on 3D Scroll */}
      <mesh position={[1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#8a0303" roughness={0.5} />
      </mesh>
    </group>
  );
};

const TheOath = () => {
  return (
    <section id="oath" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <Section3DContainer cameraPos={[0, 0, 8]} className="absolute top-0 right-0 w-full md:w-1/2 h-full">
           <ScrollModel />
        </Section3DContainer>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <Swords className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-jiang text-white mb-2">The Warrior's Oath</h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, rotateX: -20, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="scroll-unfurl p-8 md:p-16 rounded-sm relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
          >
            {/* Wax Seal */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-accent/50 z-20 group"
            >
              <ShieldCheck className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 space-y-8 text-background">
              <div className="text-center mb-10">
                <span className="font-cinzel text-xs tracking-widest uppercase text-background/60 block mb-4">Decree I</span>
                <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-background/90">
                  "{OATH_CONTENT.objective}"
                </p>
              </div>

              <div className="h-[1px] w-full bg-background/20 my-8" />

              <div className="text-center">
                <span className="font-cinzel text-xs tracking-widest uppercase text-background/60 block mb-4">Decree II</span>
                <p className="font-sans text-base md:text-lg leading-relaxed text-background/80">
                  {OATH_CONTENT.summary}
                </p>
              </div>

              <div className="flex justify-center mt-12 gap-8 opacity-50">
                <div className="font-cinzel text-[10px] tracking-widest uppercase">Anno Domini 2026</div>
                <div className="font-cinzel text-[10px] tracking-widest uppercase">M. Naskar</div>
              </div>
            </div>

            {/* Texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheOath;
