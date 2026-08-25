import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Layers 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fallbackProjects } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fallbackProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = fallbackProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Case Study Not Found | Sardauna Tech Lab Ltd' };
  }

  return {
    title: `${project.title} | Case Study | Sardauna Tech Lab Ltd`,
    description: project.short_description
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = fallbackProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-16 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
                Case Study &bull; {project.industry}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                {project.short_description}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-[#0A192F] border border-white/15 space-y-3 text-xs font-mono">
                <div className="text-[#F5A623] font-bold pb-2 border-b border-white/10 uppercase">
                  Project Metadata
                </div>
                <div className="flex justify-between text-[#CBD5E1]"><span>Client:</span> <strong className="text-white">{project.client_name}</strong></div>
                <div className="flex justify-between text-[#CBD5E1]"><span>Category:</span> <strong className="text-white">{project.service_category}</strong></div>
                <div className="flex justify-between text-[#CBD5E1]"><span>Year:</span> <strong className="text-white">{project.year}</strong></div>
                <div className="flex justify-between text-[#CBD5E1]"><span>Status:</span> <strong className="text-emerald-400 capitalize">{project.status}</strong></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Overview & Challenge (Warm Light) */}
      <section className="bg-[#F8FAFC] text-[#0F172A] py-16 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-corporate-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0F172A]">Context & Background</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-corporate-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D97706] uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" /> Core Challenge
              </div>
              <h2 className="text-xl font-bold text-[#0F172A]">The Friction Point</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Solution & Outcome (Clean White) */}
      <section className="bg-white text-[#0F172A] py-16 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0F172A]">Engineering Solution</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-emerald-800">Demonstrated Outcome</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* System Capabilities List */}
          {project.system_capabilities && project.system_capabilities.length > 0 && (
            <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base font-bold text-[#0F172A] mb-4">Core System Capabilities Engineered:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
                {project.system_capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 4. Applied Stack (Soft Navy) */}
      <section className="bg-[#0A192F] text-white py-14 border-b border-white/10">
        <Container size="lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Technologies Deployed</h3>
              <p className="text-xs text-[#94A3B8]">Core frameworks and infrastructure for this platform</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="text-xs font-mono font-semibold px-3 py-1 rounded bg-[#06101E] border border-white/10 text-[#F5A623]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Consultation Trigger (Deep Navy) */}
      <section className="bg-[#06101E] text-white py-16">
        <Container size="lg" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Need a similar system for your business?
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
            Contact our engineering team to discuss feasibility, architectural blueprints, and milestone delivery.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Discuss Your System Requirements
          </Button>
        </Container>
      </section>
    </div>
  );
}
