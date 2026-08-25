import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { fallbackArticles } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Insights & Technical Perspectives | Sardauna Tech Lab Ltd',
  description: 'Articles, architectural case analyses, and technical perspectives on software engineering, retail ERPs, and digital systems in emerging markets.'
};

export default function InsightsIndexPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-20 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="max-w-3xl space-y-4">
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
              Technical Publications
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Insights on engineering, architecture, and systems.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Perspectives and architectural analyses written by the engineering team at Sardauna Tech Lab.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Articles Grid (Clean White) */}
      <section className="bg-white text-[#0F172A] py-20 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fallbackArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 hover:bg-white hover:border-[#CBD5E1] hover:shadow-corporate-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-3">
                    <span className="font-bold text-[#D97706] uppercase tracking-wider text-[11px]">{article.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.read_time || '6 min read'}</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#64748B]">
                    <User className="w-3.5 h-3.5" />
                    <span>{article.author?.name || 'Sardauna Tech Lab'}</span>
                  </div>

                  <span className="font-bold text-[#0F172A] group-hover:text-[#D97706] inline-flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
