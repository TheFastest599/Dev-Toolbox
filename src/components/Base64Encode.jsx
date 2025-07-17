import React, { useState } from 'react';

const Base64Encode = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const HOST = import.meta.env.VITE_API_HOST || '';

  const handleEncode = async () => {
    setError('');
    setOutput('');
    try {
      const res = await fetch(HOST + '/encode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      if (data.success) {
        setOutput(data.result);
      } else {
        setError(data.error || 'Error');
      }
    } catch {
      setError('Server error');
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-32 p-3 border-2 border-blue-200 dark:border-purple-800 rounded-xl bg-gray-100 dark:bg-gray-900 text-base font-mono mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-600 transition"
        placeholder="Enter plain text..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="flex gap-3 mb-4">
        <button
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow hover:scale-105 transition-transform duration-200"
          onClick={handleEncode}
        >
          Encode
        </button>
        {output && (
          <button
            className="px-5 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl font-semibold shadow hover:scale-105 transition-transform duration-200"
            onClick={() => copyToClipboard(output)}
          >
            Copy
          </button>
        )}
      </div>
      {error && <div className="text-red-500 mb-2 font-semibold">{error}</div>}
      {output && (
        <pre className="w-full p-3 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 rounded-xl text-base font-mono overflow-x-auto border-2 border-blue-100 dark:border-purple-900 shadow-inner">
          {output}
        </pre>
      )}
    </div>
  );
};

export default Base64Encode;
