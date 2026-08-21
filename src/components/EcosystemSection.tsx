import React from 'react';
import { ECOSYSTEM_PORTALS } from '../data/websiteData';
import {
  Layers,
  ExternalLink,
  Building2,
  ShoppingBag,
  ShieldCheck,
  HeartHandshake,
  Globe
} from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const getPortalIcon = (iconName: string, domain?: string) => {
    if (domain && (domain === 'mamamia.co.tz' || domain === 'soko.mamamia.co.tz')) {
      return (
        <img
          src="/images/mamamia_soko_emblem.png"
          alt="Mama Mia's Soko Emblem"
          className="w-6 h-6 object-contain"
        />
      );
    }
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-sky-400" />;
      default:
        return <Building2 className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="ecosystem" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Layers className="w-4 h-4" />
            <span>Integrated Digital Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mama Mia's Multi-Platform Trade Corridors
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Interconnected platforms delivering strategic consulting, e-commerce, embedded insurance, and ESG development across East Africa.
          </p>
        </div>

        {/* Portals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_PORTALS.map((portal) => (
            <a
              key={portal.domain}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/85 rounded-2xl border border-slate-700/80 hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-2xl group hover:-translate-y-1 overflow-hidden backdrop-blur-md"
            >
              <div>
                {/* Portal Image Header */}
                {portal.imageUrl ? (
                  <div className="h-48 sm:h-52 relative overflow-hidden">
                    <img
                      src={portal.imageUrl}
                      alt={portal.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <div className="absolute top-3 left-3 p-2.5 bg-slate-950/85 rounded-xl border border-amber-500/40 backdrop-blur-md shadow-lg">
                      {getPortalIcon(portal.icon, portal.domain)}
                    </div>
                    <span className="absolute top-3 right-3 text-xs font-bold uppercase text-amber-300 bg-slate-950/85 px-3 py-1 rounded-full border border-amber-500/40 backdrop-blur-md shadow-lg">
                      {portal.badge}
                    </span>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 group-hover:border-amber-500/40 transition-colors">
                      {getPortalIcon(portal.icon, portal.domain)}
                    </div>
                    <span className="text-[10px] font-bold uppercase text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {portal.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 pt-4">
                  <div className="text-xs font-semibold text-amber-400 tracking-wide uppercase">
                    {portal.focus}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                    {portal.domain}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {portal.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300 bg-slate-900/40">
                <span>Access Portal</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
