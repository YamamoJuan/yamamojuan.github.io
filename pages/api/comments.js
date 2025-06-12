import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'comments.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const fileData = fs.readFileSync(filePath);
    const comments = JSON.parse(fileData);
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const { name, msg } = req.body;

    if (!name || !msg) {
      return res.status(400).json({ message: 'Name and message are required.' });
    }

    const fileData = fs.readFileSync(filePath);
    const comments = JSON.parse(fileData);

    const newComment = {
      id: Date.now(),
      name,
      msg,
      createdAt: new Date().toISOString(),
    };

    comments.unshift(newComment);
    fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));

    res.status(201).json({ message: 'Comment added!', comment: newComment });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
