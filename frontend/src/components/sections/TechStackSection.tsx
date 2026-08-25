import React from 'react';
import { Container, SectionHeader } from '../ui/Container';

export const TechStackSection: React.FC = () => {
  const domains = [
    {
      category: 'Frontend Engineering',
      tools: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend & APIs',
      tools: ['Laravel 11', 'PHP 8.3', 'Node.js', 'REST APIs', 'Sanctum Auth']
    },
    {
      category: 'Databases & Storage',
      tools: ['MySQL', 'PostgreSQL', 'Redis Cache', 'S3 Compatible Storage']
    },
    {
      category: 'Infrastructure & Cloud',
      tools: ['DirectAdmin 8GB', 'Nginx Web Server', 'SSL / TLS', 'Git CI/CD']
    },
    {
      category: 'Product Design & AI',
      tools: ['Figma', 'Design Systems', 'Python Automation', 'LLM Integration']
    }
  ];

  return (
    <section className="bg-[#0A192F] text-white py-20 md:py-28 border-b border-white/10">
      <Container size="lg">
        <SectionHeader
          eyebrow="Technology Foundation"
          title="Battle-tested, modern engineering tools."
          description="We select technology stacks based on performance, long-term maintainability, community security support, and operational reliability."
          align="center"
          theme="dark"
        />

        {/* 5-Column Categorized Domain Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.category}
              className="bg-[#06101E] rounded-xl border border-white/10 p-5 space-y-4 shadow-corporate-sm"
            >
              <h3 className="text-xs font-bold font-mono text-[#F5A623] uppercase tracking-wider border-b border-white/10 pb-2">
                {domain.category}
              </h3>
              <ul className="space-y-2">
                {domain.tools.map((tool) => (
                  <li key={tool} className="text-xs text-[#CBD5E1] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F5A623]"></span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
