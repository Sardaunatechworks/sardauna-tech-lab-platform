import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sardauna Tech Lab Ltd',
  description: 'Privacy Policy and data governance practices of Sardauna Tech Lab Ltd (RC: 9161899).'
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-[#06101E] text-white pt-16 pb-16 border-b border-white/10">
        <Container size="md">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
            Last Updated: August 2026 &bull; Sardauna Tech Lab Ltd (RC: 9161899)
          </p>
        </Container>
      </section>

      <section className="bg-white text-[#0F172A] py-16">
        <Container size="md">
          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-[#334155] space-y-6">
            <h2 className="text-lg font-bold text-[#0F172A]">1. Corporate Commitment</h2>
            <p>
              Sardauna Tech Lab Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;the Company&quot;), incorporated under the laws of the Federal Republic of Nigeria (CAC RC: 9161899), operates the website <code>sardaunatechlabs.com.ng</code> and associated digital services. We are committed to protecting the privacy, confidentiality, and security of information provided by our clients, partners, and visitors.
            </p>

            <h2 className="text-lg font-bold text-[#0F172A]">2. Information We Collect</h2>
            <p>
              When you interact with our website or submit project enquiries, we may collect business contact information including your name, corporate email address, telephone number, organization name, and system requirements. For employment applications, we collect resumes, portfolios, and professional backgrounds.
            </p>

            <h2 className="text-lg font-bold text-[#0F172A]">3. Use of Collected Data</h2>
            <p>
              Information collected is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to technical enquiries, RFPs, and service requests.</li>
              <li>Evaluate employment applications and engineering candidate profiles.</li>
              <li>Maintain platform security, prevent unauthorized access, and fulfill legal compliance obligations.</li>
            </ul>

            <h2 className="text-lg font-bold text-[#0F172A]">4. Non-Disclosure & Confidentiality</h2>
            <p>
              All proprietary project information, intellectual property, and architectural requirements shared with Sardauna Tech Lab Ltd are treated under strict confidentiality protocols. We never sell or lease client data to third parties.
            </p>

            <h2 className="text-lg font-bold text-[#0F172A]">5. Contact Governance</h2>
            <p>
              If you have inquiries regarding this policy or wish to exercise data rights, contact our Data Governance Officer at <code>contact@sardaunatechlabs.com.ng</code> or by post at Dutse, Jigawa State, Nigeria.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
