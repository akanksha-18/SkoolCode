import React from "react";

export const ScrollArea = ({ children, className }) => {
  return (
    <div className={`overflow-auto max-h-60 p-2 border rounded-lg ${className}`}>
      {children}
    </div>
  );
};