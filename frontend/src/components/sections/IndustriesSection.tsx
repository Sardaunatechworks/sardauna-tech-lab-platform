import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShoppingBag, 
  Hotel, 
  Ticket, 
  GraduationCap, 
  Landmark, 
  HeartHandshake, 
  Rocket, 
  Briefcase 
} from 'lucide-react';
import { Container, SectionHeader } from '../ui/Container';

export const IndustriesSection: React.FC = () => {
  const industries = [
    { name: 'Small & Medium Enterprises', desc: 'Custom digital platforms and ERP systems that organize sales, operations, and stock.', icon: <Building2 className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'Retail & Commerce', desc: 'Point of sale, inventory tracking, and multi-branch sales systems for retailers and wholesalers.', icon: <ShoppingBag className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'Hospitality & Services', desc: 'Booking, operations management, customer service platforms, and billing workflows.', icon: <Hotel className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'Events & Entertainment', desc: 'Registration, digital ticketing, QR check-in, and attendee management systems.', icon: <Ticket className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'Education & Training', desc: 'Portals, student records, learning platforms, and institutional administrative systems.', icon: <GraduationCap className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'Government & Public Sector', desc: 'Secure public registries, institutional workflow platforms, and citizen service portals.', icon: <Landmark className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'NGOs & Non-Profits', desc: 'Project tracking, beneficiary registration, reporting tools, and secure data management.', icon: <HeartHandshake className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'Startups & Ventures', desc: 'Product MVPs, scalable architectures, and rapid engineering from prototype to launch.', icon: <Rocket className="w-5 h-5 text-[#F5A623]" /> },
    { name: 'Professional Services', desc: 'Client management, document workflows, billing portals, and specialized software systems.', icon: <Briefcase className="w-5 h-5 text-[#F5A623]" /> },
  ];

  return (
    <section className="bg-white text-[#0F172A] py-20 md:py-28 border-b border-[#E2E8F0]">
      <Container size="lg">
        <SectionHeader
          eyebrow="Sectors & Domains"
          title="Engineered for industry-specific realities."
          description="We tailor digital platforms to the unique operational workflows, regulatory compliance, and customer touchpoints of diverse sectors."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 hover:bg-white hover:border-[#CBD5E1] hover:shadow-corporate-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#06101E] flex items-center justify-center mb-4 shadow-sm">
                {ind.icon}
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                {ind.name}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
