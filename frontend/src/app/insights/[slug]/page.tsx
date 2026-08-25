import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Share2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fallbackArticles } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fallbackArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = fallbackArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found | Sardauna Tech Lab Ltd' };
  }

  return {
    title: `${article.title} | Insights | Sardauna Tech Lab Ltd`,
    description: article.excerpt
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = fallbackArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-16 pb-20 border-b border-white/10">
        <Container size="md">
          <div className="mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Insights
            </Link>
          </div>

          <div className="space-y-4">
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
              {article.category}
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2 text-white">
                <User className="w-4 h-4 text-[#F5A623]" />
                <span>{article.author?.name || 'Sardauna Tech Lab'} &bull; {article.author?.role || 'Engineering Lead'}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.published_at}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.read_time || '6 min read'}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Article Content (Warm Light) */}
      <section className="bg-white text-[#0F172A] py-16 md:py-20 border-b border-[#E2E8F0]">
        <Container size="md">
          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-[#334155]">
            <p className="text-base sm:text-lg font-medium text-[#0F172A] leading-relaxed border-l-4 border-[#F5A623] pl-4 py-1 italic bg-[#F8FAFC]">
              {article.excerpt}
            </p>

            <div className="whitespace-pre-line space-y-4 text-justify sm:text-left">
              {article.content}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Bottom Consultation CTA (Deep Navy) */}
      <section className="bg-[#06101E] text-white py-16">
        <Container size="md" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Interested in discussing system architecture?
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
            Our engineering team is available for architectural advisory, system scoping, and platform development.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Connect With Our Engineering Team
          </Button>
        </Container>
      </section>
    </article>
  );
}
