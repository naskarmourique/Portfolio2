import React from 'react';
import { motion } from 'framer-motion';
import { Swords, Scroll, Tablet, Shield, Map as MapIcon, Flame } from 'lucide-react';
import { SKILLS } from '@/constants/content';
import Section3DContainer from '../common/Section3DContainer';

/* ═══════════════════════════════════════════════════════════════
   3D BACKGROUND — Shield model (original from git)
   ═══════════════════════════════════════════════════════════════ */
const ShieldModel = () => {
  return (
    <group rotation={[0, -Math.PI / 4, 0]}>
      {/* Shield Base */}
      <mesh position={[0, 0, 0]} scale={[2, 2.5, 0.2]}>
        <boxGeometry />
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Shield Rim */}
      <mesh position={[0, 0, 0.1]} scale={[2.1, 2.6, 0.1]}>
        <boxGeometry />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
      </mesh>
      {/* Shield Cross Decoration */}
      <mesh position={[0, 0, 0.15]} scale={[0.3, 1.8, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color="#8a0303" metalness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.15]} scale={[1.4, 0.3, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color="#8a0303" metalness={0.5} />
      </mesh>
    </group>
  );
};

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */
const HOUSE_LORE: Record<string, { house: string; words: string; color: string; ember: string }> = {
  swords:  { house: 'House of Tongues',      words: '"The Code that Conquers"',         color: '#c0392b', ember: 'rgba(192,57,43,0.35)' },
  scrolls: { house: 'Order of the Arcane',   words: '"Knowledge is the True Power"',    color: '#8e44ad', ember: 'rgba(142,68,173,0.35)' },
  tablets: { house: 'House of Stone Vaults', words: '"We Guard What Others Forget"',    color: '#2980b9', ember: 'rgba(41,128,185,0.35)' },
  shields: { house: 'Forge of Builders',     words: '"Built to Last, Forged to Scale"', color: '#d4af37', ember: 'rgba(212,175,55,0.35)' },
  map:     { house: 'Order of the Raven',    words: '"Information Flies Far"',          color: '#1abc9c', ember: 'rgba(26,188,156,0.35)' },
};

const ICON_MAP: Record<string, React.ReactNode> = {
  swords:  <Swords  className="w-9 h-9" />,
  scrolls: <Scroll  className="w-9 h-9" />,
  tablets: <Tablet  className="w-9 h-9" />,
  shields: <Shield  className="w-9 h-9" />,
  map:     <MapIcon className="w-9 h-9" />,
};

/* ═══════════════════════════════════════════════════════════════
   DIVIDER
   ═══════════════════════════════════════════════════════════════ */
const SectionDivider = () => (
  <div className="flex items-center gap-4 my-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="w-2 h-2 rotate-45 bg-primary/60" />
    <div className="w-3 h-3 rotate-45 border border-primary/60" />
    <div className="w-2 h-2 rotate-45 bg-primary/60" />
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   FORGE CARD — one per snap position
   ═══════════════════════════════════════════════════════════════ */
const ForgeCard = ({ category, idx }: { category: (typeof SKILLS)[number]; idx: number }) => {
  const lore = HOUSE_LORE[category.type] ?? HOUSE_LORE.swords;
  const icon = ICON_MAP[category.type] ?? ICON_MAP.swords;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 60, damping: 14 }}
      className="flex-none w-[92vw] md:w-[80vw] lg:w-[700px] snap-center"
    >
      <div
        className="relative overflow-hidden group min-h-[520px] md:min-h-[500px] flex flex-col"
        style={{
          background: `linear-gradient(160deg, rgba(12,10,8,0.97) 0%, rgba(20,16,12,0.95) 50%, rgba(15,12,8,0.96) 100%)`,
          border: `1px solid rgba(255,255,255,0.06)`,
          boxShadow: `0 8px 50px rgba(0,0,0,0.6), 0 0 25px ${lore.ember}, inset 0 1px 0 rgba(255,255,255,0.04)`,
        }}
      >
        {/* Top accent */}
        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, transparent 5%, ${lore.color} 50%, transparent 95%)` }} />

        {/* Stone texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-stone.png')" }} />

        {/* Ember particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${10 + i * 16}%`, bottom: 0,
              width: 2 + (i % 2), height: 2 + (i % 2),
              background: lore.color, opacity: 0,
              animation: `emberFloat ${2.5 + i * 0.5}s ease-out ${i * 0.5}s infinite`,
            }}
          />
        ))}

        {/* ── Content ── */}
        <div className="relative z-10 p-8 md:p-10 lg:p-12 flex-1 flex flex-col">

          {/* House label row */}
          <div className="flex items-center justify-between mb-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] font-cinzel"
              style={{ color: lore.color }}
            >
              {lore.house}
            </motion.p>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[10px] md:text-[11px] font-cinzel px-3 py-1 border"
              style={{ color: lore.color, borderColor: `${lore.color}33`, background: `${lore.color}0a` }}
            >
              {category.items.length} weapons
            </motion.span>
          </div>

          {/* Icon + title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-6 mb-4"
          >
            <div
              className="relative flex-shrink-0 w-[72px] h-[72px] md:w-20 md:h-20 rounded-full flex items-center justify-center"
              style={{
                background: `radial-gradient(circle at 35% 30%, ${lore.color}28, ${lore.color}08)`,
                border: `1.5px solid ${lore.color}44`,
                color: lore.color,
                boxShadow: `0 0 20px ${lore.ember}`,
              }}
            >
              {icon}
              <div
                className="absolute inset-[-4px] rounded-full border opacity-25"
                style={{ borderColor: lore.color, borderStyle: 'dashed', animation: 'runeSpin 10s linear infinite' }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold tracking-wide text-white leading-tight">
                {category.category}
              </h3>
              <p className="text-xs md:text-sm font-serif italic mt-2 text-white/30">{lore.words}</p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="my-6 h-px origin-left"
            style={{ background: `linear-gradient(90deg, ${lore.color}66, transparent)` }}
          />

          {/* Forge lore */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-start gap-3 mb-7"
          >
            <Flame className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" style={{ color: lore.color }} />
            <p className="text-xs md:text-sm font-serif italic text-white/35 leading-relaxed">
              Arms forged through battle, sharpened by failure, tempered by time. Each tool stands ready for war.
            </p>
          </motion.div>

          {/* ── SKILL BADGES — staggered pop-in ── */}
          <div className="flex flex-wrap gap-3 mt-auto pt-2">
            {category.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.6, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.45, type: 'spring', stiffness: 200, damping: 18 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="relative px-4 py-2.5 text-[14px] md:text-[16px] font-cinzel font-semibold tracking-wider
                           text-white/80 hover:text-white border border-white/10 hover:border-white/40 shadow-sm
                           transition-colors duration-300 cursor-default group/badge"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)' }}
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l opacity-0 group-hover/badge:opacity-60 transition-opacity" style={{ borderColor: lore.color }} />
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r opacity-0 group-hover/badge:opacity-60 transition-opacity" style={{ borderColor: lore.color }} />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l opacity-0 group-hover/badge:opacity-60 transition-opacity" style={{ borderColor: lore.color }} />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-0 group-hover/badge:opacity-60 transition-opacity" style={{ borderColor: lore.color }} />
                <div className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-0 transition-transform duration-500 pointer-events-none" style={{ background: `linear-gradient(90deg, ${lore.color}18, transparent)` }} />
                <span className="relative z-10">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-[1px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${lore.color}66, transparent)` }} />
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN ARMORY
   ═══════════════════════════════════════════════════════════════ */
const TheArmory = () => {

  return (
    <>
      <style>{`
        @keyframes emberFloat {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          15%  { opacity: 0.8; }
          100% { transform: translateY(-55px) scale(0.2); opacity: 0; }
        }
        @keyframes runeSpin {
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <section
        id="armory"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.02) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(138,3,3,0.03) 0%, transparent 60%)`,
        }}
      >
        {/* ── 3D Background ── */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <Section3DContainer cameraPos={[0, 0, 10]} className="w-full h-full">
            <ShieldModel />
          </Section3DContainer>
        </div>

        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-stone.png')" }} />

        {/* Side accents */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

        <div className="relative z-10">

          {/* ── Section header ── */}
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
                <Swords className="w-5 h-5 text-primary/80" />
                <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>

              <h2 className="text-5xl md:text-6xl font-cinzel text-white mb-4 tracking-wider">
                The Armory
              </h2>

              <SectionDivider />

              <p className="font-serif italic text-white/40 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
                "Every sword, every scroll, every stone tablet — weapons forged in the fires of curiosity
                and honed through the unending battles of code."
              </p>

              <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-white/20 font-cinzel">
                — Scroll to inspect the weapon racks —
              </p>
            </motion.div>
          </div>

          {/* ── Horizontal scroll — one card at a time ── */}
          <div className="relative">
            {/* Edge fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, hsl(0 0% 5%), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg, hsl(0 0% 5%), transparent)' }} />

            <div
              className="flex gap-8 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {/* Spacers to center cards */}
              <div className="flex-none w-[4vw] md:w-[calc(50vw-370px)]" aria-hidden />

              {SKILLS.map((category, idx) => (
                <ForgeCard key={category.category} category={category} idx={idx} />
              ))}

              <div className="flex-none w-[4vw] md:w-[calc(50vw-370px)]" aria-hidden />
            </div>
          </div>

          {/* ── Bottom divider ── */}
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10"
            >
              <SectionDivider />
              <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/15 font-cinzel mt-4">
                ~ End of the Armory ~
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheArmory;
