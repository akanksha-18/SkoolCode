import React, { useState } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <div 
          key={toast.id}
          className={`
            p-4 rounded shadow-lg 
            ${toast.type === 'success' ? 'bg-green-500' : 
              toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'} 
            text-white
          `}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );

  return { ToastContainer, addToast };
}

export function Toaster() {
  const { ToastContainer } = useToast();
  return <ToastContainer />;
}