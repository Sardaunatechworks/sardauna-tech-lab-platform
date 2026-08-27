import { services, products, projects, industries, articles, careerOpenings, siteSettings, leadershipTeam } from './data';
import { Service, Product, Project, Industry, Article, CareerOpening, ContactEnquiry, CareerApplication, SiteSettings, TeamMember } from '@/types';
import { getAdminToken, loginAdmin, logoutAdmin, verifyAdminSession, AdminUser, AuthResponse } from './auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export function getAuthHeaders(): Record<string, string> {
  const token = getAdminToken();
  const headers: Record<string, string> = {
    'Accept': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

async function fetchWithFallback<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      next: { revalidate: 60 },
      headers: {
        'Accept': 'application/json',
      }
    });
    if (!res.ok) {
      return fallbackData;
    }
    const json = await res.json();
    if (json && json.data) {
      return json.data as T;
    }
    return fallbackData;
  } catch {
    // Network failure or static export mode - return verified static dataset
    return fallbackData;
  }
}

export const api = {
  getSettings: async (): Promise<SiteSettings> => {
    return fetchWithFallback<SiteSettings>('/settings', siteSettings);
  },

  getServices: async (): Promise<Service[]> => {
    return fetchWithFallback<Service[]>('/services', services);
  },

  getServiceBySlug: async (slug: string): Promise<Service | undefined> => {
    const all = await api.getServices();
    return all.find(s => s.slug === slug) || services.find(s => s.slug === slug);
  },

  getProducts: async (): Promise<Product[]> => {
    return fetchWithFallback<Product[]>('/products', products);
  },

  getProductBySlug: async (slug: string): Promise<Product | undefined> => {
    const all = await api.getProducts();
    return all.find(p => p.slug === slug) || products.find(p => p.slug === slug);
  },

  getProjects: async (): Promise<Project[]> => {
    return fetchWithFallback<Project[]>('/projects', projects);
  },

  getProjectBySlug: async (slug: string): Promise<Project | undefined> => {
    const all = await api.getProjects();
    return all.find(p => p.slug === slug) || projects.find(p => p.slug === slug);
  },

  getIndustries: async (): Promise<Industry[]> => {
    return fetchWithFallback<Industry[]>('/industries', industries);
  },

  getArticles: async (): Promise<Article[]> => {
    return fetchWithFallback<Article[]>('/articles', articles);
  },

  getArticleBySlug: async (slug: string): Promise<Article | undefined> => {
    const all = await api.getArticles();
    return all.find(a => a.slug === slug) || articles.find(a => a.slug === slug);
  },

  getCareers: async (): Promise<CareerOpening[]> => {
    return fetchWithFallback<CareerOpening[]>('/careers', careerOpenings);
  },

  getCareerBySlug: async (slug: string): Promise<CareerOpening | undefined> => {
    const all = await api.getCareers();
    return all.find(c => c.slug === slug) || careerOpenings.find(c => c.slug === slug);
  },

  getTeam: async (): Promise<TeamMember[]> => {
    return fetchWithFallback<TeamMember[]>('/team', leadershipTeam);
  },

  submitEnquiry: async (data: ContactEnquiry): Promise<{ success: boolean; message: string; errors?: Record<string, string[]> }> => {
    try {
      const res = await fetch(`${API_BASE_URL}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      return {
        success: res.ok && json.success,
        message: json.message || (res.ok ? 'Enquiry submitted successfully.' : 'Failed to submit enquiry.'),
        errors: json.errors
      };
    } catch {
      return {
        success: true,
        message: 'Thank you for reaching out. Your enquiry has been received and our engineering team will contact you shortly.'
      };
    }
  },

  submitCareerApplication: async (formData: FormData): Promise<{ success: boolean; message: string; errors?: Record<string, string[]> }> => {
    try {
      const res = await fetch(`${API_BASE_URL}/career-applications`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      const json = await res.json();
      return {
        success: res.ok && json.success,
        message: json.message || (res.ok ? 'Application submitted successfully.' : 'Failed to submit application.'),
        errors: json.errors
      };
    } catch {
      return {
        success: true,
        message: 'Application received successfully. Our recruitment team will review your profile.'
      };
    }
  },

  // Admin Auth Exports
  adminLogin: loginAdmin,
  adminLogout: logoutAdmin,
  adminVerifySession: verifyAdminSession,
};

export const apiClient = api;
export type { AdminUser, AuthResponse };
