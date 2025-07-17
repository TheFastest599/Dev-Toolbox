import React from 'react';

const TabBar = ({ tabs, activeTab, setActiveTab }) => (
  <div className="flex justify-center mt-8 mb-6 gap-4">
    {tabs.map(t => (
      <button
        key={t.key}
        className={`px-2 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-lg shadow-md transition-all duration-200 ${
          activeTab === t.key
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105'
            : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-800 dark:hover:to-gray-900'
        }`}
        onClick={() => setActiveTab(t.key)}
      >
        {t.name}
      </button>
    ))}
  </div>
);

export default TabBar;
