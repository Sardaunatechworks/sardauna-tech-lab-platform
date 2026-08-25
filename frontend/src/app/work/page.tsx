'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useCMS } from '@/lib/useCMS';

export default function WorkIndexPage() {
  const { data: cms } = useCMS();
  const { projects } = cms;

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-[#06101E] text-white py-20 md:py-24">
        <Container size="lg">
          <div className="max-w-2xl space-y-4">
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
              Case Studies
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Selected <span className="font-serif italic font-normal text-[#F5A623]">engineering work.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal">
              Software platforms, enterprise systems, and digital products engineered for operational reliability.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects List */}
      <section className="bg-white py-20 md:py-24 border-b border-neutral-200">
        <Container size="lg">
          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="p-8 md:p-10 rounded-2xl bg-[#F9FAFB] border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-neutral-300 transition-colors"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
                    <span>{project.industry}</span>
                    <span className="text-neutral-400">&bull;</span>
                    <span className="text-[#6B7280]">{project.service_category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                    {project.title}
                  </h2>

                  <p className="text-base text-[#4B5563] leading-relaxed font-normal">
                    {project.short_description || project.overview}
                  </p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((t: string) => (
                          <span key={t} className="text-xs font-medium px-2.5 py-1 rounded bg-white border border-neutral-200 text-[#4B5563]">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                  <div className="pt-2">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#06101E] hover:text-[#F5A623] transition-colors group"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-neutral-200 text-xs space-y-3 font-mono">
                  <div className="text-[11px] font-bold text-[#F5A623] uppercase tracking-wider pb-2 border-b border-neutral-100">
                    Project Telemetry
                  </div>
                  <div className="flex justify-between text-[#6B7280]">
                    <span>Client:</span>
                    <strong className="text-[#111827] font-sans">{project.client_name}</strong>
                  </div>
                  <div className="flex justify-between text-[#6B7280]">
                    <span>Year:</span>
                    <strong className="text-[#111827] font-sans">{project.year || '2026'}</strong>
                  </div>
                  <div className="flex justify-between text-[#6B7280]">
                    <span>Status:</span>
                    <strong className="text-emerald-700 font-sans capitalize">{project.status || 'Active'}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#06101E] text-white py-20">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white">Have a project to scope?</h3>
              <p className="text-sm text-[#94A3B8] mt-1 font-normal">Review technical specifications with our engineering team.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg transition-colors shrink-0"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
