import React from 'react';

export function Card({ children, className = '', ...props }) {
  return (
    <div 
      className={`border rounded-lg shadow-md p-4 bg-white ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div 
      className={`border-b pb-2 mb-2 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h2 
      className={`text-xl font-bold ${className}`} 
      {...props}
    >
      {children}
    </h2>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div 
      className={`${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}