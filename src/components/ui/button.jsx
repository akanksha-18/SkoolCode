import React from 'react';

export function Button({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'px-4 py-2 rounded';
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
  };
  const sizeStyles = {
    default: '',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}