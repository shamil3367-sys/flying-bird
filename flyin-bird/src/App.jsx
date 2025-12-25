import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreSection from './components/ExploreSection';
import TrendingPackages from './components/TrendingPackages';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ExploreSection />
      <TrendingPackages />
    </div>
  );
}

export default App;