'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { MotionReveal, MotionStagger, MotionItem } from '../ui/MotionReveal';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding business context, operational workflows, and core technical requirements.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Defining system architecture, data models, and intuitive user experiences.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Engineering frontend and backend systems with clean, documented code and testing.'
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Deploying to cloud infrastructure with continuous monitoring and ongoing support.'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 md:py-28 border-b border-neutral-200">
      <Container size="lg">
        <MotionReveal className="mb-12 md:mb-16">
          <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase mb-3">
            Delivery Methodology
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight leading-[1.2]">
            How we <span className="font-serif italic font-normal text-[#06101E]">deliver results</span>
          </h2>
        </MotionReveal>

        <MotionStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step) => (
            <MotionItem key={step.num} className="space-y-3">
              <span className="text-[13px] font-mono text-[#F5A623] font-semibold block">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold text-[#111827]">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#4B5563] leading-relaxed font-normal">
                {step.desc}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
};
