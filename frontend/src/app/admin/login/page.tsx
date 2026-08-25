'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ShieldCheck, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Authenticate with Sanctum API / Demo simulation
    setTimeout(() => {
      if (email.includes('@') && password.length >= 6) {
        localStorage.setItem('stl_admin_token', 'demo_token_' + Date.now());
        localStorage.setItem('stl_admin_user', JSON.stringify({
          name: 'Muhammad Auwal Abubakar',
          email: email,
          role: 'super_admin'
        }));
        router.push('/admin');
      } else {
        setError('Invalid administrative credentials. Please verify your email and password.');
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F8FAFC] py-16 px-4">
      <div className="w-full max-w-md bg-white rounded-xl border border-[#E2E8F0] p-8 sm:p-10 shadow-corporate-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-[#F5A623]/40 p-1 flex items-center justify-center mx-auto shadow-sm">
            <img
              src="/sardauna-logo.png"
              alt="Sardauna Tech Lab"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Administrative CMS Portal
          </h1>
          <p className="text-xs text-[#64748B]">
            Authorized Sardauna Tech Lab internal personnel only.
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0F172A] mb-1">Corporate Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="admin@sardaunatechlabs.com.ng"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0F172A] mb-1">Security Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3 pointer-events-none" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
              />
            </div>
          </div>

          <Button type="submit" size="md" variant="primary" fullWidth isLoading={isLoading}>
            Sign In to CMS Portal
          </Button>
        </form>

        <div className="pt-4 border-t border-[#F1F5F9] text-center text-[11px] text-[#64748B] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Protected by 256-bit TLS encryption & session token audit</span>
        </div>
      </div>
    </div>
  );
}
