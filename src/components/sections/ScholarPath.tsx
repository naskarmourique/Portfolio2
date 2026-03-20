import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Star, Sparkles, MapPin } from 'lucide-react';
import { EDUCATION } from '@/constants/content';

const ScholarPath = () => {
  return (
    <section id="scholar" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background stars / sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700" />
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1500" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-jiang text-white uppercase tracking-widest">The Scholar's Path</h2>
          <p className="font-serif italic text-muted-foreground mt-4 max-w-2xl mx-auto">
            A journey of enlightenment across the halls of academia, forging the foundations of wisdom.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="stone-card p-10 rounded-none border-l-4 border-l-primary relative group overflow-hidden"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                     <GraduationCap className="w-6 h-6 text-primary group-hover:scale-125 transition-transform" />
                     <h3 className="text-2xl font-jiang text-white group-hover:text-primary transition-colors">{edu.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-cinzel tracking-widest text-muted-foreground font-bold">
                    <span className="flex items-center gap-2">
                       <MapPin className="w-4 h-4 text-accent" />
                       Kolkata
                    </span>
                    <span className="w-1 h-1 bg-primary/30 rounded-full" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="px-6 py-3 bg-secondary/30 border border-primary/20 flex flex-col items-center justify-center min-w-[120px] group-hover:border-primary transition-colors">
                   <span className="font-cinzel text-[10px] tracking-widest text-primary/70 mb-1 uppercase">Grade</span>
                   <span className="text-2xl font-jiang text-white group-hover:scale-110 transition-transform">{edu.cgpa || edu.percentage}</span>
                </div>
              </div>

              {edu.focus && (
                <div className="relative z-10 p-6 bg-background/50 border border-border/50 rounded-none border-dashed group-hover:border-primary/20 transition-colors">
                  <span className="font-cinzel text-[10px] tracking-widest text-primary mb-4 block uppercase font-bold">Focus of Enlightenment</span>
                  <div className="flex flex-wrap gap-4">
                    {edu.focus.split(',').map((f) => (
                      <span key={f} className="flex items-center gap-2 text-sm font-serif italic text-muted-foreground group-hover:text-white transition-colors">
                        <Star className="w-3 h-3 text-primary/30 group-hover:text-primary transition-colors" />
                        {f.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Background scroll texture */}
              <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarPath;
