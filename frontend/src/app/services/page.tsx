'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Palette, 
  Bot, 
  CheckSquare, 
  Compass, 
  Database, 
  ArrowRight, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useCMS } from '@/lib/useCMS';

export default function ServicesIndexPage() {
  const { data: cms } = useCMS();
  const { services } = cms;

  const getServiceIcon = (iconName?: string, index: number = 0) => {
    switch (iconName?.toLowerCase()) {
      case 'globe':
      case 'web':
        return <Globe className="w-5 h-5 text-[#F5A623]" />;
      case 'smartphone':
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-[#F5A623]" />;
      case 'cpu':
      case 'software':
        return <Cpu className="w-5 h-5 text-[#F5A623]" />;
      case 'palette':
      case 'design':
        return <Palette className="w-5 h-5 text-[#F5A623]" />;
      case 'bot':
      case 'ai':
        return <Bot className="w-5 h-5 text-[#F5A623]" />;
      case 'checksquare':
      case 'management':
        return <CheckSquare className="w-5 h-5 text-[#F5A623]" />;
      case 'compass':
      case 'consulting':
        return <Compass className="w-5 h-5 text-[#F5A623]" />;
      case 'database':
      case 'cloud':
        return <Database className="w-5 h-5 text-[#F5A623]" />;
      default: {
        const fallbackIcons = [
          <Globe key="1" className="w-5 h-5 text-[#F5A623]" />,
          <Smartphone key="2" className="w-5 h-5 text-[#F5A623]" />,
          <Cpu key="3" className="w-5 h-5 text-[#F5A623]" />,
          <Palette key="4" className="w-5 h-5 text-[#F5A623]" />,
          <Bot key="5" className="w-5 h-5 text-[#F5A623]" />,
          <CheckSquare key="6" className="w-5 h-5 text-[#F5A623]" />,
          <Compass key="7" className="w-5 h-5 text-[#F5A623]" />,
          <Database key="8" className="w-5 h-5 text-[#F5A623]" />
        ];
        return fallbackIcons[index % fallbackIcons.length] || <Code2 className="w-5 h-5 text-[#F5A623]" />;
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header */}
      <section className="bg-[#06101E] text-white py-20 md:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5A623]/10 blur-[130px] pointer-events-none rounded-full" />
        
        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase">
              Engineering Capabilities
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Software engineering &amp; <span className="font-serif italic font-normal text-[#F5A623]">digital capabilities.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal max-w-2xl">
              We design, build, and support enterprise-grade systems with strict adherence to modern architectures, security, and performance standards.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Enhanced Services Grid with Real Icons */}
      <section className="bg-[#F9FAFB] py-20 md:py-24 border-b border-neutral-200">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
              <div
                key={item.slug}
                className="group p-8 md:p-9 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-[#F5A623]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Emblem Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#06101E] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#0A192F] transition-all duration-200">
                    {getServiceIcon(item.icon, idx)}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#06101E] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-[14px] sm:text-[15px] text-[#4B5563] leading-relaxed font-normal">
                    {item.short_description || item.full_description}
                  </p>

                  {/* Typical Deliverables */}
                  {item.deliverables && item.deliverables.length > 0 && (
                    <div className="pt-4 border-t border-neutral-100 space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                        Key Deliverables
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4B5563]">
                        {item.deliverables.map((d: string) => (
                          <div key={d} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Clean Direct CTA */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#06101E] group-hover:text-[#F5A623] transition-colors"
                  >
                    Explore Capability Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(item.title)}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-[#F5A623] text-[#06101E] transition-colors"
                  >
                    Request Scope
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Commercial Engagement Models */}
      <section className="bg-white py-20 border-b border-neutral-200">
        <Container size="lg">
          <div className="max-w-2xl mb-12">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase mb-2">
              Commercial Engagement
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              Flexible delivery models for your organization.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-3">
              <h3 className="text-lg font-bold text-[#111827]">Fixed-Scope Delivery</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                Ideal for well-defined software projects with clear requirements, milestones, fixed pricing, and scheduled delivery dates.
              </p>
              <span className="text-[11px] font-semibold text-[#F5A623] uppercase tracking-wider block pt-2">
                Best for: Specific platforms &amp; portals
              </span>
            </div>

            <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-3">
              <h3 className="text-lg font-bold text-[#111827]">Dedicated Engineering Squad</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                Full-stack engineers, designers, and project managers working as a dedicated extension of your internal organization.
              </p>
              <span className="text-[11px] font-semibold text-[#F5A623] uppercase tracking-wider block pt-2">
                Best for: Scaling products &amp; startups
              </span>
            </div>

            <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-3">
              <h3 className="text-lg font-bold text-[#111827]">Strategic Advisory &amp; SLA</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                Ongoing technical advisory, architectural reviews, infrastructure monitoring, and post-launch maintenance SLA contracts.
              </p>
              <span className="text-[11px] font-semibold text-[#F5A623] uppercase tracking-wider block pt-2">
                Best for: Enterprise modernization
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Final Consultation CTA */}
      <section className="bg-[#06101E] text-white py-20 md:py-24">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Have a project requirement in mind?
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] font-normal max-w-lg">
                Speak directly with our engineering architects to assess technical feasibility, scope, and estimated delivery timeline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all shadow-md"
              >
                Request Technical Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[14px] font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
