'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { apiClient } from '@/lib/api';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialType = searchParams.get('type') || 'Start a Project';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiry_type: initialType,
    service: initialService,
    timeline: '< 1 Month',
    budget_range: 'Flexible',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [referenceCode, setReferenceCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await apiClient.submitEnquiry(formData as any);
      const refCode = (res as any)?.data?.reference || `STL-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(refCode);
      setSubmitStatus('success');
    } catch (err: any) {

      setSubmitStatus('error');
      setErrorMessage(err?.message || 'Failed to transmit enquiry. Please email contact@sardaunatechlabs.com.ng directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="text-xl font-bold text-emerald-900">Enquiry Successfully Logged!</h3>
        <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          Thank you for reaching out to Sardauna Tech Lab Ltd. Your enquiry has been routed to our technical leads.
        </p>
        <div className="p-3 rounded bg-white border border-emerald-200 font-mono text-xs text-emerald-900 inline-block">
          Tracking Ref: <strong>{referenceCode}</strong>
        </div>
        <div className="text-[11px] text-emerald-700">
          Our engineering team will respond within 24 business hours.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Enquiry Type Selector */}
      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Enquiry Category *</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {['Start a Project', 'General Enquiry', 'Partnership', 'Consulting', 'Support', 'Careers'].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setFormData({ ...formData, enquiry_type: type })}
              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                formData.enquiry_type === type
                  ? 'bg-[#06101E] text-white border-[#06101E]'
                  : 'bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:bg-white hover:border-[#94A3B8]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Your Full Name *</label>
          <input
            type="text"
            required
            placeholder="Muhammad Auwal"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Corporate Email Address *</label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Phone Number (with WhatsApp)</label>
          <input
            type="tel"
            placeholder="+234 701 967 2820"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Company / Organization Name</label>
          <input
            type="text"
            placeholder="Acme Enterprise Ltd"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Primary Capability of Interest</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          >
            <option value="">Select a capability...</option>
            <option value="Web Development & Engineering">Web Development & Engineering</option>
            <option value="Mobile Application Development">Mobile Application Development</option>
            <option value="Custom Software Systems">Custom Software Systems</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="AI & Automation">AI & Automation</option>
            <option value="Project Management">Project Management</option>
            <option value="IT Consultancy">IT Consultancy</option>
            <option value="Backend & Cloud Solutions">Backend & Cloud Solutions</option>
            <option value="EventPass Platform">EventPass Platform</option>
            <option value="TraderERP Suite">TraderERP Suite</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0F172A] mb-1">Desired Project Timeline</label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
          >
            <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
            <option value="1 - 3 Months">1 &ndash; 3 Months</option>
            <option value="3 - 6 Months">3 &ndash; 6 Months</option>
            <option value="Flexible / Planning Phase">Flexible / Planning Phase</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-1">Project Description & Requirements *</label>
        <textarea
          rows={4}
          required
          placeholder="Please describe your system requirements, operational workflows to digitize, target users, and any specific architectural constraints..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all resize-none"
        ></textarea>
      </div>

      <Button type="submit" size="lg" variant="primary" fullWidth isLoading={isSubmitting}>
        Submit Project Enquiry
      </Button>

      <div className="text-center text-[11px] text-[#64748B] pt-1">
        All submissions are protected by our strict corporate Non-Disclosure Agreement (NDA).
      </div>
    </form>
  );
};
