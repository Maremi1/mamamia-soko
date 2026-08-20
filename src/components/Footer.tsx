import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Building2,
  Heart,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050C1A] text-slate-300 border-t border-amber-500/20 pt-16 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-2">
              <img
                src="/src/assets/images/mamamia_soko_logo.png"
                alt="Mama Mia's Soko Logo"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              />
              <div className="text-xs text-amber-400 font-semibold tracking-wide">
                A Division of I Link Limited &bull; Kigali & Dar es Salaam
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Institutional-grade strategic consulting, regulatory navigation, and cross-border trade facilitation connecting FDI, private enterprises, and public bodies across East Africa.
            </p>

            <div className="pt-2 text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Operational Hubs: Dar es Salaam, Tanzania | Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Parent Entity: I Link Limited (Kigali & Dar)</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-amber-400">
              Quick Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/255765658595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>📞 +255 765 658 595</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mamamia.co.tz"
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>✉️ info@mamamia.co.tz</span>
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                <div>• Mama Mia's Soko: <strong className="text-slate-200">@mamamiasoko</strong></div>
                <div>• Foundation: <strong className="text-slate-200">@mamamiafoundation</strong></div>
                <div>• Bima Kwik: <strong className="text-slate-200">@bimakwik</strong></div>
              </li>
            </ul>
          </div>

          {/* Ecosystem Portals Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-amber-400">
              Ecosystem Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mamamia.co.tz"
                  className="flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <span>🌐 mamamia.co.tz</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://soko.mamamia.co.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <span>🛍️ soko.mamamia.co.tz</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://bimakwik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <span>🛡️ bimakwik.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://foundation.mamamia.co.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <span>💚 foundation.mamamia.co.tz</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://ilinkbiz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <span>🌐 ilinkbiz.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Affiliations Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-amber-400">
              Institutional Affiliations
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-300">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>TNCC (Platinum Member)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Zanzibar Chamber (ZNCC)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>OWIT Network</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © 2026 Mama Mia's Soko (I Link Limited). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#overview" className="hover:text-amber-400 transition-colors">Terms of Trade</a>
            <span>•</span>
            <a href="#overview" className="hover:text-amber-400 transition-colors">Regulatory Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
