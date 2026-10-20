import React from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail } from 'lucide-react';

interface MarketplaceUpgradePageProps {
  onBackToHome: () => void;
  onOpenConsultation?: (stakeholderType?: string) => void;
}

export const MarketplaceUpgradePage: React.FC<MarketplaceUpgradePageProps> = ({
  onBackToHome,
}) => {
  return (
    <div className="min-h-screen relative flex flex-col justify-between bg-slate-950 text-white font-sans overflow-hidden">
      
      {/* Vibrant High-Resolution Unsplash Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=85&w=2560&auto=format&fit=crop"
          alt="Vibrant Fresh Produce Marketplace"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
        />
        {/* Balanced cinematic vignettes: allows the vibrant colors to shine through while keeping header and footer readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/30 to-slate-950/85" />
        <div className="absolute inset-0 bg-amber-950/15 mix-blend-color" />
      </div>

      {/* Top Bar with Logo & Back Button */}
      <header className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/10 shadow-lg">
          <img
            src="/images/mamamia_soko_logo.png"
            alt="Mama Mia's Soko"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </div>

        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-100 hover:text-amber-300 bg-slate-950/75 hover:bg-slate-900 px-4 py-2 rounded-xl border border-amber-500/40 hover:border-amber-400 transition-all cursor-pointer shadow-xl backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Main Glassmorphism Hero Card */}
      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col justify-center w-full">
        <div className="bg-slate-950/75 sm:bg-slate-950/70 backdrop-blur-2xl border border-amber-500/35 rounded-3xl p-6 sm:p-12 text-center shadow-2xl shadow-black/80 ring-1 ring-white/10">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            We Are Upgrading Our{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Digital Marketplace
            </span>
          </h1>

          {/* Message */}
          <p className="mt-5 text-base sm:text-xl text-slate-200 leading-relaxed font-normal">
            We are upgrading our platform and we will be back soon.
            <span className="block mt-2 font-extrabold text-amber-300 text-xl sm:text-2xl drop-shadow-sm">
              Stay tuned!
            </span>
          </p>

          {/* Quick Contact & Assistance Links */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-300">
            <span className="text-slate-400">Need immediate assistance?</span>
            <a
              href="https://wa.me/255765658595?text=Hello%20Mama%20Mia%20Team,%20I%20have%20an%20inquiry%20regarding%20the%20marketplace."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold bg-emerald-950/60 hover:bg-emerald-950/90 px-3 py-1.5 rounded-lg border border-emerald-500/40 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+255765658595"
              className="inline-flex items-center gap-1.5 hover:text-white bg-slate-900/70 hover:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+255 765 658 595</span>
            </a>
            <a
              href="mailto:info@mamamia.co.tz"
              className="inline-flex items-center gap-1.5 hover:text-white bg-slate-900/70 hover:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@mamamia.co.tz</span>
            </a>
          </div>

        </div>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="relative z-10 py-5 text-center text-xs text-slate-400 bg-slate-950/70 backdrop-blur-md border-t border-slate-900">
        <p>© {new Date().getFullYear()} Mama Mia's Soko. All rights reserved.</p>
      </footer>

    </div>
  );
};
