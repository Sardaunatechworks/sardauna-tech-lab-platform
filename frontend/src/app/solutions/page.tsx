'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useCMS } from '@/lib/useCMS';

export default function SolutionsIndexPage() {
  const { data: cms } = useCMS();
  const { products } = cms;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header */}
      <section className="bg-[#06101E] text-white py-20 md:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5A623]/10 blur-[130px] pointer-events-none rounded-full" />

        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase">
              Proprietary Products
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Software platforms built for <span className="font-serif italic font-normal text-[#F5A623]">daily operations.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal max-w-2xl">
              Purpose-engineered platforms designed to solve critical operational friction in event ticketing, access security, and retail business operations.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Products Showcase with Image Previews */}
      <section className="bg-white py-20 md:py-28 border-b border-neutral-200">
        <Container size="lg">
          <div className="space-y-20 md:space-y-28">
            {products.map((product, idx) => {
              const defaultPreview = product.slug === 'tradererp' || product.name?.toLowerCase().includes('trader')
                ? '/tradererp-preview.jpg'
                : '/eventpass-preview.jpg';
              const previewImage = product.featured_image || (product as any).image || defaultPreview;

              const productFeatures = (product as any).key_features || product.features || [];

              return (
                <div
                  key={product.slug || product.name}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center ${
                    idx % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Product Screenshot Mockup */}
                  <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-[#F9FAFB] border border-neutral-200 aspect-[16/10] shadow-sm hover:shadow-md transition-shadow">
                      <Image
                        src={previewImage}
                        alt={`${product.name} interface`}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                        unoptimized={previewImage.startsWith('data:')}
                      />
                    </div>
                  </div>

                  {/* Product Overview & Features */}
                  <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                    <div>
                      <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">
                        {product.tagline || (product as any).subtitle || 'Software Platform'}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight mt-1.5">
                        {product.name}
                      </h2>
                    </div>

                    <p className="text-base text-[#4B5563] leading-relaxed font-normal">
                      {product.description || product.short_description}
                    </p>

                    {/* Key Capabilities */}
                    {productFeatures.length > 0 && (
                      <div className="space-y-2.5 pt-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                          Key Capabilities
                        </span>
                        <div className="space-y-2 text-xs sm:text-sm text-[#374151]">
                          {productFeatures.map((feat: any) => (
                            <div key={typeof feat === 'string' ? feat : feat.title || String(feat)} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                              <span>{typeof feat === 'string' ? feat : feat.title || String(feat)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100">
                      <Link
                        href={`/solutions/${product.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all shadow-sm"
                      >
                        Explore {product.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/contact?service=${encodeURIComponent(product.name)}`}
                        className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-[14px] font-semibold text-[#06101E] hover:text-[#F5A623] border border-neutral-200 hover:border-neutral-300 rounded-xl transition-colors"
                      >
                        Request Demo
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Enterprise Customization Banner */}
      <section className="bg-[#06101E] text-white py-20">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white">Need a customized platform for your operations?</h3>
              <p className="text-sm text-[#94A3B8] mt-1 font-normal">
                We customize and integrate proprietary platforms to fit your multi-branch or institutional workflows.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all shrink-0 shadow-md"
            >
              Contact Sales Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
