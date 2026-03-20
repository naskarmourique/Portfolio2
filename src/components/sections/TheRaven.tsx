import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Globe, Send, Ghost, Shield, Layout } from 'lucide-react';
import { CONTACT } from '@/constants/content';
import { Button } from '@/components/ui/button';
import Section3DContainer from '../common/Section3DContainer';

const RavenModel = () => {
  return (
    <group>
      {/* Abstract Raven/Bird shape */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <coneGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.5, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[1.5, 0.2, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.5, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[1.5, 0.2, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Glowing Eyes */}
      <mesh position={[0.15, 0.8, 0.2]}>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="#8a0303" emissive="#8a0303" emissiveIntensity={5} />
      </mesh>
      <mesh position={[-0.15, 0.8, 0.2]}>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="#8a0303" emissive="#8a0303" emissiveIntensity={5} />
      </mesh>
    </group>
  );
};

const TheRaven = () => {
  return (
    <section id="raven" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Section3DContainer cameraPos={[0, 0, 5]} className="w-full h-full">
           <RavenModel />
        </Section3DContainer>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center p-10 border-4 border-primary/20 bg-muted/30 shadow-2xl relative overflow-hidden group"
          >
            {/* Animated Raven (Placeholder Icon) */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mb-10"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-colors" />
              <Ghost className="w-32 h-32 text-white stroke-[0.5px] group-hover:text-accent transition-colors relative z-10" />
            </motion.div>

            <h3 className="text-3xl font-jiang text-white mb-6 group-hover:text-primary transition-colors uppercase tracking-widest">Send the Raven</h3>
            <p className="font-serif italic text-xl text-muted-foreground leading-relaxed max-w-sm mb-12">
              "{CONTACT.cta}"
            </p>

            <div className="flex gap-6">
              {[
                { icon: <Linkedin />, link: CONTACT.linkedin, label: "Herald's Banner" },
                { icon: <Github />, link: CONTACT.github, label: "Tome of Code" },
                { icon: <Globe />, link: CONTACT.portfolio, label: "Castle Gate" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-4 bg-secondary/50 border border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-full shadow-2xl group/social"
                  aria-label={social.label}
                >
                  <div className="w-6 h-6 transition-transform group-hover/social:rotate-12">{social.icon}</div>
                </motion.a>
              ))}
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
          </motion.div>

          {/* Right Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
               <h2 className="text-4xl md:text-5xl font-jiang text-white mb-4">Contact the Scribe</h2>
               <div className="h-1 w-24 bg-primary" />
            </div>

            <div className="space-y-8">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-16 h-16 bg-muted/50 border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
                  <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="font-cinzel text-xs tracking-widest text-muted-foreground uppercase block mb-1">Email via Carrier Raven</span>
                  <span className="text-xl font-sans font-bold text-white group-hover:text-primary transition-colors">{CONTACT.email}</span>
                </div>
              </a>

              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-16 h-16 bg-muted/50 border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
                  <Phone className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="font-cinzel text-xs tracking-widest text-muted-foreground uppercase block mb-1">Voice through the Wind</span>
                  <span className="text-xl font-sans font-bold text-white group-hover:text-primary transition-colors">{CONTACT.phone}</span>
                </div>
              </a>
            </div>

            <div className="pt-10">
              <Button asChild className="w-full md:w-auto px-12 py-8 bg-accent hover:bg-accent/80 text-white rounded-none font-cinzel text-lg tracking-[0.2em] group">
                <a href={`mailto:${CONTACT.email}`}>
                   <Send className="w-6 h-6 mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                   Forge a Connection
                </a>
              </Button>
            </div>

            {/* Inscription */}
            <div className="p-8 border border-primary/10 bg-muted/20 relative">
               <p className="font-serif italic text-muted-foreground text-sm">
                 "In the grand tapestry of the digital age, every connection is a thread of fate. Let us weave something legendary together across the vast expanses of code and data."
               </p>
               <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary/20" />
               <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheRaven;
