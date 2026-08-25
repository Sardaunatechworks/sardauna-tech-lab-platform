'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Palette, 
  Bot, 
  Compass, 
  CheckSquare,
  Database,
  ArrowRight,
  Code2
} from 'lucide-react';
import { Container } from '../ui/Container';
import { MotionReveal, MotionStagger, MotionItem } from '../ui/MotionReveal';
import { useCMS } from '@/lib/useCMS';

export const ServicesSection: React.FC = () => {
  const { data: cms } = useCMS();
  const { services } = cms;

  const getServiceIcon = (iconName?: string, index: number = 0) => {
    switch (iconName?.toLowerCase()) {
      case 'globe':
      case 'web':
        return <Globe className="w-5 h-5 text-[#F5A623]" />;
      case 'smartphone':
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-[#F5A623]" />;
      case 'cpu':
      case 'software':
        return <Cpu className="w-5 h-5 text-[#F5A623]" />;
      case 'palette':
      case 'design':
        return <Palette className="w-5 h-5 text-[#F5A623]" />;
      case 'bot':
      case 'ai':
        return <Bot className="w-5 h-5 text-[#F5A623]" />;
      case 'compass':
      case 'consulting':
        return <Compass className="w-5 h-5 text-[#F5A623]" />;
      case 'checksquare':
      case 'management':
        return <CheckSquare className="w-5 h-5 text-[#F5A623]" />;
      case 'database':
      case 'cloud':
        return <Database className="w-5 h-5 text-[#F5A623]" />;
      default: {
        const fallbacks = [
          <Globe key="1" className="w-5 h-5 text-[#F5A623]" />,
          <Smartphone key="2" className="w-5 h-5 text-[#F5A623]" />,
          <Cpu key="3" className="w-5 h-5 text-[#F5A623]" />,
          <Palette key="4" className="w-5 h-5 text-[#F5A623]" />,
          <Bot key="5" className="w-5 h-5 text-[#F5A623]" />,
          <Compass key="6" className="w-5 h-5 text-[#F5A623]" />,
          <CheckSquare key="7" className="w-5 h-5 text-[#F5A623]" />
        ];
        return fallbacks[index % fallbacks.length] || <Code2 className="w-5 h-5 text-[#F5A623]" />;
      }
    }
  };

  return (
    <section className="bg-white py-20 md:py-28 border-b border-neutral-200">
      <Container size="lg">
        <MotionReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase mb-3">
              Core Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight leading-[1.2]">
              What we <span className="font-serif italic font-normal text-[#06101E]">design &amp; engineer</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#06101E] hover:text-[#F5A623] transition-colors group"
          >
            All capabilities
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </MotionReveal>

        {/* Staggered Services List with Live CMS Icons */}
        <MotionStagger staggerDelay={0.05} className="border-t border-neutral-200">
          {services.map((service, idx) => (
            <MotionItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between py-6 md:py-7 border-b border-neutral-200 transition-colors hover:bg-neutral-50/80 -mx-4 px-4 md:-mx-6 md:px-6 rounded-xl"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-[#06101E] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0A192F] transition-all duration-200 shadow-sm mt-0.5">
                    {getServiceIcon(service.icon, idx)}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#111827] group-hover:text-[#F5A623] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[#4B5563] mt-1 max-w-2xl font-normal leading-relaxed">
                      {service.short_description || service.full_description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#F5A623] transition-all shrink-0 group-hover:translate-x-1 ml-4" />
              </Link>
            </MotionItem>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
};
