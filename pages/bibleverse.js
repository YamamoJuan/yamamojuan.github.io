import { useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function BibleVerse() {
  const [verseData, setVerseData] = useState(null);
  const [allVerses, setAllVerses] = useState([]);

  const getRandomVerse = (verses) => {
    return verses[Math.floor(Math.random() * verses.length)];
  };

  const fetchVerses = async () => {
    try {
      const res = await fetch("/verses.json");
      const data = await res.json();
      setAllVerses(data);
      setVerseData(getRandomVerse(data));
    } catch (err) {
      console.error("Gagal ambil data:", err);
    }
  };

  const refreshVerse = () => {
    if (allVerses.length > 0) {
      const newVerse = getRandomVerse(allVerses);
      setVerseData(null); // trigger animation
      setTimeout(() => setVerseData(newVerse), 150); // delay for exit animation
    }
  };

  useEffect(() => {
    fetchVerses();
  }, []);

  return (
    <>
      <Head>
        <title>Renungan Ayat</title>
      </Head>
      <div className="flex flex-col min-h-screen items-center justify-center p-4">
        <div id="profile-box" className="max-w-md w-full border border-[#3C8D79] rounded-2xl p-6 text-center transition duration-300">
          <h1 className="text-xl font-bold mb-4 text-white">Renungan Hari Ini</h1>
          
          <AnimatePresence mode="wait">
            {verseData ? (
              <motion.div
                key={verseData.verse}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg md:text-xl font-semibold text-white mb-2">{verseData.verse}</p>
                <p className="text-base text-[#cbd5e1] italic mb-4">"{verseData.text}"</p>
                <p className="text-sm text-[#94a3b8]">{verseData.reflection}</p>
              </motion.div>
            ) : (
              <motion.p
                key="loading"
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Loading...
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={refreshVerse}
            className="mt-6 px-4 py-2 bg-[#3C8D79] text-white rounded-lg hover:bg-[#2e6f5e] transition"
          >
            Ganti Ayat
          </button>
        </div>
      </div>
    </>
  );
}
