'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, Mail, ShieldCheck, AlertCircle, Eye, EyeOff, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { loginAdmin, getAdminToken } from '@/lib/auth';

function LoginFormContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get('redirect') || '/admin';
  const reason = searchParams.get('reason');

  useEffect(() => {
    // If already authenticated, redirect straight to dashboard
    const existingToken = getAdminToken();
    if (existingToken) {
      router.replace(redirectUrl);
    }

    if (reason === 'session_expired') {
      setNotice('Your security session has expired. Please authenticate again to access the dashboard.');
    } else if (reason === 'unauthorized') {
      setNotice('Administrative privileges required. Please sign in with an authorized corporate account.');
    }
  }, [reason, redirectUrl, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setNotice('');

    try {
      const result = await loginAdmin(email, password);

      if (result.success) {
        // Successful authentication
        router.replace(redirectUrl);
      } else {
        setError(result.message || 'Invalid administrative credentials. Please verify your email and password.');
        setIsLoading(false);
      }
    } catch {
      setError('An unexpected error occurred during authentication. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#F8FAFC] py-16 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-10 shadow-corporate-lg space-y-6">
        {/* Corporate Header */}
        <div className="text-center space-y-2">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-[#F5A623]/40 p-1 flex items-center justify-center mx-auto shadow-sm">
            <img
              src="/sardauna-logo.png"
              alt="Sardauna Tech Lab"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[11px] font-mono font-medium text-[#0F172A]">
            <KeyRound className="w-3 h-3 text-[#F5A623]" />
            <span>Administrative Governance</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            CMS Portal Sign In
          </h1>
          <p className="text-xs text-[#64748B]">
            Authorized Sardauna Tech Lab internal personnel only.
          </p>
        </div>

        {/* Informational Notice Banner */}
        {notice && (
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{notice}</span>
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0F172A] mb-1">Corporate Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="admin@sardaunatechlabs.com.ng"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0F172A] mb-1">Security Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all font-medium"
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <Button type="submit" size="md" variant="primary" fullWidth isLoading={isLoading}>
            Authenticate & Open Dashboard
          </Button>
        </form>

        {/* Security & Cryptographic Compliance Footer */}
        <div className="pt-4 border-t border-[#F1F5F9] text-center text-[11px] text-[#64748B] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Protected by 256-bit TLS encryption & session token audit</span>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[85vh] flex items-center justify-center bg-[#F8FAFC]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0F172A] border-t-transparent animate-spin" />
      </div>
    }>
      <LoginFormContent />
    </Suspense>
  );
}
