import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'close' | 'menu';
  className?: string;
  isActive?: boolean;
}

const Button = ({ 
  children, 
  variant = 'default',
  className = '',
  isActive,
  ...props 
}: ButtonProps) => {
  const baseStyles = "transition-colors duration-200";
  
  const variants = {
    default: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
    close: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none",
    menu: "group z-[60] scale-150 cursor-pointer hover:transition-transform hover:scale-125"
  };

  const finalClassName = clsx(
    baseStyles,
    variants[variant],
    className,
    {
      'hidden': variant === 'menu' && isActive,
      'fixed': variant === 'menu' && isActive && className?.includes('close')
    }
  );

  return (
    <button 
      className={finalClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 