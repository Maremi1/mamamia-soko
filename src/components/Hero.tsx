import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ArrowRight,
  ShieldCheck,
  Building,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { ECOSYSTEM_PORTALS } from '../data/websiteData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative bg-[#07101E] text-white pt-8 pb-20 overflow-hidden min-h-[92vh] flex flex-col justify-center">
      {/* Background Image Layer - High Visibility & Clarity */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/src/assets/images/hero_market_bg_1786478895140.jpg"
          alt="East African Market Soko in Dar es Salaam"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Vignette Top and Bottom Gradient to blend into section transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101E]/80 via-transparent to-[#07101E]/95" />
        <div className="absolute inset-0 bg-slate-950/25" />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Translucent Glass Card to enhance text legibility while displaying background photo clearly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-slate-950/65 sm:bg-slate-950/60 backdrop-blur-xl p-6 sm:p-10 md:p-12 rounded-3xl border border-amber-500/35 shadow-2xl space-y-6 text-center"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xl">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>A Division of I Link Limited</span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-200 font-bold">Dar es Salaam & Kigali</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-lg">
            Strategic Market Access,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Investment Support
            </span>{' '}
            & Sustainable Impact
          </h1>

          {/* Subheadline - Concisely focused */}
          <p className="text-base sm:text-lg text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
            Connecting foreign direct investment, private enterprises, and public bodies across Tanzania, the AfCFTA region, and global corridors.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-2xl hover:shadow-amber-500/40 transition-all text-base sm:text-lg"
            >
              <span>Schedule Trade Advisory</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold px-7 py-4 rounded-xl border border-slate-600 hover:border-amber-400 backdrop-blur-md transition-all text-base shadow-xl"
            >
              <span>Explore Market Solutions</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </motion.a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left border-t border-slate-700/80 mt-8">
            <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 hover:border-amber-500/50 transition-colors shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>TNCC Platinum</span>
              </div>
              <p className="text-[11px] text-slate-200 mt-1 font-medium">
                Institutional chamber leader in Tanzania
              </p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 hover:border-amber-500/50 transition-colors shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
                <Globe className="w-4 h-4" />
                <span>AfCFTA & EAC Reach</span>
              </div>
              <p className="text-[11px] text-slate-200 mt-1 font-medium">
                Regional corridor trade integration
              </p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 hover:border-amber-500/50 transition-colors shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
                <Building className="w-4 h-4" />
                <span>Dual Regional Hubs</span>
              </div>
              <p className="text-[11px] text-slate-200 mt-1 font-medium">
                Dar es Salaam & Kigali execution
              </p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 hover:border-amber-500/50 transition-colors shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Trade FinTech</span>
              </div>
              <p className="text-[11px] text-slate-200 mt-1 font-medium">
                InsurTech powered by Bima Kwik
              </p>
            </div>
          </div>
        </motion.div>

        {/* Portal Ecosystem Quick Bar / Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-slate-900/85 rounded-2xl p-5 border border-amber-500/40 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Layers className="w-4 h-4" />
              <span>Mama Mia's Digital Portal Ecosystem</span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Click to visit integrated platform portals
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ECOSYSTEM_PORTALS.map((portal) => (
              <motion.a
                whileHover={{ y: -3 }}
                key={portal.domain}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden p-3 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-md"
              >
                {portal.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={portal.imageUrl}
                      alt={portal.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 backdrop-blur-sm">
                      {portal.badge}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div className="font-bold text-xs text-white mt-2 group-hover:text-amber-300 transition-colors">
                    {portal.domain}
                  </div>
                </div>
                <div className="relative z-10 text-[11px] text-slate-300 mt-1 line-clamp-1">
                  {portal.focus}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
