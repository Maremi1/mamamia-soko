import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Partnership Inquiry',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const getWhatsAppMessage = () => {
    return [
      `📩 *NEW DIRECT INQUIRY - Mama Mia's Soko*`,
      ``,
      `👤 *Full Name:* ${formState.name}`,
      `📧 *Email Address:* ${formState.email}`,
      `🏷️ *Inquiry Category:* ${formState.subject}`,
      ``,
      `📝 *Message / Request Details:*`,
      formState.message,
    ].join('\n');
  };

  const getWhatsAppUrl = () => {
    return `https://api.whatsapp.com/send?phone=255765658595&text=${encodeURIComponent(getWhatsAppMessage())}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = getWhatsAppUrl();
    window.location.href = waUrl;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Image for Contact Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/fintech_insurance_bg_1786478932121.jpg"
          alt="Fintech Advisory Center"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950" />
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
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 backdrop-blur-md">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Partner Engagements & Strategic Inquiries
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-medium">
            Reach out directly to our advisory teams in Dar es Salaam and Kigali for trade delegation briefing, marketplace onboarding, or investment structuring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-slate-800/85 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6"
          >
            <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-3">
              Direct Contact & Command Centers
            </h3>

            <div className="space-y-4">
              <a
                href="https://wa.me/255765658595"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700 hover:border-amber-500/50 transition-all group shadow-md"
              >
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-amber-400">
                    Direct Call / WhatsApp
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-amber-300">
                    +255 765 658 595
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
                    Fast response for trade missions & delegations
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@mamamia.co.tz"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700 hover:border-amber-500/50 transition-all group shadow-md"
              >
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-amber-400">
                    Official Executive Email
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-amber-300">
                    info@mamamia.co.tz
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
                    Formal briefing & proposal submissions
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Dual Operational Hub Locations</span>
                </div>
                <div className="text-xs text-slate-200 space-y-1 font-medium">
                  <div>📍 <strong className="text-white">Dar es Salaam:</strong> Commercial & Maritime Trade Hub, Tanzania</div>
                  <div>📍 <strong className="text-white">Kigali:</strong> Regional Corporate Headquarters (I Link Limited), Rwanda</div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-slate-700/80">
              <span className="text-xs font-bold uppercase text-slate-400 block mb-2">
                Official Media Handles
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/80 text-slate-200 font-medium">
                  Mama Mia's Soko: <strong className="text-amber-300">@mamamiasoko</strong>
                </span>
                <span className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/80 text-slate-200 font-medium">
                  Foundation: <strong className="text-emerald-300">@mamamiafoundation</strong>
                </span>
                <span className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/80 text-slate-200 font-medium">
                  Bima Kwik: <strong className="text-amber-300">@bimakwik</strong>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-800/85 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl"
          >
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formState.name}</strong>. Your inquiry regarding "{formState.subject}" has been received by our administrative team at info@mamamia.co.tz.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Open in WhatsApp (+255 765 658 595)</span>
                  </a>

                  <button
                    onClick={() => {
                      setSent(false);
                      setFormState({ name: '', email: '', subject: 'General Partnership Inquiry', message: '' });
                    }}
                    className="bg-slate-900 hover:bg-slate-950 text-slate-300 hover:text-white font-semibold px-5 py-2.5 rounded-xl text-xs border border-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-3 mb-6">
                  Send Direct Inquiry
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="General Partnership Inquiry">General Partnership Inquiry</option>
                      <option value="Inbound Trade Delegation">Inbound Trade Delegation</option>
                      <option value="Outbound Export Expansion">Outbound Export Expansion</option>
                      <option value="Regulatory & Corporate Structuring">Regulatory & Corporate Structuring</option>
                      <option value="Soko Marketplace Onboarding">Soko Marketplace Onboarding</option>
                      <option value="Bima Kwik Insurance Integration">Bima Kwik Insurance Integration</option>
                      <option value="Mama Mia's Foundation Program">Mama Mia's Foundation Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message / Request Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Detail your organization's scope or requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs shadow-lg transition-all"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
