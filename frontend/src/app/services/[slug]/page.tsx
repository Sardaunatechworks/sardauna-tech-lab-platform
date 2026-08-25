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
  Globe, 
  Smartphone, 
  Layers, 
  Bot, 
  CheckSquare, 
  Compass, 
  Database 
} from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fallbackServices } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fallbackServices.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = fallbackServices.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found | Sardauna Tech Lab Ltd' };
  }

  return {
    title: `${service.title} | Capabilities | Sardauna Tech Lab Ltd`,
    description: service.short_description
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = fallbackServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-8 h-8 text-[#F5A623]" />,
    Smartphone: <Smartphone className="w-8 h-8 text-[#F5A623]" />,
    Cpu: <Cpu className="w-8 h-8 text-[#F5A623]" />,
    Layers: <Layers className="w-8 h-8 text-[#F5A623]" />,
    Bot: <Bot className="w-8 h-8 text-[#F5A623]" />,
    CheckSquare: <CheckSquare className="w-8 h-8 text-[#F5A623]" />,
    Compass: <Compass className="w-8 h-8 text-[#F5A623]" />,
    Database: <Database className="w-8 h-8 text-[#F5A623]" />
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Service Hero Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-16 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Capabilities
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
                Service Capability
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.hero_title || service.title}
              </h1>
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                {service.hero_description || service.full_description}
              </p>

              <div className="pt-4">
                <Button href={`/contact?service=${encodeURIComponent(service.title)}`} size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Discuss a {service.title} Project
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-[#0A192F] border border-white/15 space-y-4 text-xs font-mono">
                <div className="text-[#F5A623] font-bold uppercase tracking-wider text-[11px] pb-2 border-b border-white/10">
                  Technical Overview
                </div>
                <div className="space-y-2 text-[#CBD5E1]">
                  <div>Category: <strong className="text-white">Software Engineering</strong></div>
                  <div>Status: <strong className="text-emerald-400">Active Delivery</strong></div>
                  <div>Engagement: <strong className="text-white">Fixed / Retainer / Dedicated</strong></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Operational Challenges Solved (Warm Light) */}
      {service.challenges_solved && service.challenges_solved.length > 0 && (
        <section className="bg-[#F8FAFC] text-[#0F172A] py-16 border-b border-[#E2E8F0]">
          <Container size="lg">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                Operational Challenges We Resolve
              </h2>
              <p className="text-sm text-[#475569] mt-1">
                Common organizational friction points addressed by our engineering squad:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.challenges_solved.map((challenge) => (
                <div
                  key={challenge}
                  className="bg-white rounded-xl border border-[#E2E8F0] p-5 flex items-start gap-3 shadow-corporate-sm"
                >
                  <AlertCircle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {challenge}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3. Core Deliverables (Clean White) */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="bg-white text-[#0F172A] py-16 border-b border-[#E2E8F0]">
          <Container size="lg">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                Engineering Deliverables
              </h2>
              <p className="text-sm text-[#475569] mt-1">
                Concrete artifacts and systems delivered during the engagement lifecycle:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4. Technologies Applied (Soft Navy) */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="bg-[#0A192F] text-white py-14 border-b border-white/10">
          <Container size="lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Applied Technical Stack</h3>
                <p className="text-xs text-[#94A3B8]">Frameworks, tools, and protocols utilized for this domain</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono font-semibold px-3 py-1 rounded bg-[#06101E] border border-white/10 text-[#F5A623]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 5. Bottom Consultation Trigger (Deep Navy) */}
      <section className="bg-[#06101E] text-white py-16">
        <Container size="lg" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to initiate a {service.title} project?
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
            Contact our engineering leads for an initial technical architecture review and milestone scoping.
          </p>
          <Button href={`/contact?service=${encodeURIComponent(service.title)}`} size="lg" variant="primary">
            Request Project Consultation
          </Button>
        </Container>
      </section>
    </div>
  );
}
