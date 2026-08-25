'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { apiClient } from '@/lib/api';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ApplicationFormProps {
  careerId: number;
  careerTitle: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ careerId, careerTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    portfolio_url: '',
    linkedin_url: '',
    cover_note: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('career_id', careerId.toString());
      data.append('career_title', careerTitle);
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('location', formData.location);
      if (formData.portfolio_url) data.append('portfolio_url', formData.portfolio_url);
      if (formData.linkedin_url) data.append('linkedin_url', formData.linkedin_url);
      if (formData.cover_note) data.append('cover_note', formData.cover_note);
      if (file) data.append('cv', file);

      await apiClient.submitCareerApplication(data);
      setSubmitStatus('success');
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err?.message || 'Failed to submit application. Please reach us at contact@sardaunatechlabs.com.ng');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h3 className="text-base font-bold text-emerald-900">Application Submitted!</h3>
        <p className="text-xs text-emerald-700 leading-relaxed">
          Thank you for applying for the <strong>{careerTitle}</strong> position. Our engineering recruitment desk will review your profile.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus === 'error' && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name *</label>
        <input
          type="text"
          required
          placeholder="Muhammad Auwal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Email Address *</label>
          <input
            type="email"
            required
            placeholder="engineer@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="+234..."
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Current City / State *</label>
          <input
            type="text"
            required
            placeholder="Dutse, Jigawa / Kano / Abuja"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Portfolio or GitHub URL</label>
          <input
            type="url"
            placeholder="https://github.com/..."
            value={formData.portfolio_url}
            onChange={(e) => setFormData({ ...formData, portfolio_url: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-1">Upload CV (PDF, max 5MB) *</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full text-xs text-[#475569] file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#06101E] file:text-white hover:file:bg-[#0A192F] cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-1">Short Introduction or Note</label>
        <textarea
          rows={3}
          placeholder="Briefly highlight your technical background and why you want to build with Sardauna Tech Lab..."
          value={formData.cover_note}
          onChange={(e) => setFormData({ ...formData, cover_note: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all resize-none"
        ></textarea>
      </div>

      <Button type="submit" size="md" variant="primary" fullWidth isLoading={isSubmitting}>
        Submit Application
      </Button>
    </form>
  );
};
