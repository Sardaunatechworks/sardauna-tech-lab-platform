import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    full: 'max-w-full'
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </div>
  );
};

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'auto',
  className = ''
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <p className="text-[13px] font-medium tracking-wide text-[#F5A623] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.2] ${
        isDark ? 'text-white' : 'text-[#1A1A1A]'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-[#94A3B8]' : 'text-[#6B7280]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
