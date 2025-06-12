// pages/api/admin/comments.js

import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token diperlukan' });
  }

  const token = authHeader.split(' ')[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    const filePath = path.join(process.cwd(), 'data', 'comments.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const comments = JSON.parse(fileData);

    return res.status(200).json({ comments });
  } catch (err) {
    return res.status(403).json({ message: 'Token tidak valid' });
  }
}
