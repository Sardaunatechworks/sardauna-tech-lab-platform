import React from 'react';
import Link from 'next/link';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  hoverEffect?: boolean;
  surface?: 'light' | 'dark' | 'warm';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  href,
  hoverEffect = true,
  surface = 'light',
  padding = 'md',
  className = '',
  ...props
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-9'
  };

  const surfaceStyles = {
    light: 'bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] shadow-corporate-sm',
    warm: 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]',
    dark: 'bg-[#0D1E38] border border-white/10 text-[#F8FAFC]'
  };

  const hoverStyles = hoverEffect
    ? surface === 'dark'
      ? 'hover:-translate-y-1 hover:border-[#F5A623]/40 transition-all duration-200'
      : 'hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-corporate-md transition-all duration-200'
    : '';

  const baseStyles = `relative rounded-xl ${surfaceStyles[surface]} ${paddingStyles[padding]} ${hoverStyles} overflow-hidden flex flex-col ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={`group block ${baseStyles}`}>
        {children}
      </Link>
    );
  }

  return (
    <div className={baseStyles} {...props}>
      {children}
    </div>
  );
};
