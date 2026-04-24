import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map as MapIcon, Compass, X, Sword, Shield, Scroll, Tablet, Flame, Star, Send, Trophy } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', name: 'The Chronicle', icon: <Sword className="w-4 h-4" />, label: 'Home' },
  { id: 'oath', name: 'The Oath', icon: <Flame className="w-4 h-4" />, label: 'About' },
  { id: 'armory', name: 'The Armory', icon: <Shield className="w-4 h-4" />, label: 'Skills' },
  { id: 'campaigns', name: 'Campaigns', icon: <Trophy className="w-4 h-4" />, label: 'Experience' },
  { id: 'projects', name: 'Great Works', icon: <Star className="w-4 h-4" />, label: 'Projects' },
  { id: 'scrolls', name: 'Scrolls of Honor', icon: <Scroll className="w-4 h-4" />, label: 'Certificates' },
  { id: 'scholar', name: 'Scholar Path', icon: <Tablet className="w-4 h-4" />, label: 'Education' },
  { id: 'achievements', name: 'Achievements', icon: <Trophy className="w-4 h-4" />, label: 'Awards' },
  { id: 'raven', name: 'The Raven', icon: <Send className="w-4 h-4" />, label: 'Contact' },
];

const FastTravel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed right-6 bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-[1001] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            className="mb-4 p-3 bg-background/90 backdrop-blur-xl border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col gap-2 min-w-[200px]"
            style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-stone.png')",
            }}
          >
            <div className="px-3 py-2 border-b border-primary/10 mb-2">
              <p className="font-cinzel text-[10px] tracking-[0.3em] text-primary uppercase font-bold text-center">
                Fast Travel Map
              </p>
            </div>

            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative flex items-center gap-4 px-4 py-3 transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={`transition-transform duration-300 ${activeSection === section.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {section.icon}
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-cinzel text-[11px] font-bold tracking-widest uppercase leading-none mb-1">
                    {section.name}
                  </span>
                  <span className="font-serif italic text-[10px] opacity-40 leading-none">
                    {section.label}
                  </span>
                </div>

                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 border-l-2 border-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 overflow-hidden ${
          isOpen ? 'bg-primary text-primary-foreground rotate-90' : 'bg-background border border-primary/30 text-primary'
        }`}
      >
        <div className="absolute inset-0 bg-primary/10 animate-pulse" />
        <div className="relative z-10">
          {isOpen ? <X className="w-6 h-6" /> : <Compass className="w-7 h-7" />}
        </div>
        
        {/* Decorative Ring */}
        <div className={`absolute inset-1 rounded-full border border-primary/20 border-dashed ${!isOpen && 'animate-[spin_10s_linear_infinite]'}`} />
      </motion.button>
      
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <div className="px-3 py-1 bg-background/80 backdrop-blur-md border border-primary/20 text-[10px] font-cinzel tracking-[0.2em] text-primary whitespace-nowrap pointer-events-none">
            OPEN MAP
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FastTravel;
