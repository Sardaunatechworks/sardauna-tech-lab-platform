import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { fallbackCareers } from '@/lib/data';
import { ApplicationForm } from './ApplicationForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fallbackCareers.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = fallbackCareers.find((c) => c.slug === slug);

  if (!career) {
    return { title: 'Career Opening Not Found | Sardauna Tech Lab Ltd' };
  }

  return {
    title: `${career.title} | Careers | Sardauna Tech Lab Ltd`,
    description: career.description
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = fallbackCareers.find((c) => c.slug === slug);

  if (!career) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-16 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Openings
            </Link>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#CBD5E1]">
              <span className="font-bold text-[#F5A623] uppercase tracking-wider">{career.department}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {career.location}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {career.employment_type}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {career.title}
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {career.description}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Responsibilities, Requirements & Application Form (Warm Light) */}
      <section className="bg-[#F8FAFC] text-[#0F172A] py-16 md:py-20 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Job Specifications */}
            <div className="lg:col-span-7 space-y-10">
              {/* Responsibilities */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-corporate-sm space-y-4">
                <h2 className="text-xl font-bold text-[#0F172A]">Core Responsibilities</h2>
                <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
                  {career.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-corporate-sm space-y-4">
                <h2 className="text-xl font-bold text-[#0F172A]">Qualifications & Experience</h2>
                <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
                  {career.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-corporate-md sticky top-28">
                <h2 className="text-xl font-bold text-[#0F172A] mb-1">Apply for this Role</h2>
                <p className="text-xs text-[#64748B] mb-6">
                  Submit your details and CV for direct review by our engineering recruitment squad.
                </p>
                <ApplicationForm careerId={career.id} careerTitle={career.title} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
