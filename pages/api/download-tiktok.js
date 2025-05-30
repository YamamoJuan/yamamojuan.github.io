export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { url } = req.body;
  
    if (!url || !url.includes('tiktok.com')) {
      return res.status(400).json({ message: 'URL TikTok tidak valid.' });
    }
  
    try {
      const api = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`;
      const response = await fetch(api);
      const data = await response.json();
  
      if (!data || data.code !== 0 || !data.data?.play) {
        return res.status(400).json({ message: 'Gagal mengambil data dari TikTok.' });
      }
  
      return res.status(200).json({
        videoUrl: data.data.play,
        thumbnail: data.data.cover,
        description: data.data.title || 'video',
        author: data.data.author?.unique_id || data.data.author?.nickname || 'tiktokuser',
      });
    } catch (err) {
      console.error('Error fetching TikTok video:', err);
      return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil video.' });
    }
  }
  