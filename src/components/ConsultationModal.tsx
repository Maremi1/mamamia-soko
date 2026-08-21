import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  Building2,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { STAKEHOLDER_PROFILES } from '../data/websiteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStakeholderId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialStakeholderId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    stakeholderType: initialStakeholderId || 'inbound-delegations',
    preferredHub: 'Dar es Salaam',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialStakeholderId) {
      setFormData((prev) => ({ ...prev, stakeholderType: initialStakeholderId }));
    }
  }, [initialStakeholderId]);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getWhatsAppMessage = () => {
    const stakeholder = STAKEHOLDER_PROFILES.find(p => p.id === formData.stakeholderType);
    return [
      `📋 *NEW ADVISORY REQUEST - Mama Mia's Soko*`,
      ``,
      `👤 *Name:* ${formData.name}`,
      `📧 *Email:* ${formData.email}`,
      `🏢 *Organization:* ${formData.organization}`,
      `📱 *Phone / WhatsApp:* ${formData.phone || 'N/A'}`,
      `🏷️ *Stakeholder Category:* ${stakeholder?.title || formData.stakeholderType}`,
      `📍 *Preferred Hub:* ${formData.preferredHub}`,
      formData.notes ? `📝 *Objectives & Details:* ${formData.notes}` : '',
    ].filter(Boolean).join('\n');
  };

  const getWhatsAppUrl = () => {
    return `https://api.whatsapp.com/send?phone=255765658595&text=${encodeURIComponent(getWhatsAppMessage())}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = getWhatsAppUrl();
    
    // Direct redirect to WhatsApp
    window.location.href = waUrl;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 flex min-h-full items-start sm:items-center justify-center transition-colors duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#0A192F] text-slate-900 dark:text-slate-100 rounded-2xl border border-slate-200 dark:border-amber-500/40 w-full max-w-2xl shadow-2xl overflow-hidden relative my-auto max-h-[calc(100dvh-1rem)] sm:max-h-[92vh] flex flex-col transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header (Fixed/Sticky at top of modal) */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071120] flex items-center justify-between shrink-0 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/images/mamamia_soko_logo.png"
              alt="Mama Mia's Soko Official Logo"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow shrink-0"
            />
            <div className="pl-2.5 border-l border-slate-300 dark:border-slate-700/80 min-w-0">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase text-amber-700 dark:text-amber-400 truncate">
                <Calendar className="w-3 h-3 shrink-0" />
                <span>Strategic Trade Advisory</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-300 font-medium truncate">
                A Division of I Link Limited
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-5 sm:p-8 text-center space-y-5 overflow-y-auto">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-amber-700 dark:text-amber-400 tracking-wider">
                Request Confirmed
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Strategic Briefing Package Prepared
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed font-medium">
                Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Our executive advisory team at I Link Limited / Mama Mia’s Soko will contact you within 24 hours regarding <strong className="text-amber-700 dark:text-amber-300">{formData.organization}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto font-medium">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Selected Hub:</span>
                <span className="text-slate-900 dark:text-white font-bold">{formData.preferredHub}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Contact Email:</span>
                <span className="text-slate-900 dark:text-white font-bold truncate max-w-[180px] sm:max-w-none">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Phone / WhatsApp:</span>
                <span className="text-slate-900 dark:text-white font-bold">{formData.phone || 'Provided in form'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Open in WhatsApp (+255 765 658 595)</span>
              </a>

              <button
                onClick={handleReset}
                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold px-5 py-2.5 rounded-xl text-xs border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
              >
                Done & Return
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 sm:px-8 overflow-y-auto space-y-4">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
                Request Delegation Briefing or Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
                Connect with Mama Mia’s Soko & I Link Limited advisory leadership across Dar es Salaam & Kigali.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Ambassador / Director John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Organization / Delegation Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Trade Mission / Ministry / Private Firm"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+255 / International Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Stakeholder Role / Category
                  </label>
                  <select
                    value={formData.stakeholderType}
                    onChange={(e) => setFormData({ ...formData, stakeholderType: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  >
                    {STAKEHOLDER_PROFILES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Hub / Session Mode
                  </label>
                  <select
                    value={formData.preferredHub}
                    onChange={(e) => setFormData({ ...formData, preferredHub: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Dar es Salaam">Dar es Salaam Hub, Tanzania</option>
                    <option value="Kigali">Kigali Hub, Rwanda</option>
                    <option value="Virtual Briefing">Virtual High-Level Briefing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Specific Objectives or Delegation Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Outline key sectors (e.g. Agribusiness, Energy, ICT, Trade Credit, Joint Venture structuring)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>24-Hour Response Guarantee</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all cursor-pointer"
                >
                  <span>Submit Advisory Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
