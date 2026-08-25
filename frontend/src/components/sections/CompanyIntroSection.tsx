'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { MotionReveal } from '../ui/MotionReveal';

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 md:py-28 border-b border-neutral-200">
      <Container size="lg">
        <MotionReveal className="max-w-3xl">
          <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase mb-4">
            About Sardauna Tech Lab
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight leading-[1.25] mb-5">
            We are a technology company designing and building <span className="font-serif italic font-normal text-[#06101E]">digital products, software platforms</span> and business systems.
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6 max-w-2xl font-normal">
            Headquartered in Dutse, Jigawa State, we engineer software solutions around the operational realities of businesses and institutions across Nigeria.
          </p>
          <Link
            href="/company"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#06101E] hover:text-[#F5A623] transition-colors group"
          >
            Learn more about our company
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </MotionReveal>
      </Container>
    </section>
  );
};
