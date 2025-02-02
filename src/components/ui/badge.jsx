import React from "react";
export const Badge = ({ children, variant = "default", className }) => {
    const variants = {
      default: "bg-gray-200 text-gray-800",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-white",
      danger: "bg-red-500 text-white",
    };
    return (
      <span className={`px-2 py-1 text-sm font-semibold rounded ${variants[variant]} ${className}`}>
        {children}
      </span>
    );
  };