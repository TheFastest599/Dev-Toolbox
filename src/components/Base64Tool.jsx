import React, { useState } from 'react';
import Base64Encode from './Base64Encode.jsx';
import Base64Decode from './Base64Decode.jsx';

const BASE64_TABS = [
  { name: 'Encode', key: 'encode' },
  { name: 'Decode', key: 'decode' },
];

const HOST = import.meta.env.VITE_API_HOST || '';

const Base64Tool = () => {
  const [baseMode, setBaseMode] = useState('encode');

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Base64 Encoder/Decoder
      </h2>
      <div className="flex justify-center gap-4 mb-4">
        {BASE64_TABS.map(t => (
          <button
            key={t.key}
            className={`px-6 py-2 rounded-full font-semibold text-lg shadow-md transition-all duration-200 ${
              baseMode === t.key
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-800 dark:hover:to-gray-900'
            }`}
            onClick={() => setBaseMode(t.key)}
          >
            {t.name}
          </button>
        ))}
      </div>
      {baseMode === 'encode' ? <Base64Encode /> : <Base64Decode />}
    </div>
  );
};

export default Base64Tool;
