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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0A192F] text-slate-100 rounded-2xl border border-amber-500/40 w-full max-w-2xl shadow-2xl overflow-hidden relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                Request Confirmed
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Strategic Briefing Package Prepared
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our executive advisory team at I Link Limited / Mama Mia’s Soko will contact you within 24 hours regarding <strong className="text-amber-300">{formData.organization}</strong>.
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Hub:</span>
                <span className="text-white font-semibold">{formData.preferredHub}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Contact Email:</span>
                <span className="text-white font-semibold">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone / WhatsApp:</span>
                <span className="text-white font-semibold">{formData.phone || 'Provided in form'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`https://wa.me/255765658595?text=Hello%20Mama%20Mia%20Soko%20Team,%20I%20have%20submitted%20a%20trade%20advisory%20request%20for%20${encodeURIComponent(
                  formData.organization
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Instant WhatsApp Connect (+255 765 658 595)</span>
              </a>

              <button
                onClick={handleReset}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-xs transition-colors"
              >
                Done & Return
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400 mb-1">
              <Calendar className="w-4 h-4" />
              <span>Schedule Strategic Trade Advisory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Request Delegation Briefing or Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-6">
              Connect with Mama Mia’s Soko & I Link Limited advisory leadership across Dar es Salaam & Kigali.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Ambassador / Director John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Organization / Delegation Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Trade Mission / Ministry / Private Firm"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+255 / International Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Stakeholder Role / Category
                  </label>
                  <select
                    value={formData.stakeholderType}
                    onChange={(e) => setFormData({ ...formData, stakeholderType: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    {STAKEHOLDER_PROFILES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Hub / Session Mode
                  </label>
                  <select
                    value={formData.preferredHub}
                    onChange={(e) => setFormData({ ...formData, preferredHub: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Dar es Salaam">Dar es Salaam Hub, Tanzania</option>
                    <option value="Kigali">Kigali Hub, Rwanda</option>
                    <option value="Virtual Briefing">Virtual High-Level Briefing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Specific Objectives or Delegation Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key sectors (e.g. Agribusiness, Energy, ICT, Trade Credit, Joint Venture structuring)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>24-Hour Response Guarantee</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs shadow-lg transition-all"
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
