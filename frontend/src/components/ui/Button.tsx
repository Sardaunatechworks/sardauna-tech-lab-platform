import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-dark' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-colors duration-150 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg tracking-tight';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-[14px] px-5 py-2.5 gap-2',
    lg: 'text-[15px] px-6 py-3.5 gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-[#F5A623] hover:bg-[#E59819] text-[#06101E]',
    secondary: 'bg-[#0A192F] hover:bg-[#112240] text-white border border-white/10',
    outline: 'bg-transparent hover:bg-[#FAFAF8] text-[#1A1A1A] border border-[#E8E8E4] hover:border-[#D4D4CF]',
    'outline-dark': 'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40',
    ghost: 'bg-transparent hover:bg-black/5 text-[#6B7280] hover:text-[#1A1A1A]',
    text: 'bg-transparent text-[#1A1A1A] hover:text-[#F5A623] p-0 font-medium'
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClass}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${combinedClass}`} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
