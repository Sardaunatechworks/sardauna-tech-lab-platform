'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Handshake
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useCMS } from '@/lib/useCMS';

export default function PartnersPage() {
  const { data: cms } = useCMS();
  const { partners } = cms;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header */}
      <section className="bg-[#06101E] text-white py-20 md:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5A623]/10 blur-[130px] pointer-events-none rounded-full" />

        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase">
              Strategic Ecosystem
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Partnerships that drive <span className="font-serif italic font-normal text-[#F5A623]">real-world adoption.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal max-w-2xl">
              We collaborate with forward-thinking commercial enterprises, institutions, and SME networks to deploy reliable software systems and platforms.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Partners Showcase Grid */}
      <section className="bg-[#F9FAFB] py-20 md:py-28 border-b border-neutral-200">
        <Container size="lg">
          <div className="max-w-3xl mb-12">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase mb-2">
              Featured Partners
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              Organizations leveraging our technology ecosystem.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id || partner.name}
                className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-[#F5A623]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Partner Logo & Industry Tag */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative w-14 h-14 rounded-2xl bg-[#06101E] border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] font-bold text-lg shadow-sm overflow-hidden p-2">
                      {partner.logoImage ? (
                        <Image
                          src={partner.logoImage}
                          alt={partner.name}
                          fill
                          className="object-contain p-1.5"
                          unoptimized={partner.logoImage.startsWith('data:')}
                        />
                      ) : (
                        partner.logoText
                      )}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] bg-neutral-100 px-2.5 py-1 rounded-md text-right">
                      {partner.focusArea}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#F5A623] mt-0.5">
                      {partner.industry}
                    </p>
                  </div>

                  <p className="text-[14px] text-[#4B5563] leading-relaxed font-normal">
                    {partner.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-100 space-y-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                      Collaboration Scope
                    </span>
                    <p className="text-xs text-[#374151] leading-relaxed font-medium">
                      {partner.collaboration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Partnership Value Pillars */}
      <section className="bg-white py-20 border-b border-neutral-200">
        <Container size="lg">
          <div className="max-w-2xl mb-12">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase mb-2">
              Why Partner With Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              A collaborative model built for long-term value.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#06101E] flex items-center justify-center text-[#F5A623]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Custom Integration</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                We adapt and customize our core platforms (EventPass, TraderERP) directly to your proprietary operational workflows.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#06101E] flex items-center justify-center text-[#F5A623]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Enterprise SLA &amp; Uptime</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                Dedicated support channels, prioritized feature enhancements, and strict 99.9% uptime commitments for critical operations.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#06101E] flex items-center justify-center text-[#F5A623]">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Co-Innovation</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                Direct involvement in product roadmaps, pilot testing new modules, and building tailored features before public release.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Partner With Us CTA */}
      <section className="bg-[#06101E] text-white py-20 md:py-24">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Interested in partnering with Sardauna Tech Lab?
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] font-normal max-w-lg">
                Whether you represent an industry syndicate, an enterprise seeking customized deployment, or an ecosystem integrator, let&apos;s connect.
              </p>
            </div>
            <Link
              href="/contact?inquiry=partnership"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all shadow-md shrink-0"
            >
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
