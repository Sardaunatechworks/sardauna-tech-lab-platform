'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { MotionReveal } from '../ui/MotionReveal';
import { useCMS } from '@/lib/useCMS';

export const SelectedWorkSection: React.FC = () => {
  const { data: cms } = useCMS();
  const { projects } = cms;

  if (!projects || projects.length === 0) return null;

  const [featured, ...rest] = projects;

  return (
    <section className="bg-[#F9FAFB] py-20 md:py-28 border-b border-neutral-200">
      <Container size="lg">
        <MotionReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase mb-3">
              Selected Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight leading-[1.2]">
              Case studies &amp; <span className="font-serif italic font-normal text-[#06101E]">deliveries</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#06101E] hover:text-[#F5A623] transition-colors group"
          >
            All projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </MotionReveal>

        {/* Large Featured Project */}
        {featured && (
          <MotionReveal delay={0.1}>
            <Link
              href={`/work/${featured.slug}`}
              className="group block mb-8 md:mb-10"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#06101E] aspect-[16/9] md:aspect-[21/9] mb-5 border border-neutral-800 shadow-sm group-hover:border-[#F5A623]/40 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {featured.title}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#F5A623] mt-2 uppercase tracking-wider">
                      {featured.industry || featured.service_category}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#111827] group-hover:text-[#F5A623] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-[14px] text-[#4B5563] mt-1 font-normal leading-relaxed max-w-2xl">
                    {featured.short_description || featured.overview}
                  </p>
                </div>
                <span className="text-[13px] font-semibold text-[#6B7280] group-hover:text-[#F5A623] transition-colors flex items-center gap-1 shrink-0 pt-1">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </MotionReveal>
        )}

        {/* 2 Supporting Projects */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {rest.slice(0, 2).map((project, idx) => (
              <MotionReveal key={project.slug} delay={0.15 + idx * 0.1}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="relative rounded-xl overflow-hidden bg-[#0A192F] aspect-[16/9] mb-4 border border-neutral-800 shadow-sm group-hover:border-[#F5A623]/40 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {project.title}
                        </div>
                        <div className="text-xs font-medium text-[#F5A623] mt-1.5 uppercase tracking-wider">
                          {project.industry || project.service_category}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-[#111827] group-hover:text-[#F5A623] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[14px] text-[#4B5563] mt-1 font-normal leading-relaxed">
                        {project.short_description || project.overview}
                      </p>
                    </div>
                    <span className="text-[13px] font-semibold text-[#6B7280] group-hover:text-[#F5A623] transition-colors flex items-center gap-1 shrink-0 pt-0.5">
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
