import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Service | Sardauna Tech Lab Ltd',
  description: 'Terms of Service and commercial governance for Sardauna Tech Lab Ltd (RC: 9161899).'
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-[#06101E] text-white pt-16 pb-16 border-b border-white/10">
        <Container size="md">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Terms of Service</h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
            Effective Date: August 2026 &bull; Sardauna Tech Lab Ltd (RC: 9161899)
          </p>
        </Container>
      </section>

      <section className="bg-white text-[#0F172A] py-16">
        <Container size="md">
          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-[#334155] space-y-6">
            <h2 className="text-lg font-bold text-[#0F172A]">1. Agreement to Terms</h2>
            <p>
              By accessing the website <code>sardaunatechlabs.com.ng</code> or engaging Sardauna Tech Lab Ltd for software engineering, digital product development, or IT consultancy services, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h2 className="text-lg font-bold text-[#0F172A]">2. Scope of Services</h2>
            <p>
              Sardauna Tech Lab Ltd delivers customized software engineering, digital product design, process automation, and technology advisory services. Specific deliverables, payment schedules, and project timelines are governed by individual Master Services Agreements (MSAs) or Statements of Work (SOWs) executed between the Company and the Client.
            </p>

            <h2 className="text-lg font-bold text-[#0F172A]">3. Intellectual Property Rights</h2>
            <p>
              Upon final settlement of all agreed project milestones and contractual invoices, the Client maintains 100% ownership of the bespoke source code, database architectures, and digital assets developed exclusively for their project. Sardauna Tech Lab Ltd retains rights to its pre-existing proprietary frameworks, libraries, and tools.
            </p>

            <h2 className="text-lg font-bold text-[#0F172A]">4. Governing Law & Jurisdiction</h2>
            <p>
              These terms and all commercial agreements entered into with Sardauna Tech Lab Ltd shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>

            <h2 className="text-lg font-bold text-[#0F172A]">5. Corporate Address</h2>
            <p>
              Sardauna Tech Lab Ltd &bull; Corporate Affairs Commission RC: 9161899 &bull; Head Office: Dutse, Jigawa State, Nigeria.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
