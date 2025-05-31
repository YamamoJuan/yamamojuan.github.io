import React, { useState } from 'react';
import Head from 'next/head';

export default function TikTokDownloaderPage() {
  const [videoURL, setVideoURL] = useState('');
  const [loading, setLoading] = useState(false);

  const sanitizeFileName = (name) => {
    // Hapus karakter yang tidak valid untuk nama file
    return name.replace(/[^a-zA-Z0-9-_ ]/g, '').replace(/\s+/g, '_');
  };

  const handleDownload = async () => {
    if (!videoURL || !videoURL.includes('tiktok.com')) {
      alert('Masukkan URL TikTok yang valid.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/download-tiktok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoURL }),
      });

      const data = await res.json();

      if (!res.ok || !data.videoUrl) {
        alert(data.message || 'Gagal mengambil video.');
        return;
      }

      // Buat nama file dari author dan caption
      const author = sanitizeFileName(data.author || 'tiktokuser');
      const title = sanitizeFileName(data.description || 'video');
      const fileName = `${author}_${title}`.substring(0, 100); // batasin panjang file name

      // Fetch video sebagai blob
      const videoRes = await fetch(data.videoUrl);
      const blob = await videoRes.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${fileName}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>TikTok Downloader</title>
      </Head>

      <div className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-300">
            TikTok Downloader
          </h1>

          <p className="mb-6 text-sm md:text-xl font-medium">
            Tinggal paste link tiktok, terus download.
          </p>

          <input
            type="url"
            placeholder="https://www.tiktok.com/..."
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
          />

          <button
            onClick={handleDownload}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-200"
            disabled={loading}
          >
            {loading ? 'Mengunduh...' : 'Download'}
          </button>
        </div>
      </div>
    </>
  );
}
