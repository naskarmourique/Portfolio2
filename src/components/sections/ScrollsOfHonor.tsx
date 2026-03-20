import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Award, ShieldCheck, Star, Bookmark } from 'lucide-react';
import { CERTIFICATIONS } from '@/constants/content';
import Section3DContainer from '../common/Section3DContainer';

const BookModel = () => {
  return (
    <group rotation={[0, -Math.PI / 6, 0]}>
      {/* Book Cover */}
      <mesh position={[0, 0, 0]} scale={[2, 3, 0.4]}>
        <boxGeometry />
        <meshStandardMaterial color="#2a0a0a" roughness={0.8} />
      </mesh>
      {/* Book Pages */}
      <mesh position={[0.1, 0, 0]} scale={[1.8, 2.8, 0.35]}>
        <boxGeometry />
        <meshStandardMaterial color="#F5E9C8" />
      </mesh>
      {/* Spine Decoration */}
      <mesh position={[-1, 0, 0]} scale={[0.1, 3.1, 0.5]}>
        <boxGeometry />
        <meshStandardMaterial color="#d4af37" metalness={1} />
      </mesh>
    </group>
  );
};

const ScrollsOfHonor = () => {
  return (
    <section id="scrolls" className="relative py-24 md:py-32 bg-muted/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Section3DContainer cameraPos={[0, 0, 10]} className="w-full h-full">
           <BookModel />
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
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-jiang text-white uppercase tracking-widest">Scrolls of Honor</h2>
          <p className="font-serif italic text-muted-foreground mt-4 max-w-2xl mx-auto">
            Each scroll, a testament to the pursuit of mastery across the digital realms of Python, AI, and Security.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group cursor-pointer h-[400px] flex items-center justify-center perspective-1000"
            >
              <div className="scroll-unfurl w-full h-full p-8 flex flex-col items-center justify-center text-center shadow-2xl relative transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-4">
                {/* Scroll handle effects */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-background/10 rounded-t-full border-b border-background/20" />
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-background/10 rounded-b-full border-t border-background/20" />

                <div className="p-4 bg-accent/10 border border-accent/20 rounded-full mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                  <Bookmark className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-cinzel text-lg font-bold tracking-widest text-background mb-4 group-hover:text-accent transition-colors">
                  {cert.issuer}
                </h3>
                
                <p className="font-serif italic text-background/80 text-sm leading-relaxed mb-6 flex-1 px-4">
                  "{cert.title}"
                </p>

                <div className="space-y-2 border-t border-background/20 pt-4 w-full">
                  <span className="font-cinzel text-[10px] tracking-widest uppercase text-background/60 block">{cert.date}</span>
                  <div className="font-sans text-[10px] tracking-widest uppercase text-background/40 font-bold overflow-hidden text-ellipsis whitespace-nowrap px-4">
                    ID: {cert.id}
                  </div>
                </div>

                {/* Wax Seal Decoration */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-2 border-accent/50 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                   <ShieldCheck className="w-6 h-6 text-white" />
                </div>

                {/* Aged paper texture */}
                <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollsOfHonor;
