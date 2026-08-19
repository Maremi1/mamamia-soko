import React from 'react';
import { motion } from 'framer-motion';
import { INSTITUTIONAL_AFFILIATIONS } from '../data/websiteData';
import { ShieldCheck, MapPin, Building2 } from 'lucide-react';

export const InstitutionalFootprint: React.FC = () => {
  return (
    <section className="py-16 bg-[#071120] text-slate-100 border-t border-slate-800 relative overflow-hidden">
      {/* Background Image for Footprint Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/fdi_trade_bg_1786478922041.jpg"
          alt="East Africa Trade Port Corridor"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-[#071120]/80 bg-gradient-to-b from-[#071120]/85 via-[#071120]/80 to-[#071120]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footprint Bar Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 backdrop-blur-md">
            <Building2 className="w-4 h-4" />
            <span>Institutional Footprint & Regional Hubs</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Operational Hubs & Chamber Affiliations
          </h3>
        </motion.div>

        {/* Hubs + Affiliations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Dual Operational Hubs Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-slate-900/95 rounded-2xl p-6 border border-amber-500/40 flex flex-col justify-between shadow-2xl backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400 mb-4">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Regional Command Hubs</span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 shadow-md">
                  <div className="font-bold text-white text-base flex items-center justify-between">
                    <span>Dar es Salaam Hub</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold border border-emerald-500/20">
                      Tanzania Operational HQ
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    Serving mainland Tanzania, Zanzibar port corridors, and SADC export channels.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 shadow-md">
                  <div className="font-bold text-white text-base flex items-center justify-between">
                    <span>Kigali Hub</span>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-semibold border border-amber-500/20">
                      Rwanda Parent HQ
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    Anchored under I Link Limited for East African Community (EAC) trade coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
              Legal Operating Entity: <span className="text-slate-200">I Link Limited t/a Mama Mia’s Soko</span>
            </div>
          </motion.div>

          {/* Chamber & Institutional Affiliations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-900/95 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-amber-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Recognized Institutional Associations</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium">High-Level Policy Networks</span>
            </div>

            <div className="space-y-3">
              {INSTITUTIONAL_AFFILIATIONS.map((aff) => (
                <div
                  key={aff.name}
                  className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/80 hover:border-amber-500/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm"
                >
                  <div>
                    <h4 className="font-bold text-sm text-white">{aff.name}</h4>
                    <p className="text-xs text-slate-300 mt-1 font-medium">{aff.description}</p>
                  </div>
                  <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 shrink-0">
                    {aff.badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
