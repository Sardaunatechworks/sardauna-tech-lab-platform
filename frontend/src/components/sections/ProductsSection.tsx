'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { MotionReveal } from '../ui/MotionReveal';
import { useCMS } from '@/lib/useCMS';

export const ProductsSection: React.FC = () => {
  const { data: cms } = useCMS();
  const { products } = cms;

  return (
    <section className="bg-white py-20 md:py-28 border-b border-neutral-200">
      <Container size="lg">
        <MotionReveal className="mb-12 md:mb-16">
          <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase mb-3">
            Proprietary Products
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight leading-[1.2]">
            Platforms built for <span className="font-serif italic font-normal text-[#06101E]">daily operations</span>
          </h2>
        </MotionReveal>

        <div className="space-y-16 md:space-y-24">
          {products.map((product, idx) => {
            const defaultPreview = product.slug === 'tradererp' || product.name?.toLowerCase().includes('trader')
              ? '/tradererp-preview.jpg'
              : '/eventpass-preview.jpg';
            const previewImage = product.featured_image || (product as any).image || defaultPreview;

            return (
              <MotionReveal key={product.slug || product.name} delay={idx * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                    idx % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Product Preview Image */}
                  <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 aspect-[16/10] shadow-sm hover:shadow-md transition-shadow">
                      <Image
                        src={previewImage}
                        alt={`${product.name} interface`}
                        fill
                        className="object-cover"
                        unoptimized={previewImage.startsWith('data:')}
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={`lg:col-span-5 space-y-4 ${idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                    <div>
                      <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">
                        {product.tagline || (product as any).subtitle || 'Software Suite'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mt-1">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-base text-[#4B5563] leading-relaxed font-normal">
                      {product.description || product.short_description}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/solutions/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#06101E] hover:text-[#F5A623] transition-colors group"
                      >
                        Explore {product.name}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
