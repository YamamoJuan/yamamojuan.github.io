import { useState } from 'react';

export default function TikTokDownloader() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    if (!url.includes('tiktok.com')) {
      setError('Masukkan URL TikTok yang valid.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/download-tiktok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        throw new Error(data.message || 'Gagal mengambil video');
      }

      setResult(data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <p className="text-xl md:text-2xl text-center text-foreground mb-6">
        Tempel link video TikTok di bawah ini
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="url"
          placeholder="https://www.tiktok.com/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
          required
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl px-4 py-3 transition-all"
        >
          {loading ? 'Memproses...' : 'Download'}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-500 text-sm text-center">{error}</div>
      )}

      {result && (
        <div className="mt-6 bg-gray-100 rounded-xl p-4 text-center">
          <img
            src={result.thumbnail}
            alt="Video thumbnail"
            className="rounded-lg mb-4 w-full max-h-64 object-cover"
          />
          <p className="text-green-800 font-semibold mb-2">{result.description}</p>
          <a
            href={result.videoUrl}
            download
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-2 inline-block"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}
