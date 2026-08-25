import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Technical Team | Sardauna Tech Lab Ltd',
  description: 'Initiate a software engineering project, request enterprise ERP consultation, or discuss digital platforms with Sardauna Tech Lab Ltd.'
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-20 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="max-w-3xl space-y-4">
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
              Initiate a Technical Engagement
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s engineer your next digital solution.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Speak directly with our software architects to review technical specifications, feasibility, and estimated delivery timelines.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Contact Grid (Warm Light) */}
      <section className="bg-[#F8FAFC] text-[#0F172A] py-16 md:py-20 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Corporate Contact Info & Disclosures */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-corporate-sm space-y-6">
                <h2 className="text-xl font-bold text-[#0F172A]">Direct Communication Desk</h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0F172A]">Head Office Address</strong>
                      <span className="text-[#475569]">Dutse, Jigawa State, Nigeria</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0F172A]">Official Email</strong>
                      <a href="mailto:contact@sardaunatechlabs.com.ng" className="text-[#D97706] hover:underline font-medium">
                        contact@sardaunatechlabs.com.ng
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0F172A]">Direct Phone Lines</strong>
                      <span className="text-[#475569]">+234 701 967 2820 &bull; +234 906 027 6333</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0F172A]">Operating Hours</strong>
                      <span className="text-[#475569]">Monday &ndash; Friday, 8:00 AM &ndash; 6:00 PM WAT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-[#0A192F] rounded-xl border border-white/10 p-7 text-white space-y-4 text-xs font-mono">
                <div className="text-[#F5A623] font-bold uppercase tracking-wider pb-2 border-b border-white/10">
                  Client Guarantees
                </div>
                <div className="space-y-2 text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F5A623] shrink-0" />
                    <span>Officially Registered Corporate Enterprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0" />
                    <span>Binding Non-Disclosure Agreements (NDA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0" />
                    <span>100% Client Source Code Ownership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Multi-Category Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 sm:p-10 shadow-corporate-md">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-1">Project Enquiry Form</h2>
                <p className="text-xs text-[#64748B] mb-8">
                  Provide your technical requirements below. Our engineering leads will review and respond within 24 hours.
                </p>
                <Suspense fallback={<div className="p-8 text-center text-xs text-[#94A3B8]">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
