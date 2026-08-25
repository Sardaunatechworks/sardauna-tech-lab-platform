'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { MotionReveal } from '../ui/MotionReveal';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-[#06101E] text-white py-24 md:py-32">
      <Container size="md">
        <MotionReveal className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
            Start a Conversation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Have a project in mind? <br />
            <span className="font-serif italic font-normal text-[#F5A623]">Let&apos;s build together.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-lg mx-auto font-normal">
            Whether you need a custom enterprise system, a digital product, or architecture consulting, our engineering team is ready.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
};
