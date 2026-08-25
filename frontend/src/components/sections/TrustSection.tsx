import React from 'react';
import { ShieldCheck, FileCode, Lock, Building, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeader } from '../ui/Container';

export const TrustSection: React.FC = () => {
  const commitments = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F5A623]" />,
      title: 'Corporate Legal Registration',
      desc: 'Officially registered under the Corporate Affairs Commission of Nigeria (RC: 9161899) with physical headquarters in Dutse, Jigawa State.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#F5A623]" />,
      title: 'Confidentiality & Strict NDAs',
      desc: 'Every client project is protected by binding Non-Disclosure Agreements, safeguarding your trade secrets, proprietary workflows, and data.'
    },
    {
      icon: <FileCode className="w-6 h-6 text-[#F5A623]" />,
      title: '100% Client IP & Source Ownership',
      desc: 'You maintain full, unencumbered ownership of all custom codebase, database schemas, visual designs, and digital assets upon project completion.'
    },
    {
      icon: <Building className="w-6 h-6 text-[#F5A623]" />,
      title: 'Disciplined Project Governance',
      desc: 'Structured sprint milestones, transparent progress reporting, and clear contractual deliverables eliminate scope creep and unexpected delays.'
    }
  ];

  return (
    <section className="bg-[#F8FAFC] text-[#0F172A] py-20 md:py-28 border-b border-[#E2E8F0]">
      <Container size="lg">
        <SectionHeader
          eyebrow="Credibility & Governance"
          title="Built on transparency, security, and accountability."
          description="We provide enterprise clients with the contractual confidence, security protocols, and intellectual property protections necessary for serious software partnerships."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-corporate-sm hover:border-[#CBD5E1] transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#06101E] flex items-center justify-center mb-5 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
