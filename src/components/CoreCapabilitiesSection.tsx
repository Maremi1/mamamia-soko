import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CORE_CAPABILITIES } from '../data/websiteData';
import {
  FileCheck2,
  BarChart3,
  Network,
  Users2,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CoreCapabilitiesSectionProps {
  onOpenConsultation: () => void;
}

export const CoreCapabilitiesSection: React.FC<CoreCapabilitiesSectionProps> = ({
  onOpenConsultation,
}) => {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'regulatory-structuring':
        return <FileCheck2 className="w-6 h-6 text-amber-400" />;
      case 'market-intelligence':
        return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'digital-tech-commerce':
        return <Network className="w-6 h-6 text-amber-400" />;
      case 'human-capital':
        return <Users2 className="w-6 h-6 text-amber-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id);
  };

  return (
    <section id="solutions" className="py-20 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Section Background Backdrop Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fdi_trade_bg_1786478906939.jpg"
          alt="East Africa Commercial Trade Corridors"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 dark:opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-slate-100/90 dark:bg-slate-950/80 bg-gradient-to-b from-slate-100/95 dark:from-slate-950/90 via-slate-100/85 dark:via-slate-950/85 to-slate-100/95 dark:to-slate-950/90" />
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
          <div className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Core Capabilities & Commercial Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Institutional Services & Strategic Architecture
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 font-medium">
            From high-level regulatory navigation to embedded digital insurance and cross-border trade e-commerce.
          </p>
        </motion.div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_CAPABILITIES.map((category, index) => {
            const isExpanded = expandedCategoryId === category.id;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                key={category.id}
                className="bg-white dark:bg-slate-800/75 rounded-2xl border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-lg dark:shadow-2xl group overflow-hidden backdrop-blur-xl"
              >
                {/* Visual Image Banner Header */}
                {category.imageUrl && (
                  <div className="h-56 sm:h-60 relative overflow-hidden">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 bg-slate-950/85 rounded-xl border border-amber-500/40 backdrop-blur-md shadow-xl">
                      {getCategoryIcon(category.id)}
                    </div>
                    <span className="absolute top-4 right-4 text-xs font-bold text-amber-300 bg-slate-950/85 px-3.5 py-1 rounded-full border border-amber-500/40 backdrop-blur-md shadow-xl">
                      Solution Pillar
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {!category.imageUrl && (
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:border-amber-500/40 transition-colors">
                        {getCategoryIcon(category.id)}
                      </div>
                      <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                        Solution Pillar
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 mb-6 font-medium">
                    {category.subtitle}
                  </p>

                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 dark:bg-slate-900/70 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                      >
                        <div className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed pl-6 font-medium">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between bg-slate-50 dark:bg-slate-900/40">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>Engage Strategic Solution</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                  <button
                    onClick={() => toggleExpand(category.id)}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
