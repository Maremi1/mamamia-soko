import React, { useState } from 'react';
import { Calculator, ShoppingBag, ShieldCheck, DollarSign, Percent, ExternalLink } from 'lucide-react';

export const TradeCommissionCalculator: React.FC = () => {
  const [tradeVolume, setTradeVolume] = useState<number>(50000);
  const [referralTier, setReferralTier] = useState<'standard' | 'platinum' | 'institutional'>('standard');
  const [includeBimaInsurance, setIncludeBimaInsurance] = useState<boolean>(true);

  // Commission rates
  const commissionRates = {
    standard: 0.025, // 2.5%
    platinum: 0.04,   // 4.0%
    institutional: 0.055, // 5.5%
  };

  const calculatedCommission = Math.round(tradeVolume * commissionRates[referralTier]);
  const estimatedInsuranceCoverage = Math.round(tradeVolume * 0.95); // 95% cargo/trade credit guarantee
  const bimaKwikPremiumEst = Math.round(tradeVolume * 0.008); // 0.8% micro-premium rate

  return (
    <section className="py-16 bg-[#0A192F] text-slate-100 border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-700">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                <Calculator className="w-4 h-4" />
                <span>Marketplace Trade Estimator</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Referral Commission & Bima Kwik Insurance Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Calculate potential trade referral earnings and embedded risk protection on <span className="text-amber-300 font-semibold">soko.mamamia.co.tz</span>
              </p>
            </div>

            <a
              href="https://soko.mamamia.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold px-4 py-2.5 rounded-lg border border-amber-500/30 text-xs transition-colors shrink-0"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Launch Marketplace Portal ↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trade Volume Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-amber-400" />
                    Estimated Gross Trade Transaction Value (USD)
                  </label>
                  <span className="text-lg font-extrabold text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30">
                    ${tradeVolume.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={tradeVolume}
                  onChange={(e) => setTradeVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$5,000</span>
                  <span>$250,000</span>
                  <span>$500,000+</span>
                </div>
              </div>

              {/* Partner Referral Tier Selection */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Partner Referral Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setReferralTier('standard')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      referralTier === 'standard'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-semibold">Standard Agent</div>
                    <div className="text-[11px] opacity-80">2.5% Commission</div>
                  </button>

                  <button
                    onClick={() => setReferralTier('platinum')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      referralTier === 'platinum'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-semibold">Platinum Vendor</div>
                    <div className="text-[11px] opacity-80">4.0% Commission</div>
                  </button>

                  <button
                    onClick={() => setReferralTier('institutional')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      referralTier === 'institutional'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-semibold">Institutional Hub</div>
                    <div className="text-[11px] opacity-80">5.5% Commission</div>
                  </button>
                </div>
              </div>

              {/* Bima Kwik Insurance Option */}
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Embed Bima Kwik Trade Insurance</div>
                    <div className="text-[11px] text-slate-400">Licensed protection for cargo transit & credit defaults</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={includeBimaInsurance}
                  onChange={(e) => setIncludeBimaInsurance(e.target.checked)}
                  className="w-5 h-5 accent-amber-500 cursor-pointer"
                />
              </div>

            </div>

            {/* Output Summary Card */}
            <div className="lg:col-span-5 bg-slate-900 p-6 rounded-xl border border-amber-500/40 shadow-xl space-y-5">
              <h4 className="text-xs font-bold uppercase text-amber-400 tracking-wider flex items-center gap-2">
                <Percent className="w-4 h-4" />
                Estimated Revenue & Risk Protection
              </h4>

              <div className="space-y-3">
                <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
                  <span className="text-xs text-slate-400 block">Estimated Partner Referral Earnings:</span>
                  <span className="text-2xl font-extrabold text-amber-300 mt-0.5 block">
                    ${calculatedCommission.toLocaleString()} USD
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Paid directly upon transaction completion on Soko Marketplace
                  </span>
                </div>

                {includeBimaInsurance && (
                  <div className="bg-emerald-950/40 p-4 rounded-lg border border-emerald-500/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-emerald-300 font-semibold">Bima Kwik Covered Risk Value:</span>
                      <span className="text-xs font-extrabold text-emerald-400">${estimatedInsuranceCoverage.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>Est. InsurTech Micro-Premium:</span>
                      <span>${bimaKwikPremiumEst.toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 text-[11px] text-slate-400 italic">
                * Note: Final referral rates and insurance underwriting are subject to verified seller onboarding on soko.mamamia.co.tz and Bima Kwik terms.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
