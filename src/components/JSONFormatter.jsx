import React, { useState } from 'react';

const JSONFormatter = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [jsonError, setJsonError] = useState('');

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  // Use Vite env variable for API host, fallback to relative path
  const HOST = import.meta.env.VITE_API_HOST || '';

  const handleFormatJson = async () => {
    setJsonError('');
    setJsonOutput('');
    try {
      const res = await fetch(`${HOST}/format-json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ json: jsonInput }),
      });
      const data = await res.json();
      if (data.success) {
        setJsonOutput(data.formatted);
      } else {
        setJsonError(data.error || 'Invalid JSON');
      }
    } catch {
      setJsonError('Server error');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        JSON Formatter
      </h2>
      <textarea
        className="w-full h-32 p-3 border-2 border-blue-200 dark:border-purple-800 rounded-xl bg-gray-100 dark:bg-gray-900 text-base font-mono mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-600 transition"
        placeholder="Paste raw JSON here..."
        value={jsonInput}
        onChange={e => setJsonInput(e.target.value)}
      />
      <div className="flex gap-3 mb-4">
        <button
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow hover:scale-105 transition-transform duration-200"
          onClick={handleFormatJson}
        >
          Format
        </button>
        {jsonOutput && (
          <button
            className="px-5 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl font-semibold shadow hover:scale-105 transition-transform duration-200"
            onClick={() => copyToClipboard(jsonOutput)}
          >
            Copy
          </button>
        )}
      </div>
      {jsonError && (
        <div className="text-red-500 mb-2 font-semibold">{jsonError}</div>
      )}
      {jsonOutput && (
        <pre className="w-full p-3 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 rounded-xl text-base font-mono overflow-x-auto border-2 border-blue-100 dark:border-purple-900 shadow-inner">
          {jsonOutput}
        </pre>
      )}
    </div>
  );
};

export default JSONFormatter;
