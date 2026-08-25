'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { useCMS } from '@/lib/useCMS';

export const HeroSection: React.FC = () => {
  const { data: cms } = useCMS();
  const { sections } = cms;

  return (
    <section className="relative bg-[#06101E] text-white pt-16 md:pt-24 pb-0 overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#F5A623]/10 blur-[130px] pointer-events-none rounded-full" />

      <Container size="lg" className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 pb-14 md:pb-18">
          {/* Category Eyebrow Label */}
          <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase animate-fade-in">
            {sections.heroTagline || 'Software • Digital Systems • Enterprise Cloud'}
          </p>

          {/* Main Headline with Editorial Serif Emphasis */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12] animate-fade-up">
            {sections.heroHeadline || 'We build technology for'}{' '}
            <span className="font-serif italic font-normal text-[#F5A623]">
              {sections.heroHeadlineSerif || 'modern organizations.'}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl mx-auto font-normal animate-fade-up">
            {sections.heroDescription || 'We design software, digital products and business systems that solve real operational problems.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 animate-fade-up">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </Container>

      {/* Premium Brand Logo Stage */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 animate-fade-up">
        <div className="relative rounded-t-3xl overflow-hidden bg-gradient-to-b from-[#0B2545] to-[#040B15] border border-white/15 border-b-0 shadow-2xl p-8 sm:p-14 md:p-20 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[420px] md:min-h-[480px]">
          {/* Subtle Ambient Background Grid Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          {/* Central Radial Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[220px] sm:h-[300px] bg-[#F5A623]/15 blur-[90px] rounded-full pointer-events-none" />

          {/* Premium Animated Brand Logo Showcase Card */}
          <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center space-y-6">
            <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-[#F5A623]/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_25px_70px_-12px_rgba(245,166,35,0.35)] hover:border-[#F5A623] group cursor-default">
              <div className="relative w-64 sm:w-80 md:w-96 h-20 sm:h-24 md:h-28">
                <Image
                  src={sections.brandLogo || '/sardauna-logo.png'}
                  alt="Sardauna Tech Lab Ltd"
                  fill
                  className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  priority
                  unoptimized={!!sections.brandLogo?.startsWith('data:')}
                />
              </div>
            </div>

            {/* Corporate Location Indicator */}
            <div className="flex items-center justify-center pt-2 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Headquarters: <strong className="text-white">{sections.headquarters || 'Dutse, Nigeria'}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
