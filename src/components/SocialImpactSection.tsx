import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FOUNDATION_PILLARS } from '../data/websiteData';
import {
  Heart,
  ExternalLink,
  Smartphone,
  Sparkles,
  HeartPulse,
  Leaf,
  Scale,
  GraduationCap,
  ChevronRight
} from 'lucide-react';

export const SocialImpactSection: React.FC = () => {
  const [selectedPillarNumber, setSelectedPillarNumber] = useState<number>(1);

  const getPillarIcon = (number: number) => {
    switch (number) {
      case 1:
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 3:
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 4:
        return <Leaf className="w-5 h-5 text-emerald-400" />;
      case 5:
        return <Scale className="w-5 h-5 text-sky-400" />;
      case 6:
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      default:
        return <Heart className="w-5 h-5 text-amber-400" />;
    }
  };

  const selectedPillar =
    FOUNDATION_PILLARS.find((p) => p.number === selectedPillarNumber) || FOUNDATION_PILLARS[0];

  return (
    <section id="foundation" className="py-20 bg-slate-50 dark:bg-[#071120] text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Background Hero Image for Foundation Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/foundation_impact_bg_1786478922041.jpg"
          alt="Mama Mias Foundation Community Impact Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 dark:opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-slate-50/90 dark:bg-[#071120]/80 bg-gradient-to-b from-slate-50/95 dark:from-[#071120]/85 via-slate-50/80 dark:via-[#071120]/80 to-slate-50/95 dark:to-[#071120]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md">
            <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Mama Mia’s Foundation • Social Impact Wing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ESG, Sustainability & Community Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 font-medium">
            Every commercial transaction on Mama Mia’s Soko directly feeds into sustainable socio-economic development across East Africa.
          </p>

          <div className="mt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://foundation.mamamia.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-4 py-2 rounded-full border border-emerald-500/40 backdrop-blur-md transition-colors shadow-sm"
            >
              <span>Visit foundation.mamamia.co.tz</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* 6 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FOUNDATION_PILLARS.map((pillar, index) => {
            const isSelected = pillar.number === selectedPillarNumber;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                key={pillar.number}
                onClick={() => setSelectedPillarNumber(pillar.number)}
                className={`group relative overflow-hidden rounded-2xl border transition-all cursor-pointer flex flex-col justify-between backdrop-blur-md shadow-md dark:shadow-xl ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800/90 border-emerald-500 ring-2 ring-emerald-400/50 shadow-lg'
                    : 'bg-white/80 dark:bg-slate-900/85 border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800/70'
                }`}
              >
                {/* Pillar Card Image Banner Header */}
                {pillar.imageUrl && (
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={pillar.imageUrl}
                      alt={pillar.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-bold uppercase text-emerald-300 bg-slate-950/85 px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md">
                      Pillar 0{pillar.number}
                    </span>
                    <div className="absolute top-3 right-3 p-2 bg-slate-950/85 rounded-xl border border-slate-700 backdrop-blur-md shadow-md">
                      {getPillarIcon(pillar.number)}
                    </div>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 font-medium">
                      {pillar.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <span>Explore Initiatives</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Selected Pillar Feature Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar.number}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 rounded-2xl p-6 sm:p-8 border border-emerald-500/40 shadow-xl dark:shadow-2xl backdrop-blur-xl"
          >
            {selectedPillar.imageUrl && (
              <div className="absolute inset-0 z-0">
                <img
                  src={selectedPillar.imageUrl}
                  alt={selectedPillar.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-5 dark:opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 dark:from-slate-950/95 via-white/90 dark:via-slate-950/90 to-white/95 dark:to-slate-950/95" />
              </div>
            )}

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
                  {getPillarIcon(selectedPillar.number)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 tracking-wider">
                    Active Pillar Detail — Pillar 0{selectedPillar.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-200 mb-6 max-w-3xl leading-relaxed font-medium">
                {selectedPillar.summary}
              </p>

              <div className="bg-slate-50 dark:bg-slate-950/85 backdrop-blur-md p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md">
                <h4 className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-3 tracking-wider">
                  Co-Implemented Operational Initiatives:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedPillar.details.map((detail, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900/90 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2 shadow-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-1 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
