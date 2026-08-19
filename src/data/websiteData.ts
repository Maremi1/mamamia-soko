import {
  StakeholderProfile,
  CapabilityCategory,
  LeadershipMember,
  FoundationPillar,
  EcosystemPortal,
} from '../types';

export const ECOSYSTEM_PORTALS: EcosystemPortal[] = [
  {
    name: "Mama Mia's Soko Corporate",
    domain: "www.mamamia.co.tz",
    url: "https://www.mamamia.co.tz",
    focus: "Strategic Consulting & Market Entry",
    icon: "Building2",
    badge: "Main Corporate Portal",
    imageUrl: "/src/assets/images/fdi_trade_bg_1786478906939.jpg",
    description: "The primary strategic advisory, regulatory compliance, and G2B/B2B market access gateway for foreign direct investment and trade delegations in East Africa."
  },
  {
    name: "Digital Marketplace",
    domain: "soko.mamamia.co.tz",
    url: "https://soko.mamamia.co.tz",
    focus: "B2B / B2G / G2B Cross-Border Commerce",
    icon: "ShoppingBag",
    badge: "Trade Engine",
    imageUrl: "/src/assets/images/hero_market_bg_1786478895140.jpg",
    description: "Multi-tiered cross-border e-commerce and referral trade platform connecting regional producers, international buyers, and government procurement channels."
  },
  {
    name: "Bima Kwik Insurance",
    domain: "www.bimakwik.com",
    url: "https://www.bimakwik.com",
    focus: "Embedded Trade Risk Protection",
    icon: "ShieldCheck",
    badge: "FinTech & InsurTech",
    imageUrl: "/src/assets/images/fintech_insurance_bg_1786478932121.jpg",
    description: "Licensed digital insurance and risk mitigation platform powering cargo protection, trade credit financing security, and digital policy issuance across supply chains."
  },
  {
    name: "Mama Mia's Foundation",
    domain: "www.foundation.mamamia.co.tz",
    url: "https://www.foundation.mamamia.co.tz",
    focus: "ESG & Community Development",
    icon: "HeartHandshake",
    badge: "Social Impact Arm",
    imageUrl: "/src/assets/images/foundation_impact_bg_1786478922041.jpg",
    description: "Dedicated social impact organization co-funded by trade transactions, delivering sustainable development across 6 strategic pillars in East Africa."
  },
  {
    name: "I Link Limited",
    domain: "www.ilinkbiz.com",
    url: "https://www.ilinkbiz.com",
    focus: "Regional Holding Group",
    icon: "Globe",
    badge: "Parent Entity",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description: "Parent investment and trade holding entity anchored in Kigali, Rwanda and Dar es Salaam, Tanzania driving regional economic integration."
  }
];

export const STAKEHOLDER_PROFILES: StakeholderProfile[] = [
  {
    id: "inbound-delegations",
    title: "Inbound Trade Delegations",
    badge: "FDI & Foreign Delegations",
    icon: "PlaneArrival",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
    bgImageUrl: "/src/assets/images/fdi_trade_bg_1786478906939.jpg",
    description: "Definitive market gateway for foreign investors, diplomatic missions, and trade delegations in East Africa. We provide end-to-end regulatory navigation, corporate structuring, and G2B/B2B matchmaking across Tanzania and Rwanda.",
    keyBenefits: [
      "End-to-end regulatory compliance & license acquisition",
      "High-level G2B & B2B meeting facilitation",
      "Joint venture structuring & partner vetting",
      "Embedded trade risk insurance via Bima Kwik",
      "Direct AfCFTA trade corridor alignment"
    ],
    ctaLabel: "Request Delegation Briefing"
  },
  {
    id: "outbound-international",
    title: "Outbound International Delegations",
    badge: "Global Market Expansion",
    icon: "PlaneDeparture",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    bgImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    description: "Strategic bridge for Tanzanian exporters establishing global commercial ties. We provide institutional representation, export quality compliance auditing, and risk-managed international buyer matching.",
    keyBenefits: [
      "Institutional representation in global hubs",
      "Export readiness & quality compliance auditing",
      "International buyer matching & trade corridor linkages",
      "Risk-managed cross-border transactions & insurance",
      "Tailored Go-To-Market (GTM) expansion blueprints"
    ],
    ctaLabel: "Connect Global Trade Corridor"
  },
  {
    id: "outbound-regional",
    title: "Outbound African Regional Delegations",
    badge: "AfCFTA Corridor Growth",
    icon: "Globe2",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    bgImageUrl: "/src/assets/images/hero_market_bg_1786478895140.jpg",
    description: "Accelerating intra-African trade under the AfCFTA framework. Connecting East African producers and commercial entities to regional trade corridors, preferential tariffs, and supplier networks.",
    keyBenefits: [
      "AfCFTA tariff navigation & documentation",
      "Intra-Africa logistics & warehousing linkages",
      "Cross-border payment & trade finance structuring",
      "EAC & SADC trade policy alignment",
      "Regional distributor network onboarding"
    ],
    ctaLabel: "Explore Regional Corridors"
  },
  {
    id: "tanzanian-enterprises",
    title: "Tanzanian Enterprises",
    badge: "Local Producer Scaling",
    icon: "Factory",
    imageUrl: "/src/assets/images/hero_market_bg_1786478895140.jpg",
    bgImageUrl: "/src/assets/images/hero_market_bg_1786478895140.jpg",
    description: "Empowering local manufacturers, agribusinesses, and service providers with digital marketplace access, trade insurance, corporate restructuring, and global buyer connections.",
    keyBenefits: [
      "Digital marketplace onboarding for global reach",
      "Corporate restructuring for investment readiness",
      "Access to trade credit insurance & referral models",
      "Capacity building & executive leadership workshops",
      "Direct linkage to foreign buyer delegations"
    ],
    ctaLabel: "Onboard Local Enterprise"
  },
  {
    id: "government-public",
    title: "Governments & Public Sector",
    badge: "Public Policy & G2G / G2B",
    icon: "Landmark",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop",
    bgImageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
    description: "Partnering with ministries, agencies, and diplomatic missions for FDI attraction, Public-Private Partnerships (PPPs), and national trade policy alignment across East Africa.",
    keyBenefits: [
      "FDI promotion strategy & delegation management",
      "Public-Private Partnership (PPP) framework design",
      "Trade policy alignment under AfCFTA & EAC mandates",
      "G2G cross-border trade protocol facilitation",
      "Digital procurement channels for government bodies"
    ],
    ctaLabel: "Schedule Public Sector Brief"
  },
  {
    id: "int-orgs-development",
    title: "International Organizations & Development Partners",
    badge: "ESG & Economic Inclusion",
    icon: "Handshake",
    imageUrl: "/src/assets/images/foundation_impact_bg_1786478922041.jpg",
    bgImageUrl: "/src/assets/images/foundation_impact_bg_1786478922041.jpg",
    description: "Operational execution partner for multilateral agencies, driving market access, digital inclusion, MSME empowerment, and co-funded ESG initiatives in East Africa.",
    keyBenefits: [
      "On-the-ground project execution in Tanzania & Rwanda",
      "Digital inclusion & MSME empowerment programs",
      "ESG co-implementation via Mama Mia's Foundation",
      "Transparent impact tracking & reporting",
      "Gender-inclusive trade alignment (OWIT)"
    ],
    ctaLabel: "Partner on Programs"
  },
  {
    id: "investors-pe",
    title: "Investors & Private Equity",
    badge: "Turnkey Investment Support",
    icon: "TrendingUp",
    imageUrl: "/src/assets/images/fdi_trade_bg_1786478906939.jpg",
    bgImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description: "De-risking capital deployment across East Africa. We deliver turnkey corporate structuring, sector feasibility studies, target vetting, and embedded trade insurance.",
    keyBenefits: [
      "De-risked market entry & sector feasibility studies",
      "Target company vetting & joint venture deal structuring",
      "Tax alignment, repatriation security & capital protection",
      "Embedded trade insurance & asset security",
      "Measurable ESG integration through foundation co-investment"
    ],
    ctaLabel: "Access Investment Pipeline"
  },
  {
    id: "boards-executives",
    title: "Boards of Directors & Executive Teams",
    badge: "Governance & Risk Mitigation",
    icon: "ShieldAlert",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    bgImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "Strategic oversight and geopolitical risk mitigation for boards scaling across East Africa. Fiduciary oversight, JV de-risking, and regulatory governance.",
    keyBenefits: [
      "Board-level strategic advisory & geopolitical risk assessment",
      "Regulatory compliance & governance audit frameworks",
      "Joint venture de-risking & fiduciary oversight",
      "Executive advisory during M&A and expansion",
      "Stakeholder reputation management in East Africa"
    ],
    ctaLabel: "Request Executive Advisory"
  },
  {
    id: "internal-management",
    title: "Internal Management Framework",
    badge: "Operational Blueprint",
    icon: "Cpu",
    imageUrl: "/src/assets/images/fintech_insurance_bg_1786478932121.jpg",
    bgImageUrl: "/src/assets/images/fintech_insurance_bg_1786478932121.jpg",
    description: "Our operational execution engine uniting digital technology, trade logistics, and strategic advisory. Commercial profits directly co-fund sustainable development through Mama Mia's Foundation.",
    keyBenefits: [
      "Cross-border execution engine across Dar es Salaam & Kigali",
      "Integrated FinTech, InsurTech, and e-Commerce tech stack",
      "Embedded purpose model linking revenue to ESG pillars",
      "Multinational partner network spanning Tanzania, Ghana, India & USA",
      "ISO-standard operational governance"
    ],
    ctaLabel: "View Operational Blueprint"
  }
];

export const CORE_CAPABILITIES: CapabilityCategory[] = [
  {
    id: "regulatory-structuring",
    title: "Regulatory Compliance & Corporate Structuring",
    subtitle: "Navigating legal, fiscal, and regulatory frameworks across East Africa",
    icon: "FileCheck2",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
    items: [
      {
        name: "Regulatory Navigation",
        description: "End-to-end support in securing licenses, statutory permits, tax alignment, and sector-specific compliance across Tanzania, Zanzibar, and Rwanda."
      },
      {
        name: "Corporate Structuring",
        description: "Designing robust regional holding entities, joint ventures, and operational subsidiaries aligned with cross-border trade standards and international tax treaties."
      },
      {
        name: "Strategic Business Analysis",
        description: "In-depth financial analysis, risk mitigation, corporate governance frameworks, and fiduciary safeguards for capital deployment."
      }
    ]
  },
  {
    id: "market-intelligence",
    title: "Market Intelligence & Strategic Research",
    subtitle: "Actionable on-the-ground intelligence for informed decision making",
    icon: "BarChart3",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    items: [
      {
        name: "Market Surveys & Feasibility Studies",
        description: "Comprehensive sector analyses tailored to Energy, ICT, Agriculture, Consumer Goods, Infrastructure, and Industrial Development."
      },
      {
        name: "Market Entry Strategy",
        description: "Custom Go-To-Market (GTM) blueprints for multinational firms and foreign direct investors establishing high-growth operations in East Africa."
      },
      {
        name: "Policy & Economic Intelligence",
        description: "Real-time tracking of AfCFTA, EAC, and national regulatory shifts, offering predictive insights for strategic board planning."
      }
    ]
  },
  {
    id: "digital-tech-commerce",
    title: "Digital Marketplace, Technology & Security Solutions",
    subtitle: "Multi-tier cross-border digital trade platform bridging B2B, B2G, G2B, G2G",
    icon: "Network",
    imageUrl: "/src/assets/images/fintech_insurance_bg_1786478932121.jpg",
    items: [
      {
        name: "Referral & Commission Model",
        description: "Proprietary digital marketplace model enabling verified buyers, suppliers, and trade agents to earn transparent sales commissions on trade referrals."
      },
      {
        name: "Digital Financing & Insurance Integration",
        description: "Directly integrated with Bima Kwik (www.bimakwik.com), providing licensed digital trade risk protection, cargo insurance, and automated policy issuance."
      },
      {
        name: "Multi-Tier Commerce Engine",
        description: "Unified trade portal supporting B2B supplier listing, B2G bulk procurement, G2B concessions, and G2G bilateral trade exchange."
      }
    ]
  },
  {
    id: "human-capital",
    title: "Human Capital & Capacity Building",
    subtitle: "Empowering leadership, workforce efficiency, and local integration",
    icon: "Users2",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    items: [
      {
        name: "Executive Leadership Programs",
        description: "Tailored C-suite and board development programs focusing on East African business dynamics, cross-cultural diplomacy, and regulatory strategy."
      },
      {
        name: "Negotiation & Trade Workshops",
        description: "High-impact negotiation masterclasses for G2B/B2B deal closing under AfCFTA preferential tariff regimes."
      },
      {
        name: "Operational Readiness Training",
        description: "Local capacity building and technical skills development designed to support multinational workforce integration."
      }
    ]
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: "Dr. Anselmi Anselmi Mushy",
    role: "Chairman of the Board",
    titleBadge: "Board Leadership",
    category: "board",
    bio: "Provides strategic oversight, governance excellence, and high-level institutional diplomacy across East African public and private sectors.",
    avatarInitials: "AM",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Ms. Dorice Malle",
    role: "Founder & Chief Executive Officer (CEO)",
    titleBadge: "Executive Leadership",
    category: "board",
    bio: "Visionary founder steering Mama Mia’s Soko, Bima Kwik, and I Link Limited into a premier East African trade facilitation and strategic consulting group.",
    avatarInitials: "DM",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Ms. Mary Michael",
    role: "Finance Manager",
    titleBadge: "Executive Management",
    category: "management",
    bio: "Oversees fiscal management, corporate accounting, cross-border financial compliance, and trade transaction security.",
    avatarInitials: "MM",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Ms. Evelyin Mwasyeba",
    role: "Administrative Manager",
    titleBadge: "Executive Management",
    category: "management",
    bio: "Manages operational execution, human resources, institutional logistics, and multi-hub administrative coordination.",
    avatarInitials: "EM",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  }
];

export const FOUNDATION_PILLARS: FoundationPillar[] = [
  {
    number: 1,
    title: "Digital & Financial Inclusion",
    icon: "Smartphone",
    imageUrl: "/src/assets/images/fintech_insurance_bg_1786478932121.jpg",
    summary: "Expanding access to digital tools, mobile banking platforms, and financial literacy programs across marginalized communities.",
    details: [
      "Deployment of mobile-first financial tools for rural producers",
      "Financial literacy and digital bookkeeping workshops for micro-entrepreneurs",
      "Integration of unbanked vendors into the digital trade ecosystem"
    ]
  },
  {
    number: 2,
    title: "Women & Youth Empowerment",
    icon: "Sparkles",
    imageUrl: "/src/assets/images/foundation_impact_bg_1786478922041.jpg",
    summary: "Fostering sustainable livelihoods through entrepreneurship programs, technical skills training, mentorship, and business incubation.",
    details: [
      "Targeted business incubation for women-owned enterprises",
      "OWIT (Organization of Women in International Trade) network alignment",
      "Vocational and technical skills bootcamps for East African youth"
    ]
  },
  {
    number: 3,
    title: "Health & Social Security",
    icon: "HeartPulse",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    summary: "Enhancing community wellbeing through access to affordable healthcare, digital health insurance, and social protection schemes.",
    details: [
      "Micro-health insurance distribution powered by Bima Kwik",
      "Community wellness and maternal health outreach programs",
      "Social protection framework advocacy for informal sector workers"
    ]
  },
  {
    number: 4,
    title: "Environment & Climate Resilience",
    icon: "Leaf",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    summary: "Driving clean energy adoption, sustainable agricultural practices, reforestation, and climate-resilient development models.",
    details: [
      "Solar and clean cookstove distribution in trade corridors",
      "Climate-smart agriculture training for smallholder farmers",
      "Carbon-offset reforestation partnerships across East Africa"
    ]
  },
  {
    number: 5,
    title: "Rights & Conflict Resolution",
    icon: "Scale",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    summary: "Offering community mediation, legal aid accessibility, land dispute resolution, and active advocacy for women's rights.",
    details: [
      "Accessible legal assistance for cross-border informal traders",
      "Community mediation frameworks for commercial land disputes",
      "Advocacy against gender-based discrimination in trade"
    ]
  },
  {
    number: 6,
    title: "Leadership & Capacity Building",
    icon: "GraduationCap",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    summary: "Cultivating ethical, capable future leaders through governance training, youth mentorship, and civic capacity development.",
    details: [
      "Ethical governance and anti-corruption seminars",
      "Mentorship pairing between seasoned executives and young founders",
      "Civic leadership forums across local communities"
    ]
  }
];

export const INSTITUTIONAL_AFFILIATIONS = [
  {
    name: "Tanzania National Chamber of Commerce (TNCC)",
    badge: "Platinum Member",
    tier: "Platinum",
    description: "Highest-level corporate partnership supporting national trade policies and enterprise growth across Tanzania."
  },
  {
    name: "Zanzibar National Chamber of Commerce (ZNCC)",
    badge: "Strategic Institutional Member",
    tier: "Member",
    description: "Active collaboration driving blue economy initiatives, island logistics, and cross-channel commerce."
  },
  {
    name: "Organization of Women in International Trade (OWIT)",
    badge: "Global Trade Network Partner",
    tier: "Member",
    description: "Empowering women exporters and executives through international trade corridors and policy advocacy."
  }
];
