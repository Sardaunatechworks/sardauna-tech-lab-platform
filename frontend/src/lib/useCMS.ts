'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  CMSData, 
  getCMSData, 
  saveCMSData, 
  resetCMSData, 
  defaultCMSData,
  TeamMemberCMS,
  PartnerCMS,
  SectionContentCMS
} from './cms-store';
import { 
  Service, 
  Product, 
  Project, 
  Article, 
  CareerOpening, 
  SiteSettings 
} from '@/types';

export function useCMS() {
  const [data, setData] = useState<CMSData>(defaultCMSData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initial client mount read
    setData(getCMSData());
    setIsLoaded(true);

    const handleCustomUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<CMSData>;
      if (customEvent.detail) {
        setData(customEvent.detail);
      } else {
        setData(getCMSData());
      }
    };

    const handleStorageUpdate = (e: StorageEvent) => {
      if (e.key === 'stl_cms_data_v2' || !e.key) {
        setData(getCMSData());
      }
    };

    window.addEventListener('stl_cms_update', handleCustomUpdate);
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('stl_cms_update', handleCustomUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  const updateSections = useCallback((sections: Partial<SectionContentCMS>) => {
    const current = getCMSData();
    return saveCMSData({
      sections: { ...current.sections, ...sections }
    });
  }, []);

  const saveService = useCallback((service: Service) => {
    const current = getCMSData();
    const exists = current.services.some(s => s.id === service.id || s.slug === service.slug);
    const updated = exists
      ? current.services.map(s => (s.id === service.id || s.slug === service.slug) ? service : s)
      : [...current.services, { ...service, id: service.id || Date.now() }];
    return saveCMSData({ services: updated });
  }, []);

  const deleteService = useCallback((slugOrId: string | number) => {
    const current = getCMSData();
    const updated = current.services.filter(s => s.id !== slugOrId && s.slug !== slugOrId);
    return saveCMSData({ services: updated });
  }, []);

  const saveProduct = useCallback((product: Product) => {
    const current = getCMSData();
    const exists = current.products.some(p => p.id === product.id || p.slug === product.slug);
    const updated = exists
      ? current.products.map(p => (p.id === product.id || p.slug === product.slug) ? product : p)
      : [...current.products, { ...product, id: product.id || Date.now() }];
    return saveCMSData({ products: updated });
  }, []);

  const deleteProduct = useCallback((slugOrId: string | number) => {
    const current = getCMSData();
    const updated = current.products.filter(p => p.id !== slugOrId && p.slug !== slugOrId);
    return saveCMSData({ products: updated });
  }, []);

  const saveProject = useCallback((project: Project) => {
    const current = getCMSData();
    const exists = current.projects.some(p => p.id === project.id || p.slug === project.slug);
    const updated = exists
      ? current.projects.map(p => (p.id === project.id || p.slug === project.slug) ? project : p)
      : [...current.projects, { ...project, id: project.id || Date.now() }];
    return saveCMSData({ projects: updated });
  }, []);

  const deleteProject = useCallback((slugOrId: string | number) => {
    const current = getCMSData();
    const updated = current.projects.filter(p => p.id !== slugOrId && p.slug !== slugOrId);
    return saveCMSData({ projects: updated });
  }, []);

  const saveTeamMember = useCallback((member: TeamMemberCMS) => {
    const current = getCMSData();
    const exists = current.team.some(t => t.id === member.id);
    const updated = exists
      ? current.team.map(t => t.id === member.id ? member : t)
      : [...current.team, { ...member, id: member.id || `team-${Date.now()}` }];
    return saveCMSData({ team: updated });
  }, []);

  const deleteTeamMember = useCallback((id: string) => {
    const current = getCMSData();
    const updated = current.team.filter(t => t.id !== id);
    return saveCMSData({ team: updated });
  }, []);

  const savePartner = useCallback((partner: PartnerCMS) => {
    const current = getCMSData();
    const exists = current.partners.some(p => p.id === partner.id);
    const updated = exists
      ? current.partners.map(p => p.id === partner.id ? partner : p)
      : [...current.partners, { ...partner, id: partner.id || `partner-${Date.now()}` }];
    return saveCMSData({ partners: updated });
  }, []);

  const deletePartner = useCallback((id: string) => {
    const current = getCMSData();
    const updated = current.partners.filter(p => p.id !== id);
    return saveCMSData({ partners: updated });
  }, []);

  const saveArticle = useCallback((article: Article) => {
    const current = getCMSData();
    const exists = current.articles.some(a => a.id === article.id || a.slug === article.slug);
    const updated = exists
      ? current.articles.map(a => (a.id === article.id || a.slug === article.slug) ? article : a)
      : [...current.articles, { ...article, id: article.id || Date.now() }];
    return saveCMSData({ articles: updated });
  }, []);

  const deleteArticle = useCallback((slugOrId: string | number) => {
    const current = getCMSData();
    const updated = current.articles.filter(a => a.id !== slugOrId && a.slug !== slugOrId);
    return saveCMSData({ articles: updated });
  }, []);

  const saveCareer = useCallback((career: CareerOpening) => {
    const current = getCMSData();
    const exists = current.careers.some(c => c.id === career.id || c.slug === career.slug);
    const updated = exists
      ? current.careers.map(c => (c.id === career.id || c.slug === career.slug) ? career : c)
      : [...current.careers, { ...career, id: career.id || Date.now() }];
    return saveCMSData({ careers: updated });
  }, []);

  const deleteCareer = useCallback((slugOrId: string | number) => {
    const current = getCMSData();
    const updated = current.careers.filter(c => c.id !== slugOrId && c.slug !== slugOrId);
    return saveCMSData({ careers: updated });
  }, []);

  const updateSettings = useCallback((settings: Partial<SiteSettings>) => {
    const current = getCMSData();
    return saveCMSData({
      settings: { ...current.settings, ...settings }
    });
  }, []);

  return {
    data,
    isLoaded,
    updateSections,
    saveService,
    deleteService,
    saveProduct,
    deleteProduct,
    saveProject,
    deleteProject,
    saveTeamMember,
    deleteTeamMember,
    savePartner,
    deletePartner,
    saveArticle,
    deleteArticle,
    saveCareer,
    deleteCareer,
    updateSettings,
    resetToDefault: resetCMSData
  };
}
