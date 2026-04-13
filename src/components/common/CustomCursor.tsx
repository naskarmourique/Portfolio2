import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 100 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains('cursor-pointer');

      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none select-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className={`relative transition-transform duration-300 ${isPointer ? 'scale-150' : 'scale-100'}`}>
          {/* Main sword-like shape */}
          <div className="absolute -left-1/2 -top-1/2 flex items-center justify-center">
            <div className="w-1 h-8 bg-primary rounded-full origin-top transform rotate-45" />
            <div className="w-4 h-1 bg-primary rounded-full absolute top-1" />
          </div>
          {/* Outer glow ring */}
          <div className={`w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 ${isPointer ? 'opacity-100 scale-125' : 'opacity-50 scale-100'}`}>
            <div className="w-1 h-1 bg-primary rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
