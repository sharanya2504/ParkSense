// src/components/ui/button.jsx
import React from 'react';

const Button = ({ children, onClick, className, variant = 'primary', size = 'md' }) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold focus:outline-none';
  const variantClasses = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white';
  const sizeClasses = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
