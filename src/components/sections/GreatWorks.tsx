import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Globe, Star } from 'lucide-react';
import { PROJECTS } from '@/constants/content';
import { Button } from '@/components/ui/button';
import Section3DContainer from '../common/Section3DContainer';

const ArtifactModel = () => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#8a0303" metalness={0.5} opacity={0.5} transparent />
      </mesh>
    </group>
  );
};

const GreatWorks = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Section3DContainer cameraPos={[0, 0, 5]} className="w-full h-full">
          <ArtifactModel />
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
            <Layout className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-jiang text-white">The Great Works</h2>
          <p className="font-serif italic text-muted-foreground mt-4 max-w-2xl mx-auto">
            A gallery of artifacts, each representing a quest for excellence in the digital realm.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="stone-card flex flex-col h-full rounded-none border border-primary/20 hover:border-primary/50 group relative overflow-hidden"
            >
              {/* Image / Header Placeholder with Archway Effect */}
              <div className="h-48 w-full bg-muted/30 relative overflow-hidden flex items-center justify-center text-primary/20 border-b border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50 z-10 pointer-events-none" />

                {/* @ts-ignore - image exists on project */}
                {project.image ? (
                  <img
                    // @ts-ignore
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                ) : (
                  <Layout className="w-24 h-24 stroke-[1px] group-hover:scale-110 transition-transform duration-700 z-10" />
                )}

                {/* Decorative Arch */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-background/50 rounded-b-[100%] border-b border-border/30" />

                {/* Project Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 border border-primary/30 text-[10px] uppercase font-cinzel tracking-widest text-primary font-bold backdrop-blur-sm shadow-2xl">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative z-10">
                <h3 className="text-xl font-jiang text-white mb-4 group-hover:text-primary transition-colors flex items-center justify-between gap-4">
                  {project.title}
                  <Star className="w-4 h-4 text-primary/30 group-hover:text-primary transition-colors" />
                </h3>

                <p className="font-serif italic text-muted-foreground mb-8 line-clamp-3 text-sm flex-1">
                  "{project.description}"
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-secondary/30 border border-border/30 text-[10px] uppercase font-cinzel tracking-widest text-primary/70">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link ? (
                    <Button asChild className="flex-1 rounded-none bg-primary hover:bg-primary/80 text-primary-foreground font-cinzel font-bold tracking-widest gap-2">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4" />
                        View
                      </a>
                    </Button>
                  ) : (
                    <Button disabled type="button" onClick={() => { }} className="flex-1 rounded-none border border-border bg-transparent text-muted-foreground font-cinzel font-bold tracking-widest cursor-not-allowed opacity-50">
                      Proprietary
                    </Button>
                  )}
                  <Button asChild variant="outline" className="rounded-none border-border hover:border-primary/50 bg-transparent text-primary px-3 group/btn">
                    <a href={project.github || "https://github.com/mourique-naskar"} target="_blank" rel="noopener noreferrer" aria-label="Github Link">
                      <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover bloom effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreatWorks;
