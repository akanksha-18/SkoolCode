import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import TutorCharacterSelector from '../components/TutorCharacterSelector';

const HomePage = ({ apiKey, setApiKey, selectedTutor, setSelectedTutor }) => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    if (!apiKey) {
      alert('Please enter your API key before starting');
      return;
    }
    if (!selectedTutor) {
      alert('Please select a learning companion before starting');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 animate-fade-in">
            Python Adventures for Kids
          </h1>
          <div className="flex justify-center space-x-2 text-4xl">
            <span className="animate-bounce delay-100">🐍</span>
            <span className="animate-bounce delay-200">🚀</span>
          </div>
        </div>

        {/* Welcome Card */}
        <Card className="max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700">Welcome to Python Learning Land!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Python Adventures is an innovative, AI-powered learning platform designed specifically for children to explore 
              the magical world of programming. Our mission is to transform coding education into an exciting, interactive 
              journey that sparks curiosity and creativity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By combining personalized AI instruction, gamified lessons, and engaging character-based learning, we make 
              Python programming accessible, fun, and empowering for young minds. Each child gets a unique, adaptive 
              learning experience tailored to their interests and pace.
            </p>
          </CardContent>
        </Card>

        {/* Configuration Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* API Configuration Card */}
          <Card className="transform hover:scale-[1.02] transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-purple-700">API Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your AI API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  type="password"
                  className="w-full p-3 border border-purple-300 rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-all duration-300"
                />
                <p className="text-sm text-gray-500">
                  Recommended: Use environment variables in production
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Character Selection Card */}
          <Card className="transform hover:scale-[1.02] transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-purple-700">Choose Your Learning Companion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <TutorCharacterSelector
                  selectedTutor={selectedTutor}
                  setSelectedTutor={setSelectedTutor}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center py-8">
          <Button 
            onClick={handleStartLearning}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full
                     transform hover:scale-105 transition-all duration-300
                     shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            Start Learning Python!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;