'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Calendar,
  Building2
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useCMS } from '@/lib/useCMS';
import { TeamMemberCMS } from '@/lib/cms-store';

const TeamAvatar: React.FC<{
  name: string;
  image?: string;
  accentColor?: string;
  size?: 'lg' | 'md';
}> = ({ name, image, accentColor = '#A3E635', size = 'md' }) => {
  const isLarge = size === 'lg';
  const containerClass = isLarge 
    ? 'w-24 h-24 sm:w-28 sm:h-28 rounded-[24px]' 
    : 'w-20 h-20 rounded-[20px]';
  const accentClass = isLarge
    ? 'top-1.5 right-1.5 w-12 h-12 rounded-[14px]'
    : 'top-1 right-1 w-9 h-9 rounded-[10px]';

  return (
    <div className={`relative ${containerClass} bg-[#06101E] p-2 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
      {/* Offset Accent Plate behind Photo */}
      <div 
        className={`absolute ${accentClass} -z-0 opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
        style={{ backgroundColor: accentColor }}
      />

      {/* Inner Photo / Avatar Container */}
      <div className="relative z-10 w-full h-full rounded-[14px] overflow-hidden border border-white/20 bg-[#1E293B] flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top"
            unoptimized={image.startsWith('data:')}
          />
        ) : (
          <span className="font-bold text-white tracking-wider text-base sm:text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        )}
      </div>
    </div>
  );
};

export default function CompanyPage() {
  const { data: cms } = useCMS();
  const { sections, team } = cms;

  const leadership = team.filter(t => t.isLeader);
  const specialists = team.filter(t => !t.isLeader);

  const values = [
    { title: 'Engineering Discipline', desc: 'Well-architected software built for long-term maintainability, security, and high performance.' },
    { title: 'Practical Focus', desc: 'Technology designed around real operational challenges rather than superficial novelty.' },
    { title: 'Accountability', desc: 'Clear communication, predictable delivery dates, and reliable technical execution.' },
    { title: 'Integrity', desc: 'Honest technical assessments, strict client confidentiality, and full client source code ownership.' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header */}
      <section className="bg-[#06101E] text-white py-20 md:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5A623]/10 blur-[130px] pointer-events-none rounded-full" />
        
        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase">
              Corporate Profile
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Engineering reliable software for <span className="font-serif italic font-normal text-[#F5A623]">growing enterprises.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal max-w-2xl">
              Headquartered in {sections.headquarters || 'Dutse, Jigawa State'}, Sardauna Tech Lab Ltd builds enterprise platforms, bespoke business systems, and practical automation tools.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. About Our Company Section with Logo Showcase */}
      <section id="about" className="scroll-mt-24 bg-white py-20 md:py-28 border-b border-neutral-200">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase mb-2">
                  About Our Company
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight leading-tight">
                  From independent initiative to structured technology enterprise.
                </h2>
              </div>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed font-normal">
                <p>{sections.aboutStoryP1}</p>
                <p>{sections.aboutStoryP2}</p>
                <p>{sections.aboutStoryP3}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#4B5563]">
                <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-50 border border-neutral-200">
                  <Calendar className="w-4 h-4 text-[#F5A623]" />
                  <span>Established: <strong>{sections.establishedYear || '2023'}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-50 border border-neutral-200">
                  <Building2 className="w-4 h-4 text-[#F5A623]" />
                  <span>Headquarters: <strong>{sections.headquarters || 'Dutse, Nigeria'}</strong></span>
                </div>
              </div>
            </div>

            {/* Logo Showcase Card Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#06101E] p-8 sm:p-10 border border-neutral-800 shadow-xl text-center space-y-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#F5A623]/20 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="relative p-6 rounded-2xl bg-white shadow-lg border border-[#F5A623]/40 inline-flex items-center justify-center">
                    <div className="relative w-56 sm:w-64 h-16 sm:h-20">
                      <Image
                        src={sections.brandLogo || '/sardauna-logo.png'}
                        alt="Sardauna Tech Lab Ltd"
                        fill
                        className="object-contain"
                        priority
                        unoptimized={!!sections.brandLogo?.startsWith('data:')}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white tracking-tight">Sardauna Tech Lab Ltd</h3>
                    <p className="text-xs text-[#F5A623] font-medium uppercase tracking-wider">
                      Enterprise Software &bull; Digital Systems
                    </p>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xs mx-auto">
                    A company committed to disciplined engineering, automated business workflows, and high-impact digital systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Mission & Vision Section */}
      <section id="mission" className="scroll-mt-24 bg-[#F9FAFB] py-20 md:py-24 border-b border-neutral-200">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#06101E] flex items-center justify-center text-[#F5A623] shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[12px] font-semibold tracking-widest text-[#F5A623] uppercase">Our Mission</p>
                <h3 className="text-2xl font-bold text-[#111827] tracking-tight mt-1">What drives our work</h3>
              </div>
              <p className="text-base text-[#4B5563] leading-relaxed font-normal">
                {sections.missionStatement}
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#06101E] flex items-center justify-center text-[#F5A623] shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[12px] font-semibold tracking-widest text-[#F5A623] uppercase">Our Vision</p>
                <h3 className="text-2xl font-bold text-[#111827] tracking-tight mt-1">Where we are headed</h3>
              </div>
              <p className="text-base text-[#4B5563] leading-relaxed font-normal">
                {sections.visionStatement}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Professional Team Architecture Section (2 at Top, 6 Below) */}
      <section id="leadership" className="scroll-mt-24 bg-white py-20 md:py-28 border-b border-neutral-200">
        <Container size="lg">
          <div className="max-w-3xl mb-14">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase mb-2">
              Our Team &amp; Leadership
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
              The engineers, designers, and strategists behind our systems.
            </h2>
            <p className="text-base text-[#4B5563] mt-2 font-normal">
              A unified team dedicated to engineering excellence, operational rigor, and dependable delivery.
            </p>
          </div>

          {/* Top Row: Executive Leaders */}
          {leadership.length > 0 && (
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-5">
                Executive Leadership
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {leadership.map((leader) => (
                  <div 
                    key={leader.id || leader.name}
                    className="group p-8 rounded-3xl bg-[#F9FAFB] border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-[#F5A623]/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
                  >
                    <TeamAvatar
                      name={leader.name}
                      image={leader.image}
                      accentColor={leader.accentColor}
                      size="lg"
                    />

                    <div className="space-y-2">
                      <div>
                        <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#06101E] transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-[13px] font-semibold text-[#F5A623] mt-0.5">
                          {leader.role}
                        </p>
                      </div>
                      <p className="text-sm text-[#4B5563] leading-relaxed font-normal">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Grid: Engineering & Product Specialists */}
          {specialists.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-5">
                Engineering &amp; Product Team
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialists.map((member) => (
                  <div 
                    key={member.id || member.name}
                    className="group p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#F5A623]/40 transition-all duration-200 flex items-center gap-4"
                  >
                    <TeamAvatar
                      name={member.name}
                      image={member.image}
                      accentColor={member.accentColor}
                      size="md"
                    />

                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#111827] group-hover:text-[#06101E] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#F5A623]">
                        {member.role}
                      </p>
                      <p className="text-[11px] text-[#6B7280] pt-0.5 font-medium">
                        {member.specialty || member.department}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 5. Core Values & Principles */}
      <section id="values" className="scroll-mt-24 bg-[#F9FAFB] py-20 md:py-24 border-b border-neutral-200">
        <Container size="lg">
          <div className="max-w-2xl mb-12">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-widest text-[#F5A623] uppercase mb-2">
              Operating Principles
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              Values that guide our engineering culture.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2.5">
                <h3 className="text-base font-bold text-[#111827]">{v.title}</h3>
                <p className="text-[14px] text-[#4B5563] leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Bottom CTA */}
      <section className="bg-[#06101E] text-white py-20">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white">Work with Sardauna Tech Lab</h3>
              <p className="text-sm text-[#94A3B8] mt-1 font-normal">
                Let&apos;s build dependable technology for your organization.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all shrink-0 shadow-md"
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
