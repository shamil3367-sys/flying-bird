import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-200 via-blue-100 to-white py-20 px-6 overflow-hidden">
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-blue-900">Your </span>
          <span className="text-yellow-500">Journey,</span>
          <br />
          <span className="text-blue-900">Your </span>
          <span className="text-yellow-500">Way.</span>
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Countries, Cities"
              className="w-full pl-12 pr-4 py-4 border-2 border-blue-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>
        </div>

        <p className="text-gray-700 text-lg">
          Discover amazing destinations and create unforgettable memories
        </p>
      </div>
    </section>
  );
};

export default Hero;