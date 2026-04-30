import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-[#E51636] text-white hover:bg-red-700 shadow-lg shadow-red-100',
      secondary: 'bg-white border-2 border-slate-100 text-slate-700 hover:border-red-100',
      outline: 'border-2 border-[#E51636] text-[#E51636] hover:bg-red-50',
      ghost: 'text-[#E51636] hover:bg-red-50',
    };

    const sizes = {
      sm: 'px-5 py-2 text-sm font-bold',
      md: 'px-8 py-4 text-sm font-bold',
      lg: 'px-10 py-5 text-base font-bold',
      icon: 'p-2',
    };

    const roundedClass = size === 'lg' || variant === 'secondary' ? 'rounded-2xl' : 'rounded-full';

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        className={cn(
          'inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#E51636] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          roundedClass,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
