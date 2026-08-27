'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  BarChart3, 
  Inbox, 
  Layers, 
  Cpu, 
  Briefcase, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  Search, 
  Filter, 
  ChevronRight, 
  ShieldCheck, 
  ExternalLink,
  Plus,
  Edit2,
  Trash2,
  Save,
  RotateCcw,
  Sparkles,
  Building2,
  Handshake,
  Check,
  AlertCircle,
  Eye,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { useCMS } from '@/lib/useCMS';
import { Service, Product, Project, Article, CareerOpening } from '@/types';
import { TeamMemberCMS, PartnerCMS } from '@/lib/cms-store';
import { ImageUploadField } from '@/components/admin/ImageUploadField';
import { logoutAdmin, verifyAdminSession, getAdminUser, AdminUser } from '@/lib/auth';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'sections' | 'services' | 'products' | 'projects' | 'team' | 'partners' | 'articles' | 'careers' | 'enquiries' | 'settings'
  >('overview');

  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    data: cms,
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
    resetToDefault
  } = useCMS();

  // Active editing modals
  const [modalType, setModalType] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Section Form state
  const [sectionForm, setSectionForm] = useState(cms.sections);

  useEffect(() => {
    if (isLoaded) {
      setSectionForm(cms.sections);
    }
  }, [isLoaded, cms.sections]);

  // Toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Mock CRM enquiry dataset
  const [enquiries, setEnquiries] = useState([
    { id: 101, name: 'Aminu Bello', email: 'aminu.b@kanomerchants.com', company: 'Kano Commercial Syndicate', service: 'TraderERP Suite', status: 'new', date: 'Today, 10:14 AM', message: 'Looking for a 4-branch deployment with receipt printers.' },
    { id: 102, name: 'Zainab Danladi', email: 'zainab@eventshorizon.ng', company: 'Horizon Entertainment Ltd', service: 'EventPass Platform', status: 'reviewing', date: 'Yesterday, 4:30 PM', message: 'Need gate scanning app for 5,000 attendee festival in Dutse.' },
    { id: 103, name: 'Farouk Usman', email: 'fusman@jigawalogistics.org', company: 'Jigawa Integrated Logistics', service: 'Custom Software Systems', status: 'proposal_sent', date: 'Aug 20, 2026', message: 'Cargo tracking and driver dispatch portal requirement.' },
    { id: 104, name: 'Ibrahim Sani', email: 'isani@dutsehealth.gov.ng', company: 'Regional Health Registry', service: 'Backend & Cloud Solutions', status: 'won', date: 'Aug 18, 2026', message: 'Database optimization and server migration.' },
  ]);

  useEffect(() => {
    let isMounted = true;

    async function checkAuthentication() {
      try {
        const { isValid, user: verifiedUser } = await verifyAdminSession();
        if (!isMounted) return;

        if (!isValid) {
          router.replace('/admin/login?reason=session_expired');
          return;
        }

        if (verifiedUser) {
          setUser(verifiedUser);
        } else {
          const cached = getAdminUser();
          if (cached) setUser(cached);
        }
        setIsAuthChecking(false);
      } catch {
        if (isMounted) {
          router.replace('/admin/login?reason=session_expired');
        }
      }
    }

    checkAuthentication();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const handleLogout = async () => {
    await logoutAdmin();
    router.replace('/admin/login');
  };

  const updateEnquiryStatus = (id: number, status: string) => {
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status } : e));
    showToast('Enquiry status updated.');
  };

  const handleSaveSections = (e: React.FormEvent) => {
    e.preventDefault();
    updateSections(sectionForm);
    showToast('Website section content synchronized live!');
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'sections', label: 'Sections Content', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'services', label: 'Services', icon: <Layers className="w-4 h-4" />, count: cms.services.length },
    { id: 'products', label: 'Products', icon: <Cpu className="w-4 h-4" />, count: cms.products.length },
    { id: 'projects', label: 'Case Studies', icon: <Briefcase className="w-4 h-4" />, count: cms.projects.length },
    { id: 'team', label: 'Team & Leadership', icon: <Users className="w-4 h-4" />, count: cms.team.length },
    { id: 'partners', label: 'Partners', icon: <Handshake className="w-4 h-4" />, count: cms.partners.length },
    { id: 'articles', label: 'Insights & Articles', icon: <FileText className="w-4 h-4" />, count: cms.articles.length },
    { id: 'careers', label: 'Careers & Talent', icon: <Building2 className="w-4 h-4" />, count: cms.careers.length },
    { id: 'enquiries', label: 'Enquiries CRM', icon: <Inbox className="w-4 h-4" />, count: enquiries.filter(e => e.status === 'new').length },
    { id: 'settings', label: 'Site Settings & SEO', icon: <Settings className="w-4 h-4" /> },
  ];

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-[#06101E] flex flex-col items-center justify-center text-white px-4">
        <div className="flex flex-col items-center space-y-4 max-w-sm text-center">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white/10 border border-[#F5A623]/40 p-2 flex items-center justify-center shadow-2xl backdrop-blur-md">
            <img
              src="/sardauna-logo.png"
              alt="Sardauna Tech Lab"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#F5A623]">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>Validating Security Session</span>
          </div>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#F5A623] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
          </div>
          <p className="text-xs text-[#94A3B8]">
            Verifying cryptographic credentials with governance authority...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#06101E] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#F5A623]/50 flex items-center gap-3 animate-fade-up text-sm">
          <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <header className="bg-[#06101E] text-white border-b border-white/10 px-6 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-[#F5A623]/40 p-0.5 flex items-center justify-center">
            <img
              src="/sardauna-logo.png"
              alt="Sardauna Tech Lab"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-bold tracking-tight">Sardauna Tech Lab Ltd &bull; CMS</div>
            <div className="text-[10px] text-[#94A3B8]">Live Content Synchronization Console</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#CBD5E1] hover:text-[#F5A623] flex items-center gap-1.5 transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
          <div className="text-right hidden sm:block">
            <div className="text-xs font-bold">{user?.name || 'Administrator'}</div>
            <div className="text-[10px] text-[#F5A623] uppercase font-mono">
              {user?.role ? user.role.replace('_', ' ') : 'Super Admin'}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="p-1.5 text-[#94A3B8] hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Admin Workspace Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Navigation Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r border-[#E2E8F0] p-4 flex flex-col justify-between shrink-0">
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider px-3 py-2">
              Content &amp; Operations
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors text-left ${
                  activeTab === item.id 
                    ? 'bg-[#06101E] text-white font-semibold shadow-sm' 
                    : 'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    activeTab === item.id 
                      ? 'bg-[#F5A623] text-[#06101E]' 
                      : 'bg-[#F1F5F9] text-[#64748B]'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E2E8F0] text-[11px] text-[#94A3B8] px-3 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Sync Active
            </div>
            <div className="text-[10px]">Changes reflect instantly on client.</div>
          </div>
        </aside>

        {/* Content Workspace Area */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto max-w-7xl">
          
          {/* ========================================================================= */}
          {/* TAB 1: OVERVIEW */}
          {/* ========================================================================= */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">System Overview</h1>
                <p className="text-xs text-[#64748B]">Real-time operational health, site metrics, and quick CRUD shortcuts.</p>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <div className="text-xs font-semibold text-[#64748B] uppercase">Active Services</div>
                  <div className="text-2xl font-black text-[#0F172A] mt-1">{cms.services.length}</div>
                  <button onClick={() => setActiveTab('services')} className="text-[11px] text-[#F5A623] font-semibold hover:underline mt-2 inline-flex items-center gap-1">
                    Manage Services <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <div className="text-xs font-semibold text-[#64748B] uppercase">Products &amp; Platforms</div>
                  <div className="text-2xl font-black text-[#0F172A] mt-1">{cms.products.length}</div>
                  <button onClick={() => setActiveTab('products')} className="text-[11px] text-[#F5A623] font-semibold hover:underline mt-2 inline-flex items-center gap-1">
                    Manage Products <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <div className="text-xs font-semibold text-[#64748B] uppercase">Team Members</div>
                  <div className="text-2xl font-black text-[#0F172A] mt-1">{cms.team.length}</div>
                  <button onClick={() => setActiveTab('team')} className="text-[11px] text-[#F5A623] font-semibold hover:underline mt-2 inline-flex items-center gap-1">
                    Manage Team <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <div className="text-xs font-semibold text-[#64748B] uppercase">Ecosystem Partners</div>
                  <div className="text-2xl font-black text-[#0F172A] mt-1">{cms.partners.length}</div>
                  <button onClick={() => setActiveTab('partners')} className="text-[11px] text-[#F5A623] font-semibold hover:underline mt-2 inline-flex items-center gap-1">
                    Manage Partners <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Quick Actions Row */}
              <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">Instant Content Actions</h2>
                  <span className="text-xs text-[#64748B]">All changes update live immediately</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => setActiveTab('sections')}
                    className="px-4 py-2 bg-[#06101E] text-white hover:bg-[#0A192F] rounded-lg text-xs font-semibold flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" /> Edit Hero &amp; About Story
                  </button>
                  <button
                    onClick={() => {
                      setEditingItem({ title: '', slug: '', short_description: '', full_description: '', icon: 'Globe', deliverables: [], technologies: [] });
                      setModalType('service');
                    }}
                    className="px-4 py-2 bg-neutral-100 text-[#0F172A] hover:bg-neutral-200 rounded-lg text-xs font-semibold flex items-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#F5A623]" /> Add New Service
                  </button>
                  <button
                    onClick={() => {
                      setEditingItem({ name: '', role: '', department: 'Software Engineering', specialty: '', accentColor: '#38BDF8', isLeader: false });
                      setModalType('team');
                    }}
                    className="px-4 py-2 bg-neutral-100 text-[#0F172A] hover:bg-neutral-200 rounded-lg text-xs font-semibold flex items-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#F5A623]" /> Add Team Member
                  </button>
                  <button
                    onClick={() => {
                      setEditingItem({ name: '', industry: '', logoText: '', description: '', collaboration: '', focusArea: '' });
                      setModalType('partner');
                    }}
                    className="px-4 py-2 bg-neutral-100 text-[#0F172A] hover:bg-neutral-200 rounded-lg text-xs font-semibold flex items-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#F5A623]" /> Add Partner
                  </button>
                </div>
              </div>

              {/* Recent Enquiries Triage */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
                  <h2 className="text-sm font-bold text-[#0F172A]">Recent Contact Enquiries</h2>
                  <button onClick={() => setActiveTab('enquiries')} className="text-xs text-[#F5A623] font-semibold hover:underline">
                    View All ({enquiries.length})
                  </button>
                </div>
                <div className="divide-y divide-[#E2E8F0]">
                  {enquiries.slice(0, 3).map((enq) => (
                    <div key={enq.id} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-[#0F172A]">{enq.name} &bull; <span className="text-[#64748B] font-normal">{enq.company}</span></div>
                        <div className="text-[11px] text-[#64748B] mt-0.5">{enq.service} &bull; {enq.email}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                          enq.status === 'new' ? 'bg-amber-100 text-amber-800' :
                          enq.status === 'won' ? 'bg-emerald-100 text-emerald-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {enq.status}
                        </span>
                        <span className="text-[#94A3B8] text-[11px]">{enq.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: SECTIONS CONTENT EDITOR (HERO, ABOUT, MISSION & VISION) */}
          {/* ========================================================================= */}
          {activeTab === 'sections' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Website Sections Content</h1>
                  <p className="text-xs text-[#64748B]">Edit headlines, story narrative, and mission statements across the site.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSectionForm(cms.sections);
                      showToast('Form reset to current saved content.');
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] bg-white border border-[#E2E8F0] rounded-lg"
                  >
                    Discard Changes
                  </button>
                  <button
                    onClick={handleSaveSections}
                    className="px-5 py-2 text-xs font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg flex items-center gap-2 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" /> Save &amp; Publish Live
                  </button>
                </div>
              </div>

              <form onSubmit={handleSaveSections} className="space-y-6">
                {/* Hero Section Block */}
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
                    <Sparkles className="w-4 h-4 text-[#F5A623]" />
                    <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">Hero Section (Homepage)</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#475569]">Category Tagline</label>
                      <input
                        type="text"
                        value={sectionForm.heroTagline}
                        onChange={(e) => setSectionForm({ ...sectionForm, heroTagline: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#475569]">Headquarters Location</label>
                      <input
                        type="text"
                        value={sectionForm.headquarters}
                        onChange={(e) => setSectionForm({ ...sectionForm, headquarters: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#475569]">Headline (Primary)</label>
                      <input
                        type="text"
                        value={sectionForm.heroHeadline}
                        onChange={(e) => setSectionForm({ ...sectionForm, heroHeadline: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#475569]">Headline (Serif Accent)</label>
                      <input
                        type="text"
                        value={sectionForm.heroHeadlineSerif}
                        onChange={(e) => setSectionForm({ ...sectionForm, heroHeadlineSerif: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Hero Subtitle / Description</label>
                    <textarea
                      rows={2}
                      value={sectionForm.heroDescription}
                      onChange={(e) => setSectionForm({ ...sectionForm, heroDescription: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                    />
                  </div>
                </div>

                {/* About Us Narrative Block */}
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
                    <Building2 className="w-4 h-4 text-[#F5A623]" />
                    <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">About Our Company Story (Company Page)</h2>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Paragraph 1 (Founding Origin)</label>
                    <textarea
                      rows={3}
                      value={sectionForm.aboutStoryP1}
                      onChange={(e) => setSectionForm({ ...sectionForm, aboutStoryP1: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Paragraph 2 (Evolution &amp; Team Formation)</label>
                    <textarea
                      rows={3}
                      value={sectionForm.aboutStoryP2}
                      onChange={(e) => setSectionForm({ ...sectionForm, aboutStoryP2: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Paragraph 3 (Modern Operations &amp; Value)</label>
                    <textarea
                      rows={3}
                      value={sectionForm.aboutStoryP3}
                      onChange={(e) => setSectionForm({ ...sectionForm, aboutStoryP3: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                    />
                  </div>
                </div>

                {/* Mission & Vision Block */}
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
                    <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
                    <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">Mission &amp; Vision Statements</h2>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Mission Statement</label>
                    <textarea
                      rows={3}
                      value={sectionForm.missionStatement}
                      onChange={(e) => setSectionForm({ ...sectionForm, missionStatement: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Vision Statement</label>
                    <textarea
                      rows={3}
                      value={sectionForm.visionStatement}
                      onChange={(e) => setSectionForm({ ...sectionForm, visionStatement: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                    />
                  </div>
                </div>

                {/* Brand Logo & Media Upload Block */}
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
                    <ImageIcon className="w-4 h-4 text-[#F5A623]" />
                    <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">Brand Logo &amp; Corporate Identity</h2>
                  </div>

                  <ImageUploadField
                    label="Official Brand Logo"
                    value={sectionForm.brandLogo || '/sardauna-logo.png'}
                    onChange={(img) => setSectionForm({ ...sectionForm, brandLogo: img })}
                    aspectRatio="wide"
                    helperText="Upload the official high-resolution logo (PNG with transparent background or SVG recommended)."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-bold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl flex items-center gap-2 shadow-md"
                  >
                    <Save className="w-4 h-4" /> Save &amp; Synchronize Sections
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: SERVICES CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Services &amp; Capabilities</h1>
                  <p className="text-xs text-[#64748B]">Create, edit, and organize core technical service capabilities.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: Date.now(),
                      title: '',
                      slug: '',
                      short_description: '',
                      full_description: '',
                      icon: 'Globe',
                      deliverables: ['Custom Development', 'Architecture Review', 'Support SLA'],
                      technologies: ['React', 'Laravel', 'TypeScript'],
                      process_steps: []
                    });
                    setModalType('service');
                  }}
                  className="px-4 py-2.5 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Capability
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cms.services.map((service) => (
                  <div key={service.slug} className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-neutral-100 text-[#475569]">
                          /{service.slug}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingItem({ ...service });
                              setModalType('service');
                            }}
                            className="p-1.5 text-[#475569] hover:text-[#06101E] hover:bg-neutral-100 rounded-md"
                            title="Edit Service"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Delete service "${service.title}"?`)) {
                                deleteService(service.slug);
                                showToast(`Deleted service "${service.title}".`);
                              }
                            }}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-md"
                            title="Delete Service"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-[#0F172A]">{service.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                        {service.short_description}
                      </p>

                      {service.deliverables && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {service.deliverables.slice(0, 3).map((d: string) => (
                            <span key={d} className="text-[10px] px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-[#475569]">
                              {d}
                            </span>
                          ))}
                          {service.deliverables.length > 3 && (
                            <span className="text-[10px] text-[#94A3B8]">+{service.deliverables.length - 3} more</span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <Link href={`/services/${service.slug}`} target="_blank" className="text-[#F5A623] font-semibold hover:underline flex items-center gap-1">
                        View Live Page <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: PRODUCTS CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Proprietary Products &amp; Platforms</h1>
                  <p className="text-xs text-[#64748B]">Manage EventPass, TraderERP, and new proprietary software suites.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: Date.now(),
                      name: '',
                      slug: '',
                      subtitle: '',
                      short_description: '',
                      full_description: '',
                      key_features: ['Feature 1', 'Feature 2'],
                      status: 'active'
                    });
                    setModalType('product');
                  }}
                  className="px-4 py-2.5 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Product
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cms.products.map((product) => (
                  <div key={product.slug} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">
                          {product.tagline || (product as any).subtitle || 'Software Suite'}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingItem({ ...product });
                              setModalType('product');
                            }}
                            className="p-1.5 text-[#475569] hover:text-[#0F172A] hover:bg-neutral-100 rounded-md"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Delete product "${product.name}"?`)) {
                                deleteProduct(product.slug);
                                showToast(`Deleted product "${product.name}".`);
                              }
                            }}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-md"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#0F172A]">{product.name}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {product.short_description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-semibold text-[#475569] uppercase">Key Features:</div>
                        <div className="space-y-1">
                          {((product as any).key_features || product.features) && ((product as any).key_features || product.features).slice(0, 3).map((f: any) => (
                            <div key={typeof f === 'string' ? f : f.title || String(f)} className="text-xs text-[#64748B] flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                              <span>{typeof f === 'string' ? f : f.title || String(f)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <Link href={`/solutions/${product.slug}`} target="_blank" className="text-[#F5A623] font-semibold hover:underline flex items-center gap-1">
                        View Product Page <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: CASE STUDIES / PROJECTS CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Case Studies &amp; Projects</h1>
                  <p className="text-xs text-[#64748B]">Manage engineering case studies displayed on the work page and homepage.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: Date.now(),
                      title: '',
                      slug: '',
                      client_name: '',
                      industry: 'Commercial Retail',
                      service_category: 'Custom Software Systems',
                      short_description: '',
                      overview: '',
                      challenge: '',
                      solution: '',
                      outcome: '',
                      technologies: ['Next.js', 'Laravel', 'MySQL'],
                      system_capabilities: ['Capability 1', 'Capability 2'],
                      year: '2026',
                      status: 'completed'
                    });
                    setModalType('project');
                  }}
                  className="px-4 py-2.5 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Case Study
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {cms.projects.map((project) => (
                  <div key={project.slug} className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-2 text-xs text-[#F5A623] font-semibold">
                        <span>{project.industry}</span>
                        <span>&bull;</span>
                        <span className="text-[#64748B] font-normal">{project.client_name}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0F172A]">{project.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                        {project.short_description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies && project.technologies.map((t: string) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-[#475569]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link href={`/work/${project.slug}`} target="_blank" className="p-2 text-[#475569] hover:text-[#F5A623] hover:bg-neutral-100 rounded-lg">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => {
                          setEditingItem({ ...project });
                          setModalType('project');
                        }}
                        className="px-3 py-1.5 bg-[#06101E] text-white hover:bg-[#0A192F] rounded-lg text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Edit2 className="w-3 h-3" /> Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete project "${project.title}"?`)) {
                            deleteProject(project.slug);
                            showToast(`Deleted project "${project.title}".`);
                          }
                        }}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: TEAM & LEADERSHIP CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Team Members &amp; Leadership</h1>
                  <p className="text-xs text-[#64748B]">Manage executives, engineering leads, profile avatars, and roles.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: `team-${Date.now()}`,
                      name: '',
                      role: '',
                      department: 'Software Engineering',
                      specialty: '',
                      image: '',
                      accentColor: '#38BDF8',
                      isLeader: false
                    });
                    setModalType('team');
                  }}
                  className="px-4 py-2.5 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Team Member
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cms.team.map((member) => (
                  <div key={member.id} className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4">
                    <div className="flex items-start gap-4">
                      {/* Avatar preview */}
                      <div className="relative w-14 h-14 rounded-xl bg-[#06101E] p-1 flex items-center justify-center shrink-0 shadow-sm">
                        <div 
                          className="absolute top-1 right-1 w-6 h-6 rounded-md opacity-90"
                          style={{ backgroundColor: member.accentColor || '#F5A623' }}
                        />
                        <div className="relative z-10 w-full h-full rounded-lg overflow-hidden border border-white/20 bg-[#1E293B] flex items-center justify-center text-white text-xs font-bold">
                          {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                          ) : (
                            member.name.split(' ').map(n => n[0]).join('')
                          )}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-[#0F172A]">{member.name}</h3>
                        <p className="text-xs font-semibold text-[#F5A623]">{member.role}</p>
                        <p className="text-[11px] text-[#64748B]">{member.department}</p>
                        {member.specialty && (
                          <p className="text-[10px] text-[#94A3B8] pt-0.5">{member.specialty}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        member.isLeader ? 'bg-amber-100 text-amber-900' : 'bg-neutral-100 text-[#475569]'
                      }`}>
                        {member.isLeader ? 'Executive Tier' : 'Engineering Tier'}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setEditingItem({ ...member });
                            setModalType('team');
                          }}
                          className="p-1.5 text-[#475569] hover:text-[#0F172A] hover:bg-neutral-100 rounded-md"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Remove team member "${member.name}"?`)) {
                              deleteTeamMember(member.id);
                              showToast(`Removed team member "${member.name}".`);
                            }
                          }}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-md"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 7: PARTNERS CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Ecosystem &amp; Commercial Partners</h1>
                  <p className="text-xs text-[#64748B]">Manage partner companies featured on the partners page.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: `partner-${Date.now()}`,
                      name: '',
                      industry: 'Retail & Commerce',
                      logoText: 'NEW',
                      description: '',
                      collaboration: '',
                      focusArea: 'Custom Software'
                    });
                    setModalType('partner');
                  }}
                  className="px-4 py-2.5 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Partner
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cms.partners.map((partner) => (
                  <div key={partner.id} className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#06101E] border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] font-bold text-base shadow-sm">
                          {partner.logoText}
                        </div>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-neutral-100 text-[#64748B]">
                          {partner.focusArea}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#0F172A]">{partner.name}</h3>
                        <p className="text-xs font-semibold text-[#F5A623] mt-0.5">{partner.industry}</p>
                      </div>

                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                        {partner.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <div className="text-[11px] text-[#475569] truncate max-w-[160px]">
                        Scope: {partner.collaboration}
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setEditingItem({ ...partner });
                            setModalType('partner');
                          }}
                          className="p-1.5 text-[#475569] hover:text-[#0F172A] hover:bg-neutral-100 rounded-md"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Remove partner "${partner.name}"?`)) {
                              deletePartner(partner.id);
                              showToast(`Removed partner "${partner.name}".`);
                            }
                          }}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-md"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 8: ARTICLES & INSIGHTS CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Engineering Insights &amp; Articles</h1>
                  <p className="text-xs text-[#64748B]">Publish technical articles, architectural whitepapers, and guides.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: Date.now(),
                      title: '',
                      slug: '',
                      author: 'Muhammad Auwal Abubakar',
                      category: 'Architecture',
                      reading_time: '4 min read',
                      excerpt: '',
                      content: '',
                      published_at: 'Aug 2026'
                    });
                    setModalType('article');
                  }}
                  className="px-4 py-2.5 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Publish Article
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {cms.articles.map((article) => (
                  <div key={article.slug} className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#F5A623]">
                        <span>{article.category}</span>
                        <span>&bull;</span>
                        <span className="text-[#64748B] font-normal">{article.read_time || (article as any).reading_time}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0F172A]">{article.title}</h3>
                      <p className="text-xs text-[#64748B] line-clamp-2">{article.excerpt}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link href={`/insights/${article.slug}`} target="_blank" className="p-2 text-[#475569] hover:text-[#F5A623] hover:bg-neutral-100 rounded-lg">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => {
                          setEditingItem({ ...article });
                          setModalType('article');
                        }}
                        className="px-3 py-1.5 bg-[#06101E] text-white hover:bg-[#0A192F] rounded-lg text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Edit2 className="w-3 h-3" /> Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete article "${article.title}"?`)) {
                            deleteArticle(article.slug);
                            showToast(`Deleted article "${article.title}".`);
                          }
                        }}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 9: CAREERS & TALENT CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Careers &amp; Open Positions</h1>
                  <p className="text-xs text-[#64748B]">Manage job postings and engineering recruitment requisitions.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: Date.now(),
                      title: '',
                      slug: '',
                      department: 'Software Engineering',
                      location: 'Dutse, Jigawa State / Hybrid',
                      employment_type: 'Full-time',
                      experience_level: 'Mid-Senior Level',
                      description: '',
                      responsibilities: ['Responsibility 1', 'Responsibility 2'],
                      requirements: ['Requirement 1', 'Requirement 2']
                    });
                    setModalType('career');
                  }}
                  className="px-4 py-2.5 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Post Position
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {cms.careers.map((career) => (
                  <div key={career.slug} className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-[#F5A623] font-semibold">
                        <span>{career.department}</span>
                        <span>&bull;</span>
                        <span className="text-[#64748B] font-normal">{career.location}</span>
                        <span>&bull;</span>
                        <span className="text-[#64748B] font-normal">{career.employment_type || (career as any).type}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0F172A]">{career.title}</h3>
                      <p className="text-xs text-[#64748B]">{career.description || (career as any).short_description}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link href={`/careers/${career.slug}`} target="_blank" className="p-2 text-[#475569] hover:text-[#F5A623] hover:bg-neutral-100 rounded-lg">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => {
                          setEditingItem({ ...career });
                          setModalType('career');
                        }}
                        className="px-3 py-1.5 bg-[#06101E] text-white hover:bg-[#0A192F] rounded-lg text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Edit2 className="w-3 h-3" /> Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete position "${career.title}"?`)) {
                            deleteCareer(career.slug);
                            showToast(`Deleted position "${career.title}".`);
                          }
                        }}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 10: ENQUIRIES CRM */}
          {/* ========================================================================= */}
          {activeTab === 'enquiries' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Contact Enquiries CRM</h1>
                <p className="text-xs text-[#64748B]">Triage and respond to inbound project scopes and customer leads.</p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden divide-y divide-[#E2E8F0]">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="p-6 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-[#0F172A]">{enq.name}</h3>
                        <div className="text-xs text-[#64748B] flex items-center gap-2 mt-0.5">
                          <span>{enq.email}</span>
                          <span>&bull;</span>
                          <span className="font-semibold text-[#0F172A]">{enq.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <select
                          value={enq.status}
                          onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                          className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]"
                        >
                          <option value="new">Status: New</option>
                          <option value="reviewing">Status: Reviewing</option>
                          <option value="proposal_sent">Status: Proposal Sent</option>
                          <option value="won">Status: Won / Closed</option>
                        </select>
                        <span className="text-xs text-[#94A3B8]">{enq.date}</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-[#475569]">
                      <div className="font-semibold text-[#0F172A] mb-1">Target Service: <span className="text-[#F5A623]">{enq.service}</span></div>
                      <div>{enq.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 11: SETTINGS & RESET */}
          {/* ========================================================================= */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Site Settings &amp; Maintenance</h1>
                <p className="text-xs text-[#64748B]">Manage corporate contact points, emails, and database maintenance.</p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4">
                <h2 className="text-sm font-bold text-[#0F172A] uppercase">Corporate Contact Points</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Primary Contact Email</label>
                    <input
                      type="text"
                      defaultValue={cms.settings.company_email || (cms.settings as any).contact_email}
                      onChange={(e) => updateSettings({ company_email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#475569]">Contact Phone Number</label>
                    <input
                      type="text"
                      defaultValue={cms.settings.phone_primary || (cms.settings as any).contact_phone}
                      onChange={(e) => updateSettings({ phone_primary: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-[#475569]">Physical Office Address</label>
                    <input
                      type="text"
                      defaultValue={cms.settings.address}
                      onChange={(e) => updateSettings({ address: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>
              </div>

              {/* Reset to Factory Defaults */}
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span>Reset CMS to Factory Defaults</span>
                </div>
                <p className="text-xs text-red-600 leading-relaxed max-w-xl">
                  This will clear all local browser modifications and revert all services, team members, sections, and case studies back to initial baseline data.
                </p>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to restore default baseline content?')) {
                      resetToDefault();
                      showToast('CMS data restored to defaults.');
                    }
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Restore Baseline Data
                </button>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ========================================================================= */}
      {/* GLOBAL MODALS FOR CRUD OPERATIONS */}
      {/* ========================================================================= */}
      {modalType && editingItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <h2 className="text-lg font-bold text-[#0F172A] capitalize">
                {editingItem.id ? 'Edit' : 'Create'} {modalType}
              </h2>
              <button
                onClick={() => {
                  setModalType(null);
                  setEditingItem(null);
                }}
                className="p-1 text-neutral-400 hover:text-neutral-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Service Form */}
            {modalType === 'service' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveService(editingItem);
                  showToast(`Saved service "${editingItem.title}".`);
                  setModalType(null);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Service Title</label>
                    <input
                      type="text"
                      required
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value, slug: editingItem.slug || e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">URL Slug</label>
                    <input
                      type="text"
                      required
                      value={editingItem.slug}
                      onChange={(e) => setEditingItem({ ...editingItem, slug: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Short Description</label>
                  <textarea
                    rows={2}
                    required
                    value={editingItem.short_description}
                    onChange={(e) => setEditingItem({ ...editingItem, short_description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Full Technical Description</label>
                  <textarea
                    rows={4}
                    value={editingItem.full_description}
                    onChange={(e) => setEditingItem({ ...editingItem, full_description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Deliverables (comma-separated)</label>
                  <input
                    type="text"
                    value={Array.isArray(editingItem.deliverables) ? editingItem.deliverables.join(', ') : ''}
                    onChange={(e) => setEditingItem({ ...editingItem, deliverables: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    placeholder="e.g. Web Portals, REST APIs, Security Audit"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 border border-[#CBD5E1] rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] font-bold rounded-lg"
                  >
                    Save Service
                  </button>
                </div>
              </form>
            )}

            {/* Modal Body: Product Form */}
            {modalType === 'product' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveProduct(editingItem);
                  showToast(`Saved product "${editingItem.name}".`);
                  setModalType(null);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Product Name</label>
                    <input
                      type="text"
                      required
                      value={editingItem.name}
                      onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value, slug: editingItem.slug || e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Category / Subtitle</label>
                    <input
                      type="text"
                      required
                      value={editingItem.subtitle}
                      onChange={(e) => setEditingItem({ ...editingItem, subtitle: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Short Description</label>
                  <textarea
                    rows={3}
                    required
                    value={editingItem.short_description}
                    onChange={(e) => setEditingItem({ ...editingItem, short_description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Key Features (comma-separated)</label>
                  <textarea
                    rows={3}
                    value={Array.isArray((editingItem as any).key_features) ? (editingItem as any).key_features.join(', ') : ''}
                    onChange={(e) => setEditingItem({ ...editingItem, key_features: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <ImageUploadField
                  label="Product Screenshot / Mockup Image"
                  value={editingItem.featured_image || (editingItem as any).image}
                  onChange={(img) => setEditingItem({ ...editingItem, featured_image: img, image: img })}
                  aspectRatio="wide"
                  helperText="Upload a product dashboard preview or interface mockup from your computer."
                />

                <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 border border-[#CBD5E1] rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] font-bold rounded-lg"
                  >
                    Save Product
                  </button>
                </div>
              </form>
            )}

            {/* Modal Body: Project Form */}
            {modalType === 'project' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveProject(editingItem);
                  showToast(`Saved case study "${editingItem.title}".`);
                  setModalType(null);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Project Title</label>
                    <input
                      type="text"
                      required
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value, slug: editingItem.slug || e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Client Name</label>
                    <input
                      type="text"
                      required
                      value={editingItem.client_name}
                      onChange={(e) => setEditingItem({ ...editingItem, client_name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Industry</label>
                    <input
                      type="text"
                      value={editingItem.industry}
                      onChange={(e) => setEditingItem({ ...editingItem, industry: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Service Category</label>
                    <input
                      type="text"
                      value={editingItem.service_category}
                      onChange={(e) => setEditingItem({ ...editingItem, service_category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Short Description</label>
                  <textarea
                    rows={2}
                    required
                    value={editingItem.short_description}
                    onChange={(e) => setEditingItem({ ...editingItem, short_description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Outcome &amp; Business Impact</label>
                  <textarea
                    rows={2}
                    value={editingItem.outcome}
                    onChange={(e) => setEditingItem({ ...editingItem, outcome: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <ImageUploadField
                  label="Case Study Cover / Featured Image"
                  value={editingItem.featured_image}
                  onChange={(img) => setEditingItem({ ...editingItem, featured_image: img })}
                  aspectRatio="video"
                  helperText="Upload a case study interface or architectural graphic from your computer."
                />

                <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 border border-[#CBD5E1] rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] font-bold rounded-lg"
                  >
                    Save Case Study
                  </button>
                </div>
              </form>
            )}

            {/* Modal Body: Team Member Form */}
            {modalType === 'team' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveTeamMember(editingItem);
                  showToast(`Saved team member "${editingItem.name}".`);
                  setModalType(null);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Full Name</label>
                    <input
                      type="text"
                      required
                      value={editingItem.name}
                      onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Role / Title</label>
                    <input
                      type="text"
                      required
                      value={editingItem.role}
                      onChange={(e) => setEditingItem({ ...editingItem, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Department</label>
                    <input
                      type="text"
                      value={editingItem.department}
                      onChange={(e) => setEditingItem({ ...editingItem, department: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Accent Color (Hex)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={editingItem.accentColor || '#F5A623'}
                        onChange={(e) => setEditingItem({ ...editingItem, accentColor: e.target.value })}
                        className="w-8 h-8 rounded border border-neutral-300 cursor-pointer p-0.5"
                      />
                      <input
                        type="text"
                        value={editingItem.accentColor || '#F5A623'}
                        onChange={(e) => setEditingItem({ ...editingItem, accentColor: e.target.value })}
                        className="flex-1 px-3 py-2 rounded-lg border border-[#CBD5E1]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Specialty / Tech Stack</label>
                  <input
                    type="text"
                    value={editingItem.specialty || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, specialty: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    placeholder="e.g. Next.js, Laravel, REST APIs"
                  />
                </div>

                <ImageUploadField
                  label="Profile Portrait Photo"
                  value={editingItem.image}
                  onChange={(img) => setEditingItem({ ...editingItem, image: img })}
                  aspectRatio="square"
                  helperText="Upload a professional portrait photo from your computer."
                />

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="isLeader"
                    checked={!!editingItem.isLeader}
                    onChange={(e) => setEditingItem({ ...editingItem, isLeader: e.target.checked })}
                    className="rounded border-[#CBD5E1] text-[#F5A623] focus:ring-[#F5A623]"
                  />
                  <label htmlFor="isLeader" className="font-bold text-[#475569] cursor-pointer">
                    Executive Leadership Tier (Displays in larger top cards)
                  </label>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 border border-[#CBD5E1] rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] font-bold rounded-lg"
                  >
                    Save Team Member
                  </button>
                </div>
              </form>
            )}

            {/* Modal Body: Partner Form */}
            {modalType === 'partner' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  savePartner(editingItem);
                  showToast(`Saved partner "${editingItem.name}".`);
                  setModalType(null);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Partner Name</label>
                    <input
                      type="text"
                      required
                      value={editingItem.name}
                      onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Logo Monogram Text</label>
                    <input
                      type="text"
                      required
                      value={editingItem.logoText}
                      onChange={(e) => setEditingItem({ ...editingItem, logoText: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                      placeholder="e.g. KCS"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Industry</label>
                    <input
                      type="text"
                      required
                      value={editingItem.industry}
                      onChange={(e) => setEditingItem({ ...editingItem, industry: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Focus Area Tag</label>
                    <input
                      type="text"
                      required
                      value={editingItem.focusArea}
                      onChange={(e) => setEditingItem({ ...editingItem, focusArea: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Bio / Description</label>
                  <textarea
                    rows={2}
                    required
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Collaboration Scope</label>
                  <textarea
                    rows={2}
                    value={editingItem.collaboration}
                    onChange={(e) => setEditingItem({ ...editingItem, collaboration: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <ImageUploadField
                  label="Partner Logo Image"
                  value={editingItem.logoImage}
                  onChange={(img) => setEditingItem({ ...editingItem, logoImage: img })}
                  aspectRatio="square"
                  helperText="Upload partner brand logo from your computer (or leave empty to use monogram text badge)."
                />

                <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 border border-[#CBD5E1] rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] font-bold rounded-lg"
                  >
                    Save Partner
                  </button>
                </div>
              </form>
            )}

            {/* Modal Body: Article Form */}
            {modalType === 'article' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveArticle(editingItem);
                  showToast(`Saved article "${editingItem.title}".`);
                  setModalType(null);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Article Title</label>
                    <input
                      type="text"
                      required
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value, slug: editingItem.slug || e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Category</label>
                    <input
                      type="text"
                      required
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Excerpt</label>
                  <textarea
                    rows={2}
                    required
                    value={editingItem.excerpt}
                    onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Article Body Content</label>
                  <textarea
                    rows={5}
                    required
                    value={editingItem.content}
                    onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <ImageUploadField
                  label="Article Cover / Featured Image"
                  value={editingItem.featured_image}
                  onChange={(img) => setEditingItem({ ...editingItem, featured_image: img })}
                  aspectRatio="wide"
                  helperText="Upload an article cover image from your computer."
                />

                <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 border border-[#CBD5E1] rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] font-bold rounded-lg"
                  >
                    Save Article
                  </button>
                </div>
              </form>
            )}

            {/* Modal Body: Career Form */}
            {modalType === 'career' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveCareer(editingItem);
                  showToast(`Saved career position "${editingItem.title}".`);
                  setModalType(null);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Position Title</label>
                    <input
                      type="text"
                      required
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value, slug: editingItem.slug || e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#475569]">Department</label>
                    <input
                      type="text"
                      required
                      value={editingItem.department}
                      onChange={(e) => setEditingItem({ ...editingItem, department: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#475569]">Short Description</label>
                  <textarea
                    rows={2}
                    required
                    value={editingItem.short_description}
                    onChange={(e) => setEditingItem({ ...editingItem, short_description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1]"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 border border-[#CBD5E1] rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] font-bold rounded-lg"
                  >
                    Save Career Position
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
