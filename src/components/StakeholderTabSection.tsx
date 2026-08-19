import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STAKEHOLDER_PROFILES } from '../data/websiteData';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  PlaneTakeoff,
  PlaneLanding,
  Globe,
  Building2,
  Landmark,
  Handshake,
  TrendingUp,
  ShieldAlert,
  Cpu
} from 'lucide-react';

interface StakeholderTabSectionProps {
  onOpenConsultation: (stakeholderId: string) => void;
}

export const StakeholderTabSection: React.FC<StakeholderTabSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('inbound-delegations');

  const activeProfile =
    STAKEHOLDER_PROFILES.find((p) => p.id === activeTabId) || STAKEHOLDER_PROFILES[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'inbound-delegations':
        return <PlaneLanding className="w-4 h-4" />;
      case 'outbound-international':
        return <PlaneTakeoff className="w-4 h-4" />;
      case 'outbound-regional':
        return <Globe className="w-4 h-4" />;
      case 'tanzanian-enterprises':
        return <Building2 className="w-4 h-4" />;
      case 'government-public':
        return <Landmark className="w-4 h-4" />;
      case 'int-orgs-development':
        return <Handshake className="w-4 h-4" />;
      case 'investors-pe':
        return <TrendingUp className="w-4 h-4" />;
      case 'boards-executives':
        return <ShieldAlert className="w-4 h-4" />;
      case 'internal-management':
        return <Cpu className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  return (
    <section id="stakeholders" className="py-20 bg-[#071120] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Users className="w-4 h-4" />
            <span>Tailored Stakeholder Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who We Serve Across East Africa & Global Corridors
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-medium">
            Select your organization type to explore customized market access, advisory, and trade facilitation services.
          </p>
        </motion.div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 border-b border-slate-800 mb-8">
          {STAKEHOLDER_PROFILES.map((profile) => {
            const isActive = profile.id === activeTabId;
            return (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={profile.id}
                onClick={() => setActiveTabId(profile.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 ring-2 ring-amber-400 font-bold'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {getTabIcon(profile.id)}
                <span>{profile.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Tab Card Spec with Framer Motion Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProfile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-900/80 rounded-2xl border border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
          >
            {/* Background Image Texture for Selected Profile - High Visibility */}
            {(activeProfile.bgImageUrl || activeProfile.imageUrl) && (
              <div className="absolute inset-0 z-0">
                <img
                  src={activeProfile.bgImageUrl || activeProfile.imageUrl}
                  alt={activeProfile.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-35 scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/90" />
              </div>
            )}

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/30 backdrop-blur-sm">
                  {getTabIcon(activeProfile.id)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                    {activeProfile.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeProfile.title}
                  </h3>
                </div>
              </div>

              <span className="text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 font-medium backdrop-blur-sm">
                I Link Limited & Mama Mia's Soko Division
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Detailed Description with Prominent Visual Card Image */}
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Strategic Scope & Solution Brief
                  </h4>
                  <div className="bg-slate-800/75 backdrop-blur-xl p-5 rounded-xl border border-slate-700/80 shadow-xl space-y-4">
                    {activeProfile.imageUrl && (
                      <div className="h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-600/80 mb-4 relative group">
                        <img
                          src={activeProfile.imageUrl}
                          alt={activeProfile.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs font-bold text-amber-300 bg-slate-950/85 px-3 py-1 rounded-md border border-amber-500/40 backdrop-blur-md">
                          {activeProfile.badge}
                        </span>
                      </div>
                    )}
                    <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                      {activeProfile.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenConsultation(activeProfile.id)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-xl hover:shadow-amber-500/25 transition-all text-sm"
                  >
                    <span>{activeProfile.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Key Deliverables & Benefits */}
              <div className="lg:col-span-5 bg-slate-800/85 backdrop-blur-md p-6 rounded-xl border border-slate-700/80 space-y-4 flex flex-col justify-between shadow-xl">
                <div>
                  <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    Key Strategic Benefits
                  </h4>
                  <ul className="space-y-3">
                    {activeProfile.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-200 text-xs sm:text-sm">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0 shadow-sm" />
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-700/80 text-[11px] text-slate-300 space-y-1">
                  <div>🌐 Integrated with: <span className="text-amber-300 font-medium">soko.mamamia.co.tz</span></div>
                  <div>🛡️ Trade Protection: <span className="text-amber-300 font-medium">Bima Kwik Insurance</span></div>
                  <div>💚 Foundation Impact: <span className="text-amber-300 font-medium">Co-funded ESG Pillars</span></div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
