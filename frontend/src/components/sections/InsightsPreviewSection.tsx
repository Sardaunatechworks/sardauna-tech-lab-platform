import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Container, SectionHeader } from '../ui/Container';

export const InsightsPreviewSection: React.FC = () => {
  const articles = [
    {
      slug: 'building-practical-software-emerging-markets',
      category: 'Software Engineering',
      title: 'Building Practical Software for Real-World Operational Realities',
      excerpt: 'Why software for emerging markets must prioritize low network latency, robust offline resilience, and straightforward interfaces over superficial complexity.',
      date: 'May 12, 2025',
      readTime: '6 min read'
    },
    {
      slug: 'database-architecture-sme-retail-erps',
      category: 'Database Architecture',
      title: 'Designing High-Integrity Database Architectures for Multi-Branch Retail ERPs',
      excerpt: 'Technical considerations when modeling inventory concurrency, debt ledgers, and transaction isolation in high-volume retail environments.',
      date: 'Apr 28, 2025',
      readTime: '8 min read'
    },
    {
      slug: 'secure-qr-ticketing-high-throughput-gates',
      category: 'Security & Access Systems',
      title: 'Cryptographic QR Verification for High-Density Event Entry Gates',
      excerpt: 'How EventPass structures encrypted offline validation hashes to achieve sub-second gate check-ins without depending on active cellular connections.',
      date: 'Apr 10, 2025',
      readTime: '7 min read'
    }
  ];

  return (
    <section className="bg-white text-[#0F172A] py-20 md:py-28 border-b border-[#E2E8F0]">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[13px] font-semibold tracking-wider text-[#F5A623] uppercase mb-3">
              Insights &amp; Perspectives
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Engineering thoughts from our team.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F172A] hover:text-[#D97706] transition-colors"
          >
            Browse all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Link
              key={art.slug}
              href={`/insights/${art.slug}`}
              className="group bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 hover:bg-white hover:border-[#CBD5E1] hover:shadow-corporate-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-3">
                  <span className="font-bold text-[#D97706] uppercase tracking-wider text-[11px]">{art.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-3 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                <span className="text-[#64748B]">{art.date}</span>
                <span className="font-bold text-[#0F172A] group-hover:text-[#D97706] inline-flex items-center gap-1">
                  Read Article <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
