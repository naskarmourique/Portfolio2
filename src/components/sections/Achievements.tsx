import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Users, Lightbulb, CheckCircle, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS, SOFT_SKILLS } from '@/constants/content';

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-jiang text-white uppercase tracking-widest">Achievements & Lore</h2>
          <p className="font-serif italic text-muted-foreground mt-4 max-w-2xl mx-auto">
            A chronicle of milestones achieved and attributes acquired through the fires of experience.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="stone-card p-10 rounded-none border-t-4 border-t-accent group relative overflow-hidden h-full flex flex-col items-center text-center"
            >
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-full mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all shadow-2xl">
                {idx === 0 ? <Star className="w-10 h-10" /> : idx === 1 ? <Users className="w-10 h-10" /> : <Lightbulb className="w-10 h-10" />}
              </div>
              
              <h3 className="text-2xl font-jiang text-white mb-6 group-hover:text-accent transition-colors">{ach.title}</h3>
              <p className="font-serif italic text-muted-foreground leading-relaxed flex-1">
                "{ach.content}"
              </p>

              {/* Decorative Banner Handle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-16 bg-accent/30 rounded-full blur-[2px] -translate-y-1" />
              
              {/* Background texture for the banner */}
              <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="relative border border-primary/20 p-12 overflow-hidden bg-background shadow-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-10"
          >
            <h3 className="font-cinzel text-lg font-bold tracking-[0.3em] text-primary uppercase">Attributes of Character</h3>
            <div className="h-[1px] w-24 bg-primary mx-auto mt-4 opacity-30" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {SOFT_SKILLS.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-secondary/20 border border-border group/skill cursor-default flex items-center gap-3 hover:border-primary/50 transition-all shadow-inner"
              >
                <CheckCircle className="w-4 h-4 text-primary/30 group-hover/skill:text-primary transition-colors" />
                <span className="font-cinzel text-xs tracking-widest text-muted-foreground group-hover/skill:text-white font-bold transition-colors">
                   {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Background alchemical symbols effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-screen flex items-center justify-center">
            <Shield className="w-64 h-64 text-primary stroke-[0.5px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
