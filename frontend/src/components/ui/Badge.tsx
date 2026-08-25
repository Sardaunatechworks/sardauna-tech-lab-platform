import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'neutral' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-medium'
  };

  const variantStyles = {
    gold: 'bg-[#F5A623]/10 text-[#B45309] border border-[#F5A623]/20',
    navy: 'bg-[#06101E] text-white border border-neutral-800',
    neutral: 'bg-neutral-100 text-[#4B5563] border border-neutral-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    outline: 'bg-transparent text-[#6B7280] border border-neutral-300'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
