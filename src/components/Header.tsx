import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Building2,
  Calendar,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenConsultation: (stakeholderType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#overview' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Who We Serve', href: '#stakeholders' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Social Impact', href: '#foundation' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-md text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-amber-500/20 shadow-md transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-slate-100 dark:bg-[#071120] text-xs py-2 px-4 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
            <a
              href="https://wa.me/255765658595"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>+255 765 658 595</span>
            </a>
            <a
              href="mailto:info@mamamia.co.tz"
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>info@mamamia.co.tz</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-500 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-4 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Hubs: Dar es Salaam, Tanzania | Kigali, Rwanda</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://soko.mamamia.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-md shadow-sm hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <Building2 className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span>Visit Digital Marketplace</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-950 shrink-0" />
            </a>
            <button
              onClick={() => onOpenConsultation()}
              className="flex items-center gap-1 text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-200 text-xs font-semibold underline underline-offset-2 ml-1 cursor-pointer shrink-0"
            >
              <Calendar className="w-3 h-3" />
              Book Briefing
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center group py-1">
          <img
            src="/images/mamamia_soko_logo.png"
            alt="Mama Mia's Soko Official Logo"
            className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-amber-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-300 border border-slate-300 dark:border-slate-700 transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Consultation</span>
          </button>
        </div>

        {/* Mobile Buttons (Theme Toggle + Menu Toggle) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 border border-slate-300 dark:border-slate-700"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#071120] border-t border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 transition-colors duration-300 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <a
              href="https://soko.mamamia.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm shadow"
            >
              <span>Visit Digital Marketplace ↗</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-700 dark:text-amber-300 border border-amber-500/30 px-4 py-2.5 rounded-lg text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Trade Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
