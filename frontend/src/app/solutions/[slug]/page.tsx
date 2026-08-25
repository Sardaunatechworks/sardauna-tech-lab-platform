import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  QrCode, 
  Store, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Users 
} from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fallbackProducts } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fallbackProducts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = fallbackProducts.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found | Sardauna Tech Lab Ltd' };
  }

  return {
    title: `${product.name} | Proprietary Platform | Sardauna Tech Lab Ltd`,
    description: product.short_description
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = fallbackProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header (Deep Navy) */}
      <section className="bg-[#06101E] text-white pt-16 pb-20 border-b border-white/10">
        <Container size="lg">
          <div className="mb-8">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase">
                Proprietary Platform
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {product.name}
              </h1>
              <div className="text-base sm:text-lg text-[#F5A623] font-semibold">
                {product.tagline}
              </div>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
                {product.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button href={`/contact?service=${encodeURIComponent(product.name)}`} size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Request Enterprise Pilot
                </Button>
                <Button href="#features" size="md" variant="outline-dark">
                  View Technical Capabilities
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-[#0A192F] border border-white/15 space-y-3 text-xs font-mono">
                <div className="text-[#F5A623] font-bold pb-2 border-b border-white/10 uppercase">
                  Platform Snapshot
                </div>
                <div className="flex justify-between text-[#CBD5E1]">
                  <span>Status:</span> <strong className="text-amber-400 font-bold">In Development / Pilot</strong>
                </div>
                <div className="flex justify-between text-[#CBD5E1]">
                  <span>Architecture:</span> <strong className="text-white">Next.js + Laravel 11</strong>
                </div>
                <div className="flex justify-between text-[#CBD5E1]">
                  <span>Security Tier:</span> <strong className="text-emerald-400">Encrypted HMAC</strong>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem vs Solution Comparison (Warm Light) */}
      <section className="bg-[#F8FAFC] text-[#0F172A] py-16 border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-red-200 p-7 shadow-corporate-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
                <AlertCircle className="w-4 h-4" /> The Operational Problem
              </div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">What businesses struggle with:</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {product.problem}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-emerald-200 p-7 shadow-corporate-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" /> The Sardauna Tech Lab Solution
              </div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">How {product.name} resolves it:</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {product.solution}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Target Audience (Clean White) */}
      {product.target_audience && product.target_audience.length > 0 && (
        <section className="bg-white text-[#0F172A] py-16 border-b border-[#E2E8F0]">
          <Container size="lg">
            <SectionHeader
              eyebrow="Target Domains"
              title={`Who ${product.name} is engineered for:`}
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {product.target_audience.map((aud) => (
                <div key={aud} className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 text-center shadow-corporate-sm">
                  <Users className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                  <h3 className="text-base font-bold text-[#0F172A]">{aud}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4. Applied Technologies (Soft Navy) */}
      {product.technologies && product.technologies.length > 0 && (
        <section className="bg-[#0A192F] text-white py-14 border-b border-white/10">
          <Container size="lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">System Architecture & Tech Stack</h3>
                <p className="text-xs text-[#94A3B8]">The engineering foundation powering {product.name}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono font-semibold px-3 py-1 rounded bg-[#06101E] border border-white/10 text-[#F5A623]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 5. Consultation & Pilot CTA (Deep Navy) */}
      <section className="bg-[#06101E] text-white py-16">
        <Container size="lg" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Deploy {product.name} for your organization.
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
            Get in touch to request private access, pilot testing, or custom integration with your existing workflows.
          </p>
          <Button href={`/contact?service=${encodeURIComponent(product.name)}`} size="lg" variant="primary">
            Request Demonstration
          </Button>
        </Container>
      </section>
    </div>
  );
}
