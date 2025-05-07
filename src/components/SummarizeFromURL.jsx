// components/SummarizeFromURL.jsx
import React, { useState } from 'react';

const SummarizeFromURL = () => {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setSummary('');

    try {
      const response = await fetch(`/api/summarize-url`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSummary(data.summary);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Summarize from URL</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="url"
          className="w-full border p-2 rounded"
          placeholder="Enter article URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Summarize
        </button>
      </form>
      {loading && <p className="mt-4 text-sm text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      {summary && (
        <div className="mt-4">
          <h3 className="font-semibold">Summary:</h3>
          <p style={{whiteSpace: "pre-line"}}>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummarizeFromURL;
