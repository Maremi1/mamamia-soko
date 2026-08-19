import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { StakeholderTabSection } from './components/StakeholderTabSection';
import { CoreCapabilitiesSection } from './components/CoreCapabilitiesSection';
import { TradeCommissionCalculator } from './components/TradeCommissionCalculator';
import { LeadershipSection } from './components/LeadershipSection';
import { SocialImpactSection } from './components/SocialImpactSection';
import { EcosystemSection } from './components/EcosystemSection';
import { InstitutionalFootprint } from './components/InstitutionalFootprint';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedStakeholderForModal, setSelectedStakeholderForModal] = useState<
    string | undefined
  >(undefined);

  const handleOpenConsultation = (stakeholderId?: string) => {
    setSelectedStakeholderForModal(stakeholderId);
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
    setSelectedStakeholderForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Header with Navigation */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section & Quick Ecosystem Banner */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Executive Overview & Mission */}
        <ExecutiveOverview />

        {/* 3. Tailored Stakeholder Solutions (Interactive 9-Tab Section) */}
        <StakeholderTabSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Core Capabilities & Commercial Solutions */}
        <CoreCapabilitiesSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 5. Interactive Referral Commission & Bima Kwik Estimator */}
        <TradeCommissionCalculator />

        {/* 6. Executive Leadership & Operational Structure Diagram */}
        <LeadershipSection />

        {/* 7. ESG & Social Impact: Mama Mia's Foundation 6 Pillars */}
        <SocialImpactSection />

        {/* 8. Integrated Ecosystem Portals */}
        <EcosystemSection />

        {/* 9. Institutional Footprint & Chamber Affiliations */}
        <InstitutionalFootprint />

        {/* 10. Direct Contact & Partner Engagements */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Consultation / Delegation Briefing Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
        initialStakeholderId={selectedStakeholderForModal}
      />
    </div>
  );
}
