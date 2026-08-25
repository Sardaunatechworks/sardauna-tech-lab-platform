import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-[#0F172A] py-20">
      <Container size="sm" className="text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#06101E] border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] text-2xl font-black mx-auto shadow-sm">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
          The requested system endpoint or corporate page could not be located. Please check the URL or return to the main platform navigation.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" size="md" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/services" size="md" variant="outline" leftIcon={<Compass className="w-4 h-4" />}>
            Explore Capabilities
          </Button>
        </div>
      </Container>
    </div>
  );
}
