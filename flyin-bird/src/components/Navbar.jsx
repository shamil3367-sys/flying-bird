import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
            <span className="text-2xl">✈️</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-blue-900">Flyinbird</span>
            </div>
            <span className="text-xs text-yellow-500 font-semibold">HOLIDAYS</span>
          </div>
        </div>

        {/* Currency */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 text-sm font-semibold text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50">
            £GBP
          </button>
          <button className="text-sm bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300">
            Quick Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;