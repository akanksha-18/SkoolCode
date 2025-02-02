import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, useToast } from './components/ui/toaster';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';

function App() {
  const [apiKey, setApiKey] = useState(
    localStorage.getItem('aiApiKey') || ''
  );
  const [selectedTutor, setSelectedTutor] = useState(
    localStorage.getItem('selectedTutor') || 'wizard'
  );
  const { addToast } = useToast();

  const updateApiKey = useCallback((key) => {
    setApiKey(key);
    localStorage.setItem('aiApiKey', key);
    addToast('API Key updated successfully', 'success');
  }, [addToast]);

  const updateSelectedTutor = useCallback((tutor) => {
    setSelectedTutor(tutor);
    localStorage.setItem('selectedTutor', tutor);
    addToast(`Tutor changed to ${tutor}`, 'info');
  }, [addToast]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                apiKey={apiKey}
                setApiKey={updateApiKey}
                selectedTutor={selectedTutor}
                setSelectedTutor={updateSelectedTutor}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                apiKey={apiKey}
                selectedTutor={selectedTutor}
              />
            }
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;