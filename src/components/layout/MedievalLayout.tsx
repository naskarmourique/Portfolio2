import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sword } from 'lucide-react';
import CustomCursor from '../common/CustomCursor';
import ScrollProgress from '../common/ScrollProgress';
import { Button } from '@/components/ui/button';

interface MedievalLayoutProps {
  children: React.ReactNode;
}

const MedievalLayout: React.FC<MedievalLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "The Oath", href: "#oath" },
    { name: "The Armory", href: "#armory" },
    { name: "Campaigns", href: "#campaigns" },
    { name: "Great Works", href: "#projects" },
    { name: "Scrolls", href: "#scrolls" },
    { name: "The Scholar", href: "#scholar" },
    { name: "The Raven", href: "#raven" },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border py-2 shadow-2xl' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <Sword className="w-6 h-6 text-primary group-hover:rotate-45 transition-transform" />
            <span className="font-cinzel text-lg font-bold tracking-[0.2em] text-primary">MOURIQUE</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-cinzel text-xs font-semibold tracking-widest text-foreground hover:text-primary transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-cinzel text-2xl font-bold tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-20 bg-primary/30" />
            <Sword className="w-6 h-6 text-primary/50" />
            <div className="h-[1px] w-20 bg-primary/30" />
          </div>
          <p className="font-cinzel text-sm text-muted-foreground tracking-widest">
            © 2026 Mourique Naskar — The Chronicle
          </p>
          <p className="font-serif italic text-xs text-muted-foreground mt-2 opacity-50">
            Forged with blood, iron, and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MedievalLayout;
