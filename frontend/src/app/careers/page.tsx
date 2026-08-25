import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fallbackCareers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Careers & Engineering Talent | Sardauna Tech Lab Ltd',
  description: 'Join the software engineering and product team at Sardauna Tech Lab Ltd in Dutse, Jigawa State, Nigeria.'
};

export default function CareersIndexPage() {
  const perks = [
    { title: 'Engineering Autonomy', desc: 'Work on real software architectures, scalable systems, and proprietary digital platforms.' },
    { title: 'Modern Tooling', desc: 'Next.js 15, TypeScript, Tailwind CSS, Laravel 11, clean REST APIs, and automated CI/CD pipelines.' },
    { title: 'Impactful Products', desc: 'Build technology that solves acute problems for merchants, enterprises, and public institutions.' },
    { title: 'Continuous Growth', desc: 'Mentorship under senior systems architects and opportunities to lead product features.' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-20 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="max-w-3xl space-y-4">
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
              Careers &amp; Opportunities
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Engineering careers at Sardauna Tech Lab.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal">
              We are looking for software engineers, designers, and technical problem solvers in Dutse, Jigawa State and remotely across Nigeria.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Engineering Culture & Perks (Warm Light) */}
      <section className="bg-[#F8FAFC] text-[#0F172A] py-16 border-b border-[#E2E8F0]">
        <Container size="lg">
          <SectionHeader
            eyebrow="Why Sardauna Tech Lab"
            title="A culture rooted in engineering craft."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-corporate-sm">
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Open Positions (Clean White) */}
      <section className="bg-white text-[#0F172A] py-20 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Active Engineering Openings
            </h2>
            <p className="text-sm text-[#475569] mt-1">
              Explore available roles and submit your profile for review by our engineering leads:
            </p>
          </div>

          <div className="space-y-4">
            {fallbackCareers.map((job) => (
              <div
                key={job.slug}
                className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 sm:p-8 hover:bg-white hover:border-[#CBD5E1] hover:shadow-corporate-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
                    <span className="font-bold text-[#D97706] uppercase tracking-wider">{job.department}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.employment_type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {job.title}
                  </h3>

                  <p className="text-xs text-[#475569] max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <Button href={`/careers/${job.slug}`} size="sm" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  View Role & Apply
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. General Talent Pool CTA (Deep Navy) */}
      <section className="bg-[#06101E] text-white py-16">
        <Container size="lg" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Don&apos;t see an exact opening for your skillset?
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
            We are always interested in meeting disciplined engineers and designers. Send your CV and portfolio directly to our technical recruiting desk.
          </p>
          <Button href="/contact?type=Careers" size="lg" variant="primary">
            Submit Open Application
          </Button>
        </Container>
      </section>
    </div>
  );
}
