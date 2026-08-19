export interface StakeholderProfile {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  keyBenefits: string[];
  ctaLabel: string;
  imageUrl?: string;
  bgImageUrl?: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  imageUrl?: string;
  items: {
    name: string;
    description: string;
  }[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  titleBadge: string;
  category: 'board' | 'management';
  bio: string;
  avatarInitials: string;
  imageUrl?: string;
}

export interface FoundationPillar {
  number: number;
  title: string;
  icon: string;
  summary: string;
  details: string[];
  imageUrl?: string;
}

export interface EcosystemPortal {
  name: string;
  domain: string;
  url: string;
  focus: string;
  icon: string;
  badge: string;
  description: string;
  imageUrl?: string;
}

export interface ConsultationBooking {
  name: string;
  email: string;
  organization: string;
  phone: string;
  stakeholderType: string;
  preferredHub: 'Dar es Salaam' | 'Kigali' | 'Virtual';
  notes: string;
}
