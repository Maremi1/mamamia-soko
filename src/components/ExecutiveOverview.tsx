import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Globe2, HeartHandshake, Shield, Building2 } from 'lucide-react';

export const ExecutiveOverview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Background Section Backdrop Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
          alt="Corporate Architecture Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 dark:opacity-25"
        />
        <div className="absolute inset-0 bg-slate-100/90 dark:bg-slate-950/80 bg-gradient-to-b from-slate-100/95 dark:from-slate-950/85 via-slate-100/80 dark:via-slate-950/75 to-slate-100/95 dark:to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
            <Landmark className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Executive Overview & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Institutional Gateway to East African Commerce
          </h2>
        </motion.div>

        {/* Overview Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Statement Box with Image Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white dark:bg-slate-800/85 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xl dark:shadow-2xl relative overflow-hidden flex flex-col justify-between backdrop-blur-md transition-colors duration-300"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/images/fdi_trade_bg_1786478906939.jpg"
                alt="FDI Trade Background"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-10 dark:opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 dark:from-slate-900/90 via-white/90 dark:via-slate-900/80 to-white/95 dark:to-slate-900/95" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-3">
                <img
                  src="/images/mamamia_soko_logo.png"
                  alt="Mama Mia's Soko Official Logo"
                  className="h-10 w-auto object-contain drop-shadow"
                />
              </div>
              <p className="text-slate-800 dark:text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
                <strong className="text-amber-700 dark:text-amber-300 font-bold">Mama Mia’s Soko</strong> is a premier strategic consulting, market access, and trade facilitation gateway anchored by <strong className="text-slate-900 dark:text-white font-bold">I Link Limited</strong> (Kigali, Rwanda & Dar es Salaam, Tanzania).
              </p>

              <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                We position foreign direct investors, private enterprises, and public bodies to capitalize on cross-border opportunities within the <strong className="text-amber-600 dark:text-amber-400 font-semibold">African Continental Free Trade Area (AfCFTA)</strong> while co-funding sustainable socio-economic development.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="relative z-10 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/80 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                <Globe2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                AfCFTA Strategy
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                <Building2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                I Link Limited (Rwanda & Tanzania)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                <Shield className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                G2B & B2B Facilitation
              </span>
            </div>
          </motion.div>

          {/* 3 Core Pillars Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden bg-white dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/50 transition-all flex items-start gap-4 shadow-md dark:shadow-xl backdrop-blur-md group">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=600&auto=format&fit=crop"
                  alt="Public Policy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-35 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/80" />
              </div>
              <div className="relative z-10 p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg border border-amber-500/20 shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Public Policy & Regulatory Mastery</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-medium">
                  Navigating legal, tax, and licensing frameworks for incoming investors and trade missions across East Africa.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden bg-white dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/50 transition-all flex items-start gap-4 shadow-md dark:shadow-xl backdrop-blur-md group">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/fintech_insurance_bg_1786478932121.jpg"
                  alt="Trade FinTech"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-35 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/80" />
              </div>
              <div className="relative z-10 p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg border border-amber-500/20 shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Digital Commerce & Trade FinTech</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-medium">
                  Multi-tier digital marketplace paired with embedded trade insurance via Bima Kwik for risk-mitigated operations.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden bg-white dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/50 transition-all flex items-start gap-4 shadow-md dark:shadow-xl backdrop-blur-md group">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/foundation_impact_bg_1786478922041.jpg"
                  alt="Social Return"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-35 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/80" />
              </div>
              <div className="relative z-10 p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg border border-amber-500/20 shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Embedded Purpose & Social Return</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-medium">
                  Commercial growth directly funds community resilience, youth empowerment, and healthcare via Mama Mia’s Foundation.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
