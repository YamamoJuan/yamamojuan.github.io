import { useState } from "react";

export default function CommentPage() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [comments, setComments] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { id: Date.now(), name, msg };
    setComments([newComment, ...comments]);
    setSubmitted(true);
    setName("");
    setMsg("");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6">
      <div className="max-w-xl mx-auto bg-[rgba(132,130,129,0.16)] backdrop-blur-md border border-[#3C8D79] rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">📝 Tinggalkan Komentar</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-transparent border border-[#3C8D79] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C8D79]"
            required
          />
          <textarea
            placeholder="Komentar"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full p-2 h-28 rounded bg-transparent border border-[#3C8D79] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C8D79]"
            required
          />
          <button
            type="submit"
            className="bg-[#3C8D79] hover:bg-[#47a819] text-white px-4 py-2 rounded"
          >
            Kirim
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-[#3C8D79]">✅ Makasih udah berkomentar!</p>
        )}
      </div>

      {comments.length > 0 && (
        <div className="max-w-xl mx-auto mt-6 bg-[rgba(132,130,129,0.16)] backdrop-blur-md border border-[#3C8D79] rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-3 text-white">
            💬 Komentar kamu & lainnya:
          </h2>
          {comments.map((c) => (
            <div
              key={c.id}
              className="border-b border-[#3C8D79] py-2 last:border-none"
            >
              <p className="font-bold text-[#3C8D79]">{c.name}:</p>
              <p>{c.msg}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
