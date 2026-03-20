import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { CAMPAIGNS } from '@/constants/content';
import Section3DContainer from '../common/Section3DContainer';

const MapMarkerModel = () => {
  return (
    <group>
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[2, 2, 0.2, 32]} />
        <meshStandardMaterial color="#2a0a0a" metalness={0.5} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.5, 2, 32]} />
        <meshStandardMaterial color="#8a0303" metalness={0.8} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} />
      </mesh>
    </group>
  );
};

const Campaigns = () => {
  return (
    <section id="campaigns" className="relative py-24 md:py-32 overflow-hidden bg-muted/20">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Section3DContainer cameraPos={[0, 0, 10]} className="w-full h-full">
           <MapMarkerModel />
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
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-jiang text-white uppercase tracking-widest">Campaigns & Battles</h2>
          <p className="font-serif italic text-muted-foreground mt-4 max-w-2xl mx-auto">
            A chronicle of major campaigns across the vast landscapes of web development and data science.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="space-y-12 relative">
          {/* Vertical Path Line */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/5 via-primary to-primary/5 hidden md:block" />

          {CAMPAIGNS.map((campaign, idx) => (
            <div key={campaign.title} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Timeline Marker */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                >
                  <Briefcase className="w-5 h-5 text-primary" />
                </motion.div>
              </div>

              {/* Campaign Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`w-full md:w-1/2 flex flex-col ${idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
              >
                <div className="stone-card p-8 rounded-none border-l-4 border-l-primary group relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary/20 transition-all duration-300 group-hover:border-primary/50 group-hover:w-20 group-hover:h-20" />

                  <span className="font-cinzel text-xs text-primary/80 tracking-widest mb-2 block">{campaign.duration}</span>
                  <h3 className="text-2xl font-jiang text-white mb-1 group-hover:text-primary transition-colors">{campaign.title}</h3>
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 font-cinzel tracking-wider uppercase font-bold ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {campaign.role}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      {campaign.location}
                    </span>
                  </div>

                  <p className="font-serif italic text-muted-foreground mb-8 leading-relaxed">
                    "{campaign.description}"
                  </p>

                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {campaign.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-secondary/30 border border-border/50 text-[10px] uppercase font-cinzel tracking-widest text-primary/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Background noise texture */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
                </div>
              </motion.div>

              {/* Spacer for MD screens */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
