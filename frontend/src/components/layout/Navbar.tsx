'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ArrowRight, 
  ChevronDown, 
  Building2, 
  Target, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { Container } from '../ui/Container';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setCompanyDropdownOpen(false);
    setMobileCompanyOpen(false);
  }, [pathname]);

  // Handle outside click for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCompanyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const companySubLinks = [
    { 
      name: 'About Us', 
      desc: 'Company background & overview', 
      href: '/company#about',
      icon: <Building2 className="w-4 h-4 text-[#F5A623]" />
    },
    { 
      name: 'Mission & Vision', 
      desc: 'Our engineering purpose & roadmap', 
      href: '/company#mission',
      icon: <Target className="w-4 h-4 text-[#F5A623]" />
    },
    { 
      name: 'Leadership & Team', 
      desc: 'Executive governance & architects', 
      href: '/company#leadership',
      icon: <Users className="w-4 h-4 text-[#F5A623]" />
    },
    { 
      name: 'Core Values', 
      desc: 'Operating principles & integrity', 
      href: '/company#values',
      icon: <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
    },
    { 
      name: 'Partners', 
      desc: 'Commercial & ecosystem partners', 
      href: '/partners',
      icon: <Building2 className="w-4 h-4 text-[#F5A623]" />
    }
  ];

  const standardNavLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/solutions' },
    { name: 'Work', href: '/work' },
    { name: 'Partners', href: '/partners' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' }
  ];

  const isCompanyActive = pathname === '/company' || pathname.startsWith('/company#');
  const isHomeActive = pathname === '/';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]' 
        : 'bg-white border-b border-neutral-200/70'
    }`}>
      <Container size="lg">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo & Emblem */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-neutral-200/80 p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#F5A623]/50 transition-all duration-300">
              <Image
                src="/sardauna-logo.png"
                alt="Sardauna Tech Lab"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] sm:text-[16px] tracking-tight text-[#06101E] group-hover:text-[#F5A623] transition-colors leading-tight">
                SARDAUNA
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-[#6B7280] uppercase leading-none">
                TECH LAB LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home Navigation Link */}
            <Link
              href="/"
              className={`relative px-3.5 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 ${
                isHomeActive 
                  ? 'text-[#06101E] font-semibold bg-neutral-100/90' 
                  : 'text-[#4B5563] hover:text-[#06101E] hover:bg-neutral-50'
              }`}
            >
              Home
              {isHomeActive && (
                <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-[#F5A623] rounded-full animate-fade-in" />
              )}
            </Link>
            {/* Company Link with Dropdown Menu */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 focus:outline-none ${
                  isCompanyActive || companyDropdownOpen
                    ? 'text-[#06101E] font-semibold bg-neutral-100/90' 
                    : 'text-[#4B5563] hover:text-[#06101E] hover:bg-neutral-50'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180 text-[#F5A623]' : ''}`} />
                {isCompanyActive && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-[#F5A623] rounded-full animate-fade-in" />
                )}
              </button>

              {/* Dropdown Menu Panel */}
              <div 
                className={`absolute top-full left-0 pt-2 w-72 transition-all duration-200 transform origin-top-left ${
                  companyDropdownOpen 
                    ? 'opacity-100 scale-100 pointer-events-auto' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl border border-neutral-200 p-2.5 shadow-xl space-y-1">
                  {companySubLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setCompanyDropdownOpen(false)}
                      className="group/sub flex items-start gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#06101E] flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:scale-105 group-hover/sub:bg-[#0A192F] transition-all">
                        {sub.icon}
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#111827] group-hover/sub:text-[#F5A623] transition-colors leading-snug">
                          {sub.name}
                        </div>
                        <div className="text-[11px] text-[#6B7280] leading-tight mt-0.5">
                          {sub.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 mt-1 border-t border-neutral-100 px-2 pb-1">
                    <Link
                      href="/company"
                      onClick={() => setCompanyDropdownOpen(false)}
                      className="text-xs font-semibold text-[#06101E] hover:text-[#F5A623] flex items-center justify-between"
                    >
                      <span>Full Company Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Nav Links */}
            {standardNavLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-[#06101E] font-semibold bg-neutral-100/90' 
                      : 'text-[#4B5563] hover:text-[#06101E] hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-[#F5A623] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Animated Morphing Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center text-[#06101E] hover:bg-neutral-100 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-[#06101E] rounded-full transition-all duration-300 ease-in-out origin-left ${
                  isOpen ? 'rotate-45 translate-x-[2px] translate-y-[-1px]' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#06101E] rounded-full transition-all duration-200 ease-in-out ${
                  isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#06101E] rounded-full transition-all duration-300 ease-in-out origin-left ${
                  isOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Animated Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-neutral-200 shadow-xl ${
          isOpen ? 'max-h-[600px] opacity-100 py-5' : 'max-h-0 opacity-0 py-0 border-transparent'
        }`}
      >
        <Container size="lg">
          <div className="space-y-1">
            {/* Mobile Home Link */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                isHomeActive 
                  ? 'text-[#06101E] font-semibold bg-neutral-100' 
                  : 'text-[#4B5563] hover:text-[#06101E] hover:bg-neutral-50'
              }`}
            >
              <span>Home</span>
              {isHomeActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>}
            </Link>

            {/* Mobile Company Accordion Item */}
            <div>
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                  isCompanyActive ? 'text-[#06101E] font-semibold bg-neutral-100' : 'text-[#4B5563] hover:text-[#06101E] hover:bg-neutral-50'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 text-[#6B7280] transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180 text-[#F5A623]' : ''}`} />
              </button>

              {/* Mobile Company Submenu */}
              {mobileCompanyOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-neutral-50/80 rounded-xl my-1 border border-neutral-100">
                  {companySubLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#4B5563] hover:text-[#06101E] rounded-lg"
                    >
                      <div className="w-5 h-5 rounded bg-[#06101E] flex items-center justify-center shrink-0">
                        {React.cloneElement(sub.icon, { className: 'w-3 h-3 text-[#F5A623]' })}
                      </div>
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard Mobile Nav Links */}
            {standardNavLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                    isActive 
                      ? 'text-[#06101E] font-semibold bg-neutral-100' 
                      : 'text-[#4B5563] hover:text-[#06101E] hover:bg-neutral-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-neutral-200 px-1">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-[14px] font-semibold bg-[#F5A623] hover:bg-[#E59819] text-[#06101E] rounded-xl transition-all shadow-sm"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
