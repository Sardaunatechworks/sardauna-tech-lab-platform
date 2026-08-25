import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { title: 'About Sardauna Tech Lab', href: '/company' },
    { title: 'Leadership & Team', href: '/company#leadership' },
    { title: 'Ecosystem Partners', href: '/partners' },
    { title: 'Careers & Openings', href: '/careers' },
    { title: 'Contact Us', href: '/contact' },
  ];

  const serviceLinks = [
    { title: 'Web & Product Engineering', href: '/services/web-development-engineering' },
    { title: 'Mobile Applications', href: '/services/mobile-application-development' },
    { title: 'Custom Enterprise Systems', href: '/services/custom-software-systems' },
    { title: 'UI/UX Design Systems', href: '/services/ui-ux-design' },
    { title: 'Technology Consultancy', href: '/services/it-consultancy' },
  ];

  const productLinks = [
    { title: 'EventPass Ticketing', href: '/solutions/eventpass' },
    { title: 'TraderERP Suite', href: '/solutions/tradererp' },
  ];

  const resourceLinks = [
    { title: 'Selected Case Studies', href: '/work' },
    { title: 'Engineering Insights', href: '/insights' },
    { title: 'Industry Solutions', href: '/industries' },
  ];

  return (
    <footer className="bg-[#040B15] text-[#94A3B8] pt-16 pb-12 border-t border-neutral-800">
      <Container size="lg">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-neutral-800 text-xs">
          {/* Brand Column with Official Logo */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-[#F5A623]/40 p-0.5 flex items-center justify-center shadow-sm">
                <Image
                  src="/sardauna-logo.png"
                  alt="Sardauna Tech Lab"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold tracking-tight text-white block">
                SARDAUNA TECH LAB
              </span>
            </Link>
            <div className="text-[#64748B] space-y-1 pt-1 leading-relaxed">
              <p>Headquarters: Dutse, Jigawa State, Nigeria</p>
              <p>
                <a href="mailto:contact@sardaunatechlabs.com.ng" className="hover:text-white transition-colors">
                  contact@sardaunatechlabs.com.ng
                </a>
              </p>
              <p>+234 701 967 2820</p>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-[11px]">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-[11px]">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-[11px]">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-[11px]">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            &copy; {currentYear} Sardauna Tech Lab Ltd. Registered under CAC Nigeria (RC: 9161899).
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
