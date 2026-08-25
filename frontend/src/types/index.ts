export interface Service {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  icon: string;
  hero_title: string;
  hero_description: string;
  status: 'active' | 'inactive';
  sort_order: number;
  featured: boolean;
  seo_title?: string;
  seo_description?: string;
  features?: ServiceFeature[];
  challenges_solved?: string[];
  deliverables?: string[];
  process_steps?: { step: string; title: string; description: string }[];
  technologies?: string[];
  related_projects?: string[];
}

export interface ServiceFeature {
  id: number;
  service_id: number;
  title: string;
  description: string;
  icon?: string;
  sort_order: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  short_description: string;
  description: string;
  logo?: string;
  featured_image?: string;
  website_url?: string;
  status: 'in_development' | 'live' | 'beta';
  featured: boolean;
  sort_order: number;
  seo_title?: string;
  seo_description?: string;
  features?: ProductFeature[];
  problem?: string;
  solution?: string;
  target_audience?: string[];
  technologies?: string[];
  screenshots?: string[];
}

export interface ProductFeature {
  id: number;
  product_id: number;
  title: string;
  description: string;
  icon?: string;
  sort_order: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  service_category: string;
  short_description: string;
  overview: string;
  challenge: string;
  requirements?: string[];
  approach?: string;
  solution: string;
  outcome: string;
  featured_image: string;
  project_url?: string;
  year: string;
  status: 'completed' | 'ongoing' | 'archived';
  featured: boolean;
  sort_order: number;
  technologies: string[];
  system_capabilities?: string[];
  gallery?: string[];
  seo_title?: string;
  seo_description?: string;
}

export interface Industry {
  id: number;
  name: string;
  slug: string;
  description: string;
  challenges: string[];
  opportunities: string[];
  relevant_services: string[];
  icon: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  published_at: string;
  read_time: string;
  seo_title?: string;
  seo_description?: string;
  tags?: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  short_bio: string;
  full_bio: string;
  photo?: string;
  linkedin_url?: string;
  github_url?: string;
  twitter_url?: string;
  email?: string;
  sort_order: number;
  visible: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  testimonial: string;
  photo?: string;
  organization_logo?: string;
  featured: boolean;
  status: 'published' | 'draft';
}

export interface CareerOpening {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: 'Full-time' | 'Part-time' | 'Contract' | 'Hybrid' | 'Remote' | 'Internship';
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred_skills: string[];
  status: 'open' | 'closed';
  deadline?: string;
}

export interface CareerApplication {
  id?: number;
  career_id?: number;
  career_title?: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  cover_note: string;
  portfolio_url?: string;
  linkedin_url?: string;
  cv_path?: string;
  status?: 'new' | 'reviewing' | 'shortlisted' | 'rejected' | 'hired';
  created_at?: string;
}

export interface ContactEnquiry {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  enquiry_type: 'Start a Project' | 'General Enquiry' | 'Partnership' | 'Consulting' | 'Support' | 'Careers';
  service?: string;
  budget_range?: string;
  timeline?: string;
  message: string;
  source?: string;
  status?: 'new' | 'reviewing' | 'contacted' | 'qualified' | 'proposal_sent' | 'won' | 'lost' | 'archived';
  admin_notes?: string;
  created_at?: string;
}

export interface SiteSettings {
  company_name: string;
  company_email: string;
  support_email: string;
  phone_primary: string;
  phone_secondary: string;
  address: string;
  rc_number: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  x_twitter?: string;
  github?: string;
  youtube?: string;
  default_seo_title: string;
  default_seo_description: string;
}
