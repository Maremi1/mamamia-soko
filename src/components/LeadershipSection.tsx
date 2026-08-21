import React from 'react';
import { LEADERSHIP_TEAM } from '../data/websiteData';
import {
  Users,
  ShieldCheck,
  Building,
  Briefcase,
  Layers,
  Globe2,
  Scale,
  Truck,
  Code2
} from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Executive Leadership & Global Execution Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Governance & Operational Structure
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 font-medium">
            Anchored by experienced East African leadership and supported by an agile extended global partner ecosystem.
          </p>
        </div>

        {/* Board & Management Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span>Board & Executive Leadership</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-slate-800/85 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-lg dark:shadow-xl backdrop-blur-md group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    {member.imageUrl ? (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-md group-hover:border-amber-400 group-hover:shadow-amber-500/20 transition-all shrink-0 bg-slate-100 dark:bg-slate-900">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-extrabold flex items-center justify-center text-2xl shadow-md shrink-0">
                        {member.avatarInitials}
                      </div>
                    )}
                    <span className="text-[10px] font-bold uppercase text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm whitespace-nowrap">
                      {member.titleBadge}
                    </span>
                  </div>

                  <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">{member.name}</h4>
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-700/80 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Building className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Mama Mia's Soko / I Link Limited</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Extended Partner Network (Interactive Visual Organizational Diagram) */}
        <div className="bg-white dark:bg-slate-950/90 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-amber-500/30 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
            <Layers className="w-4 h-4" />
            <span>Operational Architecture</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Extended Global Execution Model
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-3xl font-medium">
            To ensure agility, rigorous compliance, and seamless cross-border delivery, Mama Mia’s Soko operates an extended network of specialized professional partners.
          </p>

          {/* Flow Diagram */}
          <div className="space-y-6">
            
            {/* Top Tier: Board & Exec */}
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-slate-100 via-amber-500/10 to-slate-100 dark:from-slate-900 dark:via-amber-950/40 dark:to-slate-900 p-5 rounded-xl border border-amber-500/50 text-center shadow-md">
              <span className="text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400 tracking-wider">Tier 1: Governance & Strategic Mandate</span>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base mt-1">BOARD & EXECUTIVE LEADERSHIP</h4>
              <p className="text-xs text-amber-700 dark:text-amber-300 font-bold mt-1">
                Dr. Anselmi Anselmi Mushy (Chairman) & Ms. Dorice Malle (Founder & CEO)
              </p>
            </div>

            {/* Connector Line */}
            <div className="w-0.5 h-6 bg-amber-500/40 mx-auto" />

            {/* Middle Tier: Management & Outsourcing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase">
                  <Briefcase className="w-4 h-4" />
                  <span>Finance & Administration</span>
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">Internal Executive Management</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Mary Michael (Finance Manager) & Evelyin Mwasyeba (Admin Manager)
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase">
                  <Scale className="w-4 h-4" />
                  <span>Specialized Outsourcing</span>
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">Professional Services</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Outsourced specialized Accounting, Auditing & Legal Advisory Services
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="w-0.5 h-6 bg-amber-500/40 mx-auto" />

            {/* Lower Tier: Logistics & IT Hubs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">
                  <Truck className="w-4 h-4" />
                  <span>Logistics & Warehousing</span>
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">Regional Supply Chain</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Private & Public Enterprise Partnerships for warehouse management & distribution
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase">
                  <Code2 className="w-4 h-4" />
                  <span>IT & Software Dev Hubs</span>
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">Technology Network</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Strategic software development partners across <strong className="text-slate-900 dark:text-white font-bold">Tanzania | Ghana | India | USA</strong>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
