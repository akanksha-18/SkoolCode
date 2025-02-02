import React, { useState } from 'react';

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div>
      <TabsList activeTab={activeTab} setActiveTab={setActiveTab}>
        {React.Children.map(children, child => 
          React.cloneElement(child, { activeTab, setActiveTab })
        )}
      </TabsList>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab })
      )}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab, className = '' }) {
  return (
    <div className={`grid w-full grid-cols-2 mb-6 ${className}`}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

export function TabsTrigger({ 
  children, 
  value, 
  activeTab, 
  setActiveTab,
  className = '' 
}) {
  return (
    <button
      className={`
        py-2 
        ${activeTab === value ? 'bg-purple-100' : ''} 
        ${className}
      `}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, activeTab }) {
  if (activeTab !== value) return null;
  return <div>{children}</div>;
}