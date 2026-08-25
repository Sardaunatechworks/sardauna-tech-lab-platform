import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  ShoppingBag, 
  Hotel, 
  Ticket, 
  GraduationCap, 
  Landmark, 
  HeartHandshake, 
  Rocket, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fallbackIndustries } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Industries We Serve | Sardauna Tech Lab Ltd',
  description: 'Discover how Sardauna Tech Lab Ltd engineers software solutions across SMEs, Retail, Hospitality, Events, Education, and Government sectors.'
};

export default function IndustriesIndexPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-[#F5A623]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#F5A623]" />,
    Hotel: <Hotel className="w-6 h-6 text-[#F5A623]" />,
    Ticket: <Ticket className="w-6 h-6 text-[#F5A623]" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-[#F5A623]" />,
    Landmark: <Landmark className="w-6 h-6 text-[#F5A623]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#F5A623]" />,
    Rocket: <Rocket className="w-6 h-6 text-[#F5A623]" />,
    Briefcase: <Briefcase className="w-6 h-6 text-[#F5A623]" />
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-20 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="max-w-3xl space-y-4">
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
              Domain Expertise
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Software engineered for specific industry workflows.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We understand that off-the-shelf software rarely fits sector-specific business operations in Nigeria. We build bespoke systems tailored to your domain.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Industries List (Clean White) */}
      <section className="bg-white text-[#0F172A] py-20 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fallbackIndustries.map((ind) => (
              <div
                key={ind.name}
                className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8 flex flex-col justify-between hover:bg-white hover:border-[#CBD5E1] hover:shadow-corporate-md transition-all duration-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#06101E] flex items-center justify-center mb-5 shadow-sm">
                    {iconMap[ind.icon || 'Building2'] || <Building2 className="w-6 h-6 text-[#F5A623]" />}
                  </div>

                  <h2 className="text-lg font-bold text-[#0F172A] mb-3">
                    {ind.name}
                  </h2>

                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  {/* Typical Challenges Solved */}
                  {ind.challenges && ind.challenges.length > 0 && (
                    <div className="space-y-1.5 pt-4 border-t border-[#E2E8F0] mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">
                        Key Friction Addressed:
                      </div>
                      {ind.challenges.slice(0, 2).map((ch) => (
                        <div key={ch} className="text-xs text-[#64748B] flex items-start gap-1.5">
                          <span className="text-[#F5A623] font-bold">&bull;</span>
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(ind.name + ' System')}`}
                  className="text-xs font-bold text-[#0F172A] hover:text-[#D97706] inline-flex items-center gap-1 transition-colors"
                >
                  Consult on {ind.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CTA (Deep Navy) */}
      <section className="bg-[#06101E] text-white py-16">
        <Container size="lg" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Operating in a specialized industry?
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
            Speak with our systems architects to map out custom software requirements for your organization.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Request Sector Scoping
          </Button>
        </Container>
      </section>
    </div>
  );
}
