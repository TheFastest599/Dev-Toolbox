import React from 'react';

const Header = ({ dark, toggleDark }) => (
  <div className="flex justify-between items-center px-4 py-6 border-b border-transparent">
    <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
      Dev Toolbox
    </h1>
    <button
      className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform duration-200"
      onClick={toggleDark}
    >
      {document.documentElement.getAttribute('data-theme') === 'dark'
        ? '🌙 Dark'
        : '☀️ Light'}
    </button>
  </div>
);

export default Header;
