import { 
  fallbackServices, 
  fallbackProducts, 
  fallbackProjects, 
  fallbackArticles, 
  fallbackCareers, 
  siteSettings 
} from './data';

import {
  Service,
  Product,
  Project,
  Article,
  CareerOpening,
  SiteSettings
} from '@/types';

export interface TeamMemberCMS {
  id: string;
  name: string;
  role: string;
  department: string;
  bio?: string;
  specialty?: string;
  image?: string;
  accentColor?: string;
  isLeader?: boolean;
}

export interface PartnerCMS {
  id: string;
  name: string;
  industry: string;
  logoText: string;
  logoImage?: string;
  description: string;
  collaboration: string;
  focusArea: string;
}

export interface SectionContentCMS {
  heroTagline: string;
  heroHeadline: string;
  heroHeadlineSerif: string;
  heroDescription: string;
  aboutStoryP1: string;
  aboutStoryP2: string;
  aboutStoryP3: string;
  missionStatement: string;
  visionStatement: string;
  headquarters: string;
  establishedYear: string;
  brandLogo?: string;
}

export interface CMSData {
  sections: SectionContentCMS;
  services: Service[];
  products: Product[];
  projects: Project[];
  articles: Article[];
  careers: CareerOpening[];
  team: TeamMemberCMS[];
  partners: PartnerCMS[];
  settings: SiteSettings;
  lastUpdated: number;
}

export const defaultTeam: TeamMemberCMS[] = [
  {
    id: 'team-1',
    name: 'Muhammad Auwal Abubakar',
    role: 'Founder & Chief Executive Officer',
    department: 'Executive Leadership',
    image: '/team/muhammad-auwal.png',
    accentColor: '#A3E635',
    bio: 'Leads engineering strategy, system architecture, and overall technical execution across all proprietary platforms and client projects.',
    isLeader: true
  },
  {
    id: 'team-2',
    name: 'Maryam Abubakar',
    role: 'Co-Founder',
    department: 'Executive Leadership',
    accentColor: '#F5A623',
    bio: 'Directs operations, strategic partnerships, and organizational growth, ensuring seamless delivery across multi-disciplinary teams.',
    isLeader: true
  },
  {
    id: 'team-3',
    name: 'Ibrahim Sani',
    role: 'Lead Full-Stack Engineer',
    department: 'Software Engineering',
    specialty: 'Next.js, Laravel, REST APIs',
    accentColor: '#38BDF8',
    isLeader: false
  },
  {
    id: 'team-4',
    name: 'Amina Bello',
    role: 'Lead UI/UX Product Designer',
    department: 'Product & Design',
    specialty: 'Design Systems, User Research',
    accentColor: '#F43F5E',
    isLeader: false
  },
  {
    id: 'team-5',
    name: 'Farouk Usman',
    role: 'Senior Backend & Cloud Architect',
    department: 'Infrastructure',
    specialty: 'PostgreSQL, Linux, Docker',
    accentColor: '#A3E635',
    isLeader: false
  },
  {
    id: 'team-6',
    name: 'Fatima Dahiru',
    role: 'Frontend & Mobile Developer',
    department: 'Software Engineering',
    specialty: 'React Native, TypeScript, Tailwind',
    accentColor: '#F5A623',
    isLeader: false
  },
  {
    id: 'team-7',
    name: 'Usman Garba',
    role: 'QA & DevOps Engineer',
    department: 'Quality & Reliability',
    specialty: 'CI/CD, Security, Load Testing',
    accentColor: '#818CF8',
    isLeader: false
  },
  {
    id: 'team-8',
    name: 'Zainab Aliyu',
    role: 'Technical Product Manager',
    department: 'Product Delivery',
    specialty: 'Agile Governance, Client Delivery',
    accentColor: '#34D399',
    isLeader: false
  }
];

export const defaultPartners: PartnerCMS[] = [
  {
    id: 'partner-1',
    name: 'Kano Commercial Syndicate',
    industry: 'Wholesale Commerce & Distribution',
    logoText: 'KCS',
    description: 'A major wholesale trading consortium operating multi-branch commodity distribution across Northern Nigeria.',
    collaboration: 'TraderERP multi-warehouse stock deployment, POS integration, and automated accounting telemetry.',
    focusArea: 'Retail Automation & Supply Chain'
  },
  {
    id: 'partner-2',
    name: 'Horizon Events & Media Ltd',
    industry: 'Live Events & Entertainment',
    logoText: 'HEM',
    description: 'Premier event production and entertainment agency organizing large-scale corporate conferences, expos, and festivals.',
    collaboration: 'EventPass digital ticketing infrastructure, encrypted gate validation, and fraud-resistant access control.',
    focusArea: 'Access Control & Event Telemetry'
  },
  {
    id: 'partner-3',
    name: 'Jigawa Integrated Logistics',
    industry: 'Transport & Fleet Logistics',
    logoText: 'JIL',
    description: 'Regional haulage and logistics enterprise providing freight aggregation, cargo tracking, and route management.',
    collaboration: 'Custom driver dispatch software, fuel tracking algorithms, and real-time delivery status portals.',
    focusArea: 'Custom Software & Fleet Tracking'
  },
  {
    id: 'partner-4',
    name: 'Arewa Retail Merchants Network',
    industry: 'SME Retail Consortium',
    logoText: 'ARMN',
    description: 'An umbrella network representing over 120 independent supermarket owners and retail stores in urban centers.',
    collaboration: 'Deployment of localized Point of Sale systems, daily profit reconciliation, and digital debt ledgers.',
    focusArea: 'SME Digitization & Financial Systems'
  },
  {
    id: 'partner-5',
    name: 'Apex Document & Legal Registry',
    industry: 'Legal & Corporate Compliance',
    logoText: 'ADLR',
    description: 'Corporate advisory and regulatory compliance consultancy assisting regional enterprises with document workflows.',
    collaboration: 'Secure document validation portal, encrypted audit log tracking, and client self-service archive.',
    focusArea: 'Enterprise Document Security'
  },
  {
    id: 'partner-6',
    name: 'North-Gate Educational Trust',
    industry: 'Education & Institutional Training',
    logoText: 'NGET',
    description: 'Educational trust managing private secondary institutions and vocational technical development academies.',
    collaboration: 'Student records management platform, online fee billing portal, and academic reporting systems.',
    focusArea: 'Institutional Portals & EdTech'
  }
];

export const defaultSections: SectionContentCMS = {
  heroTagline: 'Software • Digital Systems • Enterprise Cloud',
  heroHeadline: 'We build technology for',
  heroHeadlineSerif: 'modern organizations.',
  heroDescription: 'We design software, digital products and business systems that solve real operational problems.',
  aboutStoryP1: 'Founded in 2023, Sardauna Tech Lab began as an independent freelance initiative and has since grown into a structured, registered technology company.',
  aboutStoryP2: 'Over time, this gradually evolved into a more structured operation. Recognizing the potential to create greater impact, I brought together a team of equally passionate and like-minded individuals. Together, we restructured the venture and officially registered it as Sardauna Tech Lab Ltd.',
  aboutStoryP3: 'From the beginning, our focus has been on solving real business challenges through innovative digital solutions. Today, Sardauna Tech Lab Ltd provides web development, automation tools, and scalable platforms that empower small and medium enterprises to operate efficiently, reach more customers, and grow sustainably.',
  missionStatement: 'To design and deliver practical, scalable digital solutions that solve real business problems. We are committed to helping small and medium enterprises transition from manual, fragmented operations to structured, automated systems through web development, intelligent tools, and innovative technology products.',
  visionStatement: 'To be a premier African technology and software engineering institution recognized for building dependable software systems, disciplined delivery, and empowering enterprises to operate efficiently, reach more customers, and scale sustainably.',
  headquarters: 'Dutse, Jigawa State, Nigeria',
  establishedYear: '2023'
};

export const defaultCMSData: CMSData = {
  sections: defaultSections,
  services: fallbackServices,
  products: fallbackProducts as any,
  projects: fallbackProjects as any,
  articles: fallbackArticles as any,
  careers: fallbackCareers as any,
  team: defaultTeam,
  partners: defaultPartners,
  settings: siteSettings as any,
  lastUpdated: Date.now()
};

const STORAGE_KEY = 'stl_cms_data_v2';
const EVENT_KEY = 'stl_cms_update';

export function getCMSData(): CMSData {
  if (typeof window === 'undefined') {
    return defaultCMSData;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultCMSData;
    }
    const parsed = JSON.parse(raw);
    return {
      ...defaultCMSData,
      ...parsed,
      sections: { ...defaultCMSData.sections, ...(parsed.sections || {}) },
      services: parsed.services?.length ? parsed.services : defaultCMSData.services,
      products: parsed.products?.length ? parsed.products : defaultCMSData.products,
      projects: parsed.projects?.length ? parsed.projects : defaultCMSData.projects,
      team: parsed.team?.length ? parsed.team : defaultCMSData.team,
      partners: parsed.partners?.length ? parsed.partners : defaultCMSData.partners,
      articles: parsed.articles?.length ? parsed.articles : defaultCMSData.articles,
      careers: parsed.careers?.length ? parsed.careers : defaultCMSData.careers,
      settings: { ...defaultCMSData.settings, ...(parsed.settings || {}) }
    };
  } catch {
    return defaultCMSData;
  }
}

export function saveCMSData(data: Partial<CMSData>): CMSData {
  if (typeof window === 'undefined') return defaultCMSData;
  const current = getCMSData();
  const updated: CMSData = {
    ...current,
    ...data,
    lastUpdated: Date.now()
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: updated }));
  } catch (err) {
    console.error('Failed to persist CMS data', err);
  }
  return updated;
}

export function resetCMSData(): CMSData {
  if (typeof window === 'undefined') return defaultCMSData;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: defaultCMSData }));
  } catch (err) {
    console.error('Failed to reset CMS data', err);
  }
  return defaultCMSData;
}
