import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CompanyIntroSection } from '@/components/sections/CompanyIntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SelectedWorkSection } from '@/components/sections/SelectedWorkSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <CompanyIntroSection />
      <ServicesSection />
      <SelectedWorkSection />
      <ProductsSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
