import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fill the loading bar over roughly 2 seconds
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        onLoadingComplete();
                    }, 500); // slight pause at 100% before fading out
                    return 100;
                }
                // Smooth random increment
                return Math.min(prev + Math.floor(Math.random() * 3) + 1, 100);
            });
        }, 25);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-background pointer-events-auto"
            style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 0.95) 0%, rgba(5, 5, 5, 1) 100%)"
            }}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-stone.png')]" />

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-primary font-jiang text-6xl md:text-8xl mb-6 tracking-[0.2em] relative"
                >
                    <span className="gold-glow text-transparent bg-clip-text bg-gradient-to-br from-primary via-yellow-200 to-accent">MN</span>
                    <motion.div
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 text-white blur-md mix-blend-screen"
                    >
                        MN
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-cinzel text-muted-foreground text-xs md:text-sm tracking-[0.4em] uppercase mb-10 gold-glow"
                >
                    Forging the Realm
                </motion.div>

                <div className="flex flex-col items-center w-64 md:w-80">
                    {/* Loading Bar Container */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="h-[2px] bg-border rounded-full overflow-hidden relative w-full"
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-primary"
                            style={{ width: `${progress}%` }}
                        />
                        {/* Glow for the bar */}
                        <div className="absolute top-0 left-0 h-full bg-primary blur-sm opacity-80" style={{ width: `${progress}%` }} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-4 font-cinzel text-[10px] tracking-widest text-primary/70"
                    >
                        {progress}%
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
