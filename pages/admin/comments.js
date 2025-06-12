// pages/admin/comments.js

import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminComments() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/login", {
        username: "admin",
        password: password,
      });

      setToken(res.data.token);
      fetchComments(res.data.token);
      setError("");
    } catch (err) {
      setError("Login gagal. Coba lagi.");
    }
  };

  const fetchComments = async (token) => {
    try {
      const res = await axios.get("/api/admin/comments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(res.data.comments);
    } catch (err) {
      setError("Gagal mengambil komentar.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/comments?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Gagal menghapus komentar.");
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/admin/comments",
        { name, msg },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments([res.data.comment, ...comments]);
      setName("");
      setMsg("");
    } catch (err) {
      alert("Gagal menambahkan komentar.");
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        <form
          onSubmit={handleLogin}
          className="bg-[rgba(132,130,129,0.16)] border border-[#3C8D79] p-6 rounded-xl w-80"
        >
          <h2 className="text-xl font-bold mb-4">🔐 Admin Login</h2>
          <input
            type="password"
            placeholder="Password Admin"
            className="w-full mb-3 p-2 rounded border border-[#3C8D79] bg-transparent text-white placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#3C8D79] hover:bg-[#47a819] text-white py-2 rounded"
          >
            Masuk
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 text-[var(--foreground)]">
      <h1 className="text-2xl font-bold mb-4">📋 Panel Komentar</h1>

      <form onSubmit={handleAddComment} className="mb-6 space-y-2 max-w-xl">
        <h2 className="text-lg font-semibold">➕ Tambah Komentar Manual</h2>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-transparent border border-[#3C8D79] text-white placeholder-gray-300"
          required
        />
        <textarea
          placeholder="Pesan"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full p-2 h-24 rounded bg-transparent border border-[#3C8D79] text-white placeholder-gray-300"
          required
        />
        <button
          type="submit"
          className="bg-[#3C8D79] hover:bg-[#47a819] text-white px-4 py-2 rounded"
        >
          Tambah
        </button>
      </form>

      {comments.length === 0 ? (
        <p>Tidak ada komentar.</p>
      ) : (
        <ul className="space-y-2 max-w-xl">
          {comments.map((c) => (
            <li
              key={c.id}
              className="bg-[rgba(132,130,129,0.16)] p-3 border border-[#3C8D79] rounded"
            >
              <p className="font-bold text-[#3C8D79]">{c.name}</p>
              <p>{c.msg}</p>
              <button
                onClick={() => handleDelete(c.id)}
                className="mt-2 text-sm text-red-400 hover:underline"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
